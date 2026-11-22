/* Unit 10 — the acted dialogues. Every line is the book's own. */
PBE7.scene('u10-10-1', {
  set: 'meeting',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'phone', hold: 'phone' },
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Tuesday at nine. One hour. The paper says the Dallal matter.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ Three words, and four people will arrive expecting four different hours.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is Mr Ayoub\'s meeting. He knows what he wants out of it.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ He does, and he is the only one who does, and that is not the '
            + 'same as the room knowing. ⚠ Ask three questions before Tuesday.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Which three?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ Is it for a decision or for a discussion? If it is for a '
            + 'decision, whose decision is it? And what would a good hour look '
            + 'like at ten o\'clock?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The third one is strange.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ It is the only one that cannot be answered with a word. ⚠ A man '
            + 'who tells you what a good hour looks like has told you his agenda '
            + 'without being asked for it — and a man who cannot answer it has '
            + 'called a meeting to think out loud, which is a different hour and '
            + 'needs a different preparation.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And I ask in writing?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ Two lines, the day before, and not because you need it in a '
            + 'document. ⚠ Because a question asked in the room at nine takes the '
            + 'first ten minutes of the hour and sounds like an objection — and '
            + 'the same question asked on Monday is help.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if he does not answer?' },
    { who: 'hala', cam: { shot: 'close' },
      en: '⚠ Then you know it is a discussion and you prepare for a '
            + 'discussion. ⚠ An unanswered question about purpose is itself an '
            + 'answer, and it is worth having before nine rather than at twenty '
            + 'past.' }
  ]
});

PBE7.scene('u10-10-1-pair', {
  set: 'meeting',
  arr: 0,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'phone', hold: 'phone' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'What would a good hour look like at ten o\'clock?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'We would have discussed the Dallal matter.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'That is the paper read back to me. What would be true at ten that '
            + 'is not true now?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…The paper would have gone to his board.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Good. What else?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And nothing would have gone to the bank that they did not have on Friday.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Stop there. You have just told me what the meeting is for.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I have told you what I need out of it.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'You have told me a condition about Thursday, in a meeting on '
            + 'Tuesday. That is not a need, that is the agenda.' }
  ]
});

PBE7.scene('u10-10-2', {
  set: 'meeting',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'phone', hold: 'phone' },
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Four of us and one hour. How does an hour get used?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ Badly, unless somebody writes down what each of the four came '
            + 'for. Do it now, on one sheet, before Tuesday.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Mr Ayoub wants it closed before Thursday.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ Yes. Me?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'You want Dallal on the standing exception list in the credit policy.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ Because the account is 9.2 million at seventy-four days and the '
            + 'policy says sixty. ⚠ That is an interest and I will say it out '
            + 'loud at nine o\'clock.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And Mr Sayegh wants nothing in writing that reads as an admission.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ Also an interest, also sayable. And you?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'A decision on whether the paper goes to Dallal\'s board as it stands.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ Which is the only decision on the paper and it is not on the '
            + 'paper. ⚠ Write it at the top of your own sheet, because it will '
            + 'come up at nine fifty-five or not at all.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Why fifty-five?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ Because three men with three interests will spend fifty minutes '
            + 'on the two that are easiest to agree, and the item belonging to '
            + 'the person who did not call the meeting goes last. ⚠ That is not '
            + 'malice, it is arithmetic.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if I say Bassel wants to protect himself?' },
    { who: 'bassel', cam: { shot: 'close' },
      en: '⚠ Then you have said a motive instead of an interest and I will '
            + 'deny it, correctly, and the meeting will spend four minutes on me. '
            + '⚠ An interest is what somebody needs out of the hour; a motive is '
            + 'why you think he needs it. Only the first is sayable, and only the '
            + 'first is useful.' }
  ]
});

PBE7.scene('u10-10-2-pair', {
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
      en: 'Fadi wants to make himself indispensable.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Is that what he needs out of the hour?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…No. He has said the opposite, actually. He wants it written down.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So what does he need?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Not to be the only person who knows the run.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Is there a figure?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Nineteen addresses, and none of them written anywhere.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Now say the two versions one after the other.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Fadi wants to make himself indispensable. Fadi needs the nineteen '
            + 'addresses written down so that he is not the only person who knows '
            + 'them.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'The first one is the opposite of the truth, and you believed it '
            + 'until I asked for the figure.' }
  ]
});

