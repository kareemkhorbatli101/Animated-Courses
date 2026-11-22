/* Unit 11 — the acted dialogues. Every line is the book's own. */
PBE7.scene('u11-11-1', {
  set: 'callroom',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'I know what I have to tell Ms Tannous. I do not need to write it down.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ Then say it to me now, as you will say it to her.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'There appears to have been a pattern, going back, which '
            + 'unfortunately we may not have picked up as early as we might have.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ Thirty words, and I cannot tell from them whether anything '
            + 'happened. ⚠ A sentence you have not written is a sentence you will '
            + 'soften while you are saying it — and you will not notice, because '
            + 'softening is what a mouth does under pressure.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then: it has happened three times.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ Better. Write the whole thing and then take things out, in this '
            + 'order. ⚠ First appears. Second may. Third unfortunately.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Why in that order?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ Because appears and may change the meaning and unfortunately '
            + 'only changes the tone. ⚠ There appears to have been says we are '
            + 'not sure, and we are sure: three dates, three receiving notes. ⚠ '
            + 'May not have picked up says perhaps we did — and we did not.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And unfortunately is harmless?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ It is harmless and it is doing nothing. ⚠ It tells her that we '
            + 'regret it, which she will assume anyway, and it uses a word at the '
            + 'front of a sentence where she is waiting for a fact. Take it out '
            + 'and put it somewhere it can carry a date — which is 11.6.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So the sentence is: it has happened three times, all three to you, '
            + 'and we did not connect them.' },
    { who: 'hala', cam: { shot: 'close' },
      en: '⚠ Nineteen words. Read it twice and then stop reading it, because '
            + 'the fourth time you read a sentence like that you start improving '
            + 'it.' }
  ]
});

PBE7.scene('u11-11-1-pair', {
  set: 'callroom',
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
      en: 'It has happened three times, all three to you, and we did not connect them.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Again.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It has happened three times, all three to you, and we did not connect them.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Again.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It has happened three times, all three to you, and we did not '
            + 'connect them at the time.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Stop. You added two words.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Did I?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'At the time. Which says we have connected them now, which is true, '
            + 'and which also says we could not have then, which is not.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I did not decide to add it.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Nobody does. It arrives on the fourth reading, and that is why the '
            + 'instruction is to read it twice and stop.' }
  ]
});

PBE7.scene('u11-11-2', {
  set: 'callroom',
  arr: 1,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'Before you tell her anything, tell me what it costs.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Thirty-three cartons over two years. At 1,450 a carton that is '
            + '47,850, and she will ask for it and she is entitled to it.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ That is a number and it is the small one. What else?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The April order. Three hundred and twenty cartons, which has '
            + 'already moved once.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ She may hold it. Put a figure on that too, even a rough one.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Four hundred and sixty-four thousand of turnover, at 1,450 a carton.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ So about half a million of turnover at risk, and the 47,850 is '
            + 'certain and is ours to pay. ⚠ Now the other side. What does not '
            + 'telling her cost?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Nothing, today.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ And on the day she finds out from somebody else?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…She finds out from Beirut, from her own storeman, who has the '
            + 'three receiving notes.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ He has had them all along. ⚠ So the question is not whether she '
            + 'finds out, it is whether she finds out from us or from her own '
            + 'files — and the second one is not a number.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is the agreement.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: '⚠ It is the agreement, which runs twelve months from 1 May, and it '
            + 'is nineteen years of her taking our word for a count she does not '
            + 'check. ⚠ Write the number down and write the thing that is not a '
            + 'number next to it — and do not pretend the second one is bigger '
            + 'than it is, and do not pretend it is a number.' }
  ]
});

PBE7.scene('u11-11-2-pair', {
  set: 'callroom',
  arr: 1,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'What does not telling her cost?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Nothing. She has not noticed.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Who else has the receiving notes?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Her own storeman. All three of them.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Since when?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The third since March. The first two since 2024.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So what is the thing you are choosing between?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Not whether she finds out. Whether she finds out from us or from '
            + 'her own files.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Say that again and notice that it is a different question.' },
    { who: 'a', cam: { shot: 'close' },
      en: 'It is a different question, and it has a different answer.' }
  ]
});

