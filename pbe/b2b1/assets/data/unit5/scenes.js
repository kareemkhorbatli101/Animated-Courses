/* Unit 5 — the acted dialogues. Every line is the book's own. */
PBE7.scene('u5-5-1', {
  set: 'policydesk',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    attar: { rig: 'm-50s-b', name: 'Mr Attar', voice: 'en-US-AndrewMultilingualNeural', shirt: '#4a5a74', shirt2: '#3a4a60',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The first line is: do not supply Jaramana Hardware until they have paid.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ That is an instruction and you already had it. ⚠ Mr Ayoub said '
            + 'it to the counter in January and nothing happened.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So what is the difference?' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ An instruction names a case. A rule names a class. ⚠ No further '
            + 'goods are supplied to any account more than sixty days overdue. '
            + 'Jaramana is in it and so is everybody who gets there next year.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if Jaramana is the only one?' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Then the rule costs you nothing and it will still be there in '
            + '2030 when the next one happens. ⚠ A rule written for one case '
            + 'stops being a rule the day that case is settled.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'How do I know whether the wording is general enough?' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Here is the test, and it is the only one I know. ⚠ Invent a case '
            + 'nobody has met and read your rule against it. A customer who is '
            + 'not overdue but has gone quiet. A customer who pays in full on day '
            + 'ninety every time, deliberately. ⚠ A customer who is also a '
            + 'supplier and owes us while we owe him.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The third one breaks it.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ It breaks it in an interesting way, which is the point of '
            + 'inventing cases. Does account mean the customer or the ledger? If '
            + 'he owes us 300,000 and we owe him 280,000, is he sixty days '
            + 'overdue?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is a definition and it is 5.4.' },
    { who: 'attar', cam: { shot: 'close' },
      en: '⚠ It is, and you found it by inventing a case. ⚠ Nobody finds a '
            + 'bad definition by reading the policy. You find it by walking an '
            + 'imaginary customer through the door.' }
  ]
});

PBE7.scene('u5-5-1-pair', {
  set: 'policydesk',
  arr: 0,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'Your rule is: no further goods to any account more than sixty days '
            + 'overdue. Here is a customer. He owes us 300,000, ninety days old. '
            + 'We owe him 280,000 for plating, sixty days old.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Then he is overdue and we stop supplying him.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'He will say he is twenty thousand overdue, not three hundred.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That is not what the ledger says.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Which ledger? There are two entries for him, one on each side.' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…So account means either the customer or the ledger balance.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And which did you mean?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The ledger balance, taken on its own.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Then write that, because you have just decided it and nobody else '
            + 'will know you did.' }
  ]
});

PBE7.scene('u5-5-2', {
  set: 'policydesk',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' },
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'It applies to all customer accounts. That is all it needs to say.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ Then on the second of April somebody will stand at the counter '
            + 'and ask whether it applies to them, and whoever is on the counter '
            + 'will decide.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ And that is the policy. ⚠ Not the one you wrote — the one Lina '
            + 'makes at twenty past four on a Thursday because a man is waiting '
            + 'and she has nothing to point at.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So what are the exclusions?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ You know three of them. Staff purchases. The two Baghdad Street '
            + 'stalls, which are concessions and not accounts. And goods going '
            + 'back out under warranty, which are not a supply at all.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Warranty exchanges are obviously not covered.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ Obviously to you. ⚠ Obvious is a thing a writer feels and a '
            + 'reader does not. Write it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And then there is for the avoidance of doubt.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ Which is for the fourth case — the one that is already covered '
            + 'by the words but that somebody will argue about anyway. ⚠ For the '
            + 'avoidance of doubt, a part exchange is a supply. The rule already '
            + 'said so. The sentence stops the argument.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What is the difference between that and an exclusion?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ An exclusion changes what the rule covers. A for the avoidance '
            + 'of doubt changes nothing and saves an afternoon. ⚠ Mix them up and '
            + 'you will exclude something you meant to catch.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'How many of each?' },
    { who: 'hala', cam: { shot: 'close' },
      en: '⚠ Three exclusions and one avoidance is a page. ⚠ Nine exclusions '
            + 'is a rule that has lost an argument nine times in advance.' }
  ]
});

