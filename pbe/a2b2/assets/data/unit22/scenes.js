/* Unit 22 — the acted dialogues. Every line is the book's own. */
PBE4.scene('u22-22-1', {
  set: 'writingdesk',
  arr: 0,
  cast: {
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.63, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'hala', cam: { shot: 'wide' },
      en: 'I have written to the bank. "Dear Mr Samir,"' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Not Mr Samir. Samir is his first name. In English, Mr goes with '
            + 'the family name: Mr Haddad.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'And if I only have "Samir Haddad" on an email?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then Dear Mr Haddad. If you have met him twice and he signs '
            + 'himself Samir, you may write Dear Samir. Not both.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'And when I do not know the name at all?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Dear Sir or Madam. It is correct, it is cold, and it tells the '
            + 'reader that nobody troubled to find out who they are. Spend two '
            + 'minutes on the telephone first and you can usually write a name.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'There is a name on this one and I cannot tell whether it is a man '
            + 'or a woman.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Then write the whole name: Dear Samir Haddad. It is slightly '
            + 'unusual and it is never wrong, and it is a great deal better than '
            + 'guessing and being wrong in the first line.' }
  ]
});

PBE4.scene('u22-22-1-pair', {
  set: 'writingdesk',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.63, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'I have written to the ministry office. "Dear Sirs,"' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Not Dear Sirs. There is a named officer on the website — I found '
            + 'her in ninety seconds. In English, Mr and Ms go with the family '
            + 'name: Dear Ms Dagher.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And if I only have "Rana Dagher" on a page?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then Dear Ms Dagher. If she signs herself Rana you may write Dear '
            + 'Rana. Not both.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And when I do not know the name at all?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Dear Sir or Madam. It is correct, it is cold, and it tells the '
            + 'reader nobody troubled to find out who they are.' }
  ]
});

PBE4.scene('u22-22-2', {
  set: 'writingdesk',
  arr: 1,
  cast: {
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.63, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.43, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'hala', cam: { shot: 'wide' },
      en: 'Read the first three lines. "Dear Mr Haddad, I hope this email '
            + 'finds you well. I hope your family are well. We have been '
            + 'customers of your bank for some years now and we value the '
            + 'relationship."' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And what do you want?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'A copy of the March statement.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Which is in line five. He will read lines one to three, decide '
            + 'this is not urgent, and come back to it on Thursday — if Thursday '
            + 'exists.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'So I take out the good wishes?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'You move them. Dear Mr Haddad, I am writing to ask for a copy of '
            + 'the March statement for account 4471. Then, if you like, I hope '
            + 'you are well — after the purpose, where it is a courtesy and not a '
            + 'delay.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'It feels abrupt.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'It feels abrupt to you. To him it feels like somebody who knows he '
            + 'has forty emails. The kindest thing you can do to a busy person is '
            + 'tell them in the first line whether this one is for them.' }
  ]
});

PBE4.scene('u22-22-2-pair', {
  set: 'writingdesk',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.63, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.43, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Read the first three lines. "Dear Mr Haffar, We were extremely '
            + 'sorry to hear of the difficulty you experienced. We have been '
            + 'serving customers in Damascus since 1998 and we take every '
            + 'complaint seriously."' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And what does he want?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'A date for the replacement.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Which is in line six. He will read the first three lines, decide '
            + 'he has been handled rather than answered, and telephone instead.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'So I take out the apology?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'You move it. Dear Mr Haffar, the replacement will be with you on '
            + 'Tuesday 13 May before midday. Then the apology — after the answer, '
            + 'where it is believed.' }
  ]
});

PBE4.scene('u22-22-3', {
  set: 'writingdesk',
  arr: 2,
  cast: {
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.43, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'hala', cam: { shot: 'wide' },
      en: 'The request line: "I would be grateful if you could possibly '
            + 'assist us in this matter at your earliest convenience."' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Assist us with what, and by when?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'The statement. By the twelfth.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then neither of those is in the sentence. It is a very polite '
            + 'sentence that asks for nothing and gives no date.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'But it is polite.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is polite in the way a locked door is polite. Try: Could you '
            + 'send a PDF of the March statement for account 4471 by 12 May?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'That is almost an instruction.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is a question, it has could in it, and it tells him exactly '
            + 'what will make you happy. Politeness in English is made of could '
            + 'and thank you, not of length. Long sentences are not polite; they '
            + 'are expensive.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'And "at your earliest convenience"?' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Means nothing and is heard as nothing. A date is a courtesy; "at '
            + 'your earliest convenience" is a way of not giving one.' }
  ]
});

