/* Unit 13 — the acted dialogues. Every line is the book's own. */
PBE6.scene('u13-13-1', {
  set: 'diarywall',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'rest' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.71, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The Tannous trial. We are collecting the cartons from Ms Shamsi on '
            + 'the 8th, we are packing on the 9th and the 10th, Fadi is driving '
            + 'down on the 11th, it clears on the 12th and she puts it on the '
            + 'vessel on the 14th.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Say that again and after each one tell me what the evidence is.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Collecting on the 8th — Ms Shamsi confirmed it by telephone yesterday.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Her word, then. Not nothing. Next.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Packing the 9th and 10th — that is us, so it is arranged.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'It is intended. Who is packing?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…Abu Yasser and Lina, except Lina is at the bank on the 9th.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'So the 9th is half a day with one man. Next.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Fadi driving on the 11th — that one is written in his sheet and he '
            + 'has read it.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Arranged. The 12th?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Clearing on the 12th is what everybody says it takes.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'That is a prediction wearing the clothes of an arrangement. And the 14th?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The 14th is the vessel. It sails at 6.40 whether we are there or not.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: '⚠ Then the 14th is the only one of the five that is a fact, and '
            + 'the only one you have not arranged. ⚠ Write the evidence next to '
            + 'every date and the programme will tell you where it is going to '
            + 'break, which is not the same question as whether the dates add up. '
            + 'They always add up. That is what a programme is for.' }
  ]
});

PBE6.scene('u13-13-1-pair', {
  set: 'diarywall',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.71, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'We are collecting on the 8th, we are packing on the 9th and the '
            + '10th, and Fadi is driving on the 11th.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Say that again and after each one tell me the evidence.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Collecting on the 8th — Ms Shamsi confirmed by telephone on the 6th.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Her word, then. Not nothing. Next.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Packing the 9th and 10th — that is us, so it is arranged.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It is intended. Who is packing?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Abu Yasser and Lina, except Lina is at the bank on the 9th.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ And which of these is a fact you have not arranged? The vessel '
            + 'at 6.40 on the 14th — and it is the only one of the five that is '
            + 'certain.' }
  ]
});

PBE6.scene('u13-13-2', {
  set: 'diarywall',
  arr: 1,
  cast: {
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.71, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nadia', cam: { shot: 'wide' },
      en: 'Your note to Ms Tannous says we intend to ship on the 11th and to '
            + 'have the documents with you on the 13th.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Which is true. I do intend to.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'And she will read it as a promise, because nobody outside this '
            + 'office knows the difference between what you have arranged and '
            + 'what you have decided on your own.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So I should say we will ship on the 11th?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'No. You should say which of the two is arranged and which is '
            + 'intended, and then she can decide what to do about the one that is '
            + 'not.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That looks weak.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'It looks like somebody who has counted. ⚠ The shipping is '
            + 'arranged: Fadi, the 11th, in his sheet. The documents I intend to '
            + 'have with you on the 13th; that depends on the clearance, and the '
            + 'clearance has taken between one and three days this month. Is that '
            + 'weak?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is longer.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'It is twenty words longer and it is the only version she can plan '
            + 'against. ⚠ A buyer does not want your confidence; she wants to '
            + 'know which of your dates she can put in her own programme.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if I am wrong about the 13th after writing it like that?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Then you were wrong about something you told her you might be '
            + 'wrong about, which costs you nothing. ⚠ Being wrong about a '
            + 'sentence that said we intend to is forgivable. Being wrong about '
            + 'we will is a broken promise, and she will remember it for years.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So the hedge is not modesty.' },
    { who: 'nadia', cam: { shot: 'close' },
      en: '⚠ The hedge is where the risk is kept. Put it in the sentence and '
            + 'it stays with the sentence. Leave it out and it moves to the '
            + 'relationship.' }
  ]
});

PBE6.scene('u13-13-2-pair', {
  set: 'diarywall',
  arr: 1,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.71, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'Your note says we intend to have Lina trained on the export '
            + 'paperwork by the end of February.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Which is true. I do intend to.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And Mr Ayoub will read it as a commitment, because it has a date on it.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'So I should say she will be trained?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'No. Say what is arranged — which is nothing — and what it depends '
            + 'on. ⚠ Nothing is arranged yet. I intend to have Lina trained by '
            + 'the end of February; that depends on Nadia, who finishes at four '
            + 'exactly, so it has to be inside the working day or it has to be '
            + 'somebody else.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That looks weak.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ It looks like somebody who has noticed that the plan needs an '
            + 'hour that does not exist — and it is the only version Mr Ayoub can '
            + 'do anything about.' }
  ]
});