PBE7.scene('u5-5-2-pair', {
  set: 'policydesk',
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
      en: 'This does not apply to trade customers.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Who is now outside the rule?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The stalls. That is what I meant.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Read your own ledger. Who is a trade customer?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Nine of our eleven largest accounts.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Including Jaramana?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Including Jaramana.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So the exclusion you wrote to cover two concession stalls has '
            + 'taken out the customer the whole policy exists for, and it reads '
            + 'like a perfectly reasonable sentence.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Nobody would have noticed.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Nobody would have noticed until November, which is when they '
            + 'noticed last time.' }
  ]
});

PBE7.scene('u5-5-3', {
  set: 'policydesk',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Section 3: exceptions may be made at management discretion.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Whose discretion?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Yours. Or Bassel\'s, or mine, depending.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Then it is everybody\'s, and a rule everybody may set aside is a '
            + 'suggestion. ⚠ One name.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Yours.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Mine, and write it as mine, and write what happens when I am in '
            + 'Homs. That is the part nobody writes.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if you are away and a decision will not wait?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Then you, up to one order and one month, and you tell me when I '
            + 'am back. ⚠ Which is a second name with a limit on it, not a second '
            + 'discretion.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the record?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ On the account in the ledger, with the date and my initials, in '
            + 'the ledger and not in a drawer. ⚠ Because without the record the '
            + 'exception becomes the rule.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'How?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Jaramana. I let them have one order on credit in September '
            + 'because the man\'s son had died. ⚠ That was an exception and I was '
            + 'right. Then they had another in October, from the counter, because '
            + 'the counter saw September and assumed it was the arrangement ⚠ — '
            + 'and by November it was 240,000 and nobody had decided anything '
            + 'since September.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So the record is what stops the second one.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ The record is what makes the second one a decision instead of a '
            + 'precedent. And there is a third thing you have not asked about.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The customer who pays on day ninety, every time, deliberately.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: '⚠ He is one of our four best accounts and the rule catches him '
            + 'every month. ⚠ He does not need an exception each time. He needs a '
            + 'standing one, written, with a review date — otherwise somebody '
            + 'will stop his order in August and we will lose him over a policy I '
            + 'asked for.' }
  ]
});

PBE7.scene('u5-5-3-pair', {
  set: 'policydesk',
  arr: 2,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'September: Mr Ayoub lets Jaramana have one order on credit because '
            + 'the man\'s son had died.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Which was right.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'October: the counter gives them another. On what?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'On September. They had seen it and assumed it was the arrangement.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And November?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Two hundred and forty thousand, and nobody has decided anything '
            + 'since September.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So what would the record have changed?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The counter would have seen one order, September, initials, date.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And?' },
    { who: 'a', cam: { shot: 'close' },
      en: 'And the October release would have been a decision somebody had to '
            + 'take, instead of a precedent they thought they were following.' }
  ]
});

PBE7.scene('u5-5-4', {
  set: 'policydesk',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'I have a definitions section. Eleven terms.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ Read me the eleventh.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Goods means goods supplied by the company.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ Which nobody has ever argued about, and which now has to be read '
            + 'by everybody for ever. ⚠ How many of the eleven have cost this '
            + 'company money?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…Two. Account. And a confirmed order.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ Then there are two definitions. ⚠ A definition of a word nobody '
            + 'argues about is a line a reader has to get past to reach the one '
            + 'that matters.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And a confirmed order?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ Tell me the three arguments it settles. If you cannot name '
            + 'three, it is not the word.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ One: the plater\'s gauge error in January. We had told him 0.5 '
            + 'on the telephone and he says we never confirmed it. ⚠ Two: '
            + 'Jaramana in November, who say they never placed the second order, '
            + 'and somebody in the yard says they did. ⚠ Three: the eleven export '
            + 'quotations — are they orders yet, and are they held at the old '
            + 'price?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ Three real arguments, each with money in it. Now define it so '
            + 'all three are settled by the same sentence.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'A written acknowledgement with a price and a date.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ Which settles all three, and which also means we were wrong '
            + 'about the plater. ⚠ We never sent him an acknowledgement.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So the definition costs us the plater argument.' },
    { who: 'bassel', cam: { shot: 'close' },
      en: '⚠ It costs us an argument we were going to lose anyway, and it '
            + 'costs it to us in March instead of in a hearing. ⚠ A definition '
            + 'that only ever helps you is a definition you have written round '
            + 'yourself, and the other side will read it too.' }
  ]
});

