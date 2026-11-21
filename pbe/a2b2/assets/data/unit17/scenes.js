/* Unit 17 — the acted dialogues. Every line is the book's own. */
PBE4.scene('u17-17-1', {
  set: 'trainingroom',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'rest' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Mr Ayoub, can I ask you something about next year? I would like to '
            + 'learn the accounts system properly.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'You use it every day.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I use four screens of it. I would like to be able to close the '
            + 'month without asking Nadia three questions, and to do it when she '
            + 'is away.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'And when is she away?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Twice a year for a fortnight, and last September the month closed '
            + 'four days late because of it.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'What would it take?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'There is a course at the Chamber — three weeks, Tuesdays and '
            + 'Thursdays, five to seven. Or Nadia could show me, an hour a week, '
            + 'for about three months. The course costs money and the hour costs '
            + 'her time.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'You have already decided which one you want.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'The course. But I would take the hour, and I thought you should '
            + 'have both to choose from.' }
  ]
});

PBE4.scene('u17-17-1-pair', {
  set: 'trainingroom',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Mr Ayoub, can I ask you something about the spring? I would like '
            + 'to learn the forklift properly.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'You work next to it every day.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I stand next to it. I would like to be able to move pallets when '
            + 'Samir is away, and to do it with a licence rather than because '
            + 'nobody is looking.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And when is he away?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'About three weeks a year, and last year the picking stopped twice '
            + 'for half a day.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'What would it take?' },
    { who: 'a', cam: { shot: 'close' },
      en: 'A two-day course with a test, 600,000, or a licensed man '
            + 'supervising me for a month. The course costs money and the month '
            + 'costs his time.' }
  ]
});

PBE4.scene('u17-17-2', {
  set: 'trainingroom',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' },
    woman: { rig: 'f-50s-a', name: 'Woman', voice: 'en-GB-SoniaNeural', shirt: '#8a5a6e', shirt2: '#6e4757',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Good morning. I am telephoning about the accounts systems course. '
            + 'Could you give me the details?' },
    { who: 'woman', cam: { shot: 'mid' },
      en: 'It runs for three weeks, Tuesdays and Thursdays, from five to '
            + 'seven in the evening. Six sessions. It starts on the fourth of '
            + 'March.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Three weeks, Tuesdays and Thursdays, five to seven, six sessions, '
            + 'starting the fourth of March. And the fee?' },
    { who: 'woman', cam: { shot: 'mid' },
      en: 'Four hundred and twenty thousand, including the handouts. The test '
            + 'is on the last evening and the certificate comes about three weeks '
            + 'later.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Two things that are not on the notice. Is there a session on the '
            + 'year-end, and what happens if I miss one evening?' },
    { who: 'woman', cam: { shot: 'mid' },
      en: 'The year-end is the fifth session, which is the one most people '
            + 'come for. If you miss an evening you can take it with the next '
            + 'course, but not the test — you must do the test with your own '
            + 'group.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'So I can miss one evening but not the last one. Thank you — that '
            + 'is exactly what I needed and neither of them is on the notice.' }
  ]
});

PBE4.scene('u17-17-2-pair', {
  set: 'trainingroom',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Good morning. I am telephoning about the forklift course. Could '
            + 'you give me the details?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It runs for two days, Saturday and Sunday, from eight to three. '
            + 'The test is at the end of the second day.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Two days, Saturday and Sunday, eight to three, test on the Sunday. '
            + 'And the fee?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Six hundred thousand, including the licence application.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Two things that are not on the notice. Can the test be retaken, '
            + 'and is the licence accepted outside Damascus?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'The test can be retaken once, with a later group, for a quarter of '
            + 'the fee. The licence is national.' }
  ]
});

PBE4.scene('u17-17-3', {
  set: 'trainingroom',
  arr: 2,
  cast: {
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'hala', cam: { shot: 'wide' },
      en: 'The course starts on Tuesday. What do I need?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'You need to be there at twenty to five, not at five — the room is '
            + 'on the second floor and the lift is slow. You need your identity '
            + 'card for the door, and you need the receipt for the fee.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'I have the receipt. Do I need a laptop?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'You do not need a laptop. You need a pen and something to write '
            + 'on, and the handouts are given out there.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'And do I need to tell the counter I am leaving early on Tuesdays?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'You need to tell Abu Yasser, not the counter, because he does the '
            + 'rota. Tell him once now and once again on the first Monday, '
            + 'because he will have written it down and forgotten which Tuesday '
            + 'it starts.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Anything else?' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'The lift needs a coin sometimes. Take the stairs.' }
  ]
});

