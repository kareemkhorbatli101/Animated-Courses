/* Unit 9 — the acted dialogues. Every line is the book's own. */
PBE2.scene('u9-9-1', {
  set: 'yard',
  arr: 0,
  cast: {
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'read', hold: 'clipboard' },
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'greet' }
  },
  lines: [
    { who: 'abu_yasser', cam: { shot: 'wide' },
      en: 'At four o\'clock yesterday. Where was everybody?' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'I was in the back store. On row three.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'And Samih?' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'He was with me. We were both on row three.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Fadi?' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Fadi was on the Homs road. He left at two.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'And Nour and Majd?' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Nour was in the office. Majd was at the counter.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'So nobody was in the yard at four.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Nobody was in the yard. Why?' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: 'Because somebody left the big gate open and I want to know who was near it.' }
  ]
});

PBE2.scene('u9-9-1-pair', {
  set: 'yard',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'read', hold: 'clipboard' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'greet' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'At four o\'clock yesterday. Where was everybody?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I was in the back store. On row three.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And Samih?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'He was with me. We were both on row three.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Fadi?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Fadi was on the Homs road. He left at two.' }
  ]
});

PBE2.scene('u9-9-2', {
  set: 'yard',
  arr: 1,
  cast: {
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'read', hold: 'clipboard' },
    samih: { rig: 'm-20s-b', name: 'Samih', voice: 'en-US-EricNeural', shirt: '#2f7f6a', shirt2: '#256455',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'greet' }
  },
  lines: [
    { who: 'abu_yasser', cam: { shot: 'wide' },
      en: 'The night shift. Tell me.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'I started at ten. I opened the back store and I checked the shelves.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Then?' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'At eleven the light over the loading door went out. I stopped work.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'You stopped?' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'I stopped. I took the torch from the counter. I finished row one '
            + 'with the torch.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'And then?' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'Then the lorry arrived at one. Early. I opened the gate and we '
            + 'unloaded it in the dark.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'In the dark.' },
    { who: 'samih', cam: { shot: 'close' },
      en: 'In the dark. I gave the driver the note at two and he left. Then I '
            + 'closed the gate and I finished at six.' }
  ]
});

PBE2.scene('u9-9-2-pair', {
  set: 'yard',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'read', hold: 'clipboard' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'greet' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The night shift. Tell me.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I started at ten. I opened the back store and I checked the shelves.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Then?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'At eleven the light went out. I stopped work.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And then?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'I took the torch. Then the lorry arrived at one.' }
  ]
});

PBE2.scene('u9-9-3', {
  set: 'yard',
  arr: 2,
  cast: {
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'read', hold: 'clipboard' },
    samih: { rig: 'm-20s-b', name: 'Samih', voice: 'en-US-EricNeural', shirt: '#2f7f6a', shirt2: '#256455',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'greet' }
  },
  lines: [
    { who: 'abu_yasser', cam: { shot: 'wide' },
      en: 'The light went out last night at eleven.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'Last night, and the night before, and Tuesday.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Three nights?' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'Three nights. I thought somebody had told you.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Nobody told me anything. I thought it was last night.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'On Tuesday it went out at half past ten. On Wednesday at eleven. '
            + 'Last night at eleven.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Three times, at about the same time, three nights running.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'Is that different from one night?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'One night is a bulb. Three nights at the same time is the wiring, '
            + 'and the wiring is a man from outside.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'So the WHEN changes what it is.' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: 'The when changes what it is. One night I send you a bulb. Three '
            + 'nights I shut the loading door.' }
  ]
});

PBE2.scene('u9-9-3-pair', {
  set: 'yard',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'read', hold: 'clipboard' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'greet' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The light went out last night at eleven.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Last night, and the night before, and Tuesday.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Three nights?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Three nights. I thought somebody had told you.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Three times, at about the same time, three nights running.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Is that different from one night?' }
  ]
});

PBE2.scene('u9-9-4', {
  set: 'yard',
  arr: 0,
  cast: {
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'read', hold: 'clipboard' },
    samih: { rig: 'm-20s-b', name: 'Samih', voice: 'en-US-EricNeural', shirt: '#2f7f6a', shirt2: '#256455',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'greet' }
  },
  lines: [
    { who: 'abu_yasser', cam: { shot: 'wide' },
      en: 'Line six. I did not count it.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'I did not count it. We unloaded in the dark with one torch.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Forty cartons in the dark.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'Forty on the paper. I did not count forty. I counted nothing.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Did you sign the note?' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'I signed it and I wrote not counted, no light beside my name. Like '
            + 'Unit five.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Good. And you wrote it on the sheet as well.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'That line was the hardest one to write.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'I know. And it is the only line on that sheet I am going to use.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'Use it for what?' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: 'To tell the office why we are counting forty cartons again this '
            + 'morning. Without that line I would not know to.' }
  ]
});

PBE2.scene('u9-9-4-pair', {
  set: 'yard',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'read', hold: 'clipboard' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'greet' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Line six. I did not count it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I did not count it. We unloaded in the dark with one torch.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Forty in the dark.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Forty on the paper. I did not count forty. I counted nothing.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Did you sign the note?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'I signed it and I wrote not counted, no light beside my name.' }
  ]
});

