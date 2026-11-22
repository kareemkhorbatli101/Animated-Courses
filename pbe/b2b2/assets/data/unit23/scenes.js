/* Unit 23 — the acted dialogues. Every line is the book's own. */
PBE8.scene('u23-23-1', {
  set: 'pressdesk',
  arr: 0,
  cast: {
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'bassel', cam: { shot: 'wide' },
      en: 'Everybody is saying we have to get everything tested and it will '
            + 'take six months.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Everybody is saying it and nobody has read it. ⚠ I have, twice, '
            + 'and there are four questions to put to a notice before anybody is '
            + 'entitled to an opinion about it.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Go on.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ One: who is obliged? Not who is affected — who has the duty. ⚠ '
            + 'It is the importer. Us. Not Dallal Freres, which is what three '
            + 'people in this office have been assuming.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'And two?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ What exactly is required? A certificate from a body on the '
            + 'Ministry\'s accredited list, per consignment. Not a test of every '
            + 'item. Not a factory audit, which is what somebody told Abu Yasser. '
            + '⚠ Per consignment, and the list has eleven bodies on it and two '
            + 'are in Beirut.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Three?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ By when, and from when does the clock run. ⚠ This is the one '
            + 'that matters: the three months run from publication on 3 '
            + 'September, not from 1 January. So the transition ends on 3 '
            + 'December and the requirement bites on consignments arriving after '
            + '1 January — which means anything we order after about the middle '
            + 'of November.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'That is seven weeks, not four months.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ It is seven weeks. And four: what does the notice NOT say? ⚠ It '
            + 'does not say the certificate must be in Arabic. It does not say it '
            + 'must be original. And it says nothing about consignments already '
            + 'in transit — which is a gap, and a gap is a thing you can write '
            + 'and ask about.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'And now may I be angry?' },
    { who: 'nour', cam: { shot: 'close' },
      en: '⚠ Now you may be angry, and usefully, about seven weeks rather '
            + 'than vaguely about six months. ⚠ Indignation before reading always '
            + 'costs you the first meeting — because somebody in the room will '
            + 'have read it, and after that nothing else you say is weighed.' }
  ]
});

PBE8.scene('u23-23-1-pair', {
  set: 'pressdesk',
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
      en: 'Six months of testing, everything we import, and it is absurd.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Where does the clock start?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'January. The first of January.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Paragraph 11(b) says the transition runs three months from '
            + 'publication. What was the publication date?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…The third of September.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So the transition ends on 3 December, and anything we order after '
            + 'about 15 November arrives inside the requirement.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That is seven weeks, not four months. That is worse.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Much worse. And what exactly is required?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Testing of everything.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'A certificate per consignment, from a list of eleven bodies. Not a '
            + 'test of every item. So the office version is wrong twice, in '
            + 'opposite directions.' }
  ]
});

PBE8.scene('u23-23-2', {
  set: 'pressdesk',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' },
    sayegh: { rig: 'm-50s-b', name: 'Mr Sayegh', voice: 'en-AU-WilliamMultilingualNeural', shirt: '#4a5e74', shirt2: '#3a4a5c',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Our draft asks the Ministry to reconsider the inclusion of '
            + 'packaging in the schedule.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Who at the Ministry can reconsider a schedule?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…The Minister, I suppose. Or whoever signed the notice.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ And the letter is addressed to the Directorate of Standards, '
            + 'which administers the schedule and did not write it. ⚠ So you are '
            + 'asking people for something they do not have, which they will '
            + 'answer by saying they do not have it — and that is four weeks '
            + 'gone.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then what do we ask them for?' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Three things, and all three are things a directorate does every '
            + 'week. ⚠ A confirmation: does a consignment loaded in December and '
            + 'arriving in January fall within it? That is an interpretation and '
            + 'they issue them. ⚠ A clarification: must the certificate be in '
            + 'Arabic, and will a certified translation serve? They answer that '
            + 'in a line. ⚠ And an administrative concession: accept a copy '
            + 'certified by the issuing body rather than an original, which they '
            + 'have the power to allow and have allowed before.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'None of that changes the policy.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ None of it. And the three of them together are worth about five '
            + 'weeks to us, which is most of what the policy costs us in time. ⚠ '
            + 'A grantable request beats a reasonable one, because the reasonable '
            + 'one needs somebody else\'s signature and the grantable one needs '
            + 'the signature of the person reading the letter.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the schedule point?' },
    { who: 'sayegh', cam: { shot: 'close' },
      en: '⚠ Goes in the trade association\'s submission, which is addressed '
            + 'to the people who can change a schedule, and takes two years. ⚠ '
            + 'Two documents, two bodies, two timescales — and the mistake is '
            + 'putting the slow request in the fast letter, where it crowds out '
            + 'the three things you could have had by October.' }
  ]
});

