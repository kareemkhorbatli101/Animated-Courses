/* Unit 24 — the acted dialogues. Every line is the book's own. */
PBE8.scene('u24-24-1', {
  set: 'letterdesk',
  arr: 0,
  cast: {
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nadia', cam: { shot: 'wide' },
      en: 'Fourteen envelopes. Yours is the one with the instruction on the front.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ I remember writing the instruction and I remember why. ⚠ I knew '
            + 'exactly what I would do with a page of my own good intentions two '
            + 'years later, which is read it kindly, feel something, and put it '
            + 'back.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'And the instruction stops that.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ It makes the first act a count instead of a feeling, and a count '
            + 'cannot be done kindly.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'So what do you do with it before you react to it?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Three things, and in this order. ⚠ One: read it once through '
            + 'without stopping, as though somebody else wrote it — because the '
            + 'moment I start defending a sentence I have stopped reading it. ⚠ '
            + 'Two: separate the claims from the hopes. There are four claims on '
            + 'this page and the rest is hoping. ⚠ Three: do what the first line '
            + 'says.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Why as somebody else\'s?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Because I know what I meant, and knowing what you meant is the '
            + 'enemy of reading what you wrote. ⚠ There is a sentence here that '
            + 'says I will make time for the reading-aloud exercise. I know what '
            + 'I meant by it. A reader does not, and a reader is right — make '
            + 'time for is not an undertaking, it is a wish with a verb in front '
            + 'of it.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'And the claims?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Four. That I could write a letter disagreeing with a customer. '
            + 'That I could not write one disagreeing with an auditor. That I '
            + 'could not say in a room what I could write on a page. And that '
            + 'nine things on the back would be done.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Which of the four can you check?' },
    { who: 'nour', cam: { shot: 'close' },
      en: '⚠ All four, and that is what two years have changed. ⚠ At B1 those '
            + 'were four opinions about myself. Now there is a letter of 9 June '
            + '2026, a transcript from Beirut in which I said four sentences, and '
            + 'a count — and none of the three is an opinion.' }
  ]
});

PBE8.scene('u24-24-1-pair', {
  set: 'letterdesk',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Make time for the exercise. It was obvious what I meant.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'To whom?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'To me. I knew.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And in two years, reading it cold, on a busy Monday?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…I read it on Monday and I did know.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Did you do it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Three times.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So you knew what it meant and it did not get done. Which is it: '
            + 'the knowing, or the sentence?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The sentence. There is no day in it.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Then your knowledge of your own meaning is the one thing the page '
            + 'could not carry.' }
  ]
});

PBE8.scene('u24-24-2', {
  set: 'letterdesk',
  arr: 1,
  cast: {
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nadia', cam: { shot: 'wide' },
      en: 'In 2025 you wrote that you could not write a letter disagreeing '
            + 'with an auditor. Can you?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Yes, and the letter exists. ⚠ Ninth of June 2026, to Mr '
            + 'Dallal\'s auditors, on four of the twelve lines they had amended. '
            + 'Two of the four they accepted, one they accepted in part, and one '
            + 'I was simply wrong about — the term of art in line 7, which reads '
            + 'like nonsense and means something exact.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Why tell me about the fourth?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Because a claim about myself with no failure in it is a claim I '
            + 'have selected. ⚠ Four points and three successes is a document. '
            + 'Four points and four successes is an advertisement, and the reader '
            + 'starts wondering what the fifth point was.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'And would you say your written English has improved?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '(pause) ⚠ I would not put that sentence in anything.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Why not? It is true.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ It is true and it is unusable. ⚠ Improved from what, by how '
            + 'much, measured by whom? Nobody can disagree with it, which means '
            + 'nobody can agree with it either — and a sentence nobody can '
            + 'disagree with is worth exactly nothing in a document, which is '
            + 'Unit 8 and Unit 22 saying the same thing about different subjects.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'So what do you say instead?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ I say what I did, to whom, on what date, and what happened. ⚠ '
            + 'And then I stop, because the reader can form their own view of '
            + 'whether that is improvement and their view is better than mine.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'And if the reader forms a low view of it?' },
    { who: 'nour', cam: { shot: 'close' },
      en: '⚠ Then they have formed it from the facts, which is all I can '
            + 'offer and all I want. ⚠ The thing I will not do is take the facts '
            + 'out so that the view cannot be formed.' }
  ]
});

