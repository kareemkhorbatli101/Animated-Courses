/* Unit 13 — the acted dialogues. Every line is the book's own. */
PBE8.scene('u13-13-1', {
  set: 'contractdesk',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'rest' },
    sayegh: { rig: 'm-50s-b', name: 'Mr Sayegh', voice: 'en-AU-WilliamMultilingualNeural', shirt: '#4a5e74', shirt2: '#3a4a5c',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'I have been through it twice. Six clauses put something on us.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Eleven.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then I have read it badly.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ You have read it the way everybody reads a contract, which is '
            + 'for what it says. ⚠ A contract is not read for what it says. It is '
            + 'read for what it makes somebody do, and those are different '
            + 'documents on the same page.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Give me one I missed.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Clause 13. The Supplier will use best endeavours to maintain a '
            + 'buffer stock of two hundred cartons.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is not an obligation, it is an intention. It says best endeavours.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ It is an obligation with a standard attached, and the standard '
            + 'is nearly the heaviest one there is. We will come to that. What I '
            + 'want you to see now is why you did not count it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Because it does not sound like a duty.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Because it has no date in it. ⚠ You counted the clauses with '
            + 'dates and missed the clauses with standards — and a standard runs '
            + 'every day, which is worse.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So what is the test?' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Read each clause and ask one question: if nobody at this company '
            + 'did anything at all, would this clause be broken? ⚠ If the answer '
            + 'is yes, it is ours, and somebody has to do something.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the clauses where the answer is no?' },
    { who: 'sayegh', cam: { shot: 'close' },
      en: '⚠ They are theirs, or they oblige nobody. ⚠ A clause that obliges '
            + 'nobody is worth finding too, because somebody negotiated it and '
            + 'believed they had got something.' }
  ]
});

PBE8.scene('u13-13-1-pair', {
  set: 'contractdesk',
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
      en: 'Clause 13 says we will use best endeavours to maintain a buffer '
            + 'stock of two hundred cartons.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'If nobody here did anything at all, would it be broken?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It is an intention. It says best endeavours.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'That is not what I asked. If nobody did anything, would there be '
            + 'two hundred cartons on the floor?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…No.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then it is ours. Has it got a date or a standard?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'A standard. There is no date in it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So it runs every day. When did anybody last count the buffer?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I do not know that anybody ever has.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Then that is the clause to start with, and it is the one you did not count.' }
  ]
});

PBE8.scene('u13-13-2', {
  set: 'contractdesk',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' },
    sayegh: { rig: 'm-50s-b', name: 'Mr Sayegh', voice: 'en-AU-WilliamMultilingualNeural', shirt: '#4a5e74', shirt2: '#3a4a5c',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Clause 13 was mine. Their draft said shall maintain and I changed '
            + 'it to will use best endeavours to maintain.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Why?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Because we cannot always hold two hundred cartons and I wanted room.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ You wanted reasonable endeavours. ⚠ What you wrote is nearly as '
            + 'heavy as shall.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Best endeavours is weaker than shall. It has the word endeavours in it.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Best endeavours means everything a prudent and determined person '
            + 'would do, in your position, wanting to achieve it — ⚠ including '
            + 'things that cost you money and things against your own commercial '
            + 'interest. It does not require you to ruin yourself. That is the '
            + 'only limit.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And reasonable endeavours?' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ One reasonable course, and you may stop if it becomes '
            + 'commercially unreasonable. ⚠ The distance between the two words is '
            + 'the distance between hiring a van at any price and asking your '
            + 'usual man whether he has one.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So I made it harder by trying to make it softer.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ You made it harder and less visible at the same time, which is '
            + 'the worse of the two. ⚠ Shall maintain would have gone straight '
            + 'into somebody\'s job. ⚠ Best endeavours reads like an aspiration, '
            + 'so nobody has been given it — and the obligation is running '
            + 'anyway.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What should it have said?' },
    { who: 'sayegh', cam: { shot: 'close' },
      en: '⚠ Will use reasonable endeavours to maintain a buffer stock of two '
            + 'hundred cartons, and shall notify the Buyer within three business '
            + 'days if the buffer falls below one hundred. ⚠ A soft standard with '
            + 'a hard date attached to the failure. ⚠ That is the shape you '
            + 'wanted: room to fail, and an obligation to say so.' }
  ]
});

