/* Unit 6 — the acted dialogues. Every line is the book's own. */
PBE1.scene('u6-6-1', {
  set: 'meeting',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'phone', hold: 'phone' },
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Ammar. The store telephone. You answer it this week.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Me? I cannot talk on the telephone.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Three things. Say the company. Say good morning. Then stop and listen.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Sham Trading, good morning.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Slowly. Sham Trading is two words and the caller has never heard them.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Sham… Trading. Good morning.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Better. After twelve o\'clock say good afternoon.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'And if I do not understand?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Sorry? Again, please. The same words as Unit one. They still work.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Sham Trading, good morning. Then stop and listen.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Then stop and listen. That is the hard part.' }
  ]
});

PBE1.scene('u6-6-1-pair', {
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
      en: '(ring ring)' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Sham Trading, good morning.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Is that Sham Trading?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Yes. Sham Trading, good morning.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Sorry, I did not hear the name.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Sham… Trading. Good morning. (slowly)' }
  ]
});

PBE1.scene('u6-6-2', {
  set: 'meeting',
  arr: 1,
  cast: {
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'phone', hold: 'phone' },
    caller: { rig: 'm-30s-a', name: 'Caller', voice: 'en-GB-ThomasNeural', shirt: '#5a5a5a', shirt2: '#484848',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'ammar', cam: { shot: 'wide' },
      en: 'Sham Trading, good morning.' },
    { who: 'caller', cam: { shot: 'mid' },
      en: 'Good morning. Is Mr Khalil there?' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Your name, please.' },
    { who: 'caller', cam: { shot: 'mid' },
      en: 'Ghassan Mouallem.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Sorry? Again, please.' },
    { who: 'caller', cam: { shot: 'mid' },
      en: 'Mouallem.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Can you spell it, please?' },
    { who: 'caller', cam: { shot: 'mid' },
      en: 'M, O, U, A, L, L, E, M.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'M, O, U, A, L, L, E, M. Eight letters. Mouallem.' },
    { who: 'caller', cam: { shot: 'mid' },
      en: 'That is it.' },
    { who: 'ammar', cam: { shot: 'close' },
      en: 'Thank you. One moment, please.' }
  ]
});

PBE1.scene('u6-6-2-pair', {
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
      en: '(ring ring)' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Sham Trading, good morning.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Is Mr Khalil there?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Your name, please.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Mouallem.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Can you spell it, please?' }
  ]
});

PBE1.scene('u6-6-3', {
  set: 'meeting',
  arr: 2,
  cast: {
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'phone', hold: 'phone' },
    caller: { rig: 'm-30s-a', name: 'Caller', voice: 'en-GB-ThomasNeural', shirt: '#5a5a5a', shirt2: '#484848',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'ammar', cam: { shot: 'wide' },
      en: 'One moment, please.' },
    { who: 'caller', cam: { shot: 'mid' },
      en: 'Yes.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: '(ten seconds — he finds a pen and the slip pad) Thank you for '
            + 'waiting. Your name again, please.' },
    { who: 'caller', cam: { shot: 'mid' },
      en: 'Mouallem.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Mr Khalil is not here. Can I take a message?' },
    { who: 'caller', cam: { shot: 'mid' },
      en: 'How long was that?' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Ten seconds. I had no pen.' },
    { who: 'caller', cam: { shot: 'mid' },
      en: 'Ten seconds is nothing. Last week somebody left me for four minutes.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Four minutes is not one moment.' },
    { who: 'caller', cam: { shot: 'close' },
      en: 'Four minutes is not one moment. Write that on your wall.' }
  ]
});

PBE1.scene('u6-6-3-pair', {
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
      en: 'One moment, please.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Yes.' },
    { who: 'a', cam: { shot: 'mid' },
      en: '(ten seconds, counted out loud) Thank you for waiting. Your name '
            + 'again, please.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Mouallem.' },
    { who: 'a', cam: { shot: 'close' },
      en: 'Mr Khalil is not here. Can I take a message?' }
  ]
});

PBE1.scene('u6-6-4', {
  set: 'meeting',
  arr: 0,
  cast: {
    caller: { rig: 'm-30s-a', name: 'Caller', voice: 'en-GB-ThomasNeural', shirt: '#5a5a5a', shirt2: '#484848',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'phone', hold: 'phone' },
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'caller', cam: { shot: 'wide' },
      en: 'Is Mr Khalil there?' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'He is not here. He is in Homs until Thursday.' },
    { who: 'caller', cam: { shot: 'mid' },
      en: 'Thursday. And Mrs Mansour?' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'She is here. She is at lunch. She is back at two.' },
    { who: 'caller', cam: { shot: 'mid' },
      en: 'Two. Good. I ring back at two.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Or I take a message and she has it at two.' },
    { who: 'caller', cam: { shot: 'mid' },
      en: 'A message, then.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'One moment, please. I have the pad.' },
    { who: 'caller', cam: { shot: 'mid' },
      en: 'You did not say she was in a meeting.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'She is at lunch. Why would I say a meeting?' },
    { who: 'caller', cam: { shot: 'close' },
      en: 'Everybody says a meeting. Nobody is ever at lunch.' }
  ]
});

PBE1.scene('u6-6-4-pair', {
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
      en: 'Is Mr Khalil there?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'He is not here. He is in Homs until Thursday.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Thursday. And Mrs Mansour?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'She is here. She is at lunch. She is back at two.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Two. I ring back at two.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Or I take a message and she has it at two.' }
  ]
});

