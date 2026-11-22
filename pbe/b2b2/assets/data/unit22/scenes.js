/* Unit 22 — the acted dialogues. Every line is the book's own. */
PBE8.scene('u22-22-1', {
  set: 'interview',
  arr: 0,
  cast: {
    sayegh: { rig: 'm-50s-b', name: 'Mr Sayegh', voice: 'en-AU-WilliamMultilingualNeural', shirt: '#4a5e74', shirt2: '#3a4a5c',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'sayegh', cam: { shot: 'wide' },
      en: 'Your draft on Bassel. Read me the first assessment.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '"Tends to be over-confident in his projections."' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ What is he supposed to do with that on Monday morning?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Be less confident.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Which is not a thing anybody can do, and he will either reject '
            + 'it or try to be less confident about everything, including the '
            + 'things he is right about. ⚠ Both are worse than saying nothing.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So what do I write?' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ The work. ⚠ What did the December paper do that the May paper did not?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'December gave one threshold. One number, no range, no source. May '
            + 'gave three quotations and said which one he was using.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ That is an assessment. ⚠ It names a practice, it is checkable, '
            + 'and he can do it on Monday — and notice that it is the same '
            + 'observation as over-confident with the person taken out of it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is also less damning.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ It is more damning, because he cannot argue with it. ⚠ '
            + 'Over-confident is an opinion he can decide is unfair. One number '
            + 'with no range is a thing on a page with a date on it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What is the test?' },
    { who: 'sayegh', cam: { shot: 'close' },
      en: '⚠ Read the sentence and ask whether it describes a document, a '
            + 'conversation or a decision. ⚠ If it describes a person, you have '
            + 'written the conclusion and left out the evidence — and you have '
            + 'written the only kind of sentence that gets remembered for a year '
            + 'and acted on never.' }
  ]
});

PBE8.scene('u22-22-1-pair', {
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
      en: '"One number with no range" is a technicality. "Over-confident" is '
            + 'the real problem.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Which of the two could he decide was unfair?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Over-confident.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And which is a thing on a page with a date on it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The number.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So which one survives him disagreeing with it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The number. But it sounds so much milder.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'To you. To him it is the one he cannot argue with.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And over-confident he can simply reject.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'And will. And then nothing has been said at all.' }
  ]
});

PBE8.scene('u22-22-2', {
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
      en: 'My review says I am sometimes slow to escalate. May I ask what '
            + 'that is based on?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The Tarabishi account in February.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'And?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '(pause) ⚠ And nothing else. It is one instance.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: '⚠ The word in the review is sometimes.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Which means more than once, and I have one. ⚠ I have written a '
            + 'pattern and I have an instance.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'Then what happens to the sentence?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ It becomes the instance, with the date, and the word sometimes '
            + 'comes out. ⚠ On 11 February the Tarabishi query was escalated on '
            + 'the fourth day; our standard is the second. That is what I '
            + 'actually know.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'And it is a smaller sentence.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ It is a true one, and you can answer it, which you could not '
            + 'answer the other. What was the fourth day about?' },
    { who: 'lina', cam: { shot: 'mid' },
      en: '⚠ I was waiting for the delivery note, because escalating without '
            + 'it means Nadia has to telephone me for it and we lose a day '
            + 'anyway. ⚠ Which may be wrong, but it is a reason, and nobody asked '
            + 'me for it.' },
    { who: 'nour', cam: { shot: 'close' },
      en: '⚠ And now it is in the review as your answer, which is worth more '
            + 'than my assessment was. ⚠ The rule I am taking from this: count '
            + 'before you choose the word. One is an instance, two is a '
            + 'coincidence, three is a pattern — and sometimes is the word people '
            + 'use when they have one and feel they have more.' }
  ]
});

PBE8.scene('u22-22-2-pair', {
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
      en: 'I know it is a pattern. I see it every month.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Give me the dates.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'February, for certain. And… I would have said April.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Would have said?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I am not sure about April.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So you have one certain and one uncertain. What may you write?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The February one, with the date, and no sometimes.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And your impression of a pattern?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Is evidence about me and not about her.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Which you can tell her, in a conversation. Not in a document.' }
  ]
});

