/* Unit 20 — the acted dialogues. Every line is the book's own. */
PBE8.scene('u20-20-1', {
  set: 'handoverdesk',
  arr: 0,
  cast: {
    sayegh: { rig: 'm-50s-b', name: 'Mr Sayegh', voice: 'en-AU-WilliamMultilingualNeural', shirt: '#4a5e74', shirt2: '#3a4a5c',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'sayegh', cam: { shot: 'wide' },
      en: 'Your handover note. Forty items. Every one of them is a task.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'That is what I do.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ It is what you are seen doing. ⚠ A list of forty tasks can be '
            + 'written in an afternoon and anybody can learn it in a fortnight. '
            + 'It is not what the firm is about to lose.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Then what is?' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ The judgements inside the tasks. ⚠ Take item nine. Check the '
            + 'delivery sheet every morning. What do you actually do with it?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'I look at who is late.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ And then?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'And then I telephone some of them.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Which ones?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '(pause) ⚠ The ones who are not paying. Not the ones who are merely '
            + 'slow. ⚠ Hamdan is three weeks late every month and has never '
            + 'missed a payment in nine years, so I leave him. Tarabishi is four '
            + 'days late and I telephone him the same morning, because when '
            + 'Tarabishi is late it means something.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ That is the handover. ⚠ Nothing in your forty items contains it, '
            + 'and in six weeks nobody in this company will know it.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'It had not occurred to me that it was a decision. I just do it.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ That is why the person doing the job is the worst person in the '
            + 'building at finding them. ⚠ A judgement you have made four '
            + 'thousand times stops feeling like a judgement — it feels like the '
            + 'task.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'So how do I find the rest of them?' },
    { who: 'sayegh', cam: { shot: 'close' },
      en: '⚠ Take each task and ask what you would get wrong if you did it '
            + 'carelessly. ⚠ If the answer is nothing, it is a task. If the '
            + 'answer is something, the something is the judgement — and that '
            + 'question is the only reliable way in, because you cannot see them '
            + 'by looking.' }
  ]
});

PBE8.scene('u20-20-1-pair', {
  set: 'handoverdesk',
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
      en: 'I have written "use your discretion on late customers" and that is '
            + 'the judgement captured.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Your successor arrives on a Tuesday with four late accounts. What '
            + 'does she do?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'She uses her judgement.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'She has been here a day. Where does she get it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…From experience.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Which she will have in two years. Give me a name she should chase.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Faris. He goes quiet before a problem, twice now.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And one she should leave?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The Ministry. Always late, always pays, and chasing them irritates '
            + 'the contact.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Those two names are usable on Tuesday. Discretion is usable in 2029.' }
  ]
});

PBE8.scene('u20-20-2', {
  set: 'handoverdesk',
  arr: 1,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' },
    lina: { rig: 'f-20s-b', name: 'Lina', voice: 'en-NZ-MollyNeural', shirt: '#8a5f7a', shirt2: '#6e4b61',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'Lina, you joined two years ago. What did your first week actually '
            + 'consist of?' },
    { who: 'lina', cam: { shot: 'mid' },
      en: '⚠ Almost nothing I had been told about. ⚠ I had a briefing on the '
            + 'filing and the telephone system and I could have worked both out '
            + 'in an hour.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'And what did it actually consist of?' },
    { who: 'lina', cam: { shot: 'mid' },
      en: '⚠ Three kinds of thing. ⚠ Fixed events that happened to fall in '
            + 'that week — the invoices went out on the Tuesday and I had no idea '
            + 'they were due. ⚠ People testing me once — Abu Yasser asked me for '
            + 'something he knew I could not give him, and watched. ⚠ And one '
            + 'piece of knowledge nobody had because the person who had it had '
            + 'gone.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Which was?' },
    { who: 'lina', cam: { shot: 'mid' },
      en: '⚠ That the Ministry order has to be confirmed by Wednesday. It is '
            + 'not in any document. The woman before me used to remind everybody '
            + 'and she retired, and for two months nobody confirmed it on time '
            + 'and nobody knew why things felt wrong.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'So a first week is a calendar, a set of tests, and a hole.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: '⚠ Yes. And nobody writes any of the three. They write the filing system.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ There is a fourth and you have just told me what it is without '
            + 'noticing. ⚠ What a successor will change first.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'I changed the invoice run to the Monday.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ In your first fortnight. And was it an improvement?' },
    { who: 'lina', cam: { shot: 'mid' },
      en: '⚠ No. I moved it back in June, because the Monday clashed with the '
            + 'bank. ⚠ Nobody had told me why it was on the Tuesday, so I assumed '
            + 'it was on the Tuesday for no reason.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: '⚠ Which is the most useful line in this conversation. ⚠ A '
            + 'successor changes the things that look arbitrary, and the things '
            + 'that look arbitrary are the ones whose reasons were never written '
            + 'down — so a handover that names them saves a change, a reversal '
            + 'and four months.' }
  ]
});

PBE8.scene('u20-20-2-pair', {
  set: 'handoverdesk',
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
      en: 'A competent person will work the first week out. I did.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Did you? What did nobody tell you?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…That the Ministry order had to be confirmed by Wednesday.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'How long did that take to find out?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Two months. And about two hundred thousand in late interest.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So you worked out everything that was written down.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And nothing that was not.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Which is what competent means. It is not a criticism.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And the things that are not written down are the ones that caused '
            + 'the trouble.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'By definition. That is why they were not written down — nobody had '
            + 'needed to.' }
  ]
});

