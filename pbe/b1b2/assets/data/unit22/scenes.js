/* Unit 22 — the acted dialogues. Every line is the book's own. */
PBE6.scene('u22-22-1', {
  set: 'interview',
  arr: 0,
  cast: {
    lina: { rig: 'f-20s-b', name: 'Lina', voice: 'en-NZ-MollyNeural', shirt: '#8a5f7a', shirt2: '#6e4b61',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'lina', cam: { shot: 'wide' },
      en: 'What will you ask me on Thursday?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Four questions, and you can prepare all four. What have you '
            + 'done. How you did it. What came of it. ⚠ And what went wrong and '
            + 'what you did about it.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'That is the one everybody dreads.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ It is the easiest of the four, because you have an answer and '
            + 'most people have none. The nine scrap cartons were marked from '
            + 'stencils you did not choose, and you found it. ⚠ You also sent the '
            + 'April date list a day late and Ms Tannous telephoned about it.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'Should I say that?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Say it before I do. A shortcoming you raise yourself is '
            + 'information; ⚠ the same shortcoming raised by me is a '
            + 'disagreement.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'And the fifth question?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ I do not know what it is. That is what makes it the fifth. ⚠ It '
            + 'will be something I think of in the room, because of something you '
            + 'say — and it is the only part of the hour that is not a '
            + 'performance.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'Then how do I prepare for it?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ You cannot, and you should not try. ⚠ What you can do is have '
            + 'the facts of your own six months in your head — dates, numbers, '
            + 'what happened afterwards — so that whatever I ask, you are not '
            + 'inventing.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'Dates and numbers for everything?' },
    { who: 'nour', cam: { shot: 'close' },
      en: '⚠ For four things, not forty. ⚠ Four examples with dates and '
            + 'figures will carry any interview in this trade, and twenty '
            + 'examples with none will carry nothing. ⚠ A prepared answer is not '
            + 'a speech; it is four facts you cannot be shaken off.' }
  ]
});

PBE6.scene('u22-22-1-pair', {
  set: 'interview',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'And is there anything you would do differently?' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Yes — and one thing I got wrong. The April date list went out on '
            + 'the 21st and it should have gone by the 20th.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I had not asked about that.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ I know. Ms Tannous telephoned on the 22nd, and it is the only '
            + 'time she has ever telephoned about a date.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And now?' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ I write the list on the 18th and it sits on the desk for two days.' },
    { who: 'a', cam: { shot: 'mid' },
      en: '(says nothing)' },
    { who: 'b', cam: { shot: 'close' },
      en: '(says nothing)' }
  ]
});

PBE6.scene('u22-22-2', {
  set: 'interview',
  arr: 1,
  cast: {
    attar: { rig: 'm-50s-b', name: 'Mr Attar', voice: 'en-US-AndrewMultilingualNeural', shirt: '#4a5a74', shirt2: '#3a4a60',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'attar', cam: { shot: 'wide' },
      en: 'For the record: what do you actually do here?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ It looks like typing and it is writing.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Explain that.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ What takes the time is deciding what the sentence has to say and '
            + 'to whom. The typing of a bench page is twenty minutes. ⚠ The '
            + 'deciding is two days and a first-off.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'And how much of your week is that?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ About a day and a half of five. The rest is the telephone, the '
            + 'orders and the gate.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Most people in your position would have said administration.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Administration is the word for the desk and not for the work. ⚠ '
            + 'It is the writing that stops the nine cartons, not the filing — '
            + 'and a job description that says administration cannot be used to '
            + 'hire anybody.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'So what should it say?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Writes the instructions, the programmes and the letters that '
            + 'commit the company, and keeps the records that prove them. ⚠ '
            + 'Nineteen words, and a stranger could tell from it what would go '
            + 'wrong if nobody did it.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'That is a test I had not thought of.' },
    { who: 'nour', cam: { shot: 'close' },
      en: '⚠ It is the only one I use. ⚠ Read a job description and ask what '
            + 'breaks if this person is away for a month. Administration breaks '
            + 'nothing you can name; ⚠ the instructions and the letters break '
            + 'everything, in about nine days.' }
  ]
});

PBE6.scene('u22-22-2-pair', {
  set: 'interview',
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
      en: 'His job is security.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ What breaks if he is away for a month?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Nothing, really. The gate stays shut.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Then security is the word for the chair and not for the work. '
            + 'What does he actually do?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…He knows every driver by name and he knows which ones try the side gate.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ And if he is away a month?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '⚠ Somebody gets in, in about a fortnight, and we will not know who.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ Then that is the job description, and it has a fortnight in it.' }
  ]
});