PBE8.scene('u24-24-2-pair', {
  set: 'letterdesk',
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
      en: 'I will put the certificate in instead of the letter. It is official.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'What does the certificate say you did?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That I passed at B2.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Which is what, in acts?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Read a long document, wrote to a word limit, on one day.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Under examination conditions, with somebody marking.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Yes.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And the letter?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'A real auditor, a real outcome, and nobody marking.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'So keep both, and know which is which. 24.7 is that difference, in '
            + 'a document about somebody else.' }
  ]
});

PBE8.scene('u24-24-3', {
  set: 'letterdesk',
  arr: 2,
  cast: {
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nadia', cam: { shot: 'wide' },
      en: 'The second claim. You cannot say in a room what you can write on a page.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Still true, and now I have the figure. ⚠ Beirut, 7 April, four '
            + 'and a half hours, and I said four sentences. Ms Nahas said '
            + 'everything else and she said it from my own note.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'That is the first answer. What is the second?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '(pause) ⚠ The second answer is that undertaking six on the back of '
            + 'that page was to read one of my own documents aloud to somebody '
            + 'once a week, and I did it three times in two years.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Three.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Three. March 2026, twice, and once in the week before Beirut, '
            + 'which does not count because it was preparation and not practice.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'And the reason?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ The reason is that it was the only one of the nine with no day '
            + 'in it and nobody to tell. ⚠ Eight of the nine named a document or '
            + 'a date. That one said make time for, and I have spent two years '
            + 'teaching other people that a sentence like that obliges nobody — '
            + 'and I wrote it about myself and did not notice.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Is that a reason or an excuse?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ It is a reason, and the test is whether it would have worked if '
            + 'the sentence had been written properly. ⚠ It would. The eight with '
            + 'days in them got done, four of them completely — so the sentence '
            + 'is the cause and I was busy is not, because I was equally busy for '
            + 'the other eight.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Why is the second answer harder than the first?' },
    { who: 'nour', cam: { shot: 'close' },
      en: '⚠ Because the first answer is about a limitation and the second is '
            + 'about me. ⚠ Four sentences in Beirut is a fact about my speaking. '
            + 'Three times in two years is a fact about whether I did the thing I '
            + 'said I would do — and nobody was ever going to ask, which is the '
            + 'whole reason the first line of that page was an instruction.' }
  ]
});

PBE8.scene('u24-24-3-pair', {
  set: 'letterdesk',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'I was busy. Those two years were the worst we have had.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'How many undertakings were on the form?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Six.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'How many were done?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Four.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'In the same two years, with the same workload.' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Yes.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So being busy did not prevent four things. What is different about the two?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Neither of them had a date.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Then the drafting is the cause and busy is the circumstances, and '
            + 'the test has told you which.' }
  ]
});

