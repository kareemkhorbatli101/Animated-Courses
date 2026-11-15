/* ============================================================
   Unit 1 — the scenes.

   A scene is a conversation played on a CSS-3D stage by rigged actors: lips driven from the
   words, brows from the named expression, a camera that cuts between a two-shot and a close-up,
   EN and AR subtitles, and a cue card that appears as a word is said. scene.js has been on this
   course since the engine was lifted; until now nothing declared a scene for it to play, and the
   two role-play cards asked it for 'reception-desk' - a DIORAMA name - so it rendered a red
   "Scene not found" box on the live site.

   THE CAST IS NAMED, NOT DESCRIBED. Each person's rig and clothes come from art-eam-cast.js, so
   Nabil is the same man here, on every card, and in every later unit.

   `at` is [x, y] as a fraction of the stage, so a two-shot puts one person left of centre and
   one right. `face` is the expression held for that line. `card` is the vocabulary cue that
   appears while the line is spoken - the word, drawn, in both languages.
   ============================================================ */

/* The six people, with the positions they usually stand in. Declared once and spread into each
   scene's cast, so a scene names who is in it and nothing else. */
var EAMC = (function () {
  var C = EAM.art.cast;
  function who(key, at, scale) {
    var g = C[key];
    /* `full: true` asks art-eam-cast.js for legs and feet as well as the arms the rig already
       had. The stage then CLIPS the figure the way a camera frames a standing person, instead
       of the drawing ending at the shirt hem. */
    return { rig: g.rig, name: g.name, at: at, voice: g.voice, pitch: g.pitch,
             scale: scale || 0.72, bottom: 42, shirt: g.shirt, shirt2: g.shirt2,
             legs: g.legs, shoe: g.shoe, full: true };
  }
  return { who: who };
}());

/* ---------- S1 · At reception: booking a car in (Audio 1.3) ---------- */
EAM.scene('u1-reception', {
  set: 'reception',
  cast: {
    rana: EAMC.who('rana', [0.32, 0.52]),
    aboud: EAMC.who('aboud', [0.70, 0.52])
  },
  lines: [
    { who: 'rana', face: 'warm', cam: { shot: 'two' },
      en: 'Good morning, welcome to Cham Motors. How can I help you?',
      ar: 'صباح الخير، أهلًا بك في شام موتورز. كيف يمكنني مساعدتك؟' },
    { who: 'aboud', face: 'neutral',
      en: 'My car needs a service.',
      ar: 'سيارتي بحاجة إلى صيانة.',
      card: { img: 'service', en: 'a service', ar: 'صيانة دورية' } },
    { who: 'rana', face: 'warm', cam: { shot: 'cu' },
      en: 'Of course. What is the problem?',
      ar: 'بالتأكيد. ما المشكلة؟' },
    { who: 'aboud', face: 'worried',
      en: 'It is making a noise, and the service is due.',
      ar: 'تصدر صوتًا غريبًا، وموعد الصيانة قد حان.' },
    { who: 'rana', face: 'neutral', cam: { shot: 'two' },
      en: 'I will write a job card. Can you leave the car with us today?',
      ar: 'سأكتب بطاقة عمل. هل يمكنك ترك السيارة لدينا اليوم؟',
      card: { img: 'job-card', en: 'a job card', ar: 'بطاقة عمل' } },
    { who: 'aboud', face: 'neutral',
      en: 'Yes. When will it be ready?',
      ar: 'نعم. متى ستكون جاهزة؟' },
    { who: 'rana', face: 'warm',
      en: 'This afternoon. We will call you.',
      ar: 'بعد ظهر اليوم. سنتصل بك.' }
  ]
});

/* ---------- S2 · Nabil describes his own work (Audio 1.2) ---------- */
EAM.scene('u1-nabil', {
  set: 'workshop',
  cast: { nabil: EAMC.who('nabil', [0.5, 0.5], 1.06) },
  lines: [
    { who: 'nabil', face: 'warm', cam: { shot: 'mid' },
      en: 'Hello, my name is Nabil. I am a mechanic at Cham Motors.',
      ar: 'مرحبًا، اسمي نبيل. أنا ميكانيكي في شام موتورز.' },
    { who: 'nabil', face: 'neutral',
      en: 'I service and repair cars.',
      ar: 'أقوم بصيانة السيارات وإصلاحها.',
      card: { img: 'mechanic', en: 'a mechanic', ar: 'ميكانيكي' } },
    { who: 'nabil', face: 'neutral',
      en: 'First, I read the job card. Then I check the car in the service bay.',
      ar: 'أولًا أقرأ بطاقة العمل، ثم أفحص السيارة في حيّز الصيانة.',
      card: { img: 'service-bay', en: 'the service bay', ar: 'حيّز الصيانة' } },
    { who: 'nabil', face: 'thinking', cam: { shot: 'cu' },
      en: 'Right now, I am changing the oil on a customer’s car.',
      ar: 'في هذه اللحظة، أنا أغيّر الزيت في سيارة أحد الزبائن.',
      card: { img: 'oil', en: 'right now — present continuous', ar: 'الآن — مضارع مستمر' } },
    { who: 'nabil', face: 'neutral', cam: { shot: 'mid' },
      en: 'After that, I check the brakes and the tyres.',
      ar: 'بعد ذلك أفحص المكابح والإطارات.' },
    { who: 'nabil', face: 'warm',
      en: 'I work with a young apprentice, Tarek.',
      ar: 'أعمل مع متدرّب شاب اسمه طارق.' }
  ]
});

