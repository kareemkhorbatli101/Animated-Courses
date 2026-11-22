/* Unit 12 — the acted dialogues. Every line is the book's own. */
PBE7.scene('u12-12-1', {
  set: 'signingdesk',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The question is what to do about clause 19.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ That is a subject, not a question. ⚠ A subject can be discussed '
            + 'for an hour and leave the room exactly where it found it. Write it '
            + 'as a question.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Do we accept clause 19, or ask for Damascus, or ask for a third country?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Three answers, which is three decisions. ⚠ And a meeting with '
            + 'three answers in front of it takes the easiest one and leaves '
            + 'believing it has dealt with all three.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The third country is Cyprus and Mr Sayegh says it is possible.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Is it available to us this month, at a price we would pay?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'No. It needs their agreement and they have not offered it.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Then it is not an answer, it is a preference. ⚠ Put it in the '
            + 'paper as an option we did not take, with the reason, and take it '
            + 'out of the question.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So: do we accept clause 19 as drafted, or ask for Damascus?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ And what does ask for Damascus cost if they refuse?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The agreement goes back into negotiation and the 1 August date goes.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Then say so in the question. ⚠ Do we accept clause 19 as '
            + 'drafted, or ask for Damascus and accept that the 1 August date may '
            + 'go? Nineteen words, two answers, and the price of the second one '
            + 'is inside the question.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It makes the second answer look expensive.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: '⚠ It is expensive. A question that hides the price of one answer '
            + 'is not a question, it is a recommendation with a question mark on '
            + 'it.' }
  ]
});

PBE7.scene('u12-12-1-pair', {
  set: 'signingdesk',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Do we accept clause 19, or ask for Damascus?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'What does asking for Damascus cost if they refuse?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The agreement reopens. And the 1 August date goes.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Is that in your question?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'No. It is on page 1, in the table.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So a reader who reads only the question sees one answer with a '
            + 'cost and one without.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'He would read the table.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'He will read the table after he has formed a view from the '
            + 'question. Which answer will he have formed a view about?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…The one that looks free.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Put the price in the question and the table becomes confirmation '
            + 'instead of correction.' }
  ]
});

PBE7.scene('u12-12-2', {
  set: 'signingdesk',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'rest' },
    sayegh: { rig: 'm-50s-b', name: 'Mr Sayegh', voice: 'en-AU-WilliamMultilingualNeural', shirt: '#4a5e74', shirt2: '#3a4a5c',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'I have put four papers behind the question. Your note on the '
            + 'clause, the root-cause paper, the facility paper and a cost page.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Tell me what each one answers, in one line, and what it does not answer.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Yours answers what the clause means. It does not answer whether we '
            + 'should accept it.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Correct, and say so in the paper, because somebody will read my '
            + 'note as a recommendation and it is not one. Next.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ The root-cause paper answers what our evidence looks like if a '
            + 'tribunal has to weigh it. ⚠ Three of our four links are a '
            + 'document, one account and an inference — and an arbitration '
            + 'decides facts.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ That is the paper most people would not have put in, and it is '
            + 'the one that decides it. Go on.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The facility paper answers what the bank will ask. And the cost '
            + 'page answers what each route costs.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ And the January correspondence? You have left it out.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Because it is about the same customer and not about this '
            + 'question. It answers what happened in March. Nothing in it bears '
            + 'on where a dispute would be heard.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Good, and that is the harder half of the method. ⚠ A paper that '
            + 'is about the same subject is not thereby behind the decision — and '
            + 'a decision paper with six papers behind it, two of which answer '
            + 'nothing, has four papers and two pieces of furniture.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And somebody will ask where the January file is.' },
    { who: 'sayegh', cam: { shot: 'close' },
      en: '⚠ Then list it as considered and not relied on, with the one line '
            + 'saying what it answers. ⚠ That is not padding. It is the '
            + 'difference between a paper you did not read and a paper you read '
            + 'and set aside.' }
  ]
});

PBE7.scene('u12-12-2-pair', {
  set: 'signingdesk',
  arr: 1,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'Your paper has Mr Sayegh\'s note behind it. What does the note say '
            + 'about itself?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Nothing. It is a note on the clause.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then I am the board. I have read it and I am going to accept his advice.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'He has not given any advice.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'He has written two pages about a clause at your request. What '
            + 'would you call that?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Advice about what the clause means.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Which is not the sentence at the top of it. Write the sentence.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'This note answers what the clause means and does not answer '
            + 'whether we should accept it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And better still?' },
    { who: 'a', cam: { shot: 'close' },
      en: 'Get him to write it himself, at the head of his own note.' }
  ]
});

