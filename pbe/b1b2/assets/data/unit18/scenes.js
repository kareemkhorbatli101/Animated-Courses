/* Unit 18 — the acted dialogues. Every line is the book's own. */
PBE6.scene('u18-18-1', {
  set: 'noticeboard',
  arr: 0,
  cast: {
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'point' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'nadia', cam: { shot: 'wide' },
      en: 'Has Mr Jaber been told about the Monday?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Fadi was going to telephone him. I think he has.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'And if he has not?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then I have been putting off telephoning him myself since about the 25th.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Eleven days. Why?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Because he is going to ask why we did not consult him, and I do '
            + 'not have an answer that is better than nobody thought of it.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'So you are not avoiding the telephone call. ⚠ You are avoiding one '
            + 'question inside it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Yes.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Then the call is four minutes long and the question is one '
            + 'sentence, and you have spent eleven days on a sentence. What is '
            + 'the sentence?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'We did not consult you and we should have. The days were changed '
            + 'for two reasons and neither of them was about you.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'And is that so bad to say?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is worse to say than to write.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Which is why you have been putting off telephoning and not '
            + 'putting off writing. ⚠ And notice the pattern: put off takes the '
            + '-ing, and so do avoid, keep on, risk and consider. ⚠ These are the '
            + 'verbs of not doing things, and they are the verbs you need most on '
            + 'a Thursday afternoon — because that is when you notice what you '
            + 'have not done.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And I keep on meaning to?' },
    { who: 'nadia', cam: { shot: 'close' },
      en: '⚠ Keep on plus -ing is the honest report of a habit — I keep on '
            + 'putting it off — ⚠ and I keep on meaning to is a sentence that '
            + 'describes nothing at all. Say which it is.' }
  ]
});

PBE6.scene('u18-18-1-pair', {
  set: 'noticeboard',
  arr: 0,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'point' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'Has the fourth store been counted?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'No. I have been putting it off since June.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'What is the sentence inside it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…There is not one. Nobody is waiting for it and nobody is going to '
            + 'ask me a question about it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ So it is not fear. What is it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Three hours and two people, and it has never been in anybody\'s week.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ Then no amount of courage will close it and the repair is a date '
            + 'in a diary with two names against it.' }
  ]
});

PBE6.scene('u18-18-2', {
  set: 'noticeboard',
  arr: 1,
  cast: {
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'point' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'write', hold: 'pen' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'bassel', cam: { shot: 'wide' },
      en: 'The Beirut labels. You agreed to have them designed by the 10th.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I did not agree to it. I offered to look at whether we could.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'I have Nour — labels by the 10th in my book.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And I have look into labels in mine.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Then you are both honest and one of you is going to be wrong on '
            + 'the 10th. ⚠ Which of you is Ms Tannous relying on?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '…Me, because I told her the 10th.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Then the answer to which of you is right is that it does not '
            + 'matter, because a third person has acted on the stronger of the '
            + 'two versions, which is what always happens. ⚠ A commitment is as '
            + 'strong as the strongest verb anybody in the conversation heard.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is not fair.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'It is not fair and it is what happens. ⚠ So the repair is at the '
            + 'moment of speaking: if you offer to look into something, say what '
            + 'you are not agreeing to, in the same breath. I will look at the '
            + 'labels this week. I am not agreeing to a date until I have.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Two sentences instead of one.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: '⚠ Nine words instead of five, and the second sentence is the one '
            + 'that stops a third person being told a date. ⚠ And learn the verbs '
            + 'properly, because they are a ladder: I promise to · I undertake to '
            + '· I agree to · I will · I am willing to · I offer to · I will look '
            + 'into · I am minded to — ⚠ and the last three commit you to nothing '
            + 'at all, which is why they must be followed by what you are not '
            + 'agreeing to.' }
  ]
});

PBE6.scene('u18-18-2-pair', {
  set: 'noticeboard',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'point' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Can you cover the counter on Saturday?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I will see what I can do.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Thank you. I have put you down for Saturday.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '…I did not say yes.' },
    { who: 'a', cam: { shot: 'mid' },
      en: '⚠ You did not say no, and I had to put somebody down.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Then the honest verb was I decline, or I am willing to, if '
            + 'nobody else can and you ask me again on Thursday.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Either of those would have taken four seconds.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ And both are shorter than the week of ambiguity that has just started.' }
  ]
});

