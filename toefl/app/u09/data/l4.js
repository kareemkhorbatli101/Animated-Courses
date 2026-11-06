/* Unit 9 · Cities and Movement — LESSON 4 · EVERYDAY CONVERSATION
   Pronunciation: the schwa. */
(function () {
  window.PAGE = {
    id: "u09-l4", unit: "u09", block: "l4", up: "../", tab: "ACADEMIC",
    objective: "Ask for directions, and give them usably",
    next: "l5.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Choose a response", letter: "A",
        concepts: ["listen"],
        kind: "respond", task: "listen-choose-response", cefr: "B2", n: 6,
        prompt: "You hear one short line. Choose the reply that fits.",
        note: { kind: "words",
                body: "<i>It's about ten minutes on foot.</i><i>You'll see it on your left.</i><i>I'd take the shuttle, honestly.</i>" },
        items: [
          { who: "mei", say: "How do I get to the science building?",
            options: [
              { text: "Straight on past the library, then left.", correct: true, why: "Directions, which is what <i>how do I get to</i> asks for." },
              { text: "It's a science building.", why: "Repeats the destination without directing." },
              { text: "I got there yesterday.", why: "Answers about the speaker's past." }
            ] },
          { who: "dan", say: "Is it walkable from here?",
            options: [
              { text: "About ten minutes, yes.", correct: true, why: "Answers the yes/no and quantifies it, which is what the asker actually needs." },
              { text: "It walks.", why: "Not possible — a building does not walk." },
              { text: "I walked it.", why: "Reports rather than advises." }
            ] },
          { who: "priya", say: "Does the shuttle stop at the north gate?",
            options: [
              { text: "Not at the moment — it's turning at the science building.", correct: true,
                why: "Answers no and gives the current alternative." },
              { text: "Yes, it's suspended.", why: "Contradicts itself." },
              { text: "It stopped.", why: "Ambiguous between <i>used to stop</i> and <i>came to a halt</i>." }
            ] },
          { who: "tomas", say: "I'm not sure I'm going the right way.",
            options: [
              { text: "Where are you trying to get to?", correct: true, why: "Finds out the destination before advising — the only useful first move." },
              { text: "You aren't.", why: "Possibly true, and useless without the destination." },
              { text: "I'm sure you are.", why: "Reassures without checking." }
            ] },
          { who: "dan", say: "The metro was packed, and the buses were too.",
            options: [
              { text: "Then walking might have been quicker.", correct: true, why: "Picks up the agreement pattern and draws a consequence." },
              { text: "The buses weren't either.", why: "<i>Either</i> contradicts the positive statement just made." },
              { text: "So the metro was empty.", why: "The opposite of what was said." }
            ] },
          { who: "mei", say: "If they'd kept the north gate stop, I'd have been on time.",
            options: [
              { text: "It's back next week, apparently.", correct: true,
                why: "The stop was <b>not</b> kept and she was <b>not</b> on time. Only this reply follows." },
              { text: "Good thing they kept it.", why: "The counterfactual says they did not." },
              { text: "So you were on time.", why: "The opposite of what the sentence implies." }
            ] }
        ] },

            { id: "1b", section: 1, sectionTitle: "Choose a response", letter: "B",
        concepts: ["listen"],
        kind: "respond", task: "listen-choose-response", cefr: "B2", n: 6,
        prompt: "Six more. Three of them agree with something, and the word you need depends on whether it was positive or negative.",
        items: [
          { who: "mei", say: "Am I going the right way for the science building?",
            options: [
              { text: "Yes — about ten minutes, and it's signposted after the library.", correct: true,
                why: "Confirms, gives the time, and names a landmark. Three answers to one question, all of them useful." },
              { text: "Yes, that's the way.", why: "True, and it leaves the asker with no way to check they are still right in five minutes." },
              { text: "It's building forty-one.", why: "A number is useless to somebody who does not already know the campus." }
            ] },
          { who: "dan", say: "The metro was packed this morning.",
            options: [
              { text: "So were the buses.", correct: true,
                why: "Agreeing with a positive statement, with the auxiliary borrowed and put in front of the subject." },
              { text: "Neither were the buses.", why: "<i>Neither</i> agrees with a negative, and nothing negative was said." },
              { text: "The buses weren't either.", why: "Also a negative agreement, to a positive remark." }
            ] },
          { who: "priya", say: "Widening the road didn't help.",
            options: [
              { text: "Neither did the new signals.", correct: true,
                why: "Negative agreement: <i>neither</i> in front, auxiliary before subject, and the verb itself stays positive." },
              { text: "So did the new signals.", why: "<i>So</i> agrees with a positive, and this statement was negative." },
              { text: "The new signals did too.", why: "<i>Too</i> is also for positives, and it would mean the signals <i>did</i> help." }
            ] },
          { who: "tomas", say: "How long is that on foot?",
            options: [
              { text: "Fifteen minutes, and mostly uphill.", correct: true,
                why: "A time and the thing that makes the time misleading, which is what the asker actually needs." },
              { text: "It's not far.", why: "Means nothing. <i>Not far</i> is a judgement and the asker wanted a number." },
              { text: "You can get a bus.", why: "Answers a question about an alternative, not the one asked." }
            ] },
          { who: "haddad", say: "By the time the second survey was taken, the traffic had returned.",
            options: [
              { text: "So the widening bought about a year.", correct: true,
                why: "Draws the consequence from the sequence, which is what the past perfect was marking." },
              { text: "So the traffic is still falling.", why: "<i>Had returned</i> says it came back before the survey." },
              { text: "The survey will be repeated.", why: "Both events are already in the past." }
            ] },
          { who: "dan", say: "If they'd priced it instead of widening it, we'd still have a high street.",
            options: [
              { text: "It's not too late to price it now.", correct: true,
                why: "They did <b>not</b> price it and the high street has gone. Only this reply works from that." },
              { text: "Good, so the high street survived.", why: "It did not; the counterfactual says so." },
              { text: "So they priced it instead.", why: "The whole sentence turns on their not having done so." }
            ] }
        ] },

      { id: "2a", section: 2, sectionTitle: "Listen to a conversation", letter: "A",
        concepts: ["listen", "inference"],
        kind: "listen", task: "listen-conversation", cefr: "C1", n: 4,
        prompt: "A visitor finding their way. Listen once.",
        speaker: "dan", speakerNote: "with Priya Raman",
        audio: { track: "9-05", label: "Finding the science building", lines: [
          { who: "priya", text: "Sorry — I'm looking for the science building. Am I going the right way?" },
          { who: "dan", text: "You are, but it's further than it looks. Fifteen minutes from here, and it's mostly uphill." },
          { who: "priya", text: "Is there a shuttle?" },
          { who: "dan", text: "There is, every ten minutes at the moment. Though it's not stopping at the north gate this week, so if that's where you're headed afterwards you'd have to walk back down." },
          { who: "priya", text: "No, the science building is the last thing." },
          { who: "dan", text: "Then take it. It leaves from behind the library, not the front." }
        ] },
        items: [
          { q: "What does Priya want?",
            options: [
              { text: "To know whether she is heading the right way.", correct: true, why: "Her opening question, prefaced by an apology." },
              { text: "To find the north gate.", why: "That comes up as Dan's caveat, and she rules it out." },
              { text: "To book a shuttle.", why: "No booking is involved." }
            ] },
          { q: "Why does Dan mention the north gate?",
            options: [
              { text: "To warn her the shuttle may not suit a later journey.", correct: true,
                why: "He raises it conditionally — <i>if that's where you're headed afterwards</i> — which is what makes it a warning rather than a fact." },
              { text: "To tell her the shuttle does not run.", why: "It runs every ten minutes." },
              { text: "Because she asked about it.", why: "She did not; he volunteers it." }
            ] },
          { q: "Why is the shuttle running every ten minutes rather than fifteen?",
            options: [
              { text: "The conversation does not say.", correct: true,
                why: "He gives the frequency and the suspended stop, but never connects them. An item that rewards not over-inferring." },
              { text: "Because the north gate stop is suspended.", why: "Plausible, and never stated — which is the trap." },
              { text: "Because it is the start of term.", why: "Not mentioned at all." }
            ] },
          { q: "What is Dan's last piece of advice?",
            options: [
              { text: "The shuttle leaves from behind the library.", correct: true, why: "His final line, and the <i>not the front</i> shows he expects the mistake." },
              { text: "To walk, because it is quicker.", why: "He tells her to take it." },
              { text: "To wait until next week.", why: "Never suggested." }
            ] }
        ] },

            { id: "2b", section: 2, sectionTitle: "Listen to a conversation", letter: "B",
        concepts: ["listen", "measurement"],
        kind: "listen", task: "listen-conversation", cefr: "C1", n: 4,
        prompt: "Two students comparing the shuttle with walking. Listen once.",
        speaker: "priya", speakerNote: "with Dan Okafor",
        audio: { track: "9-05", label: "Shuttle or walk", lines: [
          { who: "priya", text: "The shuttle takes eight minutes and it comes every fifteen." },
          { who: "dan", text: "So on average you wait seven and a half and ride eight." },
          { who: "priya", text: "Which is more than the fifteen it takes to walk." },
          { who: "dan", text: "On average, yes. But you know the walk will be fifteen, and you do not know what the wait will be." },
          { who: "priya", text: "So the shuttle is faster and less predictable at the same time." },
          { who: "dan", text: "It is not faster. It is the same, and worse to plan around." }
        ] },
        items: [
          { q: "How long is the average total shuttle journey?",
            options: [
              { text: "About fifteen and a half minutes.", correct: true,
                why: "Seven and a half waiting plus eight riding. Dan does the arithmetic aloud and Priya compares it." },
              { text: "Eight minutes.", why: "That is the ride alone, which is the figure the timetable advertises." },
              { text: "Seven and a half minutes.", why: "That is the average wait." }
            ] },
          { q: "What distinction does Dan draw?",
            options: [
              { text: "Between the average time and how predictable the time is.", correct: true,
                why: "<i>You know the walk will be fifteen, and you do not know what the wait will be</i>." },
              { text: "Between walking in summer and in winter.", why: "Weather never comes up." },
              { text: "Between the shuttle's timetable and its actual frequency.", why: "He accepts the fifteen-minute frequency throughout." }
            ] },
          { q: "What does Priya say in her last turn?",
            options: [
              { text: "That the shuttle is faster and less predictable.", correct: true,
                why: "She summarises, and she gets the first half wrong — which is why Dan corrects it." },
              { text: "That the shuttle is slower and more predictable.", why: "That reverses both halves." },
              { text: "That walking is always better.", why: "She never draws that conclusion." }
            ] },
          { q: "How does Dan correct her?",
            options: [
              { text: "It is not faster at all; it is the same and harder to plan around.", correct: true,
                why: "Fifteen and a half against fifteen, which is within the noise. The only real difference is the uncertainty." },
              { text: "It is faster, but only in the morning.", why: "No time of day is mentioned." },
              { text: "It is slower than walking.", why: "He says <i>the same</i>, which is more precise and more interesting." }
            ] }
        ] },

      { id: "3a", section: 3, sectionTitle: "Practise your pronunciation", letter: "A",
        concepts: ["speak"],
        kind: "repeat", task: "listen-and-repeat", cefr: "C1", n: 4,
        prompt: "The <b>schwa</b> /ə/ is the commonest sound in English and it has no spelling of its own. Unstressed syllables collapse into it, which is why fast English is hard to hear.",
        speaker: "haddad",
        lines: [
          { text: "It's about a minute.", note: "<i>about</i> and <i>a</i> both /ə/ — the vowels vanish." },
          { text: "The commuter takes the corridor to the centre.",
            note: "<i>comMUter</i>, <i>CORridor</i>, <i>CENtre</i> — every unstressed vowel is a schwa." },
          { text: "The operator and the regulator disagreed about the capacity.",
            note: "Six schwas. Say the stressed syllables firmly and let the rest fall away." },
          { text: "A congested corridor was widened and the congestion returned within a year.",
            note: "The top of this task's range — and the sentence is the whole unit in miniature." }
        ] },

      { id: "3b", section: 3, sectionTitle: "Practise your pronunciation", letter: "B",
        concepts: ["speak"],
        kind: "repeat", task: "listen-and-repeat", cefr: "C1", n: 4,
        prompt: "Four more. Say the stressed syllable firmly and let every other vowel fall to schwa. The rhythm is what makes it sound like English.",
        speaker: "haddad",
        lines: [
          { text: "A quarter of an hour.", note: "<i>a</i>, <i>-ter</i>, <i>of</i>, <i>an</i> — four schwas in five words." },
          { text: "The corridor was congested again this afternoon.",
            note: "<i>CORridor</i>, <i>conGESted</i>, <i>aGAIN</i>, <i>afterNOON</i>: one strong syllable each, everything else reduced." },
          { text: "The operator and the regulator disagreed about the figures.",
            note: "Seven schwas. If you give every vowel its full value the sentence takes twice as long and sounds wrong." },
          { text: "A commuter who considered the alternative would probably have travelled another way.",
            note: "The top of this task's range, and almost every unstressed syllable in it is the same sound." }
        ] },

      { id: "4a", section: 4, sectionTitle: "Hear the difference", letter: "A",
        concepts: ["sound"],
        kind: "minimal-pairs", task: null, n: 0,
        focus: "<p>The <b>schwa</b> /ə/ is the commonest sound in English and it has no letter of its own: any unstressed vowel collapses into it. That is why these four pairs are so easily confused. In each one the difference lives in a single unstressed syllable, which is exactly the syllable that disappears at speed.</p>" +
               "<i>/ə/ in the first syllable: accept · affect · about · again</i><i>A fuller vowel instead: except · effect · quite · personnel</i>",
        items: [
          { say: "accept",
            options: [
              { text: "accept", correct: true, why: "/əkˈsept/ — to take something offered. A verb, and the first vowel is a schwa." },
              { text: "except", why: "/ɪkˈsept/ — apart from. The first vowel is slightly higher, and almost nobody hears the difference without context." }
            ] },
          { say: "effect",
            options: [
              { text: "affect", why: "/əˈfekt/ — the verb: to have an influence on." },
              { text: "effect", correct: true, why: "/ɪˈfekt/ — the noun: the influence itself. The two are near-identical in speech and quite distinct on paper." }
            ] },
          { say: "quite",
            options: [
              { text: "quiet", why: "two syllables, /ˈkwaɪət/, with a schwa at the end." },
              { text: "quite", correct: true, why: "one syllable, /kwaɪt/. The difference is a whole syllable, and it still gets lost at speed." }
            ] },
          { say: "personnel",
            options: [
              { text: "personal", why: "/ˈpɜːsənəl/ — stress at the front, two schwas after it." },
              { text: "personnel", correct: true, why: "/pɜːsəˈnel/ — stress at the end, which is where the two words really part company." }
            ] }
        ] },

      { id: "4b", section: 4, sectionTitle: "Hear the difference", letter: "B",
        concepts: ["listen"],
        kind: "dictation", task: null, n: 0,
        prompt: "Play each line and write exactly what you hear. Most of the vowels in these lines are the same sound.",
        items: [
          { answer: "The corridor was congested again this afternoon",
            why: "four long words, one stressed syllable each, and every other vowel reduced to schwa." },
          { answer: "It is about a quarter of an hour on foot",
            why: "<i>about a quarter of an</i> is five unstressed syllables in a row." },
          { answer: "The metro was crowded and so were the buses",
            why: "<i>and so were the</i> runs together completely, and the inverted verb is the easiest word to lose." },
          { answer: "Widening did not help and neither did pricing",
            why: "<i>neither did</i> keeps its stress; everything around it does not." }
        ],
        closer: { kind: "test", body: "<p>Assess your own part: today I was able to … ask for directions · agree with <i>too</i> and <i>either</i> · let unstressed vowels fall to schwa.</p>" } }
    ]
  };
})();
