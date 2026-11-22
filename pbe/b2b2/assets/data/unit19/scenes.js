/* Unit 19 — the acted dialogues. Every line is the book's own. */
PBE8.scene('u19-19-1', {
  set: 'tribunal',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'rest' },
    nahas: { rig: 'f-50s-a', name: 'Ms Nahas', voice: 'en-ZA-LeahNeural', shirt: '#50607a', shirt2: '#3f4c61',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'They changed the specification by letter and then invoiced us for '
            + 'the old one. It is outrageous.' },
    { who: 'nahas', cam: { shot: 'mid' },
      en: '⚠ It may be. That is a grievance. ⚠ It is not an issue.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What is the difference?' },
    { who: 'nahas', cam: { shot: 'mid' },
      en: '⚠ An issue is a question the tribunal has to answer in order to '
            + 'decide the case. ⚠ A grievance is how you feel about the answer.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then what are the issues?' },
    { who: 'nahas', cam: { shot: 'mid' },
      en: '⚠ Three. ⚠ Did the cartons delivered on 14 October meet clause 6. '
            + 'Did your acceptance page of 24 October bind you. And did anybody '
            + 'agree, on 14 May, to the change you say was agreed.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And whether they behaved badly?' },
    { who: 'nahas', cam: { shot: 'mid' },
      en: '⚠ Not an issue, and the tribunal will stop you if you argue it. '
            + 'Not because it does not matter to you — ⚠ because no finding about '
            + 'their conduct changes the answer to any of the three questions.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is a very narrow way of looking at three years.' },
    { who: 'nahas', cam: { shot: 'mid' },
      en: '⚠ It is, and the narrowness is the point of the room. ⚠ A tribunal '
            + 'that decided who had behaved better would be deciding something '
            + 'neither of you agreed to put to it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'You said the tribunal is on nobody\'s side.' },
    { who: 'nahas', cam: { shot: 'mid' },
      en: '⚠ I did, and people hear that as a reassurance. ⚠ It is not one. '
            + 'It means nobody in the room will fill a gap in your case for you, '
            + 'or ask the question that would have helped you, or notice that you '
            + 'are plainly telling the truth.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So what does it mean in practice?' },
    { who: 'nahas', cam: { shot: 'close' },
      en: '⚠ That everything which has to be in your case has to be put there '
            + 'by you, in writing, before anybody sits down. Being right is not a '
            + 'submission.' }
  ]
});

PBE8.scene('u19-19-1-pair', {
  set: 'tribunal',
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
      en: 'The problem is that they have behaved disgracefully from the beginning.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Is that an issue or a grievance?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It is the heart of the case.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It is the heart of the dispute. If a tribunal found they behaved '
            + 'disgracefully, would the outcome change?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…No. We would still have to prove the specification point.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then state the issue, with a date and a clause.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Whether the cartons delivered on 14 October met clause 6.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And what would you have to put in writing for anybody to answer that?' },
    { who: 'a', cam: { shot: 'close' },
      en: 'The rejection note, the gate sheet, and the forty cartons we still have.' }
  ]
});

