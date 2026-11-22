/* Unit 1 — the acted dialogues. Every line is the book's own. */
PBE7.scene('u1-1-1', {
  set: 'directorsroom',
  arr: 0,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'Read me your note on the Dallal letter.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Further to the letter received on 9 January from Mr Rafiq Dallal of —' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Stop. What do I know?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That a letter came, and from whom.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Which I knew, because I gave it to you. ⚠ I read four lines, of '
            + 'anything — a letter, a report, a note under my door. A man who '
            + 'stopped at line four of your note would know nothing he did not '
            + 'know yesterday.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The figure is in paragraph three.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ The figure is always in paragraph three. Why?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…Because I was taught to set the scene first.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ You were, and it is not stupid: it is correct for an essay and '
            + 'wrong for a page a working man reads standing up. ⚠ The slow '
            + 'opening assumes a reader who has already decided to read the whole '
            + 'thing. Most readers decide at line four.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So what are the first four lines?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ The figure, the request, and the date. Then everything else. Mr '
            + 'Dallal offers three years at about four times our export volume. '
            + 'He wants an answer by 26 January. ⚠ I am recommending against it '
            + 'as it stands, and the paper is attached.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is the whole thing in three sentences.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: '⚠ It is the whole thing a reader needs in order to decide whether '
            + 'to read the rest. And here is the part nobody believes: ⚠ a page '
            + 'that can be stopped at line four is more likely to be finished. A '
            + 'reader who has the content relaxes; ⚠ a reader three lines in with '
            + 'nothing starts looking for the end.' }
  ]
});

PBE7.scene('u1-1-1-pair', {
  set: 'directorsroom',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Further to the letter received on 9 January from Mr Rafiq Dallal, '
            + 'procurement director of the company in Beirut to which Ms Tannous '
            + 'supplies —' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Stop. I know that a letter came, and from whom, and I knew both '
            + 'before you started.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The figure is in paragraph three.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'The figure is always in paragraph three. What line is it on?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Line eleven.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Read me lines one to four with it in.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Mr Dallal offers three years at about four times our export '
            + 'volume. He wants an answer by 26 January. I am recommending '
            + 'against it as it stands, and the paper is attached.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Now I know what has changed and what you want, and I have not lost '
            + 'the history — it is below the line.' }
  ]
});

PBE7.scene('u1-1-2', {
  set: 'directorsroom',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The paper has four questions in it.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Read them.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Whether we take the contract. Whether we can supply the volume. '
            + 'Whether the damages clause is acceptable. And whether Ms Tannous '
            + 'is told before we answer.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Only one of those is a question. The volume is arithmetic — '
            + 'eleven hundred a month against our four hundred, and the press '
            + 'runs three hours a night. ⚠ That is settled whatever anybody '
            + 'wants.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the damages clause?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Not mine to decide and not yours. It is a legal question and we '
            + 'will take advice on it. ⚠ A paper that asks me to decide it is '
            + 'asking me to guess in writing.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And whether Ms Tannous is told?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ That is a closed point and you closed it, in the letter you sent '
            + 'her on the 11th. ⚠ You told her the day the letter came, before '
            + 'anybody asked you to, and we cannot un-tell her.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I thought that was obvious.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ It was obvious to you and it is the only thing in this file '
            + 'anybody will thank you for in a year. ⚠ Write it down as closed, '
            + 'with the date, or somebody will reopen it in March.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So the paper has one question.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: '⚠ One question, two settled facts and one matter for somebody else '
            + '— and if you label them, I can read the paper in six minutes. ⚠ If '
            + 'you do not, I read four pages looking for the question, and I find '
            + 'it in paragraph nine, and by then I am irritated with you and not '
            + 'with the contract.' }
  ]
});

PBE7.scene('u1-1-2-pair', {
  set: 'directorsroom',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The Friday opening is still open. Everybody is waiting to hear.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'When was it closed, and by whom?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It was not closed. It was discussed in August and nothing came of it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then it is not closed — it is quiet. There is a difference and it '
            + 'is about three months long.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Mr Ayoub said in August that we would not do it until the '
            + 'generator was sorted out.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'That is a decision with a condition on it, which is the worst kind '
            + 'to leave unwritten. Has the generator been sorted out?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…It runs from one until four, and it has since the first week.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Then the condition was met in the first week and nobody told him. '
            + 'The item is open again and it has been open since August with '
            + 'nobody holding it.' }
  ]
});

