/* ============================================================
   Unit 1 §13 — Part 5, the reading.

   The longest stimulus in the unit, and the book's own forward reference from Part 2 lands
   here: the text describes what a department always does in the present simple, and then one
   car being worked on. A learner who did §5–§7 should see both tenses doing their jobs.

   The text carries its glossary inline, as the book prints it, so a learner who does not know
   "diagnostic machine" does not have to leave the page to find out.
   ============================================================ */
EAM.page('u1-s13', {
  book: { source: 'EAM B1', ref: 'Unit 1 · Part 5 · Reading', part: '5', section: '13',
          lesson: 'Part 5 · Reading', title: 'What is a service department?' },
  objective: 'Read a description of a service department and answer three questions about it',
  video: 'u01v13',
  prev: 's12-role-play', prevLabel: 'Role play, and your own talk',
  next: 's14-reading-comprehension', nextLabel: 'The words of the text',
  cards: [

    /* ------------------------------------------------------------------------ 1. the text */
    {
      id: 'c1', covers: ['Part 5'], ref: '5A', bookRef: 'Unit 1 · Part 5 · Text',
      type: 'study',
      title: 'Read: what a service department is',
      instruction: '<b>Before you read:</b> what three areas do you think a service department '
        + 'has? Say your guess, then read and see. Press a paragraph to hear it.',
      visual: { art: 'service-flow', wide: true,
        caption: 'The three areas the text names, in the order the car passes through them.' },
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>A service department looks after cars. It has three main areas: '
        + '<b>reception</b>, the <b>workshop</b>, and the <b>parts store</b>.</p>'
        + '<p>First, the customer brings the car to reception, and the service advisor writes '
        + 'a <b>job card</b>. The job card lists the work to do. Then the car goes into the '
        + 'workshop. There, a mechanic checks the car and does the <b>service</b>: he changes '
        + 'the oil, checks the brakes, and looks at the tyres.</p>'
        + '<p>Today, many cars have a computer, so a technician often uses a <b>diagnostic '
        + 'machine</b> to find faults.</p>'
        + '<p>When the work is finished, the car is checked again and cleaned. Finally, the '
        + 'service advisor calls the customer, and the car is ready. A good service department '
        + 'is <b>clean, safe, and honest</b>, and it looks after every customer’s car with '
        + 'care.</p>'
        + '</div>'
        + '<div class="note" style="margin-top:14px"><h4>Glossary, as the book prints it</h4>'
        + '<div><b>service</b> — the regular check and care a car needs</div>'
        + '<div><b>job card</b> — the paper that lists the work to do</div>'
        + '<div><b>diagnostic machine</b> — a computer that finds faults</div></div>',
      doneLabel: 'I have read the text',
      playable: [
        'A service department looks after cars. It has three main areas: reception, the workshop, and the parts store.',
        'First, the customer brings the car to reception, and the service advisor writes a job card.',
        'Then the car goes into the workshop. There, a mechanic checks the car and does the service.',
        'Today, many cars have a computer, so a technician often uses a diagnostic machine to find faults.',
        'Finally, the service advisor calls the customer, and the car is ready.'
      ]
    },

    /* ------------------------------------------------------------------- 2. three questions */
    {
      id: 'c2', covers: ['Part 5'], ref: '5B', bookRef: 'Unit 1 · Part 5 · Questions',
      type: 'quizset',
      title: 'Three questions about the text',
      instruction: 'The answers are all in the four paragraphs above. The first one is done '
        + 'for you: <i>What does a service department do? — It looks after cars.</i>',
      display: 'cards',
      say: true,
      items: [
        {
          q: '1. What does the service advisor write?',
          evidence: 'the second paragraph, first sentence.',
          options: [
            { t: 'A letter', ok: false,
              why: 'Nothing in the text is posted to anybody. The advisor writes for the '
                + 'WORKSHOP, not for the customer.' },
            { t: 'A job card', ok: true,
              why: 'Right. And the next sentence says what it is for: "The job card lists the '
                + 'work to do." It is how the customer’s words become instructions the '
                + 'mechanic can follow.' },
            { t: 'A book', ok: false,
              why: 'Not in the text. This is the kind of answer that comes from reading the '
                + 'word "writes" and stopping there.' },
            { t: 'A bill', ok: false,
              why: 'A real department does produce a bill, but the text never mentions one — '
                + 'and the bill would come at the END, not when the car arrives. Answer from '
                + 'what the text says, not from what you know happens.' }
          ]
        },
        {
          q: '2. Who uses a diagnostic machine to find faults?',
          evidence: 'the third paragraph — it names one job.',
          options: [
            { t: 'The customer', ok: false,
              why: 'The customer brings the car and goes home. They never go into the '
                + 'workshop in this text.' },
            { t: 'The manager', ok: false,
              why: 'The manager is not mentioned in this text at all. You met one in §10, but '
                + 'that is a different text — this question is about this one.' },
            { t: 'A technician', ok: true,
              why: 'Right — "a technician often uses a diagnostic machine to find faults". '
                + 'This is the distinction §10 drew between Nabil and Lina, now stated in '
                + 'writing: the mechanic does the service, the technician finds the fault.' },
            { t: 'The driver', ok: false,
              why: 'Not named in the text, and not plausible: the machine belongs to the '
                + 'workshop.' }
          ]
        },
        {
          q: '3. What is a good service department?',
          evidence: 'the last sentence — three adjectives in a row.',
          options: [
            { t: 'Clean, safe, and honest', ok: true,
              why: 'Right, and the three are a set worth remembering: <b>clean</b> is about '
                + 'the workshop, <b>safe</b> follows from it, and <b>honest</b> is about the '
                + 'customer. Part 8’s case study is built on the third one.' },
            { t: 'Dark and dirty', ok: false,
              why: 'The opposite of what the text says, and of what the Warm Up said about a '
                + 'tidy workshop being a safe one.' },
            { t: 'Slow', ok: false,
              why: 'Speed is not mentioned anywhere. The text is about how the work is done, '
                + 'not how fast.' },
            { t: 'Closed', ok: false,
              why: 'Not in the text, and not a quality a department could be judged on — a '
                + 'closed garage is not a bad one, it is simply shut. The last sentence lists '
                + 'three things a good department IS, and all three are about how it works.' }
          ]
        }
      ],
      after: 'Look back at the tenses. "A service department <b>looks after</b> cars", "a '
        + 'mechanic <b>checks</b> the car" — present simple, because that is what always '
        + 'happens. This is the Part 2 grammar doing its real job: describing a process.'
    }
  ]
});