PBE8.scene('u22-22-3', {
  set: 'interview',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Hala\'s review. The strengths section says she is excellent and a '
            + 'real asset to the counter.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Which she has been told four times in four years, by four '
            + 'people, and it has never meant anything to her.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is true, though.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ It is true and it is not information. ⚠ The strengths half is '
            + 'the half nobody writes properly — because praise feels safe, so it '
            + 'gets written vaguely, and a vague compliment is the one thing in a '
            + 'review that costs nothing and buys nothing.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So what are the parts?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Three. ⚠ The thing itself, specifically. ⚠ What it is worth, '
            + 'with a figure or a consequence. ⚠ And whether anybody has ever '
            + 'told her — because if nobody has, that is the sentence she will '
            + 'remember.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Give me it for Hala.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ She has kept a weekly walk-in tally since 2024 that nobody asked '
            + 'her to keep. It is the only count of walk-in trade this firm has '
            + 'ever had, and the February Homs decision was taken on it. ⚠ And '
            + 'nobody has ever told her that, including me.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is three sentences.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ It is three sentences and it is worth more to her than four '
            + 'years of excellent. ⚠ And notice what it does that praise does '
            + 'not: it tells her which of the things she does is the valuable one '
            + '— and she does not know, because nobody has ever distinguished '
            + 'between them.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Is there a risk in it?' },
    { who: 'nadia', cam: { shot: 'close' },
      en: '⚠ One, and it is real. ⚠ Once she knows the tally is worth '
            + 'something, she may ask to be paid for it, or ask who will keep it '
            + 'when she is not here — and both of those questions are ones this '
            + 'firm ought to be asked and has not been.' }
  ]
});

PBE8.scene('u22-22-3-pair', {
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
      en: 'The strengths half writes itself. She is excellent, and I say so.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'How many times has she been told she is excellent?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'In four years? Four. Maybe five.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And what changed?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Nothing.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Does she know which of the things she does is the valuable one?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…I doubt it. She would probably say the counter work.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And is it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'No. It is the tally, and the tally is in nobody\'s job description.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Then that is the only piece of information the section could '
            + 'carry, and it is not in it.' }
  ]
});

PBE8.scene('u22-22-4', {
  set: 'interview',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    sayegh: { rig: 'm-50s-b', name: 'Mr Sayegh', voice: 'en-AU-WilliamMultilingualNeural', shirt: '#4a5e74', shirt2: '#3a4a5c',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'I have raised the recommendation-on-the-last-page thing with Bassel twice.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Then do not raise it a third time in the review.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'But it has not changed.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Which means the first two did not work, and the third will not '
            + 'either. ⚠ The first time is a correction. The second is a '
            + 'reminder. The third converts a correction into a grievance — and '
            + 'after that he is managing you rather than the paper.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So I write nothing?' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ You write it once, properly, which you have not yet done. ⚠ '
            + 'Three parts. What happened, with the count. What to do instead, as '
            + 'an instruction. And when it starts.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What was wrong with how I raised it?' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ You said try to put the recommendation earlier, twice, in a '
            + 'corridor. ⚠ There was no count, no instruction and no date — so it '
            + 'was a preference, and a preference can be agreed with and not '
            + 'done, which is exactly what happened.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And properly?' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Three of your four papers this year put the recommendation on '
            + 'the last page; the fourth put it on the first and was the one that '
            + 'was acted on. From Monday, the recommendation goes on page one of '
            + 'every paper, in the same words as at the foot. ⚠ A count, an '
            + 'instruction, a date.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The last clause is from Unit 21.' },
    { who: 'sayegh', cam: { shot: 'close' },
      en: '⚠ It is, and that is the other half of a remedy: it has to be a '
            + 'thing he already knows how to do. ⚠ A remedy that requires a new '
            + 'skill starts in three months. A remedy that applies something he '
            + 'did in May starts on Monday — and the only remedies anybody ever '
            + 'carries out are the ones that start on Monday.' }
  ]
});

PBE8.scene('u22-22-4-pair', {
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
      en: 'The remedy is that he needs training in how to write a variance sheet.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'When would that training be?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'September, probably. There is a course.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And when is his next stock count?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Friday.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So your remedy misses four counts. Has he ever produced a good '
            + 'variance sheet?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…April. With the three largest differences annotated.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Which is better than what you are asking for.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'So the remedy is "do what you did in April".' },
    { who: 'b', cam: { shot: 'close' },
      en: 'And it starts on Friday rather than in September.' }
  ]
});

