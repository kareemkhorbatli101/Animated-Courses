/* Unit 1 · How We Learn — TEAMWORK & LANGUAGE REVIEW
   The book's closing block, with its PROBLEM SOLVING step carrying the email. */
(function () {
  window.PAGE = {
    id: "u01-tw", unit: "u01", block: "tw", up: "../", tab: "NAVIGATIONAL",
    objective: "Review the unit, and write to someone who can help",
    next: "index.html",
    scenes: [
      { id: "a", section: 1, sectionTitle: "Problem solving", letter: "A",
        concepts: ["write"],
        kind: "write-email", task: "write-an-email", cefr: "C1", n: 1,
        frames: [
          { frame: "I am writing because ___.",
            why: "Present continuous for what you are doing now: the reason, in the first sentence." },
          { frame: "Last ___ I ___, and since then ___.",
            why: "Past for the finished event, present for what still holds." },
          { frame: "Could you ___ before ___?",
            why: "A plain modal and a deadline. Politeness lives in the modal, not in extra words." },
        ],
        prompt: "Read the situation, then write the email. Audience and purpose are given, as they are on the test.",
        scenarioTitle: "The situation",
        scenario: "<p>You meant to join the Thursday study-skills workshop and missed the sign-up deadline by a day. Dan Okafor runs the waiting list.</p><p><b>Write to Dan.</b> Say what happened, ask whether a place is left, and ask what you should do next.</p>",
        to: "d.okafor@university.edu", re: "Study-skills workshop — missed the deadline",
        placeholder: "Dear Dan,…",
        minWords: 60,
        note: { kind: "help",
                body: "<i>I am writing to ask whether…</i><i>Unfortunately I…</i><i>Would it be possible to…?</i><i>Please let me know what I should do.</i>" },
        checklist: [
          "I said why I was writing in the first sentence.",
          "I explained what happened, briefly.",
          "I made a specific request.",
          "I signed off in a way that matches the reader."
        ],
        model: "<p>Dear Dan,</p><p>I am writing to ask whether there is still a place in the Thursday study-skills workshop. Unfortunately I missed the sign-up deadline by a day, as I was away on Friday.</p><p>Would it be possible to add me to the waiting list? Please let me know what I should do next, and whether the Tuesday group would be a better option.</p><p>Many thanks,<br>Mei Lin</p>" },


      { id: "a2", section: 1, sectionTitle: "Problem solving", letter: "B",
        concepts: ["write"],
        kind: "write-email", task: "write-an-email", cefr: "C1", n: 1,


        frames: [


          { frame: "I am writing because ___.",


            why: "Present continuous for what you are doing now: the reason, in the first sentence." },


          { frame: "Last ___ I ___, and since then ___.",


            why: "Past for the finished event, present for what still holds." },


          { frame: "Could you ___ before ___?",


            why: "A plain modal and a deadline. Politeness lives in the modal, not in extra words." },


        ],
        prompt: "A second situation, and a harder one: you are writing about another person.",
        scenarioTitle: "The situation",
        scenario: "<p>You are in a group of four for the methods assignment, due in ten days. One member has not answered three messages in a week, and the group cannot divide the work until they do. Professor Haddad leads the module.</p><p><b>Write to Professor Haddad.</b> Say what the problem is, say what the group has already tried, and ask for one specific thing.</p>",
        to: "a.haddad@university.edu", re: "Methods assignment — group of four",
        placeholder: "Dear Professor Haddad,…",
        minWords: 60,
        note: { kind: "help",
                body: "<p>Write about the situation, not about the person. <i>We have not been able to reach one member</i> reads as a problem; <i>X is ignoring us</i> reads as a complaint, and invites the reply that you should sort it out yourselves.</p><i>I am writing on behalf of…</i><i>So far we have…</i><i>Could you advise whether…?</i>" },
        checklist: [
          "My first sentence says who I am writing for and why.",
          "I described the problem without blaming anyone by name.",
          "I said what the group has already tried.",
          "I asked for one specific thing, not for help in general.",
          "I gave the deadline, so the reader knows how urgent it is."
        ],
        model: "<p>Dear Professor Haddad,</p>" +
               "<p>I am writing on behalf of group four for the methods assignment, which is due on the twenty-eighth. We have not been able to reach one of our members for a week, and until we do we cannot divide the work.</p>" +
               "<p>So far we have messaged the group chat three times and emailed directly twice. Could you advise whether we should proceed as a group of three, and whether the division of work needs to be recorded anywhere?</p>" +
               "<p>Many thanks,<br>Mei Lin</p>" },

      { id: "b", section: 2, sectionTitle: "Take an interview", letter: "A",
        concepts: ["speak"],
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "One question, one pass, forty-five seconds.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Describe a time you learned something together with other people. What made it work?",
        model: "<p>Last term I joined a statistics study group. What made it work was that we each had to explain one method to the others. The first time it was my turn I could not finish a sentence about a formula I had read four times, and that was the moment I realised I did not know it. After that I prepared differently — I would close the book and try to say the method aloud before the meeting.</p>" },

      { id: "c", section: 2, sectionTitle: "Take an interview", letter: "B",
        concepts: ["speak", "claim"],
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "A second question. This one asks for an opinion and a reason.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Some students prefer to study alone. Why do you think that is?",
        model: "<p>I think there are two reasons. The first is practical: studying alone is easier to arrange, and you can stop when you like. The second is less comfortable — working alone lets you avoid finding out what you do not know. If you never explain an idea to anyone, nobody can tell you that your explanation does not make sense. So I understand the preference, but I think part of it is avoidance.</p>" },


      { id: "c2", section: 2, sectionTitle: "Take an interview", letter: "C",
        concepts: ["speak"],
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "A third question. This one asks for a change and a reason for it.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Tell me about a study habit you have changed. What did you replace it with, and did it work?",
        model: "<p>I used to highlight everything I read, and by the end of a chapter the page was more yellow than white. It felt like work, but when I closed the book I could not say what the chapter had argued. So I replaced it: now I write one question in the margin of each section, and before I turn the page I answer it out loud. It is slower, and the first week I hated it, but I can now get through a chapter and still say what it claimed.</p>" },

      { id: "c3", section: 2, sectionTitle: "Take an interview", letter: "D",
        concepts: ["speak"],
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "A fourth question. This one asks you to advise an institution, not describe yourself.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Your university is deciding whether to record every lecture and post it. What would you advise, and why?",
        model: "<p>I would record them, but I would not let the recording stand in for the hour. The recording is valuable for one specific thing: replaying the two minutes you did not follow, which nobody can do in a lecture theatre. What it does badly is remove the deadline, and a lecture you can always watch is one you never watch. So my advice would be to post the recordings, and to put something in the hour itself that only happens in the hour — a question, a problem, anything that is gone by the evening.</p>" },

      { id: "d", section: 3, sectionTitle: "Language review", letter: "A",
        concepts: ["recall"],
        kind: "quiz", task: null, n: 0,
        prompt: "Twelve items, interleaved across the whole unit — which is itself one of the methods the unit taught.",
        items: [
          { q: "She answered every question ____.", from: "Lesson 3",
            options: [
              { text: "correctly", correct: true, why: "It describes the verb <i>answered</i>, so the adverb." },
              { text: "correct", why: "The adjective would need a noun to describe." },
              { text: "more correct", why: "A comparative with nothing to compare to." }
            ] },
          { q: "____ the first group was re-reading, the second was testing itself.", from: "Lesson 3",
            options: [
              { text: "While", correct: true, why: "Two actions in progress at once take <i>while</i> with the past continuous." },
              { text: "Although", why: "Concessive — there is no contrast of expectation here." },
              { text: "Because", why: "Neither action causes the other." }
            ] },
          { q: "A person who ____ a result they do not like is not doing science.", from: "Lesson 5 · the prefix dis-",
            options: [
              { text: "disregards", correct: true, why: "<i>dis- + regard</i> = ignore deliberately." },
              { text: "disagrees", why: "You disagree <i>with</i> something; it does not take a direct object this way." },
              { text: "disproves", why: "Disproving a result is science, not the avoidance of it." }
            ] },
          { q: "You hear: “I'd have signed up earlier if I'd known.” The speaker:", from: "Lesson 4",
            options: [
              { text: "did not sign up early.", correct: true, why: "The counterfactual says the opposite of what happened." },
              { text: "signed up early.", why: "<i>I'd have</i> marks something that did not happen." },
              { text: "has not decided whether to sign up.", why: "The decision is in the past." }
            ] },
          { recall: "From Lesson 5: the article on why re-reading feels effective and is not \u2014 the one with the footnote on an illusion.", q: "In the article, the writer calls the feeling of easy material:", from: "Lesson 5",
            options: [
              { text: "fluency", correct: true, why: "Defined in the footnote: the sense that material is easy, which is not knowing it." },
              { text: "retrieval", why: "Retrieval is the method, not the feeling." },
              { text: "consolidation", why: "Not a term the passage uses." }
            ] },
          { q: "Which sentence would score highest on Write for an Academic Discussion?", from: "Lesson 2",
            options: [
              { text: "Tomás is right that groups carry passengers, but the fix is to make everyone explain something.", correct: true,
                why: "Names a classmate, concedes, and still adds something — the 5-band move." },
              { text: "I agree with the professor's question about study groups.", why: "Restates the question and names no one. That is a 3." },
              { text: "Study groups are good because they are helpful.", why: "Circular, and engages nobody." }
            ] },
          { q: "The lecturer said mixing topics works. The technical name for mixing them is:", from: "On Campus",
            options: [
              { text: "interleaving", correct: true, why: "She defines it in the talk, against <i>blocking</i>." },
              { text: "spacing", why: "Spacing is about the gap in time, not the order of topics. Lesson 5's second article is the one about gaps." },
              { text: "retrieval", why: "Retrieval is what you do inside a session, whatever order the sessions come in." }
            ] },
          { q: "Which pair of words would the unit say is NOT worth interleaving?", from: "On Campus",
            options: [
              { text: "statistics and Spanish", correct: true,
                why: "Her caution exactly: interleaving helps between things that could be confused, and these two cannot be." },
              { text: "statistics and research methods", why: "These can be confused, which is why alternating them helps." },
              { text: "two kinds of statistical test", why: "The classic case: the whole difficulty is choosing which applies." }
            ] },
          { q: "“Although the total investment is identical, the second student will almost certainly retain more.” The safest paraphrase keeps:", from: "Lesson 5",
            options: [
              { text: "the equal hours and the word <i>almost</i>.", correct: true,
                why: "Dropping the hedge, or quietly giving one student more hours, are the two ways this sentence is usually mistranslated." },
              { text: "the equal hours only.", why: "<i>Almost certainly</i> is doing work: without it the sentence overclaims." },
              { text: "the word <i>almost</i> only.", why: "Without the equal totals the comparison means nothing." }
            ] },
          { q: "You hear /dʒiːp/. The word is:", from: "Lesson 4",
            options: [
              { text: "jeep", correct: true, why: "/dʒ/ is voiced — the buzz starts with the word." },
              { text: "cheap", why: "That is /tʃ/, voiceless: no buzz at the start." },
              { text: "sheep", why: "That is /ʃ/: a continuous hiss with no stop in front of it." }
            ] },
          { q: "Which word is a verb having its action undone by <i>dis-</i>, rather than a quality reversed?", from: "Lesson 1",
            options: [
              { text: "disconnect", correct: true, why: "A connection existed and is undone. <i>Disorganised</i> and <i>disbelief</i> name a quality instead." },
              { text: "disorganised", why: "An adjective: the opposite quality to organised." },
              { text: "disadvantage", why: "A noun: the opposite of an advantage." }
            ] },
          { q: "She reads ____ when the material is new to her.", from: "Lesson 3",
            options: [
              { text: "slowly", correct: true, why: "It is attached to <i>reads</i>, a verb, so an adverb." },
              { text: "slow", why: "The adjective would need a noun. <i>A slow reader</i> is fine; <i>reads slow</i> is not." },
              { text: "slowest", why: "A superlative with nothing to be the most of." }
            ] }
        ] },

      { id: "e", section: 3, sectionTitle: "Language review", letter: "B",
        concepts: ["comparison", "measurement", "claim"],
        kind: "sort", task: null, n: 0,
        prompt: "Eight things a student might do. Sort them by what this unit actually argued. The last two in each column are the ones worth arguing about.",
        bins: [
          { id: "for",     label: "The unit argued for this", hint: "harder while you do it" },
          { id: "against", label: "The unit argued against this", hint: "easier while you do it" }
        ],
        items: [
          { text: "closing the book and recalling", bin: "for",
            why: "Lesson 5: retrieval is an episode of learning, not a test of it." },
          { text: "checking which answers you got wrong", bin: "for",
            why: "On Campus: the catch. Testing without checking rehearses the errors too." },
          { text: "spreading four hours over four evenings", bin: "for",
            why: "Lesson 5's second article: the same hours, distributed, leave more behind." },
          { text: "mixing two topics that could be confused", bin: "for",
            why: "On Campus: interleaving, and the confusable pair is exactly where it works." },
          { text: "highlighting the page", bin: "against",
            why: "Lesson 1 and Lesson 5: it changes the page and asks nothing of memory." },
          { text: "re-reading until it feels easy", bin: "against",
            why: "The feeling of ease is <i>fluency</i>, which the article says is routinely mistaken for knowledge." },
          { text: "finishing one topic before starting the next", bin: "against",
            why: "That is blocking. It feels disciplined and lets you stop choosing, which is the part the exam tests." },
          { text: "alternating statistics and Spanish", bin: "against",
            why: "The subtle one. It looks like interleaving, but the two cannot be confused, so it is only task-switching — and it costs you." }
        ],
        closer: { kind: "test",
          body: "<p>Close the page. Say aloud what the testing effect is, and what the catch is. If you cannot do it in two sentences, go back to On Campus.</p>" } }
    ]
  };
})();