PBE7.scene('u1-1-3', {
  set: 'directorsroom',
  arr: 2,
  cast: {
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nadia', cam: { shot: 'wide' },
      en: 'Your paper explains the Tannous arrangement in eleven lines.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So that the reader has it.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ The reader signed it. ⚠ He signed it on 28 April, in this room, '
            + 'and you were standing there.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I thought it was safer to put it in.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Safer for whom? ⚠ Eleven lines of something he signed tells him '
            + 'one thing only: that you do not trust him to remember his own '
            + 'signature.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is not what I meant by it.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ It never is, and it is what it says. Write the Tannous '
            + 'arrangement. Three words. ⚠ If he has forgotten, he will ask, and '
            + 'the asking costs him nine seconds.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if he has forgotten and does not ask?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Then he is guessing, and that is a real risk — so there is one '
            + 'thing you still explain. ⚠ Not what he knows: what he knows '
            + 'differently from you.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Meaning?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ He thinks the arrangement runs to 28 April because that is the '
            + 'date he signed. It runs twelve months from 1 May. ⚠ He has said '
            + 'the wrong date twice this year and nobody corrected him. ⚠ That '
            + 'you explain — in one line, with the date, and without saying that '
            + 'he was wrong.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So the eleven lines become one.' },
    { who: 'nadia', cam: { shot: 'close' },
      en: '⚠ One line, and it is not one of the eleven. ⚠ You wrote eleven '
            + 'lines of what he knows and left out the one thing he has wrong. '
            + 'That is what the long explanation is: ⚠ it looks like service and '
            + 'it is you explaining the file to yourself.' }
  ]
});

PBE7.scene('u1-1-3-pair', {
  set: 'directorsroom',
  arr: 2,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'Who do you write to most?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Mr Attar at the mill. Twice a week.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'What does he state as a fact that is not quite right?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…He says we order in multiples of five hundred. We stopped that in '
            + 'March. We order in multiples of two hundred since the bench page '
            + 'was revised.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And how long has he been saying it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Since March. Every quotation he sends is in fives.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Has anybody told him?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'We round up. We have been buying three hundred too much board nine '
            + 'months out of ten to avoid telling him.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Then the sentence is one line, with the date, and without saying '
            + 'he was wrong. And it is worth about nine months of board.' }
  ]
});

PBE7.scene('u1-1-4', {
  set: 'directorsroom',
  arr: 0,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'You are recommending against a contract worth four times our export volume.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I am.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ On what are you answerable?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'On everything in the paper, I suppose.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Then you are answerable for nothing, because nobody can be '
            + 'answerable for everything and everybody knows it. Again. ⚠ On '
            + 'what?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…On the figures. The volumes, the hours, the markers, what the '
            + 'press can actually do at night. I counted them myself.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Good. And?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And on the reading of his letter — that the price is a condition '
            + 'of the term.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ And what are you not answerable for?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The damages clause. And whether three years is a risk worth '
            + 'taking, which is a judgement and yours.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Write all of that down, in that order, at the end of the paper. '
            + '⚠ A person who never states a limit is given everything and blamed '
            + 'for everything — and I have watched it happen to better people '
            + 'than either of us.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It sounds like covering myself.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ It is the opposite, and here is the test. ⚠ An excuse arrives '
            + 'before the work and a limit arrives after it. That is not my '
            + 'department is an excuse. ⚠ I counted these myself and I will stand '
            + 'behind them; the three-year judgement is yours and I can be '
            + 'overruled on it is a limit, and it costs you something to write.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What does it cost?' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: '⚠ It names the ground you cannot retreat from. ⚠ If one of those '
            + 'figures is wrong, you have just signed for it. ⚠ That is why so '
            + 'few people write it, and it is why the ones who do are believed.' }
  ]
});

PBE7.scene('u1-1-4-pair', {
  set: 'directorsroom',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'That is not my department.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'When did you say it — before the work or after it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Before. I said it when the file arrived.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then it was an excuse, and it cost you nothing. Rewrite it as a limit.' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…I have checked the four invoices and the arithmetic is right, and '
            + 'I will stand behind that. Whether we pay them before the end of '
            + 'the month is a cash decision and it is not mine.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And what have you just signed for?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The arithmetic. If one of those four is wrong it is mine and nobody else\'s.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'That is the difference, and it is the whole difference. The first '
            + 'version protected you and told the reader nothing. The second one '
            + 'exposes you on four invoices and makes the rest of the sentence '
            + 'believable.' }
  ]
});