PBE8.scene('u23-23-2-pair', {
  set: 'pressdesk',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'A letter about translations and certified copies. It is beneath '
            + 'the situation we are in.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'What are the three requests worth, in weeks?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I do not know. Not much.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'About five weeks. What does the rule cost us in time altogether?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Seven.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So the undignified letter recovers five of the seven.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And the dignified one?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Goes to a directorate that cannot change a schedule, and comes '
            + 'back in four weeks saying it is not a matter for them.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Which recovers nothing and costs four weeks.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'And the schedule argument still gets made. In the association '
            + 'submission, to the people who can change a schedule, over two '
            + 'years.' }
  ]
});

PBE8.scene('u23-23-3', {
  set: 'pressdesk',
  arr: 2,
  cast: {
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'bassel', cam: { shot: 'wide' },
      en: 'Everybody agrees it will be expensive.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Expensive is not a figure, and until there is one nobody in this '
            + 'firm can decide anything — including whether to argue about it at '
            + 'all.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Then give me the figures.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Four. ⚠ One: the cost of complying, first year. Certification at '
            + 'about 24,000 a consignment, eleven consignments, plus about 46,000 '
            + 'of our own time setting it up. About 310,000. ⚠ Two: the cost of '
            + 'complying in a normal year. The setup does not recur, so about '
            + '264,000.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'And three?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ The cost of complying LATE, which is the figure nobody works '
            + 'out. ⚠ If we are not ready on 1 January, four consignments are '
            + 'held at the border. Demurrage, the stock-out on two lines, and '
            + 'about three weeks of the Homs opening order — about 590,000, once.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'That is nearly twice the annual cost.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Which is why it is the figure that changes behaviour. ⚠ The '
            + 'annual cost makes people indignant and the late cost makes them '
            + 'act — and a paper that gives only the first produces a meeting, '
            + 'while one that gives both produces a certification programme by '
            + 'Thursday.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'And four?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ The things that are not money, said separately so that nobody '
            + 'can add them to the total and so that nobody can ignore them. ⚠ '
            + 'Two of the eleven accredited bodies are in Beirut, which means '
            + 'Nour in Beirut twice more this year. And the Dallal relationship: '
            + 'they are not obliged and we are, so we are asking them to do '
            + 'something for us, which changes what we can ask for in the April '
            + 'review.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Why not put those in the total?' },
    { who: 'nadia', cam: { shot: 'close' },
      en: '⚠ Because a total with a relationship in it is a total nobody '
            + 'believes, and a relationship outside the total is a thing somebody '
            + 'has to decide about. ⚠ Money adds up. The rest does not, and '
            + 'pretending it does is how the rest gets lost.' }
  ]
});

PBE8.scene('u23-23-3-pair', {
  set: 'pressdesk',
  arr: 2,
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
      en: 'I want to put a value on the supplier relationship and add it to '
            + 'the total. It would show how bad this is.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'What would the total then mean?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That the real cost is higher than people think.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And what will the first person who reads it argue about?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…The value I put on the relationship.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'For the whole meeting. And the certification programme?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Would not get discussed.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So keep it out of the total and give it its own row. Then it is '
            + 'not a number anybody can dispute, it is a thing somebody has to '
            + 'decide about.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Which is what I wanted in the first place.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'And it is the largest item on the page, which the arithmetic would '
            + 'have hidden.' }
  ]
});