PBE8.scene('u19-19-2', {
  set: 'tribunal',
  arr: 1,
  cast: {
    nahas: { rig: 'f-50s-a', name: 'Ms Nahas', voice: 'en-ZA-LeahNeural', shirt: '#50607a', shirt2: '#3f4c61',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nahas', cam: { shot: 'wide' },
      en: 'I have struck out nine sentences of your draft. They are all the '
            + 'same sentence.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Which one?' },
    { who: 'nahas', cam: { shot: 'mid' },
      en: '⚠ Every sentence that says what Dallal Freres knew, meant, '
            + 'understood or intended. ⚠ You cannot plead the inside of '
            + 'somebody\'s head.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'They did know.' },
    { who: 'nahas', cam: { shot: 'mid' },
      en: '⚠ Very probably. And you cannot prove it, and a pleaded case is a '
            + 'list of things you say you can prove. ⚠ What you can plead is what '
            + 'they did — the letter of 3 June, the invoice of 11 July, and the '
            + 'difference between them.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is weaker.' },
    { who: 'nahas', cam: { shot: 'mid' },
      en: '⚠ It is narrower and it is very much stronger, because every '
            + 'sentence in it survives being tested. ⚠ Nine sentences about their '
            + 'state of mind would have been attacked one at a time, and each one '
            + 'you lost would have made the rest look like guessing.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What is a pleading actually for?' },
    { who: 'nahas', cam: { shot: 'mid' },
      en: '⚠ It tells the other side what they have to answer and it tells '
            + 'the tribunal what it has to decide. ⚠ That is all it does, and it '
            + 'is more than enough.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the things we believe but cannot prove?' },
    { who: 'nahas', cam: { shot: 'mid' },
      en: '⚠ Say them to me and never write them anywhere. ⚠ A belief in a '
            + 'pleading becomes a thing you have asserted and failed to establish '
            + '— and a tribunal counts those.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And what we do not say?' },
    { who: 'nahas', cam: { shot: 'close' },
      en: '⚠ Write that down too, in the same document, in one line. ⚠ Sham '
            + 'Trading does not allege bad faith. Four words that stop a week of '
            + 'argument, and they cost you nothing, because you were never going '
            + 'to win it.' }
  ]
});

PBE8.scene('u19-19-2-pair', {
  set: 'tribunal',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'I want to say they knew perfectly well our man had left.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Where does that verb happen? Inside a head, or where somebody could see it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Inside a head. But it is true.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Probably. Can you prove it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'No. Not with anything I have.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then give me what they DID, with a date.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'On 11 March they addressed the notice to a person who had left in 2024.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'That you can prove from the envelope. And is there anything you '
            + 'want to say you are NOT alleging?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…That they did it deliberately.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Say it in one line and you have saved a week.' }
  ]
});

PBE8.scene('u19-19-3', {
  set: 'tribunal',
  arr: 2,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'rest' },
    nahas: { rig: 'f-50s-a', name: 'Ms Nahas', voice: 'en-ZA-LeahNeural', shirt: '#50607a', shirt2: '#3f4c61',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'The note of 2 September. I wrote it and I would rather it did not '
            + 'go on the list.' },
    { who: 'nahas', cam: { shot: 'mid' },
      en: '⚠ Tell me what it says.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'That I was not sure the covering letter was strong enough. In '
            + 'September. Before any of this.' },
    { who: 'nahas', cam: { shot: 'mid' },
      en: '⚠ It goes on the list, and for two reasons. ⚠ The first is that '
            + 'you are obliged to list it, and a document you have withheld, '
            + 'found later, destroys a case that was otherwise winnable.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'And the second?' },
    { who: 'nahas', cam: { shot: 'mid' },
      en: '⚠ It is copied to Mr Attar. ⚠ So they will get it from somewhere, '
            + 'and if they get it from somewhere they will get it without your '
            + 'explanation attached.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'My explanation does not help. The note says the letter is weak.' },
    { who: 'nahas', cam: { shot: 'mid' },
      en: '⚠ Read me the whole sentence.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '"The covering letter may not be strong enough and we should ask '
            + 'them to confirm the position in writing."' },
    { who: 'nahas', cam: { shot: 'mid' },
      en: '⚠ And did anybody ask them?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'No.' },
    { who: 'nahas', cam: { shot: 'mid' },
      en: '⚠ Then the note does not show what you are afraid of. ⚠ It shows '
            + 'that in September this company identified the exact weakness it is '
            + 'now litigating, in writing, and proposed the correct remedy — and '
            + 'that nobody carried it out. That is not a document about you being '
            + 'wrong. It is a document about you being right and nothing '
            + 'happening.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'It is still a document about a failure.' },
    { who: 'nahas', cam: { shot: 'close' },
      en: '⚠ It is, and it is a failure of the office and not of your '
            + 'judgement, which is a materially better document than the one you '
            + 'have been imagining for a week. ⚠ Disclose it, and put that '
            + 'sentence in the list beside it, in your words — because the '
            + 'explanation only travels with the document if you attach it.' }
  ]
});

PBE8.scene('u19-19-3-pair', {
  set: 'tribunal',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'There is an e-mail where I say I am not sure we ever told them. I '
            + 'would rather not list it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Who else has a copy?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Our accountant. It was in a thread about the year end.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then they will get it. Read me the whole sentence, not the part '
            + 'you have been dreading.' },
    { who: 'a', cam: { shot: 'mid' },
      en: '"I am not sure we ever told them Faris had left — can somebody '
            + 'check the February circular?"' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And did anybody check?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'No.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So what does it show?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…That we asked the question in May, before any dispute. And that '
            + 'nobody answered it.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Which is a different document from the one you have been '
            + 'imagining. What is still against you?' }
  ]
});

