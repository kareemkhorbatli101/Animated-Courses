/* Unit 4 · Migration and the Human Past — LESSON 4 · EVERYDAY CONVERSATION
   Pronunciation: the two sounds spelt th. */
(function () {
  window.PAGE = {
    id: "u04-l4", unit: "u04", block: "l4", up: "../", tab: "ACADEMIC",
    objective: "Ask for help without losing face",
    next: "l5.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Choose a response", letter: "A",
        carry: "2a",
        concepts: ["listen"],
        kind: "respond", task: "listen-choose-response", cefr: "B2", n: 6,
        prompt: "You hear one short line. Choose the reply that fits.",
        note: { kind: "words",
                body: "<i>I've not come across that before.</i><i>Could you point me at the right section?</i><i>I may be missing something obvious.</i>" },
        items: [
          { who: "dan", say: "Have you been to the archive before?",
            options: [
              { text: "No, this is my first time.", correct: true, why: "A present-perfect question about experience takes a yes or no plus a detail." },
              { text: "I go tomorrow.", why: "Answers about the future, not about experience." },
              { text: "It was interesting.", why: "Implies a visit without saying whether there was one." }
            ] },
          { who: "mei", say: "How long have you worked on this site?",
            options: [
              { text: "Three seasons now.", correct: true, why: "<i>How long</i> + present perfect asks for a duration." },
              { text: "Since I will finish.", why: "Not a possible time expression." },
              { text: "I worked there.", why: "Simple past closes the period; the question assumes it is open." }
            ] },
          { who: "priya", say: "Sorry — I didn't catch the box number.",
            options: [
              { text: "Fourteen. I'll write it down for you.", correct: true, why: "Supplies the missing information and removes the problem." },
              { text: "You should have listened.", why: "Grammatically fine, socially a dead end." },
              { text: "I caught it.", why: "Answers about the speaker rather than helping." }
            ] },
          { who: "tomas", say: "Has anyone ordered the coastal folder?",
            options: [
              { text: "Not yet, I don't think.", correct: true, why: "<i>Not yet</i> is the natural partner of a present-perfect question with <i>anyone</i>." },
              { text: "Yes, tomorrow.", why: "<i>Yes</i> claims it is done, then puts it in the future." },
              { text: "I ordered it last week, so no.", why: "Contradicts itself." }
            ] },
          { who: "mei", say: "I may be missing something obvious here.",
            options: [
              { text: "No, it's genuinely confusing — let me show you.", correct: true,
                why: "Hears the hedge as a request for help and answers it without making the asker feel small." },
              { text: "Yes, you are.", why: "Technically responsive, and it punishes the asking." },
              { text: "I'm missing it too.", why: "Agrees without helping. Fine socially, useless practically." }
            ] },
          { who: "dan", say: "I'd have ordered it in advance if I'd read the notice.",
            options: [
              { text: "We can probably still get it for Friday.", correct: true,
                why: "The speaker did <b>not</b> read the notice and did <b>not</b> order it. Only this reply addresses the actual situation." },
              { text: "Good thing you read it.", why: "The counterfactual says they did not." },
              { text: "So it's already ordered.", why: "The opposite of what the sentence means." }
            ] }
        ] },

            { id: "1b", section: 1, sectionTitle: "Choose a response", letter: "B",
        carry: "2b",
        concepts: ["listen"],
        kind: "respond", task: "listen-choose-response", cefr: "B2", n: 6,
        prompt: "Six more. Three of them use the present perfect, and the reply has to hear what it is doing.",
        items: [
          { who: "mei", say: "Have you ever worked in an archive before?",
            options: [
              { text: "Once, two summers ago.", correct: true,
                why: "<i>Ever</i> asks about all of time up to now; the answer narrows it to one occasion." },
              { text: "Yes, I work there.", why: "Answers about a current job rather than about experience." },
              { text: "I will work there.", why: "The question is about the past, not the future." }
            ] },
          { who: "dan", say: "The folder still hasn't arrived.",
            options: [
              { text: "Did you order it a day ahead?", correct: true,
                why: "<i>Still hasn't</i> is a complaint with a cause implied; the reply goes after the cause." },
              { text: "It arrived yesterday.", why: "Contradicts the speaker about something they would know." },
              { text: "It has arrived already.", why: "Same contradiction, and <i>already</i> cannot sit beside <i>still hasn't</i>." }
            ] },
          { who: "priya", say: "Could you give me a hand with these boxes?",
            options: [
              { text: "Of course — which shelf are they going on?", correct: true,
                why: "Agrees and asks the one question that makes the help useful." },
              { text: "I have two hands.", why: "Takes an idiom literally." },
              { text: "Yes, they are heavy.", why: "Agrees that they are heavy, which is not what was asked." }
            ] },
          { who: "tomas", say: "I've been staring at this layer number for ten minutes.",
            options: [
              { text: "Shall I take a look?", correct: true,
                why: "The sentence is an indirect request for help. Answering the literal content would miss it entirely." },
              { text: "Ten minutes isn't long.", why: "Technically true and quite unhelpful." },
              { text: "I stared at it too.", why: "Matches the complaint without offering anything." }
            ] },
          { who: "haddad", say: "This is the first time I've seen that correction applied properly.",
            options: [
              { text: "Is it usually left out?", correct: true,
                why: "<i>The first time I have seen</i> implies it is usually not done, and the reply follows that implication." },
              { text: "Yes, I applied it yesterday.", why: "Answers about the occasion when the comment is about the pattern." },
              { text: "I have never seen it.", why: "Possible, but it takes the conversation away from the speaker's point." }
            ] },
          { who: "dan", say: "If I'd known the folder had to be ordered, I'd have done it on Monday.",
            options: [
              { text: "Order it now and we can go on Friday instead.", correct: true,
                why: "The folder was <b>not</b> ordered. Only this reply works from that and proposes a way out." },
              { text: "Good, so it will be here Thursday.", why: "It will not: the ordering did not happen." },
              { text: "You ordered it on Monday, then.", why: "The counterfactual says exactly the opposite." }
            ] }
        ] },

      { id: "2a", section: 2, sectionTitle: "Listen to a conversation", letter: "A",
        concepts: ["listen", "inference"],
        kind: "listen", task: "listen-conversation", cefr: "C1", n: 4,
        prompt: "A student at the archive desk. Listen once.",
        speaker: "priya", speakerNote: "with Dan Okafor",
        audio: { track: "4-05", label: "At the archive desk", lines: [
          { who: "priya", text: "I may be missing something obvious, but I can't find the coastal survey folder in the catalogue." },
          { who: "dan", text: "You won't — it's not catalogued with the others. It has been held in the restricted series since the nineteen nineties." },
          { who: "priya", text: "Does that mean I can't see it?" },
          { who: "dan", text: "You can, but it has to be ordered a day ahead, and you'll need your supervisor's name on the form." },
          { who: "priya", text: "Then I've left it too late for Thursday." },
          { who: "dan", text: "For Thursday, yes. Order it today and it'll be here Friday morning." }
        ] },
        items: [
          { q: "What is Priya's problem?",
            options: [
              { text: "She cannot find a folder in the catalogue.", correct: true, why: "Her opening line states it, prefaced by a face-saving hedge." },
              { text: "She has lost her supervisor's name.", why: "The supervisor's name is a requirement Dan introduces later." },
              { text: "The archive is closed on Thursday.", why: "Thursday is a timing problem, not a closure." }
            ] },
          { q: "Why is the folder not in the catalogue?",
            options: [
              { text: "It has been in a restricted series since the nineties.", correct: true,
                why: "Present perfect with <i>since</i> — a state that began then and still holds." },
              { text: "It was lost.", why: "Nothing suggests that." },
              { text: "It has not been catalogued yet.", why: "It is deliberately held elsewhere, not pending." }
            ] },
          { q: "Why does Dan mention the supervisor's name?",
            options: [
              { text: "To tell her what the order form will require.", correct: true,
                why: "His purpose is procedural: this is a second condition on getting the folder." },
              { text: "To check that she is a registered student.", why: "He does not question her status." },
              { text: "To suggest she ask her supervisor instead.", why: "He is telling her how to order it herself." }
            ] },
          { q: "What is the outcome?",
            options: [
              { text: "She can have it on Friday if she orders it today.", correct: true,
                why: "Dan's last line concedes Thursday and offers Friday on a condition." },
              { text: "She can have it on Thursday.", why: "He agrees that Thursday is now too late." },
              { text: "She cannot see it at all.", why: "He says she can — with two conditions." }
            ] }
        ] },

            { id: "2b", section: 2, sectionTitle: "Listen to a conversation", letter: "B",
        concepts: ["listen"],
        kind: "listen", task: "listen-conversation", cefr: "C1", n: 4,
        prompt: "Two students working out why two dates disagree. Listen once.",
        speaker: "tomas", speakerNote: "with Mei Lin",
        audio: { track: "4-05", label: "Two dates that disagree", lines: [
          { who: "tomas", text: "The shell gives eleven thousand two hundred. The charcoal from the same layer gives ten thousand six hundred." },
          { who: "mei", text: "Six hundred years apart, in one layer." },
          { who: "tomas", text: "Has the marine correction been applied to the shell?" },
          { who: "mei", text: "I assumed so. It does not say on the sheet." },
          { who: "tomas", text: "Then that is where I would look first. It is usually about four hundred years, and in some places more." },
          { who: "mei", text: "Which would leave two hundred, and two hundred is just two dates." }
        ] },
        items: [
          { q: "How far apart are the two dates as reported?",
            options: [
              { text: "Six hundred years.", correct: true,
                why: "Mei states it, having subtracted the two figures Tomás gave. The item tests whether you tracked both numbers." },
              { text: "Four hundred years.", why: "That is the size of the correction Tomás mentions afterwards." },
              { text: "Two hundred years.", why: "That is what would be left once the correction is applied." }
            ] },
          { q: "What does Tomás suspect?",
            options: [
              { text: "The marine correction may not have been applied to the shell date.", correct: true,
                why: "He asks it as a question, which in this register is how a suspicion is usually offered." },
              { text: "The charcoal came from a different layer.", why: "Both are said to come from the same layer." },
              { text: "One of the measurements was made badly.", why: "He points at a processing step, not at the measurement." }
            ] },
          { q: "What does Mei say about the record sheet?",
            options: [
              { text: "It does not record whether the correction was applied.", correct: true,
                why: "<i>I assumed so. It does not say on the sheet.</i> — the gap in the record is the real finding here." },
              { text: "It says the correction was applied.", why: "She says it does not say either way." },
              { text: "She has not looked at it.", why: "She has: that is how she knows it is silent." }
            ] },
          { q: "What does Mei mean by “two hundred is just two dates”?",
            options: [
              { text: "A gap that small is ordinary disagreement, not a problem to explain.", correct: true,
                why: "She is saying the discrepancy would disappear into normal uncertainty once the correction is applied." },
              { text: "Two hundred years is too large to ignore.", why: "The whole point of <i>just</i> is that it is small." },
              { text: "Two more dates are needed.", why: "<i>Two dates</i> here means the ordinary scatter between any two measurements." }
            ] }
        ] },

      { id: "3a", section: 3, sectionTitle: "Practise your pronunciation", letter: "A",
        concepts: ["speak"],
        kind: "repeat", task: "listen-and-repeat", cefr: "C1", n: 4,
        prompt: "<b>th</b> spells two different sounds. Voiceless /θ/ in <i>think</i>; voiced /ð/ in <i>this</i>. Grammar words usually take the voiced one.",
        speaker: "haddad",
        lines: [
          { text: "This is the third one.", note: "<i>This</i> and <i>the</i> voiced /ð/; <i>third</i> voiceless /θ/." },
          { text: "They thought the other three were earlier.",
            note: "<i>They, the, other</i> voiced; <i>thought, three</i> voiceless." },
          { text: "Although they have been there for months, nothing has been published.",
            note: "<i>Although, they, there</i> voiced; <i>months, nothing</i> voiceless." },
          { text: "The authors who gathered these northern samples thought them worth another look.",
            note: "Relative clause plus a complex noun phrase, with both sounds throughout." }
        ] },

      { id: "3b", section: 3, sectionTitle: "Practise your pronunciation", letter: "B",
        concepts: ["speak"],
        kind: "repeat", task: "listen-and-repeat", cefr: "C1", n: 4,
        prompt: "Four more lines. The grammar words — <i>the, this, that, they, them, there</i> — almost all take the voiced one.",
        speaker: "haddad",
        lines: [
          { text: "They think this is the third.", note: "Voiced /ð/ in <i>They, this, the</i>; voiceless /θ/ in <i>think, third</i>." },
          { text: "Both of those methods are worth the trouble.",
            note: "/θ/ in <i>Both, worth</i>; /ð/ in <i>those, the</i>. The two sounds alternate across six words." },
          { text: "There is nothing in that layer thicker than a thumb.",
            note: "/ð/ in <i>There, that, than</i>; /θ/ in <i>nothing, thicker, thumb</i>." },
          { text: "The authors thought the three thin layers belonged together rather than to the north.",
            note: "Eight of the two sounds in one sentence, including the hardest pair: <i>thought the</i>." }
        ] },

      { id: "4a", section: 4, sectionTitle: "Hear the difference", letter: "A",
        concepts: ["sound"],
        kind: "minimal-pairs", task: null, n: 0,
        focus: "<p>Two sounds, one spelling. The tongue goes between the teeth for both. <b>/θ/</b> is voiceless, as in <i>think</i>; <b>/ð/</b> is voiced, as in <i>this</i>. There is no rule in the spelling, but there is one in the grammar: <i>the, this, that, they, there, then, than, though</i> are all voiced.</p>" +
               "<i>/θ/ — thin · thigh · breath · worth</i><i>/ð/ — then · thy · breathe · worthy</i>",
        items: [
          { say: "thin",
            options: [
              { text: "thin", correct: true, why: "/θ/ — voiceless. Put a finger on your throat and there is no buzz." },
              { text: "then", why: "/ð/ — voiced, and a grammar word, which is the usual clue." }
            ] },
          { say: "breathe",
            options: [
              { text: "breath",  why: "/θ/ — the noun, with a short vowel and no voice at the end." },
              { text: "breathe", correct: true, why: "/ð/ — the verb. The <i>e</i> on the end both lengthens the vowel and voices the consonant." }
            ] },
          { say: "worth",
            options: [
              { text: "worth",  correct: true, why: "/θ/ — voiceless at the end of the word." },
              { text: "worthy", why: "/ð/ — adding the ending voices the consonant, as it does in <i>north → northern</i>." }
            ] },
          { say: "this",
            options: [
              { text: "thistle", why: "/θ/ — a content word, so the voiceless one, despite the identical first three letters." },
              { text: "this",    correct: true, why: "/ð/ — a grammar word. This is the single most useful rule in the pair." }
            ] }
        ] },

      { id: "4b", section: 4, sectionTitle: "Hear the difference", letter: "B",
        concepts: ["listen"],
        kind: "dictation", task: null, n: 0,
        prompt: "Play each line and write exactly what you hear. Spelling counts; punctuation does not.",
        items: [
          { answer: "They think the third layer is older than this one",
            why: "Five of the two sounds, and <i>than</i> and <i>then</i> are easy to confuse when unstressed." },
          { answer: "Both of these dates are worth checking again",
            why: "<i>Both of these</i> moves from voiceless to voiced inside three words." },
          { answer: "There is nothing in that layer thicker than a thumb",
            why: "<i>There is nothing</i> reduces almost to one word in connected speech." },
          { answer: "The authors have not published the site for fifty years",
            why: "A present perfect with <i>for</i>, which Lesson 3 separated from <i>since</i>." }
        ],
        closer: { kind: "test", body: "<p>Assess your own part: today I was able to … ask for help without apologising twice · use <i>for</i> and <i>since</i> · hear the two <i>th</i> sounds.</p>" } }
    ]
  };
})();
