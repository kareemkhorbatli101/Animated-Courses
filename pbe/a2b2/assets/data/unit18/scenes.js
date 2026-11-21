/* Unit 18 — the acted dialogues. Every line is the book's own. */
PBE4.scene('u18-18-1', {
  set: 'itcorner',
  arr: 0,
  cast: {
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.25, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'hala', cam: { shot: 'wide' },
      en: 'Can you read this before I send it? It is to the Aleppo supplier.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The English is fine. The subject line says "Hello".' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'It is a greeting.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is the only part she reads before she decides when to open it. '
            + 'She gets forty emails a day. Put what it is and what you want: '
            + '"Order 0618 — two items missing, please confirm by Thursday".' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'That is almost the whole email in the subject.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then she will answer it from the subject line, which is the best '
            + 'thing that can happen. And the last line — "thank you very much, '
            + 'best regards, I hope you are well".' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Too much?' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'The last line is for the thing you want. Could you confirm by '
            + 'Thursday? Then thank you, then your name. The thanks goes before '
            + 'the name, not instead of the request.' }
  ]
});

PBE4.scene('u18-18-1-pair', {
  set: 'itcorner',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.25, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Can you read this before I send it? It is to Mr Haffar.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'The English is fine. The subject line says "Information".' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It is information.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It is the only part he reads before deciding when to open it. Put '
            + 'the thing and the ask: "Order 0702 — two days late, part delivery '
            + 'Tuesday?"' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That is most of the email.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Then he can answer from the subject line. And the end — three '
            + 'sentences of apology and no question. The last line is for the '
            + 'thing you want: do you want the part delivery on Tuesday?' }
  ]
});

PBE4.scene('u18-18-2', {
  set: 'itcorner',
  arr: 1,
  cast: {
    fadi: { rig: 'm-30s-a', name: 'Fadi', voice: 'en-US-GuyNeural', shirt: '#8a4b2f', shirt2: '#6f3c25',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'fadi', cam: { shot: 'wide' },
      en: 'Tell me again how to put a delivery on the screen. You told me on '
            + 'Tuesday and I did it wrong.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I told you in a paragraph on Tuesday. That is why. Listen for the numbers.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'Go on.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'One: open the Deliveries screen — the lorry icon, not the box '
            + 'icon. Two: enter the note number from the paper, not the customer '
            + 'number. Three: check the date; it puts today in and your note may '
            + 'be yesterday\'s.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'Three is the one I got wrong.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Everybody gets three wrong. Four: enter the number of items you '
            + 'actually delivered. Five: save with the middle button and wait for '
            + 'the green line before you close it.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'Five steps. On Tuesday it sounded like one long sentence with "and '
            + 'then" in it four times.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'It was. "Then" is the word that hides a step. Number them and you cannot.' }
  ]
});

PBE4.scene('u18-18-2-pair', {
  set: 'itcorner',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Tell me again how to lock up. You told me on Thursday and I got it wrong.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I told you in a paragraph. Listen for the numbers.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Go on.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'One: the back gate — the bolt, not just the latch. Two: the '
            + 'shutter, fully down. Three: the shutter must be down before the '
            + 'alarm, or the alarm will not set and nothing tells you.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Three is the one I got wrong.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Everybody gets three wrong. Four: the two yard lights. Five: the '
            + 'alarm, and wait for the two beeps. Six: front door, key in the '
            + 'box.' }
  ]
});

PBE4.scene('u18-18-3', {
  set: 'itcorner',
  arr: 2,
  cast: {
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.46, bottom: 46, at: [0.34, 0.62],
      pose: 'rest' },
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.25, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62],
      pose: 'rest' },
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nadia', cam: { shot: 'wide' },
      en: 'The system is down. Not slow — down. Nothing opens on any of the '
            + 'four screens.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Have you tried restarting?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'All four, twice. The network light on the box in the corner is red '
            + 'and it is usually green. I have telephoned the engineer and he is '
            + 'coming at eleven.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then until eleven we are a company from 1998. Abu Yasser, we need the book.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'I have it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Of course you have it. Right — we take orders on paper with the '
            + 'date and the time on every one. We do not promise any stock we '
            + 'have not seen on the shelf. We telephone the three customers who '
            + 'are expecting a confirmation today and tell them it will be after '
            + 'twelve.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'And if a customer asks why?' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Tell them the truth: our system is down this morning and the '
            + 'engineer is here at eleven. Do not say "there is a small problem". '
            + 'They have heard that from everybody and they do not believe it.' }
  ]
});

