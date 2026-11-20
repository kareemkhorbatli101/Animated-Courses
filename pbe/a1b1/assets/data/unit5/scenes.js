/* Unit 5 — the acted dialogues. Every line is the book's own. */
PBE1.scene('u5-5-1', {
  set: 'dock',
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62] },
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62] }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Ammar. This is a delivery note. Look at it.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'It is all English.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Four things. Only four. The name at the top. The date. The '
            + 'quantity. And the line at the bottom.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'The name at the top is the company?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The company that sent the goods. The date is when they sent them.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'And the quantity is how many.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'How many, and of what. Twelve boxes, not twelve.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'And the line at the bottom?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is for your signature. That is the dangerous one.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Why dangerous?' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Because when you sign it, you have said the other three are correct.' }
  ]
});

PBE1.scene('u5-5-1-pair', {
  set: 'dock',
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62] },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62] }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'This is a delivery note. Look at it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It is all English.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Four things. The name at the top. The date. The quantity. And the line.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And the line at the bottom?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That is for your signature. That is the dangerous one.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Why dangerous?' },
    { who: 'a', cam: { shot: 'close' },
      en: 'Because when you sign it, you have said the other three are correct.' }
  ]
});

PBE1.scene('u5-5-2', {
  set: 'dock',
  cast: {
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62] },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62] }
  },
  lines: [
    { who: 'ammar', cam: { shot: 'wide' },
      en: 'The date says 04/03. Is that the fourth of March?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Here, yes. Day first, then month. 04/03 is the fourth of March.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'And somewhere else?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'In America the month is first. 04/03 there is the third of April.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'The same six numbers. A different month.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The same six numbers. And this note came from a company in Beirut, '
            + 'so it is the fourth of March.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'How do I know it is Beirut?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The name at the top. Thing number one. You looked at it, I hope.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'I looked at it.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Then write the month in letters on your own sheet. 4 March. Then '
            + 'nobody can read it two ways.' }
  ]
});

PBE1.scene('u5-5-2-pair', {
  set: 'dock',
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62] },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62] }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The date says 04/03. Is that the fourth of March?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Here, yes. Day first, then month.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And somewhere else?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'In America the month is first. It would be the third of April.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The same six numbers. A different month.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Write the month in letters on your own sheet.' }
  ]
});

PBE1.scene('u5-5-3', {
  set: 'dock',
  cast: {
    driver: { rig: 'm-30s-a', name: 'Driver', voice: 'en-GB-RyanNeural', shirt: '#8a7a2f', shirt2: '#6e6125',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62] },
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62] }
  },
  lines: [
    { who: 'driver', cam: { shot: 'wide' },
      en: 'Twelve. Sign here.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Twelve what?' },
    { who: 'driver', cam: { shot: 'mid' },
      en: 'It says twelve on the paper.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'It says 12. Twelve boxes, or twelve pallets?' },
    { who: 'driver', cam: { shot: 'mid' },
      en: 'Boxes. Twelve boxes. Three pallets, four boxes on each.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Then the paper should say twelve boxes.' },
    { who: 'driver', cam: { shot: 'mid' },
      en: 'Everybody knows it is boxes.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'I am new. I do not know it is boxes. I count twelve boxes.' },
    { who: 'driver', cam: { shot: 'mid' },
      en: 'Count them, then. I have four more stops.' },
    { who: 'ammar', cam: { shot: 'close' },
      en: 'Four more stops is not my problem. Twelve boxes is my problem.' }
  ]
});

PBE1.scene('u5-5-3-pair', {
  set: 'dock',
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62] },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62] }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Twelve. Sign here.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Twelve what?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It says twelve on the paper.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Twelve boxes, or twelve pallets?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Boxes. Three pallets, four on each.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Then the paper should say twelve boxes.' }
  ]
});

PBE1.scene('u5-5-4', {
  set: 'dock',
  cast: {
    driver: { rig: 'm-30s-a', name: 'Driver', voice: 'en-GB-RyanNeural', shirt: '#8a7a2f', shirt2: '#6e6125',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62] },
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62] }
  },
  lines: [
    { who: 'driver', cam: { shot: 'wide' },
      en: 'Sign here. I am late.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'I have not counted it yet. Two minutes.' },
    { who: 'driver', cam: { shot: 'mid' },
      en: 'Two minutes. Everybody says two minutes.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Two minutes. Sixteen boxes. One, two, three…' },
    { who: 'driver', cam: { shot: 'mid' },
      en: 'And?' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Fifteen. Fifteen boxes, not sixteen.' },
    { who: 'driver', cam: { shot: 'mid' },
      en: 'Then write fifteen and sign it.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'I write fifteen. I sign it. And I write one box short next to my name.' },
    { who: 'driver', cam: { shot: 'mid' },
      en: 'You are the first man this month who counted.' },
    { who: 'ammar', cam: { shot: 'close' },
      en: 'I am the first man this month who will not pay for a box he did not get.' }
  ]
});

PBE1.scene('u5-5-4-pair', {
  set: 'dock',
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62] },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62] }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Sign here. I am late.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I have not counted it yet. Two minutes.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Two minutes. Everybody says two minutes.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Two minutes. Sixteen boxes. One, two, three…' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Fifteen. Fifteen, not sixteen.' }
  ]
});

