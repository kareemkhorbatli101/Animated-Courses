/* Unit 4 — the acted dialogues. Every line is the book's own. */
PBE5.scene('u4-4-1', {
  set: 'interview',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The form for the chamber of commerce. It asks what I have done.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Read me the first line.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '"I have run the office administration."' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'How many sites, how long, and how many people?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Two sites, since June, and nineteen people.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Then write that. I have run the administration for two sites and '
            + 'nineteen staff since June. Thirteen words, and every one of them '
            + 'can be checked.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The next line says "I have dealt with suppliers."' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Everybody has dealt with suppliers. How many, and what did you do with them?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Four regular ones. I have opened two accounts and renegotiated one price.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Now that is a record. The word renegotiated is doing work and '
            + 'nobody can say it of themselves without having done it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And I have taken out the line about the Homs store.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Why?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Because I did the paperwork for closing it and that is not an achievement.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: 'Put it back. I have closed a branch is a rarer line than I have '
            + 'opened one and a great deal harder, and the person reading that '
            + 'form will know it. ⚠ What you must not write is that you decided '
            + 'to close it, because you did not, I did.' }
  ]
});

PBE5.scene('u4-4-1-pair', {
  set: 'interview',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The form asks what I have done. "I have driven for the company."' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'How many years, how many vehicles, and how many drops?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Nine years, two vehicles, about a hundred and eighty drops a month.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then write that. And what has never happened in nine years?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…I have never had a claim.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'That is the line. Nine years, no claim. What have you taken out?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That I trained two of the drivers. It is not really driving.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Put it back. Anybody can drive; the company has two drivers because of you.' }
  ]
});

PBE5.scene('u4-4-2', {
  set: 'interview',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' },
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'For the report: "I have moved the stock records onto the system."' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Have you? All of them?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Three store rooms of four.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Then you have not moved them; you have been moving them. There is '
            + 'a world between those two sentences and the world is the fourth '
            + 'store room.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It sounds less impressive.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'It sounds accurate, and it tells Mr Ayoub something the other '
            + 'sentence does not — that there is work in progress and it has a '
            + 'shape. I have been moving the stock records onto the system; three '
            + 'store rooms of four are done and the fourth is the wrap room, '
            + 'which is the biggest. He now knows where you are and what is left.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the procedures? I have written four one-page procedures and I '
            + 'am going to write more.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Those are finished things, so the simple: I have written four '
            + 'one-page procedures. The continuous is for the thing that is still '
            + 'running, not for the thing you intend to do more of.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So I have been writing procedures would be wrong?' },
    { who: 'nadia', cam: { shot: 'close' },
      en: 'Not wrong, and riskier. It makes the whole of it sound unfinished, '
            + 'including the four that are done and on the wall. ⚠ Use the '
            + 'continuous where the unfinishedness is the information. Where it '
            + 'is not, it only loses you four finished procedures.' }
  ]
});

PBE5.scene('u4-4-2-pair', {
  set: 'interview',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'For the report: "I have trained Hala on the stock screen."' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Have you? Everything?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Two sessions. She can enter and she cannot correct.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then you have not trained her; you have been training her. And what is left?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Corrections, and the quarter-end, which is the only part that is difficult.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then say that. I have been training Hala; she can enter and not '
            + 'correct, and the quarter-end has not been tried.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It sounds less impressive.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'It sounds accurate, and it tells him not to put her on the '
            + 'quarter-end in December.' }
  ]
});

PBE5.scene('u4-4-3', {
  set: 'interview',
  arr: 2,
  cast: {
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'bassel', cam: { shot: 'wide' },
      en: 'The letter to Ms Shamsi about the new price. What do I lead with?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What is the strongest thing we have?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'That we are right about the market?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Everybody says that. What is the strongest fact?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '…We have bought from her for eleven years.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Eleven years, since 2014, and never once late with a payment. That '
            + 'is the letter.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Is it not a little obvious?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is obvious to us and it is not written down anywhere she can '
            + 'see. She has four hundred customers; she does not know which of '
            + 'them have been with her for eleven years unless somebody tells '
            + 'her.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'And the payments?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is the part that makes the eleven years mean something. A '
            + 'span on its own only says we have not left. Eleven years and never '
            + 'a late payment says what kind of eleven years they were. ⚠ And it '
            + 'is checkable — she has the ledger.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'She might check it.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'I hope she does. We have been paying her on time for eleven years '
            + 'and the only risk in that sentence is that it is not true, and it '
            + 'is.' }
  ]
});

