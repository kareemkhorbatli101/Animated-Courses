/* Unit 19 — the acted dialogues. Every line is the book's own. */
PBE6.scene('u19-19-1', {
  set: 'returnsdesk',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.26, 0.62],
      pose: 'rest' },
    supplier: { rig: 'm-30s-a', name: 'Supplier', voice: 'en-SG-WayneNeural', shirt: '#56683f', shirt2: '#445332',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The label printer you supplied in November is not fit for purpose.' },
    { who: 'supplier', cam: { shot: 'mid' },
      en: 'What does it do?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It keeps failing.' },
    { who: 'supplier', cam: { shot: 'mid' },
      en: 'What does it do when it fails?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…It prints about forty labels and then the feed slips, and the '
            + 'forty-first is printed across two labels.' },
    { who: 'supplier', cam: { shot: 'mid' },
      en: 'Now I can help you. How often?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Often.' },
    { who: 'supplier', cam: { shot: 'mid' },
      en: '⚠ Count it. I have about nine of these machines in Damascus and if '
            + 'yours slips at forty, it is one thing, and if it slips at four '
            + 'hundred, it is another thing entirely.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I counted for three days. It slips at between thirty-eight and '
            + 'forty-four, every time, about eleven times a day — ⚠ and it does '
            + 'not slip at all on the first run of the morning.' },
    { who: 'supplier', cam: { shot: 'mid' },
      en: 'That last part is worth more than everything else you have said. ⚠ '
            + 'Not slipping when it is cold is a feed roller, and slipping when '
            + 'it is warm is a feed roller, and the two together mean it is a '
            + 'roller and not the software.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So the count told you what it was.' },
    { who: 'supplier', cam: { shot: 'mid' },
      en: '⚠ The count and the exception. It fails at forty narrows it to '
            + 'about four things. ⚠ It does not fail on the first run narrows it '
            + 'to one — and I have a roller in the van.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And it is not fit for purpose?' },
    { who: 'supplier', cam: { shot: 'close' },
      en: '⚠ Told me nothing and put me on my guard, because it is the '
            + 'sentence people use before a solicitor. ⚠ I would still have come; '
            + 'I would have come ready to argue instead of ready to mend it.' }
  ]
});

PBE6.scene('u19-19-1-pair', {
  set: 'returnsdesk',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.26, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Your deliveries are always late.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'How often?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Four of the last eleven arrived after the shop had shut.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Good. And is there a pattern?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…⚠ All four were Thursdays.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Thursday is our Ghouta day too. The van that brings yours is on '
            + 'the eastern run in the morning and comes to you last.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'So it is not lateness; it is Thursday.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ And neither of us had connected it, because always late has no day in it.' }
  ]
});

PBE6.scene('u19-19-2', {
  set: 'returnsdesk',
  arr: 1,
  cast: {
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nadia', cam: { shot: 'wide' },
      en: 'Your letter says we have serviced the machine twice since November.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'We have. In December and in February.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Who did it?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The engineer from the supplier, both times.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Then you have not serviced it; you have had it serviced, and the '
            + 'difference matters twice over in a claim. ⚠ First, we serviced it '
            + 'claims that we have somebody who can service a label printer, and '
            + 'we do not — and if they ask who, the answer is nobody, which makes '
            + 'the rest of the letter weaker.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the second?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ We have had it serviced twice proves we did our part, because '
            + 'having it serviced is the only part that was ours. The servicing '
            + 'itself was theirs, by their own engineer, and the construction '
            + 'says so in four words.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So the phrase does two things at once.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'It says we arranged it and somebody else did it, and in a claim ⚠ '
            + 'it quietly puts the work on the other side\'s record and not on '
            + 'ours. Both services are in their engineer\'s own notes.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What else have we had done?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'List it. ⚠ We have had the roll holder replaced, we have had the '
            + 'feed cleaned, and we have had the machine re-sited — which we did '
            + 'because their engineer asked us to, and which is worth more in '
            + 'this letter than any adjective.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the things we did ourselves?' },
    { who: 'nadia', cam: { shot: 'close' },
      en: '⚠ Say those in the active, and say them separately. We have '
            + 'cleaned the rollers weekly since January and kept a sheet. ⚠ '
            + 'Mixing the two is what makes a claim letter sound as though a '
            + 'company is claiming credit for everything that has been done to '
            + 'its own machine.' }
  ]
});