PBE8.scene('u23-23-4', {
  set: 'pressdesk',
  arr: 0,
  cast: {
    sayegh: { rig: 'm-50s-b', name: 'Mr Sayegh', voice: 'en-AU-WilliamMultilingualNeural', shirt: '#4a5e74', shirt2: '#3a4a5c',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'sayegh', cam: { shot: 'wide' },
      en: 'Your plan says we certify through the Beirut body and keep Dallal. '
            + 'What would show that wrong?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'If the Beirut body stopped issuing for packaging.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Good. That is the first part. ⚠ Who is looking for it, and on what day?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…Nobody. We would find out when a consignment was refused.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Which is January, at the border, with 590,000 attached. ⚠ So the '
            + 'condition is worth nothing without the other two parts: a named '
            + 'person and a stated day.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Bassel, on the first of each month.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ And he tells you the same day, whether or not anything has '
            + 'changed — because a watcher who only reports changes is a watcher '
            + 'nobody can tell has stopped watching.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is three parts: the condition, the watcher, the day.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ And the reporting even when nothing has happened, which is the '
            + 'part everybody drops. ⚠ A monthly no change is four words and it '
            + 'is the only evidence that the arrangement exists.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Why is a condition with nobody watching worse than no condition at all?' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Because it has been written down, so everybody believes it is '
            + 'being monitored. ⚠ No condition leaves a firm alert and uneasy, '
            + 'which is uncomfortable and quite safe. A condition in a plan with '
            + 'no watcher produces exactly the same ignorance plus confidence — '
            + 'and confidence is what makes a firm order eleven consignments in '
            + 'November without checking anything.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'How many conditions should a plan have?' },
    { who: 'sayegh', cam: { shot: 'close' },
      en: '⚠ As many as it has watchers, and not one more. ⚠ Three with names '
            + 'on them beats nine in a list — and a plan with nine and no names '
            + 'is a plan whose author wanted to look thorough.' }
  ]
});

PBE8.scene('u23-23-4-pair', {
  set: 'pressdesk',
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
      en: 'The position is reviewed regularly. That is our monitoring arrangement.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Who reviews it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The management meeting.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'On what day?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It is a standing item.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'When was it last discussed?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…I would have to look. Possibly March.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So nobody can tell whether it has lapsed, and it has.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'But it is written in the plan.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Which is the problem. Everybody believes it is being watched, so '
            + 'nobody is uneasy — and that is ignorance plus confidence.' }
  ]
});

PBE8.scene('u23-23-5', {
  set: 'pressdesk',
  arr: 1,
  cast: {
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nadia', cam: { shot: 'wide' },
      en: 'In 2024 the deposit rules changed and this firm argued about it '
            + 'from March to August.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And then?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ And then complied, in three weeks, in September, with everything '
            + 'we could have done in April. ⚠ The five months cost about 400,000 '
            + 'in late fees and one customer, and the rule never moved a word.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So the test is whether we can move it.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ The test is better than that, because everybody thinks they can '
            + 'move things. ⚠ Ask: has this body ever changed a published '
            + 'requirement after publication, and how long did it take? A factual '
            + 'question with a factual answer.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And for this one?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Twice in eleven years, and both took over two years. ⚠ So the '
            + 'honest planning assumption is that it does not change inside our '
            + 'timescale, whatever the merits.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then we do not argue at all?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ We argue AND plan, and the mistake is thinking that is a '
            + 'contradiction. ⚠ The plan runs on the real timetable and the '
            + 'argument runs on the two-year one — and they are two documents '
            + 'with two audiences, like 23.2.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What goes wrong when a firm does both badly?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ One of two things. ⚠ Either the argument becomes the plan, which '
            + 'is what happened in 2024 — everybody felt busy and nothing was '
            + 'being prepared. ⚠ Or the plan silences the argument, and a year '
            + 'later the firm is complying with something it never objected to '
            + 'and the trade has lost the only submission that mattered.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'How do you keep them separate?' },
    { who: 'nadia', cam: { shot: 'close' },
      en: '⚠ Different people and different dates. ⚠ Bassel runs the '
            + 'certification programme to 3 December. I write the association '
            + 'submission for the November meeting. Neither of us reports on the '
            + 'other\'s work — and if the submission succeeds in 2029 we will '
            + 'have certified for two years and lost nothing by it.' }
  ]
});

