/* Unit 7 — the acted dialogues. Every line is the book's own. */
PBE7.scene('u7-7-1', {
  set: 'incidentroom',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'rest' },
    attar: { rig: 'm-50s-b', name: 'Mr Attar', voice: 'en-US-AndrewMultilingualNeural', shirt: '#4a5a74', shirt2: '#3a4a60',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The cause was the pallets. They have been fifty millimetres narrow '
            + 'since 2023.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ That is a cause and it is not the one that put eleven cartons '
            + 'short on a Tuesday in March.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The count was hurried. The lorry came early.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Now you have both, and a paper needs both, and it needs them in '
            + 'that order. ⚠ The immediate cause first, because that is the one '
            + 'the reader was there for.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if I give only the pallets?' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Then you have written a paper about a decision taken two years '
            + 'ago and the reader thinks you are blaming history to avoid blaming '
            + 'Tuesday. ⚠ Which is what it is, even when it is true.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if I give only the hurry?' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Then you have written a paper about a man counting fast at two '
            + 'in the morning, and the remedy is do not hurry, which is not a '
            + 'remedy. ⚠ And the same eleven cartons go short again in June.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So the order matters.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ The order is the argument. ⚠ The immediate cause was a hurried '
            + 'count. The condition that made a hurried count produce exactly '
            + 'eleven cartons is that our pallets have been fifty millimetres '
            + 'narrow since 2023. The first sentence answers Tuesday and the '
            + 'second one answers June.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if I give only one, the reader supplies the other.' },
    { who: 'attar', cam: { shot: 'close' },
      en: '⚠ He supplies it and his is worse than yours. ⚠ A reader given a '
            + 'hurried count supplies carelessness; a reader given a pallet '
            + 'supplies evasion. Give him both and he supplies nothing.' }
  ]
});

PBE7.scene('u7-7-1-pair', {
  set: 'incidentroom',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'I have two causes and I do not know which is which. The plater was '
            + 'down, and nobody books the plater.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Which of them explains the amount?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The amount is eleven days late.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So which one explains eleven days?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…The plater being down explains that we were late. It does not '
            + 'explain eleven.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And nobody booking the plater?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That explains eleven, because we found out it was down on the day '
            + 'we needed it, and the queue in front of us was eleven days.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then that is the condition, and the plater is the immediate cause.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And the one that explains the amount is the one that will still be '
            + 'there in June.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'The plater will be repaired by June. Nobody booking it will not.' }
  ]
});

PBE7.scene('u7-7-2', {
  set: 'incidentroom',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'rest' },
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The chain is four links. The lorry was early, so the count was '
            + 'made on the apron, so the top layer was estimated, so eleven were '
            + 'short.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ Read it again and tell me which of the four you can prove.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The lorry was early — the gate sheet has the time on it. One in the morning.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ Evidenced. Next.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The count was made on the apron. …Nobody wrote that down. Abu '
            + 'Yasser says so.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ One man\'s account, which is not nothing and is not a document. Next.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The top layer was estimated. That is an inference. Nobody has said it.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ Assumed. And the fourth?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Eleven were short. The receiving note from Beirut, signed.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ So the chain runs: evidenced, one account, assumed, evidenced. ⚠ '
            + 'The two ends are solid and the middle is soft, which is the normal '
            + 'shape and nobody ever writes it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What happens if I do not mark them?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ A reader tests the chain at its weakest link and finds it '
            + 'himself, and then he distrusts the two ends as well. ⚠ Mark them '
            + 'and he tests the one you marked, which is the one that deserves '
            + 'testing.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'How do I mark them?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ In the sentence, not in a footnote. ⚠ The count was made on the '
            + 'apron — Abu Yasser\'s account; there is no record. Eight words, '
            + 'and the link is now honest and still in the chain.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It makes the paper look weaker.' },
    { who: 'bassel', cam: { shot: 'close' },
      en: '⚠ It makes the paper look like a paper. ⚠ Four links all stated '
            + 'flat is an assertion with connectives in it.' }
  ]
});

PBE7.scene('u7-7-2-pair', {
  set: 'incidentroom',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The chain is four links. The van was booked, the booking was '
            + 'confirmed, nobody rang again, and no van came.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'All four stated flat. Give me twenty seconds.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Go on.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'The second one. The booking was confirmed. Confirmed by whom, and '
            + 'where is it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Lina remembers telephoning. There is no note.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So that is the weak link and I found it without being told. Now '
            + 'the first one.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The booking slip, signed, dated the 9th.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And I believe it less than I did two minutes ago.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Why? It is a signed slip.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Because you read me four links in the same voice and one of them '
            + 'was air. I cannot now tell which of the other three you checked '
            + 'and which you assumed.' }
  ]
});

