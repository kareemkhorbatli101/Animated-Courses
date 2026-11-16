/* Unit 7 — the scenes, generated from the dialogues the book prints as prose.
   The cast is the one fixed in art-eam-cast.js, so a character is the same person
   here as on every card and in every other unit. Arabic subtitles are not yet
   written for these lines - the player shows the English and says so.
   RESIDUALS CW. */

/* Booking a Service — Part 3 */
EAM.scene('u7-dialogue', {
  set: 'reception',
  cast: {
    rana: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.rana)),
    aboud: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.5, 0.52] }; }(EAM.art.cast.aboud))
  },
  lines: [
    { who: 'rana', cam: { shot: 'mid' }, en: 'Cham Motors, good morning.',
      ar: 'شام موتورز، صباح الخير.' },
    { who: 'aboud', en: 'Hello, I’d like to book a service.',
      ar: 'مرحباً، أريد أن أحجز موعد صيانة.' },
    { who: 'rana', en: 'Of course. I’ll book you in. Which day?',
      ar: 'بكل تأكيد، سأحجز لك. أيّ يوم تريد؟' },
    { who: 'aboud', en: 'Tuesday, if possible.',
      ar: 'الثلاثاء، إن أمكن.' },
    { who: 'rana', en: 'Tuesday is fine. We’re going to be busy, so please come at nine.',
      ar: 'الثلاثاء مناسب. سنكون مشغولين، فتعالَ في التاسعة من فضلك.' },
    { who: 'aboud', en: 'OK. How long will it take?',
      ar: 'حسناً. وكم سيستغرق الأمر؟' },
    { who: 'rana', en: 'About three hours. Your car will be ready at twelve. We’ll call you.',
      ar: 'نحو ثلاث ساعات. ستكون سيارتك جاهزة في الثانية عشرة، وسنتّصل بك.' },
    { who: 'aboud', en: 'Thank you.',
      ar: 'شكراً لك.' }
  ]
});

/* The Estimate — Part 3 */
EAM.scene('u7-dialogue2', {
  set: 'reception',
  cast: {
    rana: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.rana)),
    aboud: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.5, 0.52] }; }(EAM.art.cast.aboud))
  },
  lines: [
    { who: 'rana', cam: { shot: 'mid' }, en: 'Mr Aboud, here is the estimate for the work.',
      ar: 'سيد عبود، هذه هي الكلفة التقديرية للعمل.',
      card: { img: 'estimate', en: 'estimate — a paper that shows how much the work will cost', ar: 'الكلفة التقديرية: ورقة تبيّن كم سيكلّف العمل' } },
    { who: 'aboud', en: 'How much is it?',
      ar: 'وكم تبلغ؟' },
    { who: 'rana', en: 'The service and the brake pads are 300. If you approve, we’ll order the '
        + 'pads today, and they’re going to arrive tomorrow.',
      ar: 'الصيانة وفحمات الفرامل بثلاث مئة. إن وافقتَ سنطلب الفحمات اليوم، وهي ستصل '
        + 'غداً.' },
    { who: 'aboud', en: 'And when will the car be ready?',
      ar: 'ومتى تكون السيارة جاهزة؟' },
    { who: 'rana', en: 'If the parts come tomorrow, the car will be ready by Thursday. We’ll take '
        + 'a small deposit now, and you’ll pay the rest at handover.',
      ar: 'إذا وصلت القطع غداً فستكون السيارة جاهزة يوم الخميس. سنأخذ عربوناً صغيراً '
        + 'الآن، وتدفع الباقي عند التسليم.',
      card: { img: 'deposit', en: 'deposit — money paid first, before the work', ar: 'العربون: مال يُدفع أولاً، قبل العمل' } },
    { who: 'aboud', en: 'That’s fine. Here’s the deposit.',
      ar: 'لا مشكلة. هذا هو العربون.' }
  ]
});

/* Planning the Week — Part 3 */
EAM.scene('u7-dialogue3', {
  set: 'workshop',
  cast: {
    maher: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.maher))
  },
  lines: [
    { who: 'maher', cam: { shot: 'mid' }, en: 'Let’s plan the week.',
      ar: 'لنخطّط للأسبوع.' },
    { who: 'maher', en: 'On Monday, we’re going to service four cars.',
      ar: 'يوم الاثنين سنصون أربع سيارات.' },
    { who: 'maher', en: 'On Tuesday, Mr Aboud’s car is coming in at nine for a full service.',
      ar: 'يوم الثلاثاء تأتي سيارة السيد عبود في التاسعة لصيانة كاملة.' },
    { who: 'maher', en: 'On Wednesday, a big job is arriving — a van with a gearbox problem, so '
        + 'Lina is diagnosing it first.',
      ar: 'يوم الأربعاء يصل عمل كبير: شاحنة صغيرة فيها مشكلة في علبة التروس، ولينا '
        + 'ستشخّصها أولاً.' },
    { who: 'maher', en: 'We’re waiting for two parts; they’re going to arrive on Thursday, so we’ll '
        + 'finish that job on Friday.',
      ar: 'ننتظر قطعتين، وهما ستصلان يوم الخميس، فننهي ذلك العمل يوم الجمعة.' },
    { who: 'maher', en: 'Rana, please call each customer with their ready time.',
      ar: 'رنا، اتّصلي بكل عميل من فضلك وأخبريه بوقت تسليم سيارته.',
      card: { img: 'ready time', en: 'ready time — when the car will be finished', ar: 'وقت الجهوزية: الوقت الذي تكون السيارة فيه جاهزة' } },
    { who: 'maher', en: 'Tarek, you’ll collect the parts each morning.',
      ar: 'طارق، أنت ستستلم القطع كل صباح.',
      card: { img: 'collect', en: 'collect — to come and take the finished car away', ar: 'استلام السيارة: أن تأتي وتأخذ السيارة الجاهزة' } },
    { who: 'maher', en: 'Remember: we always give an estimate before we start, and we always call '
        + 'the customer at handover.',
      ar: 'تذكّروا: نعطي الكلفة التقديرية قبل أن نبدأ دائماً، ونتّصل بالعميل عند '
        + 'التسليم دائماً.',
      card: { img: 'estimate', en: 'estimate — a paper that shows how much the work will cost', ar: 'الكلفة التقديرية: ورقة تبيّن كم سيكلّف العمل' } },
    { who: 'maher', en: 'A clear plan means no surprises.',
      ar: 'الخطة الواضحة تعني ألّا مفاجآت.' }
  ]
});

