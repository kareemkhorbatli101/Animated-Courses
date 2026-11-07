/* ============================================================
   Unit 1 — the animated scenes.

   Seven scenes: the opening Read, the two recorded conversations, the two
   extended readings, the stakeholder track and the consolidation text.

   Every line is the book's own sentence, unaltered. The site may choose
   WHERE a sentence appears; it may not change what the author wrote, and
   tools/check-book.cjs fails the build if a line here is not in the unit.

   Every line must carry `ar`. The book supplies none, so all of it is
   newly written: standard Arabic, not Syrian dialect, with case tanween
   stripped and only a disambiguating vowel marked.
   ============================================================ */

/* the people, once — they recur in all ten units of the book */
var U1CAST = {
  fadi:  { rig: 'm-30s-a', name: 'Fadi',   at: [0.32, 0.54], voice: 'm', pitch: 0.96 },
  samah: { rig: 'f-20s-a', name: 'Samah',  at: [0.68, 0.54], voice: 'f', pitch: 1.10 },
  layth: { rig: 'm-50s-a', name: 'Layth',  at: [0.70, 0.54], voice: 'm', pitch: 0.88 },
  narr:  { rig: 'f-30s-a', name: 'Reader', at: [0.50, 0.54], voice: 'f', pitch: 1.02 }
};

/* ---------------------------------------------------------------
   The opening Read (front matter). The text is one paragraph in the
   book; it is cut into sentences here so a learner can loop one line,
   which is the whole reason the reading is a scene rather than a block
   of type.
   --------------------------------------------------------------- */
EAFM.scene('u1-read-office', {
  set: 'office',
  cast: { narr: U1CAST.narr },
  lines: [
    { who: 'narr', face: 'neutral', cam: { shot: 'mid' },
      en: 'Every organisation needs money. It also needs a finance team.',
      ar: 'كل منظمة تحتاج إلى المال، وتحتاج أيضا إلى فريق مالي.' },
    { who: 'narr', face: 'neutral',
      en: 'The finance team looks after the money. It records each payment, it checks the cash, and it prepares the reports.',
      ar: 'الفريق المالي يعتني بالمال: يسجل كل دفعة، ويتحقق من النقد، ويعد التقارير.',
      card: { img: 'finance-officer', en: 'the finance team', ar: 'الفريق المالي' } },
    { who: 'narr', face: 'thinking',
      en: 'In a small aid group, one person often does many of these tasks. This person is the finance officer.',
      ar: 'في منظمة إغاثة صغيرة، يقوم شخص واحد غالبا بكثير من هذه المهام، وهذا الشخص هو المسؤول المالي.' },
    { who: 'narr', face: 'warm',
      en: 'Fadi Haddad is a finance officer in Damascus. His work follows a simple cycle.',
      ar: 'فادي حداد مسؤول مالي في دمشق، وعمله يتبع دورة بسيطة.' },
    { who: 'narr', face: 'neutral',
      en: 'First, he records the transactions. Then he reconciles the accounts.',
      ar: 'أولا، يسجل العمليات. ثم يطابق الحسابات.',
      card: { img: 'transaction', en: 'a transaction', ar: 'عملية مالية' } },
    { who: 'narr', face: 'neutral',
      en: 'After that, he reports to the managers and the donors. He also helps to plan the budget.',
      ar: 'بعد ذلك، يقدم تقريرا إلى المديرين والمانحين، ويساعد أيضا في تخطيط الميزانية.',
      card: { img: 'budget', en: 'the budget', ar: 'الميزانية' } },
    { who: 'narr', face: 'neutral',
      en: 'Finally, he advises his colleagues about money. Then the cycle starts again.',
      ar: 'وأخيرا، يقدم المشورة لزملائه في شؤون المال. ثم تبدأ الدورة من جديد.' },
    { who: 'narr', face: 'surprised',
      en: 'Right now, Fadi is checking the cash box. Later today, he is meeting a manager about a report.',
      ar: 'في هذه اللحظة، يتفقد فادي صندوق النقد. وفي وقت لاحق اليوم، سيلتقي مديرا بشأن تقرير.',
      card: { img: 'cash-box', en: 'the cash box', ar: 'صندوق النقد' } },
    { who: 'narr', face: 'thinking',
      en: 'Each task is different, but every task connects to the others. Together, they form one big job.',
      ar: 'كل مهمة مختلفة، لكن كل مهمة ترتبط بالأخرى. وهي معا تشكل عملا واحدا كبيرا.' },
    { who: 'narr', face: 'warm',
      en: 'People call this job financial management, or idara maliya in Arabic.',
      ar: 'يسمي الناس هذا العمل الإدارة المالية.' },
    { who: 'narr', face: 'warm',
      en: 'It is careful, quiet, and very important work. Fadi is proud to do it.',
      ar: 'إنه عمل دقيق وهادئ ومهم جدا، وفادي فخور بأدائه.' },
    { who: 'narr', face: 'warm',
      en: 'Today, he is busy, but he is happy. He likes his job in the finance team very much.',
      ar: 'اليوم هو مشغول، لكنه سعيد. يحب عمله في الفريق المالي كثيرا.' },
    { who: 'narr', face: 'warm',
      en: 'It is a good place to learn and to grow.',
      ar: 'إنه مكان جيد للتعلم والنمو.' }
  ]
});

