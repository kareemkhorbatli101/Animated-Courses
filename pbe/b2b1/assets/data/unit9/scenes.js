/* Unit 9 — the acted dialogues. Every line is the book's own. */
PBE7.scene('u9-9-1', {
  set: 'editdesk',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    sayegh: { rig: 'm-50s-b', name: 'Mr Sayegh', voice: 'en-AU-WilliamMultilingualNeural', shirt: '#4a5e74', shirt2: '#3a4a5c',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'They have made twelve changes. Most of them are better than what I wrote.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Then ask two questions of each one and the twelve sort '
            + 'themselves. ⚠ Does it alter what we are committed to? And does it '
            + 'alter only the rhythm?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Number four. They have put we shall notify for we will notify.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Rhythm. Accept it and do not mention it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Number six. They have put so far as we are aware in front of a '
            + 'sentence that said the count was made on the apron.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Stop. That is substance, and it is the whole paper. ⚠ We wrote '
            + 'it as a fact supported by one account. They have made it a fact '
            + 'about our state of knowledge.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is softer. I thought they were being kind.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ It is softer and it is weaker in a way that costs us. ⚠ So far '
            + 'as we are aware means we have not looked — and we looked in four '
            + 'files and named them. Unit 7 is why that sentence cannot go.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And they did it in six words inside a sentence about a count.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Which is how a change of substance is normally made. ⚠ Nobody '
            + 'argues about a comma, so a comma is where you put it. It was not '
            + 'necessarily deliberate — their office has a house phrase and it '
            + 'goes in front of everything.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So how do I answer?' },
    { who: 'sayegh', cam: { shot: 'close' },
      en: '⚠ Line by line, and in their order, not mine. ⚠ Accept five '
            + 'without comment. Reject three with one sentence each saying what '
            + 'the change would alter. And four of them do not arise, which is '
            + '9.4.' }
  ]
});

PBE7.scene('u9-9-1-pair', {
  set: 'editdesk',
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
      en: 'They have moved my second paragraph to the top and it is better there.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then accept it.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I will. I was going to add that my order worked too, because the '
            + 'chronology was deliberate.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Was it deliberate?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Yes. I put the dates first so the sequence was clear.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And is their version unclear?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'No. The dates are all still there.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So what does your extra sentence tell him?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That I thought about it.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'It tells him you minded. Those are not the same thing and only one '
            + 'of them is in the sentence.' }
  ]
});

PBE7.scene('u9-9-2', {
  set: 'editdesk',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' },
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Their page has four small mistakes. Two spellings, a date, and a '
            + 'figure in words that does not match the figure in digits.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ Then ask one question of each: does the author need to know he '
            + 'was wrong, or does it only need to be right?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The spellings only need to be right.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ Correct them and say nothing. ⚠ A spelling flagged is a point '
            + 'scored, and you are not scoring points off a man whose board reads '
            + 'this on Thursday.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The date says 28 February. The letter was 28 January.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ Flag it. ⚠ Not because he needs correcting but because a date is '
            + 'a fact somebody may rely on, and if I am wrong about which letter '
            + 'he meant, my silent correction has invented a letter.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the figure — eleven in words and 11 in digits, and they agree.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ Then nothing to correct. Look again at the one where they do not agree.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Twelve in words, 11 in digits.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ Flag it, and do not choose. ⚠ A figure where the words and the '
            + 'digits disagree is not a typing error, it is two different '
            + 'numbers, and the author knows which he meant and you do not.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So the rule is three things.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ Three always flagged: a date, a figure, and a name. ⚠ Everything '
            + 'else, ask whether he needs to know. And flag it in one line, in a '
            + 'list at the end, with no adjectives.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Why at the end?' },
    { who: 'hala', cam: { shot: 'close' },
      en: '⚠ Because four flags at the top of a reply is a reply about his '
            + 'mistakes. ⚠ The same four at the bottom under small points is '
            + 'housekeeping. The content is identical and the document is not.' }
  ]
});