PBE8.scene('u19-19-4', {
  set: 'tribunal',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'rest' },
    nahas: { rig: 'f-50s-a', name: 'Ms Nahas', voice: 'en-ZA-LeahNeural', shirt: '#50607a', shirt2: '#3f4c61',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The call of 14 May. We have nothing. No note, no e-mail, no diary entry.' },
    { who: 'nahas', cam: { shot: 'mid' },
      en: '⚠ Then plead the hole. ⚠ In your own Statement of Case, in its own '
            + 'paragraph, before anybody asks you a question about it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Why would we draw attention to our weakest point?' },
    { who: 'nahas', cam: { shot: 'mid' },
      en: '⚠ Because the attention is coming. ⚠ An absence you have pleaded '
            + 'is a fact in the case; an absence found in cross-examination is a '
            + 'collapse — and they are the same absence.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And whose fault do we say it is?' },
    { who: 'nahas', cam: { shot: 'mid' },
      en: '⚠ Ours. In four words. ⚠ The absence is the Claimant\'s own. Do '
            + 'not reach for a reason, do not say the line was bad, and do not '
            + 'say everybody was busy.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is a lot to concede in four words.' },
    { who: 'nahas', cam: { shot: 'mid' },
      en: '⚠ It concedes nothing that was in doubt — the record either exists '
            + 'or it does not, and it does not. ⚠ What the four words buy is that '
            + 'nothing else you say about the call can be attacked as evasion.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And then we stop?' },
    { who: 'nahas', cam: { shot: 'mid' },
      en: '⚠ No. Then you say what you CAN show, and there is more than you '
            + 'think. ⚠ Three things. That the revised specification was sent on '
            + '3 June to four addressees, which is consistent with something '
            + 'having been agreed in May. That Dallal Freres produced no record '
            + 'of the call either, so the absence is not one-sided. And that '
            + 'their own stock sheets for June are drawn to the revised figures.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The third one is the strongest.' },
    { who: 'nahas', cam: { shot: 'close' },
      en: '⚠ It is the only one that is nearly evidence, and you only find it '
            + 'by asking what a world in which the call happened would look like. '
            + '⚠ A hole in your case is not a hole in the world — something '
            + 'followed from that call, and the things that followed are in '
            + 'documents.' }
  ]
});

PBE8.scene('u19-19-4-pair', {
  set: 'tribunal',
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
      en: 'I would have to prove we told them Faris had left, and I cannot. '
            + 'The e-mail was on an account we closed.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Say so in a sentence, with no reason attached.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'We cannot produce the circular of February 2024. …Because the '
            + 'account was closed when we—' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Stop. That is a reason. What happens when they test it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'They ask who closed it and when and whether anything else went.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And now you are defending your own records instead of pleading '
            + 'your case. Whose absence is it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Ours.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Now the useful question. If we did tell them, what followed from it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Their invoices stopped being addressed to Faris. From March 2024.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'And whose documents are those in?' }
  ]
});