PBE7.scene('u12-12-3', {
  set: 'signingdesk',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'I have five reasons for accepting clause 19.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Then a reader will find the weakest of the five, and the '
            + 'decision will be worth whatever that one is worth. ⚠ Which of the '
            + 'five decides it?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The evidence. An arbitration decides facts, and two of our four '
            + 'links are an account and an inference.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Say more. Why does that favour Beirut rather than Damascus?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Because a tribunal of commercial arbitrators reads a marked '
            + 'chain the way Mr Attar reads it — a document, an account, an '
            + 'inference, each weighted. ⚠ A court takes evidence in a form we '
            + 'have never prepared, and the two soft links would be tested by a '
            + 'process we do not know.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ That is the reason, and it is the only one of the five that '
            + 'would change the answer if it changed. Test the others against '
            + 'that.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Cost. Beirut is about four times a Damascus hearing.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ True. Does it change the answer?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…No. It changes what we spend if there is a dispute, and there has '
            + 'never been one in nineteen years.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Then it does not decide it, and say so in those words — this is '
            + 'true and it does not decide it. Next.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The bank. The committee will ask about a foreign seat.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Will it change their answer?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Mr Haddad says it is a question and not an objection, and that '
            + 'he has four customers with Beirut clauses.' },
    { who: 'nadia', cam: { shot: 'close' },
      en: '⚠ Then it is a question to be ready for and not a reason. ⚠ Put '
            + 'both in the paper under factors that do not decide it, and you '
            + 'will be believed on the one that does.' }
  ]
});

PBE7.scene('u12-12-3-pair', {
  set: 'signingdesk',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Five reasons. The Mondays, the rate, the auditor, my time, and '
            + 'that Shaheen\'s have never let us down except once.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Take the last one. They let you down in February.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Once in three years.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And the February failure is the reason this decision exists. So '
            + 'your fifth reason is a reason against your own answer.' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…It is.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And it was in a list of five things offered as support. Which one '
            + 'was I always going to attack?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That one.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'So the whole recommendation was about to be argued on the weakest '
            + 'of five, and the weakest of five was not even on your side.' }
  ]
});

PBE7.scene('u12-12-4', {
  set: 'signingdesk',
  arr: 0,
  cast: {
    attar: { rig: 'm-50s-b', name: 'Mr Attar', voice: 'en-US-AndrewMultilingualNeural', shirt: '#4a5a74', shirt2: '#3a4a60',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'attar', cam: { shot: 'wide' },
      en: 'Your paper recommends accepting. Where is the case against?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'On page 3, under the factors that do not decide it.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ That is not the case against, that is a list of things you have '
            + 'dismissed. ⚠ The case against is the best argument a competent '
            + 'person would make for the other answer, written by you, as well as '
            + 'they would write it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then: if the dispute is about money rather than facts, Beirut '
            + 'costs about four times as much and decides nothing a Damascus '
            + 'court could not.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ That is a real case. Go on.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ And most disputes with a customer are about money. Ours would be '
            + 'about eleven cartons three times, which is a fact question, but a '
            + 'dispute about the 2.1 million of annual turnover would be a money '
            + 'question.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ So your deciding factor assumes the dispute we have already had, '
            + 'and not the dispute we might have. Write that sentence.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It weakens my recommendation.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ It states the condition on which your recommendation holds, '
            + 'which is a different thing and is worth more. ⚠ And if you do not '
            + 'write it, somebody will write it worse, later, in front of people '
            + '— and then your paper is a paper that missed something.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I could write it and answer it in the same paragraph.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ You can answer it, after it, in its own paragraph. ⚠ What you '
            + 'must not do is write it badly on purpose so that your answer looks '
            + 'better — because a reader who knows the subject sees the weak '
            + 'version and concludes that you could not see the strong one.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if the case against turns out to be stronger?' },
    { who: 'attar', cam: { shot: 'close' },
      en: '⚠ Then you have changed your mind on your own paper before anybody '
            + 'read it, which is the cheapest change of mind available.' }
  ]
});

