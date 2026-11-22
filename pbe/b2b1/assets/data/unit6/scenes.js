/* Unit 6 — the acted dialogues. Every line is the book's own. */
PBE7.scene('u6-6-1', {
  set: 'writingdesk',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.63, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'I have written the bank version and the yard version and they '
            + 'sound like different people wrote them.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ They should. Read me a line of each.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The April receipt will fall into May. And: the plater was down '
            + 'eleven days; we are two weeks behind.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Good, and now say what is different, because it is not '
            + 'politeness. ⚠ There are four dials and you have moved three of '
            + 'them.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Formality. And detail — the yard gets the bearing and the bank does not.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ And distance. ⚠ The April receipt will fall into May has nobody '
            + 'in it; we are two weeks behind has us in it. That is the third '
            + 'dial and it is the one that matters most to a bank.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the fourth?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Hedging. And it is the one you are moving by accident. Read the '
            + 'bank line again.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The April receipt will fall into May.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Will. Flat. Certain. Now the yard line.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'He is running again from the 13th and we should catch up by the '
            + 'end of the month.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Should. ⚠ So the yard gets a hedge and the bank gets a '
            + 'certainty, and you have it exactly the wrong way round. The yard '
            + 'can absorb an uncertainty — they work a Saturday or they do not. ⚠ '
            + 'A bank that is told will and then finds out should has been '
            + 'misled, and nobody meant to.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I was being confident for the bank.' },
    { who: 'nadia', cam: { shot: 'close' },
      en: '⚠ You were being formal for the bank and you moved the hedging '
            + 'dial with the formality dial, because they feel like the same dial '
            + 'and they are not. ⚠ Formality up, distance up, detail down — and '
            + 'hedging stays exactly where the truth is.' }
  ]
});

PBE7.scene('u6-6-1-pair', {
  set: 'writingdesk',
  arr: 0,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.63, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'You have will for the customer and should for the owner. Which is true?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Should, probably. The coupling is being made in Aleppo and nobody '
            + 'has seen it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So the customer has been told something you do not know.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I did not want to worry her.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'You have not spared her a worry, you have moved it. She will plan '
            + 'on your date and find out in nine days.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And the owner gets the hedge because he can do something about it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Which is true, and it is a reason to give him more detail, not '
            + 'less certainty. Those are different dials.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'So should goes to both.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Should goes to both, and the customer gets one extra sentence '
            + 'about what you will do if it slips.' }
  ]
});

PBE7.scene('u6-6-2', {
  set: 'writingdesk',
  arr: 1,
  cast: {
    attar: { rig: 'm-50s-b', name: 'Mr Attar', voice: 'en-US-AndrewMultilingualNeural', shirt: '#4a5a74', shirt2: '#3a4a60',
      full: true, scale: 0.62, bottom: 30, at: [0.63, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.43, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'attar', cam: { shot: 'wide' },
      en: 'Your bank letter is clear. What does Mr Haddad have to do when he '
            + 'has read it?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Nothing. He has to know.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Then do not send it. ⚠ Nothing is not an action, and a reader '
            + 'who has to do nothing files the letter and remembers the tone and '
            + 'not the figure.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'He does have to do something. He has a cash forecast with our '
            + 'April receipt in it.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Then that is the letter. ⚠ You will need to move about 1.9 '
            + 'million from April into the first week of May. The 28 April '
            + 'instalment is unaffected. Two sentences, and he can do both of '
            + 'them without writing back.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And Ms Tannous?' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ What does she do?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'She re-plans. Her own customer has a date and she has to tell '
            + 'them, and she needs to know whether it is all three hundred and '
            + 'twenty or part.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Which is a question she will ask, so answer it before she asks. '
            + '⚠ That is what writing for the action means: the question the '
            + 'reader would have to ask is the thing the document is for.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the yard.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ The yard decides a Saturday. One decision, and it is theirs, and '
            + 'the letter is three lines: eleven days lost, three twenty due on '
            + 'the 2nd, and does the Saturday get us there.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So the three documents are completely different.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ The three documents are three different actions and one fact. ⚠ '
            + 'And the thing that tells you which register to use is not who the '
            + 'reader is — it is what they will be doing on Tuesday morning.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What about things somebody genuinely only needs to know?' },
    { who: 'attar', cam: { shot: 'close' },
      en: '⚠ Then write for information and write it at the top, so they know '
            + 'it is not a request. ⚠ What you must never do is write a letter '
            + 'that looks like a request and contains none — because then a '
            + 'careful reader spends twenty minutes working out what you want.' }
  ]
});

PBE7.scene('u6-6-2-pair', {
  set: 'writingdesk',
  arr: 1,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.63, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.43, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: '(reading A\'s letter as a busy reader) So you want me to approve something.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'No.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then you want me to tell somebody.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'No. You just need to know.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It does not read like that. It has three paragraphs and a date in '
            + 'it and it ends I would be grateful for your thoughts.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That is politeness.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It is a request with no object. I have now spent four minutes '
            + 'working out what you want and I still do not know.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'So what do I do?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Either find the request, or put for information: no reply needed '
            + 'at the top and take out the last line.' }
  ]
});