PBE8.scene('u20-20-3', {
  set: 'handoverdesk',
  arr: 2,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'Page six. The things that would stop if I were not here.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Read me the first one.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '"The relationship with the landlord in Homs depends entirely on me."' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ That is not a risk. That is a boast with a worried face on it.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'It is true.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ It may be, and as written it tells a reader that you are '
            + 'valuable and nothing else. ⚠ A dependency needs three parts: what '
            + 'stops, what it costs, and what would have to happen for it not to '
            + 'stop.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Give me it for the landlord.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ What stops: the lease discussions in 2029, because he will deal '
            + 'with you and has twice refused to deal with anybody else. ⚠ What '
            + 'it costs: a renewal on worse terms, or a move, which in 2029 is '
            + 'about four million. ⚠ What would have to happen: somebody else is '
            + 'in the room with you at the next two meetings, before 30 April.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'There is one meeting before 30 April.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Then say that, and say that one is not enough, and say what you '
            + 'would do with the second. A remedy you cannot complete is still '
            + 'worth writing, with what is missing from it.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'And if there is no remedy at all?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Then it is a risk the firm carries and somebody above you has to '
            + 'know they are carrying it. ⚠ Which is the point: a dependency on '
            + 'one person is not that person\'s achievement and it is not their '
            + 'fault either. It is a decision the firm took by not deciding.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Nobody ever decided that I would be the only one who speaks to him.' },
    { who: 'nadia', cam: { shot: 'close' },
      en: '⚠ Nobody ever decides any of them. ⚠ It happened once because you '
            + 'were there, and then it was easier for everybody for sixteen years '
            + '— and the last four words of your sentence should be and nobody '
            + 'chose this.' }
  ]
});

PBE8.scene('u20-20-3-pair', {
  set: 'handoverdesk',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'There is no remedy for the bank signatory thing, so I have left it out.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Who is carrying that risk after you go?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Whoever has my job.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Do they know?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'They will find out in October.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'At the facility review. With about nine hundred thousand of headroom on it.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Put like that, leaving it out is the worst option available.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It is. An unremovable risk has to be held by somebody who knows '
            + 'they are holding it.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And I should say who that is.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Name them. Otherwise it is held by nobody, which is how it got to be a risk.' }
  ]
});

PBE8.scene('u20-20-4', {
  set: 'handoverdesk',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Page eight. "Judgements I would not defend again." You have written one.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Homs, 2021. And I need to be exact, because the exactness is the '
            + 'whole value of it. ⚠ I would close it again. What I would not do '
            + 'again is decide it alone, in a fortnight, without counting '
            + 'anything.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Those are different things.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ They are, and most people writing this page cannot separate '
            + 'them. ⚠ They either defend the decision entirely, which is '
            + 'useless, or they disown it entirely, which is dishonest — because '
            + 'I still think closing was right.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So what is a successor supposed to take from it?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Not do not close shops. That would be the wrong lesson from the '
            + 'right mistake. ⚠ The lesson is: a decision you could test for four '
            + 'million and will have to live with for six years is a decision '
            + 'worth testing. I could have borne the four million. I decided I '
            + 'could not bear another year of not knowing, and that was the '
            + 'error.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And what do you say happened as a result?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ That is the part I was going to leave out, and I will not. ⚠ The '
            + 'firm spent six years without a northern site and reopened in 2027 '
            + 'at a rent a third higher than the one we gave up. That is the cost '
            + 'of the error, in a figure, and if I write the error without the '
            + 'figure it is a reflection rather than a warning.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'There is a third part and you have not written it.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Go on.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ What would stop it happening again. ⚠ Not what you would do '
            + 'differently — you will not be here. What would make it hard for '
            + 'the next person to do what you did.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '(pause) ⚠ A rule that a site decision needs a count and a second '
            + 'signature. Which I would have resented in 2021 and which would '
            + 'have saved six years.' },
    { who: 'nour', cam: { shot: 'close' },
      en: '⚠ Then that is the sentence. Everything above it is history and '
            + 'that one is a handover.' }
  ]
});

