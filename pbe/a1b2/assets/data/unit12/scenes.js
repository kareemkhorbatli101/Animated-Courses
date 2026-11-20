/* Unit 12 — the acted dialogues. Every line is the book's own. */
PBE2.scene('u12-12-1', {
  set: 'meeting',
  arr: 0,
  cast: {
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'phone', hold: 'phone' },
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'abu_yasser', cam: { shot: 'wide' },
      en: 'Ammar. From Sunday you are on the early shift and Samih is on the late one.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'So we will not see each other.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'You will not see each other. You leave him a note. Four lines.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Four?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Who it is for. What you did. What you did not do, and why. What he must do.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'And that is enough?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'That is enough. Unit nine said three sentences at a shift change '
            + 'and you remembered all three.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'So why four now?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Because now you are writing it instead of saying it, and a written '
            + 'note needs a name on the top. Three things plus who it is for.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'And the last line?' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: 'The last line is the point. The other three tell him what '
            + 'happened. The last one tells him what to do.' }
  ]
});

PBE2.scene('u12-12-1-pair', {
  set: 'meeting',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'phone', hold: 'phone' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'From Sunday you are on the early shift. You leave a note. Four lines.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Four?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Who it is for. What you did. What you did not do, and why. What he must do.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And that is enough?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That is enough.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'And the last line?' }
  ]
});

PBE2.scene('u12-12-2', {
  set: 'meeting',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'phone', hold: 'phone' },
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'There was a note on the bench for two days. Nobody picked it up.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'I wrote that. On Tuesday.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It says NOTE at the top. Just NOTE.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Everybody who comes in the morning reads the bench.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Everybody who comes in the morning looked at it and thought it was '
            + 'for somebody else.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'All four of them.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'All four of them. A note for everybody is a note for nobody. Unit seven.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'The four men and the crushed cartons.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The same thing. Write To: Samih and Samih picks it up in four seconds.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Two words.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Two words. And if you do not know who, write To: whoever opens the '
            + 'back store first. That is still a name.' }
  ]
});

PBE2.scene('u12-12-2-pair', {
  set: 'meeting',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'phone', hold: 'phone' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'There was a note on the bench for two days. Nobody picked it up.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I wrote that. On Tuesday.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It says NOTE at the top. Just NOTE.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Everybody who comes in the morning reads the bench.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Everybody looked at it and thought it was for somebody else.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'All four of them.' }
  ]
});

PBE2.scene('u12-12-3', {
  set: 'meeting',
  arr: 2,
  cast: {
    samih: { rig: 'm-20s-b', name: 'Samih', voice: 'en-US-EricNeural', shirt: '#2f7f6a', shirt2: '#256455',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'phone', hold: 'phone' },
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'samih', cam: { shot: 'wide' },
      en: 'Your note says I did the shelves.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'I did the shelves.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'There are four rows and four shelves in each. Sixteen.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'I did rows one to three. Twelve of the sixteen.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'Then write that. I did the shelves means I have to check all sixteen.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'How long does that take?' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'Twenty minutes. Which is longer than it took you to write the note.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Rows one to three. Six words.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'Six words, and I start at row four.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'And if I had written nothing at all?' },
    { who: 'samih', cam: { shot: 'close' },
      en: 'Then I check sixteen and I do not know whether you came in.' }
  ]
});

PBE2.scene('u12-12-3-pair', {
  set: 'meeting',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'phone', hold: 'phone' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Your note says I did the shelves.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I did the shelves.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'There are four rows and four shelves in each. Sixteen.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I did rows one to three. Twelve of the sixteen.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Then write that. I did the shelves means I have to check all sixteen.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'How long does that take?' }
  ]
});

PBE2.scene('u12-12-4', {
  set: 'meeting',
  arr: 0,
  cast: {
    samih: { rig: 'm-20s-b', name: 'Samih', voice: 'en-US-EricNeural', shirt: '#2f7f6a', shirt2: '#256455',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'phone', hold: 'phone' },
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'samih', cam: { shot: 'wide' },
      en: 'Row four. You did not do it.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'I did not do row four because the ladder was in the yard.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'Good. So I bring the ladder in first, before I start.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'I thought you would be annoyed.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'Why? You told me where to start and what I need.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'The because felt like an excuse when I wrote it.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'The because is not for you. It is for me. Without it I come in, go '
            + 'to row four, and walk back out to the yard.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Two walks.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'Two walks and four minutes, because you did not write eight words.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'So the excuse is the useful part.' },
    { who: 'samih', cam: { shot: 'close' },
      en: 'It is not an excuse. It is the next thing I need to know.' }
  ]
});

PBE2.scene('u12-12-4-pair', {
  set: 'meeting',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'phone', hold: 'phone' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Row four. You did not do it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I did not do row four because the ladder was in the yard.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Good. So I bring the ladder in first, before I start.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I thought you would be annoyed.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Why? You told me where to start and what I need.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'The because felt like an excuse when I wrote it.' }
  ]
});

