/* Unit 24 — the acted dialogues. Every line is the book's own. */
PBE6.scene('u24-24-1', {
  set: 'rooftop',
  arr: 0,
  cast: {
    lina: { rig: 'f-20s-b', name: 'Lina', voice: 'en-NZ-MollyNeural', shirt: '#8a5f7a', shirt2: '#6e4b61',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'lina', cam: { shot: 'wide' },
      en: 'I have written we sent the list on the 20th and you have changed '
            + 'it to we have sent the list.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Both are correct and they say different things, and that is what '
            + 'the map is for. ⚠ It is not for finding mistakes; it is for '
            + 'choosing between two forms that are both right.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'What is the difference?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ We sent it on the 20th puts the reader in the past and invites '
            + 'the next question: and did it arrive? ⚠ We have sent it puts the '
            + 'reader in the present and the next question is what do you need '
            + 'from me?' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'So the perfect is for a present result.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ The test is one question: does the reader have to do anything? ⚠ '
            + 'If yes, the perfect, because it brings the thing into today. If '
            + 'the reader is only being told what happened, the past simple with '
            + 'its date.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'And the twelve forms? I have never been able to keep them in my head.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Nobody keeps twelve in their head. You keep a page and you look '
            + 'at it for a year. ⚠ And in this trade you will use six of the '
            + 'twelve for nine documents out of ten.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'Which six?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Present simple, present continuous, present perfect, past '
            + 'simple, going to, and the future perfect. ⚠ The other six are for '
            + 'the one document in ten, and when you need one you will know it — '
            + 'because you will try to write a sentence and find you cannot.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'That is how I found the future perfect.' },
    { who: 'nour', cam: { shot: 'close' },
      en: '⚠ It is how everybody finds it. ⚠ You wanted to say that by the '
            + 'time the lorry goes the marking will be finished, and no form you '
            + 'had would do it — and then somebody shows you the form and you '
            + 'have it for life. A form learned because you needed it is not '
            + 'forgotten.' }
  ]
});

PBE6.scene('u24-24-1-pair', {
  set: 'rooftop',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'I want to say that the marking will be done before the lorry comes.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Try it.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The marking will be finished when the lorry comes. …That is not quite it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Try again.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'We are finishing the marking before Friday. No.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ What are you trying to say?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '⚠ That by the time the lorry goes, ninety cartons will exist.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ By Friday we will have marked ninety. ⚠ And you will not forget '
            + 'it, because you needed it first.' }
  ]
});

PBE6.scene('u24-24-2', {
  set: 'rooftop',
  arr: 1,
  cast: {
    lina: { rig: 'f-20s-b', name: 'Lina', voice: 'en-NZ-MollyNeural', shirt: '#8a5f7a', shirt2: '#6e4b61',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' },
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'lina', cam: { shot: 'wide' },
      en: 'May I practise? I want to ask about the marking in every tense I know.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Go on.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'Do you mark at night? Are you marking tonight? Have you marked the '
            + 'Tannous cartons? Did you mark on Tuesday? Had you marked them '
            + 'before the lorry came? Are you going to mark tomorrow? Will you '
            + 'have finished by Friday? Will you be marking at two?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ Eight, and they are all correct, and seven of them are no use to '
            + 'me tonight.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'Which is tonight\'s?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ Will you have finished by Friday? ⚠ Because the lorry is Friday '
            + 'and the only thing anybody needs from me is whether ninety cartons '
            + 'will exist by then.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'And are you marking tonight?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ That gets you yes, and yes tells you nothing about Friday. ⚠ A '
            + 'man can be marking every night of the week and still not finish by '
            + 'Friday — and yes is the answer most people take away and then plan '
            + 'against.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'So the tense chooses the answer.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ The tense chooses the question and the question chooses what you '
            + 'are allowed to be told. ⚠ Did you mark on Tuesday? gets a yes or a '
            + 'no about Tuesday and nothing about tonight or Friday, and people '
            + 'ask it because Tuesday is what they remember.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'How do I know which one to ask?' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: '⚠ Ask yourself what you are going to do with the answer. ⚠ If you '
            + 'cannot say what you would do differently, you are asking to be '
            + 'reassured and not to be told — and the question you want is almost '
            + 'always the one with the deadline in it.' }
  ]
});