PBE4.scene('u17-17-3-pair', {
  set: 'trainingroom',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'I start on Sunday. What do I need?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'You need to be at the gate by half past seven, not at eight — the '
            + 'gate man leaves at eight and after that you wait. You need your '
            + 'identity card and you need flat shoes if you go into the warehouse '
            + 'at all.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I have the card. Do I need lunch?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'You do not need lunch. You need nothing else; there is a canteen '
            + 'and a notebook is given to you.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And do I need to tell anybody about Thursday afternoons?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'You need to tell Abu Yasser, not the office, because he does the '
            + 'rota. Tell him now and again on the first Wednesday.' }
  ]
});

PBE4.scene('u17-17-4', {
  set: 'trainingroom',
  arr: 0,
  cast: {
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'rest' },
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'hala', cam: { shot: 'wide' },
      en: 'Is the invoice screen difficult?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'It is easy once you have done it twice. The first time it is '
            + 'confusing, and it is confusing for a reason: there are three '
            + 'buttons that all look like Save and only one of them is.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Which one?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'The middle one. The left one saves a draft that nobody ever looks '
            + 'at again, and the right one closes without saving and asks you '
            + 'nothing.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'That is not easy. That is badly made.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'It is badly made and it is easy once you know. Those are two '
            + 'different sentences and people say the first when they mean the '
            + 'second, and then nobody asks for it to be fixed.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'So is it hard or not?' },
    { who: 'nadia', cam: { shot: 'close' },
      en: 'It is hard for one week and easy for ever. And it is impossible '
            + 'for somebody who has not been shown, which is not the same as '
            + 'hard.' }
  ]
});

PBE4.scene('u17-17-4-pair', {
  set: 'trainingroom',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Is the stock screen difficult?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It is easy once you have used it for a fortnight. The first week '
            + 'it is confusing, and it is confusing for a reason: the search '
            + 'finds the code, not the name.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Where is the code?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'On the shelf label. Not on the box, and not on the delivery note.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That is not difficult. That is hidden.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'It is hidden and it is easy once you know. Two different sentences '
            + '— and if we only say the second one, nobody ever puts the code on '
            + 'the boxes.' }
  ]
});

PBE4.scene('u17-17-5', {
  set: 'trainingroom',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' },
    fadi: { rig: 'm-30s-a', name: 'Fadi', voice: 'en-US-GuyNeural', shirt: '#8a4b2f', shirt2: '#6f3c25',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The training list asks what everybody is good at and bad at. What '
            + 'would you put?' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'Put nothing. I am a driver.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Fadi. You know the name of every shopkeeper on four rounds and you '
            + 'have never once gone to the wrong gate in six years.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'That is not a skill. That is just knowing.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is the most valuable thing in the yard. What are you bad at?' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'Writing. My notes are short and when somebody reads them later '
            + 'they do not understand. I have started drawing instead — a little '
            + 'map at the bottom of the note for the next driver.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then you are bad at writing and good at solving it, and the second '
            + 'one is rarer. I am going to put both, in your words.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'Put the map. Do not put that I am bad at writing.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'I am putting both, because the map only makes sense if the other '
            + 'half is there.' }
  ]
});

PBE4.scene('u17-17-5-pair', {
  set: 'trainingroom',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The training list asks what everybody is good at. What would you put?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Put nothing. I stack pallets.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'You can tell by the sound whether a pallet is badly stacked. '
            + 'Nobody else in this building can do that.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'That is not a skill. That is just years.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It is a skill that takes years, which is a different thing. What '
            + 'are you bad at?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'The screen. I photograph the shelf label instead of writing the '
            + 'code down, because I get the digits the wrong way round.' },
    { who: 'a', cam: { shot: 'close' },
      en: 'Then you are bad at the screen and good at working round it, and '
            + 'the second one is rarer.' }
  ]
});

