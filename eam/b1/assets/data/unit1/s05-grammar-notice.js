/* ============================================================
   Unit 1 §5 — Part 2, Notice.

   The book prints five lines from the workshop and asks: "Underline the verbs. Which are
   routines, and which are happening now?" That is a task, not a page to read, and it is the
   one place in the unit where the learner works the grammar out for themselves before being
   told it. Underlining in a book is selecting on a page.

   The Grammar Focus Box that follows is the opposite: a reference to read once and come back
   to. It is a study card, and it carries the two figures the rest of Part 2 refers to.
   ============================================================ */
EAM.page('u1-s05', {
  book: { source: 'EAM B1', ref: 'Unit 1 · Part 2 · Notice', part: '2', section: '5',
          lesson: 'Part 2 · Grammar', title: 'Notice — two kinds of time' },
  objective: 'Tell a routine from something happening now, in the lines of a workshop',
  video: 'u01v05',
  prev: 's04-check', prevLabel: 'Check what you know',
  next: 's06-grammar-practice', nextLabel: 'Simple or continuous',
  cards: [

    /* --------------------------------------------- 1. find the ones happening right now */
    {
      id: 'c1', covers: ['Part 2'], ref: '2A', bookRef: 'Unit 1 · Part 2 · Notice',
      type: 'highlighter',
      title: 'Which lines are about right now?',
      instruction: 'Five lines from the workshop. <b>Click the two that are about this '
        + 'moment</b> — not about what usually happens. Click a line again to let it go.',
      textTitle: 'Five lines from the workshop',
      hintText: 'Click a sentence to underline it. Click it again to remove it. Two of the '
        + 'five belong.',
      paras: [[
        { i: 0, t: 'Nabil services cars.' },
        { i: 1, t: 'He usually starts at eight.' },
        { i: 2, t: 'Right now, he is changing the oil.' },
        { i: 3, t: 'The workshop opens every day.' },
        { i: 4, t: 'Today, Tarek is learning from Nabil.' }
      ]],
      answers: [2, 4],
      questions: [
        {
          q: 'Which two words in those lines tell you the action is happening now?',
          accept: ['right now, today', 'right now and today', 'today and right now',
                   'right now today', 'now, today', 'now and today'],
          keys: ['right now', 'today'], need: 2,
          placeholder: 'two time words',
          evidence: 'the first word or two of each sentence you underlined.'
        },
        {
          q: 'What do the verbs in those two lines have in common? (two words)',
          accept: ['is + -ing', 'is and -ing', 'is verb-ing', 'am is are + ing',
                   'is + ing', 'be + ing', 'is -ing'],
          keys: ['is', 'ing'], need: 2,
          placeholder: 'the two parts of the verb',
          evidence: 'look at "is changing" and "is learning" — both are built the same way.'
        }
      ],
      whyTitle: 'What you have just noticed',
      after: 'The three lines you left alone — <i>services</i>, <i>starts</i>, <i>opens</i> — '
        + 'are routines: what happens again and again. The two you underlined are happening '
        + 'as somebody speaks. English marks that difference in the verb itself, which is what '
        + 'the next card sets out.'
    },

    /* ------------------------------------------------------------ 2. the focus box itself */
    {
      id: 'c2', covers: ['Part 2'], ref: '2B', bookRef: 'Unit 1 · Part 2 · Grammar focus',
      type: 'study',
      title: 'The rule, and the two mistakes to watch for',
      instruction: 'The book’s own focus box. Read it once now; the practice on the next two '
        + 'screens comes straight out of it.',
      visual: [
        { art: 'tense-two-clocks',
          caption: 'The time words decide the tense, every time. Find the time word first.' },
        { art: 'verb-s-rule',
          caption: 'The two faults the book warns about, and their repairs.' }
      ],
      html: '<div style="font-size:16px;line-height:1.95">'
        + '<p><b>Remember.</b> <i>every day</i>, <i>usually</i>, <i>every year</i> → '
        + '<b>present simple</b>. &nbsp; <i>now</i>, <i>right now</i>, <i>today</i>, '
        + '<i>this week</i>, <i>at the moment</i> → <b>present continuous</b>.</p>'
        + '<p><b>Watch out.</b></p>'
        + '<ul style="margin:0;padding-left:20px;line-height:2">'
        + '<li><span style="color:var(--no)">✗ He change the oil.</span> → '
        + '<span style="color:var(--ok)">✓ He <b>changes</b> the oil.</span> '
        + '<span class="wc">add -s for he / she / it</span></li>'
        + '<li><span style="color:var(--no)">✗ I checking now.</span> → '
        + '<span style="color:var(--ok)">✓ I <b>am</b> checking now.</span> '
        + '<span class="wc">the continuous needs am / is / are</span></li>'
        + '</ul></div>',
      doneLabel: 'I have read the focus box',
      playable: [
        'Nabil services cars every day.',
        'Right now, he is changing the oil.',
        'He changes the oil.',
        'I am checking the brakes now.'
      ]
    }
  ]
});
