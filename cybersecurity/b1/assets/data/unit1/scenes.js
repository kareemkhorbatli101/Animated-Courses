/* ============================================================
   Unit 1 — animated scene scripts.
   Each line: who · en · ar · face · cam · optional cue card.
   Timings are not authored: the player takes them from the MP3
   when one exists, and from the speech synthesiser otherwise.
   ============================================================ */

/* ---------- S1 · Study skills in the lab ---------- */
CSB1.scene('u1-vocab-lab', {
  set: 'cyberlab',
  cast: { narr: { rig: 'f-30s-a', name: 'Instructor', at: [0.22, 0.5], voice: 'f', scale: 1.05 } },
  lines: [
    { who: 'narr', face: 'warm', cam: { shot: 'mid' }, en: 'Welcome to the lab. Before we touch a single machine, let us talk about how you will study.', ar: 'أهلًا بكم في المختبر. قبل أن نلمس أي جهاز، لنتحدث عن طريقة دراستكم.' },
    { who: 'narr', en: 'Number one. Take notes. Write down every new term the first time you hear it.', ar: 'أولًا: دوّن الملاحظات. اكتب كل مصطلح جديد عند سماعه لأول مرة.', card: { img: 'take-notes', en: 'take notes', ar: 'تدوين الملاحظات' } },
    { who: 'narr', en: 'Number two. Find a quiet place. The booth at the back has a silence sign for a reason.', ar: 'ثانيًا: ابحث عن مكان هادئ. لوحة الصمت في الكابينة الخلفية موجودة لسبب.', card: { img: 'quiet-place', en: 'find a quiet place', ar: 'ابحث عن مكان هادئ' } },
    { who: 'narr', en: 'Number three. Do research. Read the advisory, read the report, then read it again.', ar: 'ثالثًا: ابحث واقرأ. اقرأ النشرة الأمنية ثم التقرير ثم أعد القراءة.', card: { img: 'do-research', en: 'do research', ar: 'البحث والاطّلاع' } },
    { who: 'narr', face: 'warm', en: 'Number four. Take a break. Nobody analyses a phishing email well after four hours without one.', ar: 'رابعًا: خذ استراحة. لا أحد يحلل رسالة تصيّد جيدًا بعد أربع ساعات دون راحة.', card: { img: 'take-break', en: 'take a break', ar: 'خذ استراحة' } },
    { who: 'narr', en: 'Number five. Search online — carefully, and in the databases we give you.', ar: 'خامسًا: ابحث عبر الإنترنت، بحذر، وفي قواعد البيانات التي نوفرها لكم.', card: { img: 'search-online', en: 'search online', ar: 'البحث عبر الإنترنت' } },
    { who: 'narr', en: 'Number six. Organize your materials. Cables, notebooks and folders, all in their place.', ar: 'سادسًا: نظّم موادك. الكابلات والدفاتر والملفات، كلٌّ في مكانه.', card: { img: 'organize', en: 'organize materials', ar: 'تنظيم المواد' } },
    { who: 'narr', en: 'Number seven. Make a study schedule. Monday ports, Tuesday five new terms, Wednesday an outline.', ar: 'سابعًا: ضع جدول دراسة. الاثنين المنافذ، الثلاثاء خمسة مصطلحات، الأربعاء مخطط.', card: { img: 'schedule', en: 'make a study schedule', ar: 'ضع جدول دراسة' } },
    { who: 'narr', en: 'Number eight. Memorize words. Phishing, payload, patch — say them until they are yours.', ar: 'ثامنًا: احفظ المفردات. تصيّد، حمولة، ترقيع — كررها حتى تصبح ملكك.', card: { img: 'memorize', en: 'memorize words', ar: 'حفظ المفردات' } },
    { who: 'narr', face: 'warm', en: 'And number nine. Make an outline before you write any incident report. Always.', ar: 'وتاسعًا: ضع مخططًا قبل كتابة أي تقرير حادثة. دائمًا.', card: { img: 'outline', en: 'make an outline', ar: 'ضع مخططًا' } }
  ]
});