PBE8.scene('u19-19-5', {
  set: 'tribunal',
  arr: 1,
  cast: {
    nahas: { rig: 'f-50s-a', name: 'Ms Nahas', voice: 'en-ZA-LeahNeural', shirt: '#50607a', shirt2: '#3f4c61',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nahas', cam: { shot: 'wide' },
      en: 'Did you read clause 19 before the agreement was signed?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Not closely, because at that stage the schedule was the thing '
            + 'everybody was arguing about, and clause 19 had come from their '
            + 'standard form, and honestly nobody expected—' },
    { who: 'nahas', cam: { shot: 'mid' },
      en: '⚠ Stop. The answer is no.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is more complicated than no.' },
    { who: 'nahas', cam: { shot: 'mid' },
      en: '⚠ The question was not complicated. ⚠ You answered no and then '
            + 'opened three new subjects: what the firm was arguing about, where '
            + 'the clause came from, and what the firm expected. I can ask you '
            + 'about all three now, and I will, and so will they.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So what do I say?' },
    { who: 'nahas', cam: { shot: 'mid' },
      en: '⚠ There are four complete answers and you will need all of them. ⚠ '
            + 'Yes. No. I do not know. I do not remember. Those are answers. '
            + 'Everything else is an answer plus something.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I do not remember sounds evasive.' },
    { who: 'nahas', cam: { shot: 'mid' },
      en: '⚠ It is the most honest sentence available when it is true, and a '
            + 'tribunal hears far worse things every day than a witness who '
            + 'cannot remember 2024. ⚠ What is evasive is remembering unusually '
            + 'well.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if the question is unfair?' },
    { who: 'nahas', cam: { shot: 'mid' },
      en: '⚠ Then it will usually have a premise in it. When you decided to '
            + 'ignore clause 19, who did you tell? ⚠ You do not answer that. You '
            + 'take the premise out first: I did not decide to ignore it. Then '
            + 'stop, and let them put the question again.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if they ask it the same way?' },
    { who: 'nahas', cam: { shot: 'close' },
      en: '⚠ Say the same thing the same way. ⚠ A witness who gives the same '
            + 'short answer three times is tedious and unassailable, which in '
            + 'that room is the same as impressive — and a witness who improves '
            + 'the answer each time has just shown everybody that the answer is '
            + 'being made.' }
  ]
});

PBE8.scene('u19-19-5-pair', {
  set: 'tribunal',
  arr: 1,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'What did the foreman say to you on 3 June?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I do not remember.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '(waits)' },
    { who: 'a', cam: { shot: 'mid' },
      en: '(says nothing)' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Good. Now say it the way you wanted to.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I do not remember exactly, but it would have been about the '
            + 'window, because that was the week we—' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Stop. What have you just given me?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…That there was a conversation. That it was about the window. And a reason.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'From a question you had already answered completely.' },
    { who: 'a', cam: { shot: 'close' },
      en: 'And the first version sounded weaker to me and it is the only one '
            + 'that is safe.' }
  ]
});

PBE8.scene('u19-19-6', {
  set: 'tribunal',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'rest' },
    nahas: { rig: 'f-50s-a', name: 'Ms Nahas', voice: 'en-ZA-LeahNeural', shirt: '#50607a', shirt2: '#3f4c61',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'They have offered eleven million. The claim is nineteen. Mr Ayoub '
            + 'called it insulting.' },
    { who: 'nahas', cam: { shot: 'mid' },
      en: '⚠ He may think so and the word goes nowhere near the paper. ⚠ '
            + 'Before anybody has an opinion, write down four numbers.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Go on.' },
    { who: 'nahas', cam: { shot: 'mid' },
      en: '⚠ One: the offer, eleven. Two: what you are claiming, nineteen. ⚠ '
            + 'Three: what it costs to go on from here, which is about four '
            + 'million in fees and the Beirut hearing. Four, and this is the one '
            + 'nobody writes: what winning actually leaves you.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Nineteen minus four. Fifteen.' },
    { who: 'nahas', cam: { shot: 'mid' },
      en: '⚠ Fifteen if you win everything, and you will not win issue three, '
            + 'because you cannot prove the call. ⚠ Without issue three the claim '
            + 'is about fourteen, so winning leaves you ten.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Which is less than the offer.' },
    { who: 'nahas', cam: { shot: 'mid' },
      en: '⚠ Which is less than the offer. And that sentence is why the four '
            + 'numbers get written down before anybody says insulting.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So we accept.' },
    { who: 'nahas', cam: { shot: 'mid' },
      en: '⚠ That is not my decision and it is not yours. ⚠ What you do is '
            + 'put the four numbers to whoever decides, with the two outcomes '
            + 'priced, and a recommendation — and then you do what they say, and '
            + 'you record that you recommended it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if they refuse anyway?' },
    { who: 'nahas', cam: { shot: 'close' },
      en: '⚠ Then they have refused ten in favour of a chance at fifteen, '
            + 'knowingly, which is a legitimate commercial decision and nothing '
            + 'like the one they would have made at six o\'clock on Thursday on '
            + 'the word insulting. ⚠ Your job is not to make the decision. It is '
            + 'to make sure the decision is the one being made.' }
  ]
});