PBE4.scene('u17-17-6', {
  set: 'trainingroom',
  arr: 2,
  cast: {
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'rest' },
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'hala', cam: { shot: 'wide' },
      en: 'Nadia, could you show me how to put a credit against an invoice? '
            + 'Ten minutes, any time before Thursday.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Now is fine. Sit here. Do not watch me — do it, and I will tell '
            + 'you when you are wrong.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'I am writing the steps as I go. One: find the invoice by number, '
            + 'not by name.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Why not by name?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Because there are three Haddads. Two: open credits. Three: the '
            + 'amount goes in without the minus sign; the screen adds it.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'That is the one that catches everybody.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Four: save with the middle button. Five: check the statement, '
            + 'because the credit shows on the statement and not on the invoice.' },
    { who: 'nadia', cam: { shot: 'close' },
      en: 'Now do one more while I am here, and then read your five steps '
            + 'back to me. If they are right, put them in the folder — the next '
            + 'person will have them and neither of us will have to do this '
            + 'again.' }
  ]
});

PBE4.scene('u17-17-6-pair', {
  set: 'trainingroom',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Abu Yasser, could you show me how to book goods in? Ten minutes, '
            + 'any time before Thursday.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Now. Sit here. Do not watch me — do it, and I will tell you when '
            + 'you are wrong.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I am writing the steps. One: take the delivery number from the note.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Not from the box.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Two: the box code is not the delivery number — if you enter it you '
            + 'make a second record that nobody can delete. Three: count before '
            + 'you enter, not after.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'That is the one that catches everybody.' },
    { who: 'a', cam: { shot: 'close' },
      en: 'Four: enter the count, not the quantity on the note. Five: print '
            + 'and sign the sheet.' }
  ]
});

PBE4.scene('u17-17-7', {
  set: 'trainingroom',
  arr: 0,
  cast: {
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'abu_yasser', cam: { shot: 'wide' },
      en: 'The notice on the board. Stock control systems, two days. It says '
            + 'for those already working at an intermediate level. That is not '
            + 'me.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Read me the session list.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Counting methods and variance · cycle counting · reconciling the '
            + 'count to the record · reporting discrepancies.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Abu Yasser, you have been doing the first and the last of those '
            + 'for thirty-one years. You invented the reporting here — there was '
            + 'no form until you made one.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'On paper. It says systems.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It says systems because the room will have screens in it. The '
            + 'thing being taught is counting, and you are the person other '
            + 'people in that room will ask at the break.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'And intermediate level?' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'It means not a beginner. It is there to stop somebody coming who '
            + 'has never counted anything. It is not there to stop you. The word '
            + 'that would stop you is not on the notice at all — it is in your '
            + 'head, and it is the word systems.' }
  ]
});

PBE4.scene('u17-17-7-pair', {
  set: 'trainingroom',
  arr: 0,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'It says for staff with a good working level of English. Mine is '
            + 'not good. It is just enough.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Read me the sessions.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Taking a complaint, apologising and offering, explaining a delay, '
            + 'following up in writing, telephone practice.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'You took eleven complaints last month and four of them were in '
            + 'English. A good working level means somebody who can already have '
            + 'the conversation badly — that is what the course is for. If your '
            + 'English were good you would not need it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And the writing one?' },
    { who: 'a', cam: { shot: 'close' },
      en: 'That is the session you would get the most from, and it is the one '
            + 'you would not have gone for.' }
  ]
});

PBE4.scene('u17-17-7-b', {
  set: 'trainingroom',
  arr: 0,
  cast: {
    woman: { rig: 'f-50s-a', name: 'Woman', voice: 'en-GB-SoniaNeural', shirt: '#8a5a6e', shirt2: '#6e4757',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'woman', cam: { shot: 'wide' },
      en: 'It runs for three weeks, on Tuesdays and Thursdays, from five to '
            + 'seven in the evening. Six sessions in all. It starts on the fourth '
            + 'of March.' },
    { who: 'woman', cam: { shot: 'mid' },
      en: 'The fee is four hundred and twenty thousand including the '
            + 'handouts, and enrolment closes a fortnight before it begins.' },
    { who: 'woman', cam: { shot: 'close' },
      en: 'The test is on the last evening, and you must take it with your own group.' }
  ]
});
