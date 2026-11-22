/* Unit 14 — the acted dialogues. Every line is the book's own. */
PBE8.scene('u14-14-1', {
  set: 'workbench',
  arr: 0,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'They say the marking is not clean. Is it clean?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ I have looked at eleven of the forty and I would not have sent '
            + 'four of them. The other seven I would have sent without thinking '
            + 'about it.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Then we argue about the seven.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ We cannot, and that is the whole problem. ⚠ Clean has no '
            + 'tolerance, no sample and no method. Two people can apply it '
            + 'honestly and disagree, and neither of them is wrong — because '
            + 'there is nothing in the word to be wrong about.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'It is in the agreement twice.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ It is, and that is our doing as much as theirs. Nobody asked at '
            + 'the time what it meant, because everybody in the room knew what '
            + 'they meant.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ What would a standard say instead?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ No mark visible on the printed face at arm\'s length in '
            + 'daylight. ⚠ Tolerance: nothing visible. Method: at arm\'s length, '
            + 'in daylight. Sample: that is the third thing and I have not got it '
            + 'yet.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Arm\'s length is not a measurement. Whose arm?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Anybody\'s, and that is why it works. ⚠ A standard does not have '
            + 'to be precise. It has to be repeatable — and two people at arm\'s '
            + 'length in daylight agree about a carton nearly every time, which '
            + 'is more than two people arguing about clean ever do.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Then write it that way and send it to them.' },
    { who: 'nour', cam: { shot: 'close' },
      en: '⚠ Not yet. If I send them a standard now it reads as a defence of '
            + 'the forty cartons. It has to go separately, about the next '
            + 'consignment, and after this one is settled.' }
  ]
});

PBE8.scene('u14-14-1-pair', {
  set: 'workbench',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'I have it. No mark exceeding half a millimetre.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Who has a gauge that reads half a millimetre?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'There is one in the office.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Where is the marking bench?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'In the yard.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And who applies the standard at six in the morning?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The marker. He will not come to the office for a gauge.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So what will he actually do?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Look at it, and decide.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Which is where we started, with a more impressive sentence on the page.' }
  ]
});

PBE8.scene('u14-14-2', {
  set: 'workbench',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' },
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Our own bench page. Revision 2 of 1 April, issued by this office. '
            + 'It says the plate is within two millimetres, measured on the '
            + 'gauge.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ It does, and we do it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ It has a tolerance and a method and no sample. How many do you measure?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ The first of a run, and then one when the machine sounds different.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is not on the page.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ It has never been on the page. It is what I do.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ And if somebody asked how many of a run of four hundred were '
            + 'measured, what is the answer?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ Two. Sometimes three. It has been right for eleven years.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ I believe you, and it has been right is not a sample. ⚠ Two out '
            + 'of four hundred would find a machine that drifts in the first hour '
            + 'and would not find one that drifts in the fourth.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ Then say five, spread through the run. First, and then one in '
            + 'each quarter of it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And chosen how?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ Whichever is in front of me when I get there, and that is the '
            + 'part I would write down carefully. ⚠ If you write at random I will '
            + 'take the one on top, because the one on top is at random as far as '
            + 'I am concerned.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Then not at random. The fifth carton of each quarter of the run. '
            + '⚠ Nobody has to choose anything, which means nobody can choose '
            + 'wrongly.' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: '⚠ That I can do at six in the morning, and that is the test of it.' }
  ]
});

PBE8.scene('u14-14-2-pair', {
  set: 'workbench',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'We measure the first of a run, and one more if the machine sounds different.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'How many is that out of four hundred?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Two. Sometimes three. It has been right for eleven years.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I believe you. If the machine drifts in the fourth quarter of a '
            + 'run, which of your two finds it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Neither.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Has that ever happened?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I would not know, because neither of my two would have found it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'That is the answer. So how many, and when?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Five. First, and one in each quarter.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'And now the sample can find a drift, which it never could before.' }
  ]
});