PBE8.scene('u24-24-4', {
  set: 'letterdesk',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Nine undertakings. Eight attempted, four completed. My count is four.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'And you want me to count it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ I want you to count it from the documents, without my page in '
            + 'front of you. ⚠ Because a count of my own undertakings made by me '
            + 'is the least reliable count available, and the only one anybody '
            + 'ever does.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '(reading) Three.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Which one have you not allowed?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Number two. Write a one-page note on every decision I take that '
            + 'costs over 100,000. ⚠ There are eleven such decisions in the files '
            + 'for those two years and there are nine notes. You wrote nine notes '
            + 'and you took eleven decisions.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And I counted it as done because I wrote nine notes.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ You counted the notes. The undertaking counted the decisions. ⚠ '
            + 'It is a real distinction and you would have made it instantly '
            + 'about anybody else\'s work — which is 22.2, and you withdrew three '
            + 'of eleven assessments in July for exactly this.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So the figure is three of nine.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ The figure is three of nine, and the disagreement is worth more '
            + 'than the figure. ⚠ A count you make of yourself and a count made '
            + 'from the record will differ, and the gap between them is the only '
            + 'measurement of your own generosity to yourself that exists.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Mine is one in nine.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Which is low, and you should write that down too — ⚠ because '
            + 'next year you will want to know whether it has grown, and without '
            + 'this year\'s figure you will have nothing to compare it with.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the two missing notes?' },
    { who: 'nadia', cam: { shot: 'close' },
      en: '⚠ Write them now, dated now, saying they are being written now and '
            + 'why. ⚠ A note written eighteen months late and marked as late is '
            + 'worth having; a note written eighteen months late and dated as '
            + 'though it were not is the only thing on this list that would be '
            + 'worse than the omission.' }
  ]
});

PBE8.scene('u24-24-4-pair', {
  set: 'letterdesk',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'I will write the two missing notes and date them to the decisions.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'What does the file then say?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That they were written at the time.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Which is false. And discoverable how?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…From anything else in that week. The paper, the other notes, the register.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And if somebody finds it in four years?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Then the question is not the two missing notes any more.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It is whether anything in your file means what it says. Which is '
            + 'Unit 18, and it is not recoverable.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And dated today, marked as late?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Costs you fifteen words and an admission nobody will ever ask you '
            + 'about again.' }
  ]
});

PBE8.scene('u24-24-5', {
  set: 'letterdesk',
  arr: 1,
  cast: {
    sayegh: { rig: 'm-50s-b', name: 'Mr Sayegh', voice: 'en-AU-WilliamMultilingualNeural', shirt: '#4a5e74', shirt2: '#3a4a5c',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'sayegh', cam: { shot: 'wide' },
      en: 'From April you have Homs as well. You want that on paper now.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ In December, not in May. A responsibility written down after it '
            + 'has started is written to fit what has already happened — and by '
            + 'May something will have happened.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: 'And what does it have to say?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Three things. ⚠ One: what I am answerable for, itemised. The '
            + 'takings, the staffing and the certification of the Homs branch '
            + 'from 1 April. ⚠ Two: what I am NOT answerable for, itemised, which '
            + 'is the half nobody writes. The lease, which is yours, and the '
            + 'opening stock valuation, which was fixed in March before I had it. '
            + '⚠ Three: who else currently believes they are answerable for each '
            + 'item.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: 'And does anybody?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Two people believe they are answerable for the Homs takings. ⚠ '
            + 'Bassel, because he ran the reopening and has reported them weekly '
            + 'since April, and me, from the first of next April — and neither of '
            + 'us has said so to the other, which is how it would have stayed '
            + 'until the first bad month.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: 'So the document is partly for Bassel.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ The document is mostly for Bassel, and that is why it goes to '
            + 'him before it goes in the file. ⚠ A definition of my '
            + 'responsibilities that he reads for the first time in a '
            + 'disagreement is worth less than no definition at all — which is '
            + '23.7, four months later and inside the firm.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Then let me add the thing you have not put in, which is the '
            + 'hardest of the four. ⚠ What you are answerable for that you cannot '
            + 'control. The Homs takings depend on a pharmacy opposite that may '
            + 'or may not stay open, and on a certification programme the '
            + 'Directorate may change again.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And I am answerable for them anyway.' },
    { who: 'sayegh', cam: { shot: 'close' },
      en: '⚠ You are, and the document should say so in your own words rather '
            + 'than leaving it to be discovered. ⚠ Because the week the takings '
            + 'fall, the useful sentence is not an explanation — it is a sentence '
            + 'you wrote in December saying that this was foreseeable and that '
            + 'you accepted it.' }
  ]
});

