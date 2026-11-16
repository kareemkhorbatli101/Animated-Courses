/* Unit 10 — the scenes, generated from the dialogues the book prints as prose.
   The cast is the one fixed in art-eam-cast.js, so a character is the same person
   here as on every card and in every other unit. Arabic subtitles are not yet
   written for these lines - the player shows the English and says so.
   RESIDUALS CW. */

/* Customer Feedback — Part 3 */
EAM.scene('u10-dialogue', {
  set: 'reception',
  cast: {
    rana: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.rana)),
    maher: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.5, 0.52] }; }(EAM.art.cast.maher))
  },
  lines: [
    { who: 'rana', cam: { shot: 'mid' }, en: 'Maher, I called Mr Aboud for his feedback.',
      ar: 'ماهر، اتّصلتُ بالسيد عبود لأسأله عن رأيه.',
      card: { img: 'feedback', en: 'feedback — what a customer says about the service', ar: 'رأي العميل: ما يقوله العميل عن الخدمة' } },
    { who: 'maher', en: 'What did he say?',
      ar: 'وماذا قال؟' },
    { who: 'rana', en: 'He said he was very happy. He told me the car was running perfectly.',
      ar: 'قال إنه راضٍ جداً، وأخبرني أن السيارة تعمل على أتمّ وجه.' },
    { who: 'maher', en: 'Good. Did he say anything about the service?',
      ar: 'جيد. وهل قال شيئاً عن الخدمة؟' },
    { who: 'rana', en: 'He said the team was honest and fast. He also asked if we did full '
        + 'services for his brother’s car.',
      ar: 'قال إن الفريق كان صادقاً وسريعاً. وسأل أيضاً إن كنا نُجري صيانة كاملة '
        + 'لسيارة أخيه.' },
    { who: 'maher', en: 'Tell him yes, and thank him. A happy customer is our best advertisement.',
      ar: 'أخبريه بنعم، واشكريه. العميل الراضي هو أفضل إعلان لنا.' }
  ]
});

/* A Manufacturer Update — Part 3 */
EAM.scene('u10-dialogue2', {
  set: 'workshop',
  cast: {
    lina: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.lina)),
    maher: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.5, 0.52] }; }(EAM.art.cast.maher))
  },
  lines: [
    { who: 'lina', cam: { shot: 'mid' }, en: 'Maher, there’s a new bulletin from the manufacturer.',
      ar: 'ماهر، وصلنا تعميم جديد من الشركة الصانعة.' },
    { who: 'maher', en: 'What does it say?',
      ar: 'وماذا يقول؟' },
    { who: 'lina', en: 'It says there’s a software update for the new model. The bulletin told us '
        + 'to update the software at the next service.',
      ar: 'يقول إن هناك تحديثاً للبرمجية في الطراز الجديد. وقد طلب منا التعميم أن '
        + 'نُحدّث البرمجية في الصيانة القادمة.' },
    { who: 'maher', en: 'Is it urgent?',
      ar: 'وهل هو عاجل؟' },
    { who: 'lina', en: 'It said it wasn’t urgent, but it improves the engine. It also asked us to '
        + 'record every update.',
      ar: 'قال إنه ليس عاجلاً، لكنه يُحسّن أداء المحرك. وطلب منا أيضاً أن نُسجّل كل '
        + 'تحديث.' },
    { who: 'maher', en: 'Good. Tell the team, and start it from Monday. Have you done the training '
        + 'for the new model?',
      ar: 'جيد. أخبري الفريق، وابدؤوا به من يوم الاثنين. وهل أتممتِ تدريب الطراز الجديد؟',
      card: { img: 'training', en: 'training — learning new skills for the job', ar: 'التدريب: تعلّم مهارات جديدة لأجل العمل' } },
    { who: 'lina', en: 'Yes, I finished it last week.',
      ar: 'نعم، أتممتُه الأسبوع الماضي.' }
  ]
});