/* ---------- S2 · Which pathway? ---------- */
CSB1.scene('u1-pathways', {
  set: 'office',
  cast: {
    joseph: { rig: 'm-50s-a', name: 'Joseph', at: [0.3, 0.52], voice: 'm', pitch: 0.92 },
    tara: { rig: 'f-20s-a', name: 'Tara', at: [0.68, 0.52], voice: 'f', pitch: 1.1 }
  },
  lines: [
    { who: 'tara', face: 'thinking', cam: { shot: 'two' }, en: 'Who can attend a community college cybersecurity program?', ar: 'من يستطيع الالتحاق ببرنامج الأمن السيبراني في كلية المجتمع؟' },
    { who: 'joseph', face: 'warm', en: 'Adults with a high school diploma or a GED.', ar: 'البالغون الحاصلون على شهادة الثانوية أو ما يعادلها.', card: { img: 'pw-college', en: 'community college', ar: 'كلية المجتمع' } },
    { who: 'tara', en: 'And who can attend an adult school?', ar: 'ومن يستطيع الالتحاق بمدرسة الكبار؟' },
    { who: 'joseph', en: 'Any adult, with or without a diploma. That is where many people start.', ar: 'أي بالغ، بشهادة أو بدونها. من هناك يبدأ كثيرون.', card: { img: 'pw-adult', en: 'adult school', ar: 'مدرسة الكبار' } },
    { who: 'tara', face: 'warm', en: 'And a bootcamp? Is that for one skill only?', ar: 'وماذا عن المعسكر التدريبي؟ هل هو لمهارة واحدة فقط؟' },
    { who: 'joseph', face: 'warm', en: 'Exactly. One specific skill, such as penetration testing or digital forensics.', ar: 'بالضبط. مهارة محددة واحدة، مثل اختبار الاختراق أو الأدلة الرقمية.', card: { img: 'pw-bootcamp', en: 'bootcamp', ar: 'معسكر تدريبي' } }
  ]
});

/* ---------- S3 · My first day on the lab floor ---------- */
CSB1.scene('u1-journal', {
  set: 'classroom',
  cast: { writer: { rig: 'f-20s-b', name: 'Journal', at: [0.5, 0.5], voice: 'f', scale: 1.1 } },
  lines: [
    { who: 'writer', face: 'neutral', cam: { shot: 'mid' }, en: 'Monday, September the tenth.', ar: 'الإثنين، العاشر من سبتمبر.' },
    { who: 'writer', face: 'worried', en: 'The first day of the cybersecurity course was very interesting. Our instructor asked us to analyse a phishing email in groups.', ar: 'كان اليوم الأول من دورة الأمن السيبراني ممتعًا جدًا. طلب منا المدرب تحليل رسالة تصيّد ضمن مجموعات.', card: { img: 'phish-email', en: 'a phishing email', ar: 'رسالة تصيّد احتيالي' } },
    { who: 'writer', face: 'worried', cam: { shot: 'cu' }, en: 'I was nervous at first because I usually like to work alone. I was afraid I might make a mistake and feel embarrassed. I was also worried about my technical vocabulary.', ar: 'كنت متوترة في البداية لأنني أفضّل العمل بمفردي عادةً. خفت أن أخطئ وأشعر بالإحراج. وكنت قلقة أيضًا بشأن مفرداتي التقنية.' },
    { who: 'writer', face: 'neutral', cam: { shot: 'mid' }, en: 'Our first task was to tell the group why we were studying cybersecurity. I had a lot to say, but I did not want to speak. My group had four students.', ar: 'كانت مهمتنا الأولى أن نخبر المجموعة لماذا ندرس الأمن السيبراني. كان لديّ الكثير لأقوله، لكنني لم أرغب في الكلام. كانت مجموعتي من أربعة طلاب.' },
    { who: 'writer', face: 'warm', en: 'Before we began, Kim whispered to me that she was nervous. I said, "Me too." I guess Maria heard us because she said, "Me three." Then Ali said, "Me four." We all laughed a lot.', ar: 'قبل أن نبدأ، همست لي كيم بأنها متوترة. قلت: "وأنا أيضًا". يبدو أن ماريا سمعتنا فقالت: "وأنا الثالثة". ثم قال علي: "وأنا الرابع". ضحكنا كثيرًا.' },
    { who: 'writer', face: 'warm', en: 'After that, we all felt more comfortable participating in the discussion even though our English was not perfect. The joke helped us overcome our fear of speaking and gave us confidence to speak up.', ar: 'بعد ذلك شعرنا جميعًا براحة أكبر في المشاركة رغم أن إنجليزيتنا لم تكن مثالية. ساعدتنا الدعابة على تجاوز خوفنا من الكلام ومنحتنا الثقة.' },
    { who: 'writer', face: 'warm', cam: { shot: 'cu' }, en: 'I want to work in groups again tomorrow because it gives me the chance to really practise. I will probably still be nervous, but I know that everything will be fine in the end — especially if we laugh together again. I think humour makes learning security more enjoyable.', ar: 'أريد العمل ضمن مجموعات مرة أخرى غدًا لأنها تمنحني فرصة حقيقية للتدرب. غالبًا سأبقى متوترة، لكنني أعلم أن كل شيء سيكون بخير في النهاية، خاصة إن ضحكنا معًا مجددًا. أعتقد أن الدعابة تجعل تعلّم الأمن أكثر متعة.' }
  ]
});

