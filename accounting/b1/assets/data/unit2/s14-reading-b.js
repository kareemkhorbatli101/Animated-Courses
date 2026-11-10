/* Unit 2 §14 — Part 5, Reading B: The Journey of One Transaction.

   The matching exercise here reuses words from Part 1 plus three new ones
   and leaves one meaning spare. Chips are meanings, targets are words, for
   the same reason as §3. */
EAFM.page('u2-s14', {
  book: { source: 'EAFM B1', ref: 'Unit 2 · Part 5 · Reading B', page: 2, section: '14',
          lesson: 'Part 5 · Reading', title: 'Reading B — the journey of one transaction' },
  objective: 'Follow one payment from a petrol station to the ledger',
  prev: 's13-reading-a', prevLabel: 'Reading A',
  next: 's15-figure', nextLabel: 'Figure 2.1',
  intro: '<b>Before you read:</b> What happens to a receipt after someone buys something for the office?',
  cards: [
    {
      id: 'c1', covers: ['Part 5'], ref: '5B',
      bookRef: 'Unit 2 · Reading B', type: 'quizset',
      title: 'Read, then answer',
      instruction: 'One payment, followed all the way through. Read for the order of the steps. The first question is done for you.',
      passage: {
        style: 'article',
        title: 'The Journey of One Transaction',
        listenLabel: 'Listen to the whole reading',
        say: { scene: 'u2-reading-b', who: 'narr' },
        watch: { scene: 'u2-reading-b', label: 'Watch it as a scene',
          title: 'The Journey of One Transaction',
          lead: 'Subtitles in English and Arabic are under the stage.' },
        paras: [
          'A single transaction tells a small but complete story. Last Tuesday, a driver named Karim needed fuel for the office car. He drove to the station, and he filled the tank. He paid eighty dollars in cash. The seller gave him a receipt, and Karim kept it safely. This receipt was very important. It proved that the payment really happened.',
          'The next morning, Karim brought the receipt to the finance office. He handed it to Fadi. First, Fadi looked at the receipt with care. He checked the date, the amount, and the reason for the payment. Everything looked correct, so he accepted it. Then he asked Karim for the voucher. The voucher showed that a manager approved the expense.',
          'With both papers in hand, Fadi started the record. He opened the journal, and he wrote a new entry. He debited the fuel account eighty dollars. Then he credited the cash account eighty dollars. The two sides were equal, as they always are. After the journal, Fadi did the posting. He moved the entry to the ledger. He updated the fuel account, and he updated the cash account.',
          "Now the whole system knew about Karim's small payment. Later, at the month-end, this entry joined two hundred others. Together, they formed the honest story of the month. Fadi enjoyed this quiet, careful work. One small receipt became one clear entry, and one clear entry protected the truth. Because of this discipline, the organisation always knew exactly where its money went.",
          'Fadi remembered his first month in the job. Back then, he worked slowly and he made small mistakes. His manager showed him patience, and he taught him the correct method. Over time, Fadi grew faster and more accurate. Now he recorded a simple entry in a few minutes. But he never rushed the important checks. He knew that one careless entry could hide a real problem.'
        ]
      },
      worked: {
        q: '0. What did Karim buy for the office car?',
        a: 'fuel',
        why: 'The second sentence: "a driver named Karim needed fuel for the office car". One word is the whole answer.'
      },
      items: [
        {
          q: '1. Why was the receipt very important?',
          evidence: 'the sentence beginning "It proved…".',
          jump: { scene: 'u2-reading-b', line: 4 },
          options: [
            { t: 'Because it proved that the payment really happened.', ok: true,
              why: 'Right — "This receipt was very important. It proved that the payment really happened." The text puts the claim and its reason in consecutive sentences.' },
            { t: 'Because it showed that a manager approved the expense.', ok: false,
              why: 'That is the <b>voucher</b>, two sentences later. This is the pair the whole unit keeps separating: the receipt proves the money moved, the voucher proves it was allowed.' },
            { t: 'Because it was worth eighty dollars.', ok: false,
              why: 'A receipt records a value; it does not have one. The eighty dollars went to the seller.' },
            { t: 'Because Karim kept it safely.', ok: false,
              why: 'He did — but that is what he did with it, not why it mattered. The text answers "why" in its own next sentence.' }
          ]
        },
        {
          q: '2. What did the voucher show?',
          evidence: 'the last sentence of the second paragraph.',
          jump: { scene: 'u2-reading-b', line: 7 },
          options: [
            { t: 'That the payment really happened.', ok: false,
              why: 'That is the receipt’s job. Swapping the two papers is the commonest error in this reading.' },
            { t: 'That a manager approved the expense.', ok: true,
              why: 'Right — "The voucher showed that a manager approved the expense." Audio 2.3 says it in almost the same words, so the point is made twice in the unit.' },
            { t: 'The date, the amount, and the reason.', ok: false,
              why: 'Those are what Fadi checked on the <i>receipt</i>, in the sentence before.' },
            { t: 'That the two sides were equal.', ok: false,
              why: 'That is the entry Fadi writes afterwards, and he is the one who makes it true.' }
          ]
        },
        {
          q: '3. What two accounts did Fadi update in the ledger?',
          evidence: 'the last sentence of the third paragraph.',
          jump: { scene: 'u2-reading-b', line: 11 },
          options: [
            { t: 'The journal and the ledger.', ok: false,
              why: 'Those are books, not accounts. The posting moves an entry between them; the accounts are inside the ledger.' },
            { t: 'The fuel account and the cash account.', ok: true,
              why: 'Right — "He updated the fuel account, and he updated the cash account." Both, because the entry had two sides: fuel was debited and cash was credited.' },
            { t: 'The income account and the expense account.', ok: false,
              why: 'Those are categories the statement uses. The entry itself names two specific accounts.' },
            { t: 'Only the fuel account.', ok: false,
              why: 'An entry always touches two. Updating one side and not the other is how a ledger stops balancing.' }
          ]
        },
        {
          q: "4. Why does the writer call this 'the honest story of the month'? (inference)",
          evidence: 'the sentences about the entry joining two hundred others, and about discipline.',
          jump: { scene: 'u2-reading-b', line: 13 },
          options: [
            { t: 'Because Fadi enjoys the work.', ok: false,
              why: 'He does — "Fadi enjoyed this quiet, careful work" — but his enjoyment is not what makes the record honest.' },
            { t: 'Because every entry records a real event, so together they show exactly where the money went.', ok: true,
              why: 'Right. The text builds it: each receipt proves a real payment, each payment becomes one clear entry, the entries join two hundred others, and "because of this discipline, the organisation always knew exactly where its money went."' },
            { t: 'Because the month had two hundred entries.', ok: false,
              why: 'The number is the size of the story, not its honesty. Two hundred careless entries would not be honest at all.' },
            { t: 'Because Karim kept his receipt.', ok: false,
              why: 'One receipt is one piece of the proof. The word <i>story</i> is about all of them together.' }
          ]
        }
      ]
    },
    {
      id: 'c2', covers: ['Part 5'], ref: '5B-B',
      bookRef: 'Unit 2 · Reading B · B', type: 'quizset',
      title: 'True or false?',
      instruction: 'The first one is done for you.',
      visual: { spot: 'posting', caption: '"He moved the entry to the ledger."' },
      worked: {
        q: '0. Karim paid for the fuel in cash.',
        a: 'True',
        why: '"He paid eighty dollars in cash." It matters later: because he paid in cash, the entry credits the cash account rather than the bank.'
      },
      items: [
        {
          q: '1. Fadi accepted the receipt without checking it.',
          evidence: 'the sentences beginning "First, Fadi looked at the receipt with care…".',
          jump: { scene: 'u2-reading-b', line: 5 },
          options: [
            { t: 'True', ok: false,
              why: 'He checked three things before accepting it: the date, the amount and the reason. The text even says the order — "Everything looked correct, so he accepted it."' },
            { t: 'False', ok: true,
              why: 'Right. The acceptance came <i>after</i> the check, and the word <i>so</i> marks the sequence.' }
          ]
        },
        {
          q: '2. Fadi debited the fuel account and credited the cash account.',
          evidence: 'the two sentences beginning "He debited the fuel account…".',
          jump: { scene: 'u2-reading-b', line: 9 },
          options: [
            { t: 'True', ok: true,
              why: 'Right — "He debited the fuel account eighty dollars. Then he credited the cash account eighty dollars." Audio 2.3 says the same thing in one line.' },
            { t: 'False', ok: false,
              why: 'Check the order of the two account names against the text — fuel is debited, cash is credited, and the statement has them that way round.' }
          ]
        },
        {
          q: "3. Karim's entry stayed only in the journal, and never reached the ledger.",
          evidence: 'the sentences beginning "After the journal, Fadi did the posting…".',
          jump: { scene: 'u2-reading-b', line: 10 },
          options: [
            { t: 'True', ok: false,
              why: 'The posting is exactly the step that moves it: "He moved the entry to the ledger." A <i>never</i> in a statement is almost always worth checking.' },
            { t: 'False', ok: true,
              why: 'Right — it reached the ledger and updated two accounts there. The whole point of the reading is that the journey does not stop at the journal.' }
          ]
        }
      ]
    },
    {
      id: 'c3', covers: ['Part 5'], ref: '5B-C',
      bookRef: 'Unit 2 · Reading B · C', type: 'dragmatch',
      title: 'Match the words with their meanings',
      instruction: 'Match the words (1–5) with their meanings (a–f). <b>One meaning is extra.</b> The first one is done for you.',
      poolLabel: 'Click a meaning, then click the word it belongs to — or drag it there. One meaning is left over.',
      cols: 2,
      worked: {
        q: '0. (shown in the book as the example)',
        a: 'the pattern below',
        why: 'The book marks this exercise "0. is done for you". The five pairs below are the ones you place; the spare meaning is there to be left alone.'
      },
      chips: [
        { id: 'y-a', label: 'a) an entry on the left side of an account' },
        { id: 'y-b', label: 'b) the first book where we write each transaction' },
        { id: 'y-c', label: 'c) moving an entry from the journal to the ledger' },
        { id: 'y-d', label: 'd) a short report that shows the totals of the money' },
        { id: 'y-e', label: 'e) a paper that proves a payment took place' },
        { id: 'y-f', label: 'f) an entry on the right side of an account' }
      ],
      whyTitle: 'The five, and the one that is spare',
      targets: [
        { id: 'z1', num: 1, label: 'journal', accept: 'y-b',
          why: '<b>First.</b> Everything in this reading starts there — "He opened the journal, and he wrote a new entry."' },
        { id: 'z2', num: 2, label: 'debit', accept: 'y-a',
          why: '<b>Left.</b> A position in an account, nothing more. Fadi debits fuel because the fuel account is the one that grows.' },
        { id: 'z3', num: 3, label: 'receipt', accept: 'y-e',
          why: '<b>Proves.</b> It is the only one of the five that comes from outside the organisation — the seller gave it to Karim.' },
        { id: 'z4', num: 4, label: 'posting', accept: 'y-c',
          why: 'The only one that is an <b>action</b>, and the only one with two books in its definition. "After the journal, Fadi did the posting."' },
        { id: 'z5', num: 5, label: 'statement', accept: 'y-d',
          why: '<b>Totals.</b> A statement does not list the entries; it adds them up. Reading A shows what it displayed: the total income and the total expense.' }
      ],
      notes: [{ title: 'The spare meaning',
        body: '(f) "an entry on the right side of an account" is a <b>credit</b>, which you matched in §3. It is left over on purpose: debit and credit are defined by the same sentence with one word changed, so the only way to keep them apart is to remember which side each one names.' }]
    }
  ]
});