PBE8.scene('u20-20-4-pair', {
  set: 'handoverdesk',
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
      en: 'I should never have closed that line. It was entirely my fault.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Do you actually believe that? Would you keep it open today?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…No. It was losing money and it would still be losing money.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So you would close it again.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Yes. I would not close it in a week without asking the counter staff.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'That is the split, and it is the opposite of what you wrote.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'What I wrote was humbler.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It was untrue. And your successor would read it as "do not close lines".' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Which is the wrong lesson.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'From the right mistake. The humble version is the dangerous one.' }
  ]
});

PBE8.scene('u20-20-5', {
  set: 'handoverdesk',
  arr: 1,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' },
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'Abu Yasser. I want to introduce you properly to Nour before I go.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ You have introduced me to four people in nine years. ⚠ Three of '
            + 'them I never saw again and one of them mattered.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Which one?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ Mr Attar. Because you did not say this is the auditor. You said '
            + 'when this man asks you for the gate sheets, give him the '
            + 'originals, and if I am not here you do it anyway. ⚠ That was not '
            + 'an introduction. That was you telling me what I was allowed to do '
            + 'without you.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'So an introduction is about authority.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ It is about whether I am going to be wrong for dealing with the '
            + 'person. ⚠ Nobody says no to a new office manager because they '
            + 'dislike them. They say no because they do not know whether it '
            + 'counts.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Then let me do it properly. Three things.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Go on.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ One: what you and I have actually done, said out loud in front '
            + 'of her. Twice you have told me something was wrong in the yard '
            + 'before it became a loss, and twice I acted the same day. ⚠ Two: '
            + 'what she can do without me. She can sign what I sign, from 1 May, '
            + 'including a write-off up to half a million. ⚠ Three: what has not '
            + 'changed. The gate sheet is still the only record of what left the '
            + 'yard, and she knows that, and she will not ask you for a verbal '
            + 'release.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ The second one is the only one I needed and it is the one people '
            + 'leave out. ⚠ The first is nice. The third is a courtesy. The '
            + 'second is the one that means I can say yes to her on a Thursday '
            + 'without telephoning anybody.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'And is nine years transferable in one conversation?' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: '⚠ No. The authority transfers in one conversation and the rest '
            + 'takes as long as it takes. ⚠ But without the authority the rest '
            + 'never starts, because she spends a year asking permission and I '
            + 'spend a year watching her ask.' }
  ]
});

PBE8.scene('u20-20-5-pair', {
  set: 'handoverdesk',
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
      en: 'She will build her own relationship with him in time. '
            + 'Introductions are a formality.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It is Thursday. A load is damaged and he wants an overnight hold. '
            + 'What does he do?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'He telephones her.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And she says?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…She says she will check and call him back.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And he waits, with a loaded lorry. How many Thursdays of that '
            + 'before he stops offering?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Two. Maybe three.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So the thing you were going to let her build gets destroyed in three weeks.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Because she had no authority to accept it.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'The building never starts. That is the point.' }
  ]
});

PBE8.scene('u20-20-6', {
  set: 'handoverdesk',
  arr: 2,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    sayegh: { rig: 'm-50s-b', name: 'Mr Sayegh', voice: 'en-AU-WilliamMultilingualNeural', shirt: '#4a5e74', shirt2: '#3a4a5c',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'I recommend Nour. I do not need two pages to say so.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ You need one page and it has to contain the case against her, or '
            + 'it is not a recommendation. ⚠ It is a preference.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'The case against her is that she is in the middle of Beirut.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Write it. And write what happens to the arbitration if she takes '
            + 'this post on 1 May.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'It goes to somebody who has read the bundle twice instead of fifty '
            + 'times. It probably costs us issue two.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Then your recommendation is harder than you thought and the page '
            + 'is worth writing. ⚠ A recommendation that does not cost anything '
            + 'has not been thought about.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'And Bassel?' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Which brings us to the sentence you have been avoiding for a '
            + 'week. ⚠ Say it to me now.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '(pause) ⚠ Bassel will apply. He would be adequate. And adequate is '
            + 'not what this post needs in the year we are reopening a site and '
            + 'finishing an arbitration.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ That is the most useful sentence in your recommendation and you '
            + 'were going to leave it out.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'I cannot say that in a meeting. He will be in the meeting.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ You cannot say it in a meeting and you can write it to me. ⚠ The '
            + 'rule is this: anything you would say about a candidate behind a '
            + 'closed door belongs in the written recommendation, provided you '
            + 'would be willing to say it to the candidate themselves afterwards '
            + 'if they asked.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Would I say adequate to Bassel?' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Would you?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ I would say that the post this year needs somebody who has run a '
            + 'dispute, and that he has not. ⚠ Which is the same thing and it is '
            + 'better, because it names what is missing instead of grading him.' },
    { who: 'sayegh', cam: { shot: 'close' },
      en: '⚠ Then write that, and the test has done its work — it has not '
            + 'censored you, it has made you precise.' }
  ]
});