PBE6.scene('u13-13-3', {
  set: 'diarywall',
  arr: 2,
  cast: {
    lina: { rig: 'f-20s-b', name: 'Lina', voice: 'en-NZ-MollyNeural', shirt: '#8a5f7a', shirt2: '#6e4b61',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'lina', cam: { shot: 'wide' },
      en: 'Mr Jaber telephoned. He said he can do the 11th, or the 12th at '
            + 'eight, and he will be at the border either way on the 12th.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Read me what you wrote.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: '"Jaber — 11th or 12th at eight — border 12th."' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And is eight o\'clock the 11th or the 12th?' },
    { who: 'lina', cam: { shot: 'mid' },
      en: '…I do not know. I think he meant both.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'He meant one of them and we now have to telephone him back, which '
            + 'is the fourth time this week somebody has had to telephone back '
            + 'for a time. ⚠ So: time, day, date, and one appointment per line. '
            + 'Never two dates in a sentence.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: '"Jaber — 8.00, Thursday 11 January." And a second line for the other one.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Better. And now read it back to him on the telephone before he '
            + 'hangs up, in that order, and let him correct you. ⚠ The read-back '
            + 'is not politeness; it is the only moment when the mistake is free.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'And the border on the 12th?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is not an appointment. He is telling you where he will be, '
            + 'which is a different kind of entry, and it goes in the diary with '
            + 'no time against it and the word expected.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'So there are three kinds of thing in a diary.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'There are four, and you have just met three of them: an '
            + 'appointment, which has a time and two parties; a commitment, which '
            + 'has a date and one party; and an expectation, which has neither '
            + 'and is there so that you do not make an appointment on top of it. '
            + 'The fourth is the one that matters most.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'What is it?' },
    { who: 'nour', cam: { shot: 'close' },
      en: '⚠ A fixed point. Something that happens at a time whether anybody '
            + 'turns up or not. The vessel at 6.40 on the 14th. ⚠ You do not '
            + 'arrange it, you do not move it, and you write everything else '
            + 'around it.' }
  ]
});

PBE6.scene('u13-13-3-pair', {
  set: 'diarywall',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Mr Attar says he will come in the week of the 20th, probably the '
            + 'Tuesday, in the morning, and he wants the stock figures before he '
            + 'comes.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Read me what you wrote.' },
    { who: 'a', cam: { shot: 'mid' },
      en: '"Attar — w/c 20th, prob Tues am — stock figures first."' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And when are the stock figures due?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Before he comes. Which is the 21st, probably, in the morning.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ So the only firm date on the page is a commitment of ours, and '
            + 'it has no date at all. Three lines: the week, expected. Tuesday '
            + 'the 21st, morning, unconfirmed. ⚠ And the figures, which are ours, '
            + 'by Monday the 20th — because a commitment that says before he '
            + 'comes is a commitment with no hour in it.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And I telephone him to confirm the Tuesday.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Today, and read it back to him.' }
  ]
});

PBE6.scene('u13-13-4', {
  set: 'diarywall',
  arr: 0,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.71, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'You have eleven lines here for January. Sort them before we argue '
            + 'about any of them. Three columns.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Arranged: the collection, Fadi\'s run, the audit on the 20th, and '
            + 'Lina\'s first week, which is in a sheet. Four.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Intended?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The packing, the marking, the documents, the stocktake of the '
            + 'fourth store, and training Lina on the paperwork. Five.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Predicted?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The clearance taking a day, and Ms Tannous ordering again in February. Two.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'So four, five, two. And where in the month do the five sit?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…From the 9th to the 17th. The whole middle of the month is intention.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Which is the finding, and you could not see it in a list because a '
            + 'list has no columns. ⚠ A list of dates hides its own shape. The '
            + 'same eleven lines in three columns show you that a month has a '
            + 'soft middle, and a soft middle is where a programme fails.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the two predictions?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ The pile marked predicted is not a plan at all; it is a list of '
            + 'things you are exposed to. You do not manage it, you watch it — '
            + 'and you decide now what you will do if each one goes the other '
            + 'way. The clearance taking three days: what then?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then the documents are the 15th and I telephone her on the 12th.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Good. Ms Tannous not ordering again?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then the January figures are the whole of the export business and '
            + 'I have told Nadia to expect more.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: '⚠ Then write that down too, because an exposure you have decided '
            + 'about is not a risk any more, it is a branch. ⚠ And the thing '
            + 'nobody does: sort first, argue second. Half the arguments in this '
            + 'office are two people holding different columns.' }
  ]
});

