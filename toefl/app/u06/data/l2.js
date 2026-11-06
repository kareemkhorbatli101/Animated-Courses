/* Unit 6 · Food, Energy and the Body — LESSON 2 · WRITING
   The book's Unit 6 writing strategy: sequencing. */
(function () {
  window.PAGE = {
    id: "u06-l2", unit: "u06", block: "l2", up: "../", tab: "NAVIGATIONAL",
    objective: "Put a process in order, and say so",
    next: "l3.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Prepare to write", letter: "A",
        concepts: ["read", "sample"],
        kind: "annotate", task: null, n: 0,
        jobs: ["Opens the sequence", "Marks a stage that depends on the last one",
               "States a condition, and what to do if it fails",
               "Marks the stage that was being waited for", "Closes the sequence"],
        sentences: [
          { text: "First, the sample is warmed to thirty-seven degrees and held there for five minutes.",
            job: "Opens the sequence",
            why: "<i>First</i> does nothing except say where to start, which is enough. The passive keeps the focus on the sample rather than on who warmed it." },
          { text: "Once it has reached temperature, the enzyme is added and the timer started.",
            job: "Marks a stage that depends on the last one",
            why: "<i>Once</i> says this cannot happen until that has. A reader now knows the order is not merely the order of the sentences." },
          { text: "At this point the mixture should begin to clear; if it does not, the enzyme has been denatured and the run must be abandoned.",
            job: "States a condition, and what to do if it fails",
            why: "The stage that makes this a method rather than a recipe. A sequence that cannot fail has told you nothing about what to watch for." },
          { text: "Only then, with a visible change under way, is the first reading taken.",
            job: "Marks the stage that was being waited for",
            why: "<i>Only then</i> carries the inversion with it: <i>is the first reading taken</i>, not <i>the first reading is taken</i>. That inversion is obligatory after a fronted <i>only</i>." },
          { text: "Finally, readings are taken at one-minute intervals for ten minutes and plotted against time.",
            job: "Closes the sequence",
            why: "<i>Finally</i> tells the reader to stop looking for more steps, which is a real service in a method they may be following with their hands busy." }
        ],
        prompt: "The model describes a sequence, and every stage is marked. Click each stage and name the job its marker is doing \u2014 a reader should never have to work out which step comes first.",
        note: { kind: "writer",
                body: "<p>When you describe a process, mark the order explicitly: <i>first · once · at this point · only then · finally</i>. A reader should never have to work out which step comes before which.</p>" },
        text: { every: 1, blocks: [{ lines: [
          "<b>First</b>, the sample is warmed to thirty-seven degrees and held there for five minutes.",
          "<b>Once</b> it has reached temperature, the enzyme is added and the timer started.",
          "<b>At this point</b> the mixture should begin to clear; if it does not, the enzyme has been denatured and the run must be abandoned.",
          "<b>Only then</b>, with a visible change under way, is the first reading taken.",
          "<b>Finally</b>, readings are taken at one-minute intervals for ten minutes and plotted against time."
        ] }] },
        after: "<p>Notice that one stage carries a condition. A sequence that cannot fail is a recipe, not a method.</p>" },

      { id: "1b", section: 1, sectionTitle: "Prepare to write", letter: "B",
        concepts: ["claim"],
        kind: "choice", task: null, n: 0,
        prompt: "Which sentence in the model does the most to protect the reader?",
        options: [
          { text: "The one beginning <i>At this point</i> — it says what should happen and what to do if it does not.", correct: true,
            why: "A method that only describes success leaves the reader stranded the first time something goes wrong. This is the sentence that anticipates that." },
          { text: "The one beginning <i>First</i> — it establishes the starting conditions.",
            why: "Necessary, but any method has one. It does not help a reader whose run is going wrong." },
          { text: "The one beginning <i>Finally</i> — it gives the measurement schedule.",
            why: "Useful detail, but it assumes everything before it worked." }
        ] },

            { id: "1c", section: 1, sectionTitle: "Prepare to write", letter: "C",
        concepts: ["sequence", "measurement"],
        kind: "sequence", task: null, n: 0,
        prompt: "This unit's writing strategy is sequencing. Put the five stages of a method section in the order a reader needs them.",
        note: { kind: "writer",
                body: "<p>A method section is written so that somebody else can repeat the work. That is a stricter test than being understood, and it is what decides the order: anything a reader needs <i>before</i> they act has to come before the action.</p>" },
        steps: [
          { text: "State the starting conditions", pos: 1,
            why: "temperature, volume, concentration. A reader who begins without these has already diverged from what you did." },
          { text: "Give the actions in the order they happened", pos: 2,
            why: "and only in that order. A method that reports the interesting step first cannot be followed." },
          { text: "Say what should be observed at each point", pos: 3,
            why: "so that a reader knows whether they are still on the same path as you." },
          { text: "Say what to do if it is not observed", pos: 4,
            why: "the step most methods leave out, and the one that saves the most time." },
          { text: "Give the measurement schedule", pos: 5,
            why: "last, because it governs the whole run and is easier to hold once the run is understood." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Build the sentences", letter: "A",
        concepts: ["word"],
        kind: "orderset", task: "build-a-sentence", cefr: "C1", n: 4,
        prompt: "Put the words in order. Watch where the object goes.",
        items: [
          { cue: "A separable phrasal verb with a noun object.", band: "A2",
            target: "Enzymes break the starch down into simple sugars",
            extra: ["downs", "over"],
            why: "Separable, so the noun may sit in the middle. <i>Break down the starch</i> is equally correct." },
          { cue: "The same verb with a pronoun.", band: "B1",
            target: "The enzyme breaks it down within minutes",
            extra: ["down it", "downs"],
            why: "With a pronoun the object <b>must</b> go in the middle. <i>Breaks down it</i> is not possible." },
          { cue: "An inseparable phrasal verb.", band: "B2",
            target: "We went over the method before we started",
            extra: ["the method over", "overs"],
            why: "<i>Go over</i> is inseparable: the object never splits it." },
          { cue: "A sequence with a condition.", band: "C1",
            target: "Once the sample has reached temperature the enzyme is added",
            extra: ["after that", "then", "when will"],
            why: "<i>Once</i> + present perfect marks a stage that must be complete before the next begins." }
        ] },

            { id: "2b", section: 2, sectionTitle: "Build the sentences", letter: "B",
        concepts: ["word"],
        kind: "orderset", task: "build-a-sentence", cefr: "C1", n: 4,
        prompt: "Four more. These are the sentences a sequence needs to hold together.",
        items: [
          { cue: "Mark the first stage.", band: "A2",
            target: "First bring the water bath up to thirty seven degrees",
            extra: ["up the water bath", "firstly"],
            why: "<i>Bring up</i> split by its noun object, and <i>First</i> as a sequence marker rather than <i>Firstly</i>, which is heavier." },
          { cue: "Mark a point inside the sequence.", band: "B1",
            target: "At this point the solution should have turned pale blue",
            extra: ["turns", "has", "will"],
            why: "<i>Should have</i> + participle for an expected result, which quietly tells the reader what to check." },
          { cue: "Say what to do if it does not.", band: "B2",
            target: "If the colour has not changed leave the tube for a further two minutes",
            extra: ["will", "changing", "did"],
            why: "A present perfect in the <i>if</i> clause for a state that has failed to arrive, and an imperative in the main clause." },
          { cue: "Mark the last stage, with a schedule.", band: "C1",
            target: "Finally take a reading every thirty seconds until the curve flattens",
            extra: ["taking", "will", "since"],
            why: "<i>Until</i> + present for a future endpoint, which is why there is no <i>will</i> anywhere in it." }
        ] },

      { id: "2c", section: 2, sectionTitle: "Build the sentences", letter: "C",
        concepts: ["correct", "sample"],
        kind: "errorfix", task: null, n: 0,
        prompt: "Five lines from method sections. One word in each is wrong. Click it, then type the correction.",
        items: [
          { text: "Warm the sample up for five minutes before add the enzyme.",
            fixed: "Warm the sample up for five minutes before adding the enzyme.",
            wrong: "add", right: "adding",
            why: "<i>Before</i> is a preposition here, so the verb after it takes <i>-ing</i>." },
          { text: "We gone over the method twice before we started.",
            fixed: "We went over the method twice before we started.",
            wrong: "gone", right: "went",
            why: "<i>Gone</i> is the participle and needs an auxiliary. With none here the verb must be the simple past, <i>went</i>." },
          { text: "The enzyme break the starch down within minutes.",
            fixed: "The enzyme breaks the starch down within minutes.",
            wrong: "break", right: "breaks",
            why: "<i>Enzyme</i> is singular. The particle sitting two words away is what makes the ending easy to lose." },
          { text: "Those readings are their's and these are ours.",
            fixed: "Those readings are theirs and these are ours.",
            wrong: "their's", right: "theirs",
            why: "No possessive pronoun takes an apostrophe. The sentence gets <i>ours</i> right, which makes the first one stranger." },
          { text: "Once the bath reach temperature, add the enzyme.",
            fixed: "Once the bath reaches temperature, add the enzyme.",
            wrong: "reach", right: "reaches",
            why: "A time clause about the future takes a present form, never <i>will</i> — and here it needs the third-person <i>-s</i>." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Write and check", letter: "A",
        concepts: ["write"],
        kind: "discussion", task: "write-academic-discussion", cefr: "C1", n: 1,
        prompt: "A discussion question about how nutrition is communicated.",
        minWords: 100,
        posts: [
          { who: "haddad", role: "prof",
            text: "Food packaging gives a single calorie figure. Is that figure useful to the person reading it, or misleading? Give a reason." },
          { who: "priya", when: "4 hours ago",
            text: "Useful. It's imperfect but comparable — you can hold two packets side by side and learn something. Perfect information nobody understands is worth less than rough information everybody does." },
          { who: "tomas", when: "2 hours ago",
            text: "It measures heat released by burning food in a machine. That isn't what happens in a body, and printing it in bold suggests a precision that doesn't exist." }
        ],
        checklist: [
          "I stated my position in the first paragraph.",
          "I gave a reason or an example.",
          "I answered Priya or Tomás <b>by name</b>.",
          "I wrote 100 words or more."
        ],
        model: "<p>I think both are right about different things, and the disagreement is really about what a number on a packet is <i>for</i>.</p><p>Tomás is correct that the figure measures combustion in a calorimeter rather than metabolism in a person, and that two foods of equal calorific value can behave quite differently once eaten.</p><p>But Priya's point is about comparison, not accuracy. A consistently wrong measure can still rank things correctly, and ranking is what most people are doing in a supermarket. What I would change is not the number but the typography: printing it in bold implies a precision the method does not have.</p>" },

      { id: "4a", section: 4, sectionTitle: "Write a second reply", letter: "A",
        concepts: ["write"],
        kind: "discussion", task: "write-academic-discussion", cefr: "C1", n: 1,
        prompt: "A second question, about a number everybody uses and nobody checks.",
        minWords: 100,
        note: { kind: "writer",
                body: "<p>Both classmates agree about the physiology and disagree about what a public figure is for. A reply that explains the physiology again has not reached the disagreement.</p>" },
        posts: [
          { who: "haddad", role: "prof",
            text: "Dietary guidance is usually given as a single daily figure — two thousand calories, five portions, two litres. Requirements vary enormously between individuals. Is a single figure the right way to give public advice?" },
          { who: "mei", when: "4 hours ago",
            text: "Yes, because advice nobody can act on is not advice. A figure that is wrong for most people individually can still move the average in the right direction, and that is what public guidance is for." },
          { who: "dan", when: "90 minutes ago",
            text: "A figure presented without its spread teaches people that there is a correct amount and that they are failing to hit it. That has costs of its own, and they fall hardest on the people least able to absorb them." }
        ],
        checklist: [
          "My first paragraph says whether a single figure is right.",
          "I used a phrasal verb or its single-word equivalent accurately.",
          "I answered Mei or Dan <b>by name</b> and conceded something fair.",
          "I wrote about what the advice does to the reader, not only about accuracy.",
          "I wrote 100 words or more."
        ],
        model: "<p>A single figure, with a range printed next to it in the same size.</p>" +
               "<p>Mei is right about the purpose. Public guidance is a lever on a population, not a prescription for a person, and a figure that shifts the average has done its job whether or not it suits any particular reader.</p>" +
               "<p>Dan has identified the cost of how it is printed rather than of the figure itself. A number in bold with nothing beside it reads as a target; the same number with <i>most adults need between</i> in front of it reads as a guide. That change costs one line and does not weaken the lever at all.</p>",
        closer: { kind: "test", body: "<p>After this writing lesson, I can… / I need more help with…</p>" } },
    ]
  };
})();