PBE7.scene('u10-10-3', {
  set: 'meeting',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'phone', hold: 'phone' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Before we start — could I raise something at the end, if there is time?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ No, and you know that is a no, because there is never time at '
            + 'the end. ⚠ Ask me properly.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ There is one decision on the table that is not on the paper. It '
            + 'takes four minutes and it has to be taken today.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Better. Which three words tell me it is a decision and not a report?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'On the table.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ And four minutes is a number, so I can put it somewhere. ⚠ A few '
            + 'minutes is not a number and goes to the end, which is where '
            + 'nothing happens. When do you want it?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Second. After your opening and before the credit item.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Why not first?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Because your opening sets what closed means, and my decision is '
            + 'about a document going out, so it belongs inside your definition '
            + 'and not before it.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ That is the right answer and it is not why you want to be second.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ It is also because Bassel\'s item has arithmetic in it and will '
            + 'take twenty minutes.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Say both. ⚠ A man who gives me one true reason and holds back '
            + 'the practical one is a man I have to work out — and I have four '
            + 'people and an hour.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Second, then. Four minutes.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: '⚠ Second. And if it turns out to need ten, say so at minute four '
            + 'and I will decide then — do not quietly take ten.' }
  ]
});

PBE7.scene('u10-10-3-pair', {
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
      en: 'I want to go second. My decision is about a document, and your '
            + 'opening sets what we mean by settled.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'That is the right answer and it is not why you want to be second.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It is a real reason.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It is a real reason and it is not the reason. Give me the other one.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The costing item has arithmetic in it and it will take twenty '
            + 'minutes of the sixty.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So if you go after it you do not go at all.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Yes.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Say both, next time, in that order. The principled one tells me '
            + 'where it belongs and the practical one tells me why you are asking '
            + 'me now.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The second one sounds like a complaint about the costing item.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'It sounds like a man who has read the paper. I have four people '
            + 'and an hour, and I cannot work out what you are not saying.' }
  ]
});

PBE7.scene('u10-10-4', {
  set: 'meeting',
  arr: 0,
  cast: {
    sayegh: { rig: 'm-50s-b', name: 'Mr Sayegh', voice: 'en-AU-WilliamMultilingualNeural', shirt: '#4a5e74', shirt2: '#3a4a5c',
      full: true, scale: 0.46, bottom: 46, at: [0.33, 0.62],
      pose: 'phone' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'phone', hold: 'phone' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'hold', hold: 'slip' },
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'So the account goes on the exception list. Agreed.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Before that is decided — one fact. ⚠ The sixty days in the '
            + 'policy run from the invoice date and not from delivery. On invoice '
            + 'dates the account is at sixty-one days, not seventy-four.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Bassel?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ She is right, and I have been quoting delivery. Sixty-one.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Does the decision change?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ I do not know, and that is not my item. ⚠ It is one day over '
            + 'instead of fourteen, which is a different conversation and may '
            + 'still end in the same place.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ And that is the whole of how it is done. ⚠ Four words to open — '
            + 'before that is decided — ⚠ then one fact, with its source, and '
            + 'then stop.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Stop where?' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Before saying what you think the decision should be. ⚠ You '
            + 'corrected the basis and you did not take a position on the outcome '
            + '— and that is why Bassel could agree with you in four words '
            + 'instead of defending himself for ten minutes.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if I had said so it should not go on the list?' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Then you would have been arguing against Bassel\'s item instead '
            + 'of correcting a date, and he would have had to fight the '
            + 'correction to keep the item. ⚠ Which he would have done, and the '
            + 'policy would still say invoice, and the minute would say '
            + 'seventy-four days.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the timing?' },
    { who: 'sayegh', cam: { shot: 'close' },
      en: '⚠ Before it is minuted. Four seconds earlier is a fact; four '
            + 'seconds later is a request for a reversal — and a reversal has to '
            + 'be somebody\'s fault before it can happen.' }
  ]
});

PBE7.scene('u10-10-4-pair', {
  set: 'meeting',
  arr: 0,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'phone', hold: 'phone' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'So we pay Shaheen\'s March invoice and recover it later. Agreed. I '
            + 'will minute that.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Item seven. The cost a carton is 41 piastres, as the yard has it.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Before that is decided — the 41 excludes hired vans. On one basis it is 49.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And the invoice we just minuted is a hired van.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Yes.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So your fact belonged four minutes ago and you gave it to me now.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I was working out how to say it.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'You had it right the second time and you spent four minutes on the '
            + 'wording. The wording is four words.' }
  ]
});

