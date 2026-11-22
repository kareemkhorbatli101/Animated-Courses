/* Unit 2 — the acted dialogues. Every line is the book's own. */
PBE7.scene('u2-2-1', {
  set: 'fileroom',
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
      en: 'I have been told all my life that the passive is bad writing.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ You have been told that by people who read a lot of bad passive. '
            + '⚠ It is a tool and it has two uses, and they are opposites.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Give me both.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ The order was accepted on the 14th. Who accepted it?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Whoever was on the counter. It does not matter.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Exactly — and because it does not matter, naming them would be '
            + 'noise. ⚠ That passive clarifies: it puts the order and the date '
            + 'where the reader is looking. Now the other. ⚠ It was felt that the '
            + 'figures needed review.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Felt by whom?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Ask that out loud and you have found the fault. ⚠ Somebody has '
            + 'an opinion and has put it in a sentence with nobody in it, so that '
            + 'the opinion arrives with the authority of the building and the '
            + 'cost of nobody.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So the test is: who?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ The test is: ask who, and then ask what the space is doing. ⚠ '
            + 'Sometimes the space is empty because nothing goes there. Sometimes '
            + 'somebody is standing in it and has stepped back.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the nine cartons were found to be damp?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Found by whom?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…By me. I found them. On the 8th, and again on the 11th.' },
    { who: 'nadia', cam: { shot: 'close' },
      en: '⚠ Then you have taken yourself out of a sentence where you '
            + 'belonged, and left a hole the shape of a person — and a building '
            + 'reading that sentence will put somebody in the hole. ⚠ It will not '
            + 'put you in it, because you wrote it.' }
  ]
});

PBE7.scene('u2-2-1-pair', {
  set: 'fileroom',
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
      en: 'The nine cartons in the fourth store were found to be damp.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Who will the building put in that space?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Nobody. There is no name in it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Who racks the fourth store?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Abu Yasser. One man.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then the building has a name and you have supplied the shape for it.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That is not what I meant by the sentence.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It never is. Write it with the finder in it and read it back to me.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I counted the fourth store twice, on the 8th and the 11th, and '
            + 'found nine damp cartons in the north corner.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Now nobody is in the space, because there is no space.' }
  ]
});

PBE7.scene('u2-2-2', {
  set: 'fileroom',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The note says the Ghouta days were changed in March.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Changed by whom?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'By me. I moved them to Mondays and Wednesdays on 1 March.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Then your name goes in it, and not because of credit. ⚠ Because '
            + 'the two biggest customers on that run were annoyed for a '
            + 'fortnight, and somebody has been apologising for a change nobody '
            + 'could trace.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Abu Yasser has been apologising.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Abu Yasser has been apologising for your decision for ten '
            + 'months, and he has never once said whose it was, ⚠ because he does '
            + 'not know either.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So the rule is: name the actor when it was a decision.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ The rule is: name the actor when somebody else is otherwise '
            + 'carrying it. That is the first case and it is the big one. ⚠ The '
            + 'second is when a reader has to go and ask about it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Meaning?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ A sentence that says it was decided and nothing else is a '
            + 'sentence a reader cannot act on. He wants it changed back, or '
            + 'wants to understand it. ⚠ Who does he go to? He goes to whoever is '
            + 'nearest, and that is the warehouse again.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the middle form — it was decided by Mr Ayoub?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ That is for when the actor is owed and the sentence is not about '
            + 'them. ⚠ The 500,000 limit was set by me in 2019 — I am in it, and '
            + 'the limit is still the subject, which is where the reader is '
            + 'looking. It is the form nobody teaches and it does most of the '
            + 'work.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And it was decided on its own?' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: '⚠ For when the decision is the company\'s and the person is '
            + 'genuinely irrelevant — it was decided to close on the first Friday '
            + 'of the month. If you cannot say and nobody needs to know who, it '
            + 'is the wrong form.' }
  ]
});

PBE7.scene('u2-2-2-pair', {
  set: 'fileroom',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The note says the Ghouta days were changed in March.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Changed by whom?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'By me. On 1 March.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Is anybody else carrying it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Abu Yasser has been apologising for it for ten months.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Does he know whose it was?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…No. He has never asked and I have never said.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then the name goes in, and not for credit. Which distance?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The first. I moved the Ghouta run to Mondays and Wednesdays on 1 '
            + 'March. Because a reader who minds has to know where to go, and at '
            + 'the moment they go to the yard.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And can you say and nobody needs to know who?' },
    { who: 'a', cam: { shot: 'close' },
      en: 'No. Two customers need to know who, and one of them has been told '
            + 'by the wrong man for ten months.' }
  ]
});