PBE1.scene('u5-5-5', {
  set: 'dock',
  cast: {
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62] },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62] }
  },
  lines: [
    { who: 'ammar', cam: { shot: 'wide' },
      en: 'Nour. The note number. Is it 4417 or 4477?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Let me see. It is handwritten. Somebody wrote it in a hurry.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'The third digit. A one, or a seven?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I cannot tell. And the two numbers are two different deliveries.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'So I telephone Beirut and ask.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Telephone Beirut. Ask for the note number and the date together.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Why both?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Because if the number is wrong and the date is right, you know '
            + 'which delivery it is anyway.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Two facts are better than one.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Two facts are better than one. Last year a digit like that cost us '
            + 'three hours on the telephone.' }
  ]
});

PBE1.scene('u5-5-5-pair', {
  set: 'dock',
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62] },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62] }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The note number. Is it 4417 or 4477?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Let me see. It is handwritten.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The third digit. A one, or a seven?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I cannot tell.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'So I telephone Beirut and ask.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Ask for the number and the date together.' }
  ]
});

PBE1.scene('u5-5-6', {
  set: 'dock',
  cast: {
    driver: { rig: 'm-30s-a', name: 'Driver', voice: 'en-GB-RyanNeural', shirt: '#8a7a2f', shirt2: '#6e6125',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62] },
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62] }
  },
  lines: [
    { who: 'driver', cam: { shot: 'wide' },
      en: 'Six pallets. Where do they go?' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'The note, please.' },
    { who: 'driver', cam: { shot: 'mid' },
      en: 'There is no note. The office did not give me one.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'There are no papers at all?' },
    { who: 'driver', cam: { shot: 'mid' },
      en: 'Nothing. Just the pallets.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Then I write one. Your name, your lorry number, six pallets, today\'s date.' },
    { who: 'driver', cam: { shot: 'mid' },
      en: 'You write it?' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'I write it and you sign it. Then we both have a paper.' },
    { who: 'driver', cam: { shot: 'mid' },
      en: 'Nobody has ever done that.' },
    { who: 'ammar', cam: { shot: 'close' },
      en: 'Then today is a good day. Your name, please. Slowly.' }
  ]
});

PBE1.scene('u5-5-6-pair', {
  set: 'dock',
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62] },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62] }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Six pallets. Where do they go?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'The note, please.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'There is no note. The office did not give me one.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'There are no papers at all?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Nothing. Just the pallets.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Then I write one. Your name, your lorry number, six pallets, today\'s date.' }
  ]
});

PBE1.scene('u5-5-7', {
  set: 'dock',
  cast: {
    driver: { rig: 'm-30s-a', name: 'Driver', voice: 'en-GB-RyanNeural', shirt: '#8a7a2f', shirt2: '#6e6125',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62] },
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62] },
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62] }
  },
  lines: [
    { who: 'driver', cam: { shot: 'wide' },
      en: 'Sign it now. I have four more stops and the Homs road closes at two.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Sixteen boxes. I count sixteen boxes first. Four minutes.' },
    { who: 'driver', cam: { shot: 'mid' },
      en: 'Four minutes here, four minutes at the next place. That is my afternoon.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'He is right about the road. It does close at two.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'And I signed for sixteen last month and got fifteen. It came off my name.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'That is also true. I remember it.' },
    { who: 'driver', cam: { shot: 'mid' },
      en: 'I did not load it. I drive it.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'I know you did not load it. I am not asking you to pay for it.' },
    { who: 'driver', cam: { shot: 'mid' },
      en: 'Then sign it.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Then wait four minutes. Those are the only two things on the table.' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: 'There is a third thing. Nobody has thought of it yet.' }
  ]
});

PBE1.scene('u5-5-7', {
  set: 'dock',
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62] },
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62] }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Note number 4417. Fourth of March.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Four, four, one, seven. 4 March.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The paper says sixteen boxes.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Sixteen boxes. How many did you count?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Fifteen. Line one, the white labels.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'One box short, line one.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the driver signed it as well. Marwan Haddad.' },
    { who: 'ammar', cam: { shot: 'close' },
      en: 'Two signatures. Then it is a fact, not an argument.' }
  ]
});