/* ---------------------------------------------------------------
   Audio 1.2 — Samah asks Fadi about his work.
   --------------------------------------------------------------- */
EAFM.scene('u1-samah', {
  set: 'office',
  cast: { fadi: U1CAST.fadi, samah: U1CAST.samah },
  lines: [
    { who: 'samah', face: 'warm', cam: { shot: 'two' },
      en: 'Fadi, what do you do every morning?',
      ar: 'فادي، ماذا تفعل كل صباح؟' },
    { who: 'fadi', face: 'neutral', cam: { shot: 'mid' },
      en: 'First, I check the accounts. Then I record the new transactions.',
      ar: 'أولا، أتفقد الحسابات. ثم أسجل العمليات الجديدة.',
      card: { img: 'account', en: 'the accounts', ar: 'الحسابات' } },
    { who: 'samah', face: 'thinking', cam: { shot: 'cu' },
      en: 'And after that?',
      ar: 'وبعد ذلك؟' },
    { who: 'fadi', face: 'neutral', cam: { shot: 'mid' },
      en: 'After that, I reconcile the cash. I compare the cash box with the ledger.',
      ar: 'بعد ذلك، أطابق النقد. أقارن صندوق النقد بدفتر الأستاذ.',
      card: { img: 'reconcile', en: 'reconcile', ar: 'يطابق' } },
    { who: 'samah', face: 'surprised', cam: { shot: 'cu' },
      en: 'What are you doing right now?',
      ar: 'ماذا تفعل في هذه اللحظة؟' },
    { who: 'fadi', face: 'thinking', cam: { shot: 'mid' },
      en: 'Right now, I am checking the bank balance. The numbers must agree.',
      ar: 'في هذه اللحظة، أتفقد رصيد المصرف. يجب أن تتطابق الأرقام.',
      card: { img: 'balance', en: 'the balance', ar: 'الرصيد' } },
    { who: 'samah', face: 'neutral', cam: { shot: 'two' },
      en: 'Do you prepare reports too?',
      ar: 'وهل تعد التقارير أيضا؟' },
    { who: 'fadi', face: 'warm', cam: { shot: 'mid' },
      en: 'Yes. Every month, I prepare a report for the managers and the donors.',
      ar: 'نعم. كل شهر أعد تقريرا للمديرين والمانحين.',
      card: { img: 'report', en: 'a report', ar: 'تقرير' } },
    { who: 'samah', face: 'surprised', cam: { shot: 'cu' },
      en: 'That is a lot of work.',
      ar: 'هذا عمل كثير.' },
    { who: 'fadi', face: 'warm', cam: { shot: 'mid' },
      en: 'It is, but I enjoy it. At the moment, I am also training you!',
      ar: 'نعم، لكنني أستمتع به. وفي هذه الأثناء أدربك أنت أيضا!' },
    { who: 'samah', face: 'warm', cam: { shot: 'two' },
      en: 'And I am learning a lot. Thank you, Fadi.',
      ar: 'وأنا أتعلم الكثير. شكرا لك يا فادي.' },
    { who: 'fadi', face: 'warm', cam: { shot: 'two' },
      en: 'You are welcome. A good finance team helps each other.',
      ar: 'عفوا. الفريق المالي الجيد يساعد بعضه بعضا.' }
  ]
});