/* The Team Meeting — Part 3 */
EAM.scene('u10-dialogue3', {
  set: 'workshop',
  cast: {
    maher: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.maher))
  },
  lines: [
    { who: 'maher', cam: { shot: 'mid' }, en: 'Good morning, everyone.',
      ar: 'صباح الخير جميعاً.' },
    { who: 'maher', en: 'Here’s the news.',
      ar: 'هذه هي الأخبار.' },
    { who: 'maher', en: 'First, the customers.',
      ar: 'أولاً، العملاء.' },
    { who: 'maher', en: 'The feedback is very good.',
      ar: 'آراؤهم جيدة جداً.',
      card: { img: 'feedback', en: 'feedback — what a customer says about the service', ar: 'رأي العميل: ما يقوله العميل عن الخدمة' } },
    { who: 'maher', en: 'Mr Aboud told Rana the car was running perfectly, and he recommended us to '
        + 'his family.',
      ar: 'أخبر السيد عبود رنا أن سيارته تعمل على أتمّ وجه، وقد أوصى بنا عائلته.' },
    { who: 'maher', en: 'Second, the manufacturer.',
      ar: 'ثانياً، الشركة الصانعة.' },
    { who: 'maher', en: 'They sent a bulletin; it told us to update the software on the new model, '
        + 'and it asked us to record every update.',
      ar: 'أرسلوا تعميماً طلب منا أن نُحدّث برمجية الطراز الجديد، وأن نُسجّل كل تحديث.' },
    { who: 'maher', en: 'Third, training.',
      ar: 'ثالثاً، التدريب.',
      card: { img: 'training', en: 'training — learning new skills for the job', ar: 'التدريب: تعلّم مهارات جديدة لأجل العمل' } },
    { who: 'maher', en: 'Lina has finished the new-model course, and she will teach the rest of the '
        + 'team next week.',
      ar: 'أتمّت لينا دورة الطراز الجديد، وستُدرّب بقية الفريق الأسبوع القادم.' },
    { who: 'maher', en: 'Finally, a campaign.',
      ar: 'وأخيراً، حملة.',
      card: { img: 'campaign', en: 'campaign — a special plan by the carmaker', ar: 'الحملة: خطة خاصة تُعلنها الشركة الصانعة' } },
    { who: 'maher', en: 'The manufacturer said all new-model owners should come in for a free '
        + 'safety check.',
      ar: 'قالت الشركة الصانعة إن على كل أصحاب الطراز الجديد أن يأتوا لفحص سلامة مجاني.' },
    { who: 'maher', en: 'Rana, please send a service reminder to every owner.',
      ar: 'رنا، أرسلي تنبيه صيانة إلى كل مالك من فضلك.',
      card: { img: 'service reminder', en: 'service reminder — a message that a service is due', ar: 'تنبيه الصيانة: رسالة تُفيد بأن موعد الصيانة قد حلّ' } },
    { who: 'maher', en: 'A dealership is a team: the customer, the manufacturer, and us.',
      ar: 'الوكالة فريق واحد: العميل، والشركة الصانعة، ونحن.' },
    { who: 'maher', en: 'When we all talk to each other, everyone wins.',
      ar: 'وعندما يتحدّث بعضنا إلى بعض، يكسب الجميع.' }
  ]
});

/* Reporting Role Play — Part 4 */
EAM.scene('u10-dialogue4', {
  set: 'reception',
  cast: {
    maher: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.maher)),
    rana: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.5, 0.52] }; }(EAM.art.cast.rana))
  },
  lines: [
    { who: 'maher', cam: { shot: 'mid' }, en: 'What did the customer say?',
      ar: 'وماذا قال العميل؟' },
    { who: 'rana', en: 'He said he was happy and recommended us.',
      ar: 'قال إنه راضٍ، وأوصى بنا.' },
    { who: 'maher', en: 'And the manufacturer?',
      ar: 'وماذا عن الشركة الصانعة؟' },
    { who: 'rana', en: 'They told us to update the software and asked us to record it.',
      ar: 'طلبوا منا أن نُحدّث البرمجية، وأن نُسجّل ذلك.' }
  ]
});