/* ---------- S4 · The shift notebook ---------- */
CSB1.scene('u1-notebook', {
  set: 'cyberlab',
  cast: { student: { rig: 'm-20s-a', name: 'Student', at: [0.34, 0.5], voice: 'm', scale: 1.05 } },
  lines: [
    { who: 'student', cam: { shot: 'mid' }, en: 'I write my tasks in a notebook every day so I do not forget what to do.', ar: 'أكتب مهامي في دفتر كل يوم حتى لا أنسى ما يجب فعله.', card: { img: 'take-notes', en: 'every day — simple present', ar: 'كل يوم — المضارع البسيط' } },
    { who: 'student', en: 'In my security class we learn five new terms every day, and I always write them down and memorize them.', ar: 'في صف الأمن نتعلم خمسة مصطلحات جديدة كل يوم، وأكتبها دائمًا وأحفظها.' },
    { who: 'student', face: 'thinking', en: 'On Monday night, I wrote my incident report while I was eating dinner.', ar: 'ليلة الإثنين كتبت تقرير الحادثة بينما كنت أتناول العشاء.', card: { img: 'outline', en: 'while I was eating — past continuous', ar: 'بينما كنت آكل — الماضي المستمر' } },
    { who: 'student', en: 'On Tuesday night, I answered the questions for my networking class.', ar: 'وليلة الثلاثاء أجبت عن أسئلة صف الشبكات.' },
    { who: 'student', face: 'warm', en: 'Today is Wednesday, and I am at the lab memorizing this week\'s new terms and preparing for tomorrow\'s class.', ar: 'اليوم هو الأربعاء، وأنا في المختبر أحفظ مصطلحات هذا الأسبوع وأستعد لدرس الغد.', card: { img: 'memorize', en: 'I am memorizing — present continuous', ar: 'أنا أحفظ — المضارع المستمر' } }
  ]
});