PBE7.scene('u6-6-3', {
  set: 'writingdesk',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.43, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The yard letter has the bearing and the Homs part in it. Ms '
            + 'Tannous does not need either.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ She does not, and nobody will mind. What is in all three?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The two weeks.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ Say it as three things, because it is three. ⚠ A figure, a date '
            + 'and a consequence. Three hundred and twenty cartons. The second of '
            + 'May. And what it means for the person reading.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And those three are in all of them.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ Those three are the core, and the core never changes. Everything '
            + 'else is a dial.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What can always go?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ Cause, in the detail. ⚠ A bearing is cause. Homs is cause. '
            + 'Nobody outside the yard does anything with a cause — they do '
            + 'something with a figure, a date and a consequence.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Customers always want to know why.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ Customers want to know that there is a why and that it is not '
            + 'carelessness. ⚠ Our plater was out of action for eleven days does '
            + 'that in nine words. ⚠ A press bearing failed on 2 April and the '
            + 'replacement came from Homs does not do it any better and invites a '
            + 'conversation about Aleppo.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the test, for the things I am not sure about?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ One question: if they found this out from somebody else, would '
            + 'they feel they had been kept in the dark? ⚠ If yes, it is core, '
            + 'whatever dial it looks like.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then the Saturday is core for Ms Tannous.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ Why?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Because if we work a Saturday to make her date and she hears it '
            + 'from Abu Yasser at a trade fair, she will think we nearly did not '
            + 'tell her. ⚠ And if we do not work it, and she hears we could have, '
            + 'that is worse.' },
    { who: 'hala', cam: { shot: 'close' },
      en: '⚠ Then it goes in her letter in one clause, and you have just '
            + 'found the thing the test is for.' }
  ]
});

PBE7.scene('u6-6-3-pair', {
  set: 'writingdesk',
  arr: 2,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.43, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'Item one: that we are paying four nights of overtime. If she found '
            + 'that out from somebody else, would she feel kept in the dark?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'She would not mind at all. It is in her favour.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'That is not the question.' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…She would wonder why I had not mentioned it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And what would she conclude?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That I tell her what suits me. Which is the opposite of what the '
            + 'letter is for.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So it is core. Item two: the drive coupling.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Nobody will ever mention a coupling to her.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Then it is out, and it is out because it is undiscoverable, not '
            + 'because it is unimportant.' }
  ]
});

