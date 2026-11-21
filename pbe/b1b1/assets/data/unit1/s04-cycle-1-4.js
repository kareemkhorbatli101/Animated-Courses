/* Unit 1 · cycle 1.4 — Roles, not people.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE5.page('u1-s04', {
  book: { source: 'Proactive Business English · B1 Book 1', ref: 'Unit 1 · 1.4', part: '1.4',
          section: '4', lesson: 'Roles, not people', title: 'Roles, not people' },
  objective: 'explain a colleague\'s role without tying it to a person',
  study: {
    minutes: 90,
    objective: 'explain a colleague\'s role without tying it to a person',
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
    task: 'Write the routing page for your own workplace.',
    weak: 'Invoices go to Nour. Complaints go to Hala.',
    change: ['Route by ROLE, not by name. A page of names is out of date the first '
          + 'time somebody leaves, and then it sends people to the wrong desk for '
          + 'years.',
        'Add what happens when the role is empty - a routing page with no '
          + 'fallback routes nothing on a Thursday.'],
    better: 'Invoice queries → Accounts (Nour Mansour). Damaged goods → Counter (Hala '
      + 'Mourad). Collections → Warehouse (Abu Yasser). If the role is unstaffed, '
      + 'it goes to the office manager, not to whoever answers.'
  },
  cards: [
    {
      id: 'c1',
      kind: 'model',
      ref: '1.4.1',
      bookRef: 'Unit 1 · 1.4 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'Explain a colleague\'s job to somebody outside your company, in '
              + 'two sentences. Then say it again without using their name.',
            model: 'Open. Removing the name is harder than it sounds and the second '
              + 'version is nearly always shorter and better',
            minWords: 6,
            rows: 3,
            hint: 'Your own workplace, not the book\'s. Say it out loud once before '
              + 'you write it - a sentence or two is enough.'
          },
      {
            q: 'Which version is more useful on a page a stranger keeps for a '
              + 'year? Ask Hala. · Ask whoever is on the counter. · Ask Hala, or '
              + 'whoever is on the counter.',
            model: 'The third — Ask Hala, or whoever is on the counter — because it '
              + 'carries both: the role, so the page is still true in a year, and '
              + 'the name, so the reader does not have to address a human being '
              + 'as whoever',
            minWords: 6,
            rows: 3,
            hint: 'One of the ones named in the question - pick it and say it.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '1.4.2',
      bookRef: 'Unit 1 · 1.4 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u1-1-4',
      passage: {
        title: 'Language box',
        html: '<p><b>Roles and names, together</b></p><table '
          + 'class=\'bk\'><tr><th>Shape</th><th>Example</th><th>What it is '
          + 'for</th></tr><tr><td>the <b>role</b> as subject</td><td>The '
          + '<b>counter</b> takes collection queries.</td><td>the page lasts a '
          + 'year</td></tr><tr><td><b>whoever</b> + verb</td><td>Ask <b>whoever '
          + 'is on</b> the counter.</td><td>no name, still '
          + 'actionable</td></tr><tr><td>role <b>+</b> name</td><td>The counter — '
          + 'that is Hala at the moment.</td><td>⚠ both, '
          + 'always</td></tr><tr><td>third person <b>-s</b></td><td>She '
          + '<b>handles</b> the counter. He <b>signs</b> the gate '
          + 'sheet.</td><td>the -s nobody hears themselves '
          + 'drop</td></tr><tr><td><b>goes to</b> + role</td><td>A count query '
          + '<b>goes to</b> the warehouse.</td><td>the document, not the person, '
          + 'as subject</td></tr></table><p>⚠ <b>A page of names goes out of '
          + 'date; a page of roles cannot be used.</b> Give both: the <b>role</b> '
          + 'so that the page is still true in a year, and the <b>name</b> so '
          + 'that the reader does not have to say <i>whoever is on the '
          + 'counter</i> to a human being.</p><p>⚠ <b>Let the document be the '
          + 'subject.</b> <i>A count query goes to the warehouse</i> is shorter '
          + 'and clearer than <i>if you have a question about the count you '
          + 'should speak to the person in the warehouse</i>, and it survives a '
          + 'change of staff.</p><p>⚠ <b>The third-person -s.</b> <i>She handle '
          + 'the counter</i> is the single commonest error at this level and '
          + 'nobody hears it in their own speech. The remedy is not a rule; it is '
          + 'saying four of them aloud every lesson until it is '
          + 'automatic.</p><p>⚠ <i>Whoever</i> takes a singular verb: <i>whoever '
          + '<b>is</b> on the counter</i>, not <s>whoever '
          + 'are</s>.</p><p><b>Practise:</b> Say each as a role, then add the '
          + 'name. 1 collection queries 2 the count 3 the account 4 anything over '
          + '500,000 5 Saturdays</p><p><b>Useful phrases:</b> Ask whoever is on '
          + 'the counter. · A count query goes to the warehouse. · That is Hala '
          + 'at the moment. · the role so the page lasts · the name so I know who '
          + 'to ask for</p><p><b>Pronunciation – the -s nobody hears.</b> 🔊 '
          + '<b>Track 1.8</b> Listen: <i>she <b>handles</b> · he <b>signs</b> · '
          + 'it <b>goes</b> to the warehouse</i>. Three different sounds — /z/, '
          + '/z/, /z/ — and one of them is after a vowel, which is where it is '
          + 'dropped. Repeat six.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. What is wrong with the way Bassel explains '
              + 'the company?',
            options: [{
              t: 'it is too long',
              ok: false
            },
            {
              t: 'it is all names',
              ok: true
            },
            {
              t: 'it is all job titles',
              ok: false
            }]
          },
        {
            q: 'How many names had Mr Jaber written down before he asked for the '
              + 'jobs instead?',
            options: [{
              t: 'four',
              ok: true,
              why: '"I have written four names and I am no further on." Bassel\'s '
                + 'four are the right four, which is what makes the point.'
            },
            {
              t: 'three',
              ok: false,
              why: 'Three is the number of ROLES he ends up with - counter, '
                + 'warehouse, coordinator.'
            },
            {
              t: 'two',
              ok: false,
              why: 'Two is how many of the four he says will be doing something '
                + 'else in a year.'
            }],
            evidence: '"I am no further on."'
          },
        {
            q: 'Why does Mr Jaber want the role AND the name?',
            options: [{
              t: 'the role so the page lasts, the name so he can ask for a person',
              ok: true,
              why: 'His own words: "the role so the page lasts, the name so I do '
                + 'not have to say whoever is on the counter to a human being."'
            },
            {
              t: 'because the four names were wrong',
              ok: false,
              why: 'He says they are the right four names. The fault is that they '
                + 'date, not that they are wrong today.'
            },
            {
              t: 'because he does not trust the counter',
              ok: false,
              why: 'Nothing in the exchange says that. The one person he refuses '
                + 'to deal with is the driver, in an earlier cycle.'
            }],
            evidence: 'his answer once Bassel gives him the jobs'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'model',
      ref: '1.4.2',
      bookRef: 'Unit 1 · 1.4 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Practise the grammar',
      instruction: 'Do the exercise in the Language box.',
      questions: [{
            q: 'Say each as a role, then add the name. 1 collection queries 2 '
              + 'the count 3 the account 4 anything over 500,000 5 Saturdays',
            model: 'Collection queries go to whoever is on the counter — Hala at the '
              + 'moment · A count query goes to the warehouse; that is Abu Yasser '
              + '· Anything about the account goes to the coordinator, which is '
              + 'Nour · Anything over 500,000 goes to the office manager — Mr '
              + 'Ayoub · On Saturdays the counter is the coordinator, because the '
              + 'counter staff are at the other site',
            minWords: 6,
            rows: 3
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      kind: 'own',
      ref: '1.4.2',
      bookRef: 'Unit 1 · 1.4 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. What happens to a page of names?',
            minWords: 6,
            rows: 2,
            hint: 'Look in the dialogue above for the line with <i>happens</i> in '
              + 'it. Play it again with the subtitles on.'
          },
      {
            q: 'Why does Mr Jaber want both?',
            minWords: 6,
            rows: 2,
            hint: 'A reason. Start it with <i>because</i> and it will come out '
              + 'whole. Look in the dialogue above for the line with <i>Jaber</i> '
              + 'in it. Play it again with the subtitles on.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c5',
      ref: '1.4.3',
      bookRef: 'Unit 1 · 1.4 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. A explains the company in names; B asks for the jobs, and '
  + 'then for both. Use the skeleton, then the role cards.',
      scene: 'u1-1-4-pair',
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
        head: ['Role card 1 — a workshop of five',
        'Role card 2 — a one-person office'],
        rows: [['Everybody does a bit of everything and A is proud of it. B needs '
            + 'to know who to ring about a delivery date, a price and a '
            + 'complaint. The honest answer is that all three go to the same '
            + 'person — which is itself the finding.',
          'A is the only administrator. B points out that a page saying '
            + '<i>ask me</i> is the most fragile page of all, and asks what '
            + 'happens the week A is away.']]
      }
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '1.4.3R',
      bookRef: 'Unit 1 · 1.4 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs act out the exchange for the class – without the book.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ Ask whoever is on the '
          + 'counter.</td><td>☐ A count query goes to the warehouse.</td><td>☐ '
          + 'That is Hala at the moment.</td><td>☐ She handles…</td><td>☐ He '
          + 'signs…</td><td>☐ the role, then the name</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            model: 'Listeners build the role column and the name column, then cross '
              + 'out any name that would be wrong in a year. Typical errors: '
              + 'whoever are on the counter (singular verb) · she handle the '
              + 'counter — the third-person -s, which is the commonest error at '
              + 'this level and which nobody hears in their own speech · a count '
              + 'query go to the warehouse',
            minWords: 6,
            rows: 3,
            hint: 'Write the words themselves, not what the exchange was about: the '
              + 'actual phrases. Three is plenty. Working alone? Play the scene '
              + 'again and write the phrases the actors use.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Roles and names, together.',
      'I covered the table and said it from memory.',
      'I did it a second time, in the other role.']
    },
    {
      id: 'c7',
      kind: 'own',
      ref: '1.4.4',
      bookRef: 'Unit 1 · 1.4 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Write the four or five routes into your workplace as roles, then add '
  + 'today\'s names. Then ask yourself which name will still be right in a year.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>The query</th><th>The role it goes '
          + 'to</th><th>The name today</th><th>Right in a '
          + 'year?</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            minWords: 6,
            rows: 2,
            hint: 'Two halves and you need both: your own lines, then the other '
              + 'person\'s. Working alone, the engine plays the other part - '
              + 'write what it said back to you.'
          }],
      ideas: ['Roles and names, together',
      'Quote, question, stop'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Write the four or five routes into your workplace as roles, then add '
          + 'today\'s names. Then ask yourself which name will still be right in '
          + 'a year.',
        grammar: 'Roles and names, together',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (1.4) teaches: Roles and names, together. Judge the language '
          + 'against THAT and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Roles and names, together.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['roles',
        'names',
        'together',
        'page',
        'date',
        'cannot',
        'used',
        'give',
        'both',
        'role']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Roles and names, together.',
      'I used my own names, numbers and places - not the book\'s.',
      'I said the whole thing the task asks for, not just the first part.']
    },
    {
      id: 'c8',
      kind: 'own',
      ref: '1.4.4R',
      bookRef: 'Unit 1 · 1.4 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: A query goes to , which is at the moment. The one most '
  + 'likely to change is .',
      questions: [{
            q: 'Write what you told the class.',
            minWords: 6,
            rows: 2,
            hint: 'Write the sentences you actually said out loud, not a summary of '
              + 'them. Said to an empty room still counts - write those.'
          }],
      ideas: ['Roles and names, together',
      'Quote, question, stop'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: — A — query goes to , which is — at the moment. The '
          + 'one most likely to change is —. (The dashes are blanks the learner '
          + 'fills in with their own workplace. Judge what they wrote in them, '
          + 'not the blanks.)',
        grammar: 'Roles and names, together',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (1.4) teaches: '
          + 'Roles and names, together. Judge the language against THAT and '
          + 'against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Roles and names, together.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['roles',
        'names',
        'together',
        'page',
        'date',
        'cannot',
        'used',
        'give',
        'both',
        'role'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      },
      example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Roles and names, together.',
      'I stood up, or sat up straight, and said it to the room.',
      'I said it once, slowly, without stopping to correct myself.']
    },
    {
      id: 'c9',
      kind: 'own',
      ref: '1.4.5',
      bookRef: 'Unit 1 · 1.4 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the routing page sent to Jaber Freight, and answer the questions.',
      passage: {
        title: 'From the book',
        html: '<p><b>SHAM TRADING — WHERE TO SEND WHAT</b></p><table '
          + 'class=\'bk\'><tr><th>What you have</th><th>Where it goes</th><th>Who '
          + 'that is today</th></tr><tr><td>a booking, or a change to '
          + 'one</td><td>the coordinator, <b>in writing</b></td><td>Nour '
          + 'Mansour</td></tr><tr><td>a query on a collection already '
          + 'booked</td><td>whoever is on the counter</td><td>Hala Mourad (Nour '
          + 'on Saturdays)</td></tr><tr><td>a question about a count or a '
          + 'quantity</td><td>the warehouse</td><td>Abu '
          + 'Yasser</td></tr><tr><td>an invoice or a payment '
          + 'query</td><td>accounts</td><td>Nadia Sayegh (Sun–Thu, finishes at '
          + 'four)</td></tr><tr><td>anything over 500,000, or a second '
          + 'refusal</td><td>the office manager</td><td>Mr Khaled '
          + 'Ayoub</td></tr><tr><td>anything you are not sure about</td><td>the '
          + 'coordinator</td><td>Nour Mansour</td></tr></table><p><b>Two notes on '
          + 'using this page.</b> The middle column is the one to keep: it will '
          + 'be true next year and the right-hand column may not. And the last '
          + 'line is not a joke — <i>anything you are not sure about</i> is a '
          + 'real route, and using it has never once annoyed anybody '
          + 'here.</p><p>⚠ <b>One thing this page does not do.</b> It does not '
          + 'tell you who is <b>answerable</b> when something goes wrong; that is '
          + 'the contact page, which is a different sheet and is on the back. A '
          + 'routing page tells you where to send a thing. An accountability page '
          + 'tells you whose telephone rings. Keeping them apart is deliberate: '
          + 'the first changes every holiday and the second changes about once a '
          + 'year.</p><h4>Writer\'s box</h4><p><b>A routing page — a three-column '
          + 'table:</b> what you have → <b>where it goes</b>, as a role → who '
          + 'that is today.</p><p><b>Put the role in the middle column and the '
          + 'name on the right.</b> The reader reads left to right and stops as '
          + 'soon as they have what they need; the durable column is therefore '
          + 'the one they see first, and the perishable one is at the end where '
          + 'it can be crossed out and rewritten.</p><p><b>Include the row for '
          + '"anything you are not sure about".</b> It is the row that prevents '
          + 'the worst outcome, which is not a misrouted query but a query nobody '
          + 'sent at all.</p><p>⚠ <b>Keep routing and accountability apart, and '
          + 'say that you have.</b> They change at different speeds — a routing '
          + 'page changes every holiday and an accountability page about once a '
          + 'year — and a sheet that mixes them is out of date as a whole the '
          + 'first time either moves.</p>'
      },
      questions: [{
            q: 'Which column does the page tell you to keep, and why?',
            minWords: 6,
            rows: 2,
            hint: 'One of the ones named in the question - pick it and say it. Your '
              + 'own workplace, not the book\'s. Say it out loud once before you '
              + 'write it - a sentence or two is enough.'
          },
      {
            q: 'What is the last row for, and what does the page claim about it?',
            minWords: 6,
            rows: 2,
            hint: 'A thing, in a few words - not a whole sentence. Look in the text '
              + 'above for the line with <i>claim</i> in it.'
          },
      {
            q: 'Why are routing and accountability on two different sheets?',
            minWords: 6,
            rows: 2,
            hint: 'A reason. Start it with <i>because</i> and it will come out '
              + 'whole. Look in the text above for the line with '
              + '<i>accountability</i> in it.'
          }],
      ideas: ['Roles and names, together',
      'Quote, question, stop'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Fourteen. It says fourteen twice - the number and the words - so it '
        + 'cannot be read as forty.']
    },
    {
      id: 'c10',
      ref: '1.4.6',
      bookRef: 'Unit 1 · 1.4 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write the routing page for your own workplace (<b>50 words or more</b>). Use '
  + 'the frame — five or six rows, then the two notes.',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      meter: {
        label: 'words from this lesson',
        words: ['roles',
        'names',
        'together',
        'page',
        'date',
        'cannot',
        'used',
        'give']
      },
      coach: {
        title: 'What to include',
        task: 'Write the routing page for your own workplace (50 words or more). Use the '
  + 'frame — five or six rows, then the two notes.',
        criteria: [{ t: 'A routing page — a three-column table: what you have → where it '
              + 'goes, as a role → who that is today.' },
            { t: 'Put the role in the middle column and the name on the right. The '
              + 'reader reads left to right and stops as soon as they have what '
              + 'they need; the durable column is therefore the one they see '
              + 'first, and the perishable one is at the end where it can be '
              + 'crossed out and rewritten.' },
            { t: 'Include the row for "anything you are not sure about". It is the '
              + 'row that prevents the worst outcome, which is not a misrouted '
              + 'query but a query nobody sent at all.' },
            { t: '⚠ Keep routing and accountability apart, and say that you have. '
              + 'They change at different speeds — a routing page changes every '
              + 'holiday and an accountability page about once a year — and a '
              + 'sheet that mixes them is out of date as a whole the first time '
              + 'either moves.' }]
      },
      aiCheck: {
        task: 'Write the routing page for your own workplace (50 words or more). '
          + 'Use the frame — five or six rows, then the two notes.',
        grammar: 'Roles and names, together',
        must: ['A routing page — a three-column table: what you have → where it '
          + 'goes, as a role → who that is today.',
        'Put the role in the middle column and the name on the right. The '
          + 'reader reads left to right and stops as soon as they have what they '
          + 'need; the durable column is therefore the one they see first, and '
          + 'the perishable one is at the end where it can be crossed out and '
          + 'rewritten.',
        'Include the row for "anything you are not sure about". It is the row '
          + 'that prevents the worst outcome, which is not a misrouted query but '
          + 'a query nobody sent at all.',
        '⚠ Keep routing and accountability apart, and say that you have. They '
          + 'change at different speeds — a routing page changes every holiday '
          + 'and an accountability page about once a year — and a sheet that '
          + 'mixes them is out of date as a whole the first time either moves.'],
        vocab: ['roles',
        'names',
        'together',
        'page',
        'date',
        'cannot',
        'used',
        'give',
        'both',
        'role']
      }
    },
    {
      id: 'c11',
      kind: 'model',
      ref: '1.4.6P',
      bookRef: 'Unit 1 · 1.4 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Swap books. Ask one question: would this page still be usable if two of the '
  + 'people left? Tick ✓ or cross ✗.',
      passage: {
        title: 'From the book',
        html: '<h4>Band 3 feedback — quote the criterion, ask the question, '
          + 'stop</h4><p>"The box says put the role in the middle and the name on '
          + 'the right. Three of your middle cells are names — what is the job, '
          + 'if the person left?"</p><p>Quote, question, stop.</p><table '
          + 'class=\'bk\'><tr><th>Checklist</th><th>✓ / ✗</th></tr><tr><td>Roles '
          + 'in the middle column, names on the '
          + 'right</td><td>&nbsp;</td></tr><tr><td>A row for anything the reader '
          + 'is unsure about</td><td>&nbsp;</td></tr><tr><td>Third-person -s '
          + 'correct throughout</td><td>&nbsp;</td></tr><tr><td>Routing kept '
          + 'separate from accountability</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: 'Sample band 3 feedback: "The box says the role goes in the '
              + 'middle so the page lasts. Four of your six middle cells say the '
              + 'office, which is one person — is that a role or is it Rasha\'s '
              + 'name with a hat on?"',
            minWords: 6,
            rows: 3,
            hint: 'Point at one line and name one thing: a missing word, a number '
              + 'with no unit, a sentence worth copying. Alone, read your own '
              + 'work from yesterday and do exactly that to it.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Swap books. Ask one question: would this page still be usable if two '
          + 'of the people left? Tick ✓ or cross ✗.',
        grammar: 'Roles and names, together',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (1.4) '
          + 'teaches: Roles and names, together. Judge the language against THAT '
          + 'and against nothing the course has not taught yet.',
        must: ['A routing page — a three-column table: what you have → where it '
          + 'goes, as a role → who that is today.',
        'Put the role in the middle column and the name on the right. The '
          + 'reader reads left to right and stops as soon as they have what they '
          + 'need; the durable column is therefore the one they see first, and '
          + 'the perishable one is at the end where it can be crossed out and '
          + 'rewritten.',
        'Include the row for "anything you are not sure about". It is the row '
          + 'that prevents the worst outcome, which is not a misrouted query but '
          + 'a query nobody sent at all.',
        '⚠ Keep routing and accountability apart, and say that you have. They '
          + 'change at different speeds — a routing page changes every holiday '
          + 'and an accountability page about once a year — and a sheet that '
          + 'mixes them is out of date as a whole the first time either moves.'],
        vocab: ['roles',
        'names',
        'together',
        'page',
        'date',
        'cannot',
        'used',
        'give',
        'both',
        'role'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
      }
    },
    {
      id: 'c12',
      kind: 'own',
      ref: '1.4.6R',
      bookRef: 'Unit 1 · 1.4 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two or three students read their middle column only. The class says whether '
  + 'they could use the page with the names covered up.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      ideas: ['Roles and names, together',
      'Quote, question, stop'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Clear. I liked the times - I knew exactly when he starts and when he finishes.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Roles and names, together.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    },
    {
      id: 'c13',
      ref: '1.4.7',
      bookRef: 'Unit 1 · 1.4 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write about a time you were sent to the wrong person (<b>100 to 140 '
  + 'words</b>). Say what you wanted, how many people you were passed to, whether '
  + 'anybody apologised, and what the company thought you were being told.',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 10
        }],
      meter: {
        label: 'words from this lesson',
        words: ['roles',
        'names',
        'together',
        'page',
        'date',
        'cannot',
        'used',
        'give']
      },
      coach: {
        title: 'What to include',
        task: 'Write about a time you were sent to the wrong person (100 to 140 words). Say '
  + 'what you wanted, how many people you were passed to, whether anybody '
  + 'apologised, and what the company thought you were being told.',
        criteria: [{ t: 'A routing page — a three-column table: what you have → where it '
              + 'goes, as a role → who that is today.' },
            { t: 'Put the role in the middle column and the name on the right. The '
              + 'reader reads left to right and stops as soon as they have what '
              + 'they need; the durable column is therefore the one they see '
              + 'first, and the perishable one is at the end where it can be '
              + 'crossed out and rewritten.' },
            { t: 'Include the row for "anything you are not sure about". It is the '
              + 'row that prevents the worst outcome, which is not a misrouted '
              + 'query but a query nobody sent at all.' },
            { t: '⚠ Keep routing and accountability apart, and say that you have. '
              + 'They change at different speeds — a routing page changes every '
              + 'holiday and an accountability page about once a year — and a '
              + 'sheet that mixes them is out of date as a whole the first time '
              + 'either moves.' }]
      },
      aiCheck: {
        task: 'Write about a time you were sent to the wrong person (100 to 140 '
          + 'words). Say what you wanted, how many people you were passed to, '
          + 'whether anybody apologised, and what the company thought you were '
          + 'being told.',
        grammar: 'Roles and names, together',
        must: ['A routing page — a three-column table: what you have → where it '
          + 'goes, as a role → who that is today.',
        'Put the role in the middle column and the name on the right. The '
          + 'reader reads left to right and stops as soon as they have what they '
          + 'need; the durable column is therefore the one they see first, and '
          + 'the perishable one is at the end where it can be crossed out and '
          + 'rewritten.',
        'Include the row for "anything you are not sure about". It is the row '
          + 'that prevents the worst outcome, which is not a misrouted query but '
          + 'a query nobody sent at all.',
        '⚠ Keep routing and accountability apart, and say that you have. They '
          + 'change at different speeds — a routing page changes every holiday '
          + 'and an accountability page about once a year — and a sheet that '
          + 'mixes them is out of date as a whole the first time either moves.'],
        vocab: ['roles',
        'names',
        'together',
        'page',
        'date',
        'cannot',
        'used',
        'give',
        'both',
        'role']
      }
    },
    {
      id: 'c14',
      kind: 'model',
      ref: '1.4.7P',
      bookRef: 'Unit 1 · 1.4 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s text. Write on a slip: ★ the moment they gave up or got '
  + 'through ✓ roles used, not only names? ? was anybody rude, or only '
  + 'unorganised?',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: '★ "the pleasantness made it worse" ✓ roles as well as names. ? '
              + 'Did the fifth person have the job, or just the yard key?',
            minWords: 6,
            rows: 3,
            hint: 'The question in your own words first, then one specific thing in '
              + 'the answer. Alone, ask it of your own work and answer honestly.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s text. Write on a slip: — ★ the moment they gave '
          + 'up or got through — ✓ roles used, not only names? —? was anybody '
          + 'rude, or only unorganised? (The dashes are blanks the learner fills '
          + 'in with their own workplace. Judge what they wrote in them, not the '
          + 'blanks.)',
        grammar: 'Roles and names, together',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (1.4) teaches: Roles and names, together. Judge the language '
          + 'against THAT and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Roles and names, together.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['roles',
        'names',
        'together',
        'page',
        'date',
        'cannot',
        'used',
        'give',
        'both',
        'role'],
        example: ['You wrote that you check the shelves first. I asked: who reads the '
          + 'sheet after you? You said Abu Yasser reads it at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Roles and names, together.',
      'I asked a real question - one I did not already know the answer to.',
      'My question was about what they actually said, not about the topic.']
    },
    {
      id: 'c15',
      kind: 'own',
      ref: '1.4.7R',
      bookRef: 'Unit 1 · 1.4 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three texts. How many involved rudeness, and how many only '
  + 'disorganisation? The second is far commoner and reads to a customer exactly '
  + 'like the first.',
      passage: {
        title: 'Homework',
        html: '<p>Write your final text. Then write your workplace\'s routing page '
          + 'in roles only, cover the names, and ask a colleague to use it (50+ '
          + 'words).</p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2,
            hint: 'One word first - clear, useful, careful, brave - then the line '
              + 'that earned it. A reason with no line in it is a compliment, not '
              + 'feedback.'
          }],
      ideas: ['Roles and names, together',
      'Quote, question, stop'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Clear. I liked the times - I knew exactly when he starts and when he finishes.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: Roles and names, together.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    }
  ]
});