/* ---------- S5 · Ten voices (tense identification) ---------- */
CSB1.scene('u1-ten-voices', {
  set: 'soc',
  cast: {
    a: { rig: 'f-20s-a', name: 'Speaker 1', at: [0.16, 0.5], voice: 'f', scale: 0.9 },
    b: { rig: 'm-20s-b', name: 'Speaker 2', at: [0.38, 0.5], voice: 'm', scale: 0.9 },
    c: { rig: 'f-30s-h', name: 'Speaker 3', at: [0.62, 0.5], voice: 'f', pitch: 0.95, scale: 0.9 },
    e: { rig: 'm-50s-b', name: 'Speaker 4', at: [0.85, 0.5], voice: 'm', pitch: 0.88, scale: 0.9 }
  },
  lines: [
    { who: 'a', en: 'I check the alert queue every morning.', ar: 'أتفقد قائمة التنبيهات كل صباح.' },
    { who: 'b', en: 'I am reading the incident report right now.', ar: 'أنا أقرأ تقرير الحادثة الآن.' },
    { who: 'c', en: 'We patched all the servers last night.', ar: 'قمنا بترقيع جميع الخوادم ليلة أمس.' },
    { who: 'e', en: 'I was watching the dashboard when the alarm started.', ar: 'كنت أراقب لوحة المعلومات عندما بدأ الإنذار.' },
    { who: 'a', en: 'She writes a summary after every shift.', ar: 'تكتب ملخصًا بعد كل وردية.' },
    { who: 'b', en: 'They are testing the new firewall at the moment.', ar: 'إنهم يختبرون جدار الحماية الجديد في هذه اللحظة.' },
    { who: 'c', en: 'He reported the phishing email on Tuesday.', ar: 'أبلغ عن رسالة التصيّد يوم الثلاثاء.' },
    { who: 'e', en: 'We were training the new analysts all afternoon.', ar: 'كنا ندرّب المحللين الجدد طوال فترة بعد الظهر.' },
    { who: 'a', en: 'The team backs up the files every Friday.', ar: 'يقوم الفريق بالنسخ الاحتياطي كل جمعة.' },
    { who: 'b', en: 'I am learning five new commands this week.', ar: 'أتعلم خمسة أوامر جديدة هذا الأسبوع.' }
  ]
});

/* ---------- S7 · Tara meets her mentor ---------- */
CSB1.scene('u1-career-chat', {
  set: 'office',
  cast: {
    joseph: { rig: 'm-50s-a', name: 'Joseph Weston', at: [0.3, 0.52], voice: 'm', pitch: 0.92, rate: 0.97 },
    tara: { rig: 'f-20s-a', name: 'Tara Mansour', at: [0.68, 0.52], voice: 'f', pitch: 1.1 }
  },
  lines: [
    { who: 'joseph', face: 'warm', cam: { shot: 'two' }, en: 'Welcome, Tara. I am Joseph, your cyber career mentor.', ar: 'أهلًا يا تارا. أنا جوزيف، مرشدك المهني في الأمن السيبراني.', card: { img: 'mentor-badge', en: 'cyber career mentor', ar: 'مرشد مهني في الأمن السيبراني' } },
    { who: 'tara', face: 'worried', cam: { shot: 'cu' }, en: 'Thank you for meeting with me. I am getting nervous about my career plans.', ar: 'شكرًا لمقابلتي. بدأت أشعر بالقلق بشأن خططي المهنية.' },
    { who: 'joseph', face: 'warm', cam: { shot: 'mid' }, en: 'Let us talk about your interests. What kinds of things do you like to do?', ar: 'لنتحدث عن اهتماماتك. ما نوع الأشياء التي تحبين فعلها؟' },
    { who: 'tara', face: 'thinking', cam: { shot: 'cu' }, en: 'I am just not sure. I think I would like to work with people. I ran the school cyber club last year, and I volunteered at the community tech help desk. I really enjoyed that.', ar: 'لست متأكدة تمامًا. أظن أنني أود العمل مع الناس. أدرت نادي الأمن السيبراني في المدرسة العام الماضي، وتطوعت في مكتب الدعم التقني المجتمعي. استمتعت بذلك حقًا.', card: { img: 'handover', en: 'working with people', ar: 'العمل مع الناس' } },
    { who: 'joseph', cam: { shot: 'mid' }, en: 'How about a career in security awareness training? Do you think you would like that?', ar: 'ما رأيك بمهنة في التوعية الأمنية؟ هل تظنين أنها ستعجبك؟' },
    { who: 'tara', face: 'thinking', cam: { shot: 'cu' }, en: 'It is hard to say. I am getting good grades in networking, and my aunt is a security engineer. There are so many choices.', ar: 'من الصعب أن أقول. درجاتي جيدة في الشبكات، وخالتي مهندسة أمن. هناك خيارات كثيرة جدًا.' },
    { who: 'joseph', face: 'warm', cam: { shot: 'two' }, en: 'Why do you not come to our cyber career talk next Tuesday? You can learn more about your choices.', ar: 'لماذا لا تحضرين محاضرتنا المهنية في الأمن السيبراني الثلاثاء القادم؟ ستتعرفين أكثر على خياراتك.' },
    { who: 'tara', face: 'warm', en: 'It is not certain yet, but I will try. After school I go to the lab anyway.', ar: 'الأمر غير مؤكد بعد، لكنني سأحاول. فأنا أذهب إلى المختبر بعد الدوام على أي حال.' }
  ]
});

