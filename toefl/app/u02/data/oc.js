/* Unit 2 · Climate and Prediction — ON CAMPUS
   Function: disagree politely in a seminar. */
(function () {
  window.PAGE = {
    id: "u02-oc", unit: "u02", block: "oc", up: "../", tab: "NAVIGATIONAL",
    objective: "Disagree politely in a seminar",
    next: "tw.html",
    scenes: [
      { id: "a", section: 1, sectionTitle: "Listen to an announcement", letter: "A",
        kind: "listen", task: "listen-announcement", cefr: "B1", n: 3,
        prompt: "A notice read out before the field trip. It plays once.",
        speaker: "dan", speakerNote: "trip coordinator",
        audio: { track: "2-11", label: "Two changes to Friday", lines: [{ who: "dan", text:
          "Two changes to Friday. The minibus now leaves at a quarter past seven, not half past, because the tide turns earlier than we thought. And site three is off: the path is still under water. We will do sites one and two properly instead. If you signed up for the afternoon group, check your email tonight." }] },
        items: [
          { q: "What has changed about the departure?",
            options: [
              { text: "It is fifteen minutes earlier.", correct: true, why: "A quarter past seven instead of half past." },
              { text: "It is fifteen minutes later.", why: "Quarter past comes before half past." },
              { text: "The meeting point has moved.", why: "No place is mentioned." }
            ] },
          { q: "Why is site three cancelled?",
            options: [
              { text: "The path is flooded.", correct: true, why: "“the path is still under water” — and <i>still</i> implies it has been for a while." },
              { text: "There is not enough time.", why: "Time is the reason for the earlier departure, not the cancellation." },
              { text: "The tide turns too early.", why: "That explains the departure time." }
            ] },
          { q: "Who needs to check their email?",
            options: [
              { text: "Students in the afternoon group.", correct: true, why: "The instruction is conditional, and the condition names that group." },
              { text: "Everyone on the trip.", why: "The <i>if</i> clause narrows it." },
              { text: "Nobody — all the changes have been announced.", why: "The last sentence asks for exactly this." }
            ] }
        ] },

      { id: "b", section: 2, sectionTitle: "Listen to an academic talk", letter: "A",
        kind: "talk", task: "listen-academic-talk", cefr: "C1", n: 4,
        prompt: "Professor Haddad on what a climate model actually does. A notepad opens beside the player.",
        speaker: "haddad", speakerNote: "lecturer",
        audio: { track: "2-12", label: "What a model does", lines: [{ who: "haddad", text:
          "People often picture a climate model as a very large piece of software that is asked what the temperature will be in 2080. That is not what it does. A model divides the atmosphere and the ocean into boxes, and for each box it applies the same physics you would apply to a bucket of air: conservation of energy, conservation of mass, the behaviour of water as it changes state. Then it steps forward, half an hour at a time, for a simulated century. Nothing in that process is a prediction. The model is told what the emissions are; it is not asked to guess them. So when two models disagree, it is worth asking which kind of disagreement it is. If they were given different emissions, they are answering different questions and the gap means very little. If they were given identical emissions and still differ, the gap is telling you something about the physics they represent differently, and clouds are almost always where that difference lives. That second kind is the interesting one, and it is the one that has narrowed slowly over thirty years." }] },
        transcript: "<p>A model applies known physics box by box and steps forward. It is told the emissions; it does not guess them. So the useful question about two disagreeing models is whether they were given the same emissions.</p>",
        items: [
          { q: "What is the speaker's main point?",
            options: [
              { text: "A model applies known physics step by step; it does not guess the future.", correct: true,
                why: "“Nothing in that process is a prediction” is the hinge of the talk." },
              { text: "Climate models are too large to understand.", why: "She explains the mechanism precisely to show it is understandable." },
              { text: "Models should be asked what the temperature will be.", why: "She opens by saying that is not what they do." }
            ] },
          { q: "How far forward does the model step at a time?",
            options: [
              { text: "About half an hour.", correct: true, why: "“half an hour at a time, for a simulated century” — a detail worth noting." },
              { text: "A year.", why: "A century is the total, not the step." },
              { text: "She does not say.", why: "She gives the figure." }
            ] },
          { q: "When is a disagreement between two models <i>interesting</i>?",
            options: [
              { text: "When they were given identical emissions and still differ.", correct: true,
                why: "She divides disagreements into two kinds and says plainly which one matters." },
              { text: "When they were given different emissions.", why: "She says that gap “means very little”." },
              { text: "Whenever the gap is large.", why: "Size is not her criterion; the cause is." }
            ] },
          { q: "What would she say about a headline comparing two models with different scenarios?",
            options: [
              { text: "It is comparing answers to different questions.", correct: true,
                why: "One step from what she states: different emissions means they are answering different questions." },
              { text: "It shows the models are unreliable.", why: "She says the opposite about that kind of gap." },
              { text: "It proves the physics is wrong.", why: "Physics differences belong to the second kind of disagreement." }
            ] }
        ] },

      { id: "c", section: 3, sectionTitle: "Disagree politely", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Read the chart. In a seminar, disagreeing well is a skill with its own phrases.",
        note: { kind: "speak",
                body: "<i>I see it slightly differently.</i><i>That's true up to a point, but…</i><i>I'd want to separate two things there.</i>" },
        text: { every: 1, mastColor: "blue", masthead: "WHEN YOU WANT TO DISAGREE POLITELY",
          blocks: [
            { h: "Do this", lines: [
              "Name the part you accept before the part you don't.",
              "Disagree with the claim, not the person who made it.",
              "Ask a question when you are not yet sure you disagree."
            ] },
            { h: "Say this", lines: [
              "I think that's right about the scenarios, but I'd separate that from the model differences.",
              "That's true up to a point — though it assumes the extremes are as likely as the middle.",
              "Can I check what you mean by <i>prediction</i> there?"
            ] }
          ] },
        after: "<p>The last one is not a retreat. Asking what someone means by a word is the most efficient disagreement there is.</p>",
        closer: { kind: "life",
          body: "<p>In your next seminar, disagree once using the first pattern: name what you accept, then what you don't.</p>" } }
    ]
  };
})();
