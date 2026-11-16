/* Unit 6 — the scenes, generated from the dialogues the book prints as prose.
   The cast is the one fixed in art-eam-cast.js, so a character is the same person
   here as on every card and in every other unit. Arabic subtitles are not yet
   written for these lines - the player shows the English and says so.
   RESIDUALS CW. */

/* Advising the Customer — Part 3 */
EAM.scene('u6-dialogue', {
  set: 'reception',
  cast: {
    rana: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.rana)),
    aboud: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.5, 0.52] }; }(EAM.art.cast.aboud))
  },
  lines: [
    { who: 'rana', cam: { shot: 'mid' }, en: 'Mr Aboud, we’ve finished the service. Nabil checked everything.',
      ar: 'سيد عبود، أنهينا الصيانة. نبيل فحص كل شيء.' },
    { who: 'aboud', en: 'Good. Is the car OK?',
      ar: 'جيد. هل السيارة بخير؟' },
    { who: 'rana', en: 'Mostly. But your brake pads are worn. You should change them soon.',
      ar: 'في معظمها، نعم. لكن فحمات الفرامل بالية؛ ينبغي أن تغيّرها قريباً.',
      card: { img: 'brake pads', en: 'brake pads — the parts that press to stop the car', ar: 'فحمات الفرامل: القطع التي تضغط لإيقاف السيارة' } },
    { who: 'aboud', en: 'How soon?',
      ar: 'قريباً إلى أي حدّ؟' },
    { who: 'rana', en: 'In the next month. And your air filter is dirty — shall I replace it today?',
      ar: 'في الشهر القادم. وفلتر الهواء متّسخ، فهل أستبدله اليوم؟',
      card: { img: 'air filter', en: 'air filter — it cleans the air going into the engine', ar: 'فلتر الهواء: ينقّي الهواء الداخل إلى المحرك' } },
    { who: 'aboud', en: 'Yes, please.',
      ar: 'نعم، من فضلك.' },
    { who: 'rana', en: 'Could you also bring the car back in a month for the brakes?',
      ar: 'وهل يمكنك أن تُعيد السيارة بعد شهر من أجل الفرامل؟' },
    { who: 'aboud', en: 'Of course.',
      ar: 'بكل تأكيد.' }
  ]
});

/* Booking a Service — Part 3 */
EAM.scene('u6-dialogue2', {
  set: 'reception',
  cast: {
    aboud: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.aboud)),
    rana: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.5, 0.52] }; }(EAM.art.cast.rana))
  },
  lines: [
    { who: 'aboud', cam: { shot: 'mid' }, en: 'Hello, I’d like to book a service.',
      ar: 'مرحباً، أريد أن أحجز موعد صيانة.' },
    { who: 'rana', en: 'Of course. Could you tell me the mileage?',
      ar: 'بكل تأكيد. هل تخبرني بعدد الكيلومترات المقطوعة؟',
      card: { img: 'mileage', en: 'mileage — how far the car has driven', ar: 'عدد الكيلومترات المقطوعة: المسافة التي قطعتها السيارة' } },
    { who: 'aboud', en: 'About sixty thousand kilometres.',
      ar: 'نحو ستين ألف كيلومتر.' },
    { who: 'rana', en: 'Then you’re due for a full service. Shall I book you in for Tuesday?',
      ar: 'إذاً موعد الصيانة الكاملة قد حلّ. هل أحجز لك يوم الثلاثاء؟' },
    { who: 'aboud', en: 'Yes, please. Would you also check the brakes? I hear a small noise.',
      ar: 'نعم، من فضلك. وهل تفحصون الفرامل أيضاً؟ أسمع صوتاً خفيفاً.' },
    { who: 'rana', en: 'Certainly. We’ll check them. Can you bring the car at nine?',
      ar: 'بالتأكيد، سنفحصها. هل يمكنك أن تُحضر السيارة في التاسعة؟' },
    { who: 'aboud', en: 'Yes, thank you.',
      ar: 'نعم، شكراً لك.' }
  ]
});

/* The Service Schedule — Part 3 */
EAM.scene('u6-dialogue3', {
  set: 'workshop',
  cast: {
    maher: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.maher))
  },
  lines: [
    { who: 'maher', cam: { shot: 'mid' }, en: 'Today I want to talk about the service schedule.',
      ar: 'أريد اليوم أن أتحدّث عن جدول الصيانة.',
      card: { img: 'service schedule', en: 'service schedule — a plan of when to do each service', ar: 'جدول الصيانة: خطة تبيّن موعد كل صيانة' } },
    { who: 'maher', en: 'Every car has one.',
      ar: 'لكل سيارة جدولها.' },
    { who: 'maher', en: 'It tells us what to do and when.',
      ar: 'وهو يخبرنا بما نفعله ومتى نفعله.' },
    { who: 'maher', en: 'At a small service, the oil and oil filter are changed, and the brakes and '
        + 'tyres are checked.',
      ar: 'في الصيانة الصغيرة يُغيَّر الزيت وفلتر الزيت، وتُفحص الفرامل والإطارات.' },
    { who: 'maher', en: 'At a full service, we do more: the air filter and spark plugs are '
        + 'replaced, the tyres are rotated, and the coolant is checked.',
      ar: 'وفي الصيانة الكاملة نعمل أكثر: يُستبدل فلتر الهواء وشمعات الإشعال، '
        + 'وتُبدَّل مواضع الإطارات، ويُفحص سائل التبريد.',
      card: { img: 'air filter', en: 'air filter — it cleans the air going into the engine', ar: 'فلتر الهواء: ينقّي الهواء الداخل إلى المحرك' } },
    { who: 'maher', en: 'The schedule is based on the mileage or the time.',
      ar: 'والجدول يعتمد على عدد الكيلومترات أو على الزمن.',
      card: { img: 'mileage', en: 'mileage — how far the car has driven', ar: 'عدد الكيلومترات المقطوعة: المسافة التي قطعتها السيارة' } },
    { who: 'maher', en: 'But remember: we always advise honestly.',
      ar: 'لكن تذكّروا: نحن ننصح بصدق دائماً.' },
    { who: 'maher', en: 'If a part is worn, we say, “You should change it.” If a part is fine, we '
        + 'say so — we don’t sell work the car doesn’t need.',
      ar: 'إذا كانت القطعة بالية قلنا: "ينبغي أن تغيّرها". وإذا كانت سليمة قلنا ذلك؛ '
        + 'فنحن لا نبيع عملاً لا تحتاجه السيارة.' },
    { who: 'maher', en: 'Could you all follow the schedule and give honest advice?',
      ar: 'فهل تلتزمون جميعاً بالجدول وتنصحون بصدق؟' },
    { who: 'maher', en: 'That is how we keep customers for many years.',
      ar: 'بهذا نحافظ على عملائنا سنوات طويلة.' }
  ]
});

