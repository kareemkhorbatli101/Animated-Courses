/* Unit 8 — the scenes, generated from the dialogues the book prints as prose.
   The cast is the one fixed in art-eam-cast.js, so a character is the same person
   here as on every card and in every other unit. Arabic subtitles are not yet
   written for these lines - the player shows the English and says so.
   RESIDUALS CW. */

/* The Quality Check — Part 3 */
EAM.scene('u8-dialogue', {
  set: 'workshop',
  cast: {
    nabil: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.nabil)),
    tarek: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.5, 0.52] }; }(EAM.art.cast.tarek))
  },
  lines: [
    { who: 'nabil', cam: { shot: 'mid' }, en: 'Tarek, before we hand over this car, we have to do the quality check. '
        + 'First, the road test — the car must be safe to drive.',
      ar: 'طارق، قبل أن نسلّم هذه السيارة علينا أن نجري فحص الجودة. أولاً تجربة '
        + 'الطريق؛ فيجب أن تكون السيارة آمنة للقيادة.',
      card: { img: 'quality check', en: 'quality check — the final check before a car is handed over', ar: 'فحص الجودة: الفحص الأخير قبل تسليم السيارة' } },
    { who: 'tarek', en: 'It drove well.',
      ar: 'كانت قيادتها جيدة.' },
    { who: 'nabil', en: 'Good. Now check the fluids and the brakes. Every job on the sheet must be '
        + 'ticked.',
      ar: 'جيد. الآن افحص السوائل والفرامل. يجب أن يُؤشَّر على كل عمل في الورقة.' },
    { who: 'tarek', en: 'There’s a small mark on the finish here.',
      ar: 'هناك خدش صغير في الطلاء هنا.' },
    { who: 'nabil', en: 'Then we mustn’t hand it over yet. We must fix it first. A car goes back '
        + 'perfect, or it doesn’t go back.',
      ar: 'إذاً يُمنع أن نسلّمها الآن. يجب أن نُصلحه أولاً. السيارة تعود سليمة '
        + 'تماماً، أو لا تعود.' },
    { who: 'tarek', en: 'I understand.',
      ar: 'فهمت.' }
  ]
});

/* A Warranty Question — Part 3 */
EAM.scene('u8-dialogue2', {
  set: 'reception',
  cast: {
    aboud: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.aboud)),
    rana: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.5, 0.52] }; }(EAM.art.cast.rana))
  },
  lines: [
    { who: 'aboud', cam: { shot: 'mid' }, en: 'My car is making a noise, and it’s still under warranty.',
      ar: 'سيارتي تُصدر صوتاً، وهي ما تزال تحت الضمان.',
      card: { img: 'warranty', en: 'warranty — a promise to repair or replace for free for a time', ar: 'الضمان: وعد بالإصلاح أو الاستبدال مجاناً مدةً معيّنة' } },
    { who: 'rana', en: 'Then you don’t have to pay for the repair. Let me check. Yes, the warranty '
        + 'is valid for another year.',
      ar: 'إذاً لستَ مُلزَماً بدفع كلفة الإصلاح. دعني أتحقّق… نعم، الضمان سارٍ سنةً أخرى.' },
    { who: 'aboud', en: 'Good. So it’s free?',
      ar: 'جيد. إذاً الإصلاح مجاني؟' },
    { who: 'rana', en: 'If the fault is a defect, yes. We have to use genuine parts and follow the '
        + 'carmaker’s rules.',
      ar: 'إذا كان العطل عيباً مصنعياً، فنعم. علينا أن نستخدم قطعاً أصلية وأن نتّبع '
        + 'قواعد الشركة الصانعة.',
      card: { img: 'defect', en: 'defect — a fault, something wrong with the car', ar: 'العيب: خلل، شيء غير سليم في السيارة' } },
    { who: 'aboud', en: 'How long will it take?',
      ar: 'وكم سيستغرق الأمر؟' },
    { who: 'rana', en: 'We’ll diagnose it today. You mustn’t drive it if the noise gets worse — '
        + 'bring it straight to us.',
      ar: 'سنشخّصها اليوم. ويُمنع أن تقودها إذا ازداد الصوت سوءاً؛ أحضِرها إلينا مباشرة.' }
  ]
});