PBE7.scene('u7-7-3', {
  set: 'incidentroom',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'rest' },
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The pallet width was decided in 2023 and there is nothing in '
            + 'writing. Do I name Mr Jallad? He made the decision and he left in '
            + '2024.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ What do you know, and what do you believe?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ I know the width changed between February and April 2023, '
            + 'because the supplier\'s invoices give the dimension. I believe Mr '
            + 'Jallad agreed it, because he bought the pallets and nobody else '
            + 'could have.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ Then write the first and not the second. ⚠ The decision is a '
            + 'fact and the decision-maker is an inference, and Unit 2 is why '
            + 'that matters: a name in a paper outlives the paper, and he is not '
            + 'here to answer.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So the paper says a decision was taken and does not say by whom.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ The paper says what the documents say, and lists them. ⚠ The '
            + 'width changed between the February and the April 2023 deliveries. '
            + 'There is no order, note or minute. The change appears in the '
            + 'supplier\'s invoices of 3 April 2023 and in every invoice since.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is three sources for a thing that has no document.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ Which is the point. ⚠ A decision with no document is not an '
            + 'unknown; it is a thing you reconstruct from what the decision '
            + 'touched. Invoices. A dimension on a rack drawing. The date the '
            + 'complaints started.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the one thing I must not claim?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ That it was a mistake. ⚠ Fifty millimetres narrower is cheaper '
            + 'and it fits a lorry better, and for everything except our own '
            + 'racks it was a good decision. ⚠ A paper that calls it an error is '
            + 'a paper written by somebody who has only counted one side of it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then what is the finding?' },
    { who: 'hala', cam: { shot: 'close' },
      en: '⚠ That a decision which was right for the yard and wrong for the '
            + 'racks was taken by one man with no document, ⚠ and so nobody '
            + 'checked the second half. The finding is the absence, not the '
            + 'width.' }
  ]
});

PBE7.scene('u7-7-3-pair', {
  set: 'incidentroom',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'I want to write that the pallet decision was an error.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'What was good about it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Nothing. We have been eleven cartons short three times.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'What did it cost a pallet?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'About nine per cent less than the old ones.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'On how many pallets a year?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…About two thousand. So it has saved real money every year since 2023.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And the lorry?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'They fit one row better. Which is a load a month, roughly.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So the decision was right for the yard and wrong for the racks. '
            + 'Who checked the racks?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Nobody. There was no document, so there was nothing for anybody to check.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'That is your finding, and it costs a pen.' }
  ]
});

PBE7.scene('u7-7-4', {
  set: 'incidentroom',
  arr: 0,
  cast: {
    attar: { rig: 'm-50s-b', name: 'Mr Attar', voice: 'en-US-AndrewMultilingualNeural', shirt: '#4a5a74', shirt2: '#3a4a60',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'attar', cam: { shot: 'wide' },
      en: 'You have three remedies. Run each one backwards through March and '
            + 'tell me what survives.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'One: wider pallets. ⚠ Had we had 1,200 pallets in March, the top '
            + 'layer would have been full and the count would have been right. '
            + 'That one works.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Does it? The lorry still came at one. The count was still made '
            + 'on the apron.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…The count would have been right because there was nothing to estimate.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Good. That is a real answer and it survives. Two.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Two: a column on the gate sheet for a part pallet. ⚠ Had the sheet '
            + 'had a column in March, the night man would have had to write a '
            + 'figure in it. Which he would have estimated.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ So it does not survive.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ It survives for the second occurrence and not the first. It '
            + 'would not have prevented March and it would have made March '
            + 'visible in April, because the estimate would have been on paper.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Then say that, exactly as you have just said it. ⚠ A remedy that '
            + 'would not have prevented it and would have caught it is a good '
            + 'remedy and it is not the same remedy, and a paper that does not '
            + 'separate the two gets both rejected.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And three: do not count on the apron.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Run it backwards.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Had the rule existed in March, the night man would have had a '
            + 'lorry on the apron at one in the morning and a rule telling him to '
            + 'take it inside. ⚠ He would have counted on the apron and written '
            + 'nothing about it, because he always has, and there was no record '
            + 'of where a count is made.' },
    { who: 'attar', cam: { shot: 'close' },
      en: '⚠ So remedy three is a rule aimed at a man, and it fails the test, '
            + 'and you should write that it fails. ⚠ A root-cause paper that '
            + 'lists three remedies and tests none of them is a wish list with '
            + 'evidence at the front.' }
  ]
});