PBE7.scene('u2-2-3', {
  set: 'fileroom',
  arr: 2,
  cast: {
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'hala', cam: { shot: 'wide' },
      en: 'Read me the first line of your covering note.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The delay in signing has created difficulties for the warehouse.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ Who did not sign, and when?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…We did not. Until the ninth of April.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ A verb has a who and a when inside it and a noun does not. ⚠ We '
            + 'did not sign until 9 April carries both. ⚠ The delay in signing '
            + 'carries neither, and it is one word shorter.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So nominalisation is a way of losing information cheaply.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ It is a way of losing the actor and the tense and keeping the '
            + 'event, which is sometimes exactly what you want. ⚠ It is the most '
            + 'useful thing in the language for a sentence that must name no one.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And what does it gain, besides the hiding?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ It lets you put an event in the subject of a sentence and do '
            + 'something to it. ⚠ The delay cost us nine days of yard space. You '
            + 'cannot say that with a verb without a long detour. That is a real '
            + 'gain and it is why the form exists.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then why is my line bad?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ Because has created difficulties for the warehouse is the second '
            + 'half of the same trick. ⚠ Difficulties for whom? Created by what? '
            + 'You have two nominalisations in nine words and the sentence is '
            + 'about nobody doing nothing to no one.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What would it be?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ We did not sign until 9 April. Abu Yasser has had nine hundred '
            + 'cartons in the yard since the 2nd and has moved them twice. ⚠ Two '
            + 'sentences, twenty words, and now there is a man, a figure and a '
            + 'date in it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And it is eleven words longer.' },
    { who: 'hala', cam: { shot: 'close' },
      en: '⚠ And the first version has been read twice and acted on never, '
            + 'and this one will be read once.' }
  ]
});

PBE7.scene('u2-2-3-pair', {
  set: 'fileroom',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The change to Mondays has halved the complaints.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'That is a nominalisation. Rebuild it with a verb.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'We changed the run to Mondays and the complaints halved.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And is that better?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…No. It is two things joined by and, and it does not say the first '
            + 'caused the second.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Try again.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Because we changed the run to Mondays, the complaints have halved.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Longer, and it now argues for a cause it cannot prove. What does '
            + 'the noun version do?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It puts the change in the subject and lets it act. One event doing '
            + 'one thing.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'So the noun is correct here, and you can say why — which is the '
            + 'whole of this role card.' }
  ]
});

PBE7.scene('u2-2-4', {
  set: 'fileroom',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'rest' },
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Two faults this week. The plater sent us a hundred sheets at the '
            + 'wrong gauge, and Fadi mismarked three cartons on the night shift.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'And you are asking me which gets a name in it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Both are faults. It feels inconsistent to name one.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ Ask what the reader has to do, and the inconsistency disappears. '
            + '⚠ What does Mr Ayoub do about the plater?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Telephone him. Possibly stop using him.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ Then the name is the whole content of the sentence. The plater '
            + 'in Aleppo sent a hundred sheets at the wrong gauge on the 9th. ⚠ '
            + 'Without the name the sentence is unusable.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And Fadi?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ What does Mr Ayoub do about Fadi?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Nothing. He has never marked at night before and the codes are in '
            + 'a hand he cannot read in that light.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ Then his name is not content. It is decoration, and the '
            + 'decoration costs him something. ⚠ Three cartons were mismarked on '
            + 'the night of the 12th. The night codes are handwritten and the '
            + 'light at the second rack is one bulb. That is a fault with a '
            + 'remedy in it and no culprit.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if Mr Ayoub asks who?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ Then you tell him, and that is 2.6. ⚠ Leaving a name out of a '
            + 'page is not the same as refusing to say it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So what is the worst option?' },
    { who: 'bassel', cam: { shot: 'close' },
      en: '⚠ The worst is the one you have been doing for a month without '
            + 'noticing. ⚠ Naming nobody and writing it so that everybody knows '
            + 'who. Three cartons were mismarked on the night of the 12th by the '
            + 'new man on the second rack. ⚠ That is a name without the courtesy '
            + 'of being a name, and it is the only version of the three that is '
            + 'cowardly.' }
  ]
});

