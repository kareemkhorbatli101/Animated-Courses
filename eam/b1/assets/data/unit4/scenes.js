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
    { who: 'lina', cam: { shot: 'mid' }, en: 'Let me check these tyres.',
      ar: 'دعني أفحص هذه الإطارات.' },
    { who: 'lina', en: 'The front left has good tread, about six millimetres.',
      ar: 'الأمامي الأيسر مداسه جيد، نحو ستة ميليمترات.',
      card: { img: 'millimetre', en: 'millimetre — the unit tread depth is measured in — one thousandth of a metre', ar: 'الميليمتر: وحدة قياس عمق المداس، وهي جزء من ألف من المتر' } },
    { who: 'lina', en: 'The front right is the same.',
      ar: 'والأمامي الأيمن مثله.' },
    { who: 'lina', en: 'But look — the rear left is more worn than the others, only two millimetres.',
      ar: 'لكن انظر — الخلفي الأيسر أكثر تآكلًا من البقية، ميليمتران فقط.',
      card: { img: 'worn', en: 'worn — old and used, with less tread', ar: 'متآكل: قديم ومستعمل، وقد نقص مداسه' } },
    { who: 'lina', en: 'That’s too low.',
      ar: 'هذا منخفض جدًّا.' },
    { who: 'lina', en: 'The rear right is a little better, three millimetres.',
      ar: 'الخلفي الأيمن أفضل قليلًا، ثلاثة ميليمترات.' },
    { who: 'lina', en: 'So the rear left is the most worn, and we should change it.',
      ar: 'إذن الخلفي الأيسر هو الأكثر تآكلًا، وينبغي أن نغيّره.' },
    { who: 'lina', en: 'Always compare all four.',
      ar: 'قارن الإطارات الأربعة دائمًا.' }
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
    { who: 'nabil', cam: { shot: 'mid' }, en: 'Lina, what does the report say?',
      ar: 'لينا، ماذا يقول التقرير؟' },
    { who: 'lina', en: 'The battery voltage is a little low — lower than last time.',
      ar: 'جهد البطارية منخفض قليلًا — أقل من المرة الماضية.',
      card: { img: 'voltage', en: 'voltage — the amount of electric power, in volts', ar: 'الجهد الكهربائي: مقدار الطاقة الكهربائية بالفولت' } },
    { who: 'nabil', en: 'How low?',
      ar: 'كم يبلغ؟' },
    { who: 'lina', en: '12.1 volts. The tolerance is 12.4 to 12.7.',
      ar: '12.1 فولت. والحد المسموح من 12.4 إلى 12.7.',
      card: { img: 'tolerance', en: 'tolerance — the correct level, or allowed range', ar: 'الحد المسموح: المستوى الصحيح أو المدى المقبول' } },
    { who: 'nabil', en: 'So it’s below the tolerance.',
      ar: 'إذن هو دون الحد المسموح.' },
    { who: 'lina', en: 'Yes. And the tyre pressure is fine, but the tread on the rear left is the '
        + 'most worn.',
      ar: 'نعم. وضغط الإطارات جيد، لكن مداس الإطار الخلفي الأيسر هو الأكثر تآكلًا.',
      card: { img: 'tyre pressure', en: 'tyre pressure — how hard the air pushes inside a tyre', ar: 'ضغط الإطار: مقدار دفع الهواء داخل الإطار' } },
    { who: 'nabil', en: 'OK. We’ll charge the battery and change that tyre. Good work — the numbers '
        + 'tell the story.',
      ar: 'حسنًا. سنشحن البطارية ونغيّر ذلك الإطار. عمل جيد — الأرقام تروي القصة.' }
  ]
});