PBE8.scene('u23-23-5-pair', {
  set: 'pressdesk',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Preparing to comply concedes the argument. If we certify, we have '
            + 'accepted the rule.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'What did this firm do in 2024?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Argued about the deposit rules.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'For how long, and did the rule move?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'March to August. No.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And what did the five months cost?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'About 400,000 and a customer.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So the arguing conceded nothing and prepared nothing. Now suppose '
            + 'we certify for two years and the submission succeeds in 2029.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Then we have lost nothing by certifying.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'And a firm that argues and does not certify loses twice. The '
            + 'asymmetry is total, and it is why both.' }
  ]
});

PBE8.scene('u23-23-6', {
  set: 'pressdesk',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    tarabishi: { rig: 'm-50s-b', name: 'Mr Tarabishi', voice: 'en-NZ-MitchellNeural', shirt: '#7a5a3f', shirt2: '#604832',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Mr Tarabishi, the draft says the industry is united in opposing '
            + 'the requirement. We are not.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: '⚠ Nobody is. Two of the four signatories already comply and would '
            + 'be glad to see it enforced tomorrow.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then why does the draft say united?' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: '⚠ Because that is how submissions have been written here for '
            + 'twenty years, and it is a habit rather than a decision. ⚠ And it '
            + 'costs us, which I have only understood in the last two years.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'How does it cost you?' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: '⚠ The Directorate knows the trade. They know Hamdan complies and '
            + 'we do not. ⚠ So a submission claiming we are united tells them one '
            + 'of two things: that we do not know our own members, or that we are '
            + 'prepared to say something convenient — and after that the three '
            + 'points we actually agree on are read as negotiating positions '
            + 'rather than as facts.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What do all four agree on?' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: '⚠ Three things, and they are not small. ⚠ That packaging was '
            + 'included in error, because the schedule was drafted for '
            + 'construction materials after a specific failure. That three months '
            + 'from publication is too short for eleven accredited bodies to '
            + 'absorb the trade. And that the notice is silent on goods in '
            + 'transit, which is a gap that affects everybody.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the fourth point, which we want and Hamdan does not.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: '⚠ A transition for importers whose existing supplier is not yet '
            + 'accredited. ⚠ You want it, Hamdan actively does not, and I am not '
            + 'going to pretend the association has a view. It goes in an annex '
            + 'with your name on it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Does that weaken the submission?' },
    { who: 'tarabishi', cam: { shot: 'close' },
      en: '⚠ It strengthens the three points and it costs you the comfort of '
            + 'being inside the word united. ⚠ A submission that marks its one '
            + 'disagreement is a submission whose agreements can be taken at face '
            + 'value — which is the only thing we have to sell.' }
  ]
});

PBE8.scene('u23-23-6-pair', {
  set: 'pressdesk',
  arr: 2,
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
      en: 'The word united is the submission\'s main asset. Take it out and '
            + 'we have nothing.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Does the Directorate know that Hamdan already comply?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Yes. Everybody knows.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then what does united tell them?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That we do not know our own members.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Or that we will say what is convenient. And then what happens to 1.2?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It gets read as a negotiating position.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '1.2 is arithmetic. Eleven bodies, four hundred consignments last '
            + 'year, two thousand nine hundred added.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Which anybody can check.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'And which is worth nothing if the document it sits in has already '
            + 'been shown to say convenient things.' }
  ]
});

PBE8.scene('u23-23-7', {
  set: 'pressdesk',
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
      en: 'I have to decide about the joint submission by Friday, and I have '
            + 'been putting it off for eleven days.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Say the problem in one sentence.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ It is right about three things and it is silent about the one '
            + 'that costs us 900,000. ⚠ And the silence is not an oversight — '
            + 'Hamdan asked for it, because a transition for importers whose '
            + 'supplier is not accredited would put us back level with them.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'So do not sign it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Then the three points go in with three signatures instead of '
            + 'four, and 1.2 is arithmetic that affects the whole trade and I '
            + 'would be the reason it is weaker. ⚠ I would be punishing the '
            + 'Directorate for Hamdan\'s drafting.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Then sign it and say nothing.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Then I have signed a document whose scope I disagree with and '
            + 'said nothing, which is 19.2 in reverse — a signatory who is silent '
            + 'is read as agreeing, and in a year I cannot say I objected because '
            + 'there is nothing to point at.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'So you already know what you are doing.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ I sign the three points and file one page of my own on the '
            + 'fourth. ⚠ What I have been putting off for eleven days is not the '
            + 'decision. It is the telephone call.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'To Mr Tarabishi.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Yes. And I had been planning to file the annex on Friday and let '
            + 'him see it when the Directorate did.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Then you would have broken ranks twice. ⚠ Once in the annex, '
            + 'which is legitimate and which he will accept — and once by letting '
            + 'the chairman of your own association learn his members\' positions '
            + 'from the body he is writing to.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'He would not forgive the second one.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Nobody would, and it is not about forgiveness. ⚠ An association '
            + 'exists so that a body hears one voice where there is one and knows '
            + 'where there is not. ⚠ A chairman surprised by his own member in '
            + 'front of the Directorate cannot do that job for anybody again — '
            + 'and the next time this trade needs four signatures it will not get '
            + 'them.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So I ring him on Tuesday and tell him what the annex says.' },
    { who: 'nadia', cam: { shot: 'close' },
      en: '⚠ You ring him on Tuesday and ask him whether he would rather the '
            + 'difference was marked in his document or in yours. ⚠ Which is a '
            + 'real question with two acceptable answers — and if he chooses his, '
            + 'you have cost yourself nothing and given him the stronger '
            + 'submission.' }
  ]
});