PBE7.scene('u2-2-4-pair', {
  set: 'fileroom',
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
      en: 'Three cartons were mismarked on the night of the 12th by the new '
            + 'man on the second rack.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Say his name out loud.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Fadi.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Now which is kinder on paper — Fadi or the new man on the second rack?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…The new man. Obviously.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'How many people in your building would know who the new man on the '
            + 'second rack is?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'All of them. There is one.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And if the page said Fadi, what could Fadi do?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Come and tell me the codes are handwritten and the light is one bulb.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And with the new man?' },
    { who: 'a', cam: { shot: 'close' },
      en: 'Nothing. He is not in it. He cannot see that he has been written '
            + 'about, and everybody else can.' }
  ]
});

PBE7.scene('u2-2-5', {
  set: 'fileroom',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' },
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'I have written that the second consignment was approved verbally.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Were you there?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'No. Abu Yasser says Mr Ayoub told him to release it.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Then you do not know that it was approved. You know that one man '
            + 'says so and there is nothing on the file. ⚠ Write what the file '
            + 'says, which is a different sentence.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The second consignment appears to have been approved verbally; '
            + 'there is no written approval on the file.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ That is exactly the claim the evidence supports and no more. And '
            + 'you have put the gap in the same sentence as the claim, which is '
            + 'what makes it honest.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What about was not approved? Could I write that?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ No, and the distinction is the whole cycle. ⚠ Was not approved '
            + 'is a finding about the world. ⚠ Is not recorded as approved is a '
            + 'finding about the file. You can make the second one from where you '
            + 'are sitting; you cannot make the first.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And people read them as the same thing.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Readers do, and that is the writer\'s problem and not the '
            + 'reader\'s. ⚠ A finding about a file dressed as a finding about the '
            + 'world is the commonest dishonest sentence in any office, and it is '
            + 'almost never written dishonestly on purpose.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I had also written it would appear that it may possibly have been '
            + 'approved informally.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Three hedges in eleven words. ⚠ A stacked hedge does not claim '
            + 'less — it claims nothing, and it tells a reader you are '
            + 'frightened. One hedge, exact, and then stop.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if the one hedge is still too much for the reader?' },
    { who: 'nadia', cam: { shot: 'close' },
      en: '⚠ Then he will ask, and you will say: there is nothing on the '
            + 'file, and Abu Yasser says he was told. ⚠ Which is the sentence you '
            + 'should have started from.' }
  ]
});

PBE7.scene('u2-2-5-pair', {
  set: 'fileroom',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'It would appear that the overtime may possibly have been approved '
            + 'informally.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Count the hedges.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Would appear … may … possibly … informally. Four.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'In eleven words. What are you frightened of?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…That Mr Attar will say he never approved it and I will have '
            + 'written that he did.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then say that, and nothing else. What does the file hold?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Nothing. Hala says he agreed in the meeting of the 14th.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So: is not recorded as approved; Hala states that Mr Attar agreed '
            + 'to it in the meeting of the 14th.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That is more exposed than what I wrote.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'It is more exact. What you wrote protected you from Mr Attar and '
            + 'told your reader nothing, and your reader is also Mr Attar.' }
  ]
});

PBE7.scene('u2-2-6', {
  set: 'fileroom',
  arr: 2,
  cast: {
    attar: { rig: 'm-50s-b', name: 'Mr Attar', voice: 'en-US-AndrewMultilingualNeural', shirt: '#4a5a74', shirt2: '#3a4a60',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'attar', cam: { shot: 'wide' },
      en: 'Your note says the second consignment appears to have been '
            + 'approved verbally. Who approved it?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Abu Yasser says Mr Ayoub told him on the yard. There is nothing written.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Then why does your note not say Mr Ayoub?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Because I was not there and the file is not. ⚠ If I write that '
            + 'Mr Ayoub approved it, that sentence is in the file for ever on the '
            + 'strength of one conversation I did not hear.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'And yet you have just told me.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ You asked, and you are entitled to it. ⚠ Leaving a name out of a '
            + 'page is not refusing to say it. The page is what is on the file. '
            + 'What I have just said is what I know.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Suppose I told you to put it in the note.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Then I would write Abu Yasser states that Mr Ayoub authorised '
            + 'the release on the yard on 14 January, and I would date the '
            + 'sentence. ⚠ What I would not write is Mr Ayoub approved it, '
            + 'because that is still not something I know.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'You have thought about this more than I expected.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I wrote the gauge paragraph four times.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Then I will tell you the thing you have not been told. ⚠ There '
            + 'is nothing on the file because there has never been a line on the '
            + 'release form for it. I asked for one in 2019 and was told it would '
            + 'slow the gate. ⚠ So the missing record is mine, from before you '
            + 'were here, and your paragraph has found it without naming anybody '
            + 'at all.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I did not know that.' },
    { who: 'attar', cam: { shot: 'close' },
      en: '⚠ Nobody did, because nobody ever wrote the absence down. Put a '
            + 'line on the form and put my name on the request.' }
  ]
});