/* ---------- S8 · Mouth-cam: sh, ch, j ---------- */
CSB1.scene('u1-mouthcam', {
  set: 'office',
  cast: { tara: { rig: 'f-20s-a', name: 'Tara', at: [0.5, 0.52], voice: 'f', pitch: 1.08, scale: 1.1 } },
  lines: [
    { who: 'tara', cam: { shot: 'cu' }, en: 'I enjoyed that.', ar: 'استمتعت بذلك.', card: { img: 'memorize', en: 'j  —  enjoyed', ar: 'صوت j' } },
    { who: 'tara', cam: { shot: 'cu' }, en: 'It is hard to choose.', ar: 'من الصعب الاختيار.', card: { img: 'memorize', en: 'ch  —  choose', ar: 'صوت ch' } },
    { who: 'tara', cam: { shot: 'cu' }, en: 'You should think about a career in digital forensics.', ar: 'يجدر بك التفكير في مهنة بالأدلة الجنائية الرقمية.', card: { img: 'memorize', en: 'sh  —  should', ar: 'صوت sh' } },
    { who: 'tara', cam: { shot: 'cu' }, en: 'I am just not sure.', ar: 'لست متأكدة ببساطة.' },
    { who: 'tara', cam: { shot: 'cu' }, en: 'There are so many choices.', ar: 'هناك خيارات كثيرة جدًا.' }
  ]
});

/* ---------- S9 · Carlos and Joseph ---------- */
CSB1.scene('u1-carlos', {
  set: 'office',
  cast: {
    joseph: { rig: 'm-50s-a', name: 'Joseph Weston', at: [0.3, 0.52], voice: 'm', pitch: 0.92, rate: 0.97 },
    carlos: { rig: 'm-20s-a', name: 'Carlos Rivera', at: [0.68, 0.52], voice: 'm', pitch: 1.12 }
  },
  lines: [
    { who: 'joseph', face: 'warm', cam: { shot: 'two' }, en: 'Welcome, Carlos. I am Joseph, your cyber career mentor.', ar: 'أهلًا يا كارلوس. أنا جوزيف، مرشدك المهني في الأمن السيبراني.' },
    { who: 'carlos', face: 'worried', cam: { shot: 'cu' }, en: 'Thank you for meeting with me. I am getting nervous about my career plans.', ar: 'شكرًا لمقابلتي. بدأت أشعر بالقلق بشأن خططي المهنية.' },
    { who: 'joseph', cam: { shot: 'mid' }, en: 'Let us talk about your interests. What kinds of things do you like to do?', ar: 'لنتحدث عن اهتماماتك. ما نوع الأشياء التي تحب فعلها؟' },
    { who: 'carlos', face: 'thinking', cam: { shot: 'cu' }, en: 'I am just not sure. I think I would like to work with people. I volunteered at the community IT help desk last year, and I really enjoyed that.', ar: 'لست متأكدًا. أظن أنني أود العمل مع الناس. تطوعت في مكتب الدعم التقني المجتمعي العام الماضي واستمتعت بذلك حقًا.', card: { img: 'handover', en: 'the IT help desk', ar: 'مكتب الدعم التقني' } },
    { who: 'joseph', cam: { shot: 'mid' }, en: 'How about a career in SOC analysis? Do you think you would like that?', ar: 'ما رأيك بمهنة في تحليل مركز العمليات الأمنية؟ هل تظن أنها ستعجبك؟', card: { img: 'handover', en: 'SOC analyst', ar: 'محلل مركز العمليات الأمنية' } },
    { who: 'carlos', face: 'thinking', cam: { shot: 'cu' }, en: 'It is hard to say. I am getting good grades in networking, and my aunt is a security engineer.', ar: 'من الصعب أن أقول. درجاتي جيدة في الشبكات، وخالتي مهندسة أمن.' },
    { who: 'joseph', face: 'warm', cam: { shot: 'two' }, en: 'Why do you not come to our cyber career talk next Tuesday? You can learn more about your choices.', ar: 'لماذا لا تحضر محاضرتنا المهنية الثلاثاء القادم؟ ستتعرف أكثر على خياراتك.' }
  ]
});