PBE7.scene('u7-7-4-pair', {
  set: 'incidentroom',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'My remedy is that the yard telephones the plater every Monday to '
            + 'check it is running.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It is Monday morning. Two lorries are loading and the office wants '
            + 'the Tannous order out. Who telephones?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Whoever is free.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Nobody is free on a Monday morning. Run it backwards through April.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Had the instruction existed in April… somebody would have '
            + 'telephoned for the first two or three weeks.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And then?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And then it would have gone the way of the tyre book. Nobody would '
            + 'have telephoned on the Monday before the coupling failed.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So it fails. What would have to be true for it to work?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It would have to not be a telephone call. The plater would have to tell us.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Which is a thing, not a resolution. Write that one instead.' }
  ]
});

PBE7.scene('u7-7-5', {
  set: 'incidentroom',
  arr: 1,
  cast: {
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nadia', cam: { shot: 'wide' },
      en: 'Mr Dallal\'s man will telephone and ask what caused it. What will you say?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That no single cause will carry it.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ And he will say yes, but what caused it, and you will say it '
            + 'again, and he will write down they would not say.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is the truth.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ It is the truth and it is not an answer, because he does not '
            + 'want a cause. ⚠ He wants one thing to say to somebody else. He has '
            + 'his own manager.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So I give him one thing.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ You give him the occasion, and you call it the occasion. ⚠ The '
            + 'lorry came three hours early, which is what set it off. Three '
            + 'other things made it possible and they are in the paper. Now he '
            + 'has one thing and it is true and it is labelled.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What is the difference between a contributor and an occasion?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ A contributor is a thing that was already there. An occasion is '
            + 'the thing that happened that day. ⚠ Narrow pallets, a gate sheet '
            + 'with no column, and no record of where counts are made — all three '
            + 'were there in February and nothing went short.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the early lorry is the only thing that was different.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Which is why it is the occasion, and why it is also the least '
            + 'interesting of the four. ⚠ Remove the lorry and the other three '
            + 'are still loaded. The next early lorry is in June.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So the paper refuses one cause and the telephone call gives one.' },
    { who: 'nadia', cam: { shot: 'close' },
      en: '⚠ The telephone call gives the occasion and says there are three '
            + 'contributors in the paper. ⚠ That is not two different answers. It '
            + 'is one answer at two lengths, and if he reads the paper afterwards '
            + 'nothing in it contradicts what you told him.' }
  ]
});

PBE7.scene('u7-7-5-pair', {
  set: 'incidentroom',
  arr: 1,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'What caused it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'No single cause will carry it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Yes, but what caused it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It is genuinely four things.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I am writing down that you would not say. I have to tell my '
            + 'manager something in ten minutes.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Then: the hire company sent no van on the Monday, which is what '
            + 'set it off. Three other things made it possible and they are in '
            + 'the paper.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Better. Which of the three was already there?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The run living in one man\'s head, no written list of the '
            + 'Monday-only customers, and a van booked by telephone with nothing '
            + 'in writing.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And all three were there in January?' },
    { who: 'a', cam: { shot: 'close' },
      en: 'All three, and the January runs were fine. The van is the only '
            + 'thing that was different.' }
  ]
});

PBE7.scene('u7-7-6', {
  set: 'incidentroom',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'rest' },
    attar: { rig: 'm-50s-b', name: 'Mr Attar', voice: 'en-US-AndrewMultilingualNeural', shirt: '#4a5a74', shirt2: '#3a4a60',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'I have footnoted the two links I cannot evidence.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Where does a reader meet a footnote?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'At the bottom.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ After he has already believed the sentence or disbelieved it. ⚠ '
            + 'A footnote cannot un-persuade. Put it in the sentence, where it '
            + 'arrives with the claim.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It breaks the sentence.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ It is meant to. ⚠ The count was made on the apron — Abu '
            + 'Yasser\'s account; there is no record of where a count is made. '
            + 'Eleven words in a dash, and the reader has the claim and its '
            + 'warrant together.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the conversation of 9 March?' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Tell me what you have.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Mr Jallad telephoned the pallet supplier on or about 9 March '
            + '2023 and agreed the narrower size. I have no minute, no note and '
            + 'no telephone record. What I have is an invoice dated the 3rd of '
            + 'April and a man who has left.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Then you do not have a conversation. You have an invoice and an '
            + 'inference. ⚠ Write the invoice and write the inference, and do not '
            + 'write the conversation at all — because a conversation you have '
            + 'invented to join two documents is the one thing in a root-cause '
            + 'paper that can be shown to be false.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So I lose the link.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ You lose a sentence and you keep the paper. ⚠ The chain runs '
            + 'from the February dimension to the April dimension, and what '
            + 'happened between them is not in your possession. Say that.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if somebody asks what happened between them?' },
    { who: 'attar', cam: { shot: 'close' },
      en: '⚠ Then you say a decision was taken and there is no record of how, '
            + '⚠ which is the finding anyway and is stronger than a conversation '
            + 'you cannot produce. The gap in the chain IS the finding. Stop '
            + 'trying to close it.' }
  ]
});