PBE7.scene('u5-5-4-pair', {
  set: 'policydesk',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'A part-load is a run where the vehicle has spare capacity.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Read that as the yard foreman who wants to send a lorry out.' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Every lorry has spare capacity. You can always get another pallet on.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So the rule catches everything.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Which means it catches nothing, because nobody can apply it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Now read your other version as the same man. Any item on the run '
            + 'sheet not loaded onto a vehicle allocated to that run.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That one he can apply. He looks at the sheet and he looks at the lorry.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And does it ever go against him?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Yes. The pallet on the floor. He has always sent those out and now '
            + 'he cannot.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Then it is a definition and not a wish.' }
  ]
});

PBE7.scene('u5-5-5', {
  set: 'policydesk',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' },
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Section 4: goods are counted and signed for before release.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ Signed by whom?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Whoever counts.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ It does not say that. ⚠ It says counted and signed, and on a '
            + 'Thursday afternoon the man who counts is in the racks and the man '
            + 'who signs is at the gate with the driver waiting.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And they are different men.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ They have been different men about once a fortnight for nineteen '
            + 'years. ⚠ Both halves get done and the sentence is satisfied and '
            + 'nobody has counted what they signed for.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So I write signed by the person who counted.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ Then the two halves share a person and neither can be done '
            + 'alone. That is the difference. ⚠ Not two obligations — one '
            + 'obligation with two parts that cannot be separated.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Give me another.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ Dated and acknowledged. A note is dated by the man who writes it '
            + 'and acknowledged by the man who gets it ⚠ — and if the '
            + 'acknowledgement does not carry the date of the note, you have two '
            + 'pieces of paper that cannot be matched. We have a drawer of them.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So the link is the thing to write, not the two halves.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ The halves everybody remembers. The link is what the sentence is '
            + 'for. ⚠ Counted and signed by the counter. Dated and acknowledged '
            + 'by reference to that date.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And not only … but?' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: '⚠ That is for when the second half is the one people will drop. ⚠ '
            + 'The count is not only made but signed by the person who made it. '
            + 'It tells a reader which half is the one that gets lost, which is '
            + 'the one worth the extra words.' }
  ]
});

PBE7.scene('u5-5-5-pair', {
  set: 'policydesk',
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
      en: 'Notes are dated and acknowledged.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'What does the acknowledgement refer to?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The note.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Which note? Does it carry the note\'s date?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…No. It has its own date, which is when it was signed.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So if there are two notes about the same job, a week apart?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'You cannot tell which one was acknowledged.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Have you got a drawer of those?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'We have a box file of about two hundred.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Then write the link. Acknowledged by reference to the date of the '
            + 'note. Eight words, and the box file stops growing.' }
  ]
});

PBE7.scene('u5-5-6', {
  set: 'policydesk',
  arr: 2,
  cast: {
    sayegh: { rig: 'm-50s-b', name: 'Mr Sayegh', voice: 'en-AU-WilliamMultilingualNeural', shirt: '#4a5e74', shirt2: '#3a4a5c',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'sayegh', cam: { shot: 'wide' },
      en: 'It is a sound policy. Now read it as a customer who has been refused goods.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…Section 2.2 is the one I would use. A confirmed order means one '
            + 'for which the company has issued a written acknowledgement.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ And what would you say with it?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That the company issues acknowledgements, so a customer who does '
            + 'not get one has been let down by us and not the other way round.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Which is correct and is the first thing a careful customer will '
            + 'say. ⚠ A definition binds both ways. You cannot define a term for '
            + 'your own protection and then be surprised when it protects them.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Do I take it out?' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ No. You keep it and you keep the obligation that goes with it, '
            + 'because the obligation is the price of the definition and the '
            + 'definition is worth more. ⚠ What you take out is section 5.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'We aim to acknowledge all orders within one working day.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ We aim to is a promise with no obligation and no remedy, which '
            + 'is the worst of both. ⚠ A customer will read we aim to as we will, '
            + 'and when you do not, you have broken a promise you never made.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if I write we will acknowledge within one working day?' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Then you have made the promise, and you must be able to keep it '
            + 'on a Thursday in August with one person in the office. ⚠ Can you?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…No. Not within one day. Within three.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Then write three and keep it. ⚠ A policy that promises one day '
            + 'and delivers three has handed the other side a document. A policy '
            + 'that promises three and delivers two has handed them nothing and '
            + 'you look better than you said.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Nobody drafts the number they can actually do.' },
    { who: 'sayegh', cam: { shot: 'close' },
      en: '⚠ Nobody drafts a document expecting to be shown it in a dispute, '
            + 'which is the only time anybody reads one closely.' }
  ]
});