PBE7.scene('u10-10-5', {
  set: 'meeting',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'phone', hold: 'phone' },
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The draft minute has come round. Item 3: the credit position was noted.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Noted by whom, and what follows from it?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Nothing follows. It was a twenty-minute item and it ended in a decision.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Then the minute is wrong, and it is wrong in the commonest way '
            + 'there is. ⚠ Noted records nothing. It is the word a minute uses '
            + 'when the writer was not sure what happened.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What should it say?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Four things. What was decided, on what basis, who owns it, and '
            + 'by when. ⚠ The account is placed on the standing exception list at '
            + 'sixty-one days, calculated on invoice dates, reviewed on 30 '
            + 'September — Bassel.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the basis is in it because of Tuesday.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ The basis is in it because in September nobody will remember '
            + 'that sixty-one was invoice dates and seventy-four was delivery — ⚠ '
            + 'and a review that starts from the wrong basis undoes the whole of '
            + 'what you did at nine twenty-six.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'There is a worse one. Item 5 says it was agreed that the paper '
            + 'would be reviewed.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ That is the other fault and it is the dangerous one. ⚠ Nothing '
            + 'was agreed; the paper was discussed and no decision was taken. A '
            + 'discussion minuted as a decision is worse than a decision minuted '
            + 'as a discussion.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Why worse? Both are wrong.' },
    { who: 'nadia', cam: { shot: 'close' },
      en: '⚠ Because a decision recorded as a discussion can be taken again — '
            + 'it costs you a second meeting and nothing else. ⚠ A discussion '
            + 'recorded as a decision cannot be untaken, and in four months '
            + 'everybody will act as though the review was agreed and nobody will '
            + 'be able to say who agreed to do it or when.' }
  ]
});

PBE7.scene('u10-10-5-pair', {
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
      en: 'Both faults are in this minute. Item 2 and item 3.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Which do you correct first?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Item 2. It is my own item and it has disappeared.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'That is a reason about you. Which is worse for the company?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Item 3. Nothing was agreed and the minute says it was.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Why is that worse?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Because item 2 can be decided again. It costs a meeting.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And item 3?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Item 3 cannot be untaken. In four months the list will be a thing '
            + 'we agreed to prepare and did not, and nobody will be able to say '
            + 'who agreed it.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'So correct item 3 first, and correct item 2 as well, and do not '
            + 'confuse the order with the importance to you.' }
  ]
});

PBE7.scene('u10-10-6', {
  set: 'meeting',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'phone', hold: 'phone' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Two corrections to the draft minute. Item 4 and item 5.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Are they points of accuracy or points of substance? Because I '
            + 'can grant one of those and I cannot grant the other.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Item 5 first. The minute says the position regarding the bank was '
            + 'discussed. Nobody mentioned the bank.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Accuracy. Granted, and it comes out. ⚠ A record of what was said '
            + 'is mine to correct, because I was there and I chaired it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Item 4 says it was agreed that the paper would be reviewed before '
            + 'issue. Nothing was agreed; you said you would think about it '
            + 'overnight.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Also accuracy, and granted. ⚠ It will say that I undertook to '
            + 'consider the matter overnight, which is what happened.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And I think the paper should go as it stands.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Now you have moved, and I want you to notice that you moved. ⚠ '
            + 'That is a point of substance and it is not a correction to a '
            + 'minute at all — it is a submission about a decision I have not '
            + 'taken yet.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'They came out of the same reading of the same document.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ They did, and if you had put them in one note I would have '
            + 'refused both. ⚠ Because the moment a chairman sees an argument '
            + 'inside a correction, he reads the whole thing as an attempt to '
            + 'improve the record — and a record that can be improved is not a '
            + 'record.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So the substance goes where?' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: '⚠ In a separate note, with its own date, which I will read with '
            + 'the paper and not with the minute. ⚠ Two documents, two readers in '
            + 'me, and both of them are willing. One document and I am a man '
            + 'being got round.' }
  ]
});

PBE7.scene('u10-10-6-pair', {
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
      en: 'Item 3 records that the list was agreed. Nothing was agreed — Nour '
            + 'said she would raise it with Fadi first, and that is all that was '
            + 'said, and in any case the list ought to be prepared regardless of '
            + 'what Fadi says.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Stop. Where did you move?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…At and in any case.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Say the first half again and stop at the full stop.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Item 3 records that the list was agreed; nothing was agreed. Nour '
            + 'said she would raise it with Fadi first.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Granted, in four seconds. Now the second half, in a separate note.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It feels dishonest to split them. They are the same thought.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'They came out of one thought and they ask two different people for '
            + 'two different things. One asks me what was said. The other asks '
            + 'the Chairman what to do.' }
  ]
});

