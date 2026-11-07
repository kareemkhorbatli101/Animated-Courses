/* Unit 1 §10 — Audio 1.2, Samah asks Fadi about his work.

   The book's answer key for this dialogue's comprehension section reprints
   the four questions instead of answering them (see the ERRATA). Every
   answer below is therefore DERIVED from Fadi's own lines and the evidence
   names the line it came from, so a reader can check the derivation rather
   than trust it. tools/check-key.cjs fails the build if an answer is taken
   from a reprinting key entry. */
EAFM.page('u1-s10', {
  book: { source: 'EAFM B1', ref: 'Unit 1 · Audio 1.2', page: 1, section: '10',
          lesson: 'Part 3 · Listening', title: 'Audio 1.2 — Samah asks Fadi about his work' },
  objective: 'Follow a conversation about a daily routine, and hear the two tenses in use',
  prev: 's09-pronunciation', prevLabel: 'Pronunciation',
  next: 's11-dialogue-2', nextLabel: 'Audio 1.3',
  intro: '<b>Before you listen:</b> Samah, the new assistant, asks Fadi about his work. <b>While you listen:</b> What does Fadi do every day? What is he doing now?',
  cards: [
    {
      id: 'c1', covers: ['Audio 1.2', 'Part 3'], ref: '1.2', bookRef: 'Unit 1 · Audio 1.2', type: 'scene',
      title: 'Listen to the conversation',
      instruction: 'Play the whole conversation, or one line at a time. Use <b>loop</b> on a line and <b>0.6×</b> if you need it. English and Arabic subtitles are in the bar under the stage.',
      scene: 'u1-samah',
      after: '<b>Useful phrases:</b> every morning I… · first… then… after that… · right now I am… · every month I prepare… · at the moment I am…'
    },
    {
      id: 'c2', covers: ['Audio 1.2'], ref: 'A', bookRef: 'Unit 1 · Audio 1.2 · A', type: 'quizset',
      title: 'Listen and answer',
      instruction: 'Answer from what Fadi says. Each question points at the line that settles it — use <b>Look again</b> to hear it.',
      visual: { spot: 'finance-officer', caption: 'Everything here is decided by Fadi’s own lines, not by what a finance officer usually does.' },
      items: [
        {
          q: '1. What does Fadi do first every morning?',
          evidence: 'Fadi’s first answer: "First, I check the accounts."',
          jump: { scene: 'u1-samah', line: 2 },
          options: [
            { t: 'He checks the accounts.', ok: true,
              why: 'Right — "First, I check the accounts. Then I record the new transactions." The word <i>First</i> settles it, and <i>Then</i> tells you what does not come first.' },
            { t: 'He records the new transactions.', ok: false,
              why: 'Second, not first. Fadi says "Then I record the new transactions", and <i>then</i> always points back at something earlier.' },
            { t: 'He reconciles the cash.', ok: false,
              why: 'Third. It comes after Samah asks "And after that?", so it is two steps down the list.' },
            { t: 'He prepares a report.', ok: false,
              why: 'Not a morning task at all — he says "Every month, I prepare a report". Monthly, not daily.' }
          ]
        },
        {
          q: '2. What is Fadi doing right now?',
          evidence: 'Fadi’s answer to "What are you doing right now?"',
          jump: { scene: 'u1-samah', line: 6 },
          options: [
            { t: 'He is reconciling the cash.', ok: false,
              why: 'That is part of his routine, which he describes in the present simple. The question asks about this moment, and the answer to that is in the continuous.' },
            { t: 'He is checking the bank balance.', ok: true,
              why: 'Right — "Right now, I am checking the bank balance. The numbers must agree." Both the time word and the tense point the same way.' },
            { t: 'He is preparing a report for the donors.', ok: false,
              why: 'Monthly, not now. Watch for an answer that is true about Fadi but untrue about this moment.' },
            { t: 'He is training Samah.', ok: false,
              why: 'Tempting, because he does say "At the moment, I am also training you!" — but that comes later, and the word <i>also</i> marks it as a second thing, not the answer to this question.' }
          ]
        },
        {
          q: '3. How often does Fadi prepare a report?',
          evidence: 'Fadi’s answer to "Do you prepare reports too?"',
          jump: { scene: 'u1-samah', line: 8 },
          options: [
            { t: 'Every day.', ok: false,
              why: 'Nothing in the conversation says daily. The daily work is checking, recording and reconciling.' },
            { t: 'Every week.', ok: false,
              why: 'Weekly appears nowhere in this dialogue. (Fadi does update Layth’s budget every week, but that is Audio 1.5, and it is not a report.)' },
            { t: 'Every month.', ok: true,
              why: 'Right — "Every month, I prepare a report for the managers and the donors." Notice that the frequency phrase comes first in the sentence, which is where English usually puts it.' },
            { t: 'Only when a donor asks.', ok: false,
              why: 'The report is a routine, not a response. That is exactly why Fadi uses the present simple to describe it.' }
          ]
        },
        {
          q: '4. Why does Fadi enjoy the work, even though it is a lot?',
          evidence: 'Fadi’s last two lines, and the sentence he ends on.',
          jump: { scene: 'u1-samah', line: 12 },
          options: [
            { t: 'Because the work is easy.', ok: false,
              why: 'The opposite — Samah has just said "That is a lot of work", and Fadi agrees: "It is, but…". The <i>but</i> means the enjoyment survives the difficulty rather than replacing it.' },
            { t: 'Because he works alone.', ok: false,
              why: 'He ends on exactly the opposite idea: "A good finance team helps each other."' },
            { t: 'Because he is also teaching Samah, and a good team helps each other.', ok: true,
              why: 'Right. He gives the reason in two steps: "At the moment, I am also training you!" and then "A good finance team helps each other." The second line is what turns the first from a task into a reason.' },
            { t: 'Because he prepares reports for the donors.', ok: false,
              why: 'That is one of the tasks that makes it "a lot of work" — part of the problem in Samah’s sentence, not part of the answer to it.' }
          ]
        }
      ]
    },
    {
      id: 'c3', covers: ['Audio 1.2'], ref: 'B', bookRef: 'Unit 1 · Audio 1.2 · B', type: 'quizset',
      title: 'Listen again — true or false?',
      instruction: 'Write T (true) or F (false). The first one is done for you.',
      visual: { spot: 'balance', caption: 'Two of these four turn on a frequency word. Find it before you decide.' },
      worked: {
        q: '0. Fadi checks the accounts first every morning.',
        a: 'True',
        why: 'Done for you. "First, I check the accounts" — and Samah’s question was "what do you do every morning?", so both halves of the statement are in the exchange.'
      },
      items: [
        {
          q: '1. Fadi prepares a report every day.',
          evidence: '"Every month, I prepare a report for the managers and the donors."',
          jump: { scene: 'u1-samah', line: 8 },
          options: [
            { t: 'True', ok: false,
              why: 'He does prepare reports — but the statement changes <i>every month</i> to <i>every day</i>. A single frequency word carries the whole truth of the sentence.' },
            { t: 'False', ok: true,
              why: 'Right. Monthly, not daily: "Every month, I prepare a report…". This is the commonest shape of a false statement — a true sentence with one word swapped.' }
          ]
        },
        {
          q: '2. Right now, Fadi is checking the bank balance.',
          evidence: '"Right now, I am checking the bank balance."',
          jump: { scene: 'u1-samah', line: 6 },
          options: [
            { t: 'True', ok: true,
              why: 'Right — word for word what Fadi says, tense and all.' },
            { t: 'False', ok: false,
              why: 'Check it against the line: both the time ("Right now") and the action ("checking the bank balance") match exactly.' }
          ]
        },
        {
          q: '3. Fadi is not training anyone at the moment.',
          evidence: '"At the moment, I am also training you!"',
          jump: { scene: 'u1-samah', line: 10 },
          options: [
            { t: 'True', ok: false,
              why: 'He is training Samah, and says so in the same words the statement uses: "At the moment, I am also training you!" A negative statement is false whenever the positive is on the page.' },
            { t: 'False', ok: true,
              why: 'Right. Samah confirms it in the next line too — "And I am learning a lot" — so the dialogue says it twice, from both sides.' }
          ]
        }
      ]
    }
  ]
});
