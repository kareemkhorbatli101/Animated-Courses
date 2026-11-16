/* Unit 9 — the scenes, generated from the dialogues the book prints as prose.
   The cast is the one fixed in art-eam-cast.js, so a character is the same person
   here as on every card and in every other unit. Arabic subtitles are not yet
   written for these lines - the player shows the English and says so.
   RESIDUALS CW. */

/* Finding the Fault — Part 3 */
EAM.scene('u9-dialogue', {
  set: 'workshop',
  cast: {
    nabil: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.nabil)),
    lina: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.5, 0.52] }; }(EAM.art.cast.lina))
  },
  lines: [
    { who: 'nabil', cam: { shot: 'mid' }, en: 'Lina, what’s the symptom?',
      ar: 'لينا، ما هي العلامة الظاهرة؟',
      card: { img: 'symptom', en: 'symptom — a sign that something is wrong', ar: 'العَرَض: علامة تدلّ على وجود خلل' } },
    { who: 'lina', en: 'There’s a warning light and a strange noise from the engine.',
      ar: 'هناك مصباح تحذير مضاء وصوت غريب من المحرك.',
      card: { img: 'warning light', en: 'warning light — a light on the dashboard that shows a problem', ar: 'مصباح التحذير: مصباح في لوحة العدّادات يشير إلى مشكلة' } },
    { who: 'nabil', en: 'Have you diagnosed it yet?',
      ar: 'هل شخّصتِ العطل بعد؟' },
    { who: 'lina', en: 'Yes. I connected the computer an hour ago. It’s a sensor.',
      ar: 'نعم. وصّلتُ الحاسوب قبل ساعة. العطل في حسّاس.' },
    { who: 'nabil', en: 'Have you checked the wiring too?',
      ar: 'وهل فحصتِ الأسلاك أيضاً؟' },
    { who: 'lina', en: 'I checked it this morning — it’s fine. The sensor has failed.',
      ar: 'فحصتُها هذا الصباح، وهي سليمة. الحسّاس هو الذي تعطّل.' },
    { who: 'nabil', en: 'Good work. Replace the sensor, then road-test it again.',
      ar: 'عمل جيد. استبدلي الحسّاس، ثم جرّبي السيارة على الطريق مرة أخرى.',
      card: { img: 'replace', en: 'replace — to put in a new part', ar: 'الاستبدال: أن تضع قطعة جديدة' } },
    { who: 'lina', en: 'I’ve already ordered the part.',
      ar: 'لقد طلبتُ القطعة سابقاً.' }
  ]
});

/* A Comeback — Part 3 */
EAM.scene('u9-dialogue2', {
  set: 'reception',
  cast: {
    aboud: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.aboud)),
    rana: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.5, 0.52] }; }(EAM.art.cast.rana))
  },
  lines: [
    { who: 'aboud', cam: { shot: 'mid' }, en: 'Hello, I brought my car in last week, but the noise has come back.',
      ar: 'مرحباً، أحضرتُ سيارتي الأسبوع الماضي، لكن الصوت عاد.' },
    { who: 'rana', en: 'I’m sorry to hear that. What did we do last week?',
      ar: 'يُؤسفني ذلك. ماذا فعلنا الأسبوع الماضي؟' },
    { who: 'aboud', en: 'You replaced the brake pads.',
      ar: 'استبدلتم فحمات الفرامل.' },
    { who: 'rana', en: 'And the noise has returned?',
      ar: 'وقد عاد الصوت؟' },
    { who: 'aboud', en: 'Yes, the same noise.',
      ar: 'نعم، الصوت نفسه.' },
    { who: 'rana', en: 'Then it’s a comeback, and it’s under our guarantee. You don’t have to pay. '
        + 'Have you driven it far since the repair?',
      ar: 'إذاً هي عودة بالعطل نفسه، وهي مشمولة بضماننا. لستَ مُلزَماً بالدفع. هل '
        + 'قدتَها مسافة طويلة منذ الإصلاح؟',
      card: { img: 'repair', en: 'repair — to fix a fault', ar: 'الإصلاح: أن تُصلح الخلل' } },
    { who: 'aboud', en: 'Only in the city.',
      ar: 'في المدينة فقط.' },
    { who: 'rana', en: 'OK. We’ll diagnose it again today, for free.',
      ar: 'حسناً. سنشخّصها مرة أخرى اليوم، مجاناً.',
      card: { img: 'diagnose', en: 'diagnose — to find out what is wrong', ar: 'التشخيص: أن تعرف ما هو الخلل' } }
  ]
});

