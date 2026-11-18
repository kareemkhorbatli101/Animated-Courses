/* Unit 1 §18 — Field Focus — Nairobi: The Morning Conference.

   Part 9 in this edition rotates its dateline: a different city each unit.
   Unit 1 is Nairobi. The case is printed in full. */
JRN.page('u1-s18', {
  book: { source: 'International Journalists B1', ref: 'Unit 1 · Part 9 · Field Focus — Nairobi: The Morning Conference', part: '9', section: '18',
          track: 'practitioner', label: 'Practitioner track · read then decide', lesson: 'Part 9 · Field Focus — Nairobi: The Morning Conference', title: 'Part 9 · Field Focus — Nairobi: The Morning Conference' },
  objective: 'By the end of Part 9 you can read what a bureau chief faces at a '
  + 'morning conference, weigh which story should lead, and defend the order '
  + 'you choose.',
  cards: [
    {
      id: 'c1',
      ref: '9A',
      bookRef: 'Unit 1 · 9A',
      visual: { spot: 'running-order' },
      type: 'study',
      title: 'Read the case — NAIROBI',
      instruction: 'Four reporters, six possible stories, and ten minutes before the '
  + 'conference starts. Read, then decide.',
      html: '<div class="article"><h4>NAIROBI — the morning conference</h4>'
      + '<p>It is half past seven in the Nairobi bureau, and the morning '
      + 'conference starts in ten minutes. Nadia Osman has four reporters and '
      + 'six possible stories.</p>'
      + '<p>Yuki Tanaka is already at the port, where a crane has collapsed. '
      + 'Nobody is hurt, but the port handles most of the country’s imports. '
      + 'Omar Darwish, a stringer, has sent two photographs from a protest in '
      + 'the city centre, but he cannot say how many people are there. Priya '
      + 'Menon has found that two ministries publish different figures for the '
      + 'same road budget. A fourth story — a long piece on water — has been '
      + 'ready for a week.</p>'
      + '<p>Nadia can lead with one story and hold the rest. The port story is '
      + 'the biggest, but the only figure she has is one sentence from a port '
      + 'official. The protest has pictures but no numbers. The budget story is '
      + 'solid, but it is slow, and it will be just as true tomorrow.</p></div>',
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: '9A',
      bookRef: 'Unit 1 · 9A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Answer from the text, in your own words.',
      questions: [{
            q: 'Why does the crane story matter, even though nobody is hurt?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What is missing from the protest story?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Why is the budget story the easiest one to hold until tomorrow?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    },
    {
      id: 'c3',
      ref: '9B',
      bookRef: 'Unit 1 · 9B',
      type: 'writer',
      title: 'Decision task (40–60 words)',
      instruction: 'What should Nadia lead with, and what should she hold? Write 40–60 '
  + 'words. Use the frame and the phrase bank.<br>Frame: I think Nadia '
  + 'should lead with ___, because ___. She should hold ___ until '
  + '___.<br>Phrase bank: lead with · hold the story until · send a second '
  + 'reporter to · get a figure on the record · run the pictures with a '
  + 'short caption',
      minWords: 40,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 40–60 words.'
        }],
      model: ['I think Nadia should lead with the port, because the country’s '
        + 'imports go through it and the story affects everyone. First she needs '
        + 'a second figure on the record. She should run Omar’s pictures with a '
        + 'short caption and no crowd number, and hold the budget story until '
        + 'tomorrow.'],
      coach: {
        title: 'Check before you finish',
        task: 'What should Nadia lead with, and what should she hold? Write 40–60 '
  + 'words. Use the frame and the phrase bank. Frame: I think Nadia should '
  + 'lead with ___, because ___. She should hold ___ until ___. Phrase bank: '
  + 'lead with · hold the story until · send a second reporter to · get a '
  + 'figure on the record · run the pictures with a short caption',
        criteria: [{ t: 'Uses the frame.' },
          { t: 'Names one story to lead with, and gives a reason.' },
          { t: 'Says what to do about the story you are not leading with.' },
          { t: 'Does not invent a figure the case does not give you.' },
          { t: '40–60 words.' }]
      },
      after: 'There is no single right answer, and the book does not print one. But '
        + 'notice what the case will not let you do: the crowd number is not '
        + 'known, so no answer that states one can be defended. An editor’s '
        + 'judgement is made inside what is actually confirmed.'
    }
  ]
});