/* ---------------------------------------------------------------
   Audio 1.3 — Fadi explains his job to Layth, a programme manager.
   --------------------------------------------------------------- */
EAFM.scene('u1-layth', {
  set: 'office',
  cast: { fadi: U1CAST.fadi, layth: U1CAST.layth },
  lines: [
    { who: 'layth', face: 'thinking', cam: { shot: 'two' },
      en: "Fadi, I don't really understand your job. What do you do all day?",
      ar: 'فادي، أنا لا أفهم عملك حقا. ماذا تفعل طوال اليوم؟' },
    { who: 'fadi', face: 'neutral', cam: { shot: 'mid' },
      en: 'I look after the money. I record it, I check it, and I report on it.',
      ar: 'أعتني بالمال. أسجله، وأتحقق منه، وأقدم تقريرا عنه.' },
    { who: 'layth', face: 'surprised', cam: { shot: 'cu' },
      en: 'So you just count money?',
      ar: 'إذا أنت تعد المال فقط؟' },
    { who: 'fadi', face: 'warm', cam: { shot: 'mid' },
      en: 'It is more than that. I also help you to plan the budget.',
      ar: 'الأمر أكثر من ذلك. أساعدك أيضا في تخطيط الميزانية.',
      card: { img: 'budget', en: 'plan the budget', ar: 'تخطيط الميزانية' } },
    { who: 'layth', face: 'thinking', cam: { shot: 'cu' },
      en: "Ah. So when I ask 'how much do we have?', you know the answer.",
      ar: 'آه. إذا عندما أسأل: كم لدينا؟ تعرف أنت الجواب.' },
    { who: 'fadi', face: 'neutral', cam: { shot: 'mid' },
      en: 'Exactly. I always know the balance. Right now, I am updating your project’s numbers.',
      ar: 'بالضبط. أعرف الرصيد دائما. وفي هذه اللحظة أحدث أرقام مشروعك.',
      card: { img: 'balance', en: 'the balance', ar: 'الرصيد' } },
    { who: 'layth', face: 'warm', cam: { shot: 'two' },
      en: 'That is useful. And the donors?',
      ar: 'هذا مفيد. وماذا عن المانحين؟' },
    { who: 'fadi', face: 'neutral', cam: { shot: 'mid' },
      en: 'I prepare their reports too. They trust our numbers, so I keep them honest.',
      ar: 'أعد تقاريرهم أيضا. هم يثقون بأرقامنا، لذلك أبقيها صادقة.',
      card: { img: 'donor', en: 'the donors', ar: 'المانحون' } },
    { who: 'layth', face: 'surprised', cam: { shot: 'cu' },
      en: 'I see. Your job connects everything.',
      ar: 'فهمت. عملك يربط كل شيء.' },
    { who: 'fadi', face: 'warm', cam: { shot: 'mid' },
      en: 'Yes. People call it financial management. It is one big, connected job.',
      ar: 'نعم. يسميه الناس الإدارة المالية. إنه عمل واحد كبير ومترابط.' },
    { who: 'layth', face: 'thinking', cam: { shot: 'two' },
      en: 'So finance is not just numbers. It is planning too.',
      ar: 'إذا المالية ليست أرقاما فقط، بل تخطيط أيضا.' },
    { who: 'fadi', face: 'warm', cam: { shot: 'two' },
      en: 'Exactly. Right now, I am planning your budget with you. We work together.',
      ar: 'بالضبط. في هذه اللحظة أخطط ميزانيتك معك. نحن نعمل معا.' }
  ]
});