PBE6.scene('u13-13-4-pair', {
  set: 'diarywall',
  arr: 0,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.71, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'You have eleven lines here. Sort them before we argue. Three columns.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Arranged: the collection, Fadi\'s run, the audit on the 20th, '
            + 'Lina\'s first week. Four.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Intended?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Packing, marking, documents, the fourth-store stocktake, training '
            + 'Lina. Five.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Predicted?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The clearance in a day, and Ms Tannous ordering again. Two.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So four, five, two. And where in the month do the intended ones sit?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…The 9th to the 17th. ⚠ The whole middle of the month is intention.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ And the clearance going to three days — what then?' }
  ]
});

PBE6.scene('u13-13-5', {
  set: 'diarywall',
  arr: 1,
  cast: {
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.71, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'bassel', cam: { shot: 'wide' },
      en: 'You have the 14th at 6.40 in your programme.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is when the vessel sails. It is in the list.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'It is. Read the line under it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '"Cut-off for documents and delivery: 18.00 on the preceding day." '
            + '…So the real date is the 13th at six in the evening.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Twelve and a half hours earlier, and it moves the whole programme '
            + 'by a day. ⚠ Nobody ships at the sailing time. The sailing time is '
            + 'published because it is interesting; the cut-off is what you work '
            + 'to and it is printed smaller.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then my documents date of the 13th is the same day as the cut-off.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'The same day, and your clearance might be three days. So on the '
            + 'worst case you are at the port with the documents at about the '
            + 'time the gate shuts.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Which I would not have known until the 13th.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'You would have known on the 13th at about seven in the evening, '
            + 'which is the worst possible hour to find anything out, because '
            + 'there is nobody to telephone in two countries. ⚠ Read every '
            + 'timetable down to the small print before you put a single date in '
            + 'a programme, and copy the cut-off into the programme and not the '
            + 'headline time.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the next sailing?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'The 21st. So missing the 14th does not cost us a day; it costs us '
            + 'a week, and Ms Tannous has a customer of her own behind her.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is the real figure, then. Not twelve hours. A week.' },
    { who: 'bassel', cam: { shot: 'close' },
      en: '⚠ The cost of missing a fixed point is the gap to the next one, '
            + 'and that is the number to write in the programme — because we will '
            + 'be a little late and we will be seven days late are two different '
            + 'conversations and the timetable decides which one you are having.' }
  ]
});

PBE6.scene('u13-13-5-pair', {
  set: 'diarywall',
  arr: 1,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.71, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'You have told him the transfer clears the same day.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It does. The bank says same day.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Read the line under it.' },
    { who: 'a', cam: { shot: 'mid' },
      en: '"Instructions received after 13.00 are processed the following '
            + 'working day. Saturday is not a working day." …I sent it at two on '
            + 'a Thursday.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So it is processed on the Friday and the money is there on the '
            + 'Sunday. And the next one?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'There is no next one — it is just a day later.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ Then say so, because this is the kind where the cost is a day '
            + 'and not a week. The number is still the number, and you promised a '
            + 'Thursday.' }
  ]
});

PBE6.scene('u13-13-6', {
  set: 'diarywall',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'rest' },
    lina: { rig: 'f-20s-b', name: 'Lina', voice: 'en-NZ-MollyNeural', shirt: '#8a5f7a', shirt2: '#6e4b61',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'This is the programme. Eight lines, the dates, and who does each '
            + 'one. Can you run it on Thursday if I am at the other site?' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'Line three. "Marking, 9th, one to four." If the stencils are not '
            + 'here, what do I do?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…Telephone Baghdad Street and ask Hala to send them with Fadi.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'That is not on the page. Line five. "Load leaves 08.00 on the '
            + '11th." If Fadi is not here at eight?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Wait until half past and then telephone me.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'Also not on the page. And line seven: "Documents to the port '
            + 'before 18.00 on the 13th." If the clearance is not through?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then we have missed the sailing and the next one is the 21st and I '
            + 'have to telephone Ms Tannous, and that one is mine and not yours.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: '⚠ So the page tells me what to do when everything happens, and I '
            + 'need the page for when it does not.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Which is every week.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'It is my fourth day. I do not know what normal looks like, so I '
            + 'cannot tell what is going wrong — ⚠ which means I need the line '
            + 'that says what to do more than you do.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then every line gets three things: who, by when, and what to do if '
            + 'it has not happened by then, and who to tell. Eight lines becomes '
            + 'eight lines with a tail.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'And if I do not know whether something has happened?' },
    { who: 'nour', cam: { shot: 'close' },
      en: '⚠ Then that is the answer to the fourth thing I had not thought '
            + 'of: how you will know. The stencils are here when they are on the '
            + 'bench, not when Hala says she has sent them. ⚠ Who, by when, how '
            + 'you will know, and what to do if not. Four columns, and only the '
            + 'first two were on my page.' }
  ]
});