PBE7.scene('u1-1-5', {
  set: 'directorsroom',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' },
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'I have put please correct me if I am wrong at the end.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ Nobody has ever corrected anybody because of that sentence.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is polite.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ It is polite and it is empty. It names nothing, so there is '
            + 'nothing to correct. ⚠ A reader who disagrees with you reads it and '
            + 'thinks: with what? Where? And then does nothing, because finding '
            + 'your mistake for you is work.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So what do I write instead?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ Name the thing that could be wrong, and say what changes if it '
            + 'is. You are recommending against three years. What is the weakest '
            + 'brick?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The board. I have assumed the mill cannot supply four times what '
            + 'we take, and I have not asked them.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ Then write that. ⚠ If the mill can take four times the board, '
            + 'paragraph 7 is wrong and the recommendation changes. ⚠ Now a '
            + 'reader who knows the mill has somewhere to put his knowledge.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if he does know, and it changes everything?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ Then you have found it out in January, in one line, instead of '
            + 'in April, in front of Mr Dallal. ⚠ What are you actually afraid '
            + 'of?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That he will say: she wrote four pages on a guess.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ He will say that about the version with please correct me if I '
            + 'am wrong in it. ⚠ A guess you have named is an assumption. A guess '
            + 'you have hidden behind a politeness is a guess.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And how many of these go in?' },
    { who: 'hala', cam: { shot: 'close' },
      en: '⚠ One, and not repeated. ⚠ Two invitations in one paper read as a '
            + 'writer who does not believe her own argument — and then the reader '
            + 'corrects the argument instead of the assumption.' }
  ]
});

PBE7.scene('u1-1-5-pair', {
  set: 'directorsroom',
  arr: 1,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'You have three invitations in four pages. Read them.' },
    { who: 'a', cam: { shot: 'mid' },
      en: '"I may be wrong about the volume." "Please correct me if I have '
            + 'misread the clause." "If the mill can supply four times the board, '
            + 'paragraph 7 is wrong and the recommendation changes."' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Which one has a consequence attached?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The third.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then the third survives. What were the other two?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…The first is an apology about a figure I counted myself over four nights.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Which is not an open question at all. It is a figure and it '
            + 'belongs where you signed for it.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And the second is an apology for reading a document I have quoted in full.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So two apologies and one question. Take out the apologies and read '
            + 'the paper back to yourself. Does it sound more sure or less?' },
    { who: 'a', cam: { shot: 'close' },
      en: 'More. And shorter by about forty words.' }
  ]
});

PBE7.scene('u1-1-6', {
  set: 'directorsroom',
  arr: 2,
  cast: {
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'bassel', cam: { shot: 'wide' },
      en: 'You have read his letter four times. What has upset you?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Page one. ⚠ A small family workshop in Mezzeh with limited export '
            + 'experience.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'And?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ We have exported every month since January. Twice a month since March.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ Then separate the layers before you answer any of it. ⚠ What '
            + 'does the sentence say?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That we are small, in Mezzeh, and new to export. Two of those are true.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ What does it imply?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…That we are not in a position to negotiate. That a three-year '
            + 'offer is generous to us.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ And what does it assume?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ That we have no other buyer. ⚠ Which is the only one of the '
            + 'three that is actually a mistake — we have Ms Tannous, and a price '
            + 'list that holds for fourteen days, and a plater in Aleppo who put '
            + 'his rate up twelve per cent in March and we still have him.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ So the brief is useful. ⚠ It is nine words, it is written by the '
            + 'man you are negotiating with, and it tells you exactly what he '
            + 'believes about you. ⚠ You would have paid for that.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the part that is wrong about the export experience?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ Correct it once, with a figure, in the paper you are writing for '
            + 'your own employer — not in a letter to Mr Dallal. ⚠ A man who '
            + 'thinks you are inexperienced will make an offer that shows what he '
            + 'thinks. Let him make it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the small?' },
    { who: 'bassel', cam: { shot: 'close' },
      en: '⚠ Small is true and it is not an insult, and you will waste a year '
            + 'of your life if you decide it is.' }
  ]
});

PBE7.scene('u1-1-6-pair', {
  set: 'directorsroom',
  arr: 2,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'Read the sentence that annoyed you.' },
    { who: 'a', cam: { shot: 'mid' },
      en: '"A small family workshop in Mezzeh with limited export experience."' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Which part of it is true?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'None of it. We have exported every month since January.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Which part of it is true?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Small is true. And it is a family firm. And it is in Mezzeh.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So three of the four facts are correct and you have read the '
            + 'sentence as an insult.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It is written to be one.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It may be. And what would a year of proving that we are not small cost us?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'A year. And the twelve per cent, probably, because we would take '
            + 'work we cannot plate.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Then take the one that is wrong — the experience — correct it once '
            + 'to Mr Ayoub with a figure, and let Mr Dallal make the offer he '
            + 'believes in.' }
  ]
});