PBE8.scene('u20-20-6-pair', {
  set: 'handoverdesk',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'I cannot write anything comparative about a colleague who will see '
            + 'the decision.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'What is the sentence you would say behind a closed door?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…That he has run nights for nine years and I still would not appoint him.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Would you say that to him if he asked you?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Not in those words.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then say it in the words you would use.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That the post needs somebody who writes down what they decide, and '
            + 'in nine years he has not started.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Could you say that to him?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Yes. And it is more use to him than the first version.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'And more use to the person deciding. The test did not silence you.' }
  ]
});

PBE8.scene('u20-20-7', {
  set: 'handoverdesk',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.46, bottom: 46, at: [0.31, 0.62],
      pose: 'rest' },
    sayegh: { rig: 'm-50s-b', name: 'Mr Sayegh', voice: 'en-AU-WilliamMultilingualNeural', shirt: '#4a5e74', shirt2: '#3a4a5c',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' },
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'sayegh', cam: { shot: 'wide' },
      en: 'So: Nour from 1 July, Bassel acting for two months. Everybody agrees.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Everybody agrees and we are about to do it badly. ⚠ As it '
            + 'stands, Bassel is handed a post for two months and told nothing, '
            + 'and he will spend both months believing he is on trial — which is '
            + 'a different job from the one we are asking him to do.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'I would rather be told.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Then I will tell you, now, in front of everybody, because I am '
            + 'the reason for the two months. ⚠ The substantive post is mine from '
            + '1 July. It has been decided, today, not deferred. You are acting, '
            + 'and you are not auditioning.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'And if I do it well?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Then you will have done it well and the decision will still be '
            + 'the same, and I am saying that now rather than in June. ⚠ If I '
            + 'left you to hope, you would do everything for the wrong reason for '
            + 'two months and you would be entitled to be angry in July.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'That is a hard thing to be told on a Thursday.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ It is, and the alternative is worse and you said so yourself '
            + 'thirty seconds ago.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: 'And what does the minute say?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Four things, and the fourth is the one that stops this becoming '
            + 'permanent by drift. ⚠ One: the substantive appointment, decided '
            + 'today, effective 1 July. Two: the acting appointment, 1 May to 30 '
            + 'June, with the same authority and the same limit. Three: the '
            + 'reason for the gap, which is the arbitration and not anybody\'s '
            + 'capability.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: 'And four?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ That if the substantive appointment has not taken effect by 15 '
            + 'July, the acting appointment ends anyway and the matter comes back '
            + 'to this table. ⚠ Otherwise a two-month arrangement with nobody '
            + 'watching it becomes a two-year one, and the only person who could '
            + 'complain about that is the one who was told not to hope.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ I want one more thing in it. ⚠ What I am supposed to be doing in '
            + 'the two months, as a job, and not as a holding operation. Give me '
            + 'the Homs reopening and I will have run something by July.' },
    { who: 'nour', cam: { shot: 'close' },
      en: '⚠ That is the right ask and it is better than anything the three '
            + 'of us had written down. It is also the gap in 20.6, and you have '
            + 'just proposed how to close it.' }
  ]
});

PBE8.scene('u20-20-7-b', {
  set: 'handoverdesk',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Last day. What is actually in that folder?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Not what I thought when I started. ⚠ Pages one and two are forty '
            + 'tasks and they are the part nobody will need after a fortnight.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the rest?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Nine judgements out of the forty. I asked of each task what I '
            + 'would get wrong if I did it carelessly, and thirty-one produced '
            + 'nothing. ⚠ Nine produced something, and those nine are the '
            + 'handover.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Page six was the hardest to read.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Page six is the one I should have written in 2015. ⚠ Five things '
            + 'this firm has been carrying through one person, and in 2015 it '
            + 'would have been four pages and a reorganisation. In April it is '
            + 'three weeks and a hope.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the overtime?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Sixteen years of approving everything, and I found out by '
            + 'writing a page about judgements. ⚠ It is the only thing in the '
            + 'folder that is not a handover at all — there is nothing to hand '
            + 'over, because there was never anything there. I have asked Mr '
            + 'Sayegh to give it to somebody.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Is there anything you want me to do with all this?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Read page four again in 2029, before the lease. And when you '
            + 'hand over, write page six first and pages one and two last — ⚠ I '
            + 'did it the other way round and lost a week.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And is there anything you got right by accident?' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: '(pause) ⚠ I introduced Abu Yasser to Mr Attar in 2019 by telling '
            + 'him what he was allowed to do without me. ⚠ I had no idea that was '
            + 'the right way to do it. It was the only one I could think of at '
            + 'the time, and it is the only one of my four introductions in nine '
            + 'years that worked.' }
  ]
});