PBE4.scene('u18-18-3-pair', {
  set: 'itcorner',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.25, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The card machine is not connecting. Not slow — it will not connect '
            + 'at all. Cash still works.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Have you tried the other socket?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Both sockets, and restarted twice. I have telephoned the provider '
            + 'and they say four hours.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then until two o\'clock we are a cash shop. Put a sign on the '
            + 'counter — not a small one.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And the three customers who always pay by card?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Telephone them now, before they come, not after they have queued. '
            + 'Tell them the truth and tell them when.' }
  ]
});

PBE4.scene('u18-18-4', {
  set: 'itcorner',
  arr: 0,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.25, 0.62],
      pose: 'rest' },
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62],
      pose: 'rest' },
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'After Tuesday morning I want to settle this. The book or the screen.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'The screen is faster, it is searchable, and two people can read it '
            + 'at once. The book is none of those.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'The book is slower and it is never down. It was the only thing in '
            + 'this building that worked on Tuesday.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Once in nine years.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Once in nine years for nine days. And it is not only Tuesday. The '
            + 'book shows what we did; the screen shows what we have. They answer '
            + 'different questions and you are asking which one to keep.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Then neither of them is the answer and both of them are. Keep the '
            + 'book for the daily close and the screen for everything else, and I '
            + 'do not want to hear this discussion again for three years.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'It costs eleven minutes a day.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: 'It costs eleven minutes a day and it saved nine days once. I can '
            + 'do that arithmetic.' }
  ]
});

PBE4.scene('u18-18-4-pair', {
  set: 'itcorner',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.25, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62],
      pose: 'rest' },
    c: { rig: 'm-30s-a', name: 'C', voice: 'en-US-GuyNeural', shirt: '#6f5a8a', shirt2: '#57466e',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The van or the service driver. I want to settle it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'The service driver is cheaper for one or two items and he is there '
            + 'in two hours. The van costs us a whole morning for the same two '
            + 'items.' },
    { who: 'c', cam: { shot: 'mid' },
      en: 'The van is slower and our face is at the door. Three of the four '
            + 'customers who left last year said the same thing: they never see '
            + 'anybody.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'For two items?' },
    { who: 'c', cam: { shot: 'mid' },
      en: 'For the round. The service driver is for the emergency and the van '
            + 'is for the round. They answer different questions.' },
    { who: 'a', cam: { shot: 'close' },
      en: 'Then both. The van keeps the round; the service driver takes '
            + 'anything urgent that is not on it.' }
  ]
});

PBE4.scene('u18-18-5', {
  set: 'itcorner',
  arr: 1,
  cast: {
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62],
      pose: 'rest' },
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'hala', cam: { shot: 'wide' },
      en: 'Which of these is the real price list? There are four and they all '
            + 'look the same.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Read me the names.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '"prices", "prices new", "prices new 2", and "prices FINAL use this".' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'None of them is the real one, because none of them has a date. '
            + 'Open all four and look at the top line.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Three say March and one says January.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Then there are two real ones and we do not know which March file '
            + 'is later. From today: every file is named what it is, then the '
            + 'date, then whose it is — Prices2026-03-14Aleppo. No "new", no '
            + '"final", no "use this one".' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'And where?' },
    { who: 'nadia', cam: { shot: 'close' },
      en: 'In the shared folder, under Suppliers. Never on your own computer '
            + '— a file on your computer is a file that does not exist on the day '
            + 'you are not here.' }
  ]
});

PBE4.scene('u18-18-5-pair', {
  set: 'itcorner',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Which of these is the real rota? There are five and they all look the same.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Read me the names.' },
    { who: 'a', cam: { shot: 'mid' },
      en: '"rota", "rota new", "rota July", "rota july2" and "ROTA USE THIS".' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'None of them is the real one, because only two have a month and '
            + 'none has a year. Open all five and look at the first week.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Two are July and three have no dates at all.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Then from today: Rota, underscore, the year and month, underscore, '
            + 'which team. Rota2026-07Counter. And it goes in the shared folder '
            + 'under Staff, not on your machine.' }
  ]
});