PBE8.scene('u24-24-5-pair', {
  set: 'letterdesk',
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
      en: 'Writing down what I cannot control looks like an excuse prepared in advance.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'When does an explanation read as an excuse?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Afterwards.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Always?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Yes. However true it is.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So when is the only time you can say it and be believed?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Before anything has happened.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And you add one clause the excuse never has.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That I accept it anyway.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Which is 23.4 pointed at a responsibility instead of a plan, and '
            + 'it is the opposite of a hedge.' }
  ]
});

PBE8.scene('u24-24-6', {
  set: 'letterdesk',
  arr: 2,
  cast: {
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nadia', cam: { shot: 'wide' },
      en: 'Fourteen new envelopes. What have you changed?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Three things, and the first line is not one of them. ⚠ The 2025 '
            + 'letter got the first line right — an instruction rather than a '
            + 'greeting, and it is the only reason I did the count at all. I have '
            + 'kept it and made it harder.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Harder how?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ It says: take the four claims on the back and write beside each '
            + 'one the document that proves it, or the word NONE. ⚠ NONE in '
            + 'capitals, because that is the answer I will want to blur.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'And the second change?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Every undertaking has a day, a document and a person. ⚠ Nine in '
            + '2025 and two of them could not have been kept by anybody. Five '
            + 'this time, and each one could be audited by somebody who had never '
            + 'met me.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Five rather than nine.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ As many as I have days for, and not one more — which I learnt in '
            + 'September about certification conditions and am applying in '
            + 'December to myself.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'And the third?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ The third is the one I would not have thought of two years ago. '
            + 'A sealed letter has no reader. ⚠ It goes in a drawer and it '
            + 'depends entirely on somebody remembering to bring the drawer — and '
            + 'if nobody does, the best letter in that envelope is a page nobody '
            + 'ever opens.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'So you arrange one.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Lina. She has agreed, and what she has agreed is specific: on '
            + 'the first working day of December 2029 she asks me for the '
            + 'envelope and stays while I open it. ⚠ Not reminds me. Asks me for '
            + 'it, and stays — because being reminded of an envelope is something '
            + 'I can thank somebody for and postpone.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'And if she has left the firm?' },
    { who: 'nour', cam: { shot: 'close' },
      en: '⚠ Then she has agreed to send one message from wherever she is, '
            + 'and that is in the letter too, in her handwriting, under her name. '
            + '⚠ It is the only line in the envelope written by somebody else, '
            + 'and it is the line that makes the rest of it a document rather '
            + 'than a hope.' }
  ]
});

PBE8.scene('u24-24-6-pair', {
  set: 'letterdesk',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Arranging a reader destroys the privacy of a letter to myself.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'What does the reader read?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The letter.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Does she? What has Lina agreed to do?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Ask for the envelope and stay while it is opened.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And see what?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Nothing. Not a word of it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So the privacy is intact and what is added is what?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That it gets opened at all.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Which was the only thing it was missing.' }
  ]
});