/* Booking Role Play — Part 4 */
EAM.scene('u7-dialogue4', {
  set: 'reception',
  cast: {
    rana: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.rana)),
    aboud: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.5, 0.52] }; }(EAM.art.cast.aboud))
  },
  lines: [
    { who: 'rana', cam: { shot: 'mid' }, en: 'I’ll book you in for Tuesday at nine.',
      ar: 'سأحجز لك يوم الثلاثاء في التاسعة.' },
    { who: 'aboud', en: 'How long will it take?',
      ar: 'وكم سيستغرق الأمر؟' },
    { who: 'rana', en: 'About three hours. Your car will be ready at twelve.',
      ar: 'نحو ثلاث ساعات. ستكون سيارتك جاهزة في الثانية عشرة.' },
    { who: 'aboud', en: 'And the price?',
      ar: 'وماذا عن السعر؟' },
    { who: 'rana', en: 'I’ll give you an estimate now.',
      ar: 'سأعطيك الكلفة التقديرية الآن.',
      card: { img: 'estimate', en: 'estimate — a paper that shows how much the work will cost', ar: 'الكلفة التقديرية: ورقة تبيّن كم سيكلّف العمل' } }
  ]
});

/* Manager Dialogue — Part 7 */
EAM.scene('u7-dialogue5', {
  set: 'reception',
  cast: {
    maher: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.maher)),
    rana: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.5, 0.52] }; }(EAM.art.cast.rana))
  },
  lines: [
    { who: 'maher', cam: { shot: 'mid' }, en: 'Rana, we have a big job this week — a van with a gearbox problem.',
      ar: 'رنا، لدينا عمل كبير هذا الأسبوع: شاحنة صغيرة فيها مشكلة في علبة التروس.' },
    { who: 'rana', en: 'When is it coming in?',
      ar: 'ومتى تأتي؟' },
    { who: 'maher', en: 'On Wednesday. Lina is going to diagnose it first. We’re waiting for two parts.',
      ar: 'يوم الأربعاء. لينا ستشخّصها أولاً، ونحن ننتظر قطعتين.' },
    { who: 'rana', en: 'When will they arrive?',
      ar: 'ومتى تصلان؟' },
    { who: 'maher', en: 'They’re going to arrive on Thursday, so we’ll finish on Friday. Please '
        + 'give the customer a realistic ready time — Friday afternoon.',
      ar: 'ستصلان يوم الخميس، فننهي العمل يوم الجمعة. أعطي العميل وقتاً واقعياً '
        + 'للتسليم من فضلك: بعد ظهر الجمعة.',
      card: { img: 'ready time', en: 'ready time — when the car will be finished', ar: 'وقت الجهوزية: الوقت الذي تكون السيارة فيه جاهزة' } },
    { who: 'rana', en: 'I’ll call him now. And a courtesy car?',
      ar: 'سأتّصل به الآن. وماذا عن سيارة بديلة؟',
      card: { img: 'courtesy car', en: 'courtesy car — a car the garage lends the customer', ar: 'السيارة البديلة: سيارة تُعيرها الورشة للعميل' } },
    { who: 'maher', en: 'Yes, offer him one; the job will take three days.',
      ar: 'نعم، اعرضي عليه واحدة؛ فالعمل سيستغرق ثلاثة أيام.' },
    { who: 'rana', en: 'I’ll arrange it.',
      ar: 'سأرتّب ذلك.' }
  ]
});

/* Role-Play — Scheduling the Week — Part 7 */
EAM.scene('u7-dialogue6', {
  set: 'reception',
  cast: {
    maher: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.maher)),
    rana: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.5, 0.52] }; }(EAM.art.cast.rana))
  },
  lines: [
    { who: 'maher', cam: { shot: 'mid' }, en: 'The van is coming in on Wednesday, and Lina is going to diagnose it.',
      ar: 'الشاحنة الصغيرة تأتي يوم الأربعاء، ولينا ستشخّصها.' },
    { who: 'rana', en: 'When will the parts arrive?',
      ar: 'ومتى تصل القطع؟' },
    { who: 'maher', en: 'On Thursday, so we’ll finish on Friday.',
      ar: 'يوم الخميس، فننهي العمل يوم الجمعة.' },
    { who: 'rana', en: 'I’ll call the customer and offer a courtesy car.',
      ar: 'سأتّصل بالعميل وأعرض عليه سيارة بديلة.',
      card: { img: 'courtesy car', en: 'courtesy car — a car the garage lends the customer', ar: 'السيارة البديلة: سيارة تُعيرها الورشة للعميل' } }
  ]
});