PBE8.scene('u14-14-3', {
  set: 'workbench',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'rest' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Clause 12. A consignment not rejected within fourteen days of '
            + 'delivery is deemed accepted. The September consignment was '
            + 'delivered on the 18th.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Fourteen days.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ 2 October. Their letter is dated 2 October and under clause 17 '
            + 'it is deemed received on the 6th. ⚠ The rejection is four days out '
            + 'of time.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ So we do not have to take the cartons back at all.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ No. And there is the other half, which I found while I was '
            + 'counting. ⚠ The August consignment had three cartons with the same '
            + 'marking fault and nobody told anybody. It was delivered on 14 '
            + 'August and we are now in October.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Which means?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ That under the same clause, read the same way, we accepted those '
            + 'three. ⚠ Clause 12 does not care which way round we are standing.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Then I am not taking the point. Four days on a two-month-old '
            + 'agreement, against a buyer who found a real fault, to keep 58,000.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'We would win it.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ We would win it once. ⚠ And for the rest of the agreement every '
            + 'letter they write will be dated three days early and sent by hand, '
            + 'and every question we ask will be answered by a man counting days.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So I write as though we had not noticed.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ You write that we noticed and are not taking it. ⚠ A right you '
            + 'do not use is worth nothing; a right you say you are not using is '
            + 'worth the whole of the next twelve months. One sentence, no more, '
            + 'and no conditions attached to it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the three cartons in August?' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: '⚠ Say that too, in the same letter. ⚠ If I am telling them I will '
            + 'not count days against them, I cannot be hoping they do not count '
            + 'ours.' }
  ]
});

PBE8.scene('u14-14-3-pair', {
  set: 'workbench',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'They are out of time. We do not have to take the cartons back at all.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'That is right. What does the next twelve months look like?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The same as now.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Every letter from Beirut dated three days early and sent by hand?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Probably.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Every question we ask answered by a man counting days?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Yes.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So we win fifty-eight thousand and we buy a counterparty who counts.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And we would only win it once.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'You would only be able to win it once. The second time they would '
            + 'be in time.' }
  ]
});

PBE8.scene('u14-14-4', {
  set: 'workbench',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'rest' },
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The plater\'s delivery. I have written that the plate is poor and '
            + 'we are not accepting it.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ That will not hold for a week.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is true. It is poor.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ It is true and it is an opinion, and he will answer it with his '
            + 'own opinion. ⚠ What clause are you rejecting under?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Clause 6 of his terms. Plate within two millimetres.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Then say that. And then what you measured.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Five plates, and four of them are at three millimetres.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Four of five, at three, measured on the gauge, under revision 3 '
            + 'of the bench page. ⚠ Now he cannot answer with an opinion, because '
            + 'there is nothing in that sentence to have an opinion about.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And I have put that we are very disappointed.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Take it out. ⚠ It is the only sentence in the letter he can '
            + 'reply to, and he will reply to it — and then you are in a '
            + 'conversation about how disappointed you are, which has no end and '
            + 'no remedy in it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What is the fourth part?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ What you want him to do, and by when. ⚠ A rejection with no '
            + 'remedy in it is a complaint — and a supplier reading a complaint '
            + 'waits to see whether you meant it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Replace the four, by the 20th.' },
    { who: 'nadia', cam: { shot: 'close' },
      en: '⚠ And say what happens if he does not, in the same sentence. ⚠ Not '
            + 'a threat — a consequence, which he is entitled to know before the '
            + '20th rather than on the 21st.' }
  ]
});

PBE8.scene('u14-14-4-pair', {
  set: 'workbench',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'I have written that we are very disappointed and consider the '
            + 'matter serious.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'What in your letter can he reply to?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'All of it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Can he reply to four of five plates measuring three millimetres?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Not usefully. He would have to measure them himself.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Which is a fact. Can he reply to we are very disappointed?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'He can say he is sorry we feel that way.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And then what is the letter about?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'How we feel.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'And how many plates has that produced?' }
  ]
});