PBE6.scene('u24-24-2-pair', {
  set: 'rooftop',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Are the labels here? Have the labels come? Did the labels come on '
            + 'Tuesday? Will the labels come?' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Before I answer any of them — ⚠ what are you going to do with the answer?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I want to know whether we can run the Friday batch.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Then none of your four questions is about that.' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Will we have enough labels to finish the Friday batch?' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ No. Sixty labels and the batch is a hundred. ⚠ Which you now '
            + 'know on Wednesday instead of on Friday morning.' }
  ]
});

PBE6.scene('u24-24-3', {
  set: 'rooftop',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'I am going to write the market note every month.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Everybody is going to do something every month. ⚠ Say it as a '
            + 'number and a date, and in January we will both know whether it '
            + 'happened.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ By the end of January I will have written it nine times.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Now that is a sentence I can hold you to and you can hold '
            + 'yourself to — and more to the point, ⚠ in November you can count '
            + 'and find you are at four, and do something about it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Every month cannot be counted until it has failed.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ It cannot be counted at all. It can only be regretted. ⚠ A habit '
            + 'stated as a frequency is invisible until somebody notices it has '
            + 'stopped, and by then it stopped four months ago.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Nine and not twelve?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Nine is honest. Five months to January is five, and you have '
            + 'written three already, so twelve would be a lie and nine is the '
            + 'truth with one spare. ⚠ A target you have already decided to miss '
            + 'is worse than no target — you stop looking at it in the second '
            + 'month.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And where does the count live?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ On the note itself, at the bottom: note 4 of 9 to January. ⚠ '
            + 'Then the count does the work and you do not have to remember it — '
            + 'and anybody who picks up the file knows what was intended as well '
            + 'as what was done.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if I get to January with six?' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: '⚠ Then you write that down too, and the reason, and it is worth '
            + 'more than the nine would have been. ⚠ Six of nine with a reason is '
            + 'a record; nine of nine with no record of the effort is a tidy '
            + 'story.' }
  ]
});

PBE6.scene('u24-24-3-pair', {
  set: 'rooftop',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'By January I will have written it twelve times.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Count the months aloud.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'September, October, November, December, January. Five.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ And how many are written?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Three.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ So eight is the honest number and nine leaves you one spare. Twelve is …?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '⚠ Twelve is a target I have already decided to miss.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ And you will stop looking at it in the second month. ⚠ When will '
            + 'you count?' }
  ]
});

PBE6.scene('u24-24-4', {
  set: 'rooftop',
  arr: 0,
  cast: {
    lina: { rig: 'f-20s-b', name: 'Lina', voice: 'en-NZ-MollyNeural', shirt: '#8a5f7a', shirt2: '#6e4b61',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'lina', cam: { shot: 'wide' },
      en: 'What is left that you cannot do? You write everything here.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ I can write a letter that disagrees with a customer and I cannot '
            + 'write one that disagrees with Mr Attar.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'That is not English. That is rank.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Half of it is rank and half of it is three forms I do not have. '
            + '⚠ I can say we cannot do that. I cannot say I may be wrong about '
            + 'this, and if I am, what follows is wrong too — and mean it as '
            + 'strength.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'Why does that matter here?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Because the whole of 23.6 is an opinion with my name on it, and '
            + 'an opinion I cannot defend upward in writing is an opinion I will '
            + 'stop writing down. ⚠ It is not a small gap. It is the one that '
            + 'would stop the market note in about four months.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'My gap is that I cannot say anything on the telephone that I have '
            + 'not written first.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ That is a usable sentence and my English is not very good is '
            + 'not. ⚠ A gap with a situation in it can be practised; a gap that '
            + 'is a verdict about yourself cannot be practised at all.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'So how do I practise mine?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ You make the first two minutes of every call unwritten, on '
            + 'purpose, for a month. ⚠ Not the whole call — two minutes. And you '
            + 'write down afterwards what you could not say.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'And yours?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Mine is an exercise and a person. ⚠ The exercise is to write one '
            + 'paragraph a month that begins I may be wrong about this; the '
            + 'person is Mr Ayoub, who will read them and tell me which ones he '
            + 'would have ignored.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'That is the hardest sentence in this book.' },
    { who: 'nour', cam: { shot: 'close' },
      en: '⚠ It is the hardest sentence anybody writes about themselves, and '
            + 'the twenty-three units before it were practice for it.' }
  ]
});

PBE6.scene('u24-24-4-pair', {
  set: 'rooftop',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'My exercise is that I will do all my telephone calls without '
            + 'writing them first.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ For how long?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'From now on.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ And on the first bad morning?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…I will write them.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Then the exercise is over on the first bad morning. ⚠ Make it '
            + 'the first two minutes of each call, for a month.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That is very little.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ It is little enough to survive a bad week, which is the only '
            + 'size that is any use.' }
  ]
});