PBE6.scene('u13-13-6-pair', {
  set: 'diarywall',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Line three. "Marking, 9th, one to four." Abu Yasser does it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'If the stencils are not here, what do I do?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Telephone Hala at Baghdad Street and ask her to send them with Fadi.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'That is not on the page. And how will I know it has happened?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The stencils are on the bench.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Not Hala\'s word — what I can see. Good. And by when do I tell you?' },
    { who: 'a', cam: { shot: 'close' },
      en: 'Two o\'clock, because the generator stops at four and the press '
            + 'runs on it. ⚠ And telephoning Ms Tannous is mine and not yours.' }
  ]
});

PBE6.scene('u13-13-7', {
  set: 'diarywall',
  arr: 0,
  cast: {
    lina: { rig: 'f-20s-b', name: 'Lina', voice: 'en-NZ-MollyNeural', shirt: '#8a5f7a', shirt2: '#6e4b61',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.71, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'lina', cam: { shot: 'wide' },
      en: 'I have read the programme twice. May I ask you four things that '
            + 'are not on it?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Go on.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'Which line is most likely to go wrong?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Line three, the marking, because the stencils are at the other '
            + 'site and the press runs on the generator.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'Which line would be worst if it went wrong?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Line eight. Missing six in the evening on the 13th costs seven '
            + 'days, and everything else on the page costs hours.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'Those are two different lines. So the one I watch is not the one I '
            + 'worry about.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Which is the whole of running anything, and it is not on the '
            + 'page because a page cannot rank its own lines.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'Third: what will look wrong to me but is normal?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The yard being empty at half past eight on a Saturday. Fadi loads '
            + 'at eight and goes, and it looks as though nothing has happened. ⚠ '
            + 'You will think the load has not left. It has.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'And fourth: what will look normal and is wrong?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…The gate sheet being signed when you arrive. ⚠ If it is already '
            + 'signed, nobody counted — and that one I would not have told you, '
            + 'because I have stopped seeing it.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'That is the one I would never have found.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Nor would I, by writing the page. A programme says what to do. A '
            + 'handover says which line to watch, which line to fear, what looks '
            + 'wrong and is not, and what looks right and is not — and the last '
            + 'of those four is the only one that cannot be written down by the '
            + 'person who wrote the programme, because they have stopped being '
            + 'able to see it.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'So the page is for the work and the ninety seconds is for the judgement.' },
    { who: 'nour', cam: { shot: 'close' },
      en: '⚠ And the ninety seconds has to happen with the page in the other '
            + 'person\'s hand, which is why a programme sent by message is a '
            + 'programme nobody reads twice.' }
  ]
});

PBE6.scene('u13-13-7-pair', {
  set: 'diarywall',
  arr: 0,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.71, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'What will look normal and is wrong?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…I cannot think of anything.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Take the week you have just handed me. What do you not look at any more?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The signature column on the goods-in sheet. It is always full.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Always?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…It is always full because Abu Yasser signs the whole page on a '
            + 'Thursday for the week. ⚠ Which means four of the five entries were '
            + 'signed by somebody who was not there when the goods came.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ And that is the answer. It took you forty seconds and you have '
            + 'worked beside it for two years.' }
  ]
});

PBE6.scene('u13-13-7-b', {
  set: 'diarywall',
  arr: 0,
  cast: {
    lina: { rig: 'f-20s-b', name: 'Lina', voice: 'en-NZ-MollyNeural', shirt: '#8a5f7a', shirt2: '#6e4b61',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.71, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'lina', cam: { shot: 'wide' },
      en: 'Which line is most likely to go wrong?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Line three, the marking. The stencils are at the other site and '
            + 'the press runs on the generator, which runs from one until four.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'And which would be worst?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Line eight. Missing six in the evening on the 13th costs seven '
            + 'days, because the next sailing is the 21st. Everything else on the '
            + 'page costs hours.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'What will look wrong to me and be normal?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The yard empty at half past eight on a Saturday. Fadi loads at '
            + 'eight and goes.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'And what will look normal and is wrong?' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'The gate sheet already signed when you arrive. If it is already '
            + 'signed, nobody counted — and I had stopped seeing that one.' }
  ]
});