/* ---------- S10 · The apprentice interview ---------- */
CSB1.scene('u1-apprentice', {
  set: 'soc',
  cast: { ray: { rig: 'm-30s-a', name: 'Ray — security technician', at: [0.5, 0.5], voice: 'm', pitch: 0.96, scale: 1.05 } },
  lines: [
    { who: 'ray', face: 'warm', cam: { shot: 'mid' }, en: 'When it was time for high school, my teachers encouraged me to apply to Freemont.', ar: 'عندما حان وقت الثانوية، شجعني معلّميّ على التقديم إلى فريمونت.' },
    { who: 'ray', en: 'Freemont gave me the chance to practise in the real world and study hard at the same time.', ar: 'منحتني فريمونت فرصة التدرب في العالم الحقيقي والدراسة بجد في الوقت نفسه.' },
    { who: 'ray', en: 'So I took all my academic classes and a lot of security classes.', ar: 'لذلك درست كل موادي الأكاديمية والكثير من مواد الأمن السيبراني.' },
    { who: 'ray', face: 'warm', cam: { shot: 'cu' }, en: 'Now I am working as a security technician during the day, and I finish my degree at night.', ar: 'والآن أعمل فنيّ أمن نهارًا، وأكمل شهادتي ليلًا.', card: { img: 'two-factor', en: 'security technician', ar: 'فني أمن سيبراني' } }
  ]
});