PBE6.scene('u24-24-5', {
  set: 'rooftop',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The plan for next year has eleven things on it and they are not '
            + 'all the same kind of thing.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Then grade them, the way you grade the board position. ⚠ It is '
            + 'the same three grades pointing the other way: arranged, intended, '
            + 'hoped for.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What makes something arranged?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Somebody else has it in writing and would be surprised if it did '
            + 'not happen. ⚠ The Tannous consignments to May are arranged — she '
            + 'has the terms and the date list. ⚠ My own intention to visit '
            + 'Beirut is not arranged, because nobody there knows about it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And intended?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ You have decided and it is in your own hands. The market note is '
            + 'intended — ⚠ nine times by January, and nobody else is required '
            + 'for it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the examination in the spring?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Hoped for, until there is a date and a fee paid. ⚠ And it must '
            + 'stay in that column on the page, because the day it moves up '
            + 'without anything happening is the day the page becomes a wish '
            + 'list.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It feels ungenerous to put my own examination under hoped for.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ It is the kindest thing on the page. ⚠ A hope in the arranged '
            + 'column is a failure waiting to be recorded; a hope in the '
            + 'hoped-for column is ⚠ a thing with one visible step in front of it '
            + '— find the date and the fee — and that step is the whole of what '
            + 'you can do about it this month.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So every hope should carry its next step.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: '⚠ Every hope carries one step and one date, and nothing else. ⚠ A '
            + 'hope with four steps is a project somebody has not started, and a '
            + 'hope with none is a sentence in a drawer.' }
  ]
});

PBE6.scene('u24-24-5-pair', {
  set: 'rooftop',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'I want to take the examination in the spring. The steps are: find '
            + 'out the dates, save the fee, do two practice papers, and ask for '
            + 'the morning off.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Which of those can you do this week?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Find out the dates.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Then that is the step, and the other three are not on the page.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'They will have to be done.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ They will, and none of them can be done until you know the date. '
            + '⚠ A hope with four steps is a project somebody has not started, '
            + 'and the first step is the only one that exists.' }
  ]
});

PBE6.scene('u24-24-6', {
  set: 'rooftop',
  arr: 2,
  cast: {
    lina: { rig: 'f-20s-b', name: 'Lina', voice: 'en-NZ-MollyNeural', shirt: '#8a5f7a', shirt2: '#6e4b61',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'lina', cam: { shot: 'wide' },
      en: 'What goes in a letter to yourself? I have written a list of '
            + 'everything I have learned and it reads like a report.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Because it is a report, and in four months you will not need '
            + 'one. ⚠ You will know what you learned. What you will have '
            + 'forgotten is what it felt like not to know it.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'So what do I write?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Write what you are afraid of this week, in one paragraph, with '
            + 'no softening. ⚠ And then one thing you want to be told in four '
            + 'months, by yourself, when you open it.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'What are you afraid of?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ That the market note stops in about four months — and the '
            + 'paragraph says exactly that, with the reason, which is that I '
            + 'cannot defend an opinion upward in writing yet. ⚠ If I open the '
            + 'letter in January and the note has stopped, I shall not be able to '
            + 'pretend I was surprised.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'That is a hard thing to leave for yourself.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ It is the only useful thing. A list of achievements read in '
            + 'January is pleasant and changes nothing; ⚠ a sentence that says '
            + 'you were afraid of this in August and here you are changes a week.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'And the thing you want to be told?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Count the notes before you read the rest of this letter. ⚠ An '
            + 'instruction and not a wish, so that the letter does something in '
            + 'the first ten seconds.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'Mine would be: count how many calls you began without writing them first.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Then write it as the first line and not the last, because by the '
            + 'time anybody reaches the end of a letter from themselves they are '
            + 'already arguing with it.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'And then we seal them.' },
    { who: 'nour', cam: { shot: 'close' },
      en: '⚠ Seal them, write the date on the outside, and give them to your '
            + 'teacher. ⚠ They are opened at B2 Unit 1, which is three or four '
            + 'months away — and the sealing is the part that makes the honesty '
            + 'possible.' }
  ]
});

PBE6.scene('u24-24-6-pair', {
  set: 'rooftop',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'I am a little worried that perhaps I may not keep up the writing, '
            + 'although I may be being pessimistic.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Four hedges. Read it without them.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I am worried that I will not keep up the writing.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ And the reason?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Because nobody asks me for any of it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Then that is the sentence: I shall stop writing because nobody '
            + 'asks me for any of it. ⚠ Now it can be checked in January.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It sounds much worse.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ It sounds exactly as bad as it is, which is what you want from '
            + 'yourself in January.' }
  ]
});

