/* Unit 10 — the acted dialogues. Every line is the book's own. */
PBE3.scene('u10-10-1', {
  set: 'clinic',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'hold', hold: 'box' },
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.64, 0.62],
      pose: 'read', hold: 'sheet' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Abu Yasser, you\'re walking strangely. What\'s wrong?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Nothing. My back hurts a little.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'A little. Since when?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Since Tuesday. The pallet with the tiles. It isn\'t the first time '
            + 'and it won\'t be the last.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Tuesday is four days. Have you got pain when you stand, or when you lift?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'When I bend. Standing is fine.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then you should see somebody at the clinic.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'For a back? They will tell me to rest for a week and I will not '
            + 'rest for a week.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'They might tell you something else. And if they tell you to rest, '
            + 'you can decide not to — but at least you\'ll be deciding with '
            + 'information.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'You argue like my daughter.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Your daughter is right. I\'ll telephone them at four.' }
  ]
});

PBE3.scene('u10-10-1-pair', {
  set: 'clinic',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'hold', hold: 'box' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.64, 0.62],
      pose: 'read', hold: 'sheet' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'You\'re holding your arm. What\'s wrong?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Nothing. My shoulder hurts a little.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'A little. Since when?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Since the long Aleppo run. Ten days. It isn\'t the first time.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Ten days. Have you got pain when you drive, or when you turn?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'When I turn to reverse. Driving forward is fine.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Then you should see somebody.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'For a shoulder? They will tell me to stop driving.' },
    { who: 'a', cam: { shot: 'close' },
      en: 'They might tell you something else.' }
  ]
});

PBE3.scene('u10-10-2', {
  set: 'clinic',
  arr: 1,
  cast: {
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.64, 0.62],
      pose: 'hold', hold: 'box' },
    fadi: { rig: 'm-30s-a', name: 'Fadi', voice: 'en-US-GuyNeural', shirt: '#8a4b2f', shirt2: '#6f3c25',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'read', hold: 'sheet' }
  },
  lines: [
    { who: 'abu_yasser', cam: { shot: 'wide' },
      en: 'Fadi. Put it down. Put it down now.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'It isn\'t heavy.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'It is forty kilos and your back is bent like a question mark. You '
            + 'shouldn\'t lift that alone, and you shouldn\'t lift it like that '
            + 'even with two people.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'How should I lift it?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Three things. You should bend your knees, not your back. You '
            + 'should keep it close to you — a box held away from the body is '
            + 'three times the weight. And you should turn with your feet, not '
            + 'your shoulders.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'Knees, close, feet.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Knees, close, feet. And if it is awkward, not heavy — awkward — '
            + 'you should get somebody even if you can lift it.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'Did somebody teach you that?' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: 'Nobody taught me anything. I learned it from my own back, at '
            + 'thirty-one, and I have paid for that lesson every winter since. '
            + 'You get it free.' }
  ]
});

PBE3.scene('u10-10-2-pair', {
  set: 'clinic',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.64, 0.62],
      pose: 'hold', hold: 'box' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'read', hold: 'sheet' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Samir. Stop. Stop now.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It isn\'t far.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'You\'re leaning out past the ladder and both your feet are on one '
            + 'rung. You shouldn\'t reach from a ladder, and you shouldn\'t be up '
            + 'there alone.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'How should I do it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Three things. You should move the ladder instead of reaching — it '
            + 'takes nine seconds. You should keep three points of contact, two '
            + 'feet and a hand. And you should have somebody at the bottom.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Move, three, hold.' },
    { who: 'a', cam: { shot: 'close' },
      en: 'Move, three, hold. And if it feels awkward, you should come down '
            + 'even if you can reach it.' }
  ]
});

