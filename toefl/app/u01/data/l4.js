/* Unit 1 · How We Learn — LESSON 4 · EVERYDAY CONVERSATION
   Social Interpersonal, around the unit's academic subject.
   Functional theme: expressing uncertainty. Pronunciation: sh, ch, j. */
(function () {
  window.PAGE = {
    id: "u01-l4", unit: "u01", block: "l4", up: "../", tab: "ACADEMIC",
    objective: "Respond naturally, and say when you are not sure",
    next: "l5.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Choose a response", letter: "A",
        kind: "respond", task: "listen-choose-response", cefr: "B2", n: 6,
        prompt: "You hear one short line. Choose the reply that fits.",
        note: { kind: "words",
                body: "<i>I'm just not sure.</i><i>I'm not quite sure.</i><i>It's hard to say.</i><i>I can't tell you for sure.</i>" },
        items: [
          { who: "mei", say: "Is this seat taken?",
            options: [
              { text: "No, go ahead.", correct: true, why: "An offer of the seat — the expected reply." },
              { text: "Yes, I'll take it.", why: "This answers as though <i>you</i> were being offered the seat." },
              { text: "It's over there.", why: "A location answer to a question that is not about location." }
            ] },
          { who: "dan", say: "When's the deadline?",
            options: [
              { text: "Friday at five.", correct: true, why: "A time, which is what <i>when</i> asks for." },
              { text: "In the library.", why: "A place, not a time." },
              { text: "Yes, it is.", why: "A <i>wh-</i> question cannot be answered yes or no." }
            ] },
          { who: "priya", say: "Have you chosen your courses yet?",
            options: [
              { text: "Not yet — I'm still deciding.", correct: true, why: "<i>Yet</i> invites <i>not yet</i>, and the speaker adds why." },
              { text: "I chose a quiet place.", why: "Hears <i>chosen</i> but misses what was chosen." },
              { text: "They're good courses.", why: "Comments on the courses instead of answering." }
            ] },
          { who: "dan", say: "Shall I put you on the waiting list?",
            options: [
              { text: "Yes, please do.", correct: true, why: "Accepts the offer. <i>Shall I…?</i> is an offer, not a question about facts." },
              { text: "I waited a long time.", why: "Hears <i>waiting</i> and answers about the past." },
              { text: "It's a short list.", why: "Comments on the list rather than taking the offer." }
            ] },
          { who: "mei", say: "I'm not quite sure that's the right one.",
            options: [
              { text: "We can look at the others.", correct: true, why: "Hears the hedge as doubt and offers a way forward." },
              { text: "I'm sure it is right.", why: "Contradicts flatly. Possible, but it ignores what the hedge was doing." },
              { text: "I'm not quite ready.", why: "Echoes the words without answering the doubt." }
            ] },
          { who: "tomas", say: "I'd have signed up earlier if I'd known.",
            options: [
              { text: "There may still be places.", correct: true,
                why: "The speaker did <b>not</b> sign up early. Only this reply acts on that." },
              { text: "I signed up too.", why: "Treats the speaker as someone who did sign up. They did not." },
              { text: "I didn't know either.", why: "Answers the second clause and ignores the first, which carries the request for help." }
            ] }
        ] },


      { id: "1b", section: 1, sectionTitle: "Choose a response", letter: "B",
        from: "2a",
        kind: "respond", task: "listen-choose-response", cefr: "B2", n: 6,
        prompt: "Six more. In three of them the speaker is hedging, and the reply has to hear the hedge.",
        items: [
          { who: "priya", say: "Do you know where the handout is?",
            options: [
              { text: "I think it's on the noticeboard, but I wouldn't swear to it.", correct: true,
                why: "Answers the question and marks the answer as uncertain, which is this lesson's function." },
              { text: "Yes, I know.", why: "Technically an answer to <i>do you know</i>, but it withholds the information the question is asking for." },
              { text: "I handed mine in.", why: "Hears <i>hand</i> and answers about something else." }
            ] },
          { who: "haddad", say: "Could you say that again?",
            options: [
              { text: "Of course — the deadline has moved to Monday.", correct: true,
                why: "Agrees and then actually repeats. A reply that only agrees leaves the speaker where they were." },
              { text: "Yes, I could.", why: "Treats a polite request as a question about ability." },
              { text: "I said it already.", why: "Grammatical and rude; it refuses the request rather than meeting it." }
            ] },
          { who: "mei", say: "How did you find the test?",
            options: [
              { text: "Harder than I expected.", correct: true,
                why: "<i>How did you find…?</i> asks for an opinion, not for how you located something." },
              { text: "It was on the desk.", why: "Takes <i>find</i> literally. This is the trap the item is built on." },
              { text: "I found it quickly.", why: "Also literal, and it answers a question about speed that nobody asked." }
            ] },
          { who: "tomas", say: "I've no idea what this question is even asking.",
            options: [
              { text: "Shall we read it through together?", correct: true,
                why: "Treats the complaint as a request for help, which is what it is." },
              { text: "Neither have I.", why: "Sympathy without a way out. Possible between friends, but it leaves the problem standing." },
              { text: "It's a good question.", why: "Praises the question the speaker cannot understand." }
            ] },
          { who: "dan", say: "Are you coming to the review session?",
            options: [
              { text: "If I finish the reading in time.", correct: true,
                why: "A conditional yes. Natural, and more informative than a bare <i>maybe</i>." },
              { text: "I came last week.", why: "Answers about the past when the question is about Thursday." },
              { text: "It was a good session.", why: "Reviews a session that has not happened." }
            ] },
          { who: "priya", say: "That can't be right, can it?",
            options: [
              { text: "It doesn't look right to me either.", correct: true,
                why: "A negative tag invites agreement with the negative. <i>Either</i> is the word that signals you have taken it." },
              { text: "Yes, it can.", why: "Possible, but it answers the tag rather than the doubt, and sounds like a contradiction." },
              { text: "No, it can.", why: "<i>No</i> and <i>can</i> pull in opposite directions; the reply contradicts itself." }
            ] }
        ] },

      { id: "2a", section: 2, sectionTitle: "Listen to a conversation", letter: "A",
        kind: "listen", task: "listen-conversation", cefr: "C1", n: 4,
        prompt: "Mei is at the advising desk. Listen once, then answer.",
        speaker: "dan", speakerNote: "peer advisor, with Mei Lin",
        audio: { track: "1-06", label: "At the advising desk", lines: [
          { who: "mei", text: "Hi — is there any space left in the Thursday study-skills group?" },
          { who: "dan", text: "That one filled up on the first day, I'm afraid. I can put you on the waiting list." },
          { who: "mei", text: "How long is it, usually?" },
          { who: "dan", text: "Three or four people. Most of them get in by week three. There is also a Tuesday group at eight in the morning, which never fills." },
          { who: "mei", text: "Eight. Right." },
          { who: "dan", text: "I know. But you would start this week instead of in three weeks." }
        ] },
        items: [
          { q: "What does Mei want?",
            options: [
              { text: "A place in the Thursday group.", correct: true, why: "Her first line asks for exactly this." },
              { text: "To change her course.", why: "Courses are never mentioned." },
              { text: "To speak to a lecturer.", why: "She is speaking to a peer advisor about a group." }
            ] },
          { q: "What does Dan say about the waiting list?",
            options: [
              { text: "Most people on it get a place by week three.", correct: true, why: "He gives both the length and the usual wait." },
              { text: "It is closed.", why: "He offers to put her on it." },
              { text: "It has thirty people on it.", why: "He says three or four." }
            ] },
          { q: "Why does Dan mention the Tuesday group?",
            options: [
              { text: "To offer her something she could start immediately.", correct: true,
                why: "His last line makes the purpose explicit: this week instead of in three weeks. Purpose questions are standard on this task." },
              { text: "To say the Thursday group is better.", why: "He never compares their quality." },
              { text: "To explain why the Thursday group filled.", why: "He gives no reason for that." }
            ] },
          { q: "What will Mei probably do?",
            options: [
              { text: "Weigh an eight o'clock start against a three-week wait.", correct: true,
                why: "Her flat “Eight. Right.” signals reluctance, and Dan answers it with the trade-off. She has not decided." },
              { text: "Join the Tuesday group straight away.", why: "Her reaction to <i>eight</i> suggests she is not convinced yet." },
              { text: "Give up on study groups.", why: "Nothing in the exchange points that way." }
            ] }
        ] },


      { id: "2b", section: 2, sectionTitle: "Listen to a conversation", letter: "B",
        kind: "listen", task: "listen-conversation", cefr: "C1", n: 4,
        prompt: "Priya and Tomás are planning Friday's revision. Listen once, then answer.",
        speaker: "priya", speakerNote: "with Tomás",
        audio: { track: "1-07", label: "Planning the revision", lines: [
          { who: "priya", text: "How are you revising for Friday?" },
          { who: "tomas", text: "Three hours of statistics tonight, then three hours of methods tomorrow." },
          { who: "priya", text: "All of one, and then all of the other?" },
          { who: "tomas", text: "That's the plan. Why?" },
          { who: "priya", text: "Our lecturer said mixing them is better, even though it feels worse while you are doing it." },
          { who: "tomas", text: "Worse how?" },
          { who: "priya", text: "You keep having to switch, so nothing ever feels smooth. The exam will not feel smooth either." }
        ] },
        items: [
          { q: "What is Tomás planning to do?",
            options: [
              { text: "Finish one subject completely before starting the other.", correct: true,
                why: "<i>Three hours of statistics tonight, then three hours of methods tomorrow</i>." },
              { text: "Alternate between the two subjects each hour.", why: "That is Priya's suggestion, not his plan." },
              { text: "Revise only statistics.", why: "He names both subjects." }
            ] },
          { q: "What does Priya report her lecturer as saying?",
            options: [
              { text: "That mixing the subjects works better.", correct: true,
                why: "Reported speech: <i>said mixing them is better</i>. The item tests whether you heard whose claim it is." },
              { text: "That three hours is too long.", why: "Length is never mentioned by the lecturer." },
              { text: "That Friday is too soon.", why: "Nobody says anything about the date." }
            ] },
          { q: "Why does Tomás ask “Worse how?”",
            options: [
              { text: "Priya has just said the better method feels worse, and he wants that explained.", correct: true,
                why: "The question picks up the one word in her sentence that sounds like a contradiction." },
              { text: "He thinks Priya has insulted his plan.", why: "Nothing in his two words signals offence; he asks for detail." },
              { text: "He did not hear her.", why: "He repeats her own word, so he heard it." }
            ] },
          { q: "What is Priya's last argument?",
            options: [
              { text: "The awkwardness of switching is the same awkwardness the exam will have.", correct: true,
                why: "<i>The exam will not feel smooth either</i> — the difficulty is the point, not a cost of the method." },
              { text: "The exam will be easier than the revision.", why: "She says the opposite." },
              { text: "Switching saves time.", why: "She never claims it is quicker; she claims it is harder and better." }
            ] }
        ] },

      { id: "3a", section: 3, sectionTitle: "Practise your pronunciation", letter: "A",
        kind: "repeat", task: "listen-and-repeat", cefr: "C1", n: 4,
        prompt: "This unit's sounds are <b>sh</b>, <b>ch</b> and <b>j</b>. Listen, then say each line back.",
        speaker: "haddad",
        lines: [
          { text: "I'm not sure.", note: "/ʃ/ in <i>sure</i> — not /s/. One clause." },
          { text: "I checked the schedule and chose a different session.",
            note: "/tʃ/ in <i>checked</i> and <i>chose</i>, /ʃ/ in <i>session</i>. Compound verb." },
          { text: "If you change your major, you should see an advisor.",
            note: "/dʒ/ in <i>change</i> and <i>major</i>. Dependent clause." },
          { text: "The students who chose the Thursday session finished the project much sooner.",
            note: "Relative clause plus a complex noun phrase — the top of this task's range." }
        ] },

      { id: "3b", section: 3, sectionTitle: "Practise your pronunciation", letter: "B",
        kind: "repeat", task: "listen-and-repeat", cefr: "C1", n: 4,
        prompt: "Four more lines, longer each time. Keep the three sounds apart at speed.",
        speaker: "haddad",
        lines: [
          { text: "She's just a bit unsure.", note: "/ʃ/ in <i>She</i> and <i>unsure</i>, /dʒ/ in <i>just</i>. One clause." },
          { text: "Which chapter should we check first?", note: "/tʃ/ three times, /ʃ/ in <i>should</i>. A question, so the pitch rises at the end." },
          { text: "The journal published the research in June.", note: "/dʒ/ in <i>journal</i> and <i>June</i>, /ʃ/ in <i>published</i> and <i>research</i>." },
          { text: "Although the schedule changed in March, the students who chose the Thursday session still finished much sooner.",
            note: "A concessive clause and a relative clause, with all three sounds inside them. The top of this task's range." }
        ] },

      { id: "4a", section: 4, sectionTitle: "Hear the difference", letter: "A",
        kind: "minimal-pairs", task: null, n: 0,
        focus: "<p>Three sounds that English keeps apart and many languages do not. <b>/ʃ/</b> is a long hiss with no stop in front of it. <b>/tʃ/</b> is the same hiss with a <i>t</i> fired into it. <b>/dʒ/</b> is /tʃ/ with the voice on.</p>" +
               "<i>/ʃ/ — share · wash · session</i><i>/tʃ/ — chair · watch · check</i><i>/dʒ/ — jeer · judge · major</i>",
        items: [
          { say: "chair",
            options: [
              { text: "chair", correct: true, why: "/tʃ/ — you can hear the <i>t</i> stop the air before the hiss starts." },
              { text: "share", why: "/ʃ/ — the hiss begins straight away, with nothing blocking it." }
            ] },
          { say: "wash",
            options: [
              { text: "watch", why: "/tʃ/ — there is a tiny stop before the hiss at the end." },
              { text: "wash", correct: true, why: "/ʃ/ — the end is one continuous hiss." }
            ] },
          { say: "jeep",
            options: [
              { text: "cheap", why: "/tʃ/ — voiceless. Put a finger on your throat and there is no buzz at the start." },
              { text: "jeep", correct: true, why: "/dʒ/ — voiced. The buzz starts with the word." }
            ] },
          { say: "jeer",
            options: [
              { text: "cheer", why: "/tʃ/ — voiceless, and the two words mean opposite things, which is why the contrast matters." },
              { text: "jeer", correct: true, why: "/dʒ/ — voiced. <i>Jeer</i> is to mock; <i>cheer</i> is to applaud." }
            ] }
        ] },

      { id: "4b", section: 4, sectionTitle: "Hear the difference", letter: "B",
        from: "2a",
        kind: "dictation", task: null, n: 0,
        prompt: "Play each line and write exactly what you hear. Spelling counts; punctuation does not. Play as often as you need.",
        items: [
          { answer: "She was not quite sure which session to choose",
            why: "<i>sure</i> and <i>session</i> both start with /ʃ/; <i>choose</i> starts with /tʃ/." },
          { answer: "The research shows that testing beats reading every time",
            why: "<i>shows</i> is a verb with an <i>-s</i>, and it is easy to lose that <i>-s</i> in front of <i>that</i>." },
          { answer: "I checked the schedule and changed my major in March",
            why: "/tʃ/ in <i>checked</i> and <i>changed</i>, /dʒ/ in <i>major</i>, both in <i>March</i>." },
          { answer: "Most students on the waiting list get a place by week three",
            why: "Three unstressed function words in a row — <i>on the</i>, <i>by</i> — are where a dictation is usually lost." }
        ],
        closer: { kind: "test", body: "<p>Assess your own part: today I was able to … respond without a pause · express uncertainty · hear the difference between <i>ch</i> and <i>j</i>.</p>" } }
    ]
  };
})();