/* The Service Standard — Part 3 */
EAM.scene('u8-dialogue3', {
  set: 'workshop',
  cast: {
    maher: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.maher))
  },
  lines: [
    { who: 'maher', cam: { shot: 'mid' }, en: 'Let’s talk about our standard.',
      ar: 'لنتحدّث عن معيارنا.' },
    { who: 'maher', en: 'As an authorised dealer, we have to follow the carmaker’s rules.',
      ar: 'بوصفنا وكيلاً معتمداً، علينا أن نتّبع قواعد الشركة الصانعة.' },
    { who: 'maher', en: 'Every car must pass a road test and a quality check before handover.',
      ar: 'يجب أن تجتاز كل سيارة تجربة طريق وفحص جودة قبل التسليم.',
      card: { img: 'quality check', en: 'quality check — the final check before a car is handed over', ar: 'فحص الجودة: الفحص الأخير قبل تسليم السيارة' } },
    { who: 'maher', en: 'You mustn’t hand over a car with any fault, however small.',
      ar: 'ويُمنع أن تسلّم سيارة فيها أيّ عطل، وإن كان صغيراً.' },
    { who: 'maher', en: 'Under warranty, we must use genuine parts and record everything, because '
        + 'the carmaker checks our work.',
      ar: 'وتحت الضمان يجب أن نستخدم قطعاً أصلية وأن نُسجّل كل شيء، لأن الشركة '
        + 'الصانعة تُراجع عملنا.',
      card: { img: 'warranty', en: 'warranty — a promise to repair or replace for free for a time', ar: 'الضمان: وعد بالإصلاح أو الاستبدال مجاناً مدةً معيّنة' } },
    { who: 'maher', en: 'If there is a recall, we have to contact the owner and fix the car for free.',
      ar: 'وإذا صدرت حملة استدعاء، فعلينا أن نتّصل بالمالك ونُصلح السيارة مجاناً.',
      card: { img: 'recall', en: 'recall — when the carmaker asks owners to bring cars back to fix a fault', ar: 'حملة الاستدعاء: أن تطلب الشركة الصانعة من المالكين إعادة السيارات لإصلاح عيب' } },
    { who: 'maher', en: 'And you mustn’t ever hide a defect from a customer — that is the worst '
        + 'thing we can do.',
      ar: 'ويُمنع منعاً مطلقاً أن تُخفي عيباً عن عميل؛ فذلك أسوأ ما يمكن أن نفعله.',
      card: { img: 'defect', en: 'defect — a fault, something wrong with the car', ar: 'العيب: خلل، شيء غير سليم في السيارة' } },
    { who: 'maher', en: 'Our standard is simple: every car leaves safe, and every customer is told '
        + 'the truth.',
      ar: 'معيارنا بسيط: كل سيارة تخرج آمنة، وكل عميل يُقال له الحق.' },
    { who: 'maher', en: 'This is why people trust an authorised dealer.',
      ar: 'لهذا يثق الناس بالوكيل المعتمد.' }
  ]
});

/* Warranty Role Play — Part 4 */
EAM.scene('u8-dialogue4', {
  set: 'reception',
  cast: {
    aboud: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.aboud)),
    rana: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.5, 0.52] }; }(EAM.art.cast.rana))
  },
  lines: [
    { who: 'aboud', cam: { shot: 'mid' }, en: 'My car has a fault, and it’s under warranty.',
      ar: 'سيارتي فيها عطل، وهي تحت الضمان.',
      card: { img: 'warranty', en: 'warranty — a promise to repair or replace for free for a time', ar: 'الضمان: وعد بالإصلاح أو الاستبدال مجاناً مدةً معيّنة' } },
    { who: 'rana', en: 'Then you don’t have to pay. We’ll check it.',
      ar: 'إذاً لستَ مُلزَماً بالدفع. سنفحصها.' },
    { who: 'aboud', en: 'Will you use genuine parts?',
      ar: 'هل ستستخدمون قطعاً أصلية؟',
      card: { img: 'genuine part', en: 'genuine part — a part made by the carmaker', ar: 'القطعة الأصلية: قطعة من صناعة الشركة الصانعة نفسها' } },
    { who: 'rana', en: 'Yes, under warranty we have to.',
      ar: 'نعم، تحت الضمان نحن مُلزَمون بذلك.' },
    { who: 'aboud', en: 'Thank you.',
      ar: 'شكراً لكم.' }
  ]
});