PBE6.scene('u22-22-3', {
  set: 'interview',
  arr: 2,
  cast: {
    lina: { rig: 'f-20s-b', name: 'Lina', voice: 'en-NZ-MollyNeural', shirt: '#8a5f7a', shirt2: '#6e4b61',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'lina', cam: { shot: 'wide' },
      en: 'May I say that the gate-sheet change saved money? I am sure it did.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'How much?' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'I have no idea. It stopped the shortage queries.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Then say what you know and mark the edge of it. It stopped about '
            + 'two shortage queries a year; ⚠ I have not costed them.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'That sounds weak next to saved the company money.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ It sounds weak and it cannot be taken away from you. A great '
            + 'deal of money invites one question — how much? — ⚠ and the answer '
            + 'I do not know undoes the whole sentence and some of the ones round '
            + 'it.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'How approximate may I be?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ As approximate as the truth is, and no more. About two a year if '
            + 'you counted two in six months. ⚠ Roughly for a figure you have '
            + 'estimated. ⚠ In the region of for something somebody told you. And '
            + 'never approximately about a thing you counted exactly.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'And the three faults in the first-off?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Three of three. You counted them. ⚠ Say three, flatly, with no '
            + 'about in front of it — because an about in front of an exact '
            + 'figure makes a reader doubt the exact ones too.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'What about out of?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Out of is the strongest form available to somebody with small '
            + 'numbers. Nine cartons out of a hundred. Two shortage queries out '
            + 'of about forty deliveries. ⚠ A percentage hides the size of the '
            + 'sample and out of shows it — and at our size the sample is always '
            + 'the interesting half.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'Even when it makes the number look small?' },
    { who: 'nour', cam: { shot: 'close' },
      en: '⚠ Especially then. ⚠ Four out of eleven is believable and '
            + 'thirty-six per cent of a year is not, and the second one will be '
            + 'asked about for twenty minutes.' }
  ]
});

PBE6.scene('u22-22-3-pair', {
  set: 'interview',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Our reject rate is about four per cent.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Out of how many?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Eleven. Four of the eleven split.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Then say four out of eleven.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That sounds much worse.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ It sounds accurate, which is different. ⚠ Four per cent of a '
            + 'year sounds like a process; four out of eleven sounds like eleven '
            + 'cartons on a Tuesday — and that is what it was.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And if somebody asks whether eleven is enough to judge by?' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ Then they have asked the right question, which is the whole '
            + 'purpose of printing the eleven.' }
  ]
});

PBE6.scene('u22-22-4', {
  set: 'interview',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The second applicant had five weeks at a plastics works and six '
            + 'years before that at the tannery.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'And the five weeks?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ He told me about the five weeks in the third minute, before I '
            + 'had looked at the dates.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'What did he say?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ You will want to know why I left the plastics works after five '
            + 'weeks. The honest answer is that I was put on a machine I had not '
            + 'been shown and I made four hundred pieces wrong, and when I said '
            + 'so they said nothing, and I left on the Friday. ⚠ Then he stopped.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'And you believed him.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ I believed him because he stopped. ⚠ The people who are lying '
            + 'keep going — they add the manager\'s character, and the other '
            + 'workers, and the money. ⚠ He gave me one sentence of fact and one '
            + 'of what was said to him, and then nothing.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'What would you have thought if you had found the five weeks yourself?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ I would have asked about it in the fortieth minute and he would '
            + 'have answered the same words, and I would not have believed a '
            + 'syllable of them. ⚠ The identical answer is worth two different '
            + 'things depending on who raised it.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'And the four hundred wrong pieces?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ They are the reason to hire him, and he does not know that. ⚠ A '
            + 'man who made four hundred pieces wrong from a page he had not been '
            + 'shown, and said so, is the man I want at the press at two in the '
            + 'morning — because he is the one who will stop.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Did he ask anything?' },
    { who: 'nour', cam: { shot: 'close' },
      en: '⚠ He asked what happened to the man who marked the nine cartons in '
            + 'January. ⚠ And when I told him that nobody had blamed him and the '
            + 'line he worked from was mine, he asked whether that was written '
            + 'down anywhere.' }
  ]
});

PBE6.scene('u22-22-4-pair', {
  set: 'interview',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'I left because the supervisor had a grudge against me from the '
            + 'first week, and the other two in my section will tell you the '
            + 'same, and the money was late twice —' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Stop. Which of that is a fact about you?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…That I left after five weeks.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ And what did you do that you would do again?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I said the machine setting was wrong. It was wrong.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Then that is the answer: I said the setting was wrong, nobody '
            + 'answered, and I left on the Friday. ⚠ Two sentences, no names, no '
            + 'money.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'But the supervisor really did —' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ I believe you, and it is still the sentence that costs you the job.' }
  ]
});

