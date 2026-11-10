/* Unit 1 §13 — Part 5, Reading A: A Day in Fadi's Office. */
EAFM.page('u1-s13', {
  book: { source: 'EAFM B1', ref: 'Unit 1 · Part 5 · Reading A', page: 1, section: '13',
          lesson: 'Part 5 · Reading', title: 'Reading A — a day in Fadi’s office' },
  objective: 'Follow a whole working day, and find the proof for each answer',
  prev: 's12-speaking', prevLabel: 'Speaking',
  next: 's14-reading-b', nextLabel: 'Reading B',
  intro: '<b>Before you read:</b> What do you think a finance officer does in a normal day?',
  cards: [
    {
      id: 'c1', covers: ['Part 5'], ref: '5A', bookRef: 'Unit 1 · Reading A', type: 'quizset',
      title: 'Read, then answer',
      instruction: 'Read the whole text. You can listen to it, hear one sentence at a time, or watch it as a scene. The first question is done for you.',
      passage: {
        style: 'article',
        title: 'A Day in Fadi’s Office',
        listenLabel: 'Listen to the whole reading',
        say: { scene: 'u1-reading-a', who: 'narr' },
        watch: { scene: 'u1-reading-a', label: 'Watch it as a scene',
          title: 'A Day in Fadi’s Office', lead: 'Subtitles in English and Arabic are under the stage.' },
        paras: [
          'Fadi Haddad works as a finance officer. He works for Horizon Relief International, a large aid organisation. Its main office is in Geneva, but Fadi works in the Damascus office. He helps to manage the money for many projects in Syria. Fadi loves numbers, and he loves order. Every morning, he opens his computer and checks the accounts. He looks at the cash and the bank balance. Then he starts his real work.',
          'First, Fadi records the new transactions. He writes down every payment and every receipt. He puts each one in the correct account. We call this careful work bookkeeping. Next, Fadi reconciles the cash. He counts the money in the cash box. Then he compares it with the record in his ledger. The two numbers must agree. If they do not agree, Fadi looks for the mistake. He is very patient, and he checks every entry.',
          'In the afternoon, Fadi often prepares a small report. He shows the managers how much money the project spends. Sometimes he also helps to plan the budget for next month. Fadi does many different tasks, but they all connect. Together, they form one job: financial management. In Arabic, people call this job idara maliya. It is much more than simple accounting.',
          'Fadi enjoys his work, because the work matters. Good records help the whole team. They also help the donors to trust the organisation. Fadi feels proud of this quiet, important role. At the moment, Fadi is training a new assistant. Her name is Samah, and she is learning fast. Fadi shows her the cash box every day. He teaches her how to write a clear entry. Samah watches, and she asks many good questions. Fadi enjoys this part of the job too. A good finance officer helps other people to learn. Every month, the team grows a little stronger. Fadi likes this idea very much.'
        ]
      },
      worked: {
        q: '0. Which organisation does Fadi work for?',
        a: 'Horizon Relief International',
        why: 'The second sentence names it. Notice that the next sentence adds Geneva and Damascus — useful, but not what was asked. A good short answer stops where the question stops.'
      },
      items: [
        {
          q: '1. What does Fadi do first, every morning?',
          evidence: 'the sentence beginning "Every morning, he opens his computer…".',
          jump: { scene: 'u1-reading-a', line: 3 },
          options: [
            { t: 'He opens his computer and checks the accounts.', ok: true,
              why: 'Right — "Every morning, he opens his computer and checks the accounts. He looks at the cash and the bank balance." The paragraph then says "Then he starts his real work", which marks everything before it as the opening routine.' },
            { t: 'He records the new transactions.', ok: false,
              why: 'That is the <i>real work</i>, and the text separates the two deliberately: "Then he starts his real work. First, Fadi records the new transactions." Checking comes before it.' },
            { t: 'He counts the money in the cash box.', ok: false,
              why: 'That belongs to reconciling, which the text marks with "Next". Two steps later.' },
            { t: 'He prepares a small report.', ok: false,
              why: 'An afternoon task — "In the afternoon, Fadi often prepares a small report."' }
          ]
        },
        {
          q: '2. What happens when the two cash numbers do not agree?',
          evidence: 'the sentence beginning "If they do not agree…".',
          jump: { scene: 'u1-reading-a', line: 9 },
          options: [
            { t: 'He writes the difference into the report.', ok: false,
              why: 'Nothing in the text lets a difference through into a report. Part 9 Case 2 is built on exactly the opposite instinct.' },
            { t: 'He looks for the mistake, and checks every entry.', ok: true,
              why: 'Right — "If they do not agree, Fadi looks for the mistake. He is very patient, and he checks every entry." Both halves matter: he searches, and he searches exhaustively.' },
            { t: 'He asks Samah to count the cash again.', ok: false,
              why: 'Samah is learning from him, but the text never has him hand the problem over.' },
            { t: 'He accepts the difference if it is small.', ok: false,
              why: 'The text says he is "very patient" and checks <i>every</i> entry — no size threshold anywhere. Case 2 in Part 9 asks you to defend this.' }
          ]
        },
        {
          q: '3. What does Fadi often prepare in the afternoon?',
          evidence: 'the sentence beginning "In the afternoon…".',
          jump: { scene: 'u1-reading-a', line: 10 },
          options: [
            { t: 'A small report for the managers.', ok: true,
              why: 'Right — "In the afternoon, Fadi often prepares a small report. He shows the managers how much money the project spends." The second sentence tells you who it is for.' },
            { t: 'The budget for next month.', ok: false,
              why: 'Close, and in the same paragraph — but the text marks it as occasional and secondary: "Sometimes he also helps to plan the budget". <i>Often</i> and <i>sometimes</i> are doing different jobs.' },
            { t: 'The cash box.', ok: false,
              why: 'Reconciling the cash happens before the afternoon, in the "real work" paragraph.' },
            { t: 'A report for the auditors.', ok: false,
              why: 'Auditors are named in Part 11 as users of information, but they appear nowhere in Reading A.' }
          ]
        },
        {
          q: '4. Why does Fadi feel proud of his role? (inference)',
          evidence: 'the three sentences beginning "Fadi enjoys his work, because…".',
          jump: { scene: 'u1-reading-a', line: 13 },
          options: [
            { t: 'Because he works faster than anybody else.', ok: false,
              why: 'Speed is never claimed. The quality the text names is patience: "He is very patient".' },
            { t: 'Because his records help the team and let the donors trust the organisation.', ok: true,
              why: 'Right. The text gives the reason in two steps: "Good records help the whole team. They also help the donors to trust the organisation." Pride follows the usefulness, not the job title.' },
            { t: 'Because the job is quiet.', ok: false,
              why: 'The text does call the role "quiet", but that describes it rather than explains the pride. An adjective beside the right sentence is the commonest way to get an inference question nearly right.' },
            { t: 'Because he is training a new assistant.', ok: false,
              why: 'He does enjoy that — "Fadi enjoys this part of the job too" — but <i>too</i> marks it as an addition, after the reason has already been given.' }
          ]
        }
      ]
    },
    {
      id: 'c2', covers: ['RA1', 'RA2', 'RA3'], ref: '5A-B', bookRef: 'Unit 1 · Reading A · B', type: 'quizset',
      title: 'Choose the best answer',
      instruction: 'Three questions, four options each.',
      visual: { spot: 'bookkeeping', caption: '"We call this careful work bookkeeping."' },
      items: [
        {
          q: 'RA1. Fadi works as a…',
          evidence: 'the first sentence of the reading.',
          options: [
            { t: 'finance officer', ok: true,
              why: 'Right — the opening sentence: "Fadi Haddad works as a finance officer."' },
            { t: 'truck driver', ok: false,
              why: 'Karim drives, and you meet him in Unit 2. He brings Fadi a receipt; he does not do Fadi’s job.' },
            { t: 'school teacher', ok: false,
              why: 'He does teach Samah — "He teaches her how to write a clear entry" — but teaching a colleague is not a teacher’s job.' },
            { t: 'project manager', ok: false,
              why: 'That is Layth. Reading B keeps the two roles carefully apart: the managers spend, Fadi records.' }
          ]
        },
        {
          q: 'RA2. Every morning, Fadi first…',
          evidence: 'the sentence beginning "Every morning…".',
          options: [
            { t: 'goes home early', ok: false,
              why: 'Nothing like it. The text has him arriving and opening his computer.' },
            { t: 'calls his family', ok: false,
              why: 'His family is never mentioned anywhere in the unit.' },
            { t: 'checks the accounts', ok: true,
              why: 'Right — "Every morning, he opens his computer and checks the accounts." Same answer as question 1, asked the other way round.' },
            { t: 'cleans the office', ok: false,
              why: 'He "loves order", which is about the records rather than the room — an adjective borrowed from the right sentence into a wrong answer.' }
          ]
        },
        {
          q: 'RA3. Fadi’s many tasks form one job called…',
          evidence: 'the sentence beginning "Together, they form one job…".',
          options: [
            { t: 'simple shopping', ok: false,
              why: 'Not a job named anywhere, and the text says the work is "much more than simple accounting".' },
            { t: 'financial management', ok: true,
              why: 'Right — "Together, they form one job: financial management." The colon is doing the naming.' },
            { t: 'office cleaning', ok: false,
              why: 'Never mentioned.' },
            { t: 'staff training', ok: false,
              why: 'He does train Samah, but that is one task inside the job, not the name of all of them.' }
          ]
        }
      ]
    }
  ]
});