PBE8.scene('u19-19-6-pair', {
  set: 'tribunal',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'They have offered six hundred thousand. It is derisory.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Leave the adjective out. What is the claim?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Two point one million.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And what does going on from here cost?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…About three hundred and eighty thousand, if I count our own time.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Count it. Now the fourth. Which part of the claim will you not win?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The 3 June conversation. About seven hundred thousand.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So what does winning actually leave you?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'About one million.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Which is more than the offer. Now you have a decision rather than a feeling.' }
  ]
});

PBE8.scene('u19-19-7', {
  set: 'tribunal',
  arr: 0,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'rest' },
    nahas: { rig: 'f-50s-a', name: 'Ms Nahas', voice: 'en-ZA-LeahNeural', shirt: '#50607a', shirt2: '#3f4c61',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'The statement says I agreed the change with him on 14 May. I did. '
            + 'Why will you not let me sign it?' },
    { who: 'nahas', cam: { shot: 'mid' },
      en: '⚠ Because in September 2024 you wrote, to Nadia, I think we agreed '
            + 'the revised figures in May. ⚠ That document is disclosed. It is at '
            + 'C7.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'And now I am certain. People become certain.' },
    { who: 'nahas', cam: { shot: 'mid' },
      en: '⚠ They do, and that is exactly the problem. ⚠ A memory that has '
            + 'become firmer over three years, in the direction that helps, is '
            + 'the one thing in that room that destroys a witness — and it '
            + 'destroys the case he is carrying with him.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So we cannot put the issue at all?' },
    { who: 'nahas', cam: { shot: 'mid' },
      en: '⚠ If he signs we agreed, they put C7 to him and he has two '
            + 'choices, and both are fatal. He says his memory improved, which '
            + 'nobody believes. Or he says the 2024 note was careless, which '
            + 'makes him a man whose written records are careless.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'I will not be called a liar for the difference between I think and nothing.' },
    { who: 'nahas', cam: { shot: 'mid' },
      en: '⚠ Nobody is calling you one. I am telling you what the gap does, '
            + 'not what it proves.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '(pause) ⚠ Then let me tell you what the real difference is, and '
            + 'you may do what you like with it. ⚠ In 2024 I had not read the '
            + 'June stock sheets. When I saw that their own sheets were drawn to '
            + 'the revised figures, I stopped thinking and started knowing. That '
            + 'is not my memory improving. That is me finding out I was right.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then that is the statement.' },
    { who: 'nahas', cam: { shot: 'mid' },
      en: 'Say what you mean.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ He signs a statement that contains both sentences and the reason '
            + 'for the difference. ⚠ What he wrote in 2024, what he says now, and '
            + 'the document he saw in between, with its date. They cannot ambush '
            + 'him with C7 if C7 is in his own paragraph four.' },
    { who: 'nahas', cam: { shot: 'close' },
      en: '⚠ That he can sign, and it is a weaker sentence and a very much '
            + 'stronger witness. ⚠ It costs us the clean version of issue three — '
            + 'and it means the tribunal hears about the stock sheets from the '
            + 'man himself rather than from me in closing.' }
  ]
});