PBE8.scene('u23-23-7-pair', {
  set: 'pressdesk',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    tarabishi: { rig: 'm-50s-b', name: 'Mr Tarabishi', voice: 'en-NZ-MitchellNeural', shirt: '#7a5a3f', shirt2: '#604832',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The association\'s submission has four points. We can sign three of them.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'The word in the draft is united. Four signatures under four points.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'If I sign and stay silent on the fourth, in a year I will have '
            + 'nothing to point at.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'And a signatory who is silent is read as agreeing. That is how the '
            + 'Directorate will read it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Hamdan will not argue for a transition that disadvantages them, '
            + 'and they are right not to.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'Then the submission says so on its face. Paragraph two carries the '
            + 'three points, and the difference goes in an annex.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Annex B for us and Annex C for Hamdan. The difference is visible '
            + 'to anybody who reads it.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'I give up the word united. The association keeps the only asset it has.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Which is that its agreements can be taken at face value.' },
    { who: 'tarabishi', cam: { shot: 'close' },
      en: 'And I would far rather hear this on a Tuesday than be surprised by '
            + 'my own member in front of the Directorate.' }
  ]
});

PBE8.scene('u23-23-7-b', {
  set: 'pressdesk',
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
      en: 'You rang him on the Tuesday. What did he say?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ He took it into the joint document. ⚠ Paragraph 2 of the '
            + 'submission is his drafting, not mine, and it is better than mine '
            + 'was — because it says who gains and who loses and then refuses to '
            + 'weigh us against each other.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'And the annexes still went in.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Both of them. Mine and Hamdan\'s, on the same day, and his points '
            + 'at us about as hard as mine point at him.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'And the Directorate?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Answered 1.3 in nine days: goods in transit on 1 January are '
            + 'outside the requirement. ⚠ That was the one we asked for an answer '
            + 'rather than a change, exactly as 23.2 said — and it is the only '
            + 'thing we have in writing. On packaging being in the schedule in '
            + 'error they have said nothing, and I do not expect them to.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'The figures.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Nine hundred thousand in year one, about 310,000 in a normal '
            + 'year, and the third figure, which I had never worked out, was '
            + '590,000 — the cost of complying late, which is two months of held '
            + 'consignments and the storage. ⚠ It is nearly two thirds of the '
            + 'whole programme, and nobody in this firm had put a number on it '
            + 'until I was made to.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'And the watcher.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Bassel, on 1 November, reporting whether Dallal Freres had '
            + 'applied for accreditation. ⚠ They had not, which falsified the '
            + 'cheaper plan — and he told me on the day, with nothing having '
            + 'moved, which is the report people stop making.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'And by December?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Eleven consignments certified by 3 December through the Beirut '
            + 'body. The programme ran.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'One thing differently.' },
    { who: 'nour', cam: { shot: 'close' },
      en: '⚠ I would have made the telephone call on the second day instead '
            + 'of the twelfth. ⚠ The decision took me four minutes once I said it '
            + 'out loud to you — and the eleven days were not thinking, they were '
            + 'avoiding one call, and the whole trade was the thing at risk while '
            + 'I did it.' }
  ]
});
