/* Unit 1 §16 — Global Case Study — Staffing a 24-Hour Cycle.

   The case is printed in full. The baseline book questions its global case
   without printing it; this book prints every text it questions. */
JRN.page('u1-s16', {
  book: { source: 'International Journalists B1', ref: 'Unit 1 · Part 8 · Global Case Study — Staffing a 24-Hour Cycle', part: '8', section: '16',
          track: 'practitioner', label: 'Practitioner track · read then discuss', lesson: 'Part 8 · Global Case Study — Staffing a 24-Hour Cycle', title: 'Part 8 · Global Case Study — Staffing a 24-Hour Cycle' },
  objective: 'By the end of Part 8 you can read how an agency hands a story from one '
  + 'shift to the next, take the vocabulary of the handover from it, and set '
  + 'out your own view in writing.',
  cards: [
    {
      id: 'c1',
      ref: '8A',
      bookRef: 'Unit 1 · 8A',
      visual: { spot: 'deadline-clock' },
      type: 'study',
      title: 'Read the case',
      instruction: 'A global agency never closes. Read how one agency moves a story from '
  + 'shift to shift without losing what the last reporter knew.',
      html: '<div class="article"><h4>Staffing a 24-hour cycle</h4>'
      + '<p>A global agency never closes. When the desk in Singapore finishes '
      + 'its shift, the desk in London is already reading the overnight file, '
      + 'and eight hours later the desk in Mexico City takes it on. The story '
      + 'does not stop; the people change.</p>'
      + '<p>That creates one problem above all: the handover. A reporter who '
      + 'has worked a story for ten hours knows things that are not written '
      + 'down — which official returns calls, which figure is still '
      + 'unconfirmed, which witness asked not to be named. If none of that is '
      + 'passed on, the next desk starts again, and the risk of a mistake '
      + 'rises.</p>'
      + '<p>So the agency writes the handover down. At the end of every shift '
      + 'the duty editor files a short note: what is confirmed, what is not, '
      + 'what is expected next, and who must be called. New staff spend their '
      + 'first two weeks reading these notes before they write one.</p>'
      + '<p>The agency says the two weeks are worth it. A reporter who can '
      + 'write a clear handover is a reporter who knows what they actually '
      + 'know.</p></div>',
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: '8A',
      bookRef: 'Unit 1 · 8A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Answer from the text, in your own words.',
      questions: [{
            q: 'Why does the story not stop when a shift ends?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What kinds of thing does a reporter know that are not written down?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What four things does the duty editor put in the handover note?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Why does the agency think two weeks of reading notes is worth the time?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    },
    {
      id: 'c3',
      ref: '8B',
      bookRef: 'Unit 1 · 8B',
      type: 'dragmatch',
      title: 'Vocabulary in context',
      instruction: 'Match the word from the case to its meaning (one is extra).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) the hours one team works before the next takes over' },
      { id: 'm-b', label: 'b) what one shift tells the next about a story' },
      { id: 'm-c', label: 'c) the editor in charge for the length of one shift' },
      { id: 'm-d', label: 'd) not yet checked against a second source' },
      { id: 'm-e', label: 'e) a reporter sent abroad for a single story (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'shift', accept: 'm-a',
          why: '<b>shift</b> &mdash; the hours one team works before the next takes '
              + 'over. In the case, three shifts carry one story round the world in a '
              + 'day.' },
      { id: 't2', num: 2, label: 'handover', accept: 'm-b',
          why: '<b>handover</b> &mdash; what one shift tells the next about a story. '
              + 'The case’s whole argument is that this must be written, not '
              + 'remembered.' },
      { id: 't3', num: 3, label: 'duty editor', accept: 'm-c',
          why: '<b>duty editor</b> &mdash; the editor in charge for the length of one '
              + 'shift. <i>On duty</i> means it is yours for now, and then it is '
              + 'somebody else’s.' },
      { id: 't4', num: 4, label: 'unconfirmed', accept: 'm-d',
          why: '<b>unconfirmed</b> &mdash; not yet checked against a second source. The '
              + 'most important word in any handover note, because it is the one the '
              + 'next shift must not lose.' }],
      after: 'The extra meaning — <b>e)</b> a reporter sent abroad for a single story — '
        + 'is a <b>special correspondent</b> or, informally, a <b>parachute '
        + 'reporter</b>. It is left out because the case is about the opposite '
        + 'arrangement: people who stay, and a story that travels.'
    },
    {
      id: 'c4',
      ref: '8C',
      bookRef: 'Unit 1 · 8C',
      type: 'discuss',
      title: 'Discussion',
      instruction: 'Frames: “This is similar to the newsroom I know because ___.” “This '
  + 'is different because ___.”',
      questions: [{
            q: 'Would a written handover work where you work? Why or why not?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What is one idea here you would use?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    }
  ]
});