PBE2.scene('u12-12-5', {
  set: 'meeting',
  arr: 1,
  cast: {
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'phone', hold: 'phone' },
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'ammar', cam: { shot: 'wide' },
      en: 'Line four. Do I write please do row four or you must do row four?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Please. He is a man you work with, not a man you give orders to.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'And when is it must?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'When somebody will get hurt. You must not open the paint store '
            + 'alone. That is Unit ten, and it stays must.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'So please for work and must for safety.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Please for work. Must for safety. And nothing at all is the worst '
            + 'of the three.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Nothing at all?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'A note that says what happened and does not say what to do. He '
            + 'reads it, he knows, and he does nothing.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Because nobody asked him.' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: 'Because nobody asked him. And then on Tuesday you ask him why row '
            + 'four is not done.' }
  ]
});

PBE2.scene('u12-12-5-pair', {
  set: 'meeting',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'phone', hold: 'phone' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Line four. Do I write please do row four or you must do row four?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Please. He is a man you work with.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And when is it must?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'When somebody will get hurt.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'So please for work and must for safety.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'And nothing at all is the worst of the three.' }
  ]
});

PBE2.scene('u12-12-6', {
  set: 'meeting',
  arr: 2,
  cast: {
    samih: { rig: 'm-20s-b', name: 'Samih', voice: 'en-US-EricNeural', shirt: '#2f7f6a', shirt2: '#256455',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'phone', hold: 'phone' },
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'samih', cam: { shot: 'wide' },
      en: 'Your note says A.Z. and nothing else.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'You know it is me.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'I know it is you. I do not know when you wrote it.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Does it matter?' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'The note says the ladder is in the yard. If you wrote it at eight '
            + 'this morning, it is still there. If you wrote it at four, Hani has '
            + 'brought it in.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'I wrote it at four.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'Then the ladder came in at half past four and your note is already wrong.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'So the time tells you how much to believe it.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'The time tells me how old it is. A note six hours old is news. A '
            + 'note two days old is history.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'A. Zreik, Sunday, sixteen hundred.' },
    { who: 'samih', cam: { shot: 'close' },
      en: 'Three things. And now I know to check the yard before I believe you.' }
  ]
});

PBE2.scene('u12-12-6-pair', {
  set: 'meeting',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'phone', hold: 'phone' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Your note says A.Z. and nothing else.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'You know it is me.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I know it is you. I do not know when you wrote it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Does it matter?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The note says the ladder is in the yard. If you wrote it at eight, '
            + 'it is still there. If you wrote it at four, Hani has brought it '
            + 'in.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'So the time tells you how much to believe it.' }
  ]
});

PBE2.scene('u12-12-7', {
  set: 'meeting',
  arr: 0,
  cast: {
    hani: { rig: 'm-50s-a', name: 'Hani', voice: 'en-US-BrianNeural', shirt: '#7a5c3f', shirt2: '#604832',
      full: true, scale: 0.46, bottom: 46, at: [0.33, 0.62],
      pose: 'phone' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'phone', hold: 'phone' },
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'hold', hold: 'slip' },
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Ammar\'s note on Sunday. It saved us a morning.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Which note?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'To: Samih. I did rows one to three. I did not do row four because '
            + 'the ladder was in the yard. Please do row four when the ladder '
            + 'comes back. A. Zreik, Sunday, 16.00.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Four lines. And?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Samih was ill on Monday. Hani came in instead.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Hani cannot read English.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Hani cannot read English. He brought it to me at ten past six and '
            + 'I read it to him.' },
    { who: 'hani', cam: { shot: 'mid' },
      en: 'I knew it was a note with a name on it, so I knew it mattered.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And he brought the ladder in before he started. Row four was done by seven.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'But I wrote it to Samih. Samih was not there.' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: 'You wrote it to Samih and it worked for Hani. Say why.' }
  ]
});

PBE2.scene('u12-12-7-b', {
  set: 'meeting',
  arr: 0,
  cast: {
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'phone', hold: 'phone' },
    samih: { rig: 'm-20s-b', name: 'Samih', voice: 'en-US-EricNeural', shirt: '#2f7f6a', shirt2: '#256455',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'hala', cam: { shot: 'wide' },
      en: '(reading her note aloud) To Samih. I did the morning bake, eighty '
            + 'loaves. I did not wash the trays, because the water went off at '
            + 'half past five. Please wash them before you start, and put the '
            + 'eighty loaves out at seven. H. Mourad, Friday, 09.15.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'Four lines and a time.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Four lines and a time. And if you are not in, whoever is will take '
            + 'it to Nour.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'Because it has a name on it.' },
    { who: 'hala', cam: { shot: 'close' },
      en: 'Because it has a name on it.' }
  ]
});