PBE7.scene('u9-9-2-pair', {
  set: 'editdesk',
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
      en: 'Their page says twelve cartons in words and 11 in digits. The '
            + 'agreed figure is eleven, so I will make it eleven.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Why is eleven the agreed figure?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Because it is in their own letter of 20 February.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So the one number in this correspondence that is settled is eleven.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Yes. Which is why the correction is obvious.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It is why the correction is unavailable. If you make his twelve '
            + 'into eleven, you have decided on his behalf that his twelve was a '
            + 'slip.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It must be a slip.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Probably. And if it is not — if somebody in his office has twelve '
            + 'from somewhere — you have silently deleted the only sign of it.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'So I flag both and choose neither.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'In one line, at the end, with no adjective in it.' }
  ]
});

PBE7.scene('u9-9-3', {
  set: 'editdesk',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'I have rewritten six of their sentences. They are all better.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ Better by whose reading? Show me one.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Theirs: the delivery date was moved to 2 May. Mine: we agreed with '
            + 'Ms Tannous to move the delivery to 2 May.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ Yours is better and your author cannot see why. ⚠ He will read '
            + 'two versions of a sentence and conclude that you prefer your own '
            + 'prose.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'How do I show him why?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ Two parts, always. ⚠ What the line as it stands says, and then '
            + 'the suggestion. ⚠ The line as it stands reads as though the date '
            + 'moved by itself; we agreed it with the customer. Suggest: we '
            + 'agreed with Ms Tannous…' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is three times as long.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ It is three times as long and it is the only version he can act '
            + 'on — because now he can accept your sentence, or write a better '
            + 'one, or tell you that the date did move by itself and you are '
            + 'wrong.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if I have six of them?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ Then you have six, and that is fine, and they go in his order '
            + 'with his line numbers. ⚠ What you must not do is rewrite three '
            + 'sentences in a row.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Why not, if all three need it?' },
    { who: 'bassel', cam: { shot: 'close' },
      en: '⚠ Because three in a row is no longer a mark-up, it is a redraft '
            + 'of a paragraph — and a man reading a redraft of his paragraph '
            + 'stops reading your reasons. ⚠ Rewrite the worst of the three, '
            + 'annotate the other two, and say that the paragraph may need '
            + 'rebuilding once the first line is settled.' }
  ]
});

PBE7.scene('u9-9-3-pair', {
  set: 'editdesk',
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
      en: 'Theirs: the delivery date was moved to 2 May. Mine: we agreed with '
            + 'Ms Tannous to move the delivery to 2 May.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Yours is better and he cannot see why. What does his line say?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It says the date moved.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Moved by whom?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'By nobody. There is nobody in the sentence.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So write that down, in those words.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The line as it stands reads as though the date moved by itself.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And what is true?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'We agreed it with the customer on 18 April.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Now he has the problem, and he can fix it, or tell you the date '
            + 'did move by itself and you have the wrong file.' }
  ]
});

PBE7.scene('u9-9-4', {
  set: 'editdesk',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    sayegh: { rig: 'm-50s-b', name: 'Mr Sayegh', voice: 'en-AU-WilliamMultilingualNeural', shirt: '#4a5e74', shirt2: '#3a4a5c',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Four of the twelve I have not touched. I want to check I have the '
            + 'right four.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Read them.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Line 3, the figure. Eleven cartons, agreed in writing on 20 February.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Closed. An agreed figure is a fact two parties have signed off, '
            + 'and it does not acquire an about because somebody\'s house style '
            + 'prefers one.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Line 5. Eleven words quoted from our own letter of 28 January.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Closed, and the reason is sharper: a quotation that has been '
            + 'improved is not a quotation. ⚠ They have replaced it with as set '
            + 'out in correspondence, which is a summary — and a summary of your '
            + 'own undertaking is a weaker thing to be holding in September.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Line 8. Without prejudice in the heading, which they have deleted.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Closed, and that one is not even about writing. ⚠ It is a term '
            + 'of art: it means the letter cannot be put in front of a court as '
            + 'an admission, and it means that because those two words are there. '
            + 'Delete them and the protection goes with them.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It reads like nonsense to anybody who does not know.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ It does, and that is the cost, and the cost is worth paying. ⚠ A '
            + 'term of art is not an ornament — it is a short way of saying '
            + 'something that would otherwise take a paragraph and still be '
            + 'arguable.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And line 11. So far as the Company has been able to establish, '
            + 'which they have deleted.' },
    { who: 'sayegh', cam: { shot: 'close' },
      en: '⚠ Closed, and that is my own hedge and I spent forty minutes on '
            + 'the telephone in March getting it accepted. ⚠ It is nine words '
            + 'that limit what we are asserting to what we have looked for — '
            + 'which is the opposite of line 6\'s hedge, and the difference is '
            + 'that line 6\'s was added to a finding and line 11\'s was '
            + 'negotiated against a liability.' }
  ]
});