PBE7.scene('u6-6-4', {
  set: 'writingdesk',
  arr: 0,
  cast: {
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.63, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'bassel', cam: { shot: 'wide' },
      en: 'Read me the delivery sentence from each of the three.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The order will reach you on 2 May. Delivery is expected in the '
            + 'first week of May. And for the yard: out by the end of the month.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ Those are three different promises.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'They are the same date.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ The 2nd of May is a day. The first week of May is five days. The '
            + 'end of the month is April. ⚠ You have written three dates and you '
            + 'believe you have written one.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The yard one is about dispatch and the others are about arrival.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ Then say dispatch, and say arrival, and give both in all three. '
            + '⚠ Because the day Ms Tannous and Mr Haddad are in the same room, '
            + 'one of them has a Monday and one of them has a week.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So I write it once and copy it.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ You write it once, and you copy it, and you do not improve it on '
            + 'the way. ⚠ That is the hard part: a writer rewriting the same '
            + 'sentence for a different reader cannot help making it fit the '
            + 'register — and the register is the three dials, and this sentence '
            + 'is not one of them. ⚠ So what is the sentence?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Three hundred and twenty cartons leave here on 30 April and reach '
            + 'Beirut on 2 May.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ Then that is the sentence, word for word, in all three '
            + 'documents, and the rest of each letter can be as different as you '
            + 'like.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It will read oddly in the yard note. It is too formal.' },
    { who: 'bassel', cam: { shot: 'close' },
      en: '⚠ It will read oddly to you. ⚠ The yard will read it as a date, '
            + 'which is what it is — and in eighteen months, when somebody puts '
            + 'the three documents side by side, that sentence is the only reason '
            + 'nobody is embarrassed.' }
  ]
});

PBE7.scene('u6-6-4-pair', {
  set: 'writingdesk',
  arr: 0,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.63, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'Read me the sentence from the owner\'s copy.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'One hundred and forty frames leave here on 30 April and reach the '
            + 'Homs site on 2 May.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And from the customer\'s.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'One hundred and forty frames leave here on 30 April and should '
            + 'reach the Homs site on 2 May.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'You have added a word.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It is more honest. The lorry is not ours.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It is more honest, and now the owner has a certainty and the '
            + 'customer has a hedge, and you have done exactly what the cycle is '
            + 'about.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'So I take it out.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'You put it in all four, or you take it out of all four. Which is true?' },
    { who: 'a', cam: { shot: 'close' },
      en: 'Should. The lorry is not ours in any of the four.' }
  ]
});

PBE7.scene('u6-6-5', {
  set: 'writingdesk',
  arr: 1,
  cast: {
    attar: { rig: 'm-50s-b', name: 'Mr Attar', voice: 'en-US-AndrewMultilingualNeural', shirt: '#4a5a74', shirt2: '#3a4a60',
      full: true, scale: 0.62, bottom: 30, at: [0.63, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.43, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'attar', cam: { shot: 'wide' },
      en: 'Mr Dallal and Mr Haddad will both be at the trade fair in '
            + 'September. Had you thought about that?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'They do not know each other.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Mr Haddad banks four of the six Syrian firms exhibiting and Mr '
            + 'Dallal buys from three of them. ⚠ They will know each other by the '
            + 'second morning.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And what will they compare?' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Not your letters. Nobody carries letters to a trade fair. ⚠ They '
            + 'will compare two sentences each of them remembers, and the '
            + 'remembered sentence is always a number and a date.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So the numbers have to agree.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ The numbers have to be the same numbers. Which 6.4 does. ⚠ And '
            + 'there is a second thing, which 6.4 does not do.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Which is?' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Each of them has to know that you wrote to the other. ⚠ As I '
            + 'wrote to Ms Tannous on the 16th. Six words in the bank letter.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Why does the bank care who else I wrote to?' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ He does not care now. He cares in September. ⚠ A man who learns '
            + 'at a trade fair that you also wrote to the buyer feels managed; a '
            + 'man who already knew feels informed. Same fact, two different '
            + 'readings of you, and the difference is six words written in April.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if the two letters do say different things?' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Then the cross-reference is the worst thing you could have '
            + 'written, because it points at the discrepancy. ⚠ Which is why the '
            + 'cross-reference goes in last, after the sentence is identical — '
            + 'and if you cannot make them identical, do not write the '
            + 'cross-reference and do not send the letters either.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is a strong rule.' },
    { who: 'attar', cam: { shot: 'close' },
      en: '⚠ It is the only one in this unit I would call a rule. Two '
            + 'documents about one fact that cannot carry a cross-reference to '
            + 'each other are two documents that should not both exist.' }
  ]
});

PBE7.scene('u6-6-5-pair', {
  set: 'writingdesk',
  arr: 1,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.63, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.43, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'Write the cross-reference for the owner\'s letter.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'As I have told the customer.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Now read both letters with that in.' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…The owner\'s says the frames go out on the 30th. The customer\'s '
            + 'says delivery is expected at the end of the month.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So the cross-reference tells him to go and look at a letter that '
            + 'says something different.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I take it out.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Or?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Or I make the sentences the same, and then it is safe.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And if you cannot make them the same?' },
    { who: 'a', cam: { shot: 'close' },
      en: 'Then one of them is wrong and neither should go.' }
  ]
});

