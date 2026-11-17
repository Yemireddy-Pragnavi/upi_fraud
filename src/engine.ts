export type Finding = {id:string; title:string; detail:string; source:string; severity:'concern'|'caution'|'info'};
export type Result = {id:string; created_at:string; input:string; kind:string; status:string; classification:string; findings:Finding[]; fields:Record<string,string>; unknowns:string[]};
export type JourneyEvent={id:string; text:string; amount:number; recipient:string; date:string; agreed:boolean};
const f=(id:string,title:string,detail:string,severity:Finding['severity']='caution'):Finding=>({id,title,detail,severity,source:'Deterministic rule · submitted content'});
export function parseUPI(text:string){
 const value=text.trim(); if(!value.startsWith('upi://')) {if(!/^[a-zA-Z0-9._-]{2,256}@[a-zA-Z0-9.-]{2,64}$/.test(value)) throw Error('Enter a valid UPI URI or VPA.');return {pa:value};}
 const url=new URL(value); if(url.protocol!=='upi:'||url.hostname!=='pay')throw Error('Only upi://pay URIs are supported.');
 const result:Record<string,string>={}; for(const [k,v] of url.searchParams){if(k in result)throw Error('Ambiguous duplicate payment parameter: '+k);result[k]=v;}
 if(!result.pa||!/^[a-zA-Z0-9._-]{2,256}@[a-zA-Z0-9.-]{2,64}$/.test(result.pa))throw Error('Missing or invalid payee address.');
 if(result.am&&(!/^\d+(\.\d{1,2})?$/.test(result.am)||Number(result.am)<=0))throw Error('Invalid payment amount.');
 if(result.cu&&result.cu!=='INR')throw Error('Only INR is supported.');return result;
}
export function analyze(text:string,kind='message',expected:Record<string,string>={}):Result{
 if(!text.trim()||text.length>12000)throw Error('Enter 1–12,000 characters.');
 const findings:Finding[]=[]; let fields:Record<string,string>={}; const unknowns=['Recipient identity is not independently verified.','No bank account reputation source is connected.'];
 if(kind==='upi'||text.trim().startsWith('upi://')){fields=parseUPI(text);findings.push(f('UPI-01','Payment details decoded','The embedded name is supplied by the QR creator, not verified bank identity.','info'));for(const [key,val]of Object.entries(expected)){if(val.trim()&&(fields[key]||'').toLowerCase()!==val.trim().toLowerCase())findings.push(f('UPI-'+key,'Expected '+key+' does not match',`Expected ${val}; submitted ${fields[key]||'(missing)'}.`,'concern'));}}
 const urls=text.match(/https?:\/\/[^\s<>"']+/gi)||[];
 if(kind==='url'&&!urls.length)throw Error('Enter a complete http:// or https:// URL.');
 for(const raw of urls){let u:URL;try{u=new URL(raw)}catch{throw Error('Invalid URL.')} fields.hostname=u.hostname;fields.scheme=u.protocol;findings.push(f('URL-01','URL parsed without visiting it',u.hostname+' · '+u.protocol,'info'));if(u.protocol!=='https:')findings.push(f('URL-02','Unencrypted URL scheme','HTTP is declared. TLS availability was not tested.'));if(u.username||u.password)findings.push(f('URL-03','Embedded URL credentials','Credentials can obscure the actual destination.','concern'));if(u.hostname.includes('xn--'))findings.push(f('URL-04','Internationalized domain','Check the hostname carefully for lookalike characters.'));if(u.hostname==='localhost'||/^(127\.|10\.|192\.168\.|169\.254\.|0\.)/.test(u.hostname)||u.hostname.includes(':'))findings.push(f('URL-05','Local or special-use address','Remote scanning of this address is not permitted.','concern'));unknowns.push('Live reputation, TLS, redirects, domain age and website behavior were not checked.');}
 const rules:[RegExp,string,string,string][]=[[/\b(otp|upi pin|password|cvv)\b.*\b(send|share|tell|provide)\b|\b(send|share|tell|provide)\b.*\b(otp|upi pin|password|cvv)\b/i,'MSG-01','Authentication information requested','Do not share payment authentication information.'],[/urgent|immediately|last chance|within \d+ minutes|వెంటనే|తక్షణం|तुरंत|जल्दी/i,'MSG-02','Time pressure','The submitted wording pressures the recipient to act quickly.'],[/refund|refundable|రిఫండ్|वापस/i,'MSG-03','Refund promise','A refund claim is not evidence that a payment will be returned.'],[/registration fee|training fee|security deposit|advance fee/i,'MSG-04','Advance payment request','Confirm the purpose independently before paying.']];
 for(const[re,id,title,detail]of rules)if(re.test(text))findings.push(f(id,title,detail,id==='MSG-01'?'concern':'caution'));
 const amount=text.match(/(?:₹|INR|Rs\.?)[ ]*([\d,]+(?:\.\d{1,2})?)/i); if(amount&&!fields.am)fields.am=amount[1].replaceAll(',','');const vpa=text.match(/[a-zA-Z0-9._-]{2,256}@[a-zA-Z0-9.-]{2,64}/);if(vpa&&!fields.pa)fields.pa=vpa[0];
 return{id:crypto.randomUUID(),created_at:new Date().toISOString(),input:text,kind,status:'Partially Completed',classification:findings.some(x=>x.severity==='concern')?'High Concern':findings.some(x=>x.severity==='caution')?'Needs Verification':'Insufficient Evidence',findings,fields,unknowns:[...new Set(unknowns)]};
}
export function journeyFindings(events:JourneyEvent[]):Finding[]{
 const findings:Finding[]=[]; if(events.length<2)return findings;
 const unpaid=events.filter(e=>!e.agreed);if(unpaid.length>=2)findings.push(f('JRN-01','Repeated unagreed fees',`${unpaid.length} requests have not been marked as agreed payments.`));
 if(unpaid.length>=3&&unpaid.slice(1).every((e,i)=>e.amount>unpaid[i].amount))findings.push(f('JRN-02','Escalating payment demands','Successive unagreed amounts increase. Review the changed justifications.','concern'));
 if(new Set(events.map(e=>e.recipient.toLowerCase()).filter(Boolean)).size>1)findings.push(f('JRN-03','Recipient switching','Different user-entered recipients occur in this manually linked journey.'));
 if(unpaid.some(e=>/refund/i.test(e.text)))findings.push(f('JRN-04','Refund bait indicator','An unagreed request includes a refund promise.'));
 if(events.every(e=>e.agreed))findings.push(f('JRN-05','Agreed payment sequence','User marked each request as agreed. This reduces these pattern alerts but does not verify legitimacy.','info'));return findings;
}
export const samples=[{name:'Escalating job fees',messages:['Registration fee ₹499 to recruiter@upi','Training fee ₹1999 to recruiter@upi urgent','Refundable security deposit ₹5000 to manager@upi immediately']},{name:'Agreed milestones',messages:['Agreed design milestone ₹1000 to studio@upi','Agreed development milestone ₹2000 to studio@upi','Agreed delivery milestone ₹3000 to studio@upi']}];