/* The Week’s Repairs — Part 3 */
EAM.scene('u9-dialogue3', {
  set: 'workshop',
  cast: {
    maher: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.maher)),
    lina: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.5, 0.52] }; }(EAM.art.cast.lina))
  },
  lines: [
    { who: 'maher', cam: { shot: 'mid' }, en: 'Let’s look at this week’s repairs. On Monday, Lina diagnosed three cars, '
        + 'and we fixed them all. On Tuesday, we replaced a water pump under '
        + 'warranty. Yesterday, a car came back — a comeback — with the same noise '
        + 'from last week. Have we found the cause?',
      ar: 'لننظر في إصلاحات هذا الأسبوع. يوم الاثنين شخّصت لينا ثلاث سيارات، '
        + 'وأصلحناها جميعاً. ويوم الثلاثاء استبدلنا مضخة ماء تحت الضمان. وأمس عادت '
        + 'سيارة بالصوت نفسه الذي كان الأسبوع الماضي. فهل وجدنا السبب؟',
      card: { img: 'repair', en: 'repair — to fix a fault', ar: 'الإصلاح: أن تُصلح الخلل' } },
    { who: 'lina', en: 'Yes, I diagnosed it this morning. The first repair was fine, but a second '
        + 'part has failed.',
      ar: 'نعم، شخّصتُها هذا الصباح. الإصلاح الأول كان سليماً، لكن قطعة ثانية قد تعطّلت.' },
    { who: 'maher', en: 'Good. We’ll fix it for free, of course, because it came back so soon. '
        + 'Remember, a comeback is not always a mistake, but we must always find the '
        + 'real cause. Have you all road-tested your cars today? A car mustn’t leave '
        + 'until the fault is truly gone.',
      ar: 'جيد. سنُصلحها مجاناً بالطبع، لأنها عادت بعد وقت قصير. وتذكّروا: العودة '
        + 'بالعطل ليست خطأً دائماً، لكن يجب أن نجد السبب الحقيقي دائماً. هل جرّبتم '
        + 'جميعاً سياراتكم على الطريق اليوم؟ يُمنع أن تخرج سيارة قبل أن يزول العطل '
        + 'فعلاً.',
      card: { img: 'comeback', en: 'comeback — when a car returns with the same fault', ar: 'العودة بالعطل: أن تعود السيارة بالخلل نفسه' } }
  ]
});

/* The Comeback Role Play — Part 4 */
EAM.scene('u9-dialogue4', {
  set: 'reception',
  cast: {
    aboud: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.aboud)),
    rana: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.5, 0.52] }; }(EAM.art.cast.rana))
  },
  lines: [
    { who: 'aboud', cam: { shot: 'mid' }, en: 'I brought my car last week, but the noise has come back.',
      ar: 'أحضرتُ سيارتي الأسبوع الماضي، لكن الصوت عاد.' },
    { who: 'rana', en: 'I’m sorry. What did we do last week?',
      ar: 'أعتذر. ماذا فعلنا الأسبوع الماضي؟' },
    { who: 'aboud', en: 'You replaced the pads.',
      ar: 'استبدلتم الفحمات.' },
    { who: 'rana', en: 'It’s a comeback, so you don’t have to pay. We’ll diagnose it again today.',
      ar: 'هي عودة بالعطل نفسه، فلستَ مُلزَماً بالدفع. سنشخّصها مرة أخرى اليوم.',
      card: { img: 'diagnose', en: 'diagnose — to find out what is wrong', ar: 'التشخيص: أن تعرف ما هو الخلل' } }
  ]
});