PBE7.scene('u11-11-3', {
  set: 'callroom',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'I will tell her storeman first. He has the notes and he will '
            + 'understand it in a minute.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ And then Ms Tannous is the second person in her own company to '
            + 'know a thing about her own account.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'She would hear it the same afternoon.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ She would hear it the same afternoon from her own storeman, and '
            + 'for the rest of the agreement she would remember that she was the '
            + 'second to know. ⚠ The second person to know remembers it, and '
            + 'nothing you do afterwards changes the order.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So her first.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Her first, and the storeman the same day, and in that order, and '
            + 'not by letter. ⚠ A letter arrives at a desk she may not be at — '
            + 'and a thing like this read in a letter is a thing that was sent '
            + 'rather than said.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And how do I open it?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ There is something you need to know and I would rather you heard '
            + 'it from me. ⚠ Thirteen words, no permission asked, and the second '
            + 'half is the only part that is about you.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What about there is something I should probably mention at some point?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ That is three hedges and an escape route. ⚠ Should — so perhaps '
            + 'not. Probably — so perhaps not. At some point — so perhaps not '
            + 'today. And a listener hears all three and prepares to be told '
            + 'something small.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And then she is told something that is not small.' },
    { who: 'nadia', cam: { shot: 'close' },
      en: '⚠ Which is worse than not softening it, because you have moved her '
            + 'twice. ⚠ Once to this is small and once back. A sentence that '
            + 'costs you something is told at one size, which is its own.' }
  ]
});

PBE7.scene('u11-11-3-pair', {
  set: 'callroom',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'I will tell Fadi first. He drives the run and he will know in a '
            + 'second whether I have it right.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And then who is the second person to know that two of their '
            + 'customers were missed?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The customer. But she would hear within the hour.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'From whom?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…From Fadi, probably. He telephones them himself.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So she learns about her own delivery from your driver.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'When you put it like that.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And in six months, what will she remember about this?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That she was told by the driver.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'And nothing you do between now and then changes it.' }
  ]
});

PBE7.scene('u11-11-4', {
  set: 'callroom',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    sayegh: { rig: 'm-50s-b', name: 'Mr Sayegh', voice: 'en-AU-WilliamMultilingualNeural', shirt: '#4a5e74', shirt2: '#3a4a5c',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'And at the end I say that we hope it will not affect the April order.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Then you have sold her something in the same breath as telling '
            + 'her, and she will price it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I am not asking for anything. I am saying I hope.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ We hope this will not affect the April order is an ask with the '
            + 'verb taken out. ⚠ She hears: here is a bad thing, and here is what '
            + 'we want from you about it — and a thing you want is a thing she '
            + 'can withhold.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So I say nothing about the order.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ You say I am not asking for anything today, and then you say '
            + 'nothing about the order, and then you let the silence sit.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'How long?' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Until she speaks. And she will speak, and the first thing she '
            + 'says will be what she actually minds about — ⚠ which you cannot '
            + 'know in advance and will get wrong if you guess.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if she asks about the order herself?' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Then it is her question and the whole conversation is different. '
            + 'Answer it plainly, and do not offer anything she has not asked '
            + 'for.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What about the 47,850? Do I offer it?' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ You state it. That is not an offer, it is arithmetic she is '
            + 'entitled to — ⚠ and there is a difference between we owe you '
            + '47,850 and we would be prepared to credit you 47,850. The first is '
            + 'a fact; the second is a negotiation, and she did not open one.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the undertaking?' },
    { who: 'sayegh', cam: { shot: 'close' },
      en: '⚠ After she has spoken, not before. ⚠ An undertaking offered '
            + 'before she has said what she minds about is an undertaking about '
            + 'what YOU mind about — and 11.6 is where it belongs.' }
  ]
});

PBE7.scene('u11-11-4-pair', {
  set: 'callroom',
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
      en: 'Two deliveries were missed on Monday and both were yours. We owe '
            + 'you a re-run and a credit of about 9,000. I am not asking for '
            + 'anything today.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Does your driver know which of my customers take Mondays only?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'He does. It is not written down anywhere.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'That is what I want fixed. The nine thousand is nothing.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I had expected you to ask about the credit.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'You would have. I have four shops and one of them is open on Mondays only.' }
  ]
});