PBE3.scene('u10-10-3', {
  set: 'clinic',
  arr: 2,
  cast: {
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'hold', hold: 'box' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'read', hold: 'sheet' }
  },
  lines: [
    { who: 'abu_yasser', cam: { shot: 'wide' },
      en: 'Nour, the paper from the clinic. The writing is a doctor\'s writing.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Let me look. Two things. The white tablets: one tablet, twice a '
            + 'day, after food — morning and evening.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'After food. Not on an empty stomach.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Never on an empty stomach; it says so twice. And you must finish '
            + 'all of them, ten days, even if your back is fine after four.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Why, if I am better?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Because this one is not only for the pain. If you stop at four '
            + 'days the swelling comes back, and it comes back worse.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'And the second thing?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'A cream, three times a day, on the skin only — not near your eyes. '
            + 'And it says here: no heavy lifting for ten days. That isn\'t the '
            + 'tablets. That\'s the doctor.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Ten days. Read me the first one again.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'One white tablet, twice a day, after food, for ten days, all of '
            + 'them. Say it back to me.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'One, twice a day, after food, ten days, all of them. You make '
            + 'everybody repeat everything.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'I do. It works on telephone numbers and it works on your back.' }
  ]
});

PBE3.scene('u10-10-3-pair', {
  set: 'clinic',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'hold', hold: 'box' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'read', hold: 'sheet' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Rasha, the paper from the clinic. The writing is a doctor\'s writing.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Let me look. Two things. The capsules: one, three times a day, with water.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Three times. Not two.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Three — morning, afternoon, evening. And you must take all of '
            + 'them, seven days, even if the cough stops on day three.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Why, if it stops?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Because the cough stopping is not the same as the infection '
            + 'stopping. If you stop at three days it comes back, and the second '
            + 'time it is harder to treat.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And the second thing?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'The syrup, ten millilitres, at night only. It makes you sleepy — '
            + 'don\'t drive the next morning until you know how it affects you. '
            + 'Say it back to me.' }
  ]
});

PBE3.scene('u10-10-4', {
  set: 'clinic',
  arr: 0,
  cast: {
    clinic_desk: { rig: 'f-50s-a', name: 'Clinic', voice: 'en-IE-EmilyNeural', shirt: '#4f8a7a', shirt2: '#3f6e61',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'hold', hold: 'box' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.64, 0.62],
      pose: 'read', hold: 'sheet' }
  },
  lines: [
    { who: 'clinic_desk', cam: { shot: 'wide' },
      en: 'Mezzeh Clinic, good afternoon.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Good afternoon. I\'d like to make an appointment, please — not for '
            + 'me, for a colleague.' },
    { who: 'clinic_desk', cam: { shot: 'mid' },
      en: 'Of course. What\'s the name?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Yasser Khalil. K-H-A-L-I-L.' },
    { who: 'clinic_desk', cam: { shot: 'mid' },
      en: 'Khalil. And what\'s it about?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'His back. It\'s been bad since Tuesday and it hurts when he bends.' },
    { who: 'clinic_desk', cam: { shot: 'mid' },
      en: 'I can give you Thursday at eleven.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Thursday is four more days. Have you got anything earlier? He\'s '
            + 'fifty-two and he lifts for a living.' },
    { who: 'clinic_desk', cam: { shot: 'mid' },
      en: 'Let me look… there\'s a space tomorrow at nine, if he can come early.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'He\'s awake at five. Tomorrow at nine, please.' },
    { who: 'clinic_desk', cam: { shot: 'mid' },
      en: 'Tomorrow at nine, Yasser Khalil. Can he bring his identity card '
            + 'and any old X-rays?' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Identity card and old X-rays. Tomorrow at nine. Thank you very much.' }
  ]
});