PBE7.scene('u1-1-7', {
  set: 'directorsroom',
  arr: 0,
  cast: {
    lina: { rig: 'f-20s-b', name: 'Lina', voice: 'en-NZ-MollyNeural', shirt: '#8a5f7a', shirt2: '#6e4b61',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'lina', cam: { shot: 'wide' },
      en: 'So we are not taking the Beirut contract.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Nothing has been decided. Where did you get that?' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'Your paper. ⚠ I am recommending against it in its present form. It '
            + 'is on the first page, line three.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ It is, and the word is recommending. ⚠ A recommendation is a '
            + 'thing one person says to another person who can say no.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'But you wrote four pages. Nobody writes four pages and then loses.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ People lose after four pages every day of the week, and I may be '
            + 'about to. Read the last line of page four.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: '⚠ I can be overruled on whether three years is a risk worth '
            + 'taking. That is a judgement and it is yours.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ So who has decided?' },
    { who: 'lina', cam: { shot: 'mid' },
      en: '…Nobody. ⚠ Mr Ayoub has. He said in the yard on Tuesday that it '
            + 'was the best thing that had happened to us in ten years.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ That is not a decision. That is an inclination, said out loud, '
            + 'before he had read anything. ⚠ The paper exists because of it.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'Then why does everybody in the packing room think it is settled?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Because he said it in the yard and I wrote mine on paper, and a '
            + 'thing said in a yard travels in a morning while a thing on paper '
            + 'waits for a reader. ⚠ That is the whole asymmetry and it is not '
            + 'fixable by writing better.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'So what do I tell them?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Four things, and in this order. ⚠ The volume is settled: eleven '
            + 'hundred a month against our four hundred. Ms Tannous was told on '
            + 'the 11th, and that is closed. The clause is a legal question and '
            + 'is not ours. And the only open item is whether we take three years '
            + '— ⚠ which is Mr Ayoub\'s, and which he has not taken.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'And if they ask me what you think?' },
    { who: 'nour', cam: { shot: 'close' },
      en: '⚠ Tell them what I have written, which is against, and that I have '
            + 'said in writing that I will pack eleven hundred a month without '
            + 'complaining if he goes the other way. ⚠ The second half is the '
            + 'half that stops a rumour.' }
  ]
});

PBE7.scene('u1-1-7-pair', {
  set: 'directorsroom',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The night-marking question is still open. We are all waiting.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It was closed on 1 October, and it was closed by the man who '
            + 'appointed the two markers.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Nobody told the packing room.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'That is a fair complaint and it is a different one. Where did you '
            + 'hear it was open?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Somebody said it in the yard. I think it came from the gate.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It usually does. Four things, in this order, and say them where '
            + 'you heard it. Settled: we mark at night. Closed on 1 October: the '
            + 'two markers. Not ours: what the generator can carry, which is the '
            + 'electrician\'s. Open: nothing.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And if they ask who decided?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Say the name and the date. An open item with no named owner is '
            + 'what a rumour is made of, and this one has an owner and has had '
            + 'one for three months.' }
  ]
});

PBE7.scene('u1-1-7-b', {
  set: 'directorsroom',
  arr: 0,
  cast: {
    lina: { rig: 'f-20s-b', name: 'Lina', voice: 'en-NZ-MollyNeural', shirt: '#8a5f7a', shirt2: '#6e4b61',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'lina', cam: { shot: 'wide' },
      en: 'Nobody in the packing room can tell me what is happening about Beirut.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then take four things and say them in this order. ⚠ Settled: the '
            + 'volume. Eleven hundred a month against our four hundred, and the '
            + 'press runs three hours a night. That is arithmetic and it does not '
            + 'change.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'And Ms Tannous?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Closed, on the eleventh of January. She was told the day the '
            + 'letter came, before anybody asked me to, and we cannot un-tell '
            + 'her. ⚠ Say the date; a closed point without a date reopens in '
            + 'March.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'The clause everybody is talking about?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Not ours. It is a legal question and advice was sought from Mr '
            + 'Sayegh, our advocate, on the twelfth. ⚠ Nobody in this office '
            + 'should be guessing about it in writing.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'So what is actually open?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ One thing. Whether we take three years. ⚠ And it is Mr Ayoub\'s, '
            + 'and he has not taken it — whatever he said in the yard on Tuesday, '
            + 'which was an inclination and not a decision.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'And you have written against it.' },
    { who: 'nour', cam: { shot: 'close' },
      en: '⚠ I have, and I have also written that if he decides the other way '
            + 'I will pack eleven hundred a month and not say I told you so. ⚠ '
            + 'Say that part too. It is the half that stops a rumour.' }
  ]
});
