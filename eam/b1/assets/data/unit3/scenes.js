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
    { who: 'nabil', cam: { shot: 'mid' }, en: 'Listen, everyone, before we start.',
      ar: 'اسمعوا جميعًا قبل أن نبدأ.' },
    { who: 'nabil', en: 'First, always wear your safety glasses and gloves.',
      ar: 'أولًا، البسوا دائمًا نظارات السلامة والقفازات.' },
    { who: 'nabil', en: 'Then keep your area clean — no oil or rags on the floor.',
      ar: 'ثم حافظوا على نظافة مكان عملكم — لا زيت ولا خِرَق على الأرض.' },
    { who: 'nabil', en: 'When you lift a car, always chock the wheels first, and always use axle '
        + 'stands.',
      ar: 'عند رفع السيارة، ضعوا الأسافين تحت العجلات أولًا دائمًا، واستعملوا حوامل '
        + 'المحاور دائمًا.' },
    { who: 'nabil', en: 'Never work under a car on a jack alone.',
      ar: 'لا تعمل أبدًا تحت سيارة مرفوعة على الكريك وحده.' },
    { who: 'nabil', en: 'If you smell fuel, stop and tell me.',
      ar: 'إذا شممتم رائحة وقود، توقفوا وأخبروني.' },
    { who: 'nabil', en: 'Safety first, every day.',
      ar: 'السلامة أولًا، كل يوم.' }
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
    { who: 'tarek', cam: { shot: 'mid' }, en: 'Ustaz, where is the torque wrench?',
      ar: 'أستاذ، أين مفتاح العزم؟' },
    { who: 'nabil', en: 'It’s on the wall, next to the socket set.',
      ar: 'على الجدار، بجانب طقم البّوز.' },
    { who: 'tarek', en: 'And the trolley jack?',
      ar: 'والرافعة المتحركة؟' },
    { who: 'nabil', en: 'It’s in the corner. But first, put on your gloves.',
      ar: 'في الزاوية. لكن أولًا، البس قفازيك.' },
    { who: 'tarek', en: 'Yes. And the axle stands?',
      ar: 'حسنًا. وحوامل المحاور؟' },
    { who: 'nabil', en: 'Under the bench. Always use two. Remember: chock the wheels first, then '
        + 'raise the car.',
      ar: 'تحت الطاولة. استعمل اثنين دائمًا. وتذكّر: ضع الأسافين تحت العجلات أولًا، '
        + 'ثم ارفع السيارة.' }
  ]
});

