/* Unit 2 — the scenes, generated from the dialogues the book prints as prose.
   The cast is the one fixed in art-eam-cast.js, so a character is the same person
   here as on every card and in every other unit. Arabic subtitles are not yet
   written for these lines - the player shows the English and says so.
   RESIDUALS CW. */

/* Checking the Fluids — Part 3 */
EAM.scene('u2-dialogue', {
  set: 'workshop',
  cast: {
    nabil: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.nabil))
  },
  lines: [
    { who: 'nabil', cam: { shot: 'mid' }, en: 'Right, let’s check the fluids.' },
    { who: 'nabil', en: 'First, I check the engine oil with the dipstick.' },
    { who: 'nabil', en: 'There is enough oil, good.' },
    { who: 'nabil', en: 'Now the coolant — hmm, there isn’t much coolant, so I’ll top it up.' },
    { who: 'nabil', en: 'Is there any brake fluid?' },
    { who: 'nabil', en: 'Yes, the level is fine.' },
    { who: 'nabil', en: 'Finally, the washer fluid is low, so I’ll add some.' },
    { who: 'nabil', en: 'Always check the fluids at every service.' }
  ]
});

/* At the Parts Store — Part 3 */
EAM.scene('u2-dialogue2', {
  set: 'workshop',
  cast: {
    nabil: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.nabil)),
    tarek: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.5, 0.52] }; }(EAM.art.cast.tarek))
  },
  lines: [
    { who: 'nabil', cam: { shot: 'mid' }, en: 'Tarek, are there any oil filters in the store?' },
    { who: 'tarek', en: 'Let me check. There are three oil filters, but there aren’t any air filters.' },
    { who: 'nabil', en: 'How much coolant is there?' },
    { who: 'tarek', en: 'There isn’t much — only one bottle.' },
    { who: 'nabil', en: 'OK. Please order some air filters and more coolant.' },
    { who: 'tarek', en: 'Yes, Ustaz. I’ll tell Maher.' }
  ]
});

/* The Morning Stock Check — Part 3 */
EAM.scene('u2-dialogue3', {
  set: 'workshop',
  cast: {
    maher: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.maher)),
    nabil: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.5, 0.52] }; }(EAM.art.cast.nabil)),
    lina: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.74, 0.52] }; }(EAM.art.cast.lina))
  },
  lines: [
    { who: 'maher', cam: { shot: 'mid' }, en: 'Good morning. Before we start, let’s check the stock. We have a busy day: '
        + 'five services and two repairs. Nabil, how are the fluids?' },
    { who: 'nabil', en: 'There is plenty of oil, but there isn’t much coolant, and there aren’t '
        + 'many brake-fluid bottles.' },
    { who: 'maher', en: 'OK. Tarek, please order some coolant and brake fluid today. We also need '
        + 'air filters — there aren’t any left. Lina, is the diagnostic computer '
        + 'working?' },
    { who: 'lina', en: 'Yes, it’s fine.' },
    { who: 'maher', en: 'Good. Remember, we can’t service a car without the right parts and fluids, '
        + 'so we always check the stock first.' }
  ]
});

/* Reporting Role Play — Part 4 */
EAM.scene('u2-dialogue4', {
  set: 'workshop',
  cast: {
    nabil: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.nabil)),
    maher: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.5, 0.52] }; }(EAM.art.cast.maher))
  },
  lines: [
    { who: 'nabil', cam: { shot: 'mid' }, en: 'There isn’t much coolant, and there aren’t any air filters.' },
    { who: 'maher', en: 'How many oil filters are there?' },
    { who: 'nabil', en: 'There are only two.' },
    { who: 'maher', en: 'OK, please order more.' }
  ]
});

/* Manager Dialogue — Part 7 */
EAM.scene('u2-dialogue5', {
  set: 'workshop',
  cast: {
    maher: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.maher)),
    nabil: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.5, 0.52] }; }(EAM.art.cast.nabil))
  },
  lines: [
    { who: 'maher', cam: { shot: 'mid' }, en: 'Nabil, let’s check the stock before the customers arrive. How much oil do '
        + 'we have?' },
    { who: 'nabil', en: 'There is plenty of oil — about ten litres.' },
    { who: 'maher', en: 'Good. How many oil filters are there?' },
    { who: 'nabil', en: 'There are only two left.' },
    { who: 'maher', en: 'That isn’t many. We have five services today. Please order ten.' },
    { who: 'nabil', en: 'And there isn’t much coolant — only one bottle.' },
    { who: 'maher', en: 'Order some coolant too. We can’t service a car without the right parts.' }
  ]
});

/* Role-Play — The Stock Check — Part 7 */
EAM.scene('u2-dialogue6', {
  set: 'workshop',
  cast: {
    maher: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.maher)),
    nabil: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.5, 0.52] }; }(EAM.art.cast.nabil))
  },
  lines: [
    { who: 'maher', cam: { shot: 'mid' }, en: 'How much oil do we have?' },
    { who: 'nabil', en: 'There is plenty.' },
    { who: 'maher', en: 'How many filters are there?' },
    { who: 'nabil', en: 'Only two.' },
    { who: 'maher', en: 'Please order ten more.' }
  ]
});