PBE8.scene('u14-14-5', {
  set: 'workbench',
  arr: 1,
  cast: {
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'bassel', cam: { shot: 'wide' },
      en: 'The grey carton. I asked three people in Beirut why it has to be the grey.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ Nobody can say. The warehouse man said it was always the grey. '
            + 'The buyer said it looked better on the shelf. Mr Hamdan said it '
            + 'was in the specification, which it is.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Then it is a preference, and the test is the one you have just '
            + 'applied without knowing it. ⚠ Ask what goes wrong if it is not '
            + 'met. A criterion has an answer to that and a preference does not.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'The buyer said it looked better.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Which is an answer about him and not about the goods. ⚠ Compare '
            + 'the consignee code: if it is on the wrong face, a man on a pallet '
            + 'at six in the morning cannot read it without turning the carton, '
            + 'and he will not turn it. That is what goes wrong, and it is a '
            + 'criterion.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ So we tell them the grey is a preference.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ We tell them it is a preference AND we meet it. ⚠ Those two have '
            + 'to be in the same sentence or the first one is a refusal.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Why meet it at all, if it is nothing?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Because it costs us forty piastres a carton and it matters to '
            + 'the man who buys from us. ⚠ A preference that costs you nothing '
            + 'and matters to somebody is the cheapest thing you will ever buy.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Then why say anything?' },
    { who: 'nour', cam: { shot: 'close' },
      en: '⚠ Because in March, when they ask for the buff on four hundred '
            + 'cartons at three days\' notice, I want it on the record that the '
            + 'grey was never a requirement. ⚠ A preference you have met for six '
            + 'months without naming it has become a requirement, and nobody '
            + 'decided that.' }
  ]
});

PBE8.scene('u14-14-5-pair', {
  set: 'workbench',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'I have written to them that the colour is a preference and not a criterion.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And what does the letter say we are doing about it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Nothing. It is a note for the record.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Read it as the buyer. What is the next thing you expect?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…That we are going to stop supplying the grey.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So what does he do?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Writes back and says the grey is in the specification.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And now the grey is a requirement, which is the opposite of what you wanted.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Then the meeting and the naming have to be in the same sentence.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'In that order. Conceding first, naming second.' }
  ]
});

PBE8.scene('u14-14-6', {
  set: 'workbench',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'rest' },
    hamdan: { rig: 'm-30s-a', name: 'Mr Hamdan', voice: 'en-PH-JamesNeural', shirt: '#6b5a3f', shirt2: '#564832',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Eleven lines. Each with a tolerance, a method and a sample. Signed '
            + 'by you and by me, before the first run of the November '
            + 'consignment.' },
    { who: 'hamdan', cam: { shot: 'mid' },
      en: '⚠ Our quality department has a manual that runs to twelve pages.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ I have read it and nine of its twelve pages are about your own '
            + 'plant. ⚠ And a manual gets filed. Eleven lines on one page get '
            + 'pinned up at the bench, and the man at the bench is the only '
            + 'person who will ever apply them.' },
    { who: 'hamdan', cam: { shot: 'mid' },
      en: '⚠ Then add a twelfth. The pallet wrap.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What goes wrong if the wrap is loose?' },
    { who: 'hamdan', cam: { shot: 'mid' },
      en: '⚠ Two pallets came off a lorry at Chtaura in June and one of them was ours.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Then that is a criterion and it is a better one than any of '
            + 'mine, because it has an incident behind it. ⚠ Give me the '
            + 'tolerance and I will write it.' },
    { who: 'hamdan', cam: { shot: 'mid' },
      en: '⚠ Four turns at the top and four at the base, and a hand cannot '
            + 'get under the wrap.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Tolerance, method and sample in one sentence. Twelve lines.' },
    { who: 'hamdan', cam: { shot: 'mid' },
      en: '⚠ And I want a line saying the goods must be of merchantable quality.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ No, and for the reason the rest of the page exists. ⚠ '
            + 'Merchantable quality has no tolerance, no sample and no method — '
            + 'it is clean again, in a longer coat. It is in the law and it does '
            + 'not need to be in the page.' },
    { who: 'hamdan', cam: { shot: 'mid' },
      en: '⚠ It is in every specification I have ever signed.' },
    { who: 'nour', cam: { shot: 'close' },
      en: '⚠ It is, and it is the line that produced the forty cartons. ⚠ If '
            + 'you want a general line, put one in: anything not covered by the '
            + 'twelve lines is to be raised before despatch and not after. ⚠ That '
            + 'one has an act in it.' }
  ]
});

