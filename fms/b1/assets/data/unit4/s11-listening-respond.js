/* Unit 4 §11 — Part 3 - Responding.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u4-s11', {
  book: { source: 'FMS B1.1', ref: 'Unit 4 · Part 3 - Responding', part: '3', section: '11',
          lesson: 'Part 3 - Responding', title: 'Part 3 - Responding' },
  objective: 'By the end of Part 3 you can predict the future language a formal '
        + 'cooperation context will use, follow four excerpts from bilateral events '
        + 'and planning sessions, choose a correct formal response, and write down '
        + 'five cooperation phrases.',
  prev: 's10-listening-understand', prevLabel: 'Part 3 - Listening',
  next: 's12-dialogue-script', nextLabel: 'Part 4 - The script',
  cards: [
    {
      id: 'c1',
      covers: ['Part 3'],
      ref: '3C',
      bookRef: 'Unit 4 · Part 3 · 3C',
      type: 'quizset',
      title: 'Choose the Correct Formal Response',
      instruction: 'Listen to each formal cooperation statement and choose the correct '
        + 'professional ministry response:',
      display: 'cards',
      say: true,
      items: [{
          q: '1. We are very glad to sign this cooperation framework today. We look '
            + 'forward to seeing concrete results within the year.',
          options: [{ t: 'Thank you. We will try our best to make something happen.', ok: false,
              why: '"We will try our best" commits to nothing that can be checked. At a '
              + 'signing ceremony the other delegation is listening for the mechanism and '
              + 'the timetable - a committee, a date - not for goodwill.' },
            { t: 'Thank you, Your Excellency. The joint technical committee is going to meet '
              + 'within sixty days to begin implementation planning — concrete results will '
              + 'follow that process. Kazakhstan is committed to demonstrating through '
              + 'action that this partnership is more than a signature.', ok: true,
              why: 'Right. This is the reply the recording actually contains - Appendix A, '
              + 'track 4.15 - and it does the two things the situation needs.' }]
        },
        {
          q: '2. Kazakhstan has signed many agreements. What guarantees do partners have '
            + 'that these will actually be implemented?',
          options: [{ t: 'We guarantee everything. Do not worry about implementation.', ok: false,
              why: 'It over-promises. No ministry can guarantee everything, and an investor '
              + 'who hears a guarantee that broad discounts the rest of what you say. The '
              + 'correct reply treats the question as reasonable and answers it.' },
            { t: 'That is the right question to ask, and it is one we take seriously. Each '
              + 'framework includes a joint monitoring committee with quarterly reporting '
              + 'obligations. The first progress reports will be published within ninety '
              + 'days of each committee\'s inaugural session. We are also meeting with all '
              + 'partner delegations at this conference specifically to review '
              + 'implementation timelines — accountability is built into the architecture.', ok: true,
              why: 'Right. This is the reply the recording actually contains - Appendix A, '
              + 'track 4.15 - and it does the two things the situation needs.' }]
        },
        {
          q: '3. We are proposing a joint research program in renewable energy. Are you '
            + 'interested in exploring this?',
          options: [{ t: 'Kazakhstan is very interested in renewable energy cooperation — it is '
              + 'going to be one of our central modernization priorities. I would like to '
              + 'schedule a follow-up session with our Energy Affairs team. We are meeting '
              + 'on Thursday — are you available to join us then?', ok: true,
              why: 'Right. This is the reply the recording actually contains - Appendix A, '
              + 'track 4.15 - and it does the two things the situation needs.' },
            { t: 'I am not sure. Send me an email and I will think about it.', ok: false,
              why: 'It hands the question back at the moment it was asked. A ministry '
              + 'representative at an international conference is expected to be able to '
              + 'state a national priority without checking first.' }]
        },
        {
          q: '4. We would like to invite Kazakhstan to participate in the International '
            + 'Investment Forum in Berlin next March. Will Kazakhstan be represented?',
          options: [{ t: 'Yes, someone will probably go. We will let you know closer to the date.', ok: false,
              why: '"Someone" and "probably" leave the other side unable to plan. Commitment '
              + 'language names who is coming, what they will do and when - which is '
              + 'exactly what the future forms in this unit are for.' },
            { t: 'Kazakhstan is committed to participating in the Berlin Forum. Our Economic '
              + 'Affairs team is going to lead the delegation, and the ministry shall '
              + 'communicate our participation officially through formal channels. I will '
              + 'ensure you receive a formal confirmation letter within the next ten '
              + 'working days.', ok: true,
              why: 'Right. This is the reply the recording actually contains - Appendix A, '
              + 'track 4.15 - and it does the two things the situation needs.' }]
        }]
    },
    {
      id: 'c2',
      covers: ['Part 3'],
      ref: '3D',
      bookRef: 'Unit 4 · Part 3 · 3D',
      type: 'flashcards',
      title: 'Useful Phrases Box',
      instruction: 'Listen to and write down five formal cooperation phrases used in bilateral '
        + 'events and planning sessions. Then practice saying them aloud with a '
        + 'partner, focusing on a warm but authoritative tone.',
      scene: 'phrases-4',
      items: [{ id: 'p1', num: 1, label: '________________________________________________', at: [26, 22] },
        { id: 'p2', num: 2, label: '________________________________________________', at: [74, 22] },
        { id: 'p3', num: 3, label: '________________________________________________', at: [26, 48] },
        { id: 'p4', num: 4, label: '________________________________________________', at: [74, 48] },
        { id: 'p5', num: 5, label: '________________________________________________', at: [26, 74] }],
      readerNote: 'Each phrase is read by the officer who uses it in the recording for this '
        + 'part.'
    }
  ]
});