PBE6.scene('u24-24-7', {
  set: 'rooftop',
  arr: 0,
  cast: {
    lina: { rig: 'f-20s-b', name: 'Lina', voice: 'en-NZ-MollyNeural', shirt: '#8a5f7a', shirt2: '#6e4b61',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'lina', cam: { shot: 'wide' },
      en: 'May I tell you something I found out? ⚠ Eleven people here did the '
            + 'A2 course two years ago. Three of them still write anything in '
            + 'English at all.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Which three?' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'Hala, Fadi and Bassel. ⚠ And they are not the three with the best '
            + 'marks. ⚠ The highest mark of the eleven was Mr Haddad\'s cousin in '
            + 'the second store, and he has written nothing in two years.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What do the three have in common?' },
    { who: 'lina', cam: { shot: 'mid' },
      en: '⚠ Somebody is waiting for a document from each of them. Hala\'s '
            + 'price labels, Fadi\'s gate sheet, Bassel\'s carton counts. ⚠ If '
            + 'they stop, somebody notices within a week.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the other eight?' },
    { who: 'lina', cam: { shot: 'mid' },
      en: '⚠ Nothing they wrote was needed by anybody. They wrote well in the '
            + 'course and then went back to work where the English was optional, '
            + '⚠ and optional English stops in about a fortnight.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'A fortnight.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: '⚠ I asked all eight when they last wrote something. Six could not '
            + 'remember. ⚠ Two could, and both said it was within two weeks of '
            + 'the last lesson — a letter they wrote because they still felt like '
            + 'somebody who writes letters.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So the first fortnight decides it.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: '⚠ The first fortnight, and not the marks. ⚠ And the certificate '
            + 'says nothing about any of this: it says what somebody could do on '
            + 'one morning in March.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Which is what a certificate is for, and it is read as something '
            + 'else. An employer reads it as a statement about a person; ⚠ it is '
            + 'a statement about a day. ⚠ The statement about the person is '
            + 'whether anybody is waiting for a document from them next Tuesday.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'Then the last thing in the course should be arranging a reader.' },
    { who: 'nour', cam: { shot: 'close' },
      en: '⚠ It should be the last thing in every course and it is in none of '
            + 'them. ⚠ One document, one reader, one date in the next fortnight — '
            + 'and that is worth more than everything else on the certificate.' }
  ]
});

PBE6.scene('u24-24-7-pair', {
  set: 'rooftop',
  arr: 0,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'What did you write in the first fortnight after your last course?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Nothing, I think.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ And who was waiting for anything?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Nobody. It was for myself.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Then the two answers are the same answer. What document could '
            + 'have had a reader?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…The Friday short list. I make it in my head and tell him.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Then write it, give it to him, and ask him to telephone you if '
            + 'it does not come.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'He would not mind either way.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ He does not have to mind. He has to notice.' }
  ]
});

PBE6.scene('u24-24-7-b', {
  set: 'rooftop',
  arr: 0,
  cast: {
    lina: { rig: 'f-20s-b', name: 'Lina', voice: 'en-NZ-MollyNeural', shirt: '#8a5f7a', shirt2: '#6e4b61',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'lina', cam: { shot: 'wide' },
      en: 'Eleven people here did the A2 course two years ago. Three of them '
            + 'still write anything in English at all: Hala, Fadi and Bassel. And '
            + 'they are not the three with the best marks.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Who had the best mark?' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'Mr Haddad\'s cousin in the second store, and he has written '
            + 'nothing in two years.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What do the three have in common?' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'Somebody is waiting for a document from each of them every week '
            + 'and would notice within a week if it did not come. The price '
            + 'labels, the gate sheet, the carton counts. Of the other eight, '
            + 'nothing they wrote was needed by anybody, and optional English '
            + 'stops in about a fortnight.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the certificate says nothing about that.' },
    { who: 'lina', cam: { shot: 'close' },
      en: 'It says what somebody could do on one morning in March. An '
            + 'employer reads it as a statement about a person; it is a statement '
            + 'about a day.' }
  ]
});