PBE6.scene('u18-18-3', {
  set: 'noticeboard',
  arr: 2,
  cast: {
    attar: { rig: 'm-50s-b', name: 'Mr Attar', voice: 'en-US-AndrewMultilingualNeural', shirt: '#4a5a74', shirt2: '#3a4a60',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'point' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'attar', cam: { shot: 'wide' },
      en: 'Your note on the nine cartons says at about eleven Abu Yasser '
            + 'stopped checking the labels against the order.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'He did. He stopped at about eleven.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'And had he been checking them before eleven?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…No. He never checked them against the order, because the line did '
            + 'not ask him to.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Then the sentence says he had a practice of checking and '
            + 'abandoned it halfway through the morning, which is a finding about '
            + 'a man, and what you mean is at about eleven he stopped, to check '
            + 'the labels against the order — or, properly, that nobody checked '
            + 'them at all.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'One comma and a different word order.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ And the difference is whether somebody abandoned a control or '
            + 'never had one. One of those is a disciplinary matter and the other '
            + 'is a page. ⚠ There are four pairs and they all behave this way. '
            + 'Stop · remember · forget · try.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Give me try.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ He tried to telephone the customer — he attempted it; perhaps no '
            + 'answer. ⚠ He tried telephoning the customer — he telephoned, as an '
            + 'experiment, to see whether it would solve something. In a report '
            + 'about a delay those are opposite facts: in the first he did not '
            + 'reach them and in the second he did.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And remember and forget?' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ I remembered to lock up — I did it. ⚠ I remember locking up — I '
            + 'have a memory of doing it, which in a dispute is a much weaker '
            + 'statement and is the one people make when they are not sure. ⚠ I '
            + 'forgot to lock up — it is unlocked. ⚠ I forget locking up is not '
            + 'English.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So what do the four have in common?' },
    { who: 'attar', cam: { shot: 'close' },
      en: '⚠ All four pairs are about things somebody did not do, which is '
            + 'why they turn up in every report about something going wrong. ⚠ '
            + 'And in all four the -ing form is the one that sounds more careful '
            + 'and claims less — which is why people reach for it exactly when '
            + 'they should not.' }
  ]
});

PBE6.scene('u18-18-3-pair', {
  set: 'noticeboard',
  arr: 2,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'point' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'Your claim says Fadi tried to telephone the office from the road.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'He did. Twice, and nobody answered.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Good — that is the right half of the pair, and the whole claim '
            + 'rests on it.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'What would the other half say?' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ He tried telephoning the office would mean he got through — and '
            + 'if he got through, somebody here told him to guess, and the claim '
            + 'is gone.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'One word.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ One word, and about 140,000 of a re-marking charge in the other '
            + 'claim. Read every tried in a claim letter twice.' }
  ]
});

PBE6.scene('u18-18-4', {
  set: 'noticeboard',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'point' },
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The register says I am responsible for the labels.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'And who is liable if they are wrong?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Is that not the same question?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ No, and the nine cartons are what the difference looks like. Abu '
            + 'Yasser was responsible for the marking. ⚠ The company was liable '
            + 'to Ms Tannous, and the cost — her agent\'s charge and two days — '
            + 'fell on us and not on him.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So responsible for is who does it, and liable for is who pays.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Who answers for it. ⚠ And the third one is accountable to, which '
            + 'is a person and not a thing: Abu Yasser is accountable to Mr '
            + 'Ayoub, you are accountable to Mr Ayoub, and I am accountable to Mr '
            + 'Ayoub and to the auditor.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Why does the register need all three?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Because a register with only responsible for is a list of '
            + 'chores, and the thing people want to know in March is who answers '
            + 'when it goes wrong. ⚠ A line that says Nour — labels — by the 10th '
            + 'does not say whether Nour is paying for a reprint or explaining to '
            + 'a customer or neither.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And willing to?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ That is the fourth and it is the one that is always left out of '
            + 'registers and always matters. You are willing to cover Baghdad '
            + 'Street on a Tuesday; you are not responsible for it, you are not '
            + 'liable for anything that happens there, ⚠ and when you stop being '
            + 'willing, nothing in any document changes — which is why the '
            + 'Tuesday cover has quietly become a commitment that nobody has ever '
            + 'assigned.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So I should write willing to in the register.' },
    { who: 'nadia', cam: { shot: 'close' },
      en: '⚠ Write it with a date on which you will be asked again. Willing '
            + 'to, reviewed in June. ⚠ A willingness with no review date becomes '
            + 'a duty in about four months, and the person it becomes a duty for '
            + 'is the one who volunteered.' }
  ]
});