PBE7.scene('u12-12-4-pair', {
  set: 'signingdesk',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The case against is that some people would rather we went to tender.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I would rather you went to tender. Shall I tell you why?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Go on.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'You are paying nine per cent over the market to the firm that '
            + 'failed you in February, for the third year, because the tender was '
            + 'left too late. The cover you are buying is cover against the thing '
            + 'they did.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That is better than my version.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It is my version. What have you just told me about yourself by '
            + 'writing the weak one?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That I had not thought of it.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Which is worse than if I thought you were being one-sided. '
            + 'One-sided I can discount. Not having seen it, I cannot.' }
  ]
});

PBE7.scene('u12-12-5', {
  set: 'signingdesk',
  arr: 1,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'Four pages. Which sentence will I be quoted in five years?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The recommendation, I suppose. On page 4.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Read it to me.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'In the light of all the circumstances it is recommended that '
            + 'clause 19 be accepted as drafted.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ In the light of all the circumstances is six words that say we '
            + 'had reasons and do not say what they were. ⚠ In five years '
            + 'somebody will ask what the circumstances were, and the four pages '
            + 'will be in a file nobody can find.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The basis is on page 3.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Then put it in the sentence. ⚠ The sentence that states a '
            + 'decision has two parts: what is decided, and on what basis — and '
            + 'the basis has to be the deciding factor and not a gesture at a '
            + 'file.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ We accept clause 19 as drafted, on the basis that our evidence '
            + 'in a fact dispute is better suited to arbitration than to a court.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ That is the sentence, and now say it twice more and change '
            + 'nothing. ⚠ Because the version I will be quoted is this one and '
            + 'not the next one you think of.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And it is recommended that?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Out. I am taking the decision and the paper is yours. ⚠ We '
            + 'accept is what the minute will say, and a recommendation written '
            + 'as a decision has pre-empted me — so the paper says I recommend '
            + 'and the minute says we accept, and the two sentences are different '
            + 'documents.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if the basis turns out to be wrong?' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: '⚠ Then we will be held to a sentence that says what we thought, '
            + 'which is the right thing to be held to. ⚠ A decision with no basis '
            + 'in it cannot be wrong and cannot be defended — and in five years '
            + 'that is the worse of the two positions by a long way.' }
  ]
});

PBE7.scene('u12-12-5-pair', {
  set: 'signingdesk',
  arr: 1,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'Three pages. Which sentence will I be quoted in five years?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'In the light of the position on cover, it is recommended that '
            + 'Shaheen\'s be instructed for March.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'What is the position on cover?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That no tender can produce a van before the 20th and the Monday '
            + 'customers take goods on the 2nd.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'You just said it in nineteen words. Why is it not in the sentence?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Because the sentence would be too long.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Read the two versions and tell me which one answers a question.' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…The long one.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Then it is not too long. It is the right length, which is whatever '
            + 'it takes to carry the basis.' }
  ]
});

PBE7.scene('u12-12-6', {
  set: 'signingdesk',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The last line says the decision will be reviewed as necessary.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ As necessary means nobody. ⚠ A review that belongs to nobody and '
            + 'happens on no date happens when a crisis chooses it, which is the '
            + 'one moment at which a decision cannot be reconsidered calmly.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then a date. The agreement runs twelve months from 1 August.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ So the natural date is before the first renewal, not after it — '
            + 'because a forum clause is almost never removed at a renewal, and '
            + 'the review has to happen while the question is still open. Say 1 '
            + 'June 2027.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the basis is in the recommendation already.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Then the record carries three things: the decision, the basis, '
            + 'and the review date. ⚠ And a fourth, which is the one nobody '
            + 'writes.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The trigger.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ What would have to change for this to be the wrong answer? ⚠ You '
            + 'wrote it yourself on page 3a — if the pallet claims are settled '
            + 'and our chain is four documents instead of two, cost decides it '
            + 'and the answer is Damascus.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So the trigger is: the Dallal claims settled, or the chain documented.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Either of them, and in writing, and with a name against it. ⚠ A '
            + 'trigger with no owner is a date with no diary — and the person who '
            + 'will notice that the claims have settled is the person who settled '
            + 'them.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It reads as though I am not sure.' },
    { who: 'nadia', cam: { shot: 'close' },
      en: '⚠ It reads as though you know what your answer depends on, which '
            + 'is the opposite. ⚠ A decision with a trigger on it has been '
            + 'thought about; a decision with no trigger has been taken and '
            + 'abandoned — and in five years nobody can tell a confident decision '
            + 'from a forgotten one except by whether it says what would change '
            + 'it.' }
  ]
});