/* Comparing Three Cars — Part 3 */
EAM.scene('u4-dialogue3', {
  set: 'workshop',
  cast: {
    maher: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.maher))
  },
  lines: [
    { who: 'maher', cam: { shot: 'mid' }, en: 'We have three cars to check this morning.',
      ar: 'لدينا ثلاث سيارات لفحصها هذا الصباح.' },
    { who: 'maher', en: 'Let’s compare them.',
      ar: 'لنقارن بينها.' },
    { who: 'maher', en: 'The first car, Mr Aboud’s, is in good condition.',
      ar: 'السيارة الأولى، سيارة السيد عبود، في حالة جيدة.' },
    { who: 'maher', en: 'The tyres are new, and the battery is strong.',
      ar: 'إطاراتها جديدة وبطاريتها قوية.' },
    { who: 'maher', en: 'The second car is older.',
      ar: 'السيارة الثانية أقدم.' },
    { who: 'maher', en: 'Its battery is weaker than the first, and two tyres are worn.',
      ar: 'بطاريتها أضعف من الأولى، وإطاران منها متآكلان.',
      card: { img: 'worn', en: 'worn — old and used, with less tread', ar: 'متآكل: قديم ومستعمل، وقد نقص مداسه' } },
    { who: 'maher', en: 'The third car is the oldest of the three.',
      ar: 'السيارة الثالثة هي الأقدم بين الثلاث.' },
    { who: 'maher', en: 'It has the most worn tyres and the lowest battery voltage, so it needs the '
        + 'most work.',
      ar: 'إطاراتها هي الأكثر تآكلًا وجهد بطاريتها هو الأدنى، لذا فهي تحتاج إلى أكبر '
        + 'قدر من العمل.',
      card: { img: 'voltage', en: 'voltage — the amount of electric power, in volts', ar: 'الجهد الكهربائي: مقدار الطاقة الكهربائية بالفولت' } },
    { who: 'maher', en: 'Remember: measure everything, write down the readings, and compare.',
      ar: 'تذكّروا: قيسوا كل شيء، ودوّنوا القراءات، وقارنوا.',
      card: { img: 'reading', en: 'reading — the number a tool or meter shows', ar: 'القراءة: الرقم الذي تُظهره الأداة أو العدّاد' } },
    { who: 'maher', en: 'The numbers show us which car needs the most attention, and which is the '
        + 'safest to drive.',
      ar: 'الأرقام تبيّن لنا أي سيارة تحتاج إلى أكبر اهتمام، وأيها الأكثر أمانًا في '
        + 'القيادة.' }
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
    { who: 'lina', cam: { shot: 'mid' }, en: 'The rear left is more worn than the others.',
      ar: 'الخلفي الأيسر أكثر تآكلًا من البقية.',
      card: { img: 'worn', en: 'worn — old and used, with less tread', ar: 'متآكل: قديم ومستعمل، وقد نقص مداسه' } },
    { who: 'nabil', en: 'How low?',
      ar: 'كم يبلغ؟' },
    { who: 'lina', en: 'Only two millimetres — the most worn of the four.',
      ar: 'ميليمتران فقط — الأكثر تآكلًا بين الأربعة.',
      card: { img: 'millimetre', en: 'millimetre — the unit tread depth is measured in — one thousandth of a metre', ar: 'الميليمتر: وحدة قياس عمق المداس، وهي جزء من ألف من المتر' } },
    { who: 'nabil', en: 'And the battery?',
      ar: 'والبطارية؟' },
    { who: 'lina', en: 'Lower than last time, below the tolerance.',
      ar: 'أقل من المرة الماضية، ودون الحد المسموح.',
      card: { img: 'tolerance', en: 'tolerance — the correct level, or allowed range', ar: 'الحد المسموح: المستوى الصحيح أو المدى المقبول' } }
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
    { who: 'maher', cam: { shot: 'mid' }, en: 'Lina, let’s look at this diagnostic report together. How is the battery?',
      ar: 'لينا، لننظر في تقرير التشخيص هذا معًا. كيف حال البطارية؟' },
    { who: 'lina', en: 'It’s low — 12.1 volts. The tolerance is 12.4 to 12.7, so it’s below the '
        + 'tolerance.',
      ar: 'منخفضة — 12.1 فولت. والحد المسموح من 12.4 إلى 12.7، إذن هي دون الحد.',
      card: { img: 'tolerance', en: 'tolerance — the correct level, or allowed range', ar: 'الحد المسموح: المستوى الصحيح أو المدى المقبول' } },
    { who: 'maher', en: 'And the tyres?',
      ar: 'والإطارات؟' },
    { who: 'lina', en: 'The rear left is the most worn, only two millimetres. The others are fine.',
      ar: 'الخلفي الأيسر هو الأكثر تآكلًا، ميليمتران فقط. والبقية جيدة.',
      card: { img: 'worn', en: 'worn — old and used, with less tread', ar: 'متآكل: قديم ومستعمل، وقد نقص مداسه' } },
    { who: 'maher', en: 'Is anything else outside the tolerance?',
      ar: 'هل هناك شيء آخر خارج الحد المسموح؟' },
    { who: 'lina', en: 'No, the pressure and temperature are within the limits.',
      ar: 'لا، الضغط والحرارة ضمن الحدود.',
      card: { img: 'temperature', en: 'temperature — how hot or cold something is', ar: 'الحرارة: مدى سخونة الشيء أو برودته' } },
    { who: 'maher', en: 'Good work. Charge the battery and change the rear left tyre. The report is '
        + 'clear.',
      ar: 'عمل جيد. اشحني البطارية وغيّري الإطار الخلفي الأيسر. التقرير واضح.' }
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
    { who: 'maher', cam: { shot: 'mid' }, en: 'How is the battery?',
      ar: 'كيف حال البطارية؟' },
    { who: 'lina', en: 'Below the tolerance, 12.1 volts.',
      ar: 'دون الحد المسموح، 12.1 فولت.',
      card: { img: 'tolerance', en: 'tolerance — the correct level, or allowed range', ar: 'الحد المسموح: المستوى الصحيح أو المدى المقبول' } },
    { who: 'maher', en: 'And the tyres?',
      ar: 'والإطارات؟' },
    { who: 'lina', en: 'The rear left is the most worn.',
      ar: 'الخلفي الأيسر هو الأكثر تآكلًا.',
      card: { img: 'worn', en: 'worn — old and used, with less tread', ar: 'متآكل: قديم ومستعمل، وقد نقص مداسه' } },
    { who: 'maher', en: 'Charge the battery and change that tyre.',
      ar: 'اشحني البطارية وغيّري ذلك الإطار.' }
  ]
});