PBE7.scene('u11-11-5', {
  set: 'callroom',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' },
    sayegh: { rig: 'm-50s-b', name: 'Mr Sayegh', voice: 'en-AU-WilliamMultilingualNeural', shirt: '#4a5e74', shirt2: '#3a4a5c',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'There are three things I know that would help her understand this, '
            + 'and none of them is about us.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Name them.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ That Mr Dallal has a claim about the same pallets. That the bank '
            + 'has asked us for three years of trading. And that her own storeman '
            + 'has had the three receiving notes since March.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ The first is Mr Dallal\'s, the second is the bank\'s and ours '
            + 'together, and the third is hers. ⚠ Which of the three may you tell '
            + 'her?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The third. It is her own company.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ And you will tell her the notes exist, because she needs to be '
            + 'able to check what you are saying. ⚠ You will not tell her that he '
            + 'has had them since March and said nothing — that is a thing '
            + 'between her and her own storeman and it is not ours to start.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the first two?' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Out. Entirely. ⚠ Not softened, not generalised, and above all '
            + 'not hinted at.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I was going to say that we have had the same question from another customer.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ That is the hint, and it is the worst of the three options. ⚠ '
            + 'She will ask who, and you will either tell her, which is the '
            + 'disclosure you decided against, or refuse, which is the disclosure '
            + 'with a refusal attached — and she now knows there is one and '
            + 'cannot be told.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So a hint is a disclosure.' },
    { who: 'sayegh', cam: { shot: 'close' },
      en: '⚠ A hint is the same disclosure with deniability attached, and the '
            + 'deniability is for you and not for her. ⚠ If a thing is not yours '
            + 'to say, there is no version of it that is yours to say — including '
            + 'the version that gestures at it and lets her do the work.' }
  ]
});

PBE7.scene('u11-11-5-pair', {
  set: 'callroom',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'I was going to say that we have had the same difficulty with '
            + 'another customer.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'If she asks who, what happens?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I say I would rather not say.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And then?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And then she knows there is one.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And that you will not tell her. What has she learned?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That it is not only her, which is what I wanted her to know.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And that we discuss our customers with each other, which is what '
            + 'you did not want her to know.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That is not what I meant.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'It is what the sentence does. A hint is the disclosure with the '
            + 'deniability kept for you, and she can see the deniability.' }
  ]
});

PBE7.scene('u11-11-6', {
  set: 'callroom',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'And then the undertaking. Counts will in future be made more carefully.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ That is an undertaking aimed at a man at two in the morning, and '
            + 'Unit 7 settled what happens to those. ⚠ It is also undatable, and '
            + 'an undertaking with no date is a sentence about intentions — and '
            + 'she knows that while you are saying it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then: from 1 July the gate sheet carries a column for a part pallet.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ A date and a thing. Better. Can you keep it?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The sheets are printed in Damascus and take about two weeks. Yes.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ Then three parts. ⚠ What changes, with a date. What you will '
            + 'send her, with a date. And what you will NOT do.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What I will not do?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ We are not changing the pallets. ⚠ She will assume we are, '
            + 'because it is the obvious answer, and in September she will ask '
            + 'why the pallets are still 1,150 — and then the undertaking we did '
            + 'keep is heard as the one we did not.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the sending.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ I will send you the first month\'s sheets on 1 August. ⚠ It is '
            + 'the only sentence in the whole conversation she can test, and it '
            + 'costs you one envelope. ⚠ An undertaking you can prove you kept is '
            + 'worth four you merely kept.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the apology?' },
    { who: 'hala', cam: { shot: 'close' },
      en: '⚠ Here, and nowhere earlier, and with a date attached to it. ⚠ I '
            + 'am sorry; it should have been found in August 2024, when it '
            + 'happened the second time. ⚠ An apology with a date in it is an '
            + 'admission of a specific failure. We regret the inconvenience is an '
            + 'apology for her feelings, and she did not report her feelings, she '
            + 'reported eleven cartons.' }
  ]
});

PBE7.scene('u11-11-6-pair', {
  set: 'callroom',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'From 1 July the run sheet carries the two Monday customers by '
            + 'name, and I will send you the July sheet on 1 August.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Good. So the run goes back to including Mondays for me?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'No — the run days are not changing.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'You did not say that.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I did not think I had to. The list was the problem.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'The list was your problem. My problem is that my Monday shop gets '
            + 'goods on Wednesday.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'So I have to say what we are not doing.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'You have to say it now, while I am in front of you, and not in '
            + 'September when I ask why nothing has changed.' }
  ]
});