PBE7.scene('u12-12-6-pair', {
  set: 'signingdesk',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Trigger: if a tendered van becomes available for a March start. Owner: me.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Who will hear about a van first?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I will, from the hire companies.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Will you? Who talks to drivers?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Fadi. He knows what is on the road before anybody.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So the trigger is owned by somebody who will hear about it third.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'But he would not know it was a trigger.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Which is why you tell him it is. That is one sentence and it is '
            + 'the whole of making a trigger work.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And if he forgets?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Then the review date catches it in November. The trigger is the '
            + 'early warning and the date is the floor.' }
  ]
});

PBE7.scene('u12-12-7', {
  set: 'signingdesk',
  arr: 0,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'We accept clause 19 as drafted, on the basis that in a fact '
            + 'dispute our evidence is better suited to arbitration than to a '
            + 'court. Bassel?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ I would ask for Damascus, and I am not going to argue it again, '
            + 'because the paper has already argued it better than I would.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Then say what you want.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ That my dissent is minuted, with its reason, and that the '
            + 'decision is not reopened.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Give me the reason in one sentence, for the minute.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ That the dispute I expect is a money dispute, not a fact '
            + 'dispute, and that Beirut costs four times as much to decide a '
            + 'question about invoices.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Which is the case on page 3a, and Nour wrote it.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ She wrote it better than I would have, and I still hold it. ⚠ A '
            + 'case you lose is not a case you stop holding.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Then it goes in, in your words, with your name on it — and the '
            + 'decision stands and is not reopened.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Does the dissent weaken the record?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ It is the strongest thing in it. ⚠ A decision with a minuted '
            + 'dissent is a decision that was taken rather than assumed — and in '
            + 'five years the two sentences together say what nothing else can: '
            + 'that somebody argued the other side, in writing, and was heard, '
            + 'and the firm went the other way for a stated reason.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ And one more line. ⚠ If the trigger fires — if the claims settle '
            + '— I want it minuted that my dissent becomes the recommendation '
            + 'without anybody having to reargue it.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: '⚠ That is the best sentence anybody has said this morning. Minute it.' }
  ]
});

PBE7.scene('u12-12-7-pair', {
  set: 'signingdesk',
  arr: 0,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    fadi: { rig: 'm-30s-a', name: 'Fadi', voice: 'en-US-GuyNeural', shirt: '#8a4b2f', shirt2: '#6f3c25',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'Shaheen\'s are instructed for March at the February rate, on the '
            + 'basis that no tender can produce a van before the 20th. Fadi?' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'I would tender, and I am not going to argue it, because it is on '
            + 'page 3a and she wrote it better than I would.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'What do you want?' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'That it is minuted that I disagreed, with the reason, and that the '
            + 'decision is not reopened.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'The reason, in one sentence.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'That the risk in March is a van not arriving, and we are hiring '
            + 'the firm that did not send one in February.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Minute it, in those words, with your name.' },
    { who: 'fadi', cam: { shot: 'close' },
      en: 'And one more thing. If a van comes free for a March start, I want '
            + 'it minuted that my view becomes the recommendation and nobody has '
            + 'to argue it again.' }
  ]
});

PBE7.scene('u12-12-7-b', {
  set: 'signingdesk',
  arr: 0,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: '⚠ We accept clause 19 as drafted, on the basis that in a fact '
            + 'dispute our evidence is better suited to arbitration than to a '
            + 'court. Bassel?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ I would ask for Damascus, and I am not going to argue it again, '
            + 'because the paper has argued it better than I would. ⚠ What I want '
            + 'is that my dissent is minuted, with its reason, and that the '
            + 'decision is not reopened.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ The reason, in one sentence, for the minute.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ That the dispute I expect is a money dispute and not a fact '
            + 'dispute, and that Beirut costs four times as much to decide a '
            + 'question about invoices.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Which is the case on page 3a, and Nour wrote it.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ She wrote it better than I would have, and I still hold it. ⚠ A '
            + 'case you lose is not a case you stop holding.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Then it goes in, in your words, with your name on it, and the '
            + 'decision stands. ⚠ A decision with a minuted dissent is a decision '
            + 'that was taken rather than assumed — and in five years the two '
            + 'sentences together say what nothing else can.' },
    { who: 'bassel', cam: { shot: 'close' },
      en: '⚠ And one more line. If the trigger fires — if the claims settle — '
            + '⚠ I want it minuted that my dissent becomes the recommendation '
            + 'without anybody having to reargue it.' }
  ]
});