PBE7.scene('u10-10-7', {
  set: 'meeting',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'phone', hold: 'phone' },
    tarabishi: { rig: 'm-50s-b', name: 'Mr Tarabishi', voice: 'en-NZ-MitchellNeural', shirt: '#7a5a3f', shirt2: '#604832',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Three points on the draft, and one of them is mine to apologise '
            + 'for. Item 5 first.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'The bank line. Go on.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Nobody mentioned the bank. Thursday was said twice and bank was '
            + 'never said at all.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: '⚠ You are right, and I will tell you exactly where it came from. ⚠ '
            + 'I was not in the room for the first ten minutes — I was finding '
            + 'the file — and when I came in, Mr Ayoub was saying Thursday for '
            + 'the second time.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And Thursday is obviously the committee.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: '⚠ It is obviously the committee to anybody who works here. ⚠ So I '
            + 'wrote what the Thursdays were about, which is what a minute-taker '
            + 'does when he has missed the start — and it is the one thing a '
            + 'minute-taker must never do.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Item 3 says the credit position was noted.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: '⚠ Noted is what I write when I have not understood what happened, '
            + 'and I have been doing it for nineteen years, and nobody has ever '
            + 'said so to me.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It was a twenty-two-minute item and it ended in a decision.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: '⚠ Then give me the four things and I will write them. ⚠ What, on '
            + 'what basis, who owns it, and by when.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ The owner and the date are my inference. Nobody said either out loud.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: '⚠ Then I will take the first two from you and I will ask the '
            + 'Chairman for the other two, because an owner nobody named is not '
            + 'mine to supply and not yours.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And item 4.' },
    { who: 'tarabishi', cam: { shot: 'close' },
      en: '⚠ Already changed, as soon as you said it. Undertook to consider '
            + 'overnight. ⚠ And now I will ask you for something nobody has '
            + 'offered me in nineteen years. ⚠ Send me your own note of the '
            + 'meeting — the one with the times on it — and I will read it '
            + 'against mine before I circulate anything, for this meeting and the '
            + 'next one.' }
  ]
});

PBE7.scene('u10-10-7-pair', {
  set: 'meeting',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'phone', hold: 'phone' },
    tarabishi: { rig: 'm-50s-b', name: 'Mr Tarabishi', voice: 'en-NZ-MitchellNeural', shirt: '#7a5a3f', shirt2: '#604832',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Item 2. The minute says the hire position was noted. It was '
            + 'eighteen minutes and it ended in an instruction.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'Then give me the four things.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Shaheen\'s instructed for March, at the February rate, owned by '
            + 'Lina, confirmed in writing by 20 June.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'The owner and the date — did anybody say either of those out loud?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The owner, yes. The date is my inference.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'Then I will write the owner and I will ask the Chairman for the date.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'You could just write the 20th.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'I could, and then the record would contain a date that nobody in '
            + 'the room chose, and in September somebody will be late against it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And my note has the times on it.' },
    { who: 'tarabishi', cam: { shot: 'close' },
      en: 'Send it before I circulate. Nineteen years, and nobody has offered me that.' }
  ]
});

PBE7.scene('u10-10-7-b', {
  set: 'meeting',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'phone', hold: 'phone' },
    tarabishi: { rig: 'm-50s-b', name: 'Mr Tarabishi', voice: 'en-NZ-MitchellNeural', shirt: '#7a5a3f', shirt2: '#604832',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: '⚠ Item 5. Nobody mentioned the bank. Thursday was said twice and '
            + 'bank was never said at all.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: '⚠ You are right, and I will tell you where it came from. ⚠ I was '
            + 'not in the room for the first ten minutes — I was finding the file '
            + '— and when I came in, Mr Ayoub was saying Thursday for the second '
            + 'time. ⚠ So I wrote what the Thursdays were about, which is the one '
            + 'thing a minute-taker must never do.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And item 3 says the credit position was noted. It was a '
            + 'twenty-two-minute item and it ended in a decision.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: '⚠ Noted is what I write when I have not understood what happened. '
            + '⚠ Nineteen years, and nobody has ever said so to me. ⚠ Give me the '
            + 'four things and I will write them: what, on what basis, who owns '
            + 'it, and by when.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ The owner and the date are my inference. Nobody said either out loud.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: '⚠ Then I will take the first two from you and ask the Chairman for '
            + 'the other two, because an owner nobody named is not mine to supply '
            + 'and not yours.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And item 4 is already changed.' },
    { who: 'tarabishi', cam: { shot: 'close' },
      en: '⚠ As soon as you said it. ⚠ And now I will ask you for something '
            + 'nobody has offered me in nineteen years. ⚠ Send me your own note '
            + 'of the meeting, the one with the times on it, and I will read it '
            + 'against mine before I circulate anything — for this meeting and '
            + 'the next one.' }
  ]
});