/* ---------- S11 · Ask Allison ---------- */
CSB1.scene('u1-ask-allison', {
  set: 'newsdesk',
  cast: {
    allison: { rig: 'f-30s-a', name: 'Allison Reed', at: [0.26, 0.5], voice: 'f', pitch: 1.02, scale: 1.0 },
    reader: { rig: 'm-20s-b', name: 'A reader', at: [0.74, 0.5], voice: 'm', pitch: 1.06, scale: 1.0 }
  },
  lines: [
    { who: 'reader', face: 'worried', cam: { shot: 'cu' }, en: 'Dear Allison. I used the same password for everything. Last week somebody got into my email. I do not know what to do. Locked Out.', ar: 'عزيزتي أليسون: استخدمت كلمة المرور نفسها لكل شيء. الأسبوع الماضي دخل أحدهم بريدي. لا أعرف ماذا أفعل. — محبوس خارجًا.' },
    { who: 'allison', face: 'warm', cam: { shot: 'mid' }, en: 'Dear Locked Out. No need to worry. Change that password today and get a password manager. It is free, and it makes a different password for every site. Then turn on two-factor authentication. It is easy. You can do it!', ar: 'عزيزي محبوس خارجًا: لا داعي للقلق. غيّر كلمة المرور اليوم واحصل على مدير كلمات مرور. إنه مجاني ويُنشئ كلمة مختلفة لكل موقع. ثم فعّل المصادقة الثنائية. الأمر سهل. تستطيع فعلها!', card: { img: 'password-manager', en: 'a password manager', ar: 'مدير كلمات المرور' } },
    { who: 'reader', cam: { shot: 'cu' }, en: 'Dear Allison. I need to research cyber career choices. I want to search for jobs online, but I do not have access to the Internet. What should I do? Looking in Laredo.', ar: 'عزيزتي أليسون: أريد البحث عن خيارات مهنية في الأمن السيبراني والوظائف عبر الإنترنت، لكن لا يوجد لديّ اتصال. ماذا أفعل؟ — باحث في لاريدو.' },
    { who: 'allison', cam: { shot: 'mid' }, en: 'Dear Laredo. There is no need to worry. Most libraries have computers. Get a library card — it is free — and you can be online in no time. The librarians are very helpful. They even let you sign up for computer time in advance so you do not wait in line.', ar: 'عزيزي لاريدو: لا داعي للقلق. معظم المكتبات لديها حواسيب. احصل على بطاقة مكتبة، وهي مجانية، وستكون متصلًا في وقت قصير. أمناء المكتبة متعاونون جدًا، بل يتيحون لك حجز وقت الحاسوب مسبقًا لتتجنب الانتظار.', card: { img: 'library', en: 'the public library', ar: 'المكتبة العامة' } },
    { who: 'reader', face: 'worried', cam: { shot: 'cu' }, en: 'Dear Allison. My son is in high school. His online safety homework is very difficult. I try to help him, but sometimes it is over my head. Please help. Frustrated Father. P.S. I dislike computers. Please do not tell me to use one!', ar: 'عزيزتي أليسون: ابني في الثانوية وواجبه عن الأمان الرقمي صعب جدًا. أحاول مساعدته لكنه أحيانًا يفوق فهمي. أرجو المساعدة. — أب محبط. ملاحظة: لا أحب الحواسيب، أرجو ألا تطلبي مني استخدام واحد!' },
    { who: 'allison', face: 'warm', cam: { shot: 'mid' }, en: 'Dear Frustrated. Do not worry! Your library can help. Many libraries have free homework help centres and free family guides about staying safe online. Go to the library with your son and ask a librarian for advice. Anyone can do it!', ar: 'عزيزي المحبط: لا تقلق! مكتبتك تستطيع المساعدة. كثير من المكتبات لديها مراكز مجانية لمساعدة الواجبات وأدلة عائلية مجانية عن الأمان الرقمي. اذهب مع ابنك واسأل أمين المكتبة. أي شخص يستطيع ذلك!' },
    { who: 'reader', face: 'worried', cam: { shot: 'cu' }, en: 'Dear Allison. I got an email that said my account would close today. I clicked the link. Now I am worried. Phished Once.', ar: 'عزيزتي أليسون: وصلتني رسالة تقول إن حسابي سيُغلق اليوم، فنقرت الرابط. والآن أنا قلق. — وقعت في التصيّد.' },
    { who: 'allison', face: 'warm', cam: { shot: 'mid' }, en: 'Dear Phished Once. You are not alone, and it is not too late. Change your password now, turn on two-factor authentication, report the message to your company, and run your updates. It is easy, and you can do it!', ar: 'عزيزي من وقع في التصيّد: لست وحدك، ولم يفت الأوان. غيّر كلمة المرور الآن، وفعّل المصادقة الثنائية، وأبلغ شركتك عن الرسالة، وثبّت التحديثات. الأمر سهل، وتستطيع فعله!', card: { img: 'two-factor', en: 'two-factor authentication', ar: 'المصادقة الثنائية' } }
  ]
});