PBE6.scene('u22-22-5', {
  set: 'interview',
  arr: 1,
  cast: {
    lina: { rig: 'f-20s-b', name: 'Lina', voice: 'en-NZ-MollyNeural', shirt: '#8a5f7a', shirt2: '#6e4b61',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'lina', cam: { shot: 'wide' },
      en: 'Should I ask anything on Thursday? It is my own review, not an interview.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Ask three things, and in an interview ask the same three. ⚠ What '
            + 'happened to the person who did this job before. What goes wrong '
            + 'most often. And who decides.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'What does the first one tell me?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Whether they left, were promoted, or are still here and have '
            + 'been moved sideways — and the answer comes out in the first four '
            + 'words, before anybody has arranged it. ⚠ It is also the only '
            + 'question that cannot be answered with a policy.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'And what goes wrong most often?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ It tells you whether they know. A place that says nothing really '
            + 'either has no faults, which is impossible, ⚠ or does not count '
            + 'them — and you now know which of your six months it would have '
            + 'been like.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'And who decides?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ It tells you how long everything will take. ⚠ If the answer is '
            + 'one name, things take a day; if it is a committee or we discuss '
            + 'it, things take a month — and that is the whole texture of the '
            + 'work, from a seven-word question.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'Will they not think I am interrogating them?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ They will if you ask all three in a row at the end. ⚠ Put each '
            + 'one where it belongs in the conversation — the first when they '
            + 'describe the job, the second when they describe the difficulties, '
            + 'the third when they talk about a decision.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'And if the answers are bad?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Then you have learned something before you start, which is the '
            + 'point. ⚠ The three questions are not to impress anybody; they are '
            + 'to find out whether you want the job — and a candidate who asks '
            + 'them and listens to the answers is making a decision, not a '
            + 'display.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'What should I not ask?' },
    { who: 'nour', cam: { shot: 'close' },
      en: '⚠ Anything you could read. ⚠ The hours, the pay scale, the '
            + 'holidays, what the company does — asking a question whose answer '
            + 'is printed is the one thing that counts against you, because it '
            + 'says you did not read what you were sent.' }
  ]
});

PBE6.scene('u22-22-5-pair', {
  set: 'interview',
  arr: 1,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'And what goes wrong most often?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Nothing really. It runs itself.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ May I ask it smaller — what went wrong last week?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…The Thursday order went out without the invoice.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And how often does that happen?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '⚠ I could not tell you. Two or three times a month, perhaps.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Thank you — that is what I wanted to know.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That it happens?' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ That nobody counts it.' }
  ]
});

PBE6.scene('u22-22-6', {
  set: 'interview',
  arr: 2,
  cast: {
    attar: { rig: 'm-50s-b', name: 'Mr Attar', voice: 'en-US-AndrewMultilingualNeural', shirt: '#4a5a74', shirt2: '#3a4a60',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'attar', cam: { shot: 'wide' },
      en: 'The form has three boxes: communication, teamwork and commitment. '
            + 'Fill them in.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ May I write something else as well? ⚠ I can fill those three '
            + 'boxes with sentences that nobody could disagree with and nobody '
            + 'could check.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Try the first one.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ I communicate clearly with colleagues and customers. ⚠ It is '
            + 'true, it is unfalsifiable, and it would be true of a worse '
            + 'administrator than me.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'And what would you write instead?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ The warehouse gets the day\'s orders by nine; until February it '
            + 'was after eleven. The gate sheet shows the time. ⚠ A stranger with '
            + 'an hour could check that.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'That is one claim. How many will you write?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Six, and each one with a number, a date or a place to look. ⚠ '
            + 'And one of the six against me, because a page of six good things '
            + 'is read as advertising and a page with one bad thing in it is read '
            + 'as a record.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Which bad thing?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ The nine cartons came from a line I wrote, and I have put it in '
            + 'the fourth box with the date and where the post-mortem is filed. ⚠ '
            + 'It is also the most useful thing on the page, because the repair '
            + 'is written next to it.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Most people would not put that in writing.' },
    { who: 'nour', cam: { shot: 'close' },
      en: '⚠ Most people are protecting the wrong thing. ⚠ A page nobody can '
            + 'check protects me from being contradicted and from being believed, '
            + 'and I would rather be checked. ⚠ And in two years somebody will '
            + 'read this page without me in the room — the only part of it that '
            + 'will still work then is the part with a number in it.' }
  ]
});