PBE7.scene('u6-6-6', {
  set: 'writingdesk',
  arr: 2,
  cast: {
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.43, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nadia', cam: { shot: 'wide' },
      en: 'How long did the three letters take you?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Three days. I wrote the bank one on Tuesday, Ms Tannous on '
            + 'Wednesday and the yard on Thursday morning.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Which is why the sentence was different in all three. ⚠ On '
            + 'Wednesday you could not remember Tuesday\'s wording and you did '
            + 'not look, because you thought you were writing a different letter.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I was writing a different letter.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ You were writing three documents about one fact, which is one '
            + 'job. ⚠ Split it over three days and you do the job three times and '
            + 'get three answers.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So in one sitting. In what order?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Four steps and they are not negotiable. ⚠ One: the sentence, '
            + 'written once, with the quantity and the dates in it. ⚠ Two: the '
            + 'three cores — the figure, the date and the consequence for each '
            + 'reader. ⚠ Three: the dials — formality, distance, detail, and '
            + 'hedging left where the truth is. ⚠ Four: the cross-references, '
            + 'last.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And how long?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Forty minutes, after the first time. Fifteen on the sentence, '
            + 'because the sentence is the work. Five on each core. Ten on the '
            + 'dials. Five on the cross-references.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The sentence took me three attempts and an hour.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ It took an hour because you wrote it fourth instead of first. ⚠ '
            + 'You extracted it from three drafts, which is a compromise between '
            + 'them. Written first, it is a commitment the three are built on, '
            + 'and it takes fifteen minutes.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the last five minutes?' },
    { who: 'nadia', cam: { shot: 'close' },
      en: '⚠ Read all three aloud, one after the other, in one go. ⚠ A '
            + 'discrepancy is audible in four seconds and invisible on a desk. '
            + 'That is the whole check, and it is the only one that works.' }
  ]
});

PBE7.scene('u6-6-6-pair', {
  set: 'writingdesk',
  arr: 2,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.43, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'How long did the sentence take?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'An hour, and four attempts.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'What did each attempt add?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The second added the arrival date. The third added the quantity. '
            + 'The fourth added should.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Did you have the quantity before you started?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It is on the order. Yes.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And the arrival date?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Two days from dispatch. I have known that for nine years.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So nothing you added in four attempts was a fact you had to find.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'No. It was all noticing.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Then written first it is one attempt, because what you were doing '
            + 'for an hour was discovering your own sentence by writing three '
            + 'letters round it.' }
  ]
});