PBE8.scene('u13-13-2-pair', {
  set: 'contractdesk',
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
      en: 'Clause 11 says the Buyer may inspect any consignment on three '
            + 'days\' notice. That is permissive, so it is harmless.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Permissive to whom?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'To the Buyer.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So whose discretion is it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Theirs.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And what falls on us when they exercise it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'We have to let them in. On three days\' notice.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'With the consignment still here, and somebody to walk them round it.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Then it is an obligation with a date in it, hidden inside a may.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Which is why whose discretion is it is a different question from '
            + 'is this clause permissive.' }
  ]
});

PBE8.scene('u13-13-3', {
  set: 'contractdesk',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'rest' },
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Clause 6. A quarterly forecast, within ten days of each quarter end.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Then say the dates. All four of them.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '10 November, 10 February, 10 May, 10 August.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Good. Now whose are they?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Yours, I assumed. You have the figures.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ I have the figures on the fifth working day, which is not the '
            + 'same thing as having a forecast on the tenth. ⚠ A forecast is the '
            + 'figures plus a view, and the view takes two days.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So you want the 7th.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ I want the 7th in my diary and the 10th in yours. ⚠ Two entries, '
            + 'two names, and a gap between them that is three days wide — '
            + 'because the thing that fails is never the date, it is the day '
            + 'before the date.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if the figures are late?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Then on the 7th you know, and you have three days to tell them '
            + 'rather than none. ⚠ That is the whole reason for two entries '
            + 'instead of one.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The clause does not say any of this.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ A clause never does. A clause is a sentence in a drawer. ⚠ What '
            + 'makes it get done is a diary entry with a name on it, and the '
            + 'register is where the clause turns into one.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What goes in the register, then?' },
    { who: 'nadia', cam: { shot: 'close' },
      en: '⚠ Clause 6. Act: prepare the quarterly forecast. Owner: me, by the '
            + '7th. Second act: send it. Owner: you, by the 10th. Evidence: the '
            + 'sent message, kept. ⚠ Four things, and the fourth is the one '
            + 'everybody leaves out — because an obligation you cannot prove you '
            + 'performed is one you did not perform, on the only day it matters.' }
  ]
});

PBE8.scene('u13-13-3-pair', {
  set: 'contractdesk',
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
      en: 'One entry, on the 10th, in my diary. That covers it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'What happens if the figures are two days late?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I chase them.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'On the 10th. The clause falls due on the 10th.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Then I am chasing on the day it is due.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So with one entry the answer to a two-day delay is a breach. With '
            + 'an entry on the 7th?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'A telephone call.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Which of those two would the firm rather be having?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The call. And I would have three days to make it in.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Then the second entry is not caution. It is the difference between '
            + 'a call and a breach.' }
  ]
});

PBE8.scene('u13-13-4', {
  set: 'contractdesk',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'rest' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Clause 9. We acknowledge a complaint within forty-eight hours of '
            + 'receipt. We cannot do it.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Why not? It is two days.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Three things, and they are separate. First, receipt by whom. A '
            + 'complaint can arrive at the Mezzeh counter, at the warehouse gate, '
            + 'or by letter to the office.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ And the gate has no telephone of its own.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The gate has Abu Yasser, who has the counter telephone when he is '
            + 'at the counter, which is not often. Second: forty-eight hours is '
            + 'forty-eight hours. Thursday afternoon to Saturday afternoon is '
            + 'forty-eight hours and nobody is here.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ So on a Thursday complaint we are in breach before anybody has '
            + 'opened a door. And the third?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Acknowledge means a document. Hala can say we have it on the '
            + 'telephone in a minute. Putting it in writing needs the complaint '
            + 'in front of somebody who can write.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Then we have an undertaking we cannot keep, in week two, on a '
            + 'clause nobody has broken yet. ⚠ What do you want to do?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Write to Mr Hamdan and say so.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Before anything has gone wrong.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Before anything has gone wrong is the only time it is information. '
            + '⚠ After the first late acknowledgement it is an excuse, and it is '
            + 'the same sentence.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Say that again, because that is the whole of it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ The same sentence is information today and an excuse in October. '
            + '⚠ Nothing about it will have changed except who says it first.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: '⚠ Then write it today, and do not ask them to amend the agreement. '
            + '⚠ Ask them to agree what two words mean. That is a smaller thing '
            + 'and they can say yes to it.' }
  ]
});