PBE3.scene('u10-10-4-pair', {
  set: 'clinic',
  arr: 0,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'hold', hold: 'box' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.64, 0.62],
      pose: 'read', hold: 'sheet' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'Al-Amal Dental, good morning.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Good morning. I\'d like to make an appointment, please. Samir '
            + 'Khalil, K-H-A-L-I-L.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And what\'s it about?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'A tooth, on the left at the back. It\'s been bad since Friday.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I can give you the twenty-eighth.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That\'s two weeks. Have you got anything earlier? It\'s kept me '
            + 'awake for three nights.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Let me look… there\'s a cancellation tomorrow at half past seven '
            + 'in the morning.' },
    { who: 'a', cam: { shot: 'close' },
      en: 'Half past seven is fine. Tomorrow at seven thirty, Samir Khalil. Thank you.' }
  ]
});

PBE3.scene('u10-10-5', {
  set: 'clinic',
  arr: 1,
  cast: {
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.64, 0.62],
      pose: 'hold', hold: 'box' },
    hala_counter: { rig: 'f-20s-b', name: 'Hala', voice: 'en-CA-ClaraNeural', shirt: '#a8763f', shirt2: '#866032',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'read', hold: 'sheet' }
  },
  lines: [
    { who: 'abu_yasser', cam: { shot: 'wide' },
      en: 'STOP. Don\'t move.' },
    { who: 'hala_counter', cam: { shot: 'mid' },
      en: 'What? What is it?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Don\'t step back. There\'s a strap on the floor behind your heel '
            + 'and a pallet edge behind that. Look down. Now step forward, '
            + 'towards me.' },
    { who: 'hala_counter', cam: { shot: 'mid' },
      en: 'Oh.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Yes. Oh.' },
    { who: 'hala_counter', cam: { shot: 'mid' },
      en: 'I\'m sorry.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Don\'t be sorry — you didn\'t put it there. I\'m not angry with '
            + 'you and I want you to hear that, because the next time you see '
            + 'something on the floor I want you to say it out loud even if it '
            + 'isn\'t yours.' },
    { who: 'hala_counter', cam: { shot: 'mid' },
      en: 'All right.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'And one thing for the future. When somebody shouts stop in this '
            + 'warehouse, don\'t turn round to look. Stop first, ask after. '
            + 'Turning round is how people fall.' },
    { who: 'hala_counter', cam: { shot: 'mid' },
      en: 'Stop first, ask after.' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: 'Stop first, ask after. Now help me pick up every strap in this '
            + 'aisle, and then we will both have a glass of tea, because my heart '
            + 'is going like a lorry.' }
  ]
});

PBE3.scene('u10-10-5-pair', {
  set: 'clinic',
  arr: 1,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.64, 0.62],
      pose: 'hold', hold: 'box' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'read', hold: 'sheet' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'STOP. Don\'t pick that up.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'What? What is it?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Don\'t touch the handle. It\'s been over the flame for ten minutes '
            + 'and there\'s no cloth on it. Look at it. Now take the cloth from '
            + 'the hook first.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Oh. I\'m sorry.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Don\'t be sorry — you didn\'t put it there, and whoever turned '
            + 'that handle out should have turned it in. I\'m not angry with you, '
            + 'because I want you to shout at me when you see one.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'All right.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'And one thing for the future. Turn every handle in, every time, '
            + 'even for a second. Handles in, always.' }
  ]
});

PBE3.scene('u10-10-6', {
  set: 'clinic',
  arr: 2,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'hold', hold: 'box' },
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.64, 0.62],
      pose: 'read', hold: 'sheet' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'Abu Yasser. How is it?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'It is a back. It will be a back tomorrow as well.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Take your time. I mean that — don\'t come back and do it again in June.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'The stock count is on the fifteenth.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'The stock count has been on the fifteenth for thirty years and it '
            + 'will be there next month too. Don\'t think about the warehouse. '
            + 'That is an instruction, and it is the only one I will give you '
            + 'this year.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Hm.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Get well soon. And telephone me if the clinic says anything you don\'t like.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Abu Yasser? It\'s Nour. Two things, quickly, and then I\'ll go.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Say them.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'One: Fadi is doing the gate and I have written down everything you '
            + 'told me about the night deliveries, so nobody is guessing. Two: '
            + 'I\'m going past the pharmacy at five. Do you need anything?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'The cream, if they have the big one.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'The big one. I\'ll leave it with your daughter. Take care — and '
            + 'don\'t tidy anything.' }
  ]
});