/* The Workshop Rules — Part 3 */
EAM.scene('u3-dialogue3', {
  set: 'workshop',
  cast: {
    maher: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.maher))
  },
  lines: [
    { who: 'maher', cam: { shot: 'mid' }, en: 'Welcome to the workshop.',
      ar: 'أهلًا بك في الورشة.' },
    { who: 'maher', en: 'We have five simple rules, and everyone follows them.',
      ar: 'لدينا خمس قواعد بسيطة، والجميع يلتزم بها.' },
    { who: 'maher', en: 'First, always wear your PPE: safety glasses, gloves, and overalls.',
      ar: 'أولًا، البس دائمًا معدات الوقاية: نظارات السلامة والقفازات وبدلة العمل.' },
    { who: 'maher', en: 'Second, keep your area clean and tidy — a tidy workshop is a safe workshop.',
      ar: 'ثانيًا، حافظ على نظافة مكانك وترتيبه — الورشة المرتبة ورشة آمنة.' },
    { who: 'maher', en: 'Third, when you lift a car, chock the wheels, then use axle stands.',
      ar: 'ثالثًا، عند رفع السيارة، ضع الأسافين تحت العجلات ثم استعمل حوامل المحاور.' },
    { who: 'maher', en: 'Never work under a car on a jack alone.',
      ar: 'لا تعمل أبدًا تحت سيارة مرفوعة على الكريك وحده.' },
    { who: 'maher', en: 'Fourth, if you are not sure, stop and ask.',
      ar: 'رابعًا، إن لم تكن متأكدًا، توقّف واسأل.' },
    { who: 'maher', en: 'Fifth, if you smell fuel or see a problem, tell me at once.',
      ar: 'خامسًا، إذا شممت رائحة وقود أو رأيت مشكلة، أخبرني فورًا.' },
    { who: 'maher', en: 'We look after each other here.',
      ar: 'نحن هنا يعتني بعضنا ببعض.' },
    { who: 'maher', en: 'A safe team is a good team.',
      ar: 'الفريق الآمن فريق جيد.' }
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
    { who: 'nabil', cam: { shot: 'mid' }, en: 'First, put on your gloves and glasses.',
      ar: 'أولًا، البس قفازيك ونظارتك.' },
    { who: 'tarek', en: 'OK.',
      ar: 'حسنًا.' },
    { who: 'nabil', en: 'Then chock the wheels before you raise the car.',
      ar: 'ثم ضع الأسافين تحت العجلات قبل أن ترفع السيارة.' },
    { who: 'tarek', en: 'And the axle stands?',
      ar: 'وحوامل المحاور؟' },
    { who: 'nabil', en: 'Always use two. Never work under a car on a jack alone.',
      ar: 'استعمل اثنين دائمًا. لا تعمل أبدًا تحت سيارة مرفوعة على الكريك وحده.' }
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
        + 'glasses, gloves, and overalls. Always wear them.',
      ar: 'طارق، اليوم هو يوم تعريفك بالورشة. أولًا، هذه معدات وقايتك: نظارات السلامة '
        + 'والقفازات وبدلة العمل. البسها دائمًا.' },
    { who: 'tarek', en: 'Yes, Ustaz.',
      ar: 'حاضر يا أستاذ.' },
    { who: 'nabil', en: 'Second, this is the tool board. Every tool has a place. After you use a '
        + 'tool, put it back.',
      ar: 'ثانيًا، هذه لوحة العدّة. لكل أداة مكانها. بعد أن تستعمل أداة، أعِدها إلى '
        + 'مكانها.' },
    { who: 'tarek', en: 'OK.',
      ar: 'حسنًا.' },
    { who: 'nabil', en: 'Third, when we lift a car, we chock the wheels, then use axle stands. '
        + 'Never work under a car on a jack alone.',
      ar: 'ثالثًا، عند رفع السيارة نضع الأسافين تحت العجلات ثم نستعمل حوامل المحاور. '
        + 'لا تعمل أبدًا تحت سيارة مرفوعة على الكريك وحده.' },
    { who: 'tarek', en: 'I understand.',
      ar: 'فهمت.' },
    { who: 'nabil', en: 'Good. If you are not sure about anything, stop and ask me. Safety first.',
      ar: 'جيد. وإن لم تكن متأكدًا من شيء، توقّف واسألني. السلامة أولًا.' }
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
    { who: 'nabil', cam: { shot: 'mid' }, en: 'First, always wear your PPE.',
      ar: 'أولًا، البس معدات الوقاية دائمًا.' },
    { who: 'tarek', en: 'Yes, Ustaz.',
      ar: 'حاضر يا أستاذ.' },
    { who: 'nabil', en: 'After you use a tool, put it back on the board.',
      ar: 'بعد أن تستعمل أداة، أعِدها إلى اللوحة.' },
    { who: 'tarek', en: 'OK. What about lifting a car?',
      ar: 'حسنًا. وماذا عن رفع السيارة؟' },
    { who: 'nabil', en: 'Chock the wheels, then use axle stands. Never work under a car on a jack '
        + 'alone.',
      ar: 'ضع الأسافين تحت العجلات، ثم استعمل حوامل المحاور. لا تعمل أبدًا تحت سيارة '
        + 'مرفوعة على الكريك وحده.' }
  ]
});