PBE8.scene('u22-22-5', {
  set: 'interview',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' },
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Mr Sayegh\'s review of me says I was slow to take the arbitration '
            + 'decisions in March.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Were you?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ On two of them, yes. On the settlement paper, no — I had it on '
            + 'his desk in four days and it sat there for eleven.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Then answer it, in writing, and in that order. ⚠ Four moves. '
            + 'Accept the part that is right. Give the dates for the part that is '
            + 'not. Ask for the instance behind anything you cannot place. And '
            + 'say what you want to happen to the document.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Why does the acceptance come first?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Because an answer that begins by disputing is read as a defence, '
            + 'and everything in it afterwards is discounted — including the part '
            + 'where you are right, which is the part you actually need.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And it has to be the real thing?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ It has to be the real thing and it has to be the biggest true '
            + 'part, not the smallest. ⚠ If you accept a detail and dispute the '
            + 'substance, he will see what you have done in four seconds, and he '
            + 'will be right to. You were slow on two of three. Accept two of '
            + 'three.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the eleven days on his desk?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Dates, with no adjective. ⚠ The settlement paper was with you on '
            + '11 March and the decision was taken on the 22nd. Do not write it '
            + 'then sat on your desk, which is the same fact with a complaint '
            + 'wrapped round it — and the complaint is the thing he will answer '
            + 'instead of the fact.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And what do I want to happen to it?' },
    { who: 'nadia', cam: { shot: 'close' },
      en: '⚠ Say it, because otherwise nothing does. ⚠ I ask that this answer '
            + 'is kept with the review. Not that the review is changed — people '
            + 'almost never change them, and an answer kept alongside is worth '
            + 'more in two years than an amendment agreed under pressure.' }
  ]
});

PBE8.scene('u22-22-5-pair', {
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
      en: 'I accept none of it. The whole assessment is unfair.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Was any part of it true?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Two of the three delays were mine.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Two of three is most of it.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'But the third one is the one that matters.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And if your answer opens by disputing, where does the third one get read?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'As a defence.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'With the two you were going to concede anyway unmentioned.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'So accepting the two is how the third gets read at all.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'It is the only way. And it costs you nothing you were not going to lose.' }
  ]
});

PBE8.scene('u22-22-6', {
  set: 'interview',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Lina\'s reconciliations. I have written that they are to a high standard.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ How do you know?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…Because nothing has gone wrong.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Which is not the same thing, and you could not check one if you '
            + 'wanted to. ⚠ I could. You could not, and she knows that.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then what do I write? I cannot leave half her job out of her review.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ You write that you are not in a position to assess the technical '
            + 'quality, and then you assess the three things you ARE in a '
            + 'position to assess.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Which are?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Outcomes. The June reconciliation found a 410,000 error that the '
            + 'two previous years did not. ⚠ Timeliness. Eleven of twelve on or '
            + 'before the fifth. ⚠ And what happens when she does not know '
            + 'something — she came to me twice this year with a question and '
            + 'both times she had already narrowed it to two possibilities, which '
            + 'is the thing I would actually want in a reconciler and which you '
            + 'can see without being one.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And I get somebody else to assess the quality.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ You ask me, and you say in the document that you asked me and '
            + 'what I said. ⚠ Which is a sentence I have never seen in a review '
            + 'in sixteen years, and it ought to be in all of them.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Why is pretending worse than admitting?' },
    { who: 'nadia', cam: { shot: 'close' },
      en: '⚠ Because she knows you cannot. ⚠ To a high standard tells her '
            + 'that her reviewer will sign off work they have not understood, '
            + 'which is the single most useful piece of information she will get '
            + 'from this document — and she will use it, and not in your favour.' }
  ]
});

PBE8.scene('u22-22-6-pair', {
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
      en: 'If I write that I cannot assess it, I undermine myself as her reviewer.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Does she know you cannot assess it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Yes. Obviously.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So what does "to a high standard" tell her?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That I will sign off work I have not understood.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Is that useful to her?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Extremely. And not in my favour.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So the admission does not create the weakness.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It stops it being a secret.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Which is all it does. The weakness was already hers to use.' }
  ]
});

