AHL.lesson({
id:"u3r5", unit:3, kind:"reading", n:5,
title:"The enquiry that forgot the quantity",
strap:"Two weeks, five emails, and a question that was never asked.",
tags:["enquiries","mistakes","questions"],
pre:[
 {t:"mcq", q:"What happens if nobody asks the quantity?",
  opts:["The price can be completely wrong",
        "Nothing","The delivery is late","The customer pays more"], a:0},
 {t:"match", q:"Match the phrase to its job.",
  pairs:[["Just to confirm …","checking you understood"],["Could I ask one more thing?","adding a question"],
         ["I assumed …","saying what you believed without asking"],["My mistake.","taking responsibility"]]},
 {t:"mcq", q:"Which is correct?",
  opts:["How many tonnes do you need?","How much tonnes do you need?",
        "How many tonne you need?","How much do you need tonnes?"], a:0}
],
paras:[
 "A trader in Amman writes to Bashak: “Please quote your best price for steel plate, 10 mm, grade as usual, delivered Amman.”",
 "Rami answers the same day with a price: six hundred and forty dollars a tonne. The trader says thank you. Nothing happens for ten days.",
 "Then the trader writes again. “We accept. Please deliver four hundred tonnes in May.”",
 "Four hundred tonnes. Rami reads it twice. His price was for eighty tonnes — one lorry route, one shipment, one set of papers. Four hundred tonnes is five times that, and the freight, the handling and the discount are all different.",
 "Nobody asked the quantity. The trader thought it was obvious. Rami thought “as usual” meant the usual size of order.",
 "The new price is six hundred and ten dollars. That is thirty dollars a tonne less — twelve thousand dollars on four hundred tonnes. The trader is happy. But two weeks and five emails have gone, and for ten days Bashak had a price on the table that was wrong.",
 "Rami adds one line to the enquiry form that evening: quantity is not an optional question."
],
gloss:[["to quote","to give a price"],["freight","the cost of moving goods"],
       ["obvious","easy to see; everybody knows it"],["optional","you can choose to do it or not"]],
comp:[
 {t:"gap", q:"Complete the two prices.",
  gaps:[{before:"The first price was $", after:" a tonne,", a:["640"]},
        {before:" and the new one is $", after:".", a:["610"]}]},
 {t:"mcq", q:"How many tonnes did Rami think the enquiry was for?",
  opts:["Eighty","Four hundred","One hundred","He did not think about it"], a:0},
 {t:"mcq", q:"Why is the price lower for four hundred tonnes?",
  opts:["The freight, handling and discount are different for a big quantity",
        "The steel is worse","The customer argued","It is a mistake"], a:0},
 {t:"gap", q:"Complete the difference.",
  gaps:[{before:"Thirty dollars a tonne on 400 tonnes is $", after:".", a:["12,000","12000"]}]},
 {t:"tf", q:"The trader is unhappy at the end.", a:false, why:"The trader is happy — the price went down. The cost was the two weeks."},
 {t:"short", q:"Both sides made the same kind of mistake. What was it?",
  model:"Each assumed the other meant what they themselves meant. The trader thought the quantity was obvious; Rami read “as usual” as the usual order size. Neither asked."}
],
words:[
 {t:"gap", q:"Complete the missing questions.",
  bank:["How many","Where","When","What grade"],
  gaps:[{before:"", after:" tonnes do you need?", a:["How many"]},
        {before:"", after:" shall we deliver?", a:["Where"]},
        {before:"", after:" do you need it?", a:["When"]},
        {before:"", after:" do you want?", a:["What grade"]}]},
 {t:"mcq", q:"“Grade as usual” is dangerous because …",
  opts:["“usual” may mean something different to each side",
        "it is impolite","it is too long","it is not English"], a:0},
 {t:"match", q:"Match the assumption to the question that prevents it.",
  pairs:[["“as usual”","which grade exactly?"],["“a good quantity”","how many tonnes?"],
         ["“soon”","which week?"],["“the normal place”","which address?"]]}
],
post:[
 {t:"order", q:"Put the story in order.",
  items:["The trader asks for a price with no quantity",
         "Rami quotes $640, thinking of 80 tonnes",
         "Ten days of silence",
         "The trader orders 400 tonnes",
         "Rami re-quotes at $610 and changes the form"]},
 {t:"write", q:"Write the five questions your enquiry form must always ask, so this cannot happen to you.",
  model:"1. What exactly do you want — product, grade, size? 2. How many, in your own unit? 3. Where must it be delivered? 4. When do you need it, and is that a deadline? 5. Who is the person I should answer, with a telephone number?"},
 {t:"short", q:"Rami’s price was wrong for ten days and nothing bad happened. Why was it still dangerous?",
  model:"Because the trader could have accepted it. Bashak would then have been bound to a price built for a fifth of the load, and the difference would have come out of its own margin."}
]
});