PBE8.scene('u19-19-7-pair', {
  set: 'tribunal',
  arr: 0,
  cast: {
    nahas: { rig: 'f-50s-a', name: 'Ms Nahas', voice: 'en-ZA-LeahNeural', shirt: '#50607a', shirt2: '#3f4c61',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'rest' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nahas', cam: { shot: 'wide' },
      en: 'Your draft statement says we agreed the revised figures in May. '
            + 'Your note of September 2024 says I think we agreed.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Both sentences are mine. I am more certain now than I was then.' },
    { who: 'nahas', cam: { shot: 'mid' },
      en: 'In cross-examination that gap has two explanations. Your memory '
            + 'improved, which nobody believes, or the 2024 note was careless.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'And I am your principal witness on two issues.' },
    { who: 'nahas', cam: { shot: 'mid' },
      en: 'You are. I am telling you what the gap does, not what it proves.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Nobody has asked me what changed. In between I read their own June '
            + 'stock sheets, drawn to the revised figures.' },
    { who: 'nahas', cam: { shot: 'mid' },
      en: 'You saw a document, then. On what date?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'The eleventh of March, when disclosure arrived. That is not my '
            + 'memory improving. That is me finding out I was right.' },
    { who: 'nahas', cam: { shot: 'mid' },
      en: 'Then the statement carries all three: what you wrote in 2024, what '
            + 'you say now, and the sheets with their date.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: 'I lose the clean sentence. I will sign that one, because it is '
            + 'true and not because it is safer.' }
  ]
});

PBE8.scene('u19-19-7-b', {
  set: 'tribunal',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'rest' },
    nahas: { rig: 'f-50s-a', name: 'Ms Nahas', voice: 'en-ZA-LeahNeural', shirt: '#50607a', shirt2: '#3f4c61',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'So what has paragraph four cost us?' },
    { who: 'nahas', cam: { shot: 'mid' },
      en: '⚠ The clean version of issue three. We will not get a finding that '
            + 'the change was agreed in May. At best we get a finding that it '
            + 'probably was.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And what has it bought?' },
    { who: 'nahas', cam: { shot: 'mid' },
      en: '⚠ A witness they cannot break, and the stock sheets arriving in '
            + 'his mouth instead of mine.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Why does that matter? They are the same documents.' },
    { who: 'nahas', cam: { shot: 'mid' },
      en: '⚠ Because when I point at them in closing, I am counsel and I am '
            + 'paid to. ⚠ When he says I read them and I stopped thinking and '
            + 'started knowing, that is a man describing what changed his mind — '
            + 'and a tribunal has no reason to discount it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'He thought you were calling him a liar.' },
    { who: 'nahas', cam: { shot: 'mid' },
      en: '⚠ I know, and I was not, and I could not have fixed that by saying '
            + 'so more kindly. ⚠ What fixed it was that he found the honest '
            + 'distinction himself. I could not have supplied it. Only he knew '
            + 'whether his memory had improved or he had found out he was right.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Is there anything I should put on the file?' },
    { who: 'nahas', cam: { shot: 'mid' },
      en: '⚠ That the clean version was given up on my advice, with the date, '
            + 'and that Mr Ayoub agreed it on the ground that it was true. ⚠ Not '
            + 'on the ground that it was tactical — because in two years somebody '
            + 'will read that paragraph and wonder why he conceded, and the '
            + 'answer should be on the file and not in anybody\'s memory.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And can you tell me we will win?' },
    { who: 'nahas', cam: { shot: 'close' },
      en: '⚠ No. I can tell you that nothing in your own documents will be '
            + 'used to destroy your own witnesses, which is more than was true of '
            + 'this case a month ago. ⚠ The rest is the tribunal\'s, and that is '
            + 'what clause 19 bought you on 26 June, whether anybody read it or '
            + 'not.' }
  ]
});
