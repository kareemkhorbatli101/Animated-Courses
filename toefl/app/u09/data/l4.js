/* Unit 9 · Cities and Movement — LESSON 4 · EVERYDAY CONVERSATION
   Pronunciation: the schwa. */
(function () {
  window.PAGE = {
    id: "u09-l4", unit: "u09", block: "l4", up: "../", tab: "ACADEMIC",
    objective: "Ask for directions, and give them usably",
    next: "l5.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Choose a response", letter: "A",
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

      { id: "2a", section: 2, sectionTitle: "Listen to a conversation", letter: "A",
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

      { id: "3a", section: 3, sectionTitle: "Practise your pronunciation", letter: "A",
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
        ],
        closer: { kind: "test", body: "<p>Assess your own part: today I was able to … ask for directions · agree with <i>too</i> and <i>either</i> · let unstressed vowels fall to schwa.</p>" } }
    ]
  };
})();