PBE2.scene('u9-9-5', {
  set: 'yard',
  arr: 1,
  cast: {
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'read', hold: 'clipboard' },
    samih: { rig: 'm-20s-b', name: 'Samih', voice: 'en-US-EricNeural', shirt: '#2f7f6a', shirt2: '#256455',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'greet' }
  },
  lines: [
    { who: 'abu_yasser', cam: { shot: 'wide' },
      en: 'Samih. What happened?' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'The light went out at eleven. I took the torch. The lorry came at '
            + 'one, two hours early, and we unloaded in the dark. I did not count '
            + 'it. I signed the note and wrote not counted, no light.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '(says nothing)' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'And the light has been out three nights, not one. I should have '
            + 'told you on Tuesday.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Yes.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'Are you not going to ask me anything else?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'You told me everything in forty seconds. What would I ask?' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'Most men ask who did it.' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: 'Nobody did it. A light went out. And if I had asked who left the '
            + 'gate open you would have told me about the gate and not about the '
            + 'light.' }
  ]
});

PBE2.scene('u9-9-5-pair', {
  set: 'yard',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'read', hold: 'clipboard' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'greet' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Samih. What happened?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'The light went out at eleven. I took the torch. The lorry came at '
            + 'one and we unloaded in the dark. I did not count it.' },
    { who: 'a', cam: { shot: 'mid' },
      en: '(says nothing — four seconds)' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And it has been out three nights, not one.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Yes.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Are you not going to ask me anything else?' }
  ]
});

PBE2.scene('u9-9-6', {
  set: 'yard',
  arr: 2,
  cast: {
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'read', hold: 'clipboard' },
    samih: { rig: 'm-20s-b', name: 'Samih', voice: 'en-US-EricNeural', shirt: '#2f7f6a', shirt2: '#256455',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'greet' }
  },
  lines: [
    { who: 'ammar', cam: { shot: 'wide' },
      en: 'Samih. You are going home. What do I need to know?' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'Three sentences. The light over the loading door went out at '
            + 'eleven and it is still out.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Still out. Right.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'The lorry came two hours early and we unloaded forty cartons in '
            + 'the dark. I did not count them.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Not counted. Forty on the paper.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'And row four is not finished. Rows one to three are done.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Three sentences. Light, lorry, row four.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'Light, lorry, row four. Nine words each and you will still have '
            + 'them at nine o\'clock.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Why three?' },
    { who: 'samih', cam: { shot: 'close' },
      en: 'Because I tried six once and he remembered two. Three is what a '
            + 'man carries across a shift change.' }
  ]
});

PBE2.scene('u9-9-6-pair', {
  set: 'yard',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'read', hold: 'clipboard' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'greet' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Samih. You are going home. What do I need to know?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Three sentences. The light went out at eleven and it is still out.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Still out. Right.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'The lorry came two hours early and we unloaded forty. I did not count them.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Not counted.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'And row four is not finished.' }
  ]
});

PBE2.scene('u9-9-7', {
  set: 'yard',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'read', hold: 'clipboard' },
    samih: { rig: 'm-20s-b', name: 'Samih', voice: 'en-US-EricNeural', shirt: '#2f7f6a', shirt2: '#256455',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'greet' },
    hani: { rig: 'm-50s-a', name: 'Hani', voice: 'en-US-BrianNeural', shirt: '#7a5c3f', shirt2: '#604832',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Thursday night. The lorry. Samih says one o\'clock. Hani says three.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'It came at one. I opened the gate at one.' },
    { who: 'hani', cam: { shot: 'mid' },
      en: 'I got there at three and we unloaded it. Three o\'clock.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'You got there at three. It came at one.' },
    { who: 'hani', cam: { shot: 'mid' },
      en: 'Then it sat in the yard for two hours?' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'It sat in the yard for two hours. I could not unload forty cartons '
            + 'alone in the dark, so I waited for you.' },
    { who: 'hani', cam: { shot: 'mid' },
      en: 'I did not know that. Nobody told me it had been there since one.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So both of you are right, and the lorry was in the yard for two '
            + 'hours with nobody near it.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'I wrote 01.00 lorry arrived. I did not write that I waited.' },
    { who: 'hani', cam: { shot: 'mid' },
      en: 'And I wrote 03.00 unloaded. I did not write when I got there.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Two true sheets. And between them, two hours that nobody can account for.' }
  ]
});

PBE2.scene('u9-9-7-b', {
  set: 'yard',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'read', hold: 'clipboard' },
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'greet' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Hala. What happened?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'I started at four in the morning. The water stopped at half past five.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '(says nothing)' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'And it stopped on Sunday too, and last Wednesday. Three mornings.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Three.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'I did not wash the trays — there was no water. I baked on the '
            + 'dirty ones and I wrote it down.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Three sentences for the next person?' },
    { who: 'hala', cam: { shot: 'close' },
      en: 'Water, trays, the cold room. The water is still off, the trays are '
            + 'not washed, and I did not finish the cold room.' }
  ]
});