/* ---------- S3 · Maher briefs the team (Audio 1.4) ---------- */
EAM.scene('u1-briefing', {
  set: 'workshop',
  cast: {
    maher: EAMC.who('maher', [0.22, 0.5], 1.0),
    nabil: EAMC.who('nabil', [0.44, 0.52], 0.94),
    lina: EAMC.who('lina', [0.64, 0.52], 0.94),
    tarek: EAMC.who('tarek', [0.84, 0.53], 0.9)
  },
  lines: [
    { who: 'maher', face: 'warm', cam: { shot: 'two' },
      en: 'Good morning, everyone. Today we are busy.',
      ar: 'صباح الخير جميعًا. اليوم لدينا عمل كثير.' },
    { who: 'maher', face: 'neutral',
      en: 'Nabil is servicing Mr Aboud’s car.',
      ar: 'نبيل يقوم بصيانة سيارة السيد عبود.',
      card: { img: 'nabil', en: 'is servicing — now', ar: 'يصون الآن' } },
    { who: 'maher', face: 'neutral',
      en: 'Tarek, you are new here, so today you watch and learn.',
      ar: 'طارق، أنت جديد هنا، لذا اليوم تشاهد وتتعلّم.',
      card: { img: 'tarek', en: 'watch and learn', ar: 'شاهِد وتعلّم' } },
    { who: 'maher', face: 'neutral', cam: { shot: 'cu' },
      en: 'Lina is finding a fault on another car with the computer.',
      ar: 'لينا تبحث عن عطل في سيارة أخرى باستخدام الحاسوب.',
      card: { img: 'lina', en: 'is finding a fault', ar: 'تبحث عن عطل' } },
    { who: 'maher', face: 'neutral', cam: { shot: 'two' },
      en: 'Rana is talking to customers at reception.',
      ar: 'رنا تتحدث إلى الزبائن في الاستقبال.',
      card: { img: 'rana', en: 'is talking', ar: 'تتحدث' } },
    { who: 'maher', face: 'neutral',
      en: 'I am checking the job cards in the office.',
      ar: 'أنا أراجع بطاقات العمل في المكتب.' },
    { who: 'maher', face: 'warm',
      en: 'We work as a team, and every day we look after our customers’ cars.',
      ar: 'نعمل كفريق، وكل يوم نعتني بسيارات زبائننا.' },
    { who: 'maher', face: 'neutral',
      en: 'Remember: we always keep the workshop clean and safe, and we always check our work.',
      ar: 'تذكّروا: نحافظ دائمًا على نظافة الورشة وسلامتها، ونراجع عملنا دائمًا.',
      card: { img: 'safe', en: 'always — present simple', ar: 'دائمًا — مضارع بسيط' } }
  ]
});

/* ---------- S4 · Tarek's first morning (Audio 1.5) ---------- */
EAM.scene('u1-first-day', {
  set: 'workshop',
  cast: {
    maher: EAMC.who('maher', [0.24, 0.5]),
    nabil: EAMC.who('nabil', [0.52, 0.52]),
    tarek: EAMC.who('tarek', [0.78, 0.53], 0.95)
  },
  lines: [
    { who: 'maher', face: 'warm', cam: { shot: 'two' },
      en: 'Good morning, Tarek. Welcome to Cham Motors.',
      ar: 'صباح الخير يا طارق. أهلًا بك في شام موتورز.' },
    { who: 'nabil', face: 'warm',
      en: 'Nice to meet you. Have you worked in a garage before?',
      ar: 'سررت بلقائك. هل عملت في ورشة من قبل؟' },
    { who: 'tarek', face: 'worried', cam: { shot: 'cu' },
      en: 'A little. I helped my uncle.',
      ar: 'قليلًا. كنت أساعد عمّي.' },
    { who: 'maher', face: 'neutral', cam: { shot: 'two' },
      en: 'Good. This week, you watch Nabil and learn.',
      ar: 'جيد. هذا الأسبوع تشاهد نبيل وتتعلّم منه.' },
    { who: 'nabil', face: 'neutral',
      en: 'Always wear your safety glasses and gloves in the workshop, and keep your area clean.',
      ar: 'ارتدِ دائمًا نظارة الأمان والقفازات في الورشة، وحافظ على نظافة مكانك.',
      card: { img: 'safety-glasses', en: 'a safety rule', ar: 'قاعدة سلامة' } },
    { who: 'tarek', face: 'neutral',
      en: 'Yes, Ustaz.',
      ar: 'نعم يا أستاذ.' },
    { who: 'maher', face: 'warm',
      en: 'If you are not sure, ask us. We work as a team here.',
      ar: 'إن لم تكن متأكدًا فاسألنا. نحن نعمل كفريق هنا.' },
    { who: 'tarek', face: 'warm',
      en: 'Thank you. I am happy to be here.',
      ar: 'شكرًا لك. أنا سعيد بوجودي هنا.' }
  ]
});