PBE5.scene('u4-4-3-pair', {
  set: 'interview',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The letter to the bank about the limit. What do I lead with?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'What is the strongest thing we have?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The second store and the growth?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Every applicant has growth. What is the strongest fact?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…The account has been at that branch since 1998.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Twenty-eight years, and never once overdrawn. That is the letter.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'They must know that.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'The branch has thousands of accounts and the officer is new. '
            + 'Nobody knows it unless we write it, and they can check it in four '
            + 'minutes.' }
  ]
});

PBE5.scene('u4-4-4', {
  set: 'interview',
  arr: 0,
  cast: {
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'hala', cam: { shot: 'wide' },
      en: 'Third time asking for the credit form. I have written "You still '
            + 'have not sent the credit form."' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'True, and it will cost us a week. Change the subject of the sentence.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'From him to…?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'To us, or to the form. We have not received the credit form or the '
            + 'credit form has not reached us. Nobody is accused and the fact is '
            + 'identical.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'It is a bit weak for a third time.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The strength does not come from blaming him. It comes from the '
            + 'record. Put the dates in: we asked on the 12th and again on the '
            + '19th; as at today, the 26th, we have not received it.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'That is quite hard, actually.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is hard and it is not rude, and that is the whole trick of a '
            + 'third chaser. Three dates on a page say everything you still have '
            + 'not sent it says, and they say it in a form he can forward to his '
            + 'own manager without being embarrassed.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'And if there is a fourth time?' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Then the fourth one goes to somebody else, and it says I have '
            + 'written three times and I am now writing to you, which I would '
            + 'rather not have had to do. ⚠ But never in the same breath as the '
            + 'chase itself — a chaser that threatens is answered by a defence '
            + 'and not by a form.' }
  ]
});

PBE5.scene('u4-4-4-pair', {
  set: 'interview',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Third time about the 640,000. I have written "You have not paid us."' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'True, and it will cost us a month. Change the subject of the sentence.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'To the money?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'To the payment. Payment has not reached us. Then the record: '
            + 'invoiced 2 August, reminded 1 September, reminded 1 October, and '
            + 'as at today, the 14th.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That is harder than what I wrote.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Much harder, and it can be forwarded to his accountant without '
            + 'embarrassing him, which is how it will actually get paid.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And if there is a fourth?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'The fourth goes to somebody else and says so plainly — ⚠ but not '
            + 'in this one.' }
  ]
});

PBE5.scene('u4-4-5', {
  set: 'interview',
  arr: 1,
  cast: {
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'bassel', cam: { shot: 'wide' },
      en: 'We have opened eleven new accounts so far this year.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'So far against what, and with how long left?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Against twenty for the year. Two and a half months left.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Then the sentence is eleven of twenty, with ten weeks left, and I '
            + 'can do the arithmetic myself — which is that we will not get to '
            + 'twenty.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'We might.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'We might, and the number says we probably will not, and I would '
            + 'rather know that in October than in December. What have you not '
            + 'done yet that would change it?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'I have not been to Homs since August.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'That is a better sentence than the eleven. I have not been to Homs '
            + 'since August tells me exactly what to decide.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'I was going to say we are a bit behind.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Never say that to me. A bit behind can be anything from one '
            + 'account to nine, and the person who says it is asking me to not '
            + 'ask. Eleven of twenty with ten weeks left is a worse position and '
            + 'a better sentence.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'And if the number is embarrassing?' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: 'Then it is embarrassing in October, which is cheap, instead of in '
            + 'December, which is not.' }
  ]
});

PBE5.scene('u4-4-5-pair', {
  set: 'interview',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Collections are going quite well.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So far against what, and with how long left?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '2.1 million of 3.4. Six weeks.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then the sentence is 2.1 of 3.4, with six weeks left, and I can '
            + 'see we will not get there.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'We might.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'What have you not done yet that would change it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I have not telephoned the four largest since September.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'That is a better sentence than the 2.1, and it is the only one on '
            + 'this page I can act on.' }
  ]
});