PBE6.scene('u19-19-2-pair', {
  set: 'returnsdesk',
  arr: 1,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'Your letter says we maintain the van properly.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'We do.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Who services it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Your own depot. Three times this year.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Then say so: we have had it serviced three times this year, at '
            + 'your own depot, and we have had the brakes done in August.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And the oil?' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ That one is yours, so say it in the active and say it '
            + 'separately: the driver has checked the oil every Monday and it is '
            + 'in his sheet.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Why separately?' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ Because the two together read as a company claiming credit for '
            + 'everything that has been done to its own van.' }
  ]
});

PBE6.scene('u19-19-3', {
  set: 'returnsdesk',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.26, 0.62],
      pose: 'rest' },
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'I asked them why has nobody come out? and the answer was two '
            + 'paragraphs about how busy March is.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Because you asked a why question about them. ⚠ A why question '
            + 'invites an explanation, and an explanation is the cheapest thing '
            + 'anybody can send you.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What should I have asked?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Could you tell me whether an engineer has been allocated, and if '
            + 'so when he is expected? ⚠ Two facts, and neither of them can be '
            + 'answered with a paragraph about March.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is longer and it sounds softer.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'It sounds softer and it is much harder to refuse. ⚠ A direct '
            + 'question can be answered with an explanation; an indirect question '
            + 'asks for a fact, and a company that does not answer it has visibly '
            + 'not answered it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Visibly to whom?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ To whoever reads the file afterwards — which in a claim is the '
            + 'whole point. Why has nobody come? answered with a paragraph looks '
            + 'like a conversation. ⚠ Could you tell me whether an engineer has '
            + 'been allocated answered with a paragraph looks like a refusal to '
            + 'say.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So the indirect form is for the file as much as for the reader.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ It is a question that keeps its shape. And there is a second '
            + 'thing it does: it lets you ask something you half know. ⚠ Could '
            + 'you tell me whether the slip was recorded at the February service? '
            + 'I know it was, because his note says so — and asking it as a '
            + 'question is politer than telling them what their own engineer '
            + 'wrote.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if they say it was not recorded?' },
    { who: 'nadia', cam: { shot: 'close' },
      en: '⚠ Then you have the note. ⚠ An indirect question you already know '
            + 'the answer to is the strongest sentence in a claim, and it costs '
            + 'nothing to ask.' }
  ]
});

PBE6.scene('u19-19-3-pair', {
  set: 'returnsdesk',
  arr: 2,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.26, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'You have his note. Why ask at all?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Because telling them what their own engineer wrote is a small accusation.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And if they answer no, it was not recorded?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '⚠ Then I have the note, and they have put something in writing '
            + 'that their own document contradicts.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And if they answer yes?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '⚠ Then the claim has their own engineer in it, which is better '
            + 'than having my word for it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ So both answers help you.' },
    { who: 'a', cam: { shot: 'close' },
      en: '⚠ Both answers help me, and it cost one sentence.' }
  ]
});

PBE6.scene('u19-19-4', {
  set: 'returnsdesk',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.26, 0.62],
      pose: 'rest' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'They have replied. They are sending a roller.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'And what did you ask for?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'A roller, a credit for the wasted labels, somebody to show us how '
            + 'to load it, and a note of the stated run length.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'And you have been sent?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'A roller.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Of course. You offered them four things and they chose the '
            + 'cheapest, which is what anybody does with a list. ⚠ A list of asks '
            + 'is a menu, and the other side orders from it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'All four were reasonable.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'All four were reasonable, and ⚠ a list also tells them that you do '
            + 'not know which one matters to you — and if you do not, they will '
            + 'not guess. Which one mattered?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…The run length. ⚠ If the machine is specified to need a check at '
            + 'forty, everything else on the list is irrelevant and we have a '
            + 'different problem, which is what we were told when we bought it.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Then the letter was one sentence long and you wrote four. ⚠ What '
            + 'I am asking for is the stated run length before a feed check is '
            + 'required, in writing, by Thursday the 26th.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the credit for the labels?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Afterwards, and in a different letter, and only if the answer is '
            + 'not forty. ⚠ A claim with one ask in it gets an answer; a claim '
            + 'with four gets the cheapest — and then the other three are harder '
            + 'to ask for a second time, because they have been asked once and '
            + 'not refused, which is worse than refused.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Why is unanswered worse than refused?' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: '⚠ Because a refusal can be argued with and a silence cannot. They '
            + 'have not said no to the credit. ⚠ They have said nothing, and '
            + 'nothing has no reason in it to answer.' }
  ]
});

PBE6.scene('u19-19-4-pair', {
  set: 'returnsdesk',
  arr: 0,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.26, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'Your five asks. Which one would end the matter either way?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'None of them would end it. They are all things I want.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Then which one, answered, would tell you whether you have a claim at all?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…The specified weight. If it is under twelve kilos, I have no claim.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ That one. First, alone, with a date.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It is the one I put last.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ Everybody puts it last, because it is the one that might not '
            + 'help. And it is the only one that gets answered quickly, because '
            + 'answering it may end the matter for them too.' }
  ]
});

