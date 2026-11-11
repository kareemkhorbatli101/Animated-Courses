AHL.lesson({
id:"u3r1", unit:3, kind:"reading", n:1,
title:"The first enquiry",
strap:"Eleven words, and nobody can answer them.",
tags:["enquiries","questions","writing"],
pre:[
 {t:"mcq", q:"An enquiry is …",
  opts:["a message asking a company for information","an order","an invoice","a complaint"], a:0},
 {t:"multi", q:"What must a good enquiry contain? (Choose three.)",
  opts:["what you want","how much you want","when you need it","how much you can pay"], a:[0,1,2]},
 {t:"mcq", q:"Which is correct?",
  opts:["Could you send me your price list, please?",
        "Could you to send me your price list?",
        "Could you sending me your price list?",
        "Could send you me your price list?"], a:0}
],
paras:[
 "One Tuesday morning an email arrives at Bashak. It is eleven words long: “Hello. We are interested in your steel. Please send prices. Regards.”",
 "Rami reads it twice. Then he says, “I cannot answer this.”",
 "Why not? Because steel is not one thing. Is it bar, plate or sheet? What grade? What size? How many tonnes? And for which country — the price with delivery to Beirut is not the price to Baghdad.",
 "An enquiry with no quantity and no destination is not a question. It is a hope.",
 "Rami does not throw the email away. He answers it, and his answer is six questions: What product? What grade or specification? What quantity? Where do you want it? When do you need it? And may I have your company name and telephone number?",
 "Two days later the answer comes back: eighty tonnes of plate, ten millimetres, to Beirut, in April. Now Rami can work. Now there is a price."
],
gloss:[["enquiry","a message asking for information"],["destination","the place where goods must go"],
       ["hope","a wish, not a plan"],["to work out","to calculate"]],
comp:[
 {t:"gap", q:"Complete the length of the first email.",
  gaps:[{before:"The first email is ", after:" words long.", a:["eleven","11"]}]},
 {t:"mcq", q:"Why can Rami not answer the first email?",
  opts:["Steel is not one thing, and there is no quantity or destination",
        "He does not know the company","It is in English","The customer is far away"], a:0},
 {t:"multi", q:"Which of Rami’s six questions are in his reply? (Choose four.)",
  opts:["What product?","What quantity?","Where do you want it?","When do you need it?"],
  a:[0,1,2,3]},
 {t:"tf", q:"Rami deletes the email.", a:false, why:"He answers it with six questions."},
 {t:"gap", q:"Complete the second email.",
  gaps:[{before:"Eighty tonnes of plate, ", after:" millimetres,", a:["ten","10"]},
        {before:" to Beirut, in ", after:".", a:["April"]}]},
 {t:"short", q:"Why does the text say an enquiry with no quantity is “a hope”, not a question?",
  model:"Because nobody can act on it. A question can be answered; this only says somebody is interested, and the seller still has to find out everything before a price exists."}
],
words:[
 {t:"gap", q:"Complete the question words.",
  bank:["What","Where","When","How many"],
  gaps:[{before:"", after:" product do you need?", a:["What"]},
        {before:"", after:" tonnes?", a:["How many"]},
        {before:"", after:" do you want it delivered?", a:["Where"]},
        {before:"", after:" do you need it?", a:["When"]}]},
 {t:"mcq", q:"Which request is the most polite?",
  opts:["Could you tell me the quantity, please?","Tell me the quantity.",
        "I want the quantity.","Quantity?"], a:0},
 {t:"match", q:"Match the question to what it finds out.",
  pairs:[["What grade?","the quality class"],["How many tonnes?","the quantity"],
         ["Where to?","the destination"],["When?","the date"]]}
],
post:[
 {t:"order", q:"Put the enquiry and the answer in order.",
  items:["A short email arrives, asking for prices",
         "The seller sees that nothing can be priced",
         "The seller answers with the missing questions",
         "The buyer sends product, quantity, place and date",
         "The seller works out a price"]},
 {t:"write", q:"Write a complete enquiry email of six lines for a product you buy.",
  model:"Dear Sir or Madam, We are a furniture workshop in Hama. We would like a price for 1.5 mm galvanised steel sheet, 2,000 × 1,000 mm, 40 sheets, delivered to Hama in April. Could you also tell me your lead time and your minimum order? Our telephone number is below. Best regards, Sana Khalil, Hama Woodworks"},
 {t:"short", q:"Rami’s reply is six questions. Could he have asked them all in one sentence? Why does he not?",
  model:"He could, but a wall of text gets a wall of silence. Six short, numbered questions are easy to answer one by one, and the buyer can see exactly what is still missing."}
]
});