PBE4.scene('u18-18-6', {
  set: 'itcorner',
  arr: 2,
  cast: {
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.25, 0.62],
      pose: 'rest' },
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'hala', cam: { shot: 'wide' },
      en: 'There is an email from Ms Shamsi saying her bank account has '
            + 'changed and asking us to pay the March invoice to a new number. It '
            + 'has her name at the bottom.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Do not pay it. Do not reply to it. Do not click anything in it.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'It looks exactly like her emails.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'They always do. Three things, in this order. One: do not act on '
            + 'it. Two: telephone her — on the number we have, from the file, not '
            + 'a number in the message. Three: tell me, whatever she says.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'And if it turns out to be real?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Then you will have telephoned a supplier of eleven years and she '
            + 'will say yes, and that is a thirty-second conversation. There is '
            + 'no version of this where telephoning is the wrong thing.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'I feel stupid for even asking.' },
    { who: 'nadia', cam: { shot: 'close' },
      en: 'Do not. The ones who get caught are never the people who ask; they '
            + 'are the people who did not want to look as though they did not '
            + 'know. Ask every time, and ask loudly, so the new people hear you '
            + 'doing it.' }
  ]
});

PBE4.scene('u18-18-6-pair', {
  set: 'itcorner',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.25, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'There is a message that looks like it is from Mr Ayoub, sent at '
            + 'half past six, asking me to make a payment before the morning. It '
            + 'says he is in a meeting and cannot take calls.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Do not pay it. Do not reply to it. Do not click anything in it.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It is exactly how he writes.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'They always are. Three things. One: do not act. Two: telephone him '
            + 'on his own number — the one in your telephone, not a number in the '
            + 'message — and if he does not answer, telephone me. Three: tell me '
            + 'either way.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And if it is really him?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Then he will be mildly annoyed for ten seconds and will tell '
            + 'everybody about it for a week as a good thing. There is no version '
            + 'of this where telephoning is wrong.' }
  ]
});

PBE4.scene('u18-18-7', {
  set: 'itcorner',
  arr: 0,
  cast: {
    fadi: { rig: 'm-30s-a', name: 'Fadi', voice: 'en-US-GuyNeural', shirt: '#8a4b2f', shirt2: '#6f3c25',
      full: true, scale: 0.62, bottom: 30, at: [0.25, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'fadi', cam: { shot: 'wide' },
      en: 'The IT notice. "All business documents must be stored in the '
            + 'shared folder. Local storage is not permitted." I photograph the '
            + 'shelf labels on my telephone. Is that local storage?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Read me the next sentence.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: '"Where a photograph or note is taken on a personal device for '
            + 'operational purposes, it must be transferred the same day and then '
            + 'deleted."' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So the answer is yes and it is allowed. You take the photograph, '
            + 'you put it in the folder the same day, and you delete it from your '
            + 'telephone. Nobody is telling you to stop.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'It says "not permitted".' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The first sentence says where documents live. The second says what '
            + 'to do about the way you actually work. People read the first '
            + 'sentence and stop, and then either they panic or they ignore the '
            + 'whole notice.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'And the folder?' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Stock, under Deliveries. I will show you — ten minutes, before you '
            + 'go out. And bring your telephone: we will do one together and you '
            + 'will write the steps down.' }
  ]
});

PBE4.scene('u18-18-7-pair', {
  set: 'itcorner',
  arr: 0,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.25, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'The whole warehouse uses one login and it is written on the wall. '
            + 'It says passwords must not be written down.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Read me the next sentence.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '"Where a shared system is used by more than one member of staff, a '
            + 'single account must not be used; individual accounts are to be '
            + 'requested from the office and may be issued the same day."' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'So the notice is not about the wall. It is about the one login. It '
            + 'says the office will give each of you your own, the same day you '
            + 'ask.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Nobody has ever told us that.' },
    { who: 'a', cam: { shot: 'close' },
      en: 'It is in the second half of a long sentence, which is where it '
            + 'always is. The only thing it asks of you is to ask the office. I '
            + 'will come with you at eleven.' }
  ]
});

PBE4.scene('u18-18-7-b', {
  set: 'itcorner',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.25, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'One: open the Deliveries screen — the lorry icon, not the box '
            + 'icon. Two: enter the note number from the paper, not the customer '
            + 'number.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Three: check the date. It puts today in, and your note may be '
            + 'yesterday\'s. That is the one everybody gets wrong.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Four: enter the number of items you actually delivered. Five: save '
            + 'with the middle button, and wait for the green line before you '
            + 'close it.' }
  ]
});