PBE6.scene('u18-18-4-pair', {
  set: 'noticeboard',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'point' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The register says I cover Baghdad Street on Tuesdays.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Responsible for?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Nothing. It is not in any job description.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Liable for?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Nothing. If something went wrong there on a Tuesday it would be the company.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Accountable to, for this?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Nobody.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ And willing to?' },
    { who: 'a', cam: { shot: 'close' },
      en: '⚠ Yes, since June. Nine months, and Hala now plans her Tuesdays around it.' }
  ]
});

PBE6.scene('u18-18-5', {
  set: 'noticeboard',
  arr: 1,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'point' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'Who asked whom to mark the cartons?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I put it in the programme. Line three, Abu Yasser.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'And did you ask him?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I gave him the programme.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Abu Yasser says Lina gave him the programme. Lina says she put it '
            + 'on the bench because you asked her to take it over.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…I asked Lina to take the programme over. I did not ask her to ask him.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ So we have three people and no instruction. You asked Lina to '
            + 'carry a piece of paper. Nobody asked Abu Yasser to do anything — '
            + 'and he did the marking, correctly, from a page that arrived on his '
            + 'bench.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'He did the work without being asked.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Which is why nothing went wrong until the one thing on the page '
            + 'that was wrong. A man working from a page nobody handed him has '
            + 'nobody to ask a question of.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So what should have happened?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Somebody should have asked him, in a sentence with his name in '
            + 'it, and written the sentence down. I asked Abu Yasser to mark the '
            + 'cartons from the stencils on the 9th. ⚠ Eleven words, and there is '
            + 'an instruction in the world.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And carrying the paper?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ I asked Lina to take the programme to the warehouse is a '
            + 'different instruction and it was carried out perfectly. ⚠ The '
            + 'error is that two instructions were needed and one was given — and '
            + 'the missing one is the one with a verb in it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The verb in mine was take.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: '⚠ And you cannot get mark the cartons out of take this to the '
            + 'warehouse, however clearly the page is written. ⚠ A document is '
            + 'not an instruction. An instruction has a name in it, a verb, and '
            + 'somebody who said it.' }
  ]
});

PBE6.scene('u18-18-5-pair', {
  set: 'noticeboard',
  arr: 1,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'point' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'How many instructions does getting the cartons marked need?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'One. Mark the cartons.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Two. Somebody has to take the programme to the warehouse, and '
            + 'somebody has to be asked to mark.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And I gave the first.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ And it was carried out perfectly, which is why nothing looked wrong.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'So what is the second sentence?' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ I asked Abu Yasser to mark the cartons from the stencils on the '
            + '9th. ⚠ And you cannot get it out of take this to the warehouse, '
            + 'however clearly the page is written.' }
  ]
});

PBE6.scene('u18-18-6', {
  set: 'noticeboard',
  arr: 2,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'point' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'One week, in its verbs. How many?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Eleven. I undertook to one, I agreed to four, I offered to look at '
            + 'three, and three are things somebody asked me to do and I said '
            + 'nothing at all.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Start with the last three, because they are the dangerous ones. '
            + 'Who asked, and what?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Hala asked whether I could do the counter on Thursday. Mr Attar '
            + 'asked for the stock figures before the 20th. ⚠ And Ms Tannous '
            + 'asked, in a letter, whether we could quote for a hundred cartons.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'And you said nothing to any of the three.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I said I will see, which is nothing.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ It is worse than nothing, because all three of them have written '
            + 'it down as a yes. You know that, because you would have. ⚠ Silence '
            + 'after a question is heard as consent, and I will see is a form of '
            + 'silence with a polite noise in it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So the register needs a column for what I said.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'It needs the verb, and where there is no verb it needs the words. '
            + '⚠ And it needs one more column that nobody puts in a register: '
            + 'what they think I said.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'How would I know what they think?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Go one rung up the ladder. They heard the next verb up from the '
            + 'one you used, every time, because a person who has asked you '
            + 'something needs an answer and takes the strongest one available. ⚠ '
            + 'So write your verb, write the rung above it, and the second column '
            + 'is what you are going to be held to.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then of my eleven, how many am I actually held to?' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: '⚠ All eleven. One by an undertaking, four by agreement, three by '
            + 'an offer that was heard as an agreement, and three by a silence '
            + 'that was heard as a yes. ⚠ The register is not a list of what you '
            + 'promised. It is a list of what somebody is expecting, and that is '
            + 'a longer list — which is why it has to be written on a Thursday '
            + 'and not remembered on a Monday.' }
  ]
});