PBE4.scene('u22-22-3-pair', {
  set: 'writingdesk',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.43, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The request line: "It would be very helpful if somebody could '
            + 'perhaps come and see the machine when possible."' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Come and see what, and when?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The wrapping machine. The limit switch. Tuesday or Wednesday morning.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then none of that is in the sentence. It is a very polite sentence '
            + 'that asks for nothing.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'But it is polite.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It is polite in the way a locked door is polite. Try: Could you '
            + 'send an engineer on Tuesday or Wednesday morning to look at the '
            + 'limit switch on the wrapping machine?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That is almost an instruction.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'It is a question, it has could in it, and it tells them exactly '
            + 'what will make you happy.' }
  ]
});

PBE4.scene('u22-22-4', {
  set: 'writingdesk',
  arr: 0,
  cast: {
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.63, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'hala', cam: { shot: 'wide' },
      en: 'I have put "as soon as possible".' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Which means nothing. He has eleven things that are as soon as '
            + 'possible and yours will be the eleventh.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Then "urgently".' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Worse. Everybody writes urgent and nobody believes it. A deadline '
            + 'is three things: a date, a time if the date is tight, and what '
            + 'happens after it.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'What happens after it?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'By Thursday the twelfth, because the auditor is here on the '
            + 'thirteenth. That is not pressure; it is information. He can now '
            + 'decide honestly whether he can do it.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'And if I give a date that is not really the date? If I say '
            + 'Thursday when I need it on Sunday?' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Then you have taught him that your dates are not real, and every '
            + 'date you give him for the rest of your working life is worth less. '
            + 'Ask for the date you need. If you need room, ask for confirmation '
            + 'earlier — that is honest and it does the same work.' }
  ]
});

PBE4.scene('u22-22-4-pair', {
  set: 'writingdesk',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.63, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'I have put "as soon as possible".' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Which means nothing. He has eleven things that are as soon as '
            + 'possible and yours will be the eleventh.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Then "urgently".' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Worse. A deadline is three things: a date, a time if it is tight, '
            + 'and what happens after it.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'What happens after it?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'By the 15th, because the depot holds the rate until the 15th. That '
            + 'is not pressure; it is information.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And if I ask for the 10th to be safe?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Then you have taught him that your dates are not real. Ask for the '
            + '15th and ask him to confirm by the 10th.' }
  ]
});

PBE4.scene('u22-22-5', {
  set: 'writingdesk',
  arr: 1,
  cast: {
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.63, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.43, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'hala', cam: { shot: 'wide' },
      en: 'I never know how to end. I have written "Thank you in advance".' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Which means: I am thanking you now so that I do not have to thank '
            + 'you later, and also I am assuming you will say yes.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Everybody writes it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Everybody does, and plenty of English readers dislike it. Thank '
            + 'you on its own is better and shorter. Thank them again when they '
            + 'have done it — that one is worth something.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'And the closing?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Two old rules that still hold in a letter: Dear Mr Haddad ends '
            + 'Yours sincerely; Dear Sir or Madam ends Yours faithfully. Name, '
            + 'sincerely. No name, faithfully.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'And in an email?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Best regards is right for almost every email you will ever write, '
            + 'to anybody. Then your name, your company, and a telephone number. '
            + 'An email without a telephone number costs somebody a second email '
            + 'to ask for one.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Mine just says "Hala".' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Then half your readers do not know which company you are, and one '
            + 'of them has two suppliers called Hala.' }
  ]
});

PBE4.scene('u22-22-5-pair', {
  set: 'writingdesk',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.63, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.43, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'I never know how to end. I have written "Thanks! Hala".' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Which means: I am in a hurry and you already know who I am. It is '
            + 'going to a bank.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Everybody writes it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Inside the office, yes. Thank you. Best regards, is better and '
            + 'barely longer.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And my name?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Name, position, company, and a telephone number that is answered. '
            + 'Hala Mourad · Customer Service · Sham Trading Co., Mezzeh · and '
            + 'the mobile, not the office line that rings in an empty room.' }
  ]
});