PBE8.scene('u22-22-7', {
  set: 'interview',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' },
    sayegh: { rig: 'm-50s-b', name: 'Mr Sayegh', voice: 'en-AU-WilliamMultilingualNeural', shirt: '#4a5e74', shirt2: '#3a4a5c',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Bassel\'s review is the best of the four and I have written it three times.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'What is wrong with it?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Nothing is wrong with it. That is the problem. ⚠ It says he '
            + 'wrote the best paper in the firm this year and that the option we '
            + 'took was found in it, and anybody reading it in a year will ask '
            + 'why he was not appointed in April.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'And your third draft?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '(pause) ⚠ My third draft is slightly smaller. ⚠ I took out the '
            + 'sentence about section 5 and softened the one about the May paper, '
            + 'and I did it so that the review and the April minute would not '
            + 'contradict each other.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Then your third draft is the only dishonest document in this building.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I know. That is why I have brought it to you rather than filing it.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: 'Let me say the obvious thing. If his review says what you first '
            + 'wrote, my April decision looks wrong on paper.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ It does. And I still think it was right, and I am the person it benefited.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: 'Explain to me why both of those can be true.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Because they answer different questions. ⚠ The review answers '
            + 'what did he do this year, and the answer is: the best paper in the '
            + 'firm. ⚠ The April minute answers who should hold the post in May '
            + '2027, and the answer was me, because I was carrying an arbitration '
            + 'to an award and he had never run a dispute. Neither answer makes '
            + 'the other wrong.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ And a reader in a year will see two documents in tension and '
            + 'conclude that somebody made a mistake.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Then I write the third document, which is one paragraph, and it '
            + 'says what the two of them are each for. ⚠ Not to reconcile them — '
            + 'to say that they are not supposed to reconcile.' },
    { who: 'sayegh', cam: { shot: 'close' },
      en: '⚠ And I have to sign that, which means signing a sentence saying '
            + 'my April decision is not disproved by a review that contradicts '
            + 'it. ⚠ Which is a more uncomfortable thing to sign than the review '
            + 'was to write.' }
  ]
});

PBE8.scene('u22-22-7-pair', {
  set: 'interview',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    sayegh: { rig: 'm-50s-b', name: 'Mr Sayegh', voice: 'en-AU-WilliamMultilingualNeural', shirt: '#4a5e74', shirt2: '#3a4a5c',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The review as I first wrote it reads as a criticism of your April decision.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: 'A reader in a year will see the tension and conclude somebody was wrong.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I have a third draft that agrees with April. It is the only '
            + 'dishonest document I have written.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: 'Dishonest? Nothing in it is untrue.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is smaller than what I found, and it was made smaller to agree '
            + 'with another document.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: 'Then the file carries both, and the tension stays on it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And a third paragraph, signed by both of us, saying the review '
            + 'does not disprove the April decision.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: 'Which is a more uncomfortable thing to sign than the review was to write.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is. I add that I was the person appointed instead, which all '
            + 'three drafts left out.' },
    { who: 'sayegh', cam: { shot: 'close' },
      en: 'Add it. I would rather sign the tension than hold a file that '
            + 'agrees with itself.' }
  ]
});

PBE8.scene('u22-22-7-b', {
  set: 'interview',
  arr: 0,
  cast: {
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' },
    sayegh: { rig: 'm-50s-b', name: 'Mr Sayegh', voice: 'en-AU-WilliamMultilingualNeural', shirt: '#4a5e74', shirt2: '#3a4a5c',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nadia', cam: { shot: 'wide' },
      en: 'Four reviews. What did you actually learn?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ That I withdrew three assessments out of eleven, ⚠ and all three '
            + 'for the same reason: I went to look for the instances and there '
            + 'were none. Twenty minutes each.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'And Hala\'s?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Her two previous reviews both said she was an asset to the '
            + 'counter. ⚠ Neither mentioned the tally, which the February '
            + 'decision was taken on. Three years, two reviews, and the most '
            + 'valuable thing anybody in this office does was not in either of '
            + 'them.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'And the third paragraph on Bassel?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ It is not there to reconcile the review with the April minute. '
            + 'It is there to say that they are not supposed to reconcile — '
            + 'because a reader in a year will see the tension and decide '
            + 'somebody was wrong, and the paragraph is the only thing that stops '
            + 'them.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ I should say what I nearly did. ⚠ On the Tuesday I nearly asked '
            + 'you to take out the sentence about section 5. Not to protect the '
            + 'April decision — to protect myself from having to sign the third '
            + 'paragraph. ⚠ I did not ask, and the reason I did not is that you '
            + 'brought me the softened draft instead of filing it.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'And Lina?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Lina asked me what the escalation standard was, and it is in no '
            + 'document in this office. ⚠ She has been doing it her own way for '
            + 'two years and nobody has ever told her there was a standard, '
            + 'because there is not one. I have written it this week. Two days.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'And the form?' },
    { who: 'nour', cam: { shot: 'close' },
      en: '⚠ One change. An instance-count column, in capitals, against every '
            + 'assessment. ⚠ It is the only thing on the page that disciplines '
            + 'the writer, and it would have caught all three of the ones I '
            + 'withdrew before I wrote them rather than after.' }
  ]
});