PBE1.scene('u6-6-5', {
  set: 'meeting',
  arr: 1,
  cast: {
    caller: { rig: 'm-30s-a', name: 'Caller', voice: 'en-GB-ThomasNeural', shirt: '#5a5a5a', shirt2: '#484848',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'phone', hold: 'phone' },
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'caller', cam: { shot: 'wide' },
      en: 'My number is 0944 112 233.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'One moment, please. (he writes) Again, please.' },
    { who: 'caller', cam: { shot: 'mid' },
      en: 'Zero nine four four, one one two, two three three.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Zero nine four four, one one two, two three three.' },
    { who: 'caller', cam: { shot: 'mid' },
      en: 'That is it.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'The last part. Two three three, or two two three?' },
    { who: 'caller', cam: { shot: 'mid' },
      en: 'Two, then double three.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Double three at the end. Zero nine four four, one one two, two three three.' },
    { who: 'caller', cam: { shot: 'mid' },
      en: 'Correct. You are the first man here who read it back.' },
    { who: 'ammar', cam: { shot: 'close' },
      en: 'My supervisor says a number nobody read back is a number nobody has.' }
  ]
});

PBE1.scene('u6-6-5-pair', {
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
      en: 'My number is 0944 112 233.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'One moment, please. Again, please.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Zero nine four four … one one two … two three three.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Zero nine four four … one one two … two three three.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That is it.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'The last part. Two three three, or two two three?' }
  ]
});

PBE1.scene('u6-6-6', {
  set: 'meeting',
  arr: 2,
  cast: {
    caller: { rig: 'm-30s-a', name: 'Caller', voice: 'en-GB-ThomasNeural', shirt: '#5a5a5a', shirt2: '#484848',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'phone', hold: 'phone' },
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'caller', cam: { shot: 'wide' },
      en: 'So she has it at two?' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'I will tell her at two. And the slip goes on her desk now.' },
    { who: 'caller', cam: { shot: 'mid' },
      en: 'Both?' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Both. The slip is if I forget. I am new and I might forget.' },
    { who: 'caller', cam: { shot: 'mid' },
      en: 'You will not forget.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Last Tuesday I forgot one. Abu Yasser found the slip on Wednesday.' },
    { who: 'caller', cam: { shot: 'mid' },
      en: 'So the slip worked.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'The slip worked. A day late.' },
    { who: 'caller', cam: { shot: 'mid' },
      en: 'A day late is better than never.' },
    { who: 'ammar', cam: { shot: 'close' },
      en: 'A day late lost us a lorry. So now I do both and I tell her twice.' }
  ]
});

PBE1.scene('u6-6-6-pair', {
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
      en: 'So she has it at two?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I will tell her at two. And the slip goes on her desk now.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Both?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Both. The slip is if I forget.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'You will not forget.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Last Tuesday I forgot one. So now I do both.' }
  ]
});

PBE1.scene('u6-6-7', {
  set: 'meeting',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'phone', hold: 'phone' },
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'hold', hold: 'slip' },
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Ammar. The Mouallem message. Three days ago.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'I took it. Everything. The name spelled, the number read back, the '
            + 'invoice, the time he rings.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I know. I am holding the slip. It is perfect.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Then what is wrong?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It was under the slip pad. I found it this morning.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'I put it on your desk. I remember putting it on your desk.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'You did. And I put the pad on top of it when I came back from lunch.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'And I told you at two as well. I did both.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'You told me at two and I was on the other telephone. I did not hear you.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'So the slip was perfect, the man did both, and the message is '
            + 'three days late.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'And the invoice is paid. Four boxes we did not get.' }
  ]
});

PBE1.scene('u6-6-7', {
  set: 'meeting',
  arr: 0,
  cast: {
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'phone', hold: 'phone' },
    caller: { rig: 'm-30s-a', name: 'Caller', voice: 'en-GB-ThomasNeural', shirt: '#5a5a5a', shirt2: '#484848',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'ammar', cam: { shot: 'wide' },
      en: 'Sham Trading, good morning.' },
    { who: 'caller', cam: { shot: 'mid' },
      en: 'Good morning. Is Mrs Mansour there?' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'She is at lunch. She is back at two. Your name, please.' },
    { who: 'caller', cam: { shot: 'mid' },
      en: 'Qassar. Q, A, S, S, A, R.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Q, A, S, S, A, R. Six letters. Qassar. Your number, please.' },
    { who: 'caller', cam: { shot: 'mid' },
      en: 'Zero nine three two, four four five, six six one.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Zero nine three two, four four five, six six one. Is that it?' },
    { who: 'caller', cam: { shot: 'mid' },
      en: 'That is it. Tell her I ring back at four.' },
    { who: 'ammar', cam: { shot: 'close' },
      en: 'I will tell her at two, and the slip goes on the spike now. Four o\'clock.' }
  ]
});
