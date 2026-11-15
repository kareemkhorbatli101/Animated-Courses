/* Unit 5 — the scenes, generated from the dialogues the book prints as prose.
   The cast is the one fixed in art-eam-cast.js, so a character is the same person
   here as on every card and in every other unit. Arabic subtitles are not yet
   written for these lines - the player shows the English and says so.
   RESIDUALS CW. */

/* Explaining the Process — Part 3 */
EAM.scene('u5-dialogue', {
  set: 'reception',
  cast: {
    rana: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.rana))
  },
  lines: [
    { who: 'rana', cam: { shot: 'mid' }, en: 'Let me explain what happens to your car.' },
    { who: 'rana', en: 'First, it is booked in here at reception, and a job card is made.' },
    { who: 'rana', en: 'Then it is taken to the workshop, where it is inspected and serviced.' },
    { who: 'rana', en: 'If there is a fault, it is diagnosed by our technician.' },
    { who: 'rana', en: 'After the work, the car is road-tested and checked by the quality team.' },
    { who: 'rana', en: 'Finally, it is cleaned and handed over to you.' },
    { who: 'rana', en: 'Every step is written on the job card.' }
  ]
});

/* Where Is the Car Now? — Part 3 */
EAM.scene('u5-dialogue2', {
  set: 'reception',
  cast: {
    aboud: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.aboud)),
    rana: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.5, 0.52] }; }(EAM.art.cast.rana))
  },
  lines: [
    { who: 'aboud', cam: { shot: 'mid' }, en: 'Hello, is my car ready?' },
    { who: 'rana', en: 'Not yet, but let me check. It was booked in this morning, and now it is in '
        + 'the workshop.' },
    { who: 'aboud', en: 'How long will it take?' },
    { who: 'rana', en: 'The oil is changed, and the brakes are checked now. After that, it is '
        + 'road-tested. It will be ready at three o’clock.' },
    { who: 'aboud', en: 'Good.' },
    { who: 'rana', en: 'We’ll call you when it is handed over.' }
  ]
});

/* Planning the Day — Part 3 */
EAM.scene('u5-dialogue3', {
  set: 'workshop',
  cast: {
    maher: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.maher))
  },
  lines: [
    { who: 'maher', cam: { shot: 'mid' }, en: 'Good morning.' },
    { who: 'maher', en: 'Let’s plan the day.' },
    { who: 'maher', en: 'We have six cars.' },
    { who: 'maher', en: 'Mr Aboud’s car is booked in first; it is serviced by Nabil.' },
    { who: 'maher', en: 'The second car is a big job — the brakes are inspected and repaired by Lina.' },
    { who: 'maher', en: 'Two more cars are serviced this morning, and two this afternoon.' },
    { who: 'maher', en: 'Every car is road-tested and checked by the quality team before it is '
        + 'handed over.' },
    { who: 'maher', en: 'Tarek, the parts are collected from the store and put in each bay.' },
    { who: 'maher', en: 'Remember: each step is written on the job card, and no car is handed over '
        + 'until it is checked.' },
    { who: 'maher', en: 'A clear plan keeps the day calm.' }
  ]
});

/* Explaining the Process Role Play — Part 4 */
EAM.scene('u5-dialogue4', {
  set: 'reception',
  cast: {
    rana: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.rana)),
    aboud: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.5, 0.52] }; }(EAM.art.cast.aboud))
  },
  lines: [
    { who: 'rana', cam: { shot: 'mid' }, en: 'First, your car is booked in and a job card is made.' },
    { who: 'aboud', en: 'Then what?' },
    { who: 'rana', en: 'Then it is inspected and serviced.' },
    { who: 'aboud', en: 'And before I get it back?' },
    { who: 'rana', en: 'It is road-tested and checked, then handed over.' }
  ]
});

/* Manager Dialogue — Part 7 */
EAM.scene('u5-dialogue5', {
  set: 'workshop',
  cast: {
    maher: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.maher)),
    nabil: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.5, 0.52] }; }(EAM.art.cast.nabil))
  },
  lines: [
    { who: 'maher', cam: { shot: 'mid' }, en: 'Nabil, let’s plan today. We have six cars. Which is booked in first?' },
    { who: 'nabil', en: 'Mr Aboud’s. It’s a normal service.' },
    { who: 'maher', en: 'Good, you service that one. The second car has a brake problem, so it is '
        + 'diagnosed by Lina first.' },
    { who: 'nabil', en: 'And the other four?' },
    { who: 'maher', en: 'Two are serviced this morning, two this afternoon. Every car is '
        + 'road-tested and checked before it is handed over.' },
    { who: 'nabil', en: 'Understood. I’ll tell Tarek to collect the parts.' },
    { who: 'maher', en: 'Good. A clear plan keeps the day calm.' }
  ]
});

/* Role-Play — Planning the Schedule — Part 7 */
EAM.scene('u5-dialogue6', {
  set: 'workshop',
  cast: {
    maher: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.maher)),
    nabil: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.5, 0.52] }; }(EAM.art.cast.nabil))
  },
  lines: [
    { who: 'maher', cam: { shot: 'mid' }, en: 'Which car is first?' },
    { who: 'nabil', en: 'Mr Aboud’s, a normal service.' },
    { who: 'maher', en: 'Good. The second car is diagnosed by Lina. Every car is checked before '
        + 'handover.' },
    { who: 'nabil', en: 'Understood.' }
  ]
});

