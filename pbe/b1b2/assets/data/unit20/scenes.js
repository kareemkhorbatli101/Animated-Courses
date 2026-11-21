/* Unit 20 — the acted dialogues. Every line is the book's own. */
PBE6.scene('u20-20-1', {
  set: 'workbench',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'rest' },
    lina: { rig: 'f-20s-b', name: 'Lina', voice: 'en-NZ-MollyNeural', shirt: '#8a5f7a', shirt2: '#6e4b61',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The trial carton has the seal on the base.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'Step 4 says apply the seal to the face carrying the consignee code.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the consignee code is on the base?' },
    { who: 'lina', cam: { shot: 'mid' },
      en: '⚠ On this carton the code is on the base, because the stencil is '
            + 'applied to the flat before it is made up — and I did exactly what '
            + 'step 4 said.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'You did. Say that again, in those words, when Bassel asks.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'I thought I would be in trouble.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ I did exactly what step 4 said is the most useful sentence '
            + 'anybody can say to me, and it is worth more than an apology, '
            + 'because it tells me which line is wrong. ⚠ An apology tells me '
            + 'nothing at all.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'And if I had decided the step was wrong and put the seal on the side?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Then the carton would have been right and the instruction would '
            + 'still be wrong, and nobody would ever have found it. ⚠ The next '
            + 'person would do what the page says, on a night shift, with a '
            + 'hundred cartons.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'So doing what the page says even when it looks wrong is the right thing.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ On a first-off, yes, and then stop. That is what a first-off is '
            + 'for: ⚠ you make one, exactly as written, and you look at it before '
            + 'you make ninety-nine more.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'Step 4 should say which face.' },
    { who: 'nour', cam: { shot: 'close' },
      en: '⚠ Apply the seal to the side face, which carries the consignee '
            + 'code once the carton is made up. Fourteen words instead of nine. ⚠ '
            + 'And the nine words were not careless; they were written by '
            + 'somebody looking at a made-up carton — and you were looking at a '
            + 'flat one.' }
  ]
});

PBE6.scene('u20-20-1-pair', {
  set: 'workbench',
  arr: 0,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'You put the seal on the side, and the page says the face with the code.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The page is wrong. The code is on the base until it is made up.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So you corrected it in your head.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I did, and the carton is right.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ The carton is right and the page is still wrong, and nobody knows but you.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I was trying to save the time.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ I know you were. And the next person is alone at night with a '
            + 'hundred cartons and that page — ⚠ so the kindness costs '
            + 'ninety-nine cartons and a vessel.' }
  ]
});

PBE6.scene('u20-20-2', {
  set: 'workbench',
  arr: 1,
  cast: {
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'abu_yasser', cam: { shot: 'wide' },
      en: 'Read me steps seven and eight of the press instruction.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '7 Lower the platen onto the stencil and hold for four seconds. 8 '
            + 'Warning: do not lower the platen with the guard raised.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ And in what order will somebody read those?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Seven, then eight.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ So they lower the platen and then they read the warning about '
            + 'lowering the platen. ⚠ A warning after its step is not a warning; '
            + 'it is a note for the inquiry afterwards.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is the order the machine\'s own manual uses.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'It is, and the manual is written to be complete. ⚠ A bench page is '
            + 'written to be obeyed by somebody who is reading one line at a time '
            + '— and a man working at two in the morning reads line seven, does '
            + 'it, and reads line eight.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So the warning goes first, as a step of its own.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ Before step seven, in its own line, and it is not numbered. A '
            + 'numbered warning gets ticked off as though it were work.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the difference between a warning and a caution?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ A warning is about a person and a caution is about the thing. Do '
            + 'not lower the platen with the guard raised is a warning — it is '
            + 'about a hand. ⚠ Do not run the press without the stencil seated, '
            + 'or the platen face will be marked is a caution: it costs money and '
            + 'it does not cost a finger.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Does the difference matter on a page?' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: '⚠ It matters because there must be very few warnings. This page '
            + 'has one. ⚠ A page with nine warnings on it has none, because a '
            + 'reader who steps over eight of them steps over the ninth — and the '
            + 'ninth is the hand.' }
  ]
});

PBE6.scene('u20-20-2-pair', {
  set: 'workbench',
  arr: 1,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'Nine warnings. How many are about a person?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'All of them. They are all safety.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Read me the third.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Warning: do not overload the bench.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ What happens if somebody does? With a figure.' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…It gives no figure. Nothing happens, as far as I know.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ Then it is not a warning and it is not a caution. ⚠ It is a '
            + 'sentence everybody agrees with, and the ninth line is the one '
            + 'about a hand.' }
  ]
});