PBE8.scene('u13-13-4-pair', {
  set: 'contractdesk',
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
      en: 'As drafted we cannot perform clause 9, because the warehouse gate '
            + 'has no telephone.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'What else?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That is the main thing.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'What else.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Forty-eight hours includes the Friday and the Saturday. A Thursday '
            + 'complaint falls due on a Saturday.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Acknowledge means a document. Hala can say we have it in a minute; '
            + 'she cannot issue a document.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So three. What does one reason invite?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…The answer that we should get a telephone.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'And three reasons invite a definition. Which is what you want.' }
  ]
});

PBE8.scene('u13-13-5', {
  set: 'contractdesk',
  arr: 1,
  cast: {
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'hala', cam: { shot: 'wide' },
      en: 'There is a letter from Beirut in the counter tray. It has been '
            + 'there a while.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Dated?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'The 3rd of September. It came in on the 11th, I think. It is about '
            + 'a short delivery.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then it is a notice under clause 20 and today is the 18th. ⚠ Give it to me.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Is the 11th a problem? It was only a week.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ The 11th does not matter at all, and that is the part nobody '
            + 'believes. ⚠ Clause 17 says a notice is deemed received at close of '
            + 'business on the second business day after posting. Posted the 3rd. '
            + 'Deemed received the 7th.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'But we did not have it on the 7th.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ We are deemed to have had it on the 7th, which for every purpose '
            + 'in this agreement is the same thing. ⚠ The day a letter actually '
            + 'reaches a tray is a fact about our building and the agreement is '
            + 'not interested in our building.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'And then?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Clause 20. Fourteen days from the deemed date to remedy a '
            + 'notified breach. The 7th plus fourteen is the 21st. Today is the '
            + '18th.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Three days.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Three days, and the remedy is two days\' work, so we are inside '
            + 'it. ⚠ If you had found it on the 22nd we would have been in breach '
            + 'of an agreement four weeks old over a letter that was in this '
            + 'building the whole time.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'The tray is the problem.' },
    { who: 'nour', cam: { shot: 'close' },
      en: '⚠ The tray is a clock nobody can see. ⚠ Every letter in it is '
            + 'running, and the only cure is that somebody opens the tray on a '
            + 'date with their name against it — which is a register row, not a '
            + 'policy.' }
  ]
});

PBE8.scene('u13-13-5-pair', {
  set: 'contractdesk',
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
      en: 'It came in on the 11th, so we have had it a week.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'What does clause 17 say?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Deemed received at close of business on the second business day '
            + 'after posting.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Posted?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The 3rd.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then you had it on the 7th. What does the 11th tell you?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'When it reached the counter.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Which is a fact about this building. Does the agreement ask about '
            + 'this building?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'No. So the 11th is in my note and not in the arithmetic.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'And what would have happened if Hala had found it on the 22nd?' }
  ]
});

PBE8.scene('u13-13-6', {
  set: 'contractdesk',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'rest' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Twenty-two rows, one for each clause. Eleven of them carry an act. '
            + 'Six people between them.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Six people, and how many of them have read the agreement?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Two. You and me.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ So you are about to put four names against obligations in a '
            + 'document they have never seen. ⚠ What do I say to Abu Yasser when '
            + 'he asks what he has signed up to?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ That he has not signed up to anything, because he cannot. ⚠ The '
            + 'company signed. The register says who performs what the company '
            + 'signed, which is a different question — and the answer to it was '
            + 'previously nobody.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ He will still read his name next to a clause number.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then the row should not have a clause number in it where he can '
            + 'see it. ⚠ His row says: count the buffer stock on Sundays and '
            + 'write the figure on the sheet. ⚠ The clause number is in my '
            + 'column, not in his.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ That is better. What is the fourth column?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Evidence. What we could hand over tomorrow to show the thing was done.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ And how many of the eleven have evidence today?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Four. ⚠ Three of the other seven are being done and leave no '
            + 'trace, and four are not being done at all.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Say the second number again.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Four of our eleven obligations are not being performed. We are '
            + 'seven weeks in.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: '⚠ Then that is what the register is for, and I will stop arguing '
            + 'about the names. ⚠ Write it, bring it to me on Thursday, and bring '
            + 'the four separately.' }
  ]
});