/* ---------- S12 · Shift handover (At Work) ---------- */
CSB1.scene('u1-handover', {
  set: 'soc',
  cast: {
    lead: { rig: 'f-50s-a', name: 'Dana — shift lead', at: [0.22, 0.5], voice: 'f', pitch: 0.96, scale: 0.98 },
    omar: { rig: 'm-20s-b', name: 'Omar', at: [0.5, 0.5], voice: 'm', pitch: 1.08, scale: 0.98 },
    priya: { rig: 'f-30s-h', name: 'Priya', at: [0.78, 0.5], voice: 'f', pitch: 1.12, scale: 0.98 }
  },
  lines: [
    { who: 'lead', face: 'warm', cam: { shot: 'mid' }, en: 'Good evening, everyone. Let us do the handover. Omar, what happened on your shift?', ar: 'مساء الخير جميعًا. لنبدأ تسليم الوردية. عمر، ماذا حدث في ورديتك؟' },
    { who: 'omar', en: 'We had nine tickets. I searched online for the advisory and I took notes in the meeting.', ar: 'كان لدينا تسع تذاكر. بحثت عبر الإنترنت عن النشرة الأمنية ودوّنت الملاحظات في الاجتماع.', cue: 'take notes' },
    { who: 'lead', face: 'thinking', en: 'Uh-huh.', ar: 'أها.', cue: ['Uh-huh.', 'nod your head slowly'] },
    { who: 'lead', face: 'warm', en: 'Go on.', ar: 'تابع.', cue: ['Go on…', 'lean forward'] },
    { who: 'omar', en: 'I could not concentrate at first, so I went to find a quiet place, and then I made an outline of the report.', ar: 'لم أستطع التركيز في البداية، فذهبت لأجد مكانًا هادئًا، ثم وضعت مخططًا للتقرير.' },
    { who: 'lead', face: 'surprised', en: 'Really? That is a good habit.', ar: 'حقًا؟ هذه عادة جيدة.', cue: ['Really?', 'make eye contact'] },
    { who: 'priya', en: 'I talked to the manager about the patch window, and we made a schedule for Tuesday night.', ar: 'تحدثت مع المديرة بشأن نافذة الترقيع، ووضعنا جدولًا لليلة الثلاثاء.' },
    { who: 'lead', face: 'thinking', en: 'Hmm. And did you order the new hardware keys?', ar: 'همم. وهل طلبتِ مفاتيح الأمان الجديدة؟', cue: ['Hmm…', 'tilt your head to one side'] },
    { who: 'priya', face: 'warm', en: 'Yes, I did. They arrive on Thursday. I had to memorize a code to collect them.', ar: 'نعم فعلت. ستصل يوم الخميس. اضطررت لحفظ رمز لاستلامها.' },
    { who: 'lead', en: 'One more thing — both of you, take a break before the night shift.', ar: 'أمر أخير: خذا استراحة قبل الوردية الليلية.' },
    { who: 'omar', face: 'warm', en: 'Oh! Thank you. We will.', ar: 'أوه! شكرًا لك. سنفعل.', cue: 'Oh!' }
  ]
});

/* ---------- S14 · Teresa's first night ---------- */
CSB1.scene('u1-teresa', {
  set: 'soc',
  cast: { narr: { rig: 'f-30s-a', name: 'About Teresa', at: [0.5, 0.5], voice: 'f', scale: 1.05 } },
  lines: [
    { who: 'narr', cam: { shot: 'mid' }, en: 'Teresa is a new analyst on the night shift at Mid-City.', ar: 'تيريزا محللة جديدة في الوردية الليلية في ميد-سيتي.' },
    { who: 'narr', face: 'neutral', en: 'The team started three weeks ago, but today is Teresa\'s first day. She likes the work and the supervisor very much, but she is a little worried about making friends.', ar: 'بدأ الفريق قبل ثلاثة أسابيع، لكن اليوم هو أول يوم لتيريزا. تحب العمل والمشرفة كثيرًا، لكنها قلقة قليلًا بشأن تكوين صداقات.' },
    { who: 'narr', face: 'worried', cam: { shot: 'cu' }, en: 'The other analysts already know each other very well. Some even studied together last year. Teresa does not like being the only new person on the team.', ar: 'المحللون الآخرون يعرفون بعضهم جيدًا. بعضهم درس معًا العام الماضي. لا تحب تيريزا أن تكون الشخص الجديد الوحيد في الفريق.' },
    { who: 'narr', face: 'worried', en: 'All the other analysts are having fun together. Teresa feels alone.', ar: 'جميع المحللين الآخرين يقضون وقتًا ممتعًا معًا. تشعر تيريزا بالوحدة.' }
  ]
});