PBE3.scene('u10-10-6-pair', {
  set: 'clinic',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'hold', hold: 'box' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'read', hold: 'sheet' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Samir. How is it?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It is flu. It will be flu tomorrow as well.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Take your time. I mean that — don\'t come in on Thursday and give '
            + 'it to everybody.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'The Thursday report.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The Thursday report is moved to Monday. I moved it, not you, and '
            + 'nobody asked me to. Don\'t think about it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And Mr Darwish? He only talks to me.' },
    { who: 'a', cam: { shot: 'close' },
      en: 'I telephoned him this morning and told him you were ill and that '
            + 'he should ask for me until you are back. He said to tell you to '
            + 'rest. Two things, quickly: the report is moved, and Darwish knows. '
            + 'I\'m passing your street at six — do you need bread?' }
  ]
});

PBE3.scene('u10-10-7', {
  set: 'clinic',
  arr: 0,
  cast: {
    fadi: { rig: 'm-30s-a', name: 'Fadi', voice: 'en-US-GuyNeural', shirt: '#8a4b2f', shirt2: '#6f3c25',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'hold', hold: 'box' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.64, 0.62],
      pose: 'read', hold: 'sheet' }
  },
  lines: [
    { who: 'fadi', cam: { shot: 'wide' },
      en: 'Nour, there\'s a new notice by the door with numbers on it. '
            + 'Twenty-five kilos. Does that mean I can\'t lift the cement any '
            + 'more?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'No. Let me tell you what it actually says.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'Please.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Twenty-five kilos isn\'t a limit on you. It\'s the weight at which '
            + 'you stop lifting alone. Over twenty-five, you get somebody — '
            + 'that\'s all it means.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'And if nobody is there?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then you wait, or you split the load. Waiting four minutes is '
            + 'cheaper than Abu Yasser\'s ten days, and he could lift anything at '
            + 'your age.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'And this line — "report immediately". Report to who? It sounds like trouble.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It isn\'t trouble. It means tell Abu Yasser the same hour, not the '
            + 'next morning — because the first ten minutes decide the next ten '
            + 'days. Nobody writes your name anywhere.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'Nobody writes my name.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Nobody writes your name. The only thing that gets written is what '
            + 'was on the floor and what we changed. We did it last week for Hala '
            + 'and nobody was blamed.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'All right. Over twenty-five, get somebody. Hurt, tell him the same hour.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'That\'s the whole notice. The rest is for the head office.' }
  ]
});

PBE3.scene('u10-10-7-b', {
  set: 'clinic',
  arr: 0,
  cast: {
    clinic_desk: { rig: 'f-50s-a', name: 'Clinic', voice: 'en-IE-EmilyNeural', shirt: '#4f8a7a', shirt2: '#3f6e61',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'hold', hold: 'box' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.64, 0.62],
      pose: 'read', hold: 'sheet' }
  },
  lines: [
    { who: 'clinic_desk', cam: { shot: 'wide' },
      en: 'Mezzeh Clinic, good afternoon.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Good afternoon. I\'d like to make an appointment, please — for a '
            + 'colleague. Yasser Khalil, K-H-A-L-I-L.' },
    { who: 'clinic_desk', cam: { shot: 'mid' },
      en: 'And what\'s it about?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'His back. It\'s been bad since Tuesday.' },
    { who: 'clinic_desk', cam: { shot: 'mid' },
      en: 'I can give you Thursday at eleven.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Have you got anything earlier? He lifts for a living.' },
    { who: 'clinic_desk', cam: { shot: 'mid' },
      en: 'There\'s a space tomorrow at nine.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Tomorrow at nine, please. Thank you.' }
  ]
});