/* Manager Dialogue — Part 7 */
EAM.scene('u10-dialogue5', {
  set: 'reception',
  cast: {
    maher: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.maher)),
    rana: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.5, 0.52] }; }(EAM.art.cast.rana))
  },
  lines: [
    { who: 'maher', cam: { shot: 'mid' }, en: 'Rana, let’s prepare for the team meeting. What did the customers say this '
        + 'week?',
      ar: 'رنا، لنُعِدّ لاجتماع الفريق. ماذا قال العملاء هذا الأسبوع؟' },
    { who: 'rana', en: 'Mr Aboud said he was very happy, and he recommended us to his brother. Two '
        + 'other customers said the service was fast.',
      ar: 'قال السيد عبود إنه راضٍ جداً، وأوصى بنا أخاه. وقال عميلان آخران إن الخدمة '
        + 'كانت سريعة.' },
    { who: 'maher', en: 'Good news. And the manufacturer?',
      ar: 'أخبار جيدة. وماذا عن الشركة الصانعة؟' },
    { who: 'rana', en: 'They sent a bulletin. It told us to update the software on the new model, '
        + 'and it asked us to record every update.',
      ar: 'أرسلوا تعميماً طلب منا أن نُحدّث برمجية الطراز الجديد، وأن نُسجّل كل تحديث.' },
    { who: 'maher', en: 'And they announced a campaign, didn’t they?',
      ar: 'وقد أعلنوا حملة، أليس كذلك؟',
      card: { img: 'campaign', en: 'campaign — a special plan by the carmaker', ar: 'الحملة: خطة خاصة تُعلنها الشركة الصانعة' } },
    { who: 'rana', en: 'Yes, a free safety check for all new-model owners.',
      ar: 'نعم، فحص سلامة مجاني لكل أصحاب الطراز الجديد.' },
    { who: 'maher', en: 'Then please send a service reminder to every owner. I’ll tell the team at '
        + 'the meeting.',
      ar: 'إذاً أرسلي تنبيه صيانة إلى كل مالك من فضلك. وسأخبر الفريق في الاجتماع.',
      card: { img: 'service reminder', en: 'service reminder — a message that a service is due', ar: 'تنبيه الصيانة: رسالة تُفيد بأن موعد الصيانة قد حلّ' } },
    { who: 'rana', en: 'I’ll prepare the list today.',
      ar: 'سأُعِدّ القائمة اليوم.' }
  ]
});

/* Role-Play — Running the Team Meeting — Part 7 */
EAM.scene('u10-dialogue6', {
  set: 'workshop',
  cast: {
    maher: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.26, 0.52] }; }(EAM.art.cast.maher)),
    nabil: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, legs: g.legs, shoe: g.shoe, full: true, scale: 0.72, bottom: 42, at: [0.5, 0.52] }; }(EAM.art.cast.nabil))
  },
  lines: [
    { who: 'maher', cam: { shot: 'mid' }, en: 'The customers said the service was fast, and Mr Aboud recommended us. The '
        + 'manufacturer told us to update the software and asked us to record it.',
      ar: 'قال العملاء إن الخدمة كانت سريعة، وأوصى بنا السيد عبود. وطلبت منا الشركة '
        + 'الصانعة أن نُحدّث البرمجية وأن نُسجّل ذلك.' },
    { who: 'nabil', en: 'When do we start?',
      ar: 'ومتى نبدأ؟' },
    { who: 'maher', en: 'From Monday. Lina will teach the new model next week.',
      ar: 'من يوم الاثنين. ولينا ستُدرّب الطراز الجديد الأسبوع القادم.' }
  ]
});

