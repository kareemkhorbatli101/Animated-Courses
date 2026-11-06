/* Unit 4 · Migration and the Human Past — ON CAMPUS
   Function: ask for help without losing face. */
(function () {

  /* Two exercises use this talk: the comprehension items, and the outline
     filled in while it plays. */
  var TALK1 = { track: "4-12", label: "Who got there first", lines: [{ who: "haddad", text:
          "There is a habit of mind I want you to resist, and it is the habit of asking who got there first. The question feels natural and it produces bad archaeology, because it makes every site a competitor and every date a claim to a title. A better question is what the distribution of dates looks like. If the earliest secure sites cluster along a coast and the inland corridor sites are consistently later, that pattern tells you something about a route. It tells you more than any single early date could, and it is far harder to overturn, because it does not rest on one excavation being right. Now, the uncomfortable part. We have known for decades that radiocarbon dates from coastal sites are harder to interpret, because marine carbon behaves differently from atmospheric carbon. That is not a reason to discard them. It is a reason to correct them, and to say in the paper exactly what correction was applied. A date without its correction stated is not a measurement; it is an assertion. And a field that publishes assertions will eventually find itself arguing about who got there first, which is where we came in." }] };

  window.PAGE = {
    id: "u04-oc", unit: "u04", block: "oc", up: "../", tab: "NAVIGATIONAL",
    objective: "Ask for help without losing face",
    next: "tw.html",
    scenes: [
      { id: "a", section: 1, sectionTitle: "Listen to an announcement", letter: "A",
        concepts: ["listen"],
        kind: "listen", task: "listen-announcement", cefr: "B1", n: 3,
        prompt: "A notice before the archive visit. It plays once.",
        speaker: "dan", speakerNote: "course administrator",
        audio: { track: "4-11", label: "A change for Thursday", lines: [{ who: "dan", text:
          "A change for Thursday. The archive visit is still going ahead, but we now have the reading room for two hours instead of three, so bring your questions written down. The box list is on the noticeboard. If you asked for the coastal survey folder, it is the one box that has to be ordered in advance." }] },
        items: [
          { q: "What has changed?",
            options: [
              { text: "The visit is an hour shorter.", correct: true, why: "Two hours instead of three." },
              { text: "The visit is cancelled.", why: "“still going ahead” says the opposite." },
              { text: "The day has moved.", why: "It is still Thursday." }
            ] },
          { q: "Why should students write their questions down?",
            options: [
              { text: "Because there is less time than planned.", correct: true,
                why: "<i>so</i> links the shorter session to the instruction — purpose carried by the connector." },
              { text: "Because the archive requires it.", why: "No archive rule is mentioned." },
              { text: "Because the box list is long.", why: "The box list is a separate sentence." }
            ] },
          { q: "What is special about the coastal survey folder?",
            options: [
              { text: "It alone has to be ordered in advance.", correct: true, why: "“the <i>one</i> box that has to be ordered in advance”." },
              { text: "It is not available.", why: "It is available, with notice." },
              { text: "It is on the noticeboard.", why: "The box <i>list</i> is on the noticeboard." }
            ] }
        ] },

            { id: "a2", section: 1, sectionTitle: "Listen to an announcement", letter: "B",
        concepts: ["listen", "inference"],
        kind: "listen", task: "listen-announcement", cefr: "B1", n: 3,
        prompt: "A second notice, read out in the reading room. It plays once.",
        speaker: "dan", speakerNote: "archive assistant",
        audio: { track: "4-13", label: "Before you order", lines: [{ who: "dan", text:
          "Two things before you order anything. Boxes have to be requested by four the day before, and a request placed on a Friday will not reach you until Monday, so plan backwards from when you actually need it. Second, the catalogue entry for a box is often two lines long and was written in nineteen seventy four. If the description sounds vague, order it anyway. About a third of what people find in here is not what the entry said was in the box." }] },
        items: [
          { q: "When should you place an order if you need a box on Monday?",
            options: [
              { text: "By four o'clock on Friday at the latest.", correct: true,
                why: "A Friday order arrives Monday, and the four o'clock deadline still applies to it." },
              { text: "By four o'clock on Sunday.", why: "The archive is not taking orders at the weekend; Friday is the last working day before Monday." },
              { text: "On Monday morning.", why: "Same-day ordering is ruled out by the day-before rule." }
            ] },
          { q: "What does he say about a vague catalogue entry?",
            options: [
              { text: "Order the box anyway, because the entry may not describe what is inside.", correct: true,
                why: "The reason comes last: about a third of what is found was not described." },
              { text: "Ask an assistant to check it first.", why: "He asks you to order it, not to delegate the checking." },
              { text: "Avoid it and find a better documented box.", why: "The opposite of his advice." }
            ] },
          { q: "Why does he mention nineteen seventy four?",
            options: [
              { text: "To explain why the descriptions are thin and often wrong.", correct: true,
                why: "The date is given as the cause of the vagueness, not as information about the archive." },
              { text: "To date the oldest material in the archive.", why: "It is the date of the cataloguing, not of the contents." },
              { text: "To say when the reading room opened.", why: "The reading room is not mentioned." }
            ] }
        ] },

      { id: "b", section: 2, sectionTitle: "Listen to an academic talk", letter: "A",
        concepts: ["listen"],
        kind: "talk", task: "listen-academic-talk", cefr: "C1", n: 4,
        prompt: "Professor Haddad on a habit of mind. A notepad opens beside the player.",
        speaker: "haddad", speakerNote: "lecturer",
        audio: TALK1,
        transcript: "<p>Ask what the distribution of dates looks like, not who got there first. And state the correction, or the date is an assertion rather than a measurement.</p>",
        items: [
          { q: "What is the speaker's main point?",
            options: [
              { text: "A pattern across many dates is worth more than any single earliest date.", correct: true,
                why: "She contrasts the two questions and says the pattern is harder to overturn." },
              { text: "Coastal dates should not be used.", why: "“That is not a reason to discard them.”" },
              { text: "Radiocarbon dating does not work.", why: "She asks for correction, not abandonment." }
            ] },
          { q: "Why are coastal radiocarbon dates harder to interpret?",
            options: [
              { text: "Marine carbon behaves differently from atmospheric carbon.", correct: true,
                why: "Stated as the reason — a detail worth putting on the pad." },
              { text: "Coastal sites are usually younger.", why: "Age is not the issue she raises." },
              { text: "The samples are usually damaged.", why: "Damage is not mentioned." }
            ] },
          { q: "What does she mean by calling an uncorrected date <i>an assertion</i>?",
            options: [
              { text: "It is a claim the reader cannot check.", correct: true,
                why: "She opposes it to <i>a measurement</i>, and a measurement is checkable because its correction is stated." },
              { text: "It is deliberately dishonest.", why: "She never alleges dishonesty, only incompleteness." },
              { text: "It is always wrong.", why: "An uncorrected date may be right; it is simply unverifiable." }
            ] },
          { q: "How does the end of the talk connect to its beginning?",
            options: [
              { text: "Publishing unverifiable dates pushes a field back towards priority disputes.", correct: true,
                why: "“which is where we came in” closes the loop onto <i>who got there first</i>." },
              { text: "It introduces a new topic.", why: "The last clause points explicitly back." },
              { text: "It withdraws the earlier claim.", why: "It reinforces it." }
            ] }
        ] },

            { id: "b2", section: 2, sectionTitle: "Listen to an academic talk", letter: "B",
        concepts: ["listen", "inference", "sample"],
        kind: "talk", task: "listen-academic-talk", cefr: "C1", n: 4,
        prompt: "The same lecturer, on the gap between a date and an event.",
        speaker: "haddad", speakerNote: "lecturer",
        audio: { track: "4-14", label: "The old wood problem", lines: [{ who: "haddad", text:
          "Here is a question that sounds pedantic and is not. When a laboratory gives you a date of eleven thousand years, what is eleven thousand years old? The answer is the sample. Not the fire, not the camp, not the people. The sample. If the sample is a piece of charcoal from a tree that was already two hundred years old when it was cut, then the outer rings died when it was cut and the inner rings died two centuries earlier, and which part went to the laboratory matters enormously. If it was driftwood, the tree may have died on another coast entirely, long before anyone picked it up. This is called the old wood problem, and the uncomfortable thing about it is that it never shows up in the number. The laboratory reports exactly what it measured, with an honest uncertainty, and the uncertainty is about the measurement. It is not about your inference. So when you read a site report, do not stop at the date. Find the sentence that says what was dated and where it was lying, and if that sentence is missing, treat the date as a claim rather than as a measurement." }] },
        transcript: "<p>The date belongs to the sample, not to the event. The laboratory's uncertainty covers the measurement, not your inference. Find the sentence saying what was dated and where it lay.</p>",
        items: [
          { q: "What is the speaker's main point?",
            options: [
              { text: "A date belongs to the sample, and linking it to an event is a separate step.", correct: true,
                why: "She answers her own opening question in four words — <i>the sample</i> — and spends the rest of the talk on what follows from that." },
              { text: "Radiocarbon dates are usually wrong.", why: "She calls them exactly what was measured, with an honest uncertainty." },
              { text: "Charcoal should not be dated.", why: "Charcoal is her example of how the gap arises, not something she rules out." }
            ] },
          { q: "Why does she mention the outer and inner rings of a tree?",
            options: [
              { text: "They died two centuries apart, so which part was dated changes the answer.", correct: true,
                why: "The example is designed to show that a single object can carry several different dates." },
              { text: "To explain how trees are counted.", why: "Ring counting as a dating method is not what she is describing." },
              { text: "To show that charcoal is unreliable.", why: "The charcoal is fine; the inference from it is what needs care." }
            ] },
          { q: "What does she say the laboratory's stated uncertainty covers?",
            options: [
              { text: "The measurement, and not the listener's inference from it.", correct: true,
                why: "She draws the line in two short sentences, which is where the whole talk has been going." },
              { text: "Both the measurement and the archaeological interpretation.", why: "She separates them explicitly." },
              { text: "Neither, since the figure is approximate.", why: "She calls the uncertainty honest." }
            ] },
          { q: "What should a reader do when a site report gives no account of the sample?",
            options: [
              { text: "Treat the date as a claim rather than a measurement.", correct: true,
                why: "Her closing instruction, and it echoes the first talk's line about an assertion." },
              { text: "Reject the site report entirely.", why: "She asks for a change in how the date is weighed, not for rejection." },
              { text: "Recalculate the correction.", why: "That was the marine correction in the first talk; this is a different problem." }
            ] }
        ] },

      { id: "b3", section: 2, sectionTitle: "Listen to an academic talk", letter: "C",
        concepts: ["listen", "claim"],
        kind: "notes", task: null, n: 0,
        prompt: "Play the first talk again and complete the outline while it runs.",
        audio: TALK1,
        title: "Lecture — who got there first",
        note: { kind: "reader",
                body: "<p>Notice that the four lines are not the four topics. They are the claim, the replacement, the concession, and the sentence the lecturer clearly wants you to leave with.</p>" },
        lines: [
          "Resist the question: who got there ___",
          "- Better question: what does the ___ of dates look like",
          "- Coastal dates are harder because ___ carbon behaves differently",
          "- A date without its correction stated is an ___, not a measurement"
        ],
        gaps: [
          { answer: "first", why: "her phrase, and the one she returns to in the last sentence." },
          { answer: "distribution", why: "the replacement question, and the reason she gives for preferring it." },
          { answer: "marine", why: "the technical cause, which Lesson 4's conversation then puts a number on." },
          { answer: "assertion", why: "the word Lesson 1 separated from <i>evidence</i>, arriving here as the talk's conclusion." }
        ] },

      { id: "c", section: 3, sectionTitle: "Ask for help", letter: "A",
        concepts: ["read"],
        kind: "phrases", task: null, n: 0,

        phrases: [

          { text: "Say what you have already tried.",

            say: "Say what you have already tried.",

            when: "First, before the question itself.",

            why: "It does two things at once: it respects the other person\u0027s time, and it shows you are not asking them to do the work for you." },

          { text: "Ask for a direction, not for the answer.",

            say: "Ask for a direction, not for the answer.",

            when: "Whenever the full answer would take longer than the other person has.",

            why: "A direction is cheap to give and nearly always enough. Asking for the answer makes helping expensive, and expensive help is refused." },

          { text: "Apologise once, at most.",

            say: "Apologise once, at most.",

            when: "At the start, briefly, and then not again.",

            why: "Repeated apology turns a small request into an occasion and makes the other person manage your discomfort as well as your question." },

          { text: "I\u0027ve looked in the catalogue and the index \u2014 could you point me at the right section?",

            say: "I have looked in the catalogue and the index. Could you point me at the right section?",

            when: "In a library, an office hour, or any request to someone who knows where things are.",

            why: "All three moves in one sentence: what you tried, a direction rather than an answer, and no apology at all." },

          { text: "I may be missing something obvious.",

            say: "I may be missing something obvious.",

            when: "When you suspect the answer is simple and you cannot see it.",

            why: "It gives the other person permission to say something simple without it sounding like a correction." },

          { text: "I\u0027ve not come across this before; what would you check first?",

            say: "I have not come across this before. What would you check first?",

            when: "When the problem is new to you and routine to them.",

            why: "<i>What would you check first</i> asks for their method rather than their conclusion, which is the part you can reuse next time." }

        ],
        prompt: "Asking for help is a skill, and most of it is in the framing. Hear each line, say it along with the model, then rate what you could produce unprompted.",
        note: { kind: "speak",
                body: "<i>I may be missing something obvious.</i><i>I've not come across this before.</i><i>Could you point me at the right section?</i>" },
        text: { every: 1, mastColor: "blue", masthead: "WHEN YOU WANT HELP AND NOT PITY",
          blocks: [
            { h: "Do this", lines: [
              "Say what you have already tried.",
              "Ask for a direction, not for the answer.",
              "Apologise once, at most."
            ] },
            { h: "Say this", lines: [
              "I've looked in the catalogue and the index — could you point me at the right section?",
              "I may be missing something obvious here.",
              "I've not come across this before; what would you check first?"
            ] }
          ] },
        after: "<p>Saying what you have already tried does two things at once: it respects the other person's time, and it shows you are not asking them to do the work.</p>" },

      { id: "c2", section: 3, sectionTitle: "Ask for help", letter: "B",
        concepts: ["measurement"],
        kind: "table", task: null, n: 0,
        prompt: "Complete the table from the chart in 3A. The right-hand column says what each move buys you.",
        caption: "Four moves, and what each one buys",
        head: ["Move", "What you say", "What it buys you"],
        rows: [
          ["Show your working", "I've looked in the catalogue and the ___", "a better answer, because they can skip what you did"],
          ["Ask for a direction", "Could you ___ me at the right section?", "a method, which works again next time"],
          ["Lower the stakes",   "I may be ___ something obvious here", "an answer with no embarrassment attached to it"],
          ["Admit it is new",    "I've not come across this ___; what would you check first?", "their ___, which is the thing worth having"]
        ],
        gaps: [
          { answer: "index", why: "naming two places is enough; a list of six sounds like a complaint." },
          { answer: "point", why: "<i>point me at</i> — a direction rather than the answer itself." },
          { answer: "missing", why: "the phrase that makes it easy for them to tell you something simple." },
          { answer: "before", why: "<i>come across</i> is the natural phrasal verb for meeting something for the first time." },
          { answer: "order", why: "what they would check first, which is more useful than what the answer turns out to be." }
        ] },

      { id: "c3", section: 3, sectionTitle: "Ask for help", letter: "C",
        concepts: ["read"],
        kind: "recap", task: null, n: 0,

        cases: [

          { id: "h1", label: "The polished question",

            detail: "Yara spends two minutes framing her question in the most sophisticated terms she can manage. The lecturer answers a question she did not ask." },

          { id: "h2", label: "The vague one",

            detail: "Sami says he does not really understand chapter four. The answer is a summary of chapter four, which he had already read." },

          { id: "h3", label: "The silent one",

            detail: "Ines knows exactly which line stopped her but thinks it is too small a thing to ask about, so she asks nothing." }

        ],

        takeaways: [

          { text: "The question that gets the best answer is <b>not the one that sounds cleverest</b>.", caseId: "h1",

            why: "Yara optimised for how the question sounded, and the cost was precision. The lecturer answered the question she appeared to be asking." },

          { text: "It is the one that shows <b>exactly where you got stuck</b>.", caseId: "h2",

            why: "<i>I do not understand chapter four</i> gives no purchase. Naming the sentence where it stopped making sense turns a lecture into a thirty-second answer." },

          { text: "<b>Exactly</b> \u2014 which means small is good.", caseId: "h3",

            why: "Ines has the most answerable question in the room and is not asking it. The smaller and more specific the stuck point, the better the answer it gets." }

        ],
        prompt: "One sentence to leave with \u2014 and three questions that are about to get a poor answer. Drag each part onto the one it would fix.",
        text: { blocks: [{ lines: [
          "The question that gets the best answer is not the one that sounds cleverest. It is the one that shows exactly where you got stuck."
        ],
        closer: { kind: "life",
          body: "<p>Next time you are stuck, write down what you have already tried <i>before</i> you ask. Notice whether the answer you get is better.</p>" } }] } }
    ]
  };
})();