PBE6.scene('u19-19-5', {
  set: 'returnsdesk',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' },
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'They have answered. Two pages about whether the machine was '
            + 'correctly specified for our volume.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'And what did you ask?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The stated run length before a feed check is required.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Those are different questions.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'They are, and theirs is a much more interesting one for them, '
            + 'because it is about what we ordered.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Which is what happens when a question can be slid sideways. You '
            + 'asked a narrow factual thing and they have answered a broad '
            + 'arguable thing, and now the correspondence is about our purchasing '
            + 'decision.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'How do I pull it back?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ With a cleft, and nothing else in the paragraph. What I asked '
            + 'for was the stated run length before a feed check is required. I '
            + 'did not ask whether the machine was correctly specified, and I am '
            + 'not asking now.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It sounds blunt.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ It is the only shape of sentence that cannot be slid sideways, '
            + 'because the subject of the sentence is the question itself. ⚠ What '
            + 'I asked for was X puts X in the one position in English where it '
            + 'cannot be mistaken for anything else.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the second half?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ I did not ask whether Y, and I am not asking now — which closes '
            + 'the door they have opened and refuses to walk through it. ⚠ '
            + 'Without that half they will answer the specification question '
            + 'again, because they have now written two pages on it and nobody '
            + 'abandons two pages.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Is there a risk in it?' },
    { who: 'nadia', cam: { shot: 'close' },
      en: '⚠ One, and it is worth knowing. A cleft is emphatic, so it can '
            + 'only be used once in a letter. ⚠ Two clefts in one page read as '
            + 'anger, and anger in a claim is the thing the other side is waiting '
            + 'for — because an angry claimant can be managed instead of '
            + 'answered.' }
  ]
});

PBE6.scene('u19-19-5-pair', {
  set: 'returnsdesk',
  arr: 1,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'Your letter has three clefts in it. Which one is the letter about?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The run length.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Then that one stays and the other two become ordinary sentences.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'They are all true.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ They are all true and three of them read as anger — and an angry '
            + 'claimant can be managed instead of answered.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Managed how?' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ By somebody senior telephoning to calm you down, which takes '
            + 'four minutes of their time and produces no figure at all. ⚠ One '
            + 'cleft gets a figure; three get a telephone call.' }
  ]
});

PBE6.scene('u19-19-6', {
  set: 'returnsdesk',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.26, 0.62],
      pose: 'rest' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Ms Tannous has three items. The agent\'s re-marking charge, about '
            + '140,000. The two days to her customer. And something her customer '
            + 'has deducted from her, which she has not put a figure on.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Which of the three is undisputed?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The first. It is her agent\'s invoice, it is itemised, and it '
            + 'happened because of our code.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Then it goes in the first line, in full, with the figure, and '
            + 'with no however anywhere near it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the other two?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'In the second paragraph, and separately from each other, because '
            + 'they are different kinds of thing. ⚠ The two days are ours and '
            + 'cannot be priced — we caused them and there is no invoice. ⚠ And '
            + 'the third is a real loss that we did not cause.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Her customer deducted it because the cartons were late.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Her customer deducted it from her, under her contract, which we '
            + 'have never seen. ⚠ It is a real loss and it is hers to bear or to '
            + 'recover from her own customer, and it is not ours. And that '
            + 'sentence has to be in the letter, once, plainly, ⚠ and it has to '
            + 'come after the acceptance and not before it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Why does the order matter so much?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Because a letter that limits before it accepts is read as a '
            + 'refusal with a concession at the end, and a letter that accepts '
            + 'before it limits is read as an acceptance with a boundary. ⚠ The '
            + 'content is identical. The order decides which letter she thinks '
            + 'she has received.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the two days, which we cannot price?' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: '⚠ Offer something for them that is not money. The list of objects '
            + 'carrying the code, the reworded programme line, and the name of '
            + 'the person who will telephone her the same day if it happens '
            + 'again. ⚠ She asked us for the list in January and she will '
            + 'remember that we sent it.' }
  ]
});