PBE7.scene('u2-2-6-pair', {
  set: 'fileroom',
  arr: 2,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'Your note says the gauge is not recorded as checked. Who did not check it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I do not know. Nothing on the release form records a check, and '
            + 'there is no line for one.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'You could have asked the men on that shift.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I could. I would still only be able to write that they say they '
            + 'did or did not, which is a different sentence from whether they '
            + 'did.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And if I asked you to find out?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Then I would ask them, and I would write the three men on that '
            + 'shift state that no gauge check was made, with the date I asked '
            + 'them.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then I will tell you something. There has never been a line on '
            + 'that form for it. I asked for one in 2019 and was told it would '
            + 'slow the gate.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I did not know that.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Nobody did, because nobody ever wrote the absence down. Put a line '
            + 'on the form and put my name on the request.' }
  ]
});

PBE7.scene('u2-2-7', {
  set: 'fileroom',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'rest' },
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Abu Yasser, I wrote a sentence in January that I need to tell you about.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'The nine cartons.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…You know.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ I have known for three weeks. ⚠ I heard it from Jaber\'s driver, '
            + 'who had it from somebody in the office. Nine cartons were found '
            + 'damp in the fourth store. In my store.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It does not say your name.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ It does not need to. ⚠ There is one man who racks that store and '
            + 'everybody knows which one. A sentence with no name in it about a '
            + 'place with one man in it is a sentence with his name in it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And you said nothing for three weeks.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ Who do I say it to? The page is yours and I am not in it. ⚠ '
            + 'There is nothing to answer. If it had said Abu Yasser left nine '
            + 'cartons under a leak, I would have been at your desk the same '
            + 'morning with the store book.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is the part I had not understood.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ A sentence with a name in it can be argued with. A sentence with '
            + 'a hole in it cannot. ⚠ The worst part is not being blamed. It is '
            + 'being blamed by a page you cannot reply to.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I found them myself. On the eighth and again on the eleventh. And '
            + 'the store has been overflow since June because I arranged it, and '
            + 'the roof above that corner has never been on anybody\'s inspection '
            + 'list, and that list is mine.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ Then write that, and send it to the people who read the first one.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is four sentences longer.' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: '⚠ It is three weeks late. ⚠ Four sentences is nothing.' }
  ]
});

PBE7.scene('u2-2-7-pair', {
  set: 'fileroom',
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
      en: 'I wrote something in December that was read as being about you.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'The late collections.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'You knew.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'There is one driver on that run. Collections were late on four '
            + 'occasions in November is a sentence about me with my name taken '
            + 'out.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And you said nothing.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'To whom? I am not in it. If it had said my name I would have '
            + 'brought you the gate book, because two of the four were the '
            + 'customer\'s gate being locked and one was the bridge.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That is three of the four.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Yes. And nobody asked, because there was nobody to ask about.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Who else read it?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Mr Attar read it out in the December meeting. That is how it '
            + 'reached the yard.' }
  ]
});

PBE7.scene('u2-2-7-b', {
  set: 'fileroom',
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
      en: 'The sentence was nine cartons in the fourth store were found to be '
            + 'damp. There is no name in it.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'And Abu Yasser read it as being about him.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Everybody read it as being about him. ⚠ One man racks that '
            + 'store. A sentence with no name in it about a place with one man in '
            + 'it is a sentence with his name in it.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'How did he hear? It went to Mr Ayoub and to Mr Attar.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ From Jaber\'s driver, who had it from somebody in the office. ⚠ '
            + 'Three weeks ago.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'And he has said nothing for three weeks.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Because there was nothing to answer. He is not in the sentence, '
            + 'so he could not reply to it. ⚠ He told me that if it had said Abu '
            + 'Yasser left nine cartons under a leak he would have been at my '
            + 'desk the same morning with the store book.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'So what are you sending?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ The version with the facts in it: that I found them myself on '
            + 'the 8th and the 11th, that the store has been overflow since June '
            + 'because I arranged it, and that the roof above that corner is not '
            + 'on any inspection list, and the list is mine.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'To him?' },
    { who: 'nour', cam: { shot: 'close' },
      en: '⚠ To everybody who read the first one. Sending it only to him '
            + 'would be an apology, and an apology is not a correction.' }
  ]
});
