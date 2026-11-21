/* Unit 10 · cycle 10.1 — She said she had already sent it.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE5.page('u10-s01', {
  book: { source: 'Proactive Business English · B1 Book 1', ref: 'Unit 10 · 10.1', part: '10.1',
          section: '1', lesson: 'She said she had already sent it', title: 'She said she had already sent it' },
  objective: 'report a statement, with the tense moved back',
  study: {
    minutes: 90,
    objective: 'report a statement, with the tense moved back',
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
    task: 'Write a note of a real call.',
    weak: 'She said I will send it tomorrow.',
    change: ['Report it: SHE SAID SHE WOULD SEND IT the next day. The quoted '
          + '<i>I</i> and <i>tomorrow</i> belong to her and will be read as '
          + 'yours.',
        'Shift the time words with the tenses - <i>tomorrow</i> in a note '
          + 'read a week later means nothing.'],
    better: 'Ms Shamsi telephoned at 10:20. She said she had already sent the '
      + 'replacements and that they would reach us the following day. She added '
      + 'that she had not been able to find a bus on the Thursday.'
  },
  cards: [
    {
      id: 'c1',
      kind: 'model',
      ref: '10.1.1',
      bookRef: 'Unit 10 · 10.1 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'Tell your partner something somebody told you yesterday. Then '
              + 'write it down as you said it.',
            minWords: 6,
            rows: 2,
            hint: 'Your own workplace, not the book\'s. Say it out loud once before '
              + 'you write it - a sentence or two is enough.'
          },
      {
            q: 'Which is right? She said she has sent it. · She said she had '
              + 'sent it. · She said she sent it yesterday.',
            model: 'She said she had sent it. The first fails to backshift; the '
              + 'third is possible only if yesterday was the speaker\'s own word '
              + 'and the writer knows the day meant',
            minWords: 6,
            rows: 3,
            hint: 'One of the ones named in the question - pick it and say it.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '10.1.2',
      bookRef: 'Unit 10 · 10.1 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u10-10-1',
      passage: {
        title: 'Language box',
        html: '<p><b>Reported speech — and the date it is measured '
          + 'from</b></p><table '
          + 'class=\'bk\'><tr><th>Direct</th><th>Reported</th></tr><tr><td><i>I '
          + 'have sent it.</i></td><td>She said she <b>had sent</b> '
          + 'it.</td></tr><tr><td><i>I sent it on Monday.</i></td><td>She said '
          + 'she <b>had sent</b> it on Monday.</td></tr><tr><td><i>I will send '
          + 'it.</i></td><td>She said she <b>would send</b> '
          + 'it.</td></tr><tr><td><i>I am sending it.</i></td><td>She said she '
          + '<b>was sending</b> it.</td></tr><tr><td><i>I can send '
          + 'it.</i></td><td>She said she <b>could send</b> '
          + 'it.</td></tr></table><p>⚠ <b>Put the date of the call in the '
          + 'note.</b> <i>Had sent</i> is measured from the moment of speaking, '
          + 'so without that date the tense has nothing to measure from and the '
          + 'reader cannot place anything.</p><p>⚠ <b>Leave out words that move '
          + 'the time if you do not know what they meant.</b> <i>Already</i> puts '
          + 'the sending before the saying — and the speaker may have meant '
          + '<i>this morning</i>. ⚠ A single adverb can make a reported statement '
          + 'say something nobody said.</p><p>⚠ <b>Keep your own findings in a '
          + 'separate sentence.</b> <i>She said she had sent it. The post book '
          + 'shows nothing since the 11th.</i> <b>One sentence hers, one ours, '
          + 'and the reader can see which is which.</b></p><p>⚠ <b>Backshift one '
          + 'step and no more.</b> <i>I have sent</i> → <i>had sent</i>. <i>I '
          + 'sent</i> → <i>had sent</i>. ⚠ There is nowhere further back to go, '
          + 'so two different originals arrive at the same reported form — which '
          + 'is a real loss and is why the date matters.</p><p><b>Practise:</b> '
          + 'Report each with a date and keep your own finding separate. 1 <i>I '
          + 'have sent it.</i> 2 <i>I will pay on Thursday.</i> 3 <i>I am waiting '
          + 'for your order.</i> 4 <i>I can hold the price.</i> 5 <i>I never '
          + 'received it.</i></p><p><b>Useful phrases:</b> On … she said that… · '
          + 'She said she had… · She said she would… · The post book shows… · I '
          + 'am not certain what she meant by…</p><p><b>Pronunciation – the '
          + 'reported clause, flattened.</b> 🔊 <b>Track 10.2</b> Listen: <i>she '
          + 'said she had sent it</i>. ⚠ The reported half is said <b>without</b> '
          + 'the original speaker\'s emphasis — a reported clause delivered with '
          + 'feeling is an impersonation, and in a note it reads as editorial. '
          + 'Repeat four.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. What is the problem with Nour\'s note?',
            options: [{
              t: 'the tense',
              ok: false
            },
            {
              t: 'it reports two things as though they were said at the same time',
              ok: true
            },
            {
              t: 'it is too short',
              ok: false
            }]
          },
        {
            q: 'What does the post book show?',
            options: [{
              t: 'nothing from Ms Shamsi since 11 November',
              ok: true,
              why: 'Which is why the note needs both sentences - hers and ours - '
                + 'and the reader can see which is which.'
            },
            {
              t: 'nothing since the 25th',
              ok: false,
              why: 'The 25th is the date of the CALL. The post book\'s last entry '
                + 'from her is the 11th, a fortnight earlier.'
            },
            {
              t: 'the September invoice, received on Tuesday',
              ok: false,
              why: 'Nothing was found. If it had been, there would be no note to write.'
            }],
            evidence: 'what Nour checked after the call'
          },
        {
            q: 'Why does Nadia want ALREADY left out of the note?',
            options: [{
              t: 'it puts the sending before the saying, which Nour cannot know',
              ok: true,
              why: 'Ms Shamsi may have meant "I have put it in the post this '
                + 'morning". The word carries a claim about timing that was never '
                + 'made.'
            },
            {
              t: 'because it is too informal for a written note',
              ok: false,
              why: 'Nothing in the exchange is about register. The objection is '
                + 'that the word asserts a fact.'
            },
            {
              t: 'because Ms Shamsi did not say it',
              ok: false,
              why: 'She did say it - Nour reports it accurately. The trouble is '
                + 'what it implies once it is written down.'
            }],
            evidence: '"which is what already does…"'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'model',
      ref: '10.1.2',
      bookRef: 'Unit 10 · 10.1 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Practise the grammar',
      instruction: 'Do the exercise in the Language box.',
      questions: [{
            q: 'Report each with a date and keep your own finding separate. 1 I '
              + 'have sent it. 2 I will pay on Thursday. 3 I am waiting for your '
              + 'order. 4 I can hold the price. 5 I never received it.',
            model: 'On · On Tuesday he said he would pay on Thursday. The bank shows '
              + 'nothing received on Thursday or Friday · On the 20th she said '
              + 'she was waiting for our order. The order book shows it placed on '
              + 'the 18th · On the 25th she said she could hold the price to the '
              + 'end of December. Nothing has come in writing · On the 26th he '
              + 'said he had never received the credit note. The credit book '
              + 'shows it issued on the 22nd and posted on the 23rd · November '
              + 'she said she had sent it. The post book shows nothing since the '
              + '11th',
            minWords: 6,
            rows: 3
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      kind: 'own',
      ref: '10.1.2',
      bookRef: 'Unit 10 · 10.1 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. What does Nadia say about the word already?',
            minWords: 6,
            rows: 2,
            hint: 'Look in the dialogue above for the line with <i>Nadia</i> in it. '
              + 'Play it again with the subtitles on.'
          },
      {
            q: 'What does she say a reported note must carry that this one does not?',
            minWords: 6,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence. Look in the '
              + 'dialogue above for the line with <i>reported</i> in it. Play it '
              + 'again with the subtitles on.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c5',
      ref: '10.1.3',
      bookRef: 'Unit 10 · 10.1 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. A reports a call; B asks when and finds the word that moved '
  + 'the time. Use the skeleton, then the role cards.',
      scene: 'u10-10-1-pair',
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
        head: ['Role card 1 — the haulier',
        'Role card 2 — the customer'],
        rows: [['Mr Jaber said he had <i>just</i> collected the Aleppo load. '
            + '<i>Just</i> puts it minutes before the call, which A does not know '
            + '— he may have meant that day. A\'s own finding: the gate sheet '
            + 'shows no collection that day at all.',
          'Mr Haffar said he had <i>never</i> received the credit note. '
            + '<i>Never</i> is his word and should be reported as his: <i>he said '
            + 'he had never received it</i>. ⚠ A\'s own finding is separate — the '
            + 'credit book shows it issued on the 22nd and posted on the 23rd.']]
      }
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '10.1.3R',
      bookRef: 'Unit 10 · 10.1 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs act out the exchange for the class – without the book.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ On … she said that…</td><td>☐ She said '
          + 'she had…</td><td>☐ She said she would…</td><td>☐ The post book '
          + 'shows…</td><td>☐ I am not certain what she meant by…</td><td>☐ the '
          + 'date of the call</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            model: 'Listeners write the two-sentence note, then the adverb left out '
              + 'and what it would have claimed. Typical errors: she said she has '
              + 'sent it (no backshift — the commonest) · she said me that she '
              + 'had sent it (said takes no object; told me does) · she said that '
              + 'she had sent it already where already was the writer\'s · and '
              + 'the content fault, which is the speaker\'s claim and the '
              + 'writer\'s finding in one sentence',
            minWords: 6,
            rows: 3,
            hint: 'Write the words themselves, not what the exchange was about: the '
              + 'actual phrases. Three is plenty. Working alone? Play the scene '
              + 'again and write the phrases the actors use.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Reported speech — and the date it is '
        + 'measured from.',
      'I covered the table and said it from memory.',
      'I did it a second time, in the other role.']
    },
    {
      id: 'c7',
      kind: 'own',
      ref: '10.1.4',
      bookRef: 'Unit 10 · 10.1 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Take four things you were told this month. Write each as a two-sentence note '
  + 'with the date.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Date and who</th><th>What they said '
          + '(reported)</th><th>What I found '
          + '(separate)</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            minWords: 6,
            rows: 2,
            hint: 'Two halves and you need both: your own lines, then the other '
              + 'person\'s. Working alone, the engine plays the other part - '
              + 'write what it said back to you.'
          }],
      ideas: ['Quote, question, stop'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Take four things you were told this month. Write each as a '
          + 'two-sentence note with the date.',
        grammar: 'Reported speech — and the date it is measured from',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (10.1) teaches: Reported speech — and the date it is measured '
          + 'from. Judge the language against THAT and against nothing the course '
          + 'has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Reported speech — and the date it is '
          + 'measured from.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['reported',
        'speech',
        'date',
        'measured',
        'call',
        'note',
        'sent',
        'moment',
        'speaking',
        'without']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Reported speech — and the date it is '
        + 'measured from.',
      'I used my own names, numbers and places - not the book\'s.',
      'I said the whole thing the task asks for, not just the first part.']
    },
    {
      id: 'c8',
      kind: 'own',
      ref: '10.1.4R',
      bookRef: 'Unit 10 · 10.1 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: On , said that . shows .',
      questions: [{
            q: 'Write what you told the class.',
            minWords: 6,
            rows: 2,
            hint: 'Write the sentences you actually said out loud, not a summary of '
              + 'them. Said to an empty room still counts - write those.'
          }],
      ideas: ['Quote, question, stop'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: — On , — said that —. — shows —. (The dashes are '
          + 'blanks the learner fills in with their own workplace. Judge what '
          + 'they wrote in them, not the blanks.)',
        grammar: 'Reported speech — and the date it is measured from',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (10.1) teaches: '
          + 'Reported speech — and the date it is measured from. Judge the '
          + 'language against THAT and against nothing the course has not taught '
          + 'yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Reported speech — and the date it is '
          + 'measured from.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['reported',
        'speech',
        'date',
        'measured',
        'call',
        'note',
        'sent',
        'moment',
        'speaking',
        'without'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      },
      example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Reported speech — and the date it is '
        + 'measured from.',
      'I stood up, or sat up straight, and said it to the room.',
      'I said it once, slowly, without stopping to correct myself.']
    },
    {
      id: 'c9',
      kind: 'own',
      ref: '10.1.5',
      bookRef: 'Unit 10 · 10.1 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the note of a call, and answer the questions.',
      passage: {
        title: 'From the book',
        html: '<p><b>NOTE OF A TELEPHONE CALL. D. Shamsi to N. Mansour. Tuesday 25 '
          + 'November, about 10.00. Written at 10.20.</b></p><p><b>What she '
          + 'said.</b> She said she had sent the September invoice. She said she '
          + 'had not been paid for September or October. She said the Aleppo '
          + 'price would hold until the end of December and that she would put '
          + 'that in writing. She said she had changed the wrap batch numbering '
          + 'in September and that 8814 was the first of the new series. ⚠ <b>She '
          + 'did not say when she had sent the September invoice and I did not '
          + 'ask.</b></p><p><b>What she asked.</b> Whether we wanted the December '
          + 'delivery on the Thursday. Whether the two torn rolls had been '
          + 'replaced from stock or were still outstanding.</p><p><b>What I '
          + 'said.</b> That I would look at the September invoice today. That the '
          + 'two rolls were replaced from stock on the 20th. That Thursday suited '
          + 'us better than Wednesday and that I would confirm in '
          + 'writing.</p><p><b>What I have found since, which is ours and not '
          + 'hers.</b> The post book shows nothing received from her since 11 '
          + 'November. The purchase ledger shows the September invoice entered on '
          + '2 October, so <b>we have it</b> — and it is on neither October '
          + 'payment run, with a pencil mark against it that I think is '
          + 'Nadia\'s.</p><p>⚠ <b>One thing I am recording because I may be wrong '
          + 'about it.</b> I took <i>she had sent it</i> to mean before the call. '
          + '<b>It is equally possible she meant that morning</b>, in which case '
          + 'the post book proves nothing and the invoice is in the post now. I '
          + 'have not telephoned back to ask, because the ledger entry makes the '
          + 'question academic — we have the invoice either way — ⚠ <b>but if '
          + 'this note is read in six months the distinction may matter and I '
          + 'would rather it were on the page than in my '
          + 'memory.</b></p><h4>Writer\'s box</h4><p><b>A note of a call — four '
          + 'headings, always in this order:</b> <b>what she said</b> · <b>what '
          + 'she asked</b> · <b>what I said</b> · ⚠ <b>what I have found since, '
          + 'which is ours and not hers.</b> Then one paragraph: ⚠ <b>what I may '
          + 'be wrong about.</b></p><p><b>Head it with who, to whom, when, and '
          + 'when it was written.</b> <i>Written at 10.20</i> matters: a note '
          + 'written at 10.20 about a call at 10.00 is a different document from '
          + 'one written on Friday.</p><p><b>Record what you did not ask.</b> '
          + '<i>She did not say when she had sent it and I did not ask.</i> ⚠ A '
          + 'gap you name is a gap; a gap you leave out becomes, to a later '
          + 'reader, a thing she did not mention.</p><p>⚠ <b>Keep your own '
          + 'findings under their own heading and label them.</b> <i>What I have '
          + 'found since, which is ours and not hers.</i></p><p>⚠ <b>Record the '
          + 'ambiguity you may be wrong about, even when it does not matter '
          + 'today.</b> <i>If this note is read in six months the distinction may '
          + 'matter and I would rather it were on the page than in my memory.</i> '
          + '⚠ That is the sentence that makes a note of a call worth '
          + 'keeping.</p>'
      },
      questions: [{
            q: 'What four headings does the note use, and why is the fourth separate?',
            minWords: 6,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence. Look in the text '
              + 'above for the line with <i>headings</i> in it.'
          },
      {
            q: 'What does the writer record that she did not do?',
            minWords: 6,
            rows: 2,
            hint: 'A job, in two or three words. Look in the text above for the '
              + 'line with <i>writer</i> in it.'
          },
      {
            q: 'What may the writer be wrong about, and why is it recorded anyway?',
            minWords: 6,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence. Look in the text '
              + 'above for the line with <i>recorded</i> in it.'
          }],
      ideas: ['Quote, question, stop'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Fourteen. It says fourteen twice - the number and the words - so it '
        + 'cannot be read as forty.']
    },
    {
      id: 'c10',
      ref: '10.1.6',
      bookRef: 'Unit 10 · 10.1 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write a note of a real call (<b>50 words or more</b>). Use the frame.',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      meter: {
        label: 'words from this lesson',
        words: ['reported',
        'speech',
        'date',
        'measured',
        'call',
        'note',
        'sent',
        'moment']
      },
      coach: {
        title: 'What to include',
        task: 'Write a note of a real call (50 words or more). Use the frame.',
        criteria: [{ t: 'A note of a call — four headings, always in this order: what she '
              + 'said · what she asked · what I said · ⚠ what I have found since, '
              + 'which is ours and not hers. Then one paragraph: ⚠ what I may be '
              + 'wrong about.' },
            { t: 'Head it with who, to whom, when, and when it was written. '
              + 'Written at 10.20 matters: a note written at 10.20 about a call '
              + 'at 10.00 is a different document from one written on Friday.' },
            { t: 'Record what you did not ask. She did not say when she had sent '
              + 'it and I did not ask. ⚠ A gap you name is a gap; a gap you leave '
              + 'out becomes, to a later reader, a thing she did not mention.' },
            { t: '⚠ Keep your own findings under their own heading and label them. '
              + 'What I have found since, which is ours and not hers.' },
            { t: '⚠ Record the ambiguity you may be wrong about, even when it does '
              + 'not matter today. If this note is read in six months the '
              + 'distinction may matter and I would rather it were on the page '
              + 'than in my memory. ⚠ That is the sentence that makes a note of a '
              + 'call worth keeping.' }]
      },
      aiCheck: {
        task: 'Write a note of a real call (50 words or more). Use the frame.',
        grammar: 'Reported speech — and the date it is measured from',
        must: ['A note of a call — four headings, always in this order: what she '
          + 'said · what she asked · what I said · ⚠ what I have found since, '
          + 'which is ours and not hers. Then one paragraph: ⚠ what I may be '
          + 'wrong about.',
        'Head it with who, to whom, when, and when it was written. Written at '
          + '10.20 matters: a note written at 10.20 about a call at 10.00 is a '
          + 'different document from one written on Friday.',
        'Record what you did not ask. She did not say when she had sent it '
          + 'and I did not ask. ⚠ A gap you name is a gap; a gap you leave out '
          + 'becomes, to a later reader, a thing she did not mention.',
        '⚠ Keep your own findings under their own heading and label them. '
          + 'What I have found since, which is ours and not hers.'],
        vocab: ['reported',
        'speech',
        'date',
        'measured',
        'call',
        'note',
        'sent',
        'moment',
        'speaking',
        'without']
      }
    },
    {
      id: 'c11',
      kind: 'own',
      ref: '10.1.6P',
      bookRef: 'Unit 10 · 10.1 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Swap books. Ask one question: could a reader in six months tell their words '
  + 'from yours? Tick ✓ or cross ✗, and name the criterion each time.',
      passage: {
        title: 'From the book',
        html: '<h4>Band 3 feedback — quote the criterion, ask the question, '
          + 'stop</h4><p>"The box says keep your own findings under their own '
          + 'heading. Your third paragraph has what they said and what you '
          + 'discovered in the same sentence — which half is '
          + 'theirs?"</p><p>Quote, question, stop.</p><table '
          + 'class=\'bk\'><tr><th>Checklist</th><th>✓ / ✗</th></tr><tr><td>Who, '
          + 'to whom, when, and when written</td><td>&nbsp;</td></tr><tr><td>The '
          + 'four headings, in order</td><td>&nbsp;</td></tr><tr><td>Something '
          + 'they did not say and you did not '
          + 'ask</td><td>&nbsp;</td></tr><tr><td>One thing you may be wrong '
          + 'about</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            minWords: 6,
            rows: 2,
            hint: 'Point at one line and name one thing: a missing word, a number '
              + 'with no unit, a sentence worth copying. Alone, read your own '
              + 'work from yesterday and do exactly that to it.'
          }],
      ideas: ['Quote, question, stop'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Swap books. Ask one question: could a reader in six months tell '
          + 'their words from yours? Tick ✓ or cross ✗, and name the criterion '
          + 'each time.',
        grammar: 'Reported speech — and the date it is measured from',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (10.1) '
          + 'teaches: Reported speech — and the date it is measured from. Judge '
          + 'the language against THAT and against nothing the course has not '
          + 'taught yet.',
        must: ['A note of a call — four headings, always in this order: what she '
          + 'said · what she asked · what I said · ⚠ what I have found since, '
          + 'which is ours and not hers. Then one paragraph: ⚠ what I may be '
          + 'wrong about.',
        'Head it with who, to whom, when, and when it was written. Written at '
          + '10.20 matters: a note written at 10.20 about a call at 10.00 is a '
          + 'different document from one written on Friday.',
        'Record what you did not ask. She did not say when she had sent it '
          + 'and I did not ask. ⚠ A gap you name is a gap; a gap you leave out '
          + 'becomes, to a later reader, a thing she did not mention.',
        '⚠ Keep your own findings under their own heading and label them. '
          + 'What I have found since, which is ours and not hers.'],
        vocab: ['reported',
        'speech',
        'date',
        'measured',
        'call',
        'note',
        'sent',
        'moment',
        'speaking',
        'without'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
      },
      example: ['Line 2: the number is there but not the word. It says “twenty” and it '
        + 'should say “twenty packets”.']
    },
    {
      id: 'c12',
      kind: 'own',
      ref: '10.1.6R',
      bookRef: 'Unit 10 · 10.1 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two or three students read their what I may be wrong about. The class says '
  + 'which would matter in six months.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      ideas: ['Quote, question, stop'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Clear. I liked the times - I knew exactly when he starts and when he finishes.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Reported speech — and the date it is '
        + 'measured from.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    },
    {
      id: 'c13',
      ref: '10.1.7',
      bookRef: 'Unit 10 · 10.1 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write about a time what you reported somebody as saying turned out to be '
  + 'wrong (<b>100 to 140 words</b>). Say what they actually said, what you '
  + 'wrote, and where the difference came from.',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 10
        }],
      meter: {
        label: 'words from this lesson',
        words: ['reported',
        'speech',
        'date',
        'measured',
        'call',
        'note',
        'sent',
        'moment']
      },
      coach: {
        title: 'What to include',
        task: 'Write about a time what you reported somebody as saying turned out to be '
  + 'wrong (100 to 140 words). Say what they actually said, what you wrote, and '
  + 'where the difference came from.',
        criteria: [{ t: 'A note of a call — four headings, always in this order: what she '
              + 'said · what she asked · what I said · ⚠ what I have found since, '
              + 'which is ours and not hers. Then one paragraph: ⚠ what I may be '
              + 'wrong about.' },
            { t: 'Head it with who, to whom, when, and when it was written. '
              + 'Written at 10.20 matters: a note written at 10.20 about a call '
              + 'at 10.00 is a different document from one written on Friday.' },
            { t: 'Record what you did not ask. She did not say when she had sent '
              + 'it and I did not ask. ⚠ A gap you name is a gap; a gap you leave '
              + 'out becomes, to a later reader, a thing she did not mention.' },
            { t: '⚠ Keep your own findings under their own heading and label them. '
              + 'What I have found since, which is ours and not hers.' },
            { t: '⚠ Record the ambiguity you may be wrong about, even when it does '
              + 'not matter today. If this note is read in six months the '
              + 'distinction may matter and I would rather it were on the page '
              + 'than in my memory. ⚠ That is the sentence that makes a note of a '
              + 'call worth keeping.' }]
      },
      aiCheck: {
        task: 'Write about a time what you reported somebody as saying turned out '
          + 'to be wrong (100 to 140 words). Say what they actually said, what '
          + 'you wrote, and where the difference came from.',
        grammar: 'Reported speech — and the date it is measured from',
        must: ['A note of a call — four headings, always in this order: what she '
          + 'said · what she asked · what I said · ⚠ what I have found since, '
          + 'which is ours and not hers. Then one paragraph: ⚠ what I may be '
          + 'wrong about.',
        'Head it with who, to whom, when, and when it was written. Written at '
          + '10.20 matters: a note written at 10.20 about a call at 10.00 is a '
          + 'different document from one written on Friday.',
        'Record what you did not ask. She did not say when she had sent it '
          + 'and I did not ask. ⚠ A gap you name is a gap; a gap you leave out '
          + 'becomes, to a later reader, a thing she did not mention.',
        '⚠ Keep your own findings under their own heading and label them. '
          + 'What I have found since, which is ours and not hers.'],
        vocab: ['reported',
        'speech',
        'date',
        'measured',
        'call',
        'note',
        'sent',
        'moment',
        'speaking',
        'without']
      }
    },
    {
      id: 'c14',
      kind: 'model',
      ref: '10.1.7P',
      bookRef: 'Unit 10 · 10.1 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s text. Write on a slip: ★ where the difference came from '
  + '✓ backshift correct, and the date of the saying given? ? was it a word they '
  + 'used or a word you added?',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: '★ where the difference came from — "one word: guarantee, '
              + 'dropped" ✓ backshift correct, and the date of the saying given? '
              + '— yes ? was it a word they used or a word you added? — "a word '
              + 'he used and I removed, which is the other direction"',
            minWords: 6,
            rows: 3,
            hint: 'The question in your own words first, then one specific thing in '
              + 'the answer. Alone, ask it of your own work and answer honestly.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s text. Write on a slip: — ★ where the difference '
          + 'came from — ✓ backshift correct, and the date of the saying given? '
          + '—? was it a word they used or a word you added? (The dashes are '
          + 'blanks the learner fills in with their own workplace. Judge what '
          + 'they wrote in them, not the blanks.)',
        grammar: 'Reported speech — and the date it is measured from',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (10.1) teaches: Reported speech — and the date it is measured '
          + 'from. Judge the language against THAT and against nothing the course '
          + 'has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Reported speech — and the date it is '
          + 'measured from.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['reported',
        'speech',
        'date',
        'measured',
        'call',
        'note',
        'sent',
        'moment',
        'speaking',
        'without'],
        example: ['You wrote that you check the shelves first. I asked: who reads the '
          + 'sheet after you? You said Abu Yasser reads it at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Reported speech — and the date it is '
        + 'measured from.',
      'I asked a real question - one I did not already know the answer to.',
      'My question was about what they actually said, not about the topic.']
    },
    {
      id: 'c15',
      kind: 'own',
      ref: '10.1.7R',
      bookRef: 'Unit 10 · 10.1 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three texts. In how many was the difference one word? ⚠ Usually all '
  + 'three — and usually an adverb: already, just, never, only.',
      passage: {
        title: 'Homework',
        html: '<p>Write your final text. Then write a note of your next telephone '
          + 'call under the four headings, with the date of the call and of the '
          + 'writing (50+ words).</p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      ideas: ['Quote, question, stop'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Clear. I liked the times - I knew exactly when he starts and when he finishes.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Reported speech — and the date it is '
        + 'measured from.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    }
  ]
});