PBE6.scene('u20-20-3', {
  set: 'workbench',
  arr: 2,
  cast: {
    attar: { rig: 'm-50s-b', name: 'Mr Attar', voice: 'en-US-AndrewMultilingualNeural', shirt: '#4a5a74', shirt2: '#3a4a60',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'attar', cam: { shot: 'wide' },
      en: 'Thirteen steps. Which of them, done wrong, cannot be put right afterwards?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Most of them can. A label can be peeled off. A weight can be '
            + 're-marked. The packing list can be reprinted.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'And the ones that cannot?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Step 5. Once the stencil is applied the ink is in the board, and '
            + 'a carton marked with the wrong code is scrap. We have nine of them '
            + 'in the store from January to prove it.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Anything else?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…⚠ Step 11, the seal. Once it is sealed the carton can be opened, '
            + 'but then the seal is broken and the whole point of a seal is that '
            + 'it has not been.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'So two of thirteen. ⚠ Mark those two and nothing else.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I was going to mark four. The count as well, and the packing list.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Both of those can be corrected in two minutes by anybody. ⚠ And '
            + 'a page with four marked steps has none: a reader at two in the '
            + 'morning gives extra attention about twice in a shift, and if you '
            + 'ask for it four times they will choose which two.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'They will choose the wrong two.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ They will choose the two that look difficult, and the dangerous '
            + 'step is not the difficult one. Applying a stencil is easy. ⚠ That '
            + 'is exactly why it gets done without looking.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And what do I write next to the two?' },
    { who: 'attar', cam: { shot: 'close' },
      en: '⚠ Not be careful. Write what cannot be undone. This step cannot be '
            + 'corrected later: once the stencil is applied the carton is scrap. '
            + '⚠ A reason is obeyed and an instruction to be careful is not, '
            + 'because careful is not a thing anybody can do on purpose.' }
  ]
});

PBE6.scene('u20-20-3-pair', {
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
      en: 'I am marking four: the stencil, the seal, the count and the packing list.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'The count. If it is wrong, what happens?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'We count again. Four minutes.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And the packing list?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'We reprint it. Two minutes.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Then neither is marked. ⚠ Four marked steps is none — and the '
            + 'reader will keep the two that look difficult, ⚠ which are the '
            + 'count and the packing, because they are the two longest steps on '
            + 'the page.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And the two that matter are the quickest.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ Eight seconds and four seconds. That is why they have to be '
            + 'printed differently.' }
  ]
});

PBE6.scene('u20-20-4', {
  set: 'workbench',
  arr: 0,
  cast: {
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'abu_yasser', cam: { shot: 'wide' },
      en: 'The second night, the marks were faint on about twenty cartons.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Step 7 says hold the platen for four seconds.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'He held it for about one. I watched him do three.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Did he not read the step?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'He read it and he thought four seconds was somebody being '
            + 'cautious. ⚠ He has pressed things all his life and one second is '
            + 'enough for everything he has ever pressed.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And four seconds is what the ink needs.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ Four seconds is what the ink needs on board of this thickness, '
            + 'and nothing on the page says so. ⚠ Hold for four seconds with no '
            + 'reason on it is a number somebody chose, and a man at two in the '
            + 'morning with ninety cartons to do will round it down.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So the step should say why.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ Lower the platen and hold for four seconds, so that the ink '
            + 'penetrates the board; a shorter hold gives a mark that rubs off in '
            + 'transit. ⚠ Nobody shortens a step they understand, and nobody '
            + 'understands a step with a bare number in it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Should every step have a purpose on it?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ No, and that is the other half. Put on the gloves needs no '
            + 'reason. ⚠ Put a reason on the steps people shorten — and you know '
            + 'which ones those are, because they are the ones with a time or a '
            + 'count in them.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The four seconds, the count, and the fourteen days.' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: '⚠ Every number on a page is a step somebody will round down. ⚠ A '
            + 'number with a reason behind it is an instruction; a number on its '
            + 'own is a suggestion in disguise — and the man last night was not '
            + 'being lazy, he was being sensible about a number nobody had '
            + 'explained.' }
  ]
});