PBE7.scene('u6-6-7', {
  set: 'writingdesk',
  arr: 0,
  cast: {
    haddad: { rig: 'm-50s-a', name: 'Mr Haddad', voice: 'en-HK-SamNeural', shirt: '#5d5342', shirt2: '#4a4235',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.63, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'haddad', cam: { shot: 'wide' },
      en: 'Your letter of the 16th. I should tell you that I did not read it first.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Who did?' },
    { who: 'haddad', cam: { shot: 'mid' },
      en: '⚠ The credit committee. Anything that moves a receipt by more than '
            + 'a month goes to them before it comes to me. ⚠ I have never told '
            + 'you that, and there is no reason you would know.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then I wrote it for the wrong reader.' },
    { who: 'haddad', cam: { shot: 'mid' },
      en: '⚠ You wrote it for me and it survived them, which is luck and is '
            + 'also three things you did. ⚠ The quantity was in it. The two dates '
            + 'were in it. And the instalment sentence was in the first three '
            + 'lines.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What did they want that you would not have?' },
    { who: 'haddad', cam: { shot: 'mid' },
      en: '⚠ They wanted to know who else had been told. ⚠ A committee '
            + 'reading one letter about a delay always asks whether the customer '
            + 'knows, because a supplier who tells a bank before a customer is a '
            + 'supplier in trouble.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'As I wrote to Ms Tannous on the 16th.' },
    { who: 'haddad', cam: { shot: 'mid' },
      en: '⚠ Six words, and they are the reason this did not come back to you '
            + 'as a list of questions. ⚠ I would not have needed them. They did.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I nearly left them out. They felt like showing off.' },
    { who: 'haddad', cam: { shot: 'mid' },
      en: '⚠ They are the only sentence in the letter written for a reader '
            + 'you did not know existed, and you wrote it for a trade fair in '
            + 'September.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'How many of your customers write for the committee?' },
    { who: 'haddad', cam: { shot: 'mid' },
      en: '⚠ None of them, because none of them knows about it. ⚠ Which means '
            + 'the letters that survive it survive by accident. Yours survived '
            + 'because you wrote for a comparison, and a committee is a '
            + 'comparison with four people in it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Should I write differently now that I know?' },
    { who: 'haddad', cam: { shot: 'close' },
      en: '⚠ No. Write the same way and put the quantity, both dates and the '
            + 'instalment in the first three lines every time. ⚠ A document that '
            + 'survives a reader you have never met is a document written for '
            + 'what readers do, and not for who they are — which I believe is '
            + 'something you were told in a classroom.' }
  ]
});

PBE7.scene('u6-6-7-pair', {
  set: 'writingdesk',
  arr: 0,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.63, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'I did not read your letter first.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Oh — I hope it was all right?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It was fine.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '(nothing further)' },
    { who: 'a', cam: { shot: 'mid' },
      en: '(again, differently) Who did?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'The quantity surveyor. He sees anything that moves a date before I do.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And what did he want that you would not have?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Whether your fitting subcontractor knew. A date that moves without '
            + 'the fitters knowing is a date that moves twice.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That is in the letter. As I have told your fitting contractor.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Which is why it came back to me signed instead of as a question.' }
  ]
});

PBE7.scene('u6-6-7-b', {
  set: 'writingdesk',
  arr: 0,
  cast: {
    haddad: { rig: 'm-50s-a', name: 'Mr Haddad', voice: 'en-HK-SamNeural', shirt: '#5d5342', shirt2: '#4a4235',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.63, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'haddad', cam: { shot: 'wide' },
      en: 'Your letter of the 16th. ⚠ I did not read it first.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Who did?' },
    { who: 'haddad', cam: { shot: 'mid' },
      en: '⚠ The credit committee. ⚠ Anything that moves a receipt by more '
            + 'than a month goes to them before it comes to me. I have never told '
            + 'you that, and there is no reason you would know.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What did they want that you would not have?' },
    { who: 'haddad', cam: { shot: 'mid' },
      en: '⚠ They wanted to know who else had been told. ⚠ A committee '
            + 'reading one letter about a delay always asks whether the customer '
            + 'knows, because a supplier who tells a bank before a customer is a '
            + 'supplier in trouble.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'As I wrote to Ms Tannous on the 16th.' },
    { who: 'haddad', cam: { shot: 'mid' },
      en: '⚠ Six words, and they are the reason it did not come back to you '
            + 'as a list of questions. ⚠ I would not have needed them. They did.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I nearly left them out. They felt like showing off.' },
    { who: 'haddad', cam: { shot: 'mid' },
      en: '⚠ They are the only sentence in the letter written for a reader '
            + 'you did not know existed — ⚠ and you wrote it for a trade fair in '
            + 'September.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Should I write differently now that I know?' },
    { who: 'haddad', cam: { shot: 'close' },
      en: '⚠ No. Put the quantity, both dates and the instalment in the first '
            + 'three lines every time. ⚠ A document that survives a reader you '
            + 'have never met is a document written for what readers do and not '
            + 'for who they are.' }
  ]
});