PBE8.scene('u14-14-6-pair', {
  set: 'workbench',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Eleven lines on one page, each with a tolerance, a method and a '
            + 'sample, signed before the first run.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Our quality department has a manual that runs to twelve pages.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I have read it. Nine of the twelve pages are about your own plant.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'They are our standards.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'They are, and the man who applies these lines is at a bench in '
            + 'Mezzeh. Which of the twelve pages can he observe?' },
    { who: 'b', cam: { shot: 'mid' },
      en: '…Three.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Then let us have those three, as lines, on the page that is pinned '
            + 'up where he works.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And the other nine?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Stay in your manual, where they belong, because they are about '
            + 'your plant and not about our cartons.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'That is a reasonable division.' }
  ]
});

PBE8.scene('u14-14-7', {
  set: 'workbench',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'rest' },
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The page is agreed with Beirut. I want to do the same thing at '
            + 'this end, with the plater.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ Then there is something you should know, and I have never '
            + 'written it down because nobody asked.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Go on.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ The plater is short about twice a month. Two or three plates on '
            + 'a delivery of forty. ⚠ I count them, I put a line through the '
            + 'figure on his note, and I write the real number.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And then?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ And then nothing. There is nowhere for it to go. ⚠ His note goes '
            + 'back with him and our copy goes in the folder, and at the end of '
            + 'the month Nadia pays what the invoice says.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ So we pay for plates we did not receive.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ About twice a month, for as long as I have been at the counter.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'How many is that in a year?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ I do not know, because the only record is the corrected notes '
            + 'and they are in the folder by month, not by supplier. Perhaps '
            + 'fifty plates. Perhaps thirty.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ And nobody has ever rejected one.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ There is no fourteen days at this end. ⚠ With Beirut we have a '
            + 'clause and a period, so silence means something. Here there is no '
            + 'period at all — so silence means nothing, and I have been doing '
            + 'the only thing that is available to me, which is a line through a '
            + 'figure.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ That is the clearest thing anybody has said to me this month. '
            + 'What would you need?' },
    { who: 'hala', cam: { shot: 'close' },
      en: '⚠ Somewhere to put the number. A sheet with his name on it and a '
            + 'column for the shortfall, and somebody who looks at it before '
            + 'Nadia pays him. ⚠ And I would want the line through the figure to '
            + 'go on being the record, because he initials it and that is the '
            + 'only thing he has ever agreed to.' }
  ]
});

PBE8.scene('u14-14-7-pair', {
  set: 'workbench',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'rest' },
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'What happens now, when a delivery is short?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'I count them, I put a line through his figure and write the real '
            + 'number, and he initials it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And where does the correction go?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Nowhere. His copy goes back with him and ours goes in the folder.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'How often?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'About twice a month. Two or three plates on forty.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'In a year?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'I cannot say. The folder is by month, not by supplier. Perhaps '
            + 'fifty. Perhaps thirty.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What would you need?' },
    { who: 'hala', cam: { shot: 'close' },
      en: 'Somewhere to put the number, somebody who looks before Nadia pays, '
            + 'and the initialled line kept as the record.' }
  ]
});

PBE8.scene('u14-14-7-b', {
  set: 'workbench',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'rest' },
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The page is agreed with Beirut. I want to do the same at this end, '
            + 'with the plater.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ Then there is something you should know, and I have never '
            + 'written it down because nobody asked. ⚠ The plater is short about '
            + 'twice a month. Two or three plates on a delivery of forty. I count '
            + 'them, I put a line through the figure on his note, and I write the '
            + 'real number.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And then?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ And then nothing. There is nowhere for it to go. His note goes '
            + 'back with him, our copy goes in the folder, and at the end of the '
            + 'month Nadia pays what the invoice says.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'How many is that in a year?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ I do not know, because the only record is the corrected notes '
            + 'and they are filed by month, not by supplier. Perhaps fifty '
            + 'plates. Perhaps thirty.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And nobody has ever rejected one.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ There is no fourteen days at this end. With Beirut we have a '
            + 'clause and a period, so silence means something. Here there is no '
            + 'period at all, so silence means nothing — and I have been doing '
            + 'the only thing available to me, which is a line through a figure.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What would you need?' },
    { who: 'hala', cam: { shot: 'close' },
      en: '⚠ Somewhere to put the number. A sheet with his name on it and a '
            + 'column for the shortfall, and somebody who looks at it before '
            + 'Nadia pays him. ⚠ And I would want the line through the figure to '
            + 'go on being the record, because he initials it and that is the '
            + 'only thing he has ever agreed to.' }
  ]
});