PBE7.scene('u9-9-4-pair', {
  set: 'editdesk',
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
      en: 'Line 6 has a hedge in it and line 11 has a hedge in it. Why is one '
            + 'of them ours to delete and the other not?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Who asked for each?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Line 6 is theirs. Line 11 was Mr Sayegh\'s, agreed in March.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'That is half the answer and it is the half that sounds like '
            + 'ownership. What is each one attached to?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Line 6 is attached to the apron sentence. Which we evidenced, in '
            + 'four named files.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And line 11?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'To a general assertion about what happened. Which we cannot '
            + 'evidence, because it is about everything.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So one hedge is in front of something you can prove and the other '
            + 'is in front of something nobody could.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And the first one gives away what I have and the second one limits '
            + 'what I am claiming.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Same grammar. Opposite function. And you can tell without knowing '
            + 'who wrote either.' }
  ]
});

PBE7.scene('u9-9-5', {
  set: 'editdesk',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' },
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'They have cut four things. A date, a clause about the four files, '
            + 'a sentence about the weighbridge, and the word same.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Which of the four changes what the document can be used for?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The date. Reported on 14 March has become reported promptly.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Reinstate it, and say what the cut did. ⚠ Promptly is an '
            + 'adjective about us; 14 March is a fact in a file — and the one '
            + 'thing we have in this correspondence is that we found it and said '
            + 'so the same day.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the four files?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Reinstate. ⚠ Four named files is a search; we have no record is '
            + 'a claim — Unit 7, and they have turned the first into the second '
            + 'by deleting one clause.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The weighbridge sentence is genuinely long. Their version is '
            + 'shorter and nothing is lost.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Then let it go and say nothing. ⚠ A reinstatement you do not '
            + 'need costs you one of the ones you do — a reply that puts back '
            + 'four things is a reply from somebody who cannot be edited.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the word same? Reported the same day has become reported that day.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Reinstate it, and that is the one they will not expect. ⚠ That '
            + 'day means the day of the count; the same day means the same day as '
            + 'the count — and only one of the two says we did not wait.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Three reinstatements out of four cuts.' },
    { who: 'nadia', cam: { shot: 'close' },
      en: '⚠ Three, each in one sentence, each saying what the cut removed '
            + 'rather than that you want your words back. ⚠ A date, a search, and '
            + 'a word that carries a comparison. ⚠ And the form is always the '
            + 'same: I have reinstated X; without it the sentence reads as Y.' }
  ]
});

PBE7.scene('u9-9-5-pair', {
  set: 'editdesk',
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
      en: 'I want the weighbridge sentence back. I wrote it and it is accurate.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Is their version inaccurate?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'No. Theirs is nine words and mine was thirty-one.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Is anything lost?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Nothing is lost. Mine explains how the weighing works.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Does the document need to explain how weighing works?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…No.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then you have four reinstatements, and three of them are a date, a '
            + 'search and a comparison.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And the fourth makes the other three look like a reflex.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'The fourth makes all four look like a man who cannot be edited. '
            + 'And the price of that is not paid on the weighbridge.' }
  ]
});

