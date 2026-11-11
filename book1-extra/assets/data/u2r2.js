AHL.lesson({
id:"u2r2", unit:2, kind:"reading", n:2,
title:"Three kinds of steel",
strap:"The same metal, three jobs, and the word the customer forgets.",
tags:["steel","adjectives","quality"],
pre:[
 {t:"match", q:"Match the adjective to its meaning.",
  pairs:[["strong","it does not break easily"],["heavy","it weighs a lot"],
         ["thin","it is not thick"],["high-quality","it is very well made"]]},
 {t:"mcq", q:"Which sentence is correct?",
  opts:["It is a strong, light steel.","It is a steel strong and light.",
        "It is strong light a steel.","It is a steel of strong."], a:0},
 {t:"mcq", q:"Before you read: a customer says “I want good steel.” What is the problem?",
  opts:["“Good” means nothing until you know the job",
        "Nothing — it is clear",
        "Good steel is always expensive",
        "There is only one kind of steel"],
  a:0}
],
paras:[
 "Al-Hasan sells steel in three forms: bars, plate and sheet. They are all steel, but they do different work.",
 "Bars are long and round. Builders put them inside concrete. The bar is strong, and the concrete is hard; together they are much stronger than either one alone.",
 "Plate is flat and thick. It is heavy. Factories cut it and make machines from it. You can walk on plate; it does not move.",
 "Sheet is flat and thin. It is light. People make doors, roofs and boxes from it. You can bend sheet with a machine, and you cannot bend plate.",
 "Every kind has a number — a grade. The grade tells you how strong the steel is. One grade is not better than another; it is different. A roof does not need the steel of a bridge.",
 "So when a customer says, “I want good steel,” Ms. Dana asks one question first: “What is it for?” The job chooses the steel. The customer chooses the job."
],
gloss:[["bar","a long round piece of metal"],["plate","a thick flat piece of metal"],
       ["sheet","a thin flat piece of metal"],["grade","a number that tells you the quality or strength"]],
comp:[
 {t:"match", q:"Match the form of steel to its work.",
  pairs:[["bars","inside concrete, in buildings"],["plate","machines in factories"],
         ["sheet","doors, roofs and boxes"],["grade","how strong the steel is"]]},
 {t:"multi", q:"Which two adjectives describe sheet? (Choose two.)",
  opts:["flat","thin","thick","heavy"], a:[0,1]},
 {t:"tf", q:"A higher grade is always better.", a:false,
  why:"The text says one grade is not better than another, it is different: a roof does not need the steel of a bridge."},
 {t:"mcq", q:"What question does Ms. Dana ask first?",
  opts:["What is it for?","How much do you want?","When do you need it?","How much can you pay?"], a:0},
 {t:"gap", q:"Complete the sentence about bars and concrete.",
  gaps:[{before:"The bar is strong, and the concrete is ", after:".", a:["hard"]}]},
 {t:"short", q:"Why is “I want good steel” a difficult thing to sell to?",
  model:"Because good is not a measurement. Until you know what the steel is for, you cannot choose the form or the grade, and any price you give may be for the wrong product."}
],
words:[
 {t:"gap", q:"Complete with the right adjective.",
  bank:["thin","heavy","strong","flat"],
  gaps:[{before:"Plate is thick and ", after:".", a:["heavy"]},
        {before:"Sheet is ", after:" and light.", a:["thin"]},
        {before:"Bars are ", after:" inside concrete.", a:["strong"]},
        {before:"Both plate and sheet are ", after:".", a:["flat"]}]},
 {t:"mcq", q:"Where do adjectives go?",
  opts:["a strong steel bar","a steel strong bar","a bar steel strong","a strong bar of the steel"], a:0},
 {t:"match", q:"Match the opposites.",
  pairs:[["thick","thin"],["heavy","light"],["strong","weak"],["long","short"]]}
],
post:[
 {t:"order", q:"Put the right way to answer a steel enquiry in order.",
  items:["Ask what the steel is for",
         "Choose the form: bar, plate or sheet",
         "Choose the grade for that job",
         "Give the size and the quantity",
         "Then give the price"]},
 {t:"write", q:"Describe three products you sell, or three things in your workplace, with two adjectives each.",
  model:"Our doors are heavy and strong; they are for schools and offices. Our windows are light and thin, and we make them in three sizes. Our office chairs are small and comfortable, and they are the cheapest thing we sell."},
 {t:"short", q:"“The job chooses the steel. The customer chooses the job.” What does that sentence tell a salesperson to do?",
  model:"To ask about the work before talking about the product — because once you know what it is for, the right product and the right grade follow, and the conversation stops being about price alone."}
]
});