/* Manager Dialogue — Part 7 */
EAM.scene('u9-dialogue5', {
  set: 'workshop',
  cast: {
    maher: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.maher)),
    lina: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.5, 0.52] }; }(EAM.art.cast.lina))
  },
  lines: [
    { who: 'maher', cam: { shot: 'mid' }, en: 'Lina, Mr Aboud’s car has come back with the same noise. Have you diagnosed it?',
      ar: 'لينا، عادت سيارة السيد عبود بالصوت نفسه. هل شخّصتِها؟' },
    { who: 'lina', en: 'Yes, I checked it this morning.',
      ar: 'نعم، فحصتُها هذا الصباح.' },
    { who: 'maher', en: 'What did we do last week?',
      ar: 'ماذا فعلنا الأسبوع الماضي؟' },
    { who: 'lina', en: 'We replaced the brake pads. That repair was correct.',
      ar: 'استبدلنا فحمات الفرامل، وكان ذلك الإصلاح صحيحاً.',
      card: { img: 'repair', en: 'repair — to fix a fault', ar: 'الإصلاح: أن تُصلح الخلل' } },
    { who: 'maher', en: 'So why has the noise come back?',
      ar: 'فلماذا عاد الصوت إذاً؟' },
    { who: 'lina', en: 'A different part has failed — a small clip near the pads. It wasn’t the pads.',
      ar: 'تعطّلت قطعة أخرى: مِشبك صغير قريب من الفحمات. لم تكن الفحمات هي السبب.' },
    { who: 'maher', en: 'I see. It’s a comeback, so we fix it for free. Have you ordered the clip?',
      ar: 'فهمت. هي عودة بالعطل نفسه، فنُصلحها مجاناً. هل طلبتِ المِشبك؟',
      card: { img: 'comeback', en: 'comeback — when a car returns with the same fault', ar: 'العودة بالعطل: أن تعود السيارة بالخلل نفسه' } },
    { who: 'lina', en: 'Yes, it arrived an hour ago. I’ll fit it and road-test the car again.',
      ar: 'نعم، وصل قبل ساعة. سأُركّبه وأجرّب السيارة على الطريق مرة أخرى.',
      card: { img: 'road-test', en: 'road-test — to drive the car again, to check the fault has gone', ar: 'تجربة الطريق: أن تقود السيارة مرة أخرى للتأكد من زوال العطل' } },
    { who: 'maher', en: 'Good. Let’s make sure it doesn’t come back a third time.',
      ar: 'جيد. لنتأكّد من أنها لا تعود مرة ثالثة.' }
  ]
});

/* Role-Play — Handling the Comeback — Part 7 */
EAM.scene('u9-dialogue6', {
  set: 'workshop',
  cast: {
    maher: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.maher)),
    lina: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.5, 0.52] }; }(EAM.art.cast.lina))
  },
  lines: [
    { who: 'maher', cam: { shot: 'mid' }, en: 'Have you diagnosed the comeback?',
      ar: 'هل شخّصتِ سبب العودة؟',
      card: { img: 'comeback', en: 'comeback — when a car returns with the same fault', ar: 'العودة بالعطل: أن تعود السيارة بالخلل نفسه' } },
    { who: 'lina', en: 'Yes. We replaced the pads last week, but a small clip has failed.',
      ar: 'نعم. استبدلنا الفحمات الأسبوع الماضي، لكن مِشبكاً صغيراً قد تعطّل.' },
    { who: 'maher', en: 'It’s a comeback, so we fix it for free. Have you ordered the clip?',
      ar: 'هي عودة بالعطل نفسه، فنُصلحها مجاناً. هل طلبتِ المِشبك؟' },
    { who: 'lina', en: 'It arrived an hour ago.',
      ar: 'وصل قبل ساعة.' }
  ]
});