PBE6.scene('u18-18-6-pair', {
  set: 'noticeboard',
  arr: 2,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'point' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'Your week. How many?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Nine, I think.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Any questions you were asked and did not answer?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…The apprentice asked whether he could leave early on Thursday for '
            + 'his class. I said I would see.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ What has he written down?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '⚠ He has told his college he will be there.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And anything in writing?' },
    { who: 'a', cam: { shot: 'close' },
      en: '⚠ Yes. The school wrote on the 2nd asking whether we would quote '
            + 'for the railings and I have not replied. That is eleven, not nine.' }
  ]
});

PBE6.scene('u18-18-7', {
  set: 'noticeboard',
  arr: 0,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'point' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'Your register. Eleven lines. ⚠ Nine of them go on the wall by the '
            + 'door and two do not.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Which two?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'The Thursday counter, because it is between you and Hala and she '
            + 'can see you. ⚠ And the Beirut labels, because that one is '
            + 'Bassel\'s now — he told the customer the 10th, so it is his line '
            + 'and it goes on his.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So a commitment belongs to whoever the customer is relying on.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ A commitment belongs to whoever somebody outside this building '
            + 'is relying on, and if that is nobody, it belongs to whoever is '
            + 'nearest to the person waiting. ⚠ Which is not always the person '
            + 'who said the verb.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And why the wall rather than my book?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Your book is where a commitment goes to die quietly. ⚠ A wall has '
            + 'two properties: everybody can see it, and nobody can reorder it. '
            + 'In a book you turn a page and the oldest line goes to the back. ⚠ '
            + 'On a wall the twenty-nine-day line is at the top, in your '
            + 'handwriting, and Lina walks past it eleven times a day.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is uncomfortable.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ It is meant to be, and it is also the only thing in this unit '
            + 'that works without anybody being disciplined about it. ⚠ A '
            + 'register in a drawer requires a habit. A list on a wall requires a '
            + 'wall.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And what about the hundred cartons?' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: '⚠ That one goes at the top and it is not a commitment at all — it '
            + 'is a question from a customer that nobody has answered for nine '
            + 'days. ⚠ Put it in a different colour and put the date on it, and '
            + 'when it is nine days old on a wall, somebody answers it today. ⚠ '
            + 'It has been nine days old in a drawer since the 2nd of March and '
            + 'nobody answered it at all.' }
  ]
});

PBE6.scene('u18-18-7-pair', {
  set: 'noticeboard',
  arr: 0,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'point' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'Which of your lines does somebody outside the building depend on?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The bursar\'s railings quotation. And the plater\'s galvanising, '
            + 'because the school is waiting on it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then those two go on the wall. What about the drawing register?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Nobody outside depends on it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Then it is a book line. And who is nearest the person waiting on '
            + 'the galvanising?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Me, because I am the one who telephones the plater.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ Then it is yours even though Abu Yasser agreed to order the '
            + 'steel — and that is the line most likely to have been sitting '
            + 'between two people.' }
  ]
});

PBE6.scene('u18-18-7-b', {
  set: 'noticeboard',
  arr: 0,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'point' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'Eleven lines. Nine of them go on the wall by the door and two do not.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Which two?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'The Thursday counter, because it is between you and Hala and she '
            + 'can see you. And the Beirut labels, because Bassel told the '
            + 'customer the 10th, so it is his line.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And why the wall rather than my book?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'A wall has two properties: everybody can see it, and nobody can '
            + 'reorder it. In a book you turn a page and the oldest line goes to '
            + 'the back.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the hundred cartons?' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: 'At the top, in a different colour, with the date. It is not a '
            + 'commitment; it is a question from a customer that nobody has '
            + 'answered for nine days.' }
  ]
});
