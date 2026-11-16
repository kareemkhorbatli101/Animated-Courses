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
    { who: 'rana', cam: { shot: 'mid' }, en: 'Let me explain what happens to your car.',
      ar: 'دعني أشرح لك ما يحدث لسيارتك.' },
    { who: 'rana', en: 'First, it is booked in here at reception, and a job card is made.',
      ar: 'أولًا، تُسجَّل هنا في الاستقبال، وتُعَدّ لها بطاقة عمل.',
      card: { img: 'reception', en: 'reception — where the car is booked in and handed over', ar: 'الاستقبال: حيث تُسجَّل السيارة وتُسلَّم' } },
    { who: 'rana', en: 'Then it is taken to the workshop, where it is inspected and serviced.',
      ar: 'ثم تُنقل إلى الورشة، حيث تُفحص وتُصان.',
      card: { img: 'workshop', en: 'workshop — where the car is serviced and repaired', ar: 'الورشة: حيث تُصان السيارة وتُصلَّح' } },
    { who: 'rana', en: 'If there is a fault, it is diagnosed by our technician.',
      ar: 'وإذا كان فيها عطل، يُشخَّص على يد الفني عندنا.' },
    { who: 'rana', en: 'After the work, the car is road-tested and checked by the quality team.',
      ar: 'وبعد العمل، تُجرَّب على الطريق ويفحصها فريق الجودة.' },
    { who: 'rana', en: 'Finally, it is cleaned and handed over to you.',
      ar: 'وأخيرًا، تُنظَّف وتُسلَّم إليك.' },
    { who: 'rana', en: 'Every step is written on the job card.',
      ar: 'وكل خطوة تُدوَّن في بطاقة العمل.' }
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
    { who: 'aboud', cam: { shot: 'mid' }, en: 'Hello, is my car ready?',
      ar: 'مرحبًا، هل سيارتي جاهزة؟' },
    { who: 'rana', en: 'Not yet, but let me check. It was booked in this morning, and now it is in '
        + 'the workshop.',
      ar: 'ليس بعد، لكن دعني أتحقق. سُجِّلت هذا الصباح، وهي الآن في الورشة.',
      card: { img: 'workshop', en: 'workshop — where the car is serviced and repaired', ar: 'الورشة: حيث تُصان السيارة وتُصلَّح' } },
    { who: 'aboud', en: 'How long will it take?',
      ar: 'كم ستستغرق؟' },
    { who: 'rana', en: 'The oil is changed, and the brakes are checked now. After that, it is '
        + 'road-tested. It will be ready at three o’clock.',
      ar: 'تم تغيير الزيت، وتُفحص الفرامل الآن. وبعد ذلك تُجرَّب على الطريق. ستكون '
        + 'جاهزة في الساعة الثالثة.' },
    { who: 'aboud', en: 'Good.',
      ar: 'جيد.' },
    { who: 'rana', en: 'We’ll call you when it is handed over.',
      ar: 'سنتصل بك عند تسليمها.' }
  ]
});