/* Manager Dialogue — Part 7 */
EAM.scene('u8-dialogue5', {
  set: 'workshop',
  cast: {
    nabil: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.nabil)),
    maher: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.5, 0.52] }; }(EAM.art.cast.maher))
  },
  lines: [
    { who: 'nabil', cam: { shot: 'mid' }, en: 'Maher, this car is ready for handover, but I want you to check it.',
      ar: 'ماهر، هذه السيارة جاهزة للتسليم، لكني أريدك أن تتفقّدها.' },
    { who: 'maher', en: 'Good. Did it pass the road test?',
      ar: 'جيد. هل اجتازت تجربة الطريق؟',
      card: { img: 'road test', en: 'road test — driving the car to check it is safe', ar: 'تجربة الطريق: قيادة السيارة للتأكد من أنها آمنة' } },
    { who: 'nabil', en: 'Yes, it’s safe. But there’s a small mark on the door from the repair.',
      ar: 'نعم، هي آمنة. لكن هناك خدشاً صغيراً على الباب من أثر الإصلاح.' },
    { who: 'maher', en: 'Then we mustn’t hand it over yet. Every car has to leave perfect.',
      ar: 'إذاً يُمنع أن نسلّمها الآن. يجب أن تخرج كل سيارة سليمة تماماً.' },
    { who: 'nabil', en: 'I can fix the mark today.',
      ar: 'يمكنني إصلاح الخدش اليوم.' },
    { who: 'maher', en: 'Do that first. And did you sign off every job on the sheet?',
      ar: 'افعل ذلك أولاً. وهل وقّعتَ على كل عمل في الورقة؟' },
    { who: 'nabil', en: 'All except the final one.',
      ar: 'على جميعها إلا الأخير.' },
    { who: 'maher', en: 'Sign it after you fix the mark. We must never hand over a car with a '
        + 'defect, even a small one.',
      ar: 'وقّع عليه بعد أن تُصلح الخدش. يجب ألّا نسلّم أبداً سيارة فيها عيب، ولو كان '
        + 'صغيراً.',
      card: { img: 'defect', en: 'defect — a fault, something wrong with the car', ar: 'العيب: خلل، شيء غير سليم في السيارة' } }
  ]
});

/* Role-Play — The Quality Review — Part 7 */
EAM.scene('u8-dialogue6', {
  set: 'workshop',
  cast: {
    maher: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.maher)),
    nabil: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.5, 0.52] }; }(EAM.art.cast.nabil))
  },
  lines: [
    { who: 'maher', cam: { shot: 'mid' }, en: 'Did it pass the road test?',
      ar: 'هل اجتازت تجربة الطريق؟',
      card: { img: 'road test', en: 'road test — driving the car to check it is safe', ar: 'تجربة الطريق: قيادة السيارة للتأكد من أنها آمنة' } },
    { who: 'nabil', en: 'Yes, but there’s a small mark.',
      ar: 'نعم، لكن هناك خدشاً صغيراً.' },
    { who: 'maher', en: 'Then we mustn’t hand it over. Fix it first.',
      ar: 'إذاً يُمنع أن نسلّمها. أصلِحه أولاً.' },
    { who: 'nabil', en: 'And the sign-off?',
      ar: 'وماذا عن التوقيع؟',
      card: { img: 'sign-off', en: 'sign-off — when someone signs to say the work is correct', ar: 'التوقيع بالإنجاز: أن يوقّع أحدهم إقراراً بأن العمل صحيح' } },
    { who: 'maher', en: 'Sign every job after you fix the mark.',
      ar: 'وقّع على كل عمل بعد أن تُصلح الخدش.' }
  ]
});