/* ---------- S5 · The worked role play: how it sounds when it goes well ----------
   Opened from the role-play card's "See the whole thing played" button. This is the book's own
   model exchange, acted. It is shown as ONE WAY of doing it, which is why it is behind a button
   rather than printed above the task: a learner who reads a model before trying copies it. */
EAM.scene('u1-roleplay-model', {
  set: 'reception',
  cast: {
    rana: EAMC.who('rana', [0.32, 0.52]),
    aboud: EAMC.who('aboud', [0.70, 0.52])
  },
  lines: [
    { who: 'rana', face: 'warm', cam: { shot: 'two' },
      en: 'Good morning. How can I help you?',
      ar: 'صباح الخير. كيف أساعدك؟' },
    { who: 'aboud', face: 'neutral',
      en: 'Good morning. My car needs a service, please.',
      ar: 'صباح النور. سيارتي بحاجة إلى صيانة من فضلك.' },
    { who: 'rana', face: 'neutral',
      en: 'Of course. What is the problem?',
      ar: 'بالتأكيد. ما المشكلة؟' },
    { who: 'aboud', face: 'worried', cam: { shot: 'cu' },
      en: 'It is making a noise when I brake.',
      ar: 'تصدر صوتًا عند الضغط على المكابح.' },
    { who: 'rana', face: 'neutral', cam: { shot: 'two' },
      en: 'I see. I will write a job card and ask the mechanic to check the brakes.',
      ar: 'فهمت. سأكتب بطاقة عمل وأطلب من الميكانيكي فحص المكابح.' },
    { who: 'aboud', face: 'neutral',
      en: 'Thank you. When will it be ready?',
      ar: 'شكرًا. متى ستكون جاهزة؟' },
    { who: 'rana', face: 'warm',
      en: 'This afternoon. We will call you when it is finished.',
      ar: 'بعد الظهر. سنتصل بك حين ننتهي.' },
    { who: 'aboud', face: 'warm',
      en: 'That is good. Thank you very much.',
      ar: 'جيد. شكرًا جزيلًا لك.' }
  ]
});

/* ---------- S6 · The worked briefing, for the Part 7 role play ---------- */
EAM.scene('u1-brief-model', {
  set: 'workshop',
  cast: {
    nabil: EAMC.who('nabil', [0.34, 0.5]),
    tarek: EAMC.who('tarek', [0.70, 0.52], 0.95)
  },
  lines: [
    { who: 'nabil', face: 'warm', cam: { shot: 'two' },
      en: 'Welcome to the team, Tarek. I am Nabil, and we will work together this week.',
      ar: 'أهلًا بك في الفريق يا طارق. أنا نبيل، وسنعمل معًا هذا الأسبوع.' },
    { who: 'tarek', face: 'neutral',
      en: 'Thank you. Where are the tools?',
      ar: 'شكرًا لك. أين توجد العدّة؟' },
    { who: 'nabil', face: 'neutral', cam: { shot: 'cu' },
      en: 'On the board behind you. Always put a tool back where you found it.',
      ar: 'على اللوحة خلفك. أعِد العدّة دائمًا إلى مكانها.' },
    { who: 'nabil', face: 'neutral', cam: { shot: 'two' },
      en: 'Always wear your safety glasses and gloves. Keep your area clean. '
        + 'And never use a machine before you ask me.',
      ar: 'ارتدِ دائمًا نظارة الأمان والقفازات. حافظ على نظافة مكانك. '
        + 'ولا تستخدم أي آلة قبل أن تسألني.',
      card: { img: 'safety-glasses', en: 'three safety rules', ar: 'ثلاث قواعد سلامة' } },
    { who: 'tarek', face: 'neutral',
      en: 'So I must wear glasses and gloves, keep my area clean, and ask before a machine.',
      ar: 'إذن عليّ ارتداء النظارة والقفازات، والحفاظ على نظافة مكاني، والسؤال قبل استخدام أي آلة.' },
    { who: 'nabil', face: 'warm',
      en: 'Exactly. Today, you watch me and learn. If you are not sure about anything, ask.',
      ar: 'بالضبط. اليوم تشاهدني وتتعلّم. وإن لم تكن متأكدًا من شيء فاسأل.' }
  ]
});