PBE4.scene('u22-22-6', {
  set: 'writingdesk',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.43, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The same message goes to Abu Yasser and to the bank. Write both.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'To Abu Yasser: "Abu Yasser — I need the March stock figures by '
            + 'Thursday for the auditor. Paper is fine."' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Good. Short, no explanation, because he knows what an auditor is '
            + 'and he knows you.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'To the bank: "Dear Mr Haddad, I am writing to ask for a certified '
            + 'copy of the March statement for account 4471. We need it for our '
            + 'auditor, who is here on 13 May; the branch stamp is required. '
            + 'Could you confirm by Thursday that 12 May is possible?"' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is the same message. Longer, because he does not know you, '
            + 'does not know the account, and cannot guess what form you need.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'So formal means longer.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Formal means more explained, which is usually longer. It does not '
            + 'mean more words about nothing. And one thing never changes between '
            + 'the two versions: the facts and the date. If Abu Yasser gets '
            + 'Thursday and the bank gets Sunday, you have two stories and one of '
            + 'them will be quoted back at you.' }
  ]
});

PBE4.scene('u22-22-6-pair', {
  set: 'writingdesk',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.43, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The same message goes to the warehouse and to the customer. Write both.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'To Abu Yasser: "The Haffar delivery is Tuesday now, not Friday. '
            + 'Van is off the road till Monday. Keep the twelve boxes on the '
            + 'bench."' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Good. Short, no explanation, because he knows the van and he knows '
            + 'the order.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'To Mr Haffar: "Dear Mr Haffar, I am sorry to say your delivery '
            + 'will now be Tuesday 13 May, not Friday the 9th. The reason is a '
            + 'vehicle repair. The goods are packed and set aside. If Tuesday '
            + 'does not work, I can send the twelve small boxes by taxi on Friday '
            + 'at our cost."' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That is the same message. Longer, because he cannot see the van or '
            + 'the bench.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So formal means longer.' },
    { who: 'a', cam: { shot: 'close' },
      en: 'Formal means more explained. And one thing never changes: the new '
            + 'date is Tuesday in both.' }
  ]
});

PBE4.scene('u22-22-7', {
  set: 'writingdesk',
  arr: 0,
  cast: {
    fadi: { rig: 'm-30s-a', name: 'Fadi', voice: 'en-US-GuyNeural', shirt: '#8a4b2f', shirt2: '#6f3c25',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.63, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'fadi', cam: { shot: 'wide' },
      en: 'Two emails came for the same thing. One is long and very polite '
            + 'and one is four lines. The long one must be the better one.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Read me the last line of the long one.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: '"We look forward to your kind cooperation in this matter."' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And what does it want?' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: '…It does not say. It says the matter is important and that they '
            + 'hope for cooperation.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So you cannot answer it. You would have to write back and ask what '
            + 'they want, which is a day gone, and most people do not write back; '
            + 'they put it in the pile. Read the short one.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: '"Could you confirm by Thursday whether the 12th is possible? If '
            + 'not, tell me and I will use the alternative."' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That one can be answered in one word while standing up. Which '
            + 'would you answer first?' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'The short one. But the long one has "URGENT" in the subject.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Everybody writes urgent. The word that makes something urgent is a '
            + 'date, and the long one does not have one anywhere.' }
  ]
});

PBE4.scene('u22-22-7-pair', {
  set: 'writingdesk',
  arr: 0,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.63, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'The long one is from head office, so it must matter.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Read me what it wants.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '"Certain changes may be implemented in due course which may affect '
            + 'your account."' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Which changes, when, and what should the customer do?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It does not say. It says they value the custom.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'So the customer will telephone to ask, or ignore it and be '
            + 'surprised later. Read the short one.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '"From 1 June the minimum order is 50 boxes, up from 30. Your last '
            + 'six orders have all been over 80, so this does not affect you."' },
    { who: 'a', cam: { shot: 'close' },
      en: 'That one answers the question before it is asked, and it tells him '
            + 'he need do nothing. Which costs less?' }
  ]
});

PBE4.scene('u22-22-7-b', {
  set: 'writingdesk',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Dear Mr Haddad. I am writing to ask for a certified copy of the '
            + 'March statement for account 4471, in the name of Sham Trading.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'We need it for our auditor, who is here on the thirteenth of May. '
            + 'He requires the branch stamp, so a PDF is not enough this time.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Could you confirm by Thursday the eighth that the twelfth is '
            + 'possible? If it is not, please tell me then. Thank you. Best '
            + 'regards, Nour Mansour.' }
  ]
});
