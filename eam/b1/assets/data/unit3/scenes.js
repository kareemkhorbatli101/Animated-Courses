/* Unit 3 — the scenes, generated from the dialogues the book prints as prose.
   The cast is the one fixed in art-eam-cast.js, so a character is the same person
   here as on every card and in every other unit. Arabic subtitles are not yet
   written for these lines - the player shows the English and says so.
   RESIDUALS CW. */

/* A Safety Briefing — Part 3 */
EAM.scene('u3-dialogue', {
  set: 'workshop',
  cast: {
    nabil: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.nabil))
  },
  lines: [
    { who: 'nabil', cam: { shot: 'mid' }, en: 'Listen, everyone, before we start.' },
    { who: 'nabil', en: 'First, always wear your safety glasses and gloves.' },
    { who: 'nabil', en: 'Then keep your area clean — no oil or rags on the floor.' },
    { who: 'nabil', en: 'When you lift a car, always chock the wheels first, and always use axle '
        + 'stands.' },
    { who: 'nabil', en: 'Never work under a car on a jack alone.' },
    { who: 'nabil', en: 'If you smell fuel, stop and tell me.' },
    { who: 'nabil', en: 'Safety first, every day.' }
  ]
});

/* Where Are the Tools? — Part 3 */
EAM.scene('u3-dialogue2', {
  set: 'workshop',
  cast: {
    tarek: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.tarek)),
    nabil: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.5, 0.52] }; }(EAM.art.cast.nabil))
  },
  lines: [
    { who: 'tarek', cam: { shot: 'mid' }, en: 'Ustaz, where is the torque wrench?' },
    { who: 'nabil', en: 'It’s on the wall, next to the socket set.' },
    { who: 'tarek', en: 'And the trolley jack?' },
    { who: 'nabil', en: 'It’s in the corner. But first, put on your gloves.' },
    { who: 'tarek', en: 'Yes. And the axle stands?' },
    { who: 'nabil', en: 'Under the bench. Always use two. Remember: chock the wheels first, then '
        + 'raise the car.' }
  ]
});

/* The Workshop Rules — Part 3 */
EAM.scene('u3-dialogue3', {
  set: 'workshop',
  cast: {
    maher: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.maher))
  },
  lines: [
    { who: 'maher', cam: { shot: 'mid' }, en: 'Welcome to the workshop.' },
    { who: 'maher', en: 'We have five simple rules, and everyone follows them.' },
    { who: 'maher', en: 'First, always wear your PPE: safety glasses, gloves, and overalls.' },
    { who: 'maher', en: 'Second, keep your area clean and tidy — a tidy workshop is a safe workshop.' },
    { who: 'maher', en: 'Third, when you lift a car, chock the wheels, then use axle stands.' },
    { who: 'maher', en: 'Never work under a car on a jack alone.' },
    { who: 'maher', en: 'Fourth, if you are not sure, stop and ask.' },
    { who: 'maher', en: 'Fifth, if you smell fuel or see a problem, tell me at once.' },
    { who: 'maher', en: 'We look after each other here.' },
    { who: 'maher', en: 'A safe team is a good team.' }
  ]
});

/* Safety Instructions Role Play — Part 4 */
EAM.scene('u3-dialogue4', {
  set: 'workshop',
  cast: {
    nabil: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.nabil)),
    tarek: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.5, 0.52] }; }(EAM.art.cast.tarek))
  },
  lines: [
    { who: 'nabil', cam: { shot: 'mid' }, en: 'First, put on your gloves and glasses.' },
    { who: 'tarek', en: 'OK.' },
    { who: 'nabil', en: 'Then chock the wheels before you raise the car.' },
    { who: 'tarek', en: 'And the axle stands?' },
    { who: 'nabil', en: 'Always use two. Never work under a car on a jack alone.' }
  ]
});

/* Manager Dialogue — Part 7 */
EAM.scene('u3-dialogue5', {
  set: 'workshop',
  cast: {
    nabil: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.nabil)),
    tarek: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.5, 0.52] }; }(EAM.art.cast.tarek))
  },
  lines: [
    { who: 'nabil', cam: { shot: 'mid' }, en: 'Tarek, today is your bay induction. First, this is your PPE: safety '
        + 'glasses, gloves, and overalls. Always wear them.' },
    { who: 'tarek', en: 'Yes, Ustaz.' },
    { who: 'nabil', en: 'Second, this is the tool board. Every tool has a place. After you use a '
        + 'tool, put it back.' },
    { who: 'tarek', en: 'OK.' },
    { who: 'nabil', en: 'Third, when we lift a car, we chock the wheels, then use axle stands. '
        + 'Never work under a car on a jack alone.' },
    { who: 'tarek', en: 'I understand.' },
    { who: 'nabil', en: 'Good. If you are not sure about anything, stop and ask me. Safety first.' }
  ]
});

/* Role-Play — Inducting a New Mechanic — Part 7 */
EAM.scene('u3-dialogue6', {
  set: 'workshop',
  cast: {
    nabil: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.nabil)),
    tarek: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.5, 0.52] }; }(EAM.art.cast.tarek))
  },
  lines: [
    { who: 'nabil', cam: { shot: 'mid' }, en: 'First, always wear your PPE.' },
    { who: 'tarek', en: 'Yes, Ustaz.' },
    { who: 'nabil', en: 'After you use a tool, put it back on the board.' },
    { who: 'tarek', en: 'OK. What about lifting a car?' },
    { who: 'nabil', en: 'Chock the wheels, then use axle stands. Never work under a car on a jack '
        + 'alone.' }
  ]
});