PBE7.scene('u5-5-6-pair', {
  set: 'policydesk',
  arr: 2,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'You have we aim to collect within two working days of notice. Can '
            + 'you do it on a Thursday in August with one driver?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'No.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'With two drivers in November?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Yes, usually.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So the honest number is the August number.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Four days.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And how often do you actually do it in two?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Most of the year. Perhaps nine months in twelve.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then write four and do it in two for nine months, and nobody has a '
            + 'document and everybody is pleased with you.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Four reads worse on the page.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Four reads worse to you. Two reads worse to the man holding it in August.' }
  ]
});

PBE7.scene('u5-5-7', {
  set: 'policydesk',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    lina: { rig: 'f-20s-b', name: 'Lina', voice: 'en-NZ-MollyNeural', shirt: '#8a5f7a', shirt2: '#6e4b61',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'This takes effect on the first. Sixty days overdue, no release, '
            + 'and you point at the page.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'I have been doing it already.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Doing what?' },
    { who: 'lina', cam: { shot: 'mid' },
      en: '⚠ Not releasing to people who owe. ⚠ Three weeks. Four times.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'On what basis?' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'On the ledger. ⚠ If the balance is red and it is older than the '
            + 'month before last, I say the office has to approve it and I '
            + 'telephone you, and you have always said yes or no and I have never '
            + 'written it down.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…That is the policy. That is almost exactly the policy.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'Is it?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Older than the month before last is about sixty days. ⚠ You '
            + 'invented the rule I have spent nine days drafting, in your third '
            + 'week, because somebody had to answer a man at a counter.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'I thought I was guessing.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ You were, and you guessed the same as Mr Attar and me, which '
            + 'means it was not a guess — it is what the ledger makes anybody do '
            + 'who is standing in front of it.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'So what does the page change?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Three things, and none of them is the rule. ⚠ You stop '
            + 'telephoning me, because you can point at it. The four times you '
            + 'have already done it become four decisions instead of four '
            + 'guesses. And when somebody says you let Jaramana have it in '
            + 'September, you have a sentence that says September does not apply '
            + 'to October.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'And if I had got it wrong?' },
    { who: 'nour', cam: { shot: 'close' },
      en: '⚠ You would have got it wrong for three weeks with nothing to '
            + 'point at and nobody would have known until November. ⚠ Which is '
            + 'what happened in September, and that is why there is a page.' }
  ]
});

PBE7.scene('u5-5-7-pair', {
  set: 'policydesk',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'From Monday, no vehicle leaves part-loaded.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Right.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Yes, but from Monday it is written down.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Right.' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Is there something you want to say?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'No.' },
    { who: 'a', cam: { shot: 'mid' },
      en: '(again, differently) What do you do at the moment if there is a '
            + 'pallet on the floor?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I go and find the foreman. Every time, since February.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Every time?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Four times. And twice he said send it anyway, and I did, and '
            + 'nobody wrote anything.' }
  ]
});

PBE7.scene('u5-5-7-b', {
  set: 'policydesk',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    lina: { rig: 'f-20s-b', name: 'Lina', voice: 'en-NZ-MollyNeural', shirt: '#8a5f7a', shirt2: '#6e4b61',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'This takes effect on the first. Sixty days overdue, no release, '
            + 'and you point at the page.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: '⚠ I have been doing it already.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Doing what?' },
    { who: 'lina', cam: { shot: 'mid' },
      en: '⚠ Not releasing to people who owe. Three weeks. Four times.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'On what basis?' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'On the ledger. ⚠ If the balance is red and it is older than the '
            + 'month before last, I say the office has to approve it and I '
            + 'telephone you. And you say yes or no, ⚠ and I have never written '
            + 'it down.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Older than the month before last is about sixty days. ⚠ You '
            + 'invented the rule I have spent nine days drafting, in your third '
            + 'week.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'I thought I was guessing.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ You guessed the same as Mr Attar and me, which means it was not '
            + 'a guess. It is what the ledger makes anybody do who is standing in '
            + 'front of it.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'So what does the page change?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Three things, and none of them is the rule. ⚠ You stop '
            + 'telephoning me, because you can point at it. Your four guesses '
            + 'become four decisions. And when somebody says you let Jaramana '
            + 'have it in September, you have a sentence that says September does '
            + 'not apply to October.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'And if I had got it wrong?' },
    { who: 'nour', cam: { shot: 'close' },
      en: '⚠ Three weeks with nothing to point at, and nobody would have '
            + 'known until November — which is what happened in September, and is '
            + 'why there is a page.' }
  ]
});