PBE7.scene('u9-9-6', {
  set: 'editdesk',
  arr: 2,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'This goes out over my signature. Read me the second paragraph.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'We counted the consignment on 14 March and reported it the same '
            + 'day. Furthermore, it is submitted that no liability attaches to '
            + 'the Company in respect thereof.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Stop there. Who wrote the second sentence?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Mr Sayegh.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ I could hear it, and so will Mr Dallal, and he will wonder which '
            + 'of the two of us he is dealing with. ⚠ One signature, one voice.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'How did you know without being told?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Three things. ⚠ The connective — furthermore, which nobody in '
            + 'this building says. ⚠ The passive with no agent — it is submitted. '
            + '⚠ And a word that belongs to one trade — thereof.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The content is right, though. We are not accepting liability.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Then say it in the voice of the first sentence. ⚠ We do not '
            + 'accept that the Company is liable for the shortfall, and we have '
            + 'set out why at paragraph 9. Same content, and it sounds like the '
            + 'man whose name is at the bottom.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if a clause genuinely cannot be rewritten? The hedge at line '
            + '11 is Mr Sayegh\'s and it cannot change.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Then it does not get blended, it gets marked. ⚠ Put it in '
            + 'quotation marks and attribute it, or set it out as a numbered term '
            + '— so a reader can see that one clause is in a different voice on '
            + 'purpose.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Rather than hiding the seam.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: '⚠ A seam you can see is a construction; a seam you cannot see is a '
            + 'document that changes its mind halfway down. ⚠ And there is '
            + 'nothing in between.' }
  ]
});

PBE7.scene('u9-9-6-pair', {
  set: 'editdesk',
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
      en: 'We counted the consignment on 14 March and reported it the same '
            + 'day. Furthermore, it is submitted that no liability attaches to '
            + 'the Company in respect thereof.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Stop. Three signs in the second sentence. Name them.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Furthermore, which nobody here says. It is submitted, which has '
            + 'nobody in it. And thereof.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So say it in the voice of the first sentence, and lose nothing.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'We do not accept that the Company is liable for the shortfall.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'You have lost something.' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…The reason. It was in paragraph 9 and the original pointed nowhere.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So the rewrite can be better than the original as well as plainer.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'We do not accept that the Company is liable for the shortfall, and '
            + 'we have set out why at paragraph 9.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'One voice, and a cross-reference the other version never had.' }
  ]
});

PBE7.scene('u9-9-7', {
  set: 'editdesk',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    hamdan: { rig: 'm-30s-a', name: 'Mr Hamdan', voice: 'en-PH-JamesNeural', shirt: '#6b5a3f', shirt2: '#564832',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Before the reply goes, I want to read you the four we are not taking.' },
    { who: 'hamdan', cam: { shot: 'mid' },
      en: 'Go on.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Line 3. About eleven cartons. The eleven was agreed in writing, '
            + 'in your own letter of 20 February.' },
    { who: 'hamdan', cam: { shot: 'mid' },
      en: '⚠ Then that is a mistake and I am glad you have raised it. Our '
            + 'office puts about in front of every quantity, as a style rule. ⚠ '
            + 'Nobody told me the figure was agreed.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Line 5. You have put as set out in correspondence where we had '
            + 'eleven words quoted from our letter of 28 January.' },
    { who: 'hamdan', cam: { shot: 'mid' },
      en: '⚠ Also a mistake. I shortened a long sentence and I did not see '
            + 'the quotation marks. Put them back.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Line 8. Without prejudice, deleted from the heading.' },
    { who: 'hamdan', cam: { shot: 'mid' },
      en: '⚠ That one I did deliberately, and I will tell you why, and then I '
            + 'will put it back. ⚠ My board does not know what it means and I did '
            + 'not want to explain two words in a meeting. But I know what it '
            + 'does.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And line 11. The clause about what the Company has been able to establish.' },
    { who: 'hamdan', cam: { shot: 'mid' },
      en: '⚠ That one I deleted because it is nine words of fog.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ It was agreed clause by clause with Mr Sayegh in March, by telephone.' },
    { who: 'hamdan', cam: { shot: 'mid' },
      en: '⚠ Then it is not fog, it is a term, and the fault is mine for not '
            + 'having the March note in front of me. ⚠ Three of those four I did '
            + 'not know, and one I knew and did anyway. Send me your reply, and '
            + 'send me the March note as well.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I will send both.' },
    { who: 'hamdan', cam: { shot: 'close' },
      en: '⚠ And one more thing, which you have not asked for. ⚠ Put the four '
            + 'on a separate sheet with the dates on them, and I will put that '
            + 'sheet in the file — so that the next person to edit this does not '
            + 'do what I have just done.' }
  ]
});

