/* Unit 4 · cycle 4.3 — There's none left.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE3.page('u4-s03', {
  book: { source: 'Proactive Business English · A2 Book 1', ref: 'Unit 4 · 4.3', part: '4.3',
          section: '3', lesson: 'There\'s none left', title: 'There\'s none left' },
  objective: 'say what is finished, what is low and what you have none of',
  study: {
    minutes: 90,
    objective: 'say what is finished, what is low and what you have none of',
    steps: [{
          title: 'Get ready',
          mins: 6,
          why: 'Waking the words up before you need them.',
          todo: 'Answer in one or two words. Nothing here is marked and nothing is wrong.',
          alone: 'Say your answers aloud to yourself, then write them.'
        },
        {
          title: 'Listen and read',
          mins: 12,
          why: 'The lesson itself - everything after this practises what happens here.',
          todo: 'Play it once with the subtitles ON and once with them OFF. Use '
            + '0.6x if the voices are fast. Then answer the question under it.',
          alone: 'Play the scene twice before you look at the question.'
        },
        {
          title: 'Practise',
          mins: 7,
          why: 'Saying the lines yourself, with the other part played for you.',
          todo: 'Pick your role; the engine mutes it and waits for you. Say the '
            + 'line out loud - not in your head. Then swap roles and do it again.',
          alone: 'This is designed for one person: the engine IS your partner.'
        },
        {
          title: 'Perform',
          mins: 5,
          why: 'Doing it without the words in front of you.',
          todo: 'Close the book - the table above - and say the exchange from '
            + 'memory. Press Record yourself and listen back.',
          alone: 'Record yourself, play it back, and mark your own against the table.'
        },
        {
          title: 'Your turn',
          mins: 9,
          why: 'The same language, about YOUR workplace rather than the book\'s.',
          todo: 'Use the real names, numbers and places from your own job. Press '
            + 'Say it and speak your answer; it types itself.',
          alone: 'Say it aloud first, then write. Speaking first is the point of the step.'
        },
        {
          title: 'Report',
          mins: 6,
          why: 'Saying it to a room, which is harder than saying it to one person.',
          todo: 'Stand up if you can. Say it once, slowly. Then write what you said.',
          alone: 'Say it aloud to the empty room anyway - the difficulty is the '
            + 'standing up and the once, not the audience.'
        },
        {
          title: 'Read',
          mins: 7,
          why: 'Meeting the shape of the thing before you have to write one.',
          todo: 'Read the page above the questions, then answer. The answers are IN '
            + 'the page - if you cannot find one, read again rather than guess.',
          alone: 'Cover your answer and read the page again before you check.'
        },
        {
          title: 'Write with help',
          mins: 9,
          why: 'Writing it with the model beside you.',
          todo: 'Look at the model, then write your own about your own work. Use '
            + 'the openers if you are stuck, and watch the word counter.',
          alone: 'Write it, leave it, come back and read it aloud before you check.'
        },
        {
          title: 'Check together',
          mins: 5,
          why: 'Reading somebody else\'s work closely enough to help it.',
          todo: 'Point at a LINE and name ONE thing. \'It is good\' is not feedback.',
          alone: 'Check your own work against the checklist as if it were somebody '
            + 'else\'s, a day later.'
        },
        {
          title: 'Share',
          mins: 3,
          why: 'Seeing how five other people did the same job.',
          todo: 'Put the work where it can be read. Read three. Say one specific thing.',
          alone: 'Compare yours with the model and with the examples on the card.'
        },
        {
          title: 'Write freely',
          mins: 12,
          why: 'The same writing, without the model.',
          todo: 'Write first, check the model afterwards. Looking first turns it '
            + 'into copying.',
          alone: 'Set a timer for ten minutes and do not stop to correct anything.'
        },
        {
          title: 'Respond',
          mins: 5,
          why: 'Answering what somebody actually wrote, which is a skill of its own.',
          todo: 'Read their work, then ask a real question about it - one you do '
            + 'not already know the answer to.',
          alone: 'Ask the question of your own work and answer it honestly.'
        },
        {
          title: 'Share',
          mins: 4,
          why: 'Seeing how five other people did the same job.',
          todo: 'Put the work where it can be read. Read three. Say one specific thing.',
          alone: 'Compare yours with the model and with the examples on the card.'
        }]
  },
  worked: {
    task: 'Write what you report when a line on the count sheet comes out empty.',
    weak: 'Nothing there.',
    change: ['Write the figure, not a word: a zero proves you counted, an empty '
          + 'line proves nothing.',
        'Say by how much it is short of the paper.'],
    better: 'Row four: none left. Write 0, not nothing. That\'s twelve short of the sheet.'
  },
  cards: [
    {
      id: 'c1',
      kind: 'model',
      ref: '4.3.1',
      bookRef: 'Unit 4 · 4.3 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'Say these three sentences about your own bag: I\'ve got some . I '
              + 'haven\'t got any . There\'s none left.',
            model: 'Open. Sample: I\'ve got some pens. I haven\'t got any money. '
              + 'There\'s none left in my bottle',
            minWords: 5,
            rows: 2,
            hint: 'Your own workplace, not the book\'s. Say it out loud once before '
              + 'you write it - a sentence or two is enough.'
          },
      {
            q: 'Which is the strongest? We haven\'t got much. · We haven\'t got '
              + 'any. · There\'s none left. · There\'s none at all.',
            model: 'There\'s none at all is the strongest — it closes the question. '
              + 'We haven\'t got much is the weakest: it still leaves hope',
            minWords: 6,
            rows: 3,
            hint: 'One of the ones named in the question - pick it and say it.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '4.3.2',
      bookRef: 'Unit 4 · 4.3 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u4-4-3',
      passage: {
        title: 'Language box',
        html: '<p><b>Grammar – some / any / none, and how short you '
          + 'are</b></p><table class=\'bk\'><tr><th>Meaning</th><th>How to say '
          + 'it</th></tr><tr><td>we have a quantity</td><td>We\'ve got '
          + '<b>some</b> left. · There are <b>some</b> on shelf '
          + 'C.</td></tr><tr><td>we have zero (–)</td><td>We <b>haven\'t got '
          + 'any</b>. · There <b>isn\'t any</b> left.</td></tr><tr><td>we have '
          + 'zero (short answer)</td><td><b>None.</b> · There\'s <b>none</b> '
          + 'left. · <b>None at all.</b></td></tr><tr><td>we have some, but not '
          + 'enough</td><td>We\'ve got nineteen and we need sixty — that\'s '
          + '<b>forty-one short</b>.</td></tr></table><p><b>none</b> stands '
          + 'alone, with no noun after it: <i>How many are there? – '
          + '<b>None</b>.</i> Compare: <i>There aren\'t <b>any</b> boxes.</i> '
          + '(with the noun)</p><p>⚠ <i>We are <b>short of</b> boxes</i> · <i>We '
          + 'are <b>forty-one short</b></i>. This is the sentence a manager '
          + 'needs: not <i>there is a problem</i> but <b>how big</b> the problem '
          + 'is.</p><p><b>Practise:</b> Complete with <i>some, any</i> or '
          + '<i>none</i>.</p><p>1 Have we got <span class="blank"></span> small '
          + 'boxes? – <span class="blank"></span> at all. 2 There aren\'t <span '
          + 'class="blank"></span> left on shelf C. 3 I found <span '
          + 'class="blank"></span> in the yard — about ten. 4 How much tape is '
          + 'there? – <span class="blank"></span>. 5 We\'ve got <span '
          + 'class="blank"></span> , but not enough.</p><p><b>Useful phrases:</b> '
          + 'There\'s none left. · None at all. · We need… · That\'s <span '
          + 'class="blank"></span> short. · I\'ll telephone now. · From today, '
          + 'nobody…</p><p><b>Pronunciation – stress the number.</b> 🔊 <b>Track '
          + '4.6</b> Listen. The two numbers carry the sentence: <i>We\'ve got '
          + '<b>nineteen</b> and we need <b>sixty</b>.</i> Repeat the four '
          + 'sentences, making both numbers loud.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. What day is it?',
            options: [{
              t: 'Sunday',
              ok: false,
              why: 'Sunday is in this unit as the day the wrap ran out, in another cycle.'
            },
            {
              t: 'Thursday',
              ok: true,
              why: 'He names the day in his first line, and says it is the worst '
                + 'day for bad news.'
            },
            {
              t: 'Tuesday',
              ok: false,
              why: 'Tuesday is said twice and loudly - it is when the order is '
                + 'needed and when Aleppo sends. It is not today.'
            }],
            evidence: 'Abu Yasser\'s very first line, before any of the numbers'
          },
        {
            q: 'Books closed. Listen. How many small boxes are short?',
            options: [{
              t: 'forty-one',
              ok: true,
              why: 'Nineteen there, sixty needed - he does the subtraction out loud.'
            },
            {
              t: 'nineteen',
              ok: false,
              why: 'Nineteen is how many there ARE. The shortage is what is missing.'
            },
            {
              t: 'sixty',
              ok: false,
              why: 'Sixty is what the Homs order needs - the target, not the gap.'
            }],
            evidence: 'Abu Yasser\'s line with the arithmetic in it'
          },
        {
            q: 'Why does Abu Yasser say he does not like the word *about*?',
            options: [{
              t: 'because "about a hundred" hid a hundred-and-nineteen-box error',
              ok: true,
              why: 'Somebody took four pallets and wrote nothing, and a card that '
                + 'says *about* never contradicted them.'
            },
            {
              t: 'because he cannot count that high',
              ok: false,
              why: 'He counts the whole warehouse twice a month. The complaint is '
                + 'about the record, not the counting.'
            },
            {
              t: 'because Thursday is a bad day',
              ok: false,
              why: 'He jokes about Thursday in his first line; the word *about* is '
                + 'a separate and serious point.'
            }],
            evidence: 'his line about the card and the four pallets'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      ref: '4.3.2',
      bookRef: 'Unit 4 · 4.3 · Lesson A · Speaking · Listen and read',
      type: 'cloze',
      title: 'Practise the grammar',
      instruction: 'Complete with some, any or none.',
      text: '<b>1</b> Have we got [[1]] small boxes? – [[1b]] at all. &nbsp; <b>2</b> '
      + 'There aren\'t [[2]] left on shelf C. &nbsp; <b>3</b> I found [[3]] in '
      + 'the yard — about ten. &nbsp; <b>4</b> How much tape is there? – [[4]]. '
      + '&nbsp; <b>5</b> We\'ve got [[5]] , but not enough.',
      plain: true,
      small: true,
      answers: {
        '1': ['any — None'],
        '2': ['any'],
        '3': ['some'],
        '4': ['None'],
        '5': ['some']
      }
    },
    {
      id: 'c4',
      kind: 'own',
      ref: '4.3.2',
      bookRef: 'Unit 4 · 4.3 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. What has finished?',
            minWords: 6,
            rows: 2,
            hint: 'Look in the dialogue above for the line with *finished* in it. '
              + 'Play it again with the subtitles on.'
          },
      {
            q: 'What does Nour do about it, and why today?',
            minWords: 6,
            rows: 2,
            hint: 'A job, in two or three words. Look in the dialogue above for the '
              + 'line with *Nour* in it. Play it again with the subtitles on.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c5',
      ref: '4.3.3',
      bookRef: 'Unit 4 · 4.3 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. A brings bad news about a quantity; B works out how short '
  + 'they are and what to do. Use the skeleton, then the role cards.',
      scene: 'u4-4-3-pair',
      roles: [{
          who: 'a',
          label: 'A'
        },
      {
          who: 'b',
          label: 'B'
        }],
      minWords: 8,
      notePlaceholder: 'Write two lines you said in the role-play…',
      table: {
        title: 'The cards the book gives you',
        head: ['Role card 1 — a bakery',
        'Role card 2 — a clinic'],
        rows: [['flour: card says 12 sacks, really 3 · Saturday needs 9 · the '
            + 'supplier delivers on Monday',
          'gloves: card says 20 boxes, really 6 · the week needs 15 · the '
            + 'next delivery is in ten days']]
      }
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '4.3.3R',
      bookRef: 'Unit 4 · 4.3 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs act out their conversation for the class – without the book.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ There\'s none left.</td><td>☐ None at '
          + 'all.</td><td>☐ We need…</td><td>☐ That\'s <span '
          + 'class="blank"></span> short.</td><td>☐ I\'ll telephone '
          + 'now.</td><td>☐ From today, nobody…</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            model: 'Listeners write the two numbers and the difference. The '
              + 'performance fails if the pair says only we have a problem — the '
              + 'number is the point. Typical errors: we haven\'t got no flour '
              + '(double negative); there are none sacks → there are no sacks / '
              + 'there are none',
            minWords: 6,
            rows: 3,
            hint: 'Write the words themselves, not what the exchange was about: the '
              + 'actual phrases. Three is plenty. Working alone? Play the scene '
              + 'again and write the phrases the actors use.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – some / any / none, and how short you are.',
      'I covered the table and said it from memory.',
      'I did it a second time, in the other role.']
    },
    {
      id: 'c7',
      kind: 'own',
      ref: '4.3.4',
      bookRef: 'Unit 4 · 4.3 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Think of a time something ran out at work or at home. Tell two colleagues: '
  + 'what finished, how short you were, what you did. Then listen and make notes.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Who</th><th>What ran out</th><th>How '
          + 'short?</th><th>What they '
          + 'did</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            minWords: 6,
            rows: 2,
            hint: 'Two halves and you need both: your own lines, then the other '
              + 'person\'s. Working alone, the engine plays the other part - '
              + 'write what it said back to you.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Think of a time something ran out at work or at home. Tell two '
          + 'colleagues: what finished, how short you were, what you did. Then '
          + 'listen and make notes.',
        grammar: 'Grammar – some / any / none, and how short you are',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (4.3) teaches: Grammar – some / any / none, and how short you '
          + 'are. Judge the language against THAT and against nothing the course '
          + 'has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – some / any / none, and how '
          + 'short you are.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'none',
        'short',
        'stands',
        'alone',
        'noun',
        'after',
        'compare',
        'aren\'t',
        'boxes']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – some / any / none, and how short you are.',
      'I used my own names, numbers and places - not the book\'s.',
      'I said the whole thing the task asks for, not just the first part.']
    },
    {
      id: 'c8',
      kind: 'own',
      ref: '4.3.4R',
      bookRef: 'Unit 4 · 4.3 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: In \'s story, the ran out. They had and they needed — short. They .',
      questions: [{
            q: 'Write what you told the class.',
            minWords: 6,
            rows: 2,
            hint: 'Write the sentences you actually said out loud, not a summary of '
              + 'them. Said to an empty room still counts - write those.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: — In \'s story, the — ran out. They had — and they '
          + 'needed — — — short. They —. (The dashes are blanks the learner fills '
          + 'in with their own workplace. Judge what they wrote in them, not the '
          + 'blanks.)',
        grammar: 'Grammar – some / any / none, and how short you are',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (4.3) teaches: '
          + 'Grammar – some / any / none, and how short you are. Judge the '
          + 'language against THAT and against nothing the course has not taught '
          + 'yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – some / any / none, and how '
          + 'short you are.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'none',
        'short',
        'stands',
        'alone',
        'noun',
        'after',
        'compare',
        'aren\'t',
        'boxes'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      },
      example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – some / any / none, and how short you are.',
      'I stood up, or sat up straight, and said it to the room.',
      'I said it once, slowly, without stopping to correct myself.']
    },
    {
      id: 'c9',
      kind: 'own',
      ref: '4.3.5',
      bookRef: 'Unit 4 · 4.3 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the shortage note Nour writes the same afternoon, and answer the questions.',
      passage: {
        title: 'From the book',
        html: '<p><b>SHORTAGE NOTE — small boxes</b> Thursday, 4.40 '
          + 'pm</p><p><b>What we have:</b> 19 small boxes (counted this afternoon '
          + 'by A.Y.).</p><p><b>What we need:</b> 60 for the Homs order, Tuesday. '
          + '<b>We are 41 short.</b></p><p><b>Why:</b> four pallets went to the '
          + 'Hama job on 2 April and nobody wrote it on the stock card. The card '
          + 'still said "about 100".</p><p><b>What I have done:</b> telephoned Ms '
          + 'Shamsi at 4.30 today. She sends on Tuesdays, so 60 boxes leave '
          + 'Aleppo on Tuesday morning and reach us Tuesday afternoon — after the '
          + 'Homs lorry.</p><p><b>What I need from you:</b> may we send the Homs '
          + 'order on Wednesday instead, or shall we use big boxes for the small '
          + 'items? Big boxes cost more to send.</p><p><b>To stop it happening '
          + 'again:</b> nobody takes a pallet without writing it on the stock '
          + 'card, the same hour.</p><p>Nour</p><h4>Writer\'s box</h4><p><b>Shape '
          + 'of a shortage note:</b> what we have → what we need → <b>how '
          + 'short</b>, in one number → why it happened → what I have '
          + '<b>already</b> done → what I need from you, as a <b>choice</b> → the '
          + 'rule that stops it happening again.</p><p>The number of the shortage '
          + 'is the whole note. <i>We are 41 short</i> is a fact a manager can '
          + 'act on; <i>we have a problem with boxes</i> is not.</p><p>Write '
          + '<b>what you have already done</b> before <b>what you need</b>. It '
          + 'changes the note from a complaint into a report.</p><p>⚠ Give a '
          + '<b>choice</b>, not an open question. <i>Shall we send on Wednesday, '
          + 'or use big boxes?</i> can be answered in four words; <i>what shall '
          + 'we do?</i> cannot.</p>'
      },
      questions: [{
            q: 'How short are they, exactly?',
            minWords: 6,
            rows: 2,
            hint: 'A way of doing it, not a yes or a no. Look in the text above for '
              + 'the line with *exactly* in it.'
          },
      {
            q: 'Why will the new boxes not solve the problem?',
            minWords: 6,
            rows: 2,
            hint: 'A reason. Start it with *because* and it will come out whole. '
              + 'Look in the text above for the line with *problem* in it.'
          },
      {
            q: 'What are the two choices Nour gives her manager?',
            minWords: 6,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence. Look in the text '
              + 'above for the line with *Nour* in it.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Fourteen. It says fourteen twice - the number and the words - so it '
        + 'cannot be read as forty.']
    },
    {
      id: 'c10',
      ref: '4.3.6',
      bookRef: 'Unit 4 · 4.3 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write a shortage note about something that ran out, real or invented (25 '
  + 'words or more). Use the frame.',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      meter: {
        label: 'words from this lesson',
        words: ['grammar',
        'none',
        'short',
        'stands',
        'alone',
        'noun',
        'after',
        'compare']
      },
      coach: {
        title: 'What to include',
        task: 'Write a shortage note about something that ran out, real or invented (25 '
  + 'words or more). Use the frame.',
        criteria: [{ t: 'Shape of a shortage note: what we have → what we need → how '
              + 'short, in one number → why it happened → what I have already '
              + 'done → what I need from you, as a choice → the rule that stops '
              + 'it happening again.' },
            { t: 'The number of the shortage is the whole note. We are 41 short is '
              + 'a fact a manager can act on; we have a problem with boxes is '
              + 'not.' },
            { t: 'Write what you have already done before what you need. It '
              + 'changes the note from a complaint into a report.' },
            { t: '⚠ Give a choice, not an open question. Shall we send on '
              + 'Wednesday, or use big boxes? can be answered in four words; what '
              + 'shall we do? cannot.' }]
      },
      aiCheck: {
        task: 'Write a shortage note about something that ran out, real or invented '
          + '(25 words or more). Use the frame.',
        grammar: 'Grammar – some / any / none, and how short you are',
        must: ['Shape of a shortage note: what we have → what we need → how short, '
          + 'in one number → why it happened → what I have already done → what I '
          + 'need from you, as a choice → the rule that stops it happening again.',
        'The number of the shortage is the whole note. We are 41 short is a '
          + 'fact a manager can act on; we have a problem with boxes is not.',
        'Write what you have already done before what you need. It changes '
          + 'the note from a complaint into a report.',
        '⚠ Give a choice, not an open question. Shall we send on Wednesday, '
          + 'or use big boxes? can be answered in four words; what shall we do? '
          + 'cannot.'],
        vocab: ['grammar',
        'none',
        'short',
        'stands',
        'alone',
        'noun',
        'after',
        'compare',
        'aren\'t',
        'boxes']
      }
    },
    {
      id: 'c11',
      kind: 'model',
      ref: '4.3.6P',
      bookRef: 'Unit 4 · 4.3 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Swap books. Tick ✓ or cross ✗. Underline one thing to fix.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Checklist</th><th>✓ / '
          + '✗</th></tr><tr><td>The shortage is <b>one '
          + 'number</b></td><td>&nbsp;</td></tr><tr><td>Something you have '
          + '<b>already</b> done</td><td>&nbsp;</td></tr><tr><td>A choice, not an '
          + 'open question</td><td>&nbsp;</td></tr><tr><td>A rule for next '
          + 'time</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: 'Sample feedback: "This is a report, not a complaint — the '
              + 'borrowing line does that. The choice can be answered in three '
              + 'words."',
            minWords: 6,
            rows: 3,
            hint: 'Point at one line and name one thing: a missing word, a number '
              + 'with no unit, a sentence worth copying. Alone, read your own '
              + 'work from yesterday and do exactly that to it.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Swap books. Tick ✓ or cross ✗. Underline one thing to fix.',
        grammar: 'Grammar – some / any / none, and how short you are',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (4.3) '
          + 'teaches: Grammar – some / any / none, and how short you are. Judge '
          + 'the language against THAT and against nothing the course has not '
          + 'taught yet.',
        must: ['Shape of a shortage note: what we have → what we need → how short, '
          + 'in one number → why it happened → what I have already done → what I '
          + 'need from you, as a choice → the rule that stops it happening again.',
        'The number of the shortage is the whole note. We are 41 short is a '
          + 'fact a manager can act on; we have a problem with boxes is not.',
        'Write what you have already done before what you need. It changes '
          + 'the note from a complaint into a report.',
        '⚠ Give a choice, not an open question. Shall we send on Wednesday, '
          + 'or use big boxes? can be answered in four words; what shall we do? '
          + 'cannot.'],
        vocab: ['grammar',
        'none',
        'short',
        'stands',
        'alone',
        'noun',
        'after',
        'compare',
        'aren\'t',
        'boxes'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
      }
    },
    {
      id: 'c12',
      kind: 'model',
      ref: '4.3.6R',
      bookRef: 'Unit 4 · 4.3 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two or three students read their What I need from you line. The class '
  + 'answers it in four words or fewer. If they cannot, the line needs rewriting.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            model: 'A good What I need from you line is answerable in four words: '
              + '"Go at nine." A line that cannot be answered that quickly is '
              + 'really two questions, and should be split',
            minWords: 6,
            rows: 3,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – some / any / none, and how short you are.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    },
    {
      id: 'c13',
      ref: '4.3.7',
      bookRef: 'Unit 4 · 4.3 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write about a time something ran out in your own life — at home, on a '
  + 'journey, at a family event (35 words or more). Say how short you were, what '
  + 'you did, and what you do differently now.',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 6
        }],
      meter: {
        label: 'words from this lesson',
        words: ['grammar',
        'none',
        'short',
        'stands',
        'alone',
        'noun',
        'after',
        'compare']
      },
      coach: {
        title: 'What to include',
        task: 'Write about a time something ran out in your own life — at home, on a '
  + 'journey, at a family event (35 words or more). Say how short you were, what '
  + 'you did, and what you do differently now.',
        criteria: [{ t: 'Shape of a shortage note: what we have → what we need → how '
              + 'short, in one number → why it happened → what I have already '
              + 'done → what I need from you, as a choice → the rule that stops '
              + 'it happening again.' },
            { t: 'The number of the shortage is the whole note. We are 41 short is '
              + 'a fact a manager can act on; we have a problem with boxes is '
              + 'not.' },
            { t: 'Write what you have already done before what you need. It '
              + 'changes the note from a complaint into a report.' },
            { t: '⚠ Give a choice, not an open question. Shall we send on '
              + 'Wednesday, or use big boxes? can be answered in four words; what '
              + 'shall we do? cannot.' }]
      },
      aiCheck: {
        task: 'Write about a time something ran out in your own life — at home, on '
          + 'a journey, at a family event (35 words or more). Say how short you '
          + 'were, what you did, and what you do differently now.',
        grammar: 'Grammar – some / any / none, and how short you are',
        must: ['Shape of a shortage note: what we have → what we need → how short, '
          + 'in one number → why it happened → what I have already done → what I '
          + 'need from you, as a choice → the rule that stops it happening again.',
        'The number of the shortage is the whole note. We are 41 short is a '
          + 'fact a manager can act on; we have a problem with boxes is not.',
        'Write what you have already done before what you need. It changes '
          + 'the note from a complaint into a report.',
        '⚠ Give a choice, not an open question. Shall we send on Wednesday, '
          + 'or use big boxes? can be answered in four words; what shall we do? '
          + 'cannot.'],
        vocab: ['grammar',
        'none',
        'short',
        'stands',
        'alone',
        'noun',
        'after',
        'compare',
        'aren\'t',
        'boxes']
      }
    },
    {
      id: 'c14',
      kind: 'model',
      ref: '4.3.7P',
      bookRef: 'Unit 4 · 4.3 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s text. Write on a slip: ★ The same thing happened to me '
  + 'when… ✓ Can you say how short you were? ? a question about what you did',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: '★ The same thing happened to us — we also paid a bad price in '
              + 'the middle of winter. ✓ Can you say how many litres the tank '
              + 'holds? ? Does the price really rise every year?',
            minWords: 6,
            rows: 3,
            hint: 'The question in your own words first, then one specific thing in '
              + 'the answer. Alone, ask it of your own work and answer honestly.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s text. Write on a slip: — ★ The same thing '
          + 'happened to me when… — ✓ Can you say how short you were? —? a '
          + 'question about what you did (The dashes are blanks the learner fills '
          + 'in with their own workplace. Judge what they wrote in them, not the '
          + 'blanks.)',
        grammar: 'Grammar – some / any / none, and how short you are',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (4.3) teaches: Grammar – some / any / none, and how short you '
          + 'are. Judge the language against THAT and against nothing the course '
          + 'has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar – some / any / none, and how '
          + 'short you are.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'none',
        'short',
        'stands',
        'alone',
        'noun',
        'after',
        'compare',
        'aren\'t',
        'boxes'],
        example: ['You wrote that you check the shelves first. I asked: who reads the '
          + 'sheet after you? You said Abu Yasser reads it at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – some / any / none, and how short you are.',
      'I asked a real question - one I did not already know the answer to.',
      'My question was about what they actually said, not about the topic.']
    },
    {
      id: 'c15',
      kind: 'model',
      ref: '4.3.7R',
      bookRef: 'Unit 4 · 4.3 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three texts. Collect the rules people made afterwards. Which rule would '
  + 'work at Sham Trading?',
      passage: {
        title: 'Homework',
        html: '<p>Write your final text. Then write the one-line rule you would put '
          + 'on a wall to stop the same shortage happening, and say where exactly '
          + 'you would put it (20+ words).</p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            model: 'Rules learners bring are nearly always of one kind: write it '
              + 'down at the moment it happens. That is the rule for Sham Trading '
              + 'too, which is why 4.3 ends with it',
            minWords: 6,
            rows: 3,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: – some / any / none, and how short you are.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    }
  ]
});