PBE6.scene('u20-20-4-pair', {
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
      en: 'I am going to put a purpose on all thirteen steps.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Step 1. Put on the gloves.' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…so that your hands are protected.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Which everybody already knows, and now the reader has thirteen '
            + 'reasons to read instead of thirteen steps to do.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'So which ones?' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ The ones with a time or a count in them. Four seconds, count '
            + 'against the order, two minutes before moving.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Three of thirteen.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ Three of thirteen, because every number is a step somebody will '
            + 'round down — and nobody rounds down a glove.' }
  ]
});

PBE6.scene('u20-20-5', {
  set: 'workbench',
  arr: 1,
  cast: {
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'abu_yasser', cam: { shot: 'wide' },
      en: 'Nine of the second night\'s cartons are marked by hand.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'By hand?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'In marker pen, in his own writing, and neatly. ⚠ The stencil for '
            + 'the second code had been taken to Baghdad Street — the second '
            + 'store, which opened on 8 June — and he could not find it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And he could not telephone anybody, because it was half past two.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ So he did the only thing the page left him. The page says apply '
            + 'the stencil, and there was no stencil, and the page says nothing '
            + 'at all about what happens then.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'He should have stopped.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ Why? He had ninety cartons to do and a vessel on the 14th, and '
            + 'nothing on the page says stopping is allowed. ⚠ A page that does '
            + 'not say stop is a page that forbids stopping, to a man who has '
            + 'been given a hundred cartons and a night.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So the exception has to be written.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ Every step that can fail needs its unless, and the unless needs '
            + 'an in which case. Apply the stencil, unless the stencil for that '
            + 'code is not in the press room, in which case stop, leave the '
            + 'cartons flat and write the number on the handover note.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the nine hand-marked ones?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ They are beautiful and they are useless. A hand-written code is '
            + 'not a code for a customs purpose; it has to be the stencil. ⚠ So '
            + 'nine cartons are scrap, and the only thing he did wrong was '
            + 'something the page told him to do.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'How many steps need an unless?' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: '⚠ Ask one question of each step: what will be missing at two in '
            + 'the morning? ⚠ A stencil, a signature, a sheet of labels, a second '
            + 'person. Four steps of thirteen, and all four failed on one of the '
            + 'two nights.' }
  ]
});

PBE6.scene('u20-20-5-pair', {
  set: 'workbench',
  arr: 1,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'Step 6, the labels. ⚠ What will be missing at two in the morning?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Nothing. The labels are in the drawer.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'How many are in the drawer?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…About sixty, and the run is a hundred.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Then the branch is: unless the roll runs out, stop at the last '
            + 'full carton and write the number.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'He could cut them from a sheet.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ He did cut them from a sheet, and they are a quarter of a '
            + 'millimetre out and will not read on a scanner — which nobody at '
            + 'the bench could possibly know.' }
  ]
});

PBE6.scene('u20-20-6', {
  set: 'workbench',
  arr: 2,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'How long is it?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Two pages. Thirteen steps, one warning, two cautions, four '
            + 'branches, and the specification reference.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ One side of one sheet. What comes off?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Nothing can come off. Every line is needed.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Then something goes on the back, and you must decide what — '
            + 'because a second page is a page somebody does not turn at two in '
            + 'the morning. ⚠ They turn it on the first night and they do not '
            + 'turn it on the second.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The specification reference could go on the back.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'What is on it?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The customer\'s specification number, the revision, the date we '
            + 'received it, and who sent it.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Back. Nobody at a bench needs it and anybody with a question '
            + 'does. ⚠ What else?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The thirteen steps, the warning, the two cautions and the four '
            + 'branches have to be on the front.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Count the lines.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…Twenty-six, with the branches beside their steps rather than '
            + 'under them. ⚠ And it fits, because the branches are in the '
            + 'right-hand column and not in the sequence.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Then that is the page. Steps down the left, branches down the '
            + 'right, the warning above its step, ⚠ and nothing on the front that '
            + 'nobody needs at the bench.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the title?' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: '⚠ The title is the job and the date and the revision, and the one '
            + 'line that tells somebody what this page is for: for one person '
            + 'working alone. If two of you are here, read branch 4 anyway. ⚠ Put '
            + 'that at the top, because the page was written for a night and it '
            + 'will be used in a day.' }
  ]
});

PBE6.scene('u20-20-6-pair', {
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
      en: 'Nothing can come off. Every line is needed.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then count them. How many lines in the sequence?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Forty, with the branches under their steps.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ And with the branches in a column beside their steps?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Twenty-six.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Then nothing comes off and it fits, and we have not argued about '
            + 'which line matters.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And the specification reference?' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ On the back. Nobody at a bench needs it and anybody with a question does.' }
  ]
});