/* ---------------------------------------------------------------
   Reading A — A Day in Fadi's Office. The book prints it as one block;
   it is cut into sentences so a line can be looped and flashed when a
   question points at it.
   --------------------------------------------------------------- */
EAFM.scene('u1-reading-a', {
  set: 'office',
  cast: { narr: U1CAST.narr },
  lines: [
    { who: 'narr', face: 'neutral', cam: { shot: 'mid' },
      en: 'Fadi Haddad works as a finance officer. He works for Horizon Relief International, a large aid organisation.',
      ar: 'يعمل فادي حداد مسؤولا ماليا في هورايزن ريليف إنترناشونال، وهي منظمة إغاثة كبيرة.',
      card: { img: 'finance-officer', en: 'a finance officer', ar: 'مسؤول مالي' } },
    { who: 'narr', face: 'neutral',
      en: 'Its main office is in Geneva, but Fadi works in the Damascus office. He helps to manage the money for many projects in Syria.',
      ar: 'مكتبها الرئيسي في جنيف، لكن فادي يعمل في مكتب دمشق. يساعد في إدارة المال لمشاريع كثيرة في سوريا.' },
    { who: 'narr', face: 'warm',
      en: 'Fadi loves numbers, and he loves order. Every morning, he opens his computer and checks the accounts.',
      ar: 'يحب فادي الأرقام ويحب النظام. كل صباح يفتح حاسوبه ويتفقد الحسابات.',
      card: { img: 'account', en: 'the accounts', ar: 'الحسابات' } },
    { who: 'narr', face: 'neutral',
      en: 'He looks at the cash and the bank balance. Then he starts his real work.',
      ar: 'ينظر إلى النقد وإلى رصيد المصرف. ثم يبدأ عمله الحقيقي.',
      card: { img: 'balance', en: 'the bank balance', ar: 'رصيد المصرف' } },
    { who: 'narr', face: 'neutral',
      en: 'First, Fadi records the new transactions. He writes down every payment and every receipt.',
      ar: 'أولا، يسجل فادي العمليات الجديدة. يدون كل دفعة وكل إيصال.',
      card: { img: 'transaction', en: 'the transactions', ar: 'العمليات' } },
    { who: 'narr', face: 'neutral',
      en: 'He puts each one in the correct account. We call this careful work bookkeeping.',
      ar: 'ويضع كلا منها في الحساب الصحيح. نسمي هذا العمل الدقيق مسك الدفاتر.',
      card: { img: 'bookkeeping', en: 'bookkeeping', ar: 'مسك الدفاتر' } },
    { who: 'narr', face: 'neutral',
      en: 'Next, Fadi reconciles the cash. He counts the money in the cash box.',
      ar: 'بعد ذلك، يطابق فادي النقد. يعد المال في صندوق النقد.',
      card: { img: 'cash-box', en: 'the cash box', ar: 'صندوق النقد' } },
    { who: 'narr', face: 'neutral',
      en: 'Then he compares it with the record in his ledger. The two numbers must agree.',
      ar: 'ثم يقارنه بالسجل في دفتر الأستاذ. يجب أن يتطابق الرقمان.',
      card: { img: 'reconcile', en: 'the two numbers must agree', ar: 'يجب أن يتطابق الرقمان' } },
    { who: 'narr', face: 'worried',
      en: 'If they do not agree, Fadi looks for the mistake. He is very patient, and he checks every entry.',
      ar: 'وإذا لم يتطابقا، يبحث فادي عن الخطأ. إنه صبور جدا، ويتفقد كل قيد.',
      card: { img: 'entry', en: 'every entry', ar: 'كل قيد' } },
    { who: 'narr', face: 'neutral',
      en: 'In the afternoon, Fadi often prepares a small report. He shows the managers how much money the project spends.',
      ar: 'بعد الظهر، يعد فادي غالبا تقريرا صغيرا. يبين للمديرين كم ينفق المشروع من المال.',
      card: { img: 'report', en: 'a small report', ar: 'تقرير صغير' } },
    { who: 'narr', face: 'neutral',
      en: 'Sometimes he also helps to plan the budget for next month. Fadi does many different tasks, but they all connect.',
      ar: 'وأحيانا يساعد أيضا في تخطيط ميزانية الشهر القادم. يؤدي فادي مهام مختلفة كثيرة، لكنها كلها مترابطة.',
      card: { img: 'budget', en: 'the budget', ar: 'الميزانية' } },
    { who: 'narr', face: 'thinking',
      en: 'Together, they form one job: financial management. In Arabic, people call this job idara maliya.',
      ar: 'وهي معا تشكل عملا واحدا: الإدارة المالية. وبالعربية يسمي الناس هذا العمل الإدارة المالية.' },
    { who: 'narr', face: 'warm',
      en: 'It is much more than simple accounting. Fadi enjoys his work, because the work matters.',
      ar: 'إنه أكثر بكثير من محاسبة بسيطة. ويستمتع فادي بعمله، لأن العمل مهم.' },
    { who: 'narr', face: 'thinking',
      en: 'Good records help the whole team. They also help the donors to trust the organisation.',
      ar: 'السجلات الجيدة تساعد الفريق كله. وتساعد أيضا المانحين على الثقة بالمنظمة.',
      card: { img: 'donor', en: 'the donors', ar: 'المانحون' } },
    { who: 'narr', face: 'warm',
      en: 'Fadi feels proud of this quiet, important role. At the moment, Fadi is training a new assistant.',
      ar: 'يشعر فادي بالفخر بهذا الدور الهادئ المهم. وفي هذه الأثناء يدرب مساعدة جديدة.' },
    { who: 'narr', face: 'warm',
      en: 'Her name is Samah, and she is learning fast. Fadi shows her the cash box every day.',
      ar: 'اسمها سماح، وهي تتعلم بسرعة. ويريها فادي صندوق النقد كل يوم.' },
    { who: 'narr', face: 'neutral',
      en: 'He teaches her how to write a clear entry. Samah watches, and she asks many good questions.',
      ar: 'يعلمها كيف تكتب قيدا واضحا. وسماح تراقب وتسأل أسئلة جيدة كثيرة.' },
    { who: 'narr', face: 'warm',
      en: 'Fadi enjoys this part of the job too. A good finance officer helps other people to learn.',
      ar: 'ويستمتع فادي بهذا الجزء من العمل أيضا. فالمسؤول المالي الجيد يساعد الآخرين على التعلم.' },
    { who: 'narr', face: 'warm',
      en: 'Every month, the team grows a little stronger. Fadi likes this idea very much.',
      ar: 'كل شهر يصبح الفريق أقوى قليلا. وتعجب فادي هذه الفكرة كثيرا.' }
  ]
});

