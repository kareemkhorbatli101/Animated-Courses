/* Unit 4 — the scenes, generated from the dialogues the book prints as prose.
   The cast is the one fixed in art-eam-cast.js, so a character is the same person
   here as on every card and in every other unit. Arabic subtitles are not yet
   written for these lines - the player shows the English and says so.
   RESIDUALS CW. */

/* Checking the Tyres — Part 3 */
EAM.scene('u4-dialogue', {
  set: 'workshop',
  cast: {
    lina: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.lina))
  },
  lines: [
    { who: 'lina', cam: { shot: 'mid' }, en: 'Let me check these tyres.' },
    { who: 'lina', en: 'The front left has good tread, about six millimetres.' },
    { who: 'lina', en: 'The front right is the same.' },
    { who: 'lina', en: 'But look — the rear left is more worn than the others, only two millimetres.' },
    { who: 'lina', en: 'That’s too low.' },
    { who: 'lina', en: 'The rear right is a little better, three millimetres.' },
    { who: 'lina', en: 'So the rear left is the most worn, and we should change it.' },
    { who: 'lina', en: 'Always compare all four.' }
  ]
});

/* The Diagnostic Report — Part 3 */
EAM.scene('u4-dialogue2', {
  set: 'workshop',
  cast: {
    nabil: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.nabil)),
    lina: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.5, 0.52] }; }(EAM.art.cast.lina))
  },
  lines: [
    { who: 'nabil', cam: { shot: 'mid' }, en: 'Lina, what does the report say?' },
    { who: 'lina', en: 'The battery voltage is a little low — lower than last time.' },
    { who: 'nabil', en: 'How low?' },
    { who: 'lina', en: '12.1 volts. The tolerance is 12.4 to 12.7.' },
    { who: 'nabil', en: 'So it’s below the tolerance.' },
    { who: 'lina', en: 'Yes. And the tyre pressure is fine, but the tread on the rear left is the '
        + 'most worn.' },
    { who: 'nabil', en: 'OK. We’ll charge the battery and change that tyre. Good work — the numbers '
        + 'tell the story.' }
  ]
});

/* Comparing Three Cars — Part 3 */
EAM.scene('u4-dialogue3', {
  set: 'workshop',
  cast: {
    maher: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.maher))
  },
  lines: [
    { who: 'maher', cam: { shot: 'mid' }, en: 'We have three cars to check this morning.' },
    { who: 'maher', en: 'Let’s compare them.' },
    { who: 'maher', en: 'The first car, Mr Aboud’s, is in good condition.' },
    { who: 'maher', en: 'The tyres are new, and the battery is strong.' },
    { who: 'maher', en: 'The second car is older.' },
    { who: 'maher', en: 'Its battery is weaker than the first, and two tyres are worn.' },
    { who: 'maher', en: 'The third car is the oldest of the three.' },
    { who: 'maher', en: 'It has the most worn tyres and the lowest battery voltage, so it needs the '
        + 'most work.' },
    { who: 'maher', en: 'Remember: measure everything, write down the readings, and compare.' },
    { who: 'maher', en: 'The numbers show us which car needs the most attention, and which is the '
        + 'safest to drive.' }
  ]
});

/* Reporting Readings Role Play — Part 4 */
EAM.scene('u4-dialogue4', {
  set: 'workshop',
  cast: {
    lina: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.lina)),
    nabil: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.5, 0.52] }; }(EAM.art.cast.nabil))
  },
  lines: [
    { who: 'lina', cam: { shot: 'mid' }, en: 'The rear left is more worn than the others.' },
    { who: 'nabil', en: 'How low?' },
    { who: 'lina', en: 'Only two millimetres — the most worn of the four.' },
    { who: 'nabil', en: 'And the battery?' },
    { who: 'lina', en: 'Lower than last time, below the tolerance.' }
  ]
});

/* Manager Dialogue — Part 7 */
EAM.scene('u4-dialogue5', {
  set: 'workshop',
  cast: {
    maher: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.maher)),
    lina: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.5, 0.52] }; }(EAM.art.cast.lina))
  },
  lines: [
    { who: 'maher', cam: { shot: 'mid' }, en: 'Lina, let’s look at this diagnostic report together. How is the battery?' },
    { who: 'lina', en: 'It’s low — 12.1 volts. The tolerance is 12.4 to 12.7, so it’s below the '
        + 'tolerance.' },
    { who: 'maher', en: 'And the tyres?' },
    { who: 'lina', en: 'The rear left is the most worn, only two millimetres. The others are fine.' },
    { who: 'maher', en: 'Is anything else outside the tolerance?' },
    { who: 'lina', en: 'No, the pressure and temperature are within the limits.' },
    { who: 'maher', en: 'Good work. Charge the battery and change the rear left tyre. The report is '
        + 'clear.' }
  ]
});

/* Role-Play — Reviewing the Report — Part 7 */
EAM.scene('u4-dialogue6', {
  set: 'workshop',
  cast: {
    maher: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.maher)),
    lina: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.5, 0.52] }; }(EAM.art.cast.lina))
  },
  lines: [
    { who: 'maher', cam: { shot: 'mid' }, en: 'How is the battery?' },
    { who: 'lina', en: 'Below the tolerance, 12.1 volts.' },
    { who: 'maher', en: 'And the tyres?' },
    { who: 'lina', en: 'The rear left is the most worn.' },
    { who: 'maher', en: 'Charge the battery and change that tyre.' }
  ]
});

