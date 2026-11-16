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
    { who: 'nabil', cam: { shot: 'mid' }, en: 'Right, let’s check the fluids.',
      ar: 'حسنًا، لنفحص السوائل.' },
    { who: 'nabil', en: 'First, I check the engine oil with the dipstick.',
      ar: 'أولًا، أفحص زيت المحرك بمقياس الزيت.',
      card: { img: 'oil', en: 'engine oil — it keeps the engine parts moving smoothly', ar: 'زيت المحرك: يبقي أجزاء المحرك تتحرك بسلاسة' } },
    { who: 'nabil', en: 'There is enough oil, good.',
      ar: 'الزيت كافٍ، جيد.' },
    { who: 'nabil', en: 'Now the coolant — hmm, there isn’t much coolant, so I’ll top it up.',
      ar: 'الآن سائل التبريد — هممم، ليس هناك الكثير منه، سأضيف إليه.',
      card: { img: 'coolant', en: 'coolant — a liquid that keeps the engine from getting too hot', ar: 'سائل التبريد: يمنع المحرك من السخونة الزائدة' } },
    { who: 'nabil', en: 'Is there any brake fluid?',
      ar: 'هل يوجد سائل فرامل؟',
      card: { img: 'brakes', en: 'brake fluid — it makes the brakes work', ar: 'سائل الفرامل: هو ما يجعل الفرامل تعمل' } },
    { who: 'nabil', en: 'Yes, the level is fine.',
      ar: 'نعم، المستوى جيد.' },
    { who: 'nabil', en: 'Finally, the washer fluid is low, so I’ll add some.',
      ar: 'وأخيرًا، سائل غسل الزجاج منخفض، سأضيف قليلًا.' },
    { who: 'nabil', en: 'Always check the fluids at every service.',
      ar: 'افحص السوائل دائمًا في كل صيانة.' }
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
    { who: 'nabil', cam: { shot: 'mid' }, en: 'Tarek, are there any oil filters in the store?',
      ar: 'طارق، هل يوجد أي فلاتر زيت في المخزن؟' },
    { who: 'tarek', en: 'Let me check. There are three oil filters, but there aren’t any air filters.',
      ar: 'دعني أتحقق. يوجد ثلاثة فلاتر زيت، لكن لا يوجد أي فلاتر هواء.',
      card: { img: 'air filter', en: 'air filter — it cleans the air going into the engine', ar: 'فلتر الهواء: ينظّف الهواء الداخل إلى المحرك' } },
    { who: 'nabil', en: 'How much coolant is there?',
      ar: 'كم لدينا من سائل التبريد؟',
      card: { img: 'coolant', en: 'coolant — a liquid that keeps the engine from getting too hot', ar: 'سائل التبريد: يمنع المحرك من السخونة الزائدة' } },
    { who: 'tarek', en: 'There isn’t much — only one bottle.',
      ar: 'ليس كثيرًا — عبوة واحدة فقط.' },
    { who: 'nabil', en: 'OK. Please order some air filters and more coolant.',
      ar: 'حسنًا. أرجو أن تطلب بعض فلاتر الهواء ومزيدًا من سائل التبريد.' },
    { who: 'tarek', en: 'Yes, Ustaz. I’ll tell Maher.',
      ar: 'حاضر يا أستاذ. سأخبر ماهر.' }
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
        + 'five services and two repairs. Nabil, how are the fluids?',
      ar: 'صباح الخير. قبل أن نبدأ، لنفحص المخزون. أمامنا يوم مزدحم: خمس صيانات '
        + 'وتصليحان. نبيل، كيف حال السوائل؟' },
    { who: 'nabil', en: 'There is plenty of oil, but there isn’t much coolant, and there aren’t '
        + 'many brake-fluid bottles.',
      ar: 'يوجد زيت وفير، لكن ليس هناك الكثير من سائل التبريد، وليس هناك عبوات كثيرة '
        + 'من سائل الفرامل.',
      card: { img: 'coolant', en: 'coolant — a liquid that keeps the engine from getting too hot', ar: 'سائل التبريد: يمنع المحرك من السخونة الزائدة' } },
    { who: 'maher', en: 'OK. Tarek, please order some coolant and brake fluid today. We also need '
        + 'air filters — there aren’t any left. Lina, is the diagnostic computer '
        + 'working?',
      ar: 'حسنًا. طارق، اطلب اليوم بعض سائل التبريد وسائل الفرامل. ونحتاج أيضًا إلى '
        + 'فلاتر هواء — لم يبقَ منها شيء. لينا، هل حاسوب التشخيص يعمل؟',
      card: { img: 'brakes', en: 'brake fluid — it makes the brakes work', ar: 'سائل الفرامل: هو ما يجعل الفرامل تعمل' } },
    { who: 'lina', en: 'Yes, it’s fine.',
      ar: 'نعم، إنه بخير.' },
    { who: 'maher', en: 'Good. Remember, we can’t service a car without the right parts and fluids, '
        + 'so we always check the stock first.',
      ar: 'جيد. تذكّروا أننا لا نستطيع صيانة سيارة بلا القطع والسوائل الصحيحة، لذلك '
        + 'نفحص المخزون أولًا دائمًا.' }
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
    { who: 'nabil', cam: { shot: 'mid' }, en: 'There isn’t much coolant, and there aren’t any air filters.',
      ar: 'ليس هناك الكثير من سائل التبريد، ولا يوجد أي فلاتر هواء.',
      card: { img: 'coolant', en: 'coolant — a liquid that keeps the engine from getting too hot', ar: 'سائل التبريد: يمنع المحرك من السخونة الزائدة' } },
    { who: 'maher', en: 'How many oil filters are there?',
      ar: 'كم فلتر زيت يوجد؟' },
    { who: 'nabil', en: 'There are only two.',
      ar: 'يوجد اثنان فقط.' },
    { who: 'maher', en: 'OK, please order more.',
      ar: 'حسنًا، اطلب المزيد من فضلك.' }
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
        + 'we have?',
      ar: 'نبيل، لنفحص المخزون قبل وصول الزبائن. كم لدينا من الزيت؟' },
    { who: 'nabil', en: 'There is plenty of oil — about ten litres.',
      ar: 'يوجد زيت وفير — نحو عشرة لترات.' },
    { who: 'maher', en: 'Good. How many oil filters are there?',
      ar: 'جيد. وكم فلتر زيت يوجد؟' },
    { who: 'nabil', en: 'There are only two left.',
      ar: 'لم يبقَ سوى اثنين.' },
    { who: 'maher', en: 'That isn’t many. We have five services today. Please order ten.',
      ar: 'هذا ليس كثيرًا. لدينا خمس صيانات اليوم. اطلب عشرة من فضلك.' },
    { who: 'nabil', en: 'And there isn’t much coolant — only one bottle.',
      ar: 'وليس هناك الكثير من سائل التبريد — عبوة واحدة فقط.',
      card: { img: 'coolant', en: 'coolant — a liquid that keeps the engine from getting too hot', ar: 'سائل التبريد: يمنع المحرك من السخونة الزائدة' } },
    { who: 'maher', en: 'Order some coolant too. We can’t service a car without the right parts.',
      ar: 'اطلب سائل تبريد أيضًا. لا نستطيع صيانة سيارة بلا القطع الصحيحة.' }
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
    { who: 'maher', cam: { shot: 'mid' }, en: 'How much oil do we have?',
      ar: 'كم لدينا من الزيت؟' },
    { who: 'nabil', en: 'There is plenty.',
      ar: 'يوجد الكثير.' },
    { who: 'maher', en: 'How many filters are there?',
      ar: 'كم فلترًا يوجد؟' },
    { who: 'nabil', en: 'Only two.',
      ar: 'اثنان فقط.' },
    { who: 'maher', en: 'Please order ten more.',
      ar: 'اطلب عشرة أخرى من فضلك.' }
  ]
});