/* ---------------------------------------------------------------
   Reading B — The Finance Team and the Whole Organisation.
   --------------------------------------------------------------- */
EAFM.scene('u1-reading-b', {
  set: 'office',
  cast: { narr: U1CAST.narr },
  lines: [
    { who: 'narr', face: 'neutral', cam: { shot: 'mid' },
      en: 'The finance team does not work alone. It sits at the centre of the whole organisation.',
      ar: 'لا يعمل الفريق المالي وحده. إنه يقع في قلب المنظمة كلها.' },
    { who: 'narr', face: 'neutral',
      en: 'Every day, it connects with many other people. Fadi works closely with three main groups.',
      ar: 'كل يوم يتواصل مع أشخاص كثيرين. ويعمل فادي عن قرب مع ثلاث مجموعات رئيسية.' },
    { who: 'narr', face: 'neutral',
      en: 'First, he works with the programme team. The programme managers run the projects on the ground.',
      ar: 'أولا، يعمل مع فريق البرامج. ومديرو البرامج يديرون المشاريع على الأرض.',
      card: { img: 'manager', en: 'the programme managers', ar: 'مديرو البرامج' } },
    { who: 'narr', face: 'neutral',
      en: 'They spend the money, and they depend on Fadi for good information. Layth is one of these managers.',
      ar: 'هم ينفقون المال، ويعتمدون على فادي للحصول على معلومات جيدة. ولَيث واحد من هؤلاء المديرين.' },
    { who: 'narr', face: 'thinking',
      en: 'He often asks Fadi a simple question: how much money do we still have?',
      ar: 'وكثيرا ما يسأل فادي سؤالا بسيطا: كم بقي لدينا من المال؟',
      card: { img: 'balance', en: 'how much do we have?', ar: 'كم لدينا؟' } },
    { who: 'narr', face: 'neutral',
      en: 'Second, Fadi works with the donors. The donors give the money for the projects.',
      ar: 'ثانيا، يعمل فادي مع المانحين. والمانحون يقدمون المال للمشاريع.',
      card: { img: 'donor', en: 'the donors', ar: 'المانحون' } },
    { who: 'narr', face: 'neutral',
      en: 'They want clear, honest reports. Fadi prepares these reports with great care.',
      ar: 'يريدون تقارير واضحة وصادقة. ويعد فادي هذه التقارير بعناية كبيرة.',
      card: { img: 'report', en: 'clear, honest reports', ar: 'تقارير واضحة وصادقة' } },
    { who: 'narr', face: 'warm',
      en: 'Ms Sophie represents one important donor. She reads Fadi’s numbers, and she trusts them.',
      ar: 'تمثل السيدة صوفي أحد المانحين المهمين. تقرأ أرقام فادي وتثق بها.' },
    { who: 'narr', face: 'neutral',
      en: 'Third, Fadi works with his own manager, Mr Haytham. Mr Haytham is the country finance manager.',
      ar: 'ثالثا، يعمل فادي مع مديره السيد هيثم، وهو المدير المالي للبلد.' },
    { who: 'narr', face: 'warm',
      en: 'He guides Fadi, and he checks the difficult accounts. Fadi learns something new from him every week.',
      ar: 'يوجه فادي ويراجع الحسابات الصعبة. ويتعلم فادي منه شيئا جديدا كل أسبوع.' },
    { who: 'narr', face: 'neutral',
      en: 'Above all these people sits the regional office in Amman. Ms Ingrid works there as the regional controller.',
      ar: 'وفوق كل هؤلاء يوجد المكتب الإقليمي في عمان. وتعمل السيدة إنغريد هناك مراقبة إقليمية.' },
    { who: 'narr', face: 'neutral',
      en: 'She makes sure that every office follows the same rules. Fadi sends her a report each month.',
      ar: 'تتأكد من أن كل مكتب يتبع القواعد نفسها. ويرسل إليها فادي تقريرا كل شهر.' },
    { who: 'narr', face: 'thinking',
      en: 'So the finance team is like a bridge. On one side stand the donors and the managers.',
      ar: 'إذا فالفريق المالي مثل جسر. على جانب يقف المانحون والمديرون.' },
    { who: 'narr', face: 'thinking',
      en: 'On the other side stand the projects and the people. Fadi carries clear, honest numbers across this bridge.',
      ar: 'وعلى الجانب الآخر تقف المشاريع والناس. ويحمل فادي أرقاما واضحة وصادقة عبر هذا الجسر.' },
    { who: 'narr', face: 'warm',
      en: 'Because of his work, everybody trusts the money. This trust is the real product of a good finance team.',
      ar: 'وبسبب عمله يثق الجميع بالمال. وهذه الثقة هي المنتج الحقيقي لفريق مالي جيد.' },
    { who: 'narr', face: 'warm',
      en: 'Fadi understands this well, and he protects that trust every single day.',
      ar: 'يفهم فادي هذا جيدا، ويحمي تلك الثقة كل يوم.' },
    { who: 'narr', face: 'neutral',
      en: 'He answers every question quickly and kindly. He explains the numbers in simple words.',
      ar: 'يجيب عن كل سؤال بسرعة ولطف. ويشرح الأرقام بكلمات بسيطة.' },
    { who: 'narr', face: 'neutral',
      en: 'When Layth asks about the budget, Fadi shows him a clear table. When Ms Sophie needs the report, Fadi sends it on time.',
      ar: 'وعندما يسأل لَيث عن الميزانية، يريه فادي جدولا واضحا. وعندما تحتاج السيدة صوفي إلى التقرير، يرسله فادي في موعده.' },
    { who: 'narr', face: 'neutral',
      en: 'Every month, he checks the budget again. Mr Haytham checks the hard accounts with him.',
      ar: 'كل شهر يراجع الميزانية من جديد. ويراجع السيد هيثم معه الحسابات الصعبة.' },
    { who: 'narr', face: 'neutral',
      en: 'Ms Ingrid reads the monthly report from Amman. Right now, the finance team is closing the accounts.',
      ar: 'وتقرأ السيدة إنغريد التقرير الشهري من عمان. وفي هذه اللحظة يغلق الفريق المالي الحسابات.' },
    { who: 'narr', face: 'warm',
      en: 'Together, this small team keeps the money safe. And safe money keeps the projects alive.',
      ar: 'ومعا يحافظ هذا الفريق الصغير على سلامة المال. والمال الآمن يبقي المشاريع حية.' }
  ]
});