PBE8.scene('u13-13-6-pair', {
  set: 'contractdesk',
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
      en: 'Clause 13. Act: maintain the buffer stock.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'That is the clause again. What does a person do?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'They keep two hundred cartons on the floor.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'On which day? And who?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Nobody keeps it on a day. It is a level.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then what does a person do, on a day, that tells anybody whether '
            + 'the level is there?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Counts it. And writes the figure down.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Sundays. Abu Yasser. And when he is away?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Fadi.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'And now the clause has become something that can be done, failed, or shown.' }
  ]
});

PBE8.scene('u13-13-7', {
  set: 'contractdesk',
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
      en: 'Clause 13. We undertake best endeavours to keep two hundred '
            + 'cartons as a buffer. On 20 August the buffer was a hundred and '
            + 'twenty. On 1 September it was ninety-five.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ Ninety-five is right. The Ghouta run goes Mondays and Wednesdays '
            + 'and it takes forty a time when the orders are heavy, and in August '
            + 'they were heavy.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So we have been below half the figure since the middle of August.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ I have kept about a hundred for eleven years, because a hundred '
            + 'covers a week. ⚠ Nobody has ever told me two hundred.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is in the agreement.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ I have not seen the agreement. ⚠ If you had told me in July that '
            + 'two hundred was a number somebody could sue us about, the Ghouta '
            + 'run would have taken thirty a time and I would have told you why. '
            + '⚠ I did not know it was a number. I thought it was a habit, and a '
            + 'habit gives way to an order.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ That is my fault and it is in my note. What do you need?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ Three things. The figure, in writing, where I count. A day to '
            + 'count on. And somebody to tell when it goes under a hundred and '
            + 'fifty, because I will not know who to tell at eight in the '
            + 'morning.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The figure on the sheet, Sundays, and you tell me — and Bassel '
            + 'when I am not here.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ And one more. Put in your register that the Ghouta run takes '
            + 'forty when the orders are heavy. ⚠ Because when somebody reads '
            + 'this in two years they will see that I let the buffer fall and '
            + 'they will not see why.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ That is the best thing anybody has said about this register. It '
            + 'goes in the row, not in a footnote.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ And am I in breach?' },
    { who: 'nour', cam: { shot: 'close' },
      en: '⚠ The company is, possibly, and not you. ⚠ And under best '
            + 'endeavours what we are judged on is what we did when we found out '
            + '— which starts on Sunday.' }
  ]
});

PBE8.scene('u13-13-7-pair', {
  set: 'contractdesk',
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
      en: 'Clause 13 requires two hundred. On 20 August we had a hundred and '
            + 'twenty. On 1 September, ninety-five.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Ninety-five is right. The Ghouta run takes forty a time when the '
            + 'orders are heavy.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That goes in the row.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Nobody has ever told me the figure was two hundred.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That is my fault and it is in my note. What do you need?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'The figure where I count. A day. And somebody to tell when it goes '
            + 'under a hundred and fifty.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Sundays, the sheet, and me — Bassel when I am not here.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And am I in breach?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The company is, possibly. You are not.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Then put the forty in the register, so that in two years somebody sees why.' }
  ]
});

PBE8.scene('u13-13-7-b', {
  set: 'contractdesk',
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
      en: '⚠ Clause 13. We undertake best endeavours to keep two hundred '
            + 'cartons as a buffer. On 20 August the buffer was a hundred and '
            + 'twenty. On 1 September it was ninety-five.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ Ninety-five is right. The Ghouta run goes Mondays and Wednesdays '
            + 'and it takes forty a time when the orders are heavy, and in August '
            + 'they were heavy.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So we have been below half the figure since the middle of August.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ I have kept about a hundred for eleven years, because a hundred '
            + 'covers a week. Nobody has ever told me two hundred. ⚠ I have not '
            + 'seen the agreement. I thought it was a habit, and a habit gives '
            + 'way to an order.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ That is my fault and it is in my note. What do you need?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ Three things. The figure, in writing, where I count. A day to '
            + 'count on. And somebody to tell when it goes under a hundred and '
            + 'fifty, because I will not know who to tell at eight in the '
            + 'morning.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The figure on the sheet, Sundays, and you tell me — and Bassel '
            + 'when I am not here.' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: '⚠ And one more. Put in your register that the Ghouta run takes '
            + 'forty when the orders are heavy, because when somebody reads this '
            + 'in two years they will see that I let the buffer fall and they '
            + 'will not see why.' }
  ]
});