PBE7.scene('u9-9-7-pair', {
  set: 'editdesk',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    hamdan: { rig: 'm-30s-a', name: 'Mr Hamdan', voice: 'en-PH-JamesNeural', shirt: '#6b5a3f', shirt2: '#564832',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Line 3. About eleven cartons. The eleven was agreed in writing, in '
            + 'your letter of 20 February.' },
    { who: 'hamdan', cam: { shot: 'mid' },
      en: 'Then that is a mistake. Our office puts about in front of every '
            + 'quantity, as a style rule. Nobody told me the figure was agreed.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Thank you.' },
    { who: 'hamdan', cam: { shot: 'mid' },
      en: 'Is there more?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Line 5. You have put as set out in correspondence where we had '
            + 'eleven words quoted from our letter of 28 January.' },
    { who: 'hamdan', cam: { shot: 'mid' },
      en: 'Also a mistake. I shortened a long sentence and did not see the '
            + 'quotation marks. Put them back.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Thank you. Line 8 is without prejudice, deleted from the heading.' },
    { who: 'hamdan', cam: { shot: 'mid' },
      en: 'That one I did deliberately, and I will put it back, and I will '
            + 'tell you why I did it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Please.' },
    { who: 'hamdan', cam: { shot: 'close' },
      en: 'Because my board does not know what it means. Which is my problem '
            + 'and not yours, and the answer is a footnote.' }
  ]
});

PBE7.scene('u9-9-7-b', {
  set: 'editdesk',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    hamdan: { rig: 'm-30s-a', name: 'Mr Hamdan', voice: 'en-PH-JamesNeural', shirt: '#6b5a3f', shirt2: '#564832',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Line 3. About eleven cartons. The eleven was agreed in writing, in '
            + 'your letter of 20 February.' },
    { who: 'hamdan', cam: { shot: 'mid' },
      en: '⚠ Then that is a mistake. Our office puts about in front of every '
            + 'quantity, as a style rule. ⚠ Nobody told me the figure was agreed.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Line 5. You have put as set out in correspondence where we had '
            + 'eleven words quoted from our letter of 28 January.' },
    { who: 'hamdan', cam: { shot: 'mid' },
      en: '⚠ Also a mistake. I shortened a long sentence and I did not see '
            + 'the quotation marks. Put them back.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Line 8. Without prejudice, deleted from the heading.' },
    { who: 'hamdan', cam: { shot: 'mid' },
      en: '⚠ That one I did deliberately. ⚠ My board does not know what it '
            + 'means and I did not want to explain two words in a meeting. But I '
            + 'know what it does, so put it back.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ And line 11, the clause about what the Company has been able to '
            + 'establish. It was agreed clause by clause with Mr Sayegh in March, '
            + 'by telephone.' },
    { who: 'hamdan', cam: { shot: 'close' },
      en: '⚠ I deleted it because I thought it was nine words of fog. ⚠ If it '
            + 'was agreed then it is a term, and the fault is mine for not having '
            + 'the March note. ⚠ Put the four on a separate sheet with the dates '
            + 'on them, and I will put that sheet in the file — so that the next '
            + 'person to edit this does not do what I have just done.' }
  ]
});