/* ---------------------------------------------------------------
   Audio 1.5 — the stakeholder track: Fadi reports to Layth.
   --------------------------------------------------------------- */
EAFM.scene('u1-track', {
  set: 'office',
  cast: {
    fadi: U1CAST.fadi,
    haytham: { rig: 'm-50s-b', name: 'Mr Haytham', at: [0.70, 0.54], voice: 'm', pitch: 0.84 }
  },
  lines: [
    { who: 'haytham', face: 'neutral', cam: { shot: 'two' },
      en: 'Fadi, what are you working on this morning?',
      ar: 'فادي، على ماذا تعمل هذا الصباح؟' },
    { who: 'fadi', face: 'neutral', cam: { shot: 'mid' },
      en: 'Right now, I am reconciling the cash. Then I am preparing the donor report.',
      ar: 'في هذه اللحظة أطابق النقد. ثم أعد تقرير المانح.',
      card: { img: 'reconcile', en: 'reconciling the cash', ar: 'مطابقة النقد' } },
    { who: 'haytham', face: 'neutral', cam: { shot: 'cu' },
      en: 'Good. Ms Sophie needs it soon.',
      ar: 'جيد. السيدة صوفي تحتاج إليه قريبا.' },
    { who: 'fadi', face: 'thinking', cam: { shot: 'mid' },
      en: 'I know. I am checking every figure now. It is nearly ready.',
      ar: 'أعرف. أتحقق من كل رقم الآن. إنه شبه جاهز.' },
    { who: 'haytham', face: 'neutral', cam: { shot: 'two' },
      en: "And Layth's budget?",
      ar: 'وماذا عن ميزانية لَيث؟' },
    { who: 'fadi', face: 'neutral', cam: { shot: 'mid' },
      en: 'I update it every week. At the moment, his project is on track.',
      ar: 'أحدثها كل أسبوع. وفي هذه الأثناء مشروعه يسير في مساره.',
      card: { img: 'budget', en: "Layth's budget", ar: 'ميزانية لَيث' } },
    { who: 'haytham', face: 'warm', cam: { shot: 'two' },
      en: 'Excellent. You keep everything connected.',
      ar: 'ممتاز. أنت تبقي كل شيء مترابطا.' },
    { who: 'fadi', face: 'warm', cam: { shot: 'mid' },
      en: 'That is my job. I record, I check, and I report to everyone.',
      ar: 'هذا عملي. أسجل، وأتحقق، وأقدم تقريرا للجميع.' }
  ]
});

