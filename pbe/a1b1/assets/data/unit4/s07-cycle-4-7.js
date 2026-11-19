/* Unit 4 · cycle 4.7 — Review: the shelf map.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE1.page('u4-s07', {
  book: { source: 'Proactive Business English A1', ref: 'Unit 4 · 4.7', part: '4.7',
          section: '7', lesson: 'Review: the shelf map', title: 'Review: the shelf map' },
  objective: 'Review: the shelf map — and one problem to talk about together',
  cards: [
    {
      id: 'c1',
      ref: '4.7.1',
      bookRef: 'Unit 4 · 4.7 · Get ready – Unit 4 quiz',
      type: 'discuss',
      title: 'Get ready – Unit 4 quiz',
      instruction: '',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Say it in '
          + 'English</th><th>✓</th></tr><tr><td><b>4.1</b> Where is your pen? Use '
          + 'three different small '
          + 'words.</td><td>&nbsp;</td></tr><tr><td><b>4.2</b> Row 3, shelf 2. '
          + 'Then say it the other '
          + 'way.</td><td>&nbsp;</td></tr><tr><td><b>4.3</b> Ask where one thing '
          + 'is. Then ask where four things '
          + 'are.</td><td>&nbsp;</td></tr><tr><td><b>4.4</b> The shelf is empty. '
          + 'Say what you saw.</td><td>&nbsp;</td></tr><tr><td><b>4.5</b> Three '
          + 'orders from the gate to a '
          + 'door.</td><td>&nbsp;</td></tr><tr><td><b>4.6</b> One thing you can '
          + 'reach and one you cannot.</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Write what you would say. Your own words.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '4.7.2',
      bookRef: 'Unit 4 · 4.7 · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u4-4-7',
      passage: {
        title: 'Language box',
        html: '<p><b>Review — the six things from this unit</b></p><table '
          + 'class=\'bk\'><tr><th>Cycle</th><th>You can '
          + 'say</th></tr><tr><td><b>4.1</b></td><td><i>In the box, on the top '
          + 'shelf. Under the bench. Behind the '
          + 'door.</i></td></tr><tr><td><b>4.2</b></td><td><i>Row three, shelf '
          + 'two. The second one up. Shelf one is the '
          + 'bottom.</i></td></tr><tr><td><b>4.3</b></td><td><i>Where is the '
          + 'roll? Where are the '
          + 'rolls?</i></td></tr><tr><td><b>4.4</b></td><td><i>It is not there. '
          + 'The space is empty. No dust, a clean '
          + 'square.</i></td></tr><tr><td><b>4.5</b></td><td><i>Go straight on. '
          + 'Turn left at the long bench. Do not use the other '
          + 'door.</i></td></tr><tr><td><b>4.6</b></td><td><i>I can reach shelf '
          + 'three. I cannot reach shelf four. Wait for the '
          + 'ladder.</i></td></tr></table><p>⚠ <b>The new thing here: being right '
          + 'about the shelf is not the same as being findable.</b> <b>Fouad is '
          + 'right about every one of his eleven decisions.</b> <b>A bent roll IS '
          + 'rubbish.</b> <b>And a man was sent to row two on Tuesday and came '
          + 'back with nothing.</b></p><p><b>Useful words:</b> somewhere sensible '
          + '· it does not fit · he should ask me · you were at lunch · the map '
          + 'does not</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. What does Fouad do?',
            options: [{
              t: 'he loses things',
              ok: false
            },
            {
              t: 'he puts things where they fit, not where the map says',
              ok: true,
              why: 'he puts things where they fit, not where the map says'
            },
            {
              t: 'he cannot read the map',
              ok: false
            }]
          }],
        say: true
      }
    },
    {
      id: 'c3',
      ref: '4.7.2',
      bookRef: 'Unit 4 · 4.7 · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. How long has Fouad worked there?',
            model: 'It does not say, but he has been there long enough that Abu '
              + 'Yasser trusts his judgement',
            minWords: 5,
            rows: 2
          },
      {
            q: 'Why is his place for the long rolls better?',
            model: 'A long roll bends on shelf one, and a bent roll is rubbish',
            minWords: 4,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      ref: '4.7.3',
      bookRef: 'Unit 4 · 4.7 · Practise',
      type: 'discuss',
      title: 'Practise',
      instruction: 'Work in pairs. One is Fouad. One is Nour. Say why you are right.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Fouad says</th><th>Nour '
          + 'says</th></tr><tr><td>Eleven good decisions. ⚠ <b>A long roll on '
          + 'shelf one bends, and a bent roll is thrown away.</b></td><td>A man '
          + 'went to row two on Tuesday and came back with nothing. ⚠ <b>The map '
          + 'is the only thing that works when Fouad is at '
          + 'lunch.</b></td></tr></table>'
      },
      questions: [{
            q: 'Write what you said and what you heard.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c5',
      ref: '4.7.3R',
      bookRef: 'Unit 4 · 4.7 · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs say the two sides for the class — books closed.',
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c6',
      ref: '4.7.4',
      bookRef: 'Unit 4 · 4.7 · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Think of somebody at your work who does a thing better than the paper says. '
  + 'Tell your partner. Write it.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>What they do</th><th>Why it is '
          + 'better</th><th>What happens when they are '
          + 'away</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            model: 'What they do: Abu Khalil stacks the heavy cartons on the bottom '
              + 'shelf, not where the plan says. Why it is better: nobody lifts '
              + 'them above the waist. When they are away: the new men follow the '
              + 'plan and somebody\'s back goes · What they do: Rima keeps the '
              + 'Tuesday invoices in a separate folder. Why it is better: Tuesday '
              + 'is the audit day and they are always wanted together. When they '
              + 'are away: nobody can find them, because the folder is not on any '
              + 'list',
            minWords: 6,
            rows: 3
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Think of somebody at your work who does a thing better than the '
          + 'paper says. Tell your partner. Write it.',
        grammar: 'Review — the six things from this unit',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length.',
        must: ['Exam practice — A2 Key Writing Part 6, at A1 length. Four sentences, '
          + 'about 30 words.',
        '⚠ In a message about a place, the ADDRESS goes in the first two '
          + 'sentences. Row, shelf, or the small word and the landmark.',
        '⚠ If you moved something, say WHY in one short sentence. A move with '
          + 'a reason stays moved.',
        'The shape: who it is to → where the thing is now → why → what the '
          + 'reader must do.']
      }
    },
    {
      id: 'c7',
      ref: '4.7.4R',
      bookRef: 'Unit 4 · 4.7 · Report – everybody is right',
      type: 'discuss',
      title: 'Report – everybody is right',
      instruction: 'The problem. Fouad has moved eleven things to better places. Every decision '
  + 'was right. The map still says the old place, and on Tuesday a man was sent '
  + 'to an empty shelf while Fouad was at lunch.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Fouad is right</th><th>Nour is '
          + 'right</th><th>So we do this</th></tr><tr><td>A long roll bends on '
          + 'shelf one. ⚠ <b>Eleven times he has stopped good stock turning into '
          + 'rubbish, and nobody asked him to.</b></td><td>The map is what works '
          + 'when Fouad is not there. ⚠ <b>A yard that only Fouad can read is a '
          + 'yard that closes when Fouad is at lunch.</b></td><td>⚠ <b>Fouad '
          + 'keeps deciding. The map follows him.</b> <b>He moves the thing, then '
          + 'he writes the new place on the map the same day</b> — <b>and the OLD '
          + 'line gets a pencil line through it, not a rub-out, so the next man '
          + 'can see it moved and when.</b></td></tr></table>'
      },
      questions: [{
            q: 'Write what you told the class.',
            model: 'The three positions, in full · Fouad is right because a bent '
              + 'roll is rubbish and he has saved eleven of them. Nour is right '
              + 'because a man went to row two on Tuesday and came back with '
              + 'nothing. So Fouad keeps deciding and the map follows him — same '
              + 'day, new line written, old line crossed with a pencil line so '
              + 'the next man can see it moved',
            minWords: 6,
            rows: 3
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'The problem. Fouad has moved eleven things to better places. Every '
          + 'decision was right. The map still says the old place, and on Tuesday '
          + 'a man was sent to an empty shelf while Fouad was at lunch.',
        grammar: 'Review — the six things from this unit',
        focus: 'Whether you have named what EACH side is right about. Not who wins, '
          + 'and not a compromise: one sentence for each person\'s reason.',
        must: ['Exam practice — A2 Key Writing Part 6, at A1 length. Four sentences, '
          + 'about 30 words.',
        '⚠ In a message about a place, the ADDRESS goes in the first two '
          + 'sentences. Row, shelf, or the small word and the landmark.',
        '⚠ If you moved something, say WHY in one short sentence. A move with '
          + 'a reason stays moved.',
        'The shape: who it is to → where the thing is now → why → what the '
          + 'reader must do.']
      }
    },
    {
      id: 'c8',
      ref: '4.7.5',
      bookRef: 'Unit 4 · 4.7 · Read – exam practice (A2 Key Reading Part 1, at A1 length)',
      type: 'discuss',
      title: 'Read – exam practice (A2 Key Reading Part 1, at A1 length)',
      instruction: 'Read the five notices. What does each one say? Choose A, B or C.',
      passage: {
        title: 'From the book',
        html: '<p><b>1</b> <i>SHELF 1 = BOTTOM</i> <b>A</b> Shelf 1 is the highest. '
          + '<b>B</b> Shelf 1 is the lowest. <b>C</b> There is no shelf '
          + '1.</p><p><b>2</b> <i>LADDER LIVES NEXT TO THE LONG BENCH</i> '
          + '<b>A</b> Keep the ladder in the yard. <b>B</b> Put the ladder back '
          + 'beside the long bench. <b>C</b> The ladder is broken.</p><p><b>3</b> '
          + '<i>MOVED SOMETHING? WRITE IT ON THE MAP TODAY</i> <b>A</b> Write it '
          + 'next week. <b>B</b> Do not move anything. <b>C</b> Change the map '
          + 'the same day.</p><p><b>4</b> <i>SHELF 4: TWO MEN, ONE LADDER</i> '
          + '<b>A</b> One man on the ladder alone. <b>B</b> Two men and a ladder. '
          + '<b>C</b> No ladder needed.</p><p><b>5</b> <i>OTHER DOOR = OFFICE '
          + 'STAIRS. NO LORRIES.</i> <b>A</b> Lorries use the other door. '
          + '<b>B</b> The other door is for the office, not lorries. <b>C</b> '
          + 'Both doors are the same.</p><h4>Writer\'s box</h4><p><b>Exam '
          + 'practice — A2 Key Writing Part 6, at A1 length.</b> <b>Four '
          + 'sentences, about 30 words.</b></p><p>⚠ <b>In a message about a '
          + 'place, the ADDRESS goes in the first two sentences.</b> <b>Row, '
          + 'shelf, or the small word and the landmark.</b></p><p>⚠ <b>If you '
          + 'moved something, say WHY in one short sentence.</b> <b>A move with a '
          + 'reason stays moved.</b></p><p><b>The shape:</b> who it is to → where '
          + 'the thing is now → why → what the reader must do.</p>'
      },
      questions: [{
            q: 'Write what you said and what you heard.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c9',
      ref: '4.7.6',
      bookRef: 'Unit 4 · 4.7 · Write with help',
      type: 'writer',
      title: 'Write with help',
      instruction: 'Write a message saying you moved something (<b>four sentences, about 30 '
  + 'words</b>). Say what, where it is now, why, and what the reader must do.',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      model: ['To: Abu Yasser',
      'I moved the long rolls. They stand behind the door now, not on row two '
        + 'shelf one. They bend on the shelf and a bent roll is rubbish. Please '
        + 'change the map today'],
      coach: {
        title: 'What to include',
        task: 'Write a message saying you moved something (four sentences, about 30 words). '
  + 'Say what, where it is now, why, and what the reader must do.',
        criteria: [{ t: 'Exam practice — A2 Key Writing Part 6, at A1 length. Four '
              + 'sentences, about 30 words.' },
            { t: '⚠ In a message about a place, the ADDRESS goes in the first two '
              + 'sentences. Row, shelf, or the small word and the landmark.' },
            { t: '⚠ If you moved something, say WHY in one short sentence. A move '
              + 'with a reason stays moved.' },
            { t: 'The shape: who it is to → where the thing is now → why → what '
              + 'the reader must do.' }]
      },
      aiCheck: {
        task: 'Write a message saying you moved something (four sentences, about 30 '
          + 'words). Say what, where it is now, why, and what the reader must do.',
        grammar: 'Review — the six things from this unit',
        must: ['Exam practice — A2 Key Writing Part 6, at A1 length. Four sentences, '
          + 'about 30 words.',
        '⚠ In a message about a place, the ADDRESS goes in the first two '
          + 'sentences. Row, shelf, or the small word and the landmark.',
        '⚠ If you moved something, say WHY in one short sentence. A move with '
          + 'a reason stays moved.',
        'The shape: who it is to → where the thing is now → why → what the '
          + 'reader must do.']
      }
    },
    {
      id: 'c10',
      ref: '4.7.6P',
      bookRef: 'Unit 4 · 4.7 · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Change books. Point at the line. Read it aloud. Say the one thing that is '
  + 'missing. Count the sentences: four.',
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Change books. Point at the line. Read it aloud. Say the one thing '
          + 'that is missing. Count the sentences: four.',
        grammar: 'Review — the six things from this unit',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback.',
        must: ['Exam practice — A2 Key Writing Part 6, at A1 length. Four sentences, '
          + 'about 30 words.',
        '⚠ In a message about a place, the ADDRESS goes in the first two '
          + 'sentences. Row, shelf, or the small word and the landmark.',
        '⚠ If you moved something, say WHY in one short sentence. A move with '
          + 'a reason stays moved.',
        'The shape: who it is to → where the thing is now → why → what the '
          + 'reader must do.']
      }
    },
    {
      id: 'c11',
      ref: '4.7.7',
      bookRef: 'Unit 4 · 4.7 · Write freely – exam practice (A2 Key Writing Part 6, at A1 length)',
      type: 'writer',
      title: 'Write freely – exam practice (A2 Key Writing Part 6, at A1 length)',
      instruction: 'Write a message to your supervisor about a thing you moved (<b>four '
  + 'sentences, about 30 words</b>). Say what, where, why, and ask for the map to '
  + 'be changed.',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 5
        }],
      passage: {
        title: 'Homework',
        html: '<p>Finish your message. Then write the <b>new line</b> for the map, '
          + 'with the old place crossed out (20 words or more).</p>'
      },
      model: ['Abu Yasser, I moved the long ladder. It is on the wall by the gate '
        + 'now, not row one shelf one. It stuck out into the walkway. Please '
        + 'change the map'],
      coach: {
        title: 'What to include',
        task: 'Write a message to your supervisor about a thing you moved (four sentences, '
  + 'about 30 words). Say what, where, why, and ask for the map to be changed.',
        criteria: [{ t: 'Exam practice — A2 Key Writing Part 6, at A1 length. Four '
              + 'sentences, about 30 words.' },
            { t: '⚠ In a message about a place, the ADDRESS goes in the first two '
              + 'sentences. Row, shelf, or the small word and the landmark.' },
            { t: '⚠ If you moved something, say WHY in one short sentence. A move '
              + 'with a reason stays moved.' },
            { t: 'The shape: who it is to → where the thing is now → why → what '
              + 'the reader must do.' }]
      },
      aiCheck: {
        task: 'Write a message to your supervisor about a thing you moved (four '
          + 'sentences, about 30 words). Say what, where, why, and ask for the '
          + 'map to be changed.',
        grammar: 'Review — the six things from this unit',
        must: ['Exam practice — A2 Key Writing Part 6, at A1 length. Four sentences, '
          + 'about 30 words.',
        '⚠ In a message about a place, the ADDRESS goes in the first two '
          + 'sentences. Row, shelf, or the small word and the landmark.',
        '⚠ If you moved something, say WHY in one short sentence. A move with '
          + 'a reason stays moved.',
        'The shape: who it is to → where the thing is now → why → what the '
          + 'reader must do.']
      }
    },
    {
      id: 'c12',
      ref: '4.7.✓',
      bookRef: 'Unit 4 · 4.7 · Unit 4 check',
      type: 'scene',
      title: 'Unit 4 check',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u4-4-7'
    }
  ]
});