PBE7.scene('u11-11-7', {
  set: 'callroom',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    tannous: { rig: 'f-50s-a', name: 'Ms Tannous', voice: 'en-US-EmmaMultilingualNeural', shirt: '#7c4f63', shirt2: '#633e4f',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: '⚠ It has happened three times: March 2024, August 2024 and March '
            + 'this year, all three to you, and we did not connect them. ⚠ '
            + 'Thirty-three cartons. At 1,450 that is 47,850, which we owe you. ⚠ '
            + 'I am not asking for anything today.' },
    { who: 'tannous', cam: { shot: 'mid' },
      en: '⚠ Who in my office knew?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Your storeman has the three receiving notes. They are in your '
            + 'own files and you can check everything I have said against them.' },
    { who: 'tannous', cam: { shot: 'mid' },
      en: '⚠ Since when?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ The third one since March. What he did with the first two I do '
            + 'not know and it is not mine to say.' },
    { who: 'tannous', cam: { shot: 'mid' },
      en: '⚠ That is the right answer and I will deal with it. ⚠ Now the '
            + 'money. I am not interested in the 47,850.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is owed.' },
    { who: 'tannous', cam: { shot: 'mid' },
      en: '⚠ It is owed and you have credited it and that is the end of it. ⚠ '
            + 'What I mind about is that I have been quoting your counts to my '
            + 'own customers for nineteen years — and three times I have passed '
            + 'on a figure that was wrong and apologised for it myself.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ I had not thought of that.' },
    { who: 'tannous', cam: { shot: 'mid' },
      en: '⚠ No. You thought I would mind about the cartons. ⚠ Send me the '
            + 'gate sheets, as you said, on the first of August. And send me a '
            + 'note I can give to the two customers who were short in March, in '
            + 'your name and not in mine.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the April order?' },
    { who: 'tannous', cam: { shot: 'close' },
      en: '⚠ You did not ask me about the April order and I am not going to '
            + 'raise it. ⚠ It is three hundred and twenty cartons on the second '
            + 'of May and it has not changed.' }
  ]
});

PBE7.scene('u11-11-7-pair', {
  set: 'callroom',
  arr: 0,
  cast: {
    lina: { rig: 'f-20s-b', name: 'Lina', voice: 'en-NZ-MollyNeural', shirt: '#8a5f7a', shirt2: '#6e4b61',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    hallak: { rig: 'm-20s-b', name: 'Mr Hallak', voice: 'en-KE-ChilembaNeural', shirt: '#4f6b55', shirt2: '#3e5543',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'lina', cam: { shot: 'wide' },
      en: 'Your Monday shop had no delivery on three Mondays. Two re-runs and '
            + '9,120, which we owe you. I am not asking for anything today.' },
    { who: 'hallak', cam: { shot: 'mid' },
      en: 'What did you tell the driver?' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'That the two Monday-only customers are not on any written list. '
            + 'What he has done about it since is between him and me.' },
    { who: 'hallak', cam: { shot: 'mid' },
      en: 'I do not want him blamed. He has been coming to me for nine years.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'He is not being blamed. The list is being written.' },
    { who: 'hallak', cam: { shot: 'close' },
      en: 'Then that is what I mind about — that it would have been him. Send '
            + 'me the July sheet with my name on it, and tell him I asked for it '
            + 'that way.' }
  ]
});

PBE7.scene('u11-11-7-b', {
  set: 'callroom',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    tannous: { rig: 'f-50s-a', name: 'Ms Tannous', voice: 'en-US-EmmaMultilingualNeural', shirt: '#7c4f63', shirt2: '#633e4f',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: '⚠ It has happened three times: March 2024, August 2024 and March '
            + 'this year, all three to you, and we did not connect them. ⚠ '
            + 'Thirty-three cartons, which at 1,450 is 47,850, and we owe it to '
            + 'you. ⚠ I am not asking for anything today.' },
    { who: 'tannous', cam: { shot: 'mid' },
      en: '⚠ Who in my office knew?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Your storeman has the three receiving notes, in your own files, '
            + 'and you can check everything I have said against them. ⚠ The third '
            + 'since March. What he did with the first two I do not know and it '
            + 'is not mine to say.' },
    { who: 'tannous', cam: { shot: 'mid' },
      en: '⚠ That is the right answer and I will deal with it. ⚠ I am not '
            + 'interested in the 47,850 — you have credited it and that is the '
            + 'end of it. ⚠ What I mind about is that I have been quoting your '
            + 'counts to my own customers for nineteen years, and three times I '
            + 'have passed on a figure that was wrong and apologised for it '
            + 'myself.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ I had not thought of that.' },
    { who: 'tannous', cam: { shot: 'close' },
      en: '⚠ No. You thought I would mind about the cartons. ⚠ Send me the '
            + 'gate sheets on the first of August, as you said. ⚠ And send me a '
            + 'note I can give to the two customers who were short in March, in '
            + 'your name and not in mine. ⚠ You did not ask me about the April '
            + 'order and I am not going to raise it — three hundred and twenty '
            + 'cartons on the second of May, unchanged.' }
  ]
});