PBE6.scene('u19-19-6-pair', {
  set: 'returnsdesk',
  arr: 2,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.26, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'Read me your letter as if I were Ms Tannous.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'We have considered your claim. The deduction made by your own '
            + 'customer is not a matter for which we can accept responsibility, '
            + 'and there is no invoice for the two days. We are, however, '
            + 'prepared to accept the agent\'s charge of 140,000.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ So you are refusing most of it and offering me the carriage.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That is not what it says.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ It is what it says in the order you have said it. Now read me '
            + 'the same five sentences the other way round.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'We accept your agent\'s charge of 140,000 in full. The two days '
            + 'are ours and there is no invoice for them. Your customer\'s '
            + 'deduction is a real loss and it is not ours.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ Same content. And now you are a company that accepts things.' }
  ]
});

PBE6.scene('u19-19-7', {
  set: 'returnsdesk',
  arr: 0,
  cast: {
    lina: { rig: 'f-20s-b', name: 'Lina', voice: 'en-NZ-MollyNeural', shirt: '#8a5f7a', shirt2: '#6e4b61',
      full: true, scale: 0.62, bottom: 30, at: [0.26, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'lina', cam: { shot: 'wide' },
      en: 'May I ask about the Tannous letter? I have read it four times and '
            + 'I think there is somebody missing from it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Go on.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'Count the people who lost something. Ms Tannous lost the agent\'s '
            + 'charge and whatever her customer deducted. ⚠ Her customer lost two '
            + 'days of whatever he was going to do with nine cartons. The agent '
            + 'lost an afternoon at the port.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the fourth?' },
    { who: 'lina', cam: { shot: 'mid' },
      en: '⚠ Abu Yasser. He marked nine cartons correctly from the wrong '
            + 'stencils and he has been in every document in this company for two '
            + 'months as the man at the marking bench. ⚠ He has not lost money '
            + 'and he has lost something.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And of the four, we have written to?' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'One. ⚠ And she is the only one of the four who can send us an '
            + 'invoice, which I do not think is a coincidence.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is not a coincidence. A claim is answered by whoever can bill you.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: '⚠ Then the question is not who the claimant is; it is who is a '
            + 'claimant and cannot bill. The agent will not write to us because '
            + 'he has invoiced her and been paid. ⚠ Her customer does not know we '
            + 'exist. And Abu Yasser works here.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What would you do about the three?' },
    { who: 'lina', cam: { shot: 'mid' },
      en: '⚠ Nothing about two of them. The agent has been paid and her '
            + 'customer is hers to manage; writing to him over her head would be '
            + 'the worst thing we could do. ⚠ But Abu Yasser has read four '
            + 'documents about the marking bench and nobody has written one '
            + 'sentence to him.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the sentence?' },
    { who: 'lina', cam: { shot: 'close' },
      en: '⚠ You marked nine cartons correctly from the stencils you were '
            + 'given, and the fault was in the line I wrote. ⚠ It is in the '
            + 'post-mortem in exactly those words and he has never been shown the '
            + 'post-mortem — because a post-mortem goes to the person who decides '
            + 'and not to the person who is in it.' }
  ]
});

PBE6.scene('u19-19-7-pair', {
  set: 'returnsdesk',
  arr: 0,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.26, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'Your claim. Who lost something?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The school lost a morning. We lost the cost of the second delivery.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Anybody else?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…The caretaker waited two and a half hours.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Can he bill you?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'No. He is not the school; he is a man with a key.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ And has anybody written to him?' },
    { who: 'a', cam: { shot: 'close' },
      en: '⚠ Nobody has written to him, and he is the only person in this '
            + 'whole matter who actually sat on a step.' }
  ]
});

PBE6.scene('u19-19-7-b', {
  set: 'returnsdesk',
  arr: 0,
  cast: {
    lina: { rig: 'f-20s-b', name: 'Lina', voice: 'en-NZ-MollyNeural', shirt: '#8a5f7a', shirt2: '#6e4b61',
      full: true, scale: 0.62, bottom: 30, at: [0.26, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'lina', cam: { shot: 'wide' },
      en: 'Count the people who lost something. Ms Tannous lost the agent\'s '
            + 'charge and whatever her customer deducted. Her customer lost two '
            + 'days. The agent lost an afternoon at the port.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the fourth?' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'Abu Yasser. He marked nine cartons correctly from the wrong '
            + 'stencils and he has been in every document in this company for two '
            + 'months.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And of the four, we have written to one.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'And she is the only one of the four who can send us an invoice, '
            + 'which I do not think is a coincidence.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What is owed to Abu Yasser?' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'One sentence: you marked nine cartons correctly from the stencils '
            + 'you were given, and the fault was in the line I wrote. It is in '
            + 'the post-mortem in those words and he has never been shown the '
            + 'post-mortem.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Why not?' },
    { who: 'lina', cam: { shot: 'close' },
      en: 'Because a post-mortem goes to the person who decides and not to '
            + 'the person who is in it.' }
  ]
});