PBE6.scene('u22-22-6-pair', {
  set: 'interview',
  arr: 2,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'You have six good things. Give me a seventh that is against you.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Why would I do that?' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Because six good things is advertising and five good things with '
            + 'one bad one is a record.' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…The nine cartons came from a line I wrote.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ With its date and where it is filed.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'January; the post-mortem is in the March file; the repaired line '
            + 'is step 2 of the bench page.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ And nothing after it. ⚠ No explanation.' },
    { who: 'a', cam: { shot: 'close' },
      en: '⚠ Nothing after it.' }
  ]
});

PBE6.scene('u22-22-7', {
  set: 'interview',
  arr: 0,
  cast: {
    lina: { rig: 'f-20s-b', name: 'Lina', voice: 'en-NZ-MollyNeural', shirt: '#8a5f7a', shirt2: '#6e4b61',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'lina', cam: { shot: 'wide' },
      en: 'May I say something about the form? ⚠ I have filled it in and I '
            + 'could have filled it in on my first day.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Go on.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: '⚠ It has three lines: communication, teamwork, commitment. ⚠ There '
            + 'is no answer to any of them that would be wrong. I wrote I '
            + 'communicate clearly, I work well with others and I am committed to '
            + 'the company — ⚠ and all three are true, and none of them is about '
            + 'me.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The free-text box at the bottom is where the work goes.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: '⚠ Then the form has one real question and three decorations, and '
            + 'the one real question has four lines of space.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What did you put in it?' },
    { who: 'lina', cam: { shot: 'mid' },
      en: '⚠ The gate-sheet line, in my twelfth week. And the first-off. ⚠ '
            + 'Neither of them is anything the form asked about.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And neither of them fits communication, teamwork or commitment.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: '⚠ The gate sheet is the opposite of teamwork. ⚠ Everybody on the '
            + 'team knew the line meant cartons and I was the only person who did '
            + 'what it said — and that is the entire value of what I did. ⚠ A '
            + 'form that scored me on fitting in would have marked me down for '
            + 'the best week I have had here.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So what should the form ask?' },
    { who: 'lina', cam: { shot: 'mid' },
      en: '⚠ Three questions with wrong answers available. What have you '
            + 'changed, with its date? What has gone wrong, and what did you do? '
            + '⚠ And what is on your page that a stranger could check? ⚠ A '
            + 'question nobody can fail is a question nobody has answered.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the three lines?' },
    { who: 'lina', cam: { shot: 'close' },
      en: '⚠ Leave them, because somebody above us designed them and they '
            + 'cost four minutes. ⚠ But the file should not pretend they are the '
            + 'review — the review is the box at the bottom, and it should be at '
            + 'the top and have a page.' }
  ]
});

PBE6.scene('u22-22-7-pair', {
  set: 'interview',
  arr: 0,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'Question one of your form: Does the employee show initiative?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Yes.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ What would a wrong answer look like?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…There is not one. Nobody has ever written no.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Then it is a decoration. Where does the work actually go?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'A box called any other comments, at the bottom, two lines.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ And how much space do the decorations have?' },
    { who: 'a', cam: { shot: 'close' },
      en: '⚠ A page and a half.' }
  ]
});

PBE6.scene('u22-22-7-b', {
  set: 'interview',
  arr: 0,
  cast: {
    lina: { rig: 'f-20s-b', name: 'Lina', voice: 'en-NZ-MollyNeural', shirt: '#8a5f7a', shirt2: '#6e4b61',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'lina', cam: { shot: 'wide' },
      en: 'I have filled the form in and I could have filled it in on my '
            + 'first day. It has three lines: communication, teamwork, '
            + 'commitment.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And?' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'There is no answer to any of them that would be wrong. I wrote '
            + 'that I communicate clearly, that I work well with others and that '
            + 'I am committed to the company, and all three are true, and none of '
            + 'them is about me.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The free-text box at the bottom is where the work goes.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'Then the form has one real question and three decorations, and the '
            + 'real one has four lines of space. I put the gate-sheet line in it, '
            + 'from my twelfth week, and the first-off report.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Neither of which the form asked about.' },
    { who: 'lina', cam: { shot: 'close' },
      en: 'And the gate sheet is the opposite of teamwork. Everybody on the '
            + 'team knew the line meant cartons and I was the only person who did '
            + 'what it said. A form that scored me on fitting in would have '
            + 'marked me down for the best week I have had here.' }
  ]
});