PBE5.scene('u4-4-6', {
  set: 'interview',
  arr: 2,
  cast: {
    customer: { rig: 'f-30s-a', name: 'Customer', voice: 'en-GB-SoniaNeural', shirt: '#4f7fa8', shirt2: '#3f6686',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'customer', cam: { shot: 'wide' },
      en: 'Have you ever handled a letter of credit?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'No. I have never seen one.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'Thank you. Have you handled customs documents?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Twice, both last year, both with our broker sitting beside me. I '
            + 'could not do one alone and I know what the four documents are '
            + 'called.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'And a contract longer than a year?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'No. The longest we have ever signed ran to four pages and one '
            + 'year. But I have written nine one-page procedures this year, and a '
            + 'contract is a procedure that somebody can sue you over, so I am '
            + 'not frightened of the reading.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'That is a good answer and it is the third thing you have told me '
            + 'you cannot do.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Would you rather I had said yes?' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'Two of the four people I have seen this week said yes to the '
            + 'letter of credit. One of them had seen one. I did not ask him '
            + 'which bank, because by then it did not matter.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'How would you have known?' },
    { who: 'customer', cam: { shot: 'close' },
      en: 'I would have asked what the beneficiary does if the dates on the '
            + 'documents do not match, and he would have talked about '
            + 'communication. ⚠ Everybody who has really done one has a story '
            + 'about a date on a bill of lading, and nobody who has not can '
            + 'invent it.' }
  ]
});

PBE5.scene('u4-4-6-pair', {
  set: 'interview',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Have you ever dismissed anybody?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'No. I have never done it and I would not want to pretend otherwise.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Have you handled a disciplinary?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Once, two years ago, and Mr Ayoub was in the room. I wrote the '
            + 'note afterwards and he signed it. I could not run one alone and I '
            + 'know what the note has to contain.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And a budget?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'No. I have never been given one. But I have costed two changes '
            + 'this year to the nearest ten thousand and both came in within it, '
            + 'and a budget is costing with a year attached.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That is three things you cannot do.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Would you rather I had said yes to the first one?' }
  ]
});

PBE5.scene('u4-4-7', {
  set: 'interview',
  arr: 0,
  cast: {
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'bassel', cam: { shot: 'wide' },
      en: 'The other distributor\'s capability statement. It is four pages '
            + 'and it is very good.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Read me a line.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '"A leading supplier of packaging solutions with extensive '
            + 'experience across the Syrian market."' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'How many customers, since when, and how many staff?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'It does not say.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Four pages and it does not say. Find me a line with a number in it.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '"Our team has grown to eleven."' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Eleven. And we are nineteen. So the company with extensive '
            + 'experience across the Syrian market has eleven people, and they '
            + 'have put the one number in the document because they are proud of '
            + 'it.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'It might be eleven very good people.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It might. ⚠ And I am not saying they are not good — I am saying '
            + 'that four pages with one number in them is a document that cannot '
            + 'be checked, and that the one number they chose tells us what they '
            + 'want us to look at.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Ours has about thirty numbers in it and three paragraphs of things '
            + 'we cannot do.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Which is why ours is two pages and theirs is four. Everything you '
            + 'cannot check takes up room.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'So what do I do with theirs?' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Ask them the four questions from 4.6, in writing, and see which '
            + 'answers come back with numbers. You are not trying to catch them '
            + 'out. You are trying to find out whether there is anybody there who '
            + 'writes the way we do, because that is the person you will be '
            + 'dealing with for the next nine years.' }
  ]
});

PBE5.scene('u4-4-7-pair', {
  set: 'interview',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'This CV is excellent. Extensive experience, excellent '
            + 'communication, strong work ethic.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'How long in each job?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It gives dates. March 2023 to November 2023, then December 2023 to '
            + 'July 2024.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Eight months and seven months. Does it say why either ended?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'No.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then those are the only two facts on the page and they are both '
            + 'dates. ⚠ I am not saying do not see him — I am saying the first '
            + 'question is the two dates, asked kindly, and the answer may be '
            + 'perfectly good.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It might be two bad employers.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'It might be two bad employers, and if he says so plainly with '
            + 'numbers in it, that is a better answer than anything written on '
            + 'the page.' }
  ]
});

PBE5.scene('u4-4-7-b', {
  set: 'interview',
  arr: 0,
  cast: {
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'bassel', cam: { shot: 'wide' },
      en: 'Position at the end of October. We have opened eleven new trade '
            + 'accounts year to date, against a target of twenty for the year, '
            + 'with ten weeks left.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'On that rate we will finish at sixteen or seventeen, and I would '
            + 'rather say so now than in December.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'The one thing I have not done yet that would change it: I have not '
            + 'been to Homs since August. Six of last year\'s eleven accounts '
            + 'came from two Homs trips.' },
    { who: 'bassel', cam: { shot: 'close' },
      en: 'One figure against the forecast: we were at nine on this date last '
            + 'year and finished at eleven, so the rate is not steady and what I '
            + 'have just told you is a guess.' }
  ]
});