PBE8.scene('u24-24-7', {
  set: 'letterdesk',
  arr: 0,
  cast: {
    lina: { rig: 'f-20s-b', name: 'Lina', voice: 'en-NZ-MollyNeural', shirt: '#8a5f7a', shirt2: '#6e4b61',
      full: true, scale: 0.46, bottom: 46, at: [0.29, 0.62],
      pose: 'rest' },
    sayegh: { rig: 'm-50s-b', name: 'Mr Sayegh', voice: 'en-AU-WilliamMultilingualNeural', shirt: '#4a5e74', shirt2: '#3a4a5c',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'sayegh', cam: { shot: 'wide' },
      en: 'Lina has her certificate. I want to write that she is fluent in '
            + 'written and spoken English. It will get her the interview.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ It will get her the interview and lose it for her in the first '
            + 'twenty minutes.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: 'You have not heard her speak lately.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ I have, and she is better than she was and she is not fluent, '
            + 'and she would say so herself. ⚠ And when the sentence fails, '
            + 'everything else in the reference fails with it — including the '
            + 'true things, which are the useful ones.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ May I say what the certificate actually is, because I sat the '
            + 'same one and I have thought about this since Monday. ⚠ It is a '
            + 'performance, on a stated day, against published criteria. It is '
            + 'not a description of a person.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: 'Then what is it worth?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Three things, and they are not small. ⚠ One: she read a long '
            + 'document under time pressure and found what it required of her. '
            + 'Two: she wrote to a word limit, twice. Three: she did both on a '
            + 'day she did not choose, in conditions she did not control. ⚠ A '
            + 'good many people in settled employment could not do any of the '
            + 'three.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: 'And what does it not say?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ That she will do it when nobody is marking. That she can do it '
            + 'in the documents of a trade she has not worked in. ⚠ And it says '
            + 'almost nothing about speaking, which an interview will establish '
            + 'in ten minutes anyway — so a reference that claims fluency is '
            + 'claiming the one thing the reader will check first and the '
            + 'certificate does not support.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'Then say what I did. Not what I am.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Three documents. Which three?' },
    { who: 'lina', cam: { shot: 'mid' },
      en: '⚠ The escalation standard I asked for in July and then wrote, '
            + 'because it did not exist. The Homs stock reconciliation of 2 '
            + 'November, which found 31,000. And the note of 19 September '
            + 'correcting my own earlier note — which is the one I would rather '
            + 'not include and is the one I would ask to see if I were them.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ And you understand that this reference is colder than the one I '
            + 'wanted to write, and that a cold reference may cost you an '
            + 'interview.' },
    { who: 'lina', cam: { shot: 'close' },
      en: '⚠ I understand it, and I would rather be asked about the November '
            + 'reconciliation than asked to explain the word fluent. ⚠ One of '
            + 'those conversations I can have.' }
  ]
});

PBE8.scene('u24-24-7-b', {
  set: 'letterdesk',
  arr: 0,
  cast: {
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
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
      en: 'Lina had her interview. Which of the three did they ask for?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ The September note. The one correcting her own earlier note, '
            + 'which she nearly left out.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'And?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ The man said it was the only document he had been sent that year '
            + 'by anybody that corrected its own author, ⚠ and that he had asked '
            + 'for it first for exactly that reason. She has the post from 1 '
            + 'February.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ I should say the thing I have been avoiding saying for three '
            + 'weeks. ⚠ If I had written fluent in written and spoken English, he '
            + 'would have asked her about the word fluent, which was the one '
            + 'conversation she could not have had. ⚠ I would have cost her the '
            + 'post with a sentence I wanted to write because it would have made '
            + 'me feel generous.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'And would you write it again?' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ No. And I would not have said that in December — I signed the '
            + 'cooler version because I was outvoted, and I am saying this in '
            + 'January because of what the man asked for.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'And what did Lina ask you for at the end?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ A copy of the reference, which nobody had offered her. ⚠ She '
            + 'said she wanted the list of three acts, because she had never seen '
            + 'what she could do written down as things she had done — and that '
            + 'she would be writing the same page about herself in two years for '
            + 'whoever came next.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'And the first Mondays?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Four of four since 14 December. One document read aloud to Lina '
            + 'on the first Monday, and she has asked me on each of the four — '
            + 'and on the second one I had not prepared anything and she asked '
            + 'anyway, which is the whole difference between her and a reminder.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'And the count next December?' },
    { who: 'nour', cam: { shot: 'close' },
      en: '⚠ I do not know, and that is the point of having written this '
            + 'year\'s figure down. ⚠ One in nine, in my own favour. If it is '
            + 'three in nine next year I will have learnt something about myself '
            + 'that nothing else in two years has told me — and if it is still '
            + 'one, that is also a finding, and it is the first one I will have '
            + 'been able to make twice.' }
  ]
});