PBE6.scene('u20-20-7', {
  set: 'workbench',
  arr: 0,
  cast: {
    lina: { rig: 'f-20s-b', name: 'Lina', voice: 'en-NZ-MollyNeural', shirt: '#8a5f7a', shirt2: '#6e4b61',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'lina', cam: { shot: 'wide' },
      en: 'May I ask something about revision 1? ⚠ I have asked four people '
            + 'who wrote it, and all four said the same thing, and all four were '
            + 'wrong.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What did they say?' },
    { who: 'lina', cam: { shot: 'mid' },
      en: '⚠ That it came from Beirut. That it was Ms Tannous\'s '
            + 'specification, translated. Abu Yasser said it, the night man said '
            + 'it, Hala said it, and Fadi said it was the customer\'s page.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I wrote it. In an afternoon, from her specification and from what '
            + 'I could remember of the bench.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: '⚠ I know. And nothing on the page says so, which is why four '
            + 'people thought it came from a customer in another country.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Does it matter who they thought wrote it, if the steps are right?' },
    { who: 'lina', cam: { shot: 'mid' },
      en: '⚠ It is the whole of it. The step that produced nine scrap cartons '
            + 'was apply the stencil, with no branch. ⚠ Abu Yasser read that '
            + 'line, saw that there was no stencil, and did not stop — and when I '
            + 'asked him why, he said: it is the customer\'s page.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So he thought the line could not be wrong.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: '⚠ He thought the line could not be argued with. ⚠ A page with '
            + 'nobody\'s name on it is read as a page from somebody too senior to '
            + 'question, and at two in the morning that is a specification from a '
            + 'buyer in Beirut.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And with my name on it?' },
    { who: 'lina', cam: { shot: 'mid' },
      en: '⚠ Then it is a page from the administration office, written in an '
            + 'afternoon by somebody who has never run the press — and that is a '
            + 'page a man at a bench will argue with at seven the next morning, '
            + 'which is all I want.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What would you put at the top?' },
    { who: 'lina', cam: { shot: 'mid' },
      en: '⚠ Issued by the administration office. N. Mansour, 1 April, rev 2. '
            + 'Written from the customer\'s specification and from the first-off '
            + 'report of 27 March. Tell me what is wrong with it. ⚠ Five lines, '
            + 'and the last one is the one that does the work.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the customer\'s specification stays on the back.' },
    { who: 'lina', cam: { shot: 'close' },
      en: '⚠ On the back, with its number and its date — so that the two '
            + 'things are separable. ⚠ What she requires, and what we have '
            + 'decided to do about it, are not the same document, and for two '
            + 'months they have been the same page.' }
  ]
});

PBE6.scene('u20-20-7-pair', {
  set: 'workbench',
  arr: 0,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'Where do you think the stock-take instruction came from?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Head office. Or the auditors.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And who signed it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Nobody. There is no name on it anywhere.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ So who wrote it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I think it was Nadia, about four years ago, because the '
            + 'handwriting on the original was hers.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ And she sits eleven metres from you and has never been asked about it.' }
  ]
});

PBE6.scene('u20-20-7-b', {
  set: 'workbench',
  arr: 0,
  cast: {
    lina: { rig: 'f-20s-b', name: 'Lina', voice: 'en-NZ-MollyNeural', shirt: '#8a5f7a', shirt2: '#6e4b61',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'lina', cam: { shot: 'wide' },
      en: 'I asked four people who wrote revision 1. All four said it came '
            + 'from Beirut — that it was Ms Tannous\'s specification, translated.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I wrote it, in an afternoon, from her specification and from what '
            + 'I could remember of the bench.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'I know. And nothing on the page says so. The step that produced '
            + 'nine scrap cartons was apply the stencil, with no branch, and when '
            + 'I asked Abu Yasser why he did not stop, he said: it is the '
            + 'customer\'s page.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So he thought the line could not be wrong.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'He thought it could not be argued with. A page with nobody\'s name '
            + 'on it is read as a page from somebody too senior to question.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What would you put at the top?' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'Issued by the administration office. N. Mansour, 1 April, revision '
            + '2. Written from the customer\'s specification and from the '
            + 'first-off report of 27 March. Tell me what is wrong with it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the specification itself?' },
    { who: 'lina', cam: { shot: 'close' },
      en: 'On the back, with its number and its date, so that the two are '
            + 'separable. What she requires and what we have decided to do about '
            + 'it are not the same document.' }
  ]
});
