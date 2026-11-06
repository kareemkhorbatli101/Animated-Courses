/* Unit 6 · Food, Energy and the Body — TEAMWORK & LANGUAGE REVIEW */
(function () {
  window.PAGE = {
    id: "u06-tw", unit: "u06", block: "tw", up: "../", tab: "NAVIGATIONAL",
    objective: "Review the unit, and report a failed run in order",
    next: "index.html",
    scenes: [
      { id: "a", section: 1, sectionTitle: "Problem solving", letter: "A",
        kind: "write-email", task: "write-an-email", cefr: "C1", n: 1,
        prompt: "Read the situation, then write the email. This unit's writing strategy is sequencing — mark every stage.",
        scenarioTitle: "The situation",
        scenario: "<p>Your enzyme assay failed. You added the enzyme before the water bath reached thirty-seven degrees, which denatured it, and you only noticed after twelve minutes when the mixture had not cleared. There is enough reagent for one more run, but not this week.</p><p><b>Write to the demonstrator.</b> Report what happened in order, say what you think went wrong, and ask whether you may repeat the run next week.</p>",
        to: "d.okafor@university.edu", re: "Enzyme assay — failed run, request to repeat",
        placeholder: "Dear Dan,…",
        minWords: 70,
        note: { kind: "help",
                body: "<i>I am writing to report…</i><i>First… Once… At this point…</i><i>I think what went wrong is…</i><i>Would it be possible to…?</i>" },
        checklist: [
          "I said why I was writing in the first sentence.",
          "I described the stages <b>in order</b>, and marked them.",
          "I said what I think went wrong, without guessing wildly.",
          "I made one specific request."
        ],
        model: "<p>Dear Dan,</p><p>I am writing to report that our enzyme assay failed this morning, and to ask whether we may repeat it next week.</p><p>First, we set the bath to thirty-seven and added the sample. Once it was in, we added the enzyme straight away rather than waiting for the bath to come up to temperature. At this point the mixture should have begun to clear; after twelve minutes it had not.</p><p>I think the enzyme was denatured by being warmed from cold along with the sample. We have enough reagent for one further run, but not until next week.</p><p>Would it be possible to book a bath for Tuesday?</p><p>Kind regards,<br>Tomás Ferreira</p>" },

            { id: "a2", section: 1, sectionTitle: "Problem solving", letter: "B",
        kind: "write-email", task: "write-an-email", cefr: "C1", n: 1,
        prompt: "A second situation. This one asks you to withdraw a result you have already submitted.",
        scenarioTitle: "The situation",
        scenario: "<p>Your group's practical report, submitted on Monday, contains a calibration curve that every point sits exactly on. You have since realised the concentrations were calculated from that same curve, so the fit demonstrates nothing. The marks are released on Friday.</p><p><b>Write to the demonstrator.</b> Say what is wrong with the report you have already handed in, explain the circularity in plain language, and propose what should happen.</p>",
        to: "d.okafor@university.edu", re: "Monday's practical report — calibration curve is circular",
        placeholder: "Dear Dan,…",
        minWords: 70,
        note: { kind: "help",
                body: "<p>The hard part of this message is that nobody has asked for it. Say in the first sentence that you are reporting a problem with your own work, or the reader will spend two paragraphs waiting for a complaint about somebody else's.</p><i>I am writing about our own report…</i><i>What we did was…, which means…</i><i>We would rather…</i>" },
        checklist: [
          "My first sentence makes clear the problem is in my own work.",
          "I described the circularity in a way a reader could check.",
          "I used a phrasal verb or its single-word equivalent accurately.",
          "I proposed something specific rather than asking what to do.",
          "I did not apologise more than once."
        ],
        model: "<p>Dear Dan,</p>" +
               "<p>I am writing about a problem we have found in our own report, which we submitted on Monday.</p>" +
               "<p>The calibration curve on page three fits every point exactly. We worked out why last night: we calculated the concentrations from that curve and then plotted them against it, so the fit was guaranteed by the method and shows nothing at all about the samples.</p>" +
               "<p>We would rather the figure were withdrawn than marked. If it helps, we can go over the raw absorbances and produce a plot of the measured values on their own before Friday. I am sorry we did not catch it before submitting.</p>" +
               "<p>Kind regards,<br>Priya Raman</p>" },

      { id: "b", section: 2, sectionTitle: "Take an interview", letter: "A",
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "One question, one pass, forty-five seconds.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Describe a process you know well, step by step. Make the order clear.",
        model: "<p>I will describe an enzyme assay. First you set the water bath to thirty-seven degrees and let it stabilise, which takes a few minutes. Once it is at temperature, you put the sample in and let it equilibrate. Only then do you add the enzyme and start the timer. At this point the mixture should begin to clear within about five minutes; if it does not, the enzyme has probably been denatured and you have to start again. Finally you take readings every minute for ten minutes and plot them against time.</p>" },

      { id: "c", section: 2, sectionTitle: "Take an interview", letter: "B",
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "A second question, asking for an opinion.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Should food packaging give more information than it does, or less? Why?",
        model: "<p>Differently rather than more. A single calorie figure measures heat released by burning the food, which is not what happens in a body, and printing it in large bold type suggests a precision the method does not have. I would keep the number, because it lets you compare two packets, but I would present it as approximate. Adding more figures would not help — most people are making a quick comparison in a shop, not conducting an analysis.</p>" },

            { id: "c2", section: 2, sectionTitle: "Take an interview", letter: "C",
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "A third question, about a time you did not understand and said so.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Describe a time you realised halfway through that you had misunderstood an instruction. What did you do?",
        model: "<p>In a practical last term I added the enzyme while the water bath was still warming up, because I had heard <i>once it is warm</i> as <i>while it warms</i>. Twelve minutes later nothing had cleared and I assumed the enzyme was old. What I should have done at the start was say the instruction back in my own words, which takes about four seconds. What I actually did was stop, tell the demonstrator what I had done rather than what had gone wrong, and we worked out the cause in under a minute.</p>" },

      { id: "c3", section: 2, sectionTitle: "Take an interview", letter: "D",
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "A fourth question, asking you to judge how a subject is taught.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Is it better to teach a simple rule that is slightly wrong, or a complicated one that is right? Give a reason.",
        model: "<p>The simple rule, as long as it is taught as a first approximation and not as the truth. The energy equation is a good example: it is true and nearly useless for prediction, and teaching it as a fact produces people who believe the arithmetic and conclude that anyone it fails is lying. If the same rule is introduced as a starting point with its known failure attached, you get the same usefulness without the damage. So my answer is really about the labelling rather than about the rule.</p>" },

      { id: "d", section: 3, sectionTitle: "Language review", letter: "A",
        kind: "quiz", task: null, n: 0,
        prompt: "Interleaved across the unit.",
        items: [
          { q: "The enzyme breaks ____ almost immediately.", from: "Lesson 3",
            options: [
              { text: "it down", correct: true, why: "A pronoun object must split a separable phrasal verb." },
              { text: "down it", why: "Not possible with a pronoun." },
              { text: "down of it", why: "No such pattern." }
            ] },
          { q: "We ____ the method before we started.", from: "Lesson 3",
            options: [
              { text: "went over", correct: true, why: "<i>Go over</i> is inseparable, so the object follows the whole verb." },
              { text: "went it over", why: "Inseparable verbs never split." },
              { text: "went over of", why: "No such pattern." }
            ] },
          { q: "Those readings are ____.", from: "Lesson 3",
            options: [
              { text: "ours", correct: true, why: "A possessive pronoun: no noun after it, no apostrophe." },
              { text: "our's", why: "Possessive pronouns never take an apostrophe." },
              { text: "ours readings", why: "<i>Ours</i> cannot be followed by a noun; <i>our readings</i> would be correct." }
            ] },
          { q: "The article says the number on a packet measures:", from: "Lesson 5",
            options: [
              { text: "heat released when the food is burned in a laboratory.", correct: true, why: "Its exact claim, and the pivot of the piece." },
              { text: "energy absorbed by the body.", why: "That is precisely what it says the figure is <i>not</i>." },
              { text: "the mass of each nutrient class.", why: "Mass is not what a calorie measures." }
            ] },
          { q: "You hear: “If we'd checked the bath, we wouldn't have lost the run.” This means:", from: "Lesson 4",
            options: [
              { text: "they did not check it, and they lost the run.", correct: true, why: "A past counterfactual reverses both clauses." },
              { text: "they checked it and kept the run.", why: "<i>We'd have</i> marks what did not happen." },
              { text: "the run is still going.", why: "The sentence is about a finished run." }
            ] },
          { q: "Professor Haddad says that when intake falls, the body:", from: "On Campus",
            options: [
              { text: "quietly reduces what it spends.", correct: true, why: "Her central practical point, with three named mechanisms." },
              { text: "draws the whole difference from stored fat.", why: "That is the assumption she corrects." },
              { text: "raises body temperature to compensate.", why: "She says it lowers it slightly." }
            ] },
          { q: "Which phrasal verb cannot be split by its object?", from: "Lesson 1",
            options: [
              { text: "go over", correct: true, why: "Inseparable: <i>went over the method</i>, never <i>went the method over</i>." },
              { text: "break down", why: "Separable: <i>break the starch down</i>, <i>break it down</i>." },
              { text: "use up", why: "Separable, and with a pronoun it must split." }
            ] },
          { q: "Those readings are ____ and the rest are theirs.", from: "Lesson 3",
            options: [
              { text: "ours", correct: true, why: "No noun follows, so the possessive pronoun form, and no apostrophe." },
              { text: "our", why: "<i>Our</i> needs a noun after it." },
              { text: "our's", why: "No possessive pronoun takes an apostrophe." }
            ] },
          { q: "You hear <i>picke-di-tup</i>. The speaker said:", from: "Lesson 4",
            options: [
              { text: "picked it up", correct: true, why: "Three words. The consonants have linked onto the following vowels." },
              { text: "picked up it", why: "Impossible with a pronoun object." },
              { text: "pick it up", why: "The <i>-ed</i> is there, carrying the tense, even without a separate syllable." }
            ] },
          { q: "According to Lesson 5's second article, part of the fall in expenditure is “arithmetic rather than regulatory” because:", from: "Lesson 5",
            options: [
              { text: "a lighter body costs less to move.", correct: true,
                why: "Nothing is being regulated; the cost simply follows from the mass." },
              { text: "the calculation was done wrongly.", why: "No error of calculation is claimed." },
              { text: "the body lowers its temperature.", why: "That is on the regulatory side of the same distinction." }
            ] },
          { q: "Professor Haddad defines metabolism as:", from: "On Campus",
            options: [
              { text: "the sum of every chemical conversion going on at once.", correct: true,
                why: "Her correction of the single-dial picture, in her own words." },
              { text: "the rate at which the body burns food.", why: "That is the popular version she opens by setting aside." },
              { text: "the energy used by deliberate activity.", why: "She says that part is far smaller than people expect." }
            ] },
          { q: "Once the bath ____ temperature, add the enzyme.", from: "Lesson 2",
            options: [
              { text: "reaches", correct: true, why: "A time clause about the future takes a present form, with the third-person <i>-s</i>." },
              { text: "will reach", why: "<i>Will</i> does not go into a time clause about the future." },
              { text: "reach", why: "Right tense, missing ending." }
            ] }
        ] },

      { id: "e", section: 3, sectionTitle: "Language review", letter: "B",
        kind: "sort", task: null, n: 0,
        prompt: "Eight phrasal verbs from this unit. Sort them by whether the object can sit in the middle.",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p>There is no rule that predicts this, which is why it has to be learnt verb by verb. The one reliable test: if you can say it with <i>it</i> in the middle, it is separable — and if it is separable, with <i>it</i> you have no choice.</p>" },
        bins: [
          { id: "sep",   label: "Separable", hint: "break it down" },
          { id: "insep", label: "Inseparable or no object", hint: "go over it · builds up" }
        ],
        items: [
          { text: "break down", bin: "sep",   why: "<i>break the starch down</i>, <i>break it down</i>." },
          { text: "take in",    bin: "sep",   why: "<i>take the glucose in</i>, <i>take it in</i>." },
          { text: "use up",     bin: "sep",   why: "<i>use the store up</i>, <i>use it up</i>." },
          { text: "carry out",  bin: "sep",   why: "<i>carry the assay out</i> — though with a long object most writers keep it whole." },
          { text: "go over",    bin: "insep", why: "inseparable: the object always follows both words." },
          { text: "look after", bin: "insep", why: "inseparable, even with a pronoun: <i>looked after it</i>." },
          { text: "build up",   bin: "insep", why: "the trickiest card: it is not inseparable, it simply has no object here, so there is nothing to put in the middle." },
          { text: "level off",  bin: "insep", why: "also objectless. <i>The curve levels off</i> — nothing is being levelled." }
        ],
        closer: { kind: "test",
          body: "<p>Close the page. Explain in two sentences why a calorie figure is accurate and still misleading.</p>" } }
    ]
  };
})();