/* Planning the Day — Part 3 */
EAM.scene('u5-dialogue3', {
  set: 'workshop',
  cast: {
    maher: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.maher))
  },
  lines: [
    { who: 'maher', cam: { shot: 'mid' }, en: 'Good morning.',
      ar: 'صباح الخير.' },
    { who: 'maher', en: 'Let’s plan the day.',
      ar: 'لنخطط لليوم.' },
    { who: 'maher', en: 'We have six cars.',
      ar: 'لدينا ست سيارات.' },
    { who: 'maher', en: 'Mr Aboud’s car is booked in first; it is serviced by Nabil.',
      ar: 'سيارة السيد عبود مسجَّلة أولًا؛ يصونها نبيل.' },
    { who: 'maher', en: 'The second car is a big job — the brakes are inspected and repaired by Lina.',
      ar: 'السيارة الثانية عمل كبير — تُفحص فرامِلها وتُصلَّح على يد لينا.' },
    { who: 'maher', en: 'Two more cars are serviced this morning, and two this afternoon.',
      ar: 'وتُصان سيارتان أخريان هذا الصباح، واثنتان بعد الظهر.' },
    { who: 'maher', en: 'Every car is road-tested and checked by the quality team before it is '
        + 'handed over.',
      ar: 'كل سيارة تُجرَّب على الطريق ويفحصها فريق الجودة قبل أن تُسلَّم.' },
    { who: 'maher', en: 'Tarek, the parts are collected from the store and put in each bay.',
      ar: 'طارق، القطع تُجلب من المخزن وتُوضع في كل مكان عمل.' },
    { who: 'maher', en: 'Remember: each step is written on the job card, and no car is handed over '
        + 'until it is checked.',
      ar: 'تذكّروا: كل خطوة تُدوَّن في بطاقة العمل، ولا تُسلَّم سيارة قبل أن تُفحص.' },
    { who: 'maher', en: 'A clear plan keeps the day calm.',
      ar: 'الخطة الواضحة تجعل اليوم هادئًا.' }
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
    { who: 'rana', cam: { shot: 'mid' }, en: 'First, your car is booked in and a job card is made.',
      ar: 'أولًا، تُسجَّل سيارتك وتُعَدّ لها بطاقة عمل.' },
    { who: 'aboud', en: 'Then what?',
      ar: 'ثم ماذا؟' },
    { who: 'rana', en: 'Then it is inspected and serviced.',
      ar: 'ثم تُفحص وتُصان.' },
    { who: 'aboud', en: 'And before I get it back?',
      ar: 'وقبل أن أستلمها؟' },
    { who: 'rana', en: 'It is road-tested and checked, then handed over.',
      ar: 'تُجرَّب على الطريق وتُفحص، ثم تُسلَّم.' }
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
    { who: 'maher', cam: { shot: 'mid' }, en: 'Nabil, let’s plan today. We have six cars. Which is booked in first?',
      ar: 'نبيل، لنخطط لليوم. لدينا ست سيارات. أيها المسجَّلة أولًا؟' },
    { who: 'nabil', en: 'Mr Aboud’s. It’s a normal service.',
      ar: 'سيارة السيد عبود. صيانة عادية.',
      card: { img: 'service', en: 'service — to do the regular checks and work on a car', ar: 'الصيانة الدورية: الفحوص والأعمال المنتظمة للسيارة' } },
    { who: 'maher', en: 'Good, you service that one. The second car has a brake problem, so it is '
        + 'diagnosed by Lina first.',
      ar: 'جيد، أنت تصونها. السيارة الثانية فيها مشكلة فرامل، فتُشخَّص على يد لينا أولًا.' },
    { who: 'nabil', en: 'And the other four?',
      ar: 'والأربع الأخريات؟' },
    { who: 'maher', en: 'Two are serviced this morning, two this afternoon. Every car is '
        + 'road-tested and checked before it is handed over.',
      ar: 'اثنتان تُصانان هذا الصباح واثنتان بعد الظهر. كل سيارة تُجرَّب على الطريق '
        + 'وتُفحص قبل أن تُسلَّم.' },
    { who: 'nabil', en: 'Understood. I’ll tell Tarek to collect the parts.',
      ar: 'مفهوم. سأطلب من طارق أن يجلب القطع.' },
    { who: 'maher', en: 'Good. A clear plan keeps the day calm.',
      ar: 'جيد. الخطة الواضحة تجعل اليوم هادئًا.' }
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
    { who: 'maher', cam: { shot: 'mid' }, en: 'Which car is first?',
      ar: 'أي سيارة أولًا؟' },
    { who: 'nabil', en: 'Mr Aboud’s, a normal service.',
      ar: 'سيارة السيد عبود، صيانة عادية.',
      card: { img: 'service', en: 'service — to do the regular checks and work on a car', ar: 'الصيانة الدورية: الفحوص والأعمال المنتظمة للسيارة' } },
    { who: 'maher', en: 'Good. The second car is diagnosed by Lina. Every car is checked before '
        + 'handover.',
      ar: 'جيد. السيارة الثانية تُشخَّص على يد لينا. وكل سيارة تُفحص قبل التسليم.' },
    { who: 'nabil', en: 'Understood.',
      ar: 'مفهوم.' }
  ]
});