PBE7.scene('u7-7-6-pair', {
  set: 'incidentroom',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'I have written that the hire company agreed the Monday on the '
            + 'telephone on the 9th.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'What do you have?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'A booking slip dated the 9th, filed as confirmed.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And for the agreement?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Nothing. No note, no reply on the file, nothing in their letters.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So you have a slip and an inference, and you do not have a conversation.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Somebody must have telephoned. The slip says confirmed.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Who could prove you wrong?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Their own clerk. She would have a call log, and she still works there.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then delete it. Write that the slip was filed as confirmed and '
            + 'that there is no reply on the file.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Which is a weaker sentence.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'It is a sentence their clerk cannot contradict, and it is the '
            + 'finding anyway.' }
  ]
});

PBE7.scene('u7-7-7', {
  set: 'incidentroom',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'rest' },
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'I want to read you the chain before it goes. There are four links '
            + 'and you are in the second one.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Read it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The count was made on the apron, against the gate sheet, with the '
            + 'lorry waiting — Abu Yasser\'s account; there is no record of where '
            + 'a count is made.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ That is nineteen years of counts and the first paper that is not about me.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Say that again.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ There have been four of these. 2019, two in 2021, and one last '
            + 'August. ⚠ Every one of them said a count was hurried. Mine was the '
            + 'only name in any of them.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And this one?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ This one says there is no record of where a count is made. ⚠ '
            + 'Which is true and has been true since 1998 and is not my doing. I '
            + 'have asked three times for a line on the sheet.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Asked whom?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ Mr Jallad, twice, and the office once. Nothing in writing, '
            + 'because you do not write to a man you see at the gate every '
            + 'morning.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is the same gap as the pallets.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ It is the same man and the same gap. And I will tell you '
            + 'something about the pallets that is not in your paper. ⚠ They '
            + 'arrived in April 2023 and I put four of them against the rack and '
            + 'measured them, and I told him they were short.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'You measured them.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ With the yard rule, in April 2023, and I told him in the yard, '
            + 'and he said they were cheaper and they fit the lorry. ⚠ Which was '
            + 'true. And nobody wrote any of it down, including me.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So the second half of the decision was checked.' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: '⚠ It was checked in April 2023 by the man who racks the store, and '
            + 'the check is in nobody\'s writing, and your paper says nobody '
            + 'checked it. ⚠ Which is what a paper has to say, because there is '
            + 'no record. And it is wrong.' }
  ]
});

PBE7.scene('u7-7-7-pair', {
  set: 'incidentroom',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Link two is yours. The van was booked by telephone and the slip '
            + 'was filed as confirmed — the office\'s account; there is no reply '
            + 'on the file.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Read it again.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The van was booked by telephone and the slip was filed as '
            + 'confirmed — the office\'s account; there is no reply on the file.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'That is the third time the office has been the link in one of '
            + 'these. Who wrote the other two?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I do not know. They were before me.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then you do not know that the office has been told twice that this '
            + 'would happen.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Told by whom?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'By me, in November, and by Fadi in 2022. Neither of us wrote it '
            + 'down, because you do not write a memorandum to the person at the '
            + 'next desk.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'So the finding stands and the remedy is wrong.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'The remedy says make a list. What happened is that a list was '
            + 'asked for twice and not made. Those are different papers.' }
  ]
});

PBE7.scene('u7-7-7-b', {
  set: 'incidentroom',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'rest' },
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'I want to read you the chain before it goes. You are in the second link.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ That is nineteen years of counts and the first paper that is not about me.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Say that again.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ There have been four of these. 2019, two in 2021, and one last '
            + 'August. ⚠ Every one said a count was hurried. Mine was the only '
            + 'name in any of them.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And this one?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ This one says there is no record of where a count is made. Which '
            + 'is true and has been true since 1998 and is not my doing. ⚠ I have '
            + 'asked three times for a line on the sheet — Mr Jallad twice and '
            + 'the office once.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Nothing in writing?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ You do not write to a man you see at the gate every morning. And '
            + 'I will tell you something that is not in your paper. ⚠ The pallets '
            + 'arrived in April 2023 and I put four of them against the rack and '
            + 'measured them with the yard rule, and I told him they were short.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And he said?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'That they were cheaper and they fit the lorry. Which was true. ⚠ '
            + 'And nobody wrote any of it down, including me.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So the second half of the decision was checked.' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: '⚠ It was checked by the man who racks the store, and the check is '
            + 'in nobody\'s writing, and your paper says nobody checked it. ⚠ '
            + 'Which is what a paper has to say, because there is no record. And '
            + 'it is wrong.' }
  ]
});