/* ---------------------------------------------------------------
   Part 8 — the consolidation text, as a scene so it can be heard.
   --------------------------------------------------------------- */
EAFM.scene('u1-consolidation', {
  set: 'office',
  cast: { narr: U1CAST.narr },
  lines: [
    { who: 'narr', face: 'neutral', cam: { shot: 'mid' },
      en: 'We use the present simple to talk about routines, habits, and facts. Fadi uses it all day.',
      ar: 'نستخدم المضارع البسيط للحديث عن الروتين والعادات والحقائق. ويستخدمه فادي طوال اليوم.' },
    { who: 'narr', face: 'neutral',
      en: 'He says, I record the transactions every morning. I reconcile the cash each week.',
      ar: 'يقول: أسجل العمليات كل صباح. وأطابق النقد كل أسبوع.' },
    { who: 'narr', face: 'neutral',
      en: 'The finance team prepares a report every month. These sentences describe regular actions, so we use the present simple.',
      ar: 'ويعد الفريق المالي تقريرا كل شهر. هذه الجمل تصف أفعالا منتظمة، لذلك نستخدم المضارع البسيط.' },
    { who: 'narr', face: 'thinking',
      en: 'With he, she, and it, we add an s to the verb. We say Fadi records, the team prepares, the manager checks.',
      ar: 'مع هو وهي، نضيف s إلى الفعل. نقول: فادي يسجل، الفريق يعد، المدير يتفقد.' },
    { who: 'narr', face: 'neutral',
      en: 'We use the present continuous for actions that happen now, at this moment.',
      ar: 'ونستخدم المضارع المستمر لأفعال تحدث الآن، في هذه اللحظة.' },
    { who: 'narr', face: 'neutral',
      en: 'We form it with am, is, or are, plus the verb and ing.',
      ar: 'ونكونه بـ am أو is أو are، مع الفعل و ing.' },
    { who: 'narr', face: 'neutral',
      en: 'Fadi says, right now I am checking the cash box. My manager is reading the report. The donors are waiting for the numbers.',
      ar: 'يقول فادي: في هذه اللحظة أتفقد صندوق النقد. ومديري يقرأ التقرير. والمانحون ينتظرون الأرقام.' },
    { who: 'narr', face: 'thinking',
      en: 'These actions are in progress, so we use the present continuous. The two tenses answer different questions.',
      ar: 'هذه الأفعال جارية، لذلك نستخدم المضارع المستمر. ويجيب الزمنان عن سؤالين مختلفين.' },
    { who: 'narr', face: 'neutral',
      en: 'The present simple answers, what do you usually do? The present continuous answers, what are you doing now?',
      ar: 'المضارع البسيط يجيب: ماذا تفعل عادة؟ والمضارع المستمر يجيب: ماذا تفعل الآن؟' },
    { who: 'narr', face: 'neutral',
      en: 'Fadi uses both tenses together very often. He often says, I usually work in the office. But today I am visiting a partner.',
      ar: 'ويستخدم فادي الزمنين معا كثيرا. كثيرا ما يقول: أعمل عادة في المكتب. لكنني اليوم أزور شريكا.' },
    { who: 'narr', face: 'thinking',
      en: 'In this one sentence, the present simple shows the routine, and the present continuous shows today.',
      ar: 'في هذه الجملة الواحدة، يظهر المضارع البسيط الروتين، ويظهر المضارع المستمر اليوم.' },
    { who: 'narr', face: 'warm',
      en: 'With these two tenses, Fadi describes his whole working life. Both tenses are simple, and both are very useful every day.',
      ar: 'بهذين الزمنين يصف فادي حياته العملية كلها. والزمنان بسيطان ومفيدان جدا كل يوم.' }
  ]
});