/* Advising a Customer Role Play — Part 4 */
EAM.scene('u6-dialogue4', {
  set: 'reception',
  cast: {
    rana: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.rana)),
    aboud: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.5, 0.52] }; }(EAM.art.cast.aboud))
  },
  lines: [
    { who: 'rana', cam: { shot: 'mid' }, en: 'Your brake pads are worn. You should change them soon.',
      ar: 'فحمات فرامِلك بالية؛ ينبغي أن تغيّرها قريباً.',
      card: { img: 'brake pads', en: 'brake pads — the parts that press to stop the car', ar: 'فحمات الفرامل: القطع التي تضغط لإيقاف السيارة' } },
    { who: 'aboud', en: 'How much?',
      ar: 'وكم تبلغ الكلفة؟' },
    { who: 'rana', en: 'Shall I show you the quote? The pads are important for safety.',
      ar: 'هل أريك عرض السعر؟ الفحمات مهمة للسلامة.' },
    { who: 'aboud', en: 'OK, please do the pads.',
      ar: 'حسناً، نفّذوا الفحمات من فضلكم.' },
    { who: 'rana', en: 'Could you sign here to approve?',
      ar: 'هل توقّع هنا للموافقة؟' }
  ]
});

/* Manager Dialogue — Part 7 */
EAM.scene('u6-dialogue5', {
  set: 'reception',
  cast: {
    rana: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.rana)),
    aboud: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.5, 0.52] }; }(EAM.art.cast.aboud)),
    maher: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.74, 0.52] }; }(EAM.art.cast.maher))
  },
  lines: [
    { who: 'rana', cam: { shot: 'mid' }, en: 'Mr Aboud, the service is done, but we found two things. Your brake pads '
        + 'are worn, so you should change them. And the air filter is dirty.',
      ar: 'سيد عبود، انتهت الصيانة، لكننا وجدنا أمرين: فحمات الفرامل بالية، فينبغي أن '
        + 'تغيّرها، وفلتر الهواء متّسخ.',
      card: { img: 'air filter', en: 'air filter — it cleans the air going into the engine', ar: 'فلتر الهواء: ينقّي الهواء الداخل إلى المحرك' } },
    { who: 'aboud', en: 'How much for both?',
      ar: 'وكم تبلغ كلفتهما معاً؟' },
    { who: 'rana', en: 'The pads are the important one, for safety. Shall I show you the quote?',
      ar: 'الفحمات هي الأهم، من أجل السلامة. هل أريك عرض السعر؟' },
    { who: 'aboud', en: 'Yes, please.',
      ar: 'نعم، من فضلك.' },
    { who: 'maher', en: 'The pads are safety, so we advise you to do them now. The air filter is '
        + 'not urgent — you could wait a month if you like.',
      ar: 'الفحمات مسألة سلامة، فننصحك بتنفيذها الآن. أما فلتر الهواء فليس عاجلاً، '
        + 'ويمكنك أن تنتظر شهراً إن أحببت.' },
    { who: 'aboud', en: 'Thank you for being honest. Please do the pads today, and the filter next '
        + 'time.',
      ar: 'شكراً لصدقكم. نفّذوا الفحمات اليوم من فضلكم، والفلتر في المرة القادمة.' },
    { who: 'rana', en: 'Certainly. Could you sign here to approve the work?',
      ar: 'بالتأكيد. هل توقّع هنا للموافقة على العمل؟' }
  ]
});

/* Role-Play — Approving the Quote — Part 7 */
EAM.scene('u6-dialogue6', {
  set: 'reception',
  cast: {
    rana: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.rana)),
    aboud: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.5, 0.52] }; }(EAM.art.cast.aboud))
  },
  lines: [
    { who: 'rana', cam: { shot: 'mid' }, en: 'The pads are worn; you should change them for safety.',
      ar: 'الفحمات بالية؛ ينبغي أن تغيّرها من أجل السلامة.' },
    { who: 'aboud', en: 'And the filter?',
      ar: 'وماذا عن الفلتر؟' },
    { who: 'rana', en: 'Not urgent — you could wait. Shall I do the pads today?',
      ar: 'ليس عاجلاً، ويمكنك أن تنتظر. هل أنفّذ الفحمات اليوم؟' },
    { who: 'aboud', en: 'Yes.',
      ar: 'نعم.' },
    { who: 'rana', en: 'Could you sign to approve?',
      ar: 'هل توقّع للموافقة؟' }
  ]
});

