/* ============================================================
   Unit 1 — the Arabic guide.

   A SCAFFOLD, NOT A TRANSLATION OF THE EXERCISE. Three kinds of
   string live here and nothing else:

     · the directions, so a learner who cannot read the instruction
       can still start the task
     · the key words the exercise asks you to place, each shown
       beside its English
     · the reading or the conversation, so comprehension work is not
       blocked by decoding

   The questions, the options and the worked reasons are deliberately
   absent. A learner who can read the answer in Arabic has not done
   the exercise, and a drag pool of Arabic chips would be a different
   exercise altogether.

   KEYED BY THE ENGLISH SOURCE TEXT, not by an id, so a translation
   can never be attached to the wrong sentence. CSB1.arabic() runs
   every key through CSB1.arKey(): markup stripped, curly quotes
   normalised, whitespace collapsed — so rewrapping a sentence in a
   data file does not orphan its translation, while rewriting the
   words does, and tools/check-arabic.cjs reports it.

   NOT NATIVE-REVIEWED. Neither is the Arabic already in scenes.js
   and glossary.js. This should be read by an Arabic speaker before
   it is relied on in a classroom.
   ============================================================ */
CSB1.arabic({

  /* ---------- the words each exercise asks you to place ---------- */

  'Say the nine study skills out loud from memory': 'قُلْ مهارات الدراسة التسع بصوت عالٍ من الذاكرة',
  'Listen to a security podcast on the bus': 'استمع إلى بودكاست أمني في الحافلة',
  'Write a short incident report every week': 'اكتب تقرير حادثة قصيرًا كل أسبوع',
  'Read one advisory a day': 'اقرأ نشرة تحذيرية واحدة كل يوم',
  'Narrate a hands-on lab in English while you do it': 'اشرح تمرين المختبر بالإنجليزية أثناء تنفيذه',
  'Re-read your own notes': 'أعد قراءة ملاحظاتك',
  'Teach a new term to a classmate': 'عَلِّم زميلًا مصطلحًا جديدًا',
  'Watch a video of someone else doing the lab': 'شاهد فيديو لشخص آخر ينفّذ التمرين',
  'Label everything in the lab in English': 'ضَعْ أسماءً إنجليزية على كل شيء في المختبر',
  'Read the lab manual before class': 'اقرأ دليل المختبر قبل الحصة',

  'take notes': 'تدوين الملاحظات',
  'find a quiet place': 'إيجاد مكان هادئ',
  'do research': 'إجراء بحث',
  'take a break': 'أخذ استراحة',
  'search online': 'البحث عبر الإنترنت',
  'organize materials': 'ترتيب المواد',
  'make a study schedule': 'وضع جدول للدراسة',
  'memorize words': 'حفظ الكلمات',
  'make an outline': 'إعداد مخطّط',

  'digital-literacy class': 'صف المهارات الرقمية الأساسية',
  'IT fundamentals course': 'دورة أساسيات تقنية المعلومات',
  'high-school cyber academy': 'أكاديمية الأمن السيبراني الثانوية',
  'adult school': 'مدرسة تعليم الكبار',
  'community college': 'كلية المجتمع',
  'university': 'جامعة',
  'bootcamp': 'معسكر تدريبي مكثّف',

  'My first morning': 'صباحي الأول',
  'What helped was': 'ما ساعدني هو',
  'After this experience I learned that': 'بعد هذه التجربة تعلّمتُ أنّ',
  'was': 'كان',
  'wrote': 'كتبَ',
  'showed': 'أظهرَ',
  'explained': 'شرحَ',
  'stopped': 'توقّفَ',
  'tried': 'حاولَ',
  'was asking': 'كان يسأل',

  'I write my tasks in a notebook': 'أكتب مهامّي في دفتر',
  'we learn five new terms': 'نتعلّم خمسة مصطلحات جديدة',
  'I always write them down': 'أدوّنها دائمًا',
  'I wrote my incident report': 'كتبتُ تقرير الحادثة',
  'I answered the questions': 'أجبتُ عن الأسئلة',
  'I was eating dinner': 'كنتُ أتناول العشاء',
  'I am memorizing this week’s new terms': 'أنا أحفظ مصطلحات هذا الأسبوع الجديدة',
  'I am preparing for tomorrow’s class': 'أنا أستعدّ لحصة الغد',

  'just': 'فقط',
  'just not': 'ببساطة لستُ',
  'to say': 'أن أقول',
  'hard to': 'من الصعب أن',
  'sure': 'متأكّد',
  'choices': 'خيارات',
  'should': 'ينبغي',
  'digital forensics': 'التحليل الجنائي الرقمي',
  'choose': 'يختار',
  'machine': 'جهاز',
  'patch': 'رقعة تحديث',
  'enjoyed': 'استمتعَ',
  'phishing': 'التصيّد الاحتيالي',
  'branch': 'فرع',
  'digital': 'رقمي',
  'manager': 'مدير',
  'permission': 'صلاحية',

  'stay calm under pressure': 'البقاء هادئًا تحت الضغط',
  'write clear reports': 'كتابة تقارير واضحة',
  'read network diagrams': 'قراءة مخطّطات الشبكة',
  'explain things simply': 'شرح الأمور ببساطة',
  'think like an attacker': 'التفكير كما يفكّر المهاجم',
  'listen patiently': 'الإنصات بصبر',
  'work night shifts': 'العمل في المناوبات الليلية',
  'configure firewalls': 'إعداد الجدران النارية',
  'teach a class': 'تدريس صف',
  'follow a procedure exactly': 'اتّباع إجراء بدقّة',
  'notice small details': 'ملاحظة التفاصيل الصغيرة',
  'be polite on the phone': 'التحلّي باللباقة على الهاتف',
  'keep a secret': 'حفظ السرّ',
  'learn new tools quickly': 'تعلّم أدوات جديدة بسرعة',

  'like': 'يحبّ',
  'agree': 'يوافق',
  'obey': 'يطيع',
  'organized': 'منظَّم',
  'respect': 'يحترم',
  'able': 'قادر',
  'satisfied': 'راضٍ',
  'arm': 'يسلّح',
  'connect': 'يوصل',
  'honest': 'صادق',
  'happy': 'سعيد',
  'possible': 'ممكن',
  'legal': 'قانوني',
  'secure': 'آمن',

  'SOC dashboard screenshots': 'لقطات شاشة من لوحة مركز العمليات الأمنية',
  'an annotated attack map': 'خريطة هجوم مشروحة',
  'a packet-capture diagram': 'مخطّط التقاط الحِزَم',
  'a recorded lab walkthrough': 'جولة مسجّلة في المختبر',
  'a conference talk with slides': 'محاضرة مؤتمر مع شرائح عرض',
  'a vendor demonstration': 'عرض توضيحي من المورّد',
  'explaining a term to a classmate': 'شرح مصطلح لزميل',
  'presenting a phishing analysis': 'تقديم تحليل لرسالة تصيّد',
  'a hands-on firewall lab': 'تمرين عملي على الجدار الناري',
  'a capture-the-flag exercise': 'تمرين التقاط الراية',
  'tutoring a new trainee': 'تدريب متدرّب جديد',
  'a mock shift handover': 'تسليم مناوبة تجريبي',

  /* ---------- the directions ---------- */

  'Here are twelve ways to learn and practise cybersecurity English. Sort each one into the right column: do you only take English in , or does it make you produce English? Two are already done. Press Check answers for your score and the reason behind every one.':
    'أمامك اثنتا عشرة طريقة لتعلّم إنجليزية الأمن السيبراني وممارستها. صنّف كل واحدة في العمود المناسب: هل تستقبل الإنجليزية فقط، أم تدفعك إلى إنتاجها؟ اثنتان محلولتان سلفًا. اضغط «تحقّق من الإجابات» لترى نتيجتك وسبب كل إجابة.',
  'Click an activity, then click a column — or drag it there. Double-click one in a column to take it back out.':
    'انقر على نشاط ثم انقر على العمود، أو اسحبه إليه. انقر نقرًا مزدوجًا على نشاط داخل عمود لإخراجه.',
  'Match the nine study-skill words with the nine pictures. Drag a word onto the picture it belongs to — or click the word, then click the picture. Number 1 is done for you.':
    'طابِق كلمات مهارات الدراسة التسع مع الصور التسع. اسحب الكلمة إلى صورتها، أو انقر الكلمة ثم انقر الصورة. الرقم ١ محلول لك.',
  'Click a word, then click its picture — or drag it there. Double-click a picture to take the word off again.':
    'انقر الكلمة ثم انقر صورتها، أو اسحبها إليها. انقر نقرًا مزدوجًا على الصورة لإزالة الكلمة.',
  'Listen to the instructor go through her nine rules for the lab. Then complete her summary below: drag each expression into the gap where it belongs. Tap the speaker on a tile to hear the expression again and say it after her.':
    'استمع إلى المدرّبة وهي تستعرض قواعد المختبر التسع. ثم أكمل ملخّصها أدناه: اسحب كل تعبير إلى الفراغ المناسب. اضغط رمز الصوت على البطاقة لسماع التعبير مرة أخرى وردّده بعدها.',
  'Tara is asking you how you study. Her lines are already written, and each one contains the clue you need: read it, then drop in the study skill that answers it. Press Check answers when all five gaps are filled, then play the whole conversation and say your lines aloud.':
    'تسألك تارا عن طريقتك في الدراسة. جُمَلها مكتوبة سلفًا، وكل جملة تحمل المفتاح الذي تحتاجه: اقرأها ثم ضع مهارة الدراسة التي تجيب عنها. اضغط «تحقّق من الإجابات» بعد ملء الفراغات الخمسة، ثم شغّل المحادثة كاملة وانطق جُمَلك بصوت عالٍ.',
  'The nine study skills — click one, then click the gap it belongs in, or drag it there. Double-click a gap to empty it.':
    'مهارات الدراسة التسع — انقر إحداها ثم انقر الفراغ المناسب، أو اسحبها إليه. انقر نقرًا مزدوجًا على الفراغ لإفراغه.',
  'Complete the "Pathways into Cybersecurity" brochure with the names of the seven pathways. The first one is done for you.':
    'أكمل نشرة «مسارات الدخول إلى الأمن السيبراني» بأسماء المسارات السبعة. المسار الأول محلول لك.',
  'Watch Tara ask her mentor about the pathways. Then you are Tara: Joseph’s answers are already written, so each one tells you which pathway you must have asked about. Put the right pathway in each gap and press Check answers.':
    'شاهد تارا وهي تسأل مُرشِدها عن المسارات. ثم كُن أنت تارا: إجابات جوزيف مكتوبة سلفًا، وكل إجابة تدلّك على المسار الذي سألتَ عنه. ضع المسار الصحيح في كل فراغ ثم اضغط «تحقّق من الإجابات».',
  'Click a pathway, then click the gap it belongs in — or drag it there.':
    'انقر المسار ثم انقر الفراغ المناسب، أو اسحبه إليه.',
  'Work in a team. Conduct research. Look at websites and/or survey your classmates in order to report on the question below. What cybersecurity pathways are located in your area? Name the one closest to you.':
    'اعمل ضمن فريق وأجرِ بحثًا. اطّلع على مواقع إلكترونية أو استطلع آراء زملائك للإجابة عن السؤال أدناه: ما مسارات الأمن السيبراني المتاحة في منطقتك؟ اذكر أقربها إليك.',
  'Report the results of your research to the class. Use the sentence stems, then listen to your own report.':
    'اعرض نتائج بحثك على الصف. استعن ببدايات الجمل، ثم استمع إلى عرضك بصوتك.',
  'A study skill is spoken aloud — point at the picture in the Cyber Lab that shows it. Nine words, three rounds, scored. Nothing to look up: listen, then click.':
    'تُنطَق مهارة دراسة بصوت عالٍ — أشِر إلى الصورة التي تمثّلها في المختبر السيبراني. تسع كلمات، ثلاث جولات، مع التقييم. لا شيء للبحث عنه: استمع ثم انقر.',
  'Look at the picture, then read the whole entry. You can listen to it, hear one paragraph at a time, or watch the writer tell it. Then answer the three questions. All three ask what happened, so all three answers are in the past.':
    'انظر إلى الصورة ثم اقرأ المُدوّنة كاملة. يمكنك الاستماع إليها، أو سماع فقرة واحدة في كل مرة، أو مشاهدة الكاتبة ترويها. ثم أجب عن الأسئلة الثلاثة. جميعها تسأل عمّا حدث، فجميع الإجابات في الماضي.',
  'Here is another trainee’s first day, in three paragraphs — but they are in the wrong order. Read them, or press the speaker to hear each one, then put each paragraph in the position it belongs to. Every narrative does these three jobs in this order.':
    'هذا أول يوم لمتدرّب آخر، في ثلاث فقرات، لكنها بترتيب خاطئ. اقرأها، أو اضغط رمز الصوت لسماع كل فقرة، ثم ضع كل فقرة في موضعها الصحيح. كل سرد يؤدّي هذه المهامّ الثلاث بهذا الترتيب.',
  'Drag a paragraph into a position — or click the paragraph, then click the position.':
    'اسحب الفقرة إلى موضعها، أو انقر الفقرة ثم انقر الموضع.',
  'A third trainee, a third kind of first day. Drag each missing word or phrase into the gap where it belongs. Some gaps need a past-tense verb; three of them are the signposts that tell you which job each paragraph is doing.':
    'متدرّب ثالث، ويوم أول من نوع ثالث. اسحب كل كلمة أو عبارة ناقصة إلى فراغها المناسب. بعض الفراغات تحتاج فعلًا في الماضي، وثلاثة منها عبارات دالّة تكشف وظيفة كل فقرة.',
  'Talk about the questions with your class. Take notes — you will use them in 2B.':
    'ناقش الأسئلة مع صفّك. دوّن ملاحظات، فستستخدمها في التمرين ٢ب.',
  'Write about a life lesson you learned. The model journal entry from 1A is on this card — open it whenever you want it — and your notes from 2A are above. Each paragraph has one main idea, and the margin tells you which.':
    'اكتب عن درس تعلّمته في حياتك. النموذج من التمرين ١أ متاح على هذه البطاقة — افتحه متى شئت — وملاحظاتك من ٢أ أعلاه. لكل فقرة فكرة رئيسة واحدة، والهامش يخبرك بها.',
  'Use the editing checklist to edit your writing. Check (✓) the true sentences. Each tick is checked against the draft you wrote in §2 — you have to earn it.':
    'استخدم قائمة المراجعة لتنقيح كتابتك. ضع علامة (✓) أمام الجمل الصحيحة. كل علامة تُقارَن بمسوّدتك في القسم ٢، فعليك أن تستحقّها.',
  'Exchange journal entries with a partner. Read your partner’s work below. 1. Click a sentence you find interesting and comment on it. 2. Ask your partner a question about their life lesson.':
    'تبادل المُدوّنات مع زميل. اقرأ عمل زميلك أدناه. ١. انقر جملة أثارت اهتمامك وعلّق عليها. ٢. اطرح على زميلك سؤالًا عن درسه في الحياة.',
  'Use the checklist and your partner’s feedback to revise your writing. Your draft is loaded below — change at least one thing, then see what changed.':
    'استعن بقائمة المراجعة وبملاحظات زميلك لتنقيح كتابتك. مسوّدتك محمّلة أدناه — غيّر شيئًا واحدًا على الأقل ثم انظر ما الذي تغيّر.',
  'Complete the two sentences below from the lists, then say in your own words what you will do about it. Your answers are saved for your teacher.':
    'أكمل الجملتين أدناه من القوائم، ثم عبّر بكلماتك عمّا ستفعله حيال ذلك. تُحفَظ إجاباتك لمعلّمك.',
  'Read the paragraph and the notebook page — or press play and hear it read, with a cue card on each verb form. Then answer the questions below.':
    'اقرأ الفقرة وصفحة الدفتر، أو اضغط التشغيل لسماعها مع بطاقة توضيحية عند كل صيغة فعل. ثم أجب عن الأسئلة أدناه.',
  'The timeline below holds all four tenses at once. Press each tense to see when it happens — then work out its form from the examples in 1A, check the rule, and the finished charts open underneath. Finally, drag one verb phrase from 1A into each column.':
    'يجمع الخطّ الزمني أدناه الأزمنة الأربعة معًا. اضغط كل زمن لترى متى يقع، ثم استنتج صيغته من أمثلة التمرين ١أ، وتحقّق من القاعدة، فتُفتَح الجداول الكاملة تحتها. وأخيرًا اسحب عبارة فعلية من ١أ إلى كل عمود.',
  'Drag each verb phrase from 1A into its column — or click it, then click a column.':
    'اسحب كل عبارة فعلية من التمرين ١أ إلى عمودها، أو انقرها ثم انقر العمود.',
  'Complete the four sentences below — tap the correct tense name in each pair. Between them they are the definitions of the four tenses you have just built.':
    'أكمل الجمل الأربع أدناه باختيار اسم الزمن الصحيح من كل ثنائية. هذه الجمل مجتمعةً هي تعريفات الأزمنة الأربعة التي بنيتَها للتوّ.',
  'Click a phrase, then click the gap it belongs in — or drag it there. The first list fills the first gap of each question, the second list the second.':
    'انقر العبارة ثم انقر الفراغ المناسب، أو اسحبها إليه. القائمة الأولى تملأ الفراغ الأول من كل سؤال، والثانية تملأ الفراغ الثاني.',
  'The four short answers below are missing. Work them out — there is one rule behind all four — and the full charts open underneath for you to study and listen to.':
    'الإجابات القصيرة الأربع أدناه ناقصة. استنتجها — فقاعدة واحدة تحكمها جميعًا — وستُفتَح الجداول الكاملة تحتها لتدرسها وتستمع إليها.',
  'Stage 1: tap the correct auxiliary in each question. Stage 2 unlocks when all six are right — then drag each answer letter onto its question.':
    'المرحلة ١: اختر الفعل المساعد الصحيح في كل سؤال. تُفتَح المرحلة ٢ عندما تصحّ الستة جميعًا، ثم اسحب حرف كل إجابة إلى سؤالها.',
  'Each sentence has exactly one fault, and it is always the verb. Choose the right form — the sentence rebuilds as you choose, so read it back and say it aloud. Then write the whole corrected sentence in the box. The first one is done for you.':
    'في كل جملة خطأ واحد فقط، وهو دائمًا في الفعل. اختر الصيغة الصحيحة — تُعاد صياغة الجملة أثناء اختيارك، فاقرأها وانطقها بصوت عالٍ. ثم اكتب الجملة المصحّحة كاملة في المربّع. الأولى محلولة لك.',
  'Ten analysts each say one line on the SOC floor. Listen and check (✓) the tense you hear each speaker use. This is a listening task, so the transcript stays locked until your first attempt.':
    'عشرة محلّلين، ينطق كل منهم جملة واحدة في قاعة مركز العمليات. استمع وضع علامة (✓) أمام الزمن الذي تسمعه من كل متحدّث. هذه مهمة استماع، لذا يبقى النصّ المكتوب مقفلًا حتى محاولتك الأولى.',
  'Click a person to see what they are doing. Press Rewind to 10:30 to see what they were doing. Then build four questions for the technician: her answer comes straight after each gap , so it tells you who she is talking about and when.':
    'انقر على شخص لترى ما يفعله الآن. اضغط «الرجوع إلى ١٠:٣٠» لترى ما كان يفعله. ثم كوّن أربعة أسئلة للفنّية: إجابتها تأتي مباشرة بعد كل فراغ، فهي تدلّك على مَن تتحدّث عنه ومتى.',
  'Three lists, three gaps, in that order: the question word, then the person or place, then the verb.':
    'ثلاث قوائم لثلاثة فراغات بهذا الترتيب: أداة السؤال، ثم الشخص أو المكان، ثم الفعل.',
  'Close your book. A classmate is asking about your week. Answer each of her four questions with a statement about your own schedule — and between them use all four tenses. The checker tells you which tense it heard.':
    'أغلق كتابك. تسألك زميلة عن أسبوعك. أجب عن أسئلتها الأربعة بجملة عن جدولك أنت، مستخدمًا الأزمنة الأربعة بينها. سيخبرك المصحّح بالزمن الذي رصده.',
  'Listen to the whole conversation once. What did Tara do last year? Listen for the general idea first — do not worry about every word.':
    'استمع إلى المحادثة كاملة مرة واحدة. ماذا فعلت تارا العام الماضي؟ ركّز على الفكرة العامة أولًا ولا تنشغل بكل كلمة.',
  'Listen again for the answers. Compare your answers with your partner. Use ⏮ ⏭ to jump between lines, and the transcript button if you need it.':
    'استمع مرة أخرى بحثًا عن الإجابات، وقارنها مع زميلك. استخدم ⏮ ⏭ للتنقّل بين الجمل، وزرّ النصّ المكتوب عند الحاجة.',
  'Listen again and write the words Tara uses to express uncertainty. Use loop on the line and 0.6× if you need it. Each phrase you get right goes into your phrase bank for the rest of the unit.':
    'استمع مرة أخرى واكتب الكلمات التي تستخدمها تارا للتعبير عن عدم اليقين. استعن بالتكرار على الجملة وبسرعة ٠٫٦× عند الحاجة. كل عبارة تصيبها تُضاف إلى بنك العبارات لبقية الوحدة.',
  'Listen to the sh , ch and j sounds from Tara and Joseph’s conversation. Press the mouth-cam button in the player to push the camera in and watch the lips.':
    'استمع إلى أصوات sh وch وj في محادثة تارا وجوزيف. اضغط زرّ «كاميرا الفم» في المشغّل لتقريب الصورة ومراقبة حركة الشفتين.',
  'Listen and write the sentences from the conversation. Loop each line and slow it to 0.6× if you need to.':
    'استمع واكتب الجمل من المحادثة. كرّر كل جملة وأبطئها إلى ٠٫٦× عند الحاجة.',
  'Listen again and complete the chart with all the examples of sh , ch and j sounds you hear. Drop each word onto the mouth that makes its sound — not onto the letters, because four of these words are not spelled the way they sound.':
    'استمع مرة أخرى وأكمل الجدول بكل أمثلة أصوات sh وch وj التي تسمعها. ضع كل كلمة على الفم الذي ينطق صوتها، لا على الحروف، فأربع من هذه الكلمات لا تُكتَب كما تُنطَق.',
  'Say the word out loud, then drop it on the mouth that makes the sound — or click the word, then click the mouth.':
    'انطق الكلمة بصوت عالٍ ثم ضعها على الفم الذي ينطق صوتها، أو انقر الكلمة ثم انقر الفم.',
  'Finish the four rules below — the examples you need are in the picture. Then the charts and the chips open underneath: click an adjective to drop it into the noun slot, and an adverb to drop it into the verb slot.':
    'أكمل القواعد الأربع أدناه — الأمثلة التي تحتاجها موجودة في الصورة. ثم تُفتَح الجداول والبطاقات تحتها: انقر صفةً لتضعها في خانة الاسم، وحالًا لتضعه في خانة الفعل.',
  'Work with a partner. Take turns making statements about yourselves using the job-related adjectives and adverbs. Carlos has already started — complete your three turns so the conversation keeps going, then play it back and say your lines aloud.':
    'اعمل مع زميل. تبادلا الحديث عن نفسيكما مستخدمَين الصفات والأحوال المرتبطة بالعمل. بدأ كارلوس بالفعل — أكمل أدوارك الثلاثة لتستمرّ المحادثة، ثم شغّلها وانطق جُمَلك بصوت عالٍ.',
  'Click a word, then click the gap it belongs in — or drag it there. Adjectives go before "worker", adverbs after "work".':
    'انقر الكلمة ثم انقر الفراغ المناسب، أو اسحبها إليه. الصفات تسبق كلمة «worker»، والأحوال تأتي بعد «work».',
  'Look at the picture. What are they talking about? How do you know? Click each clue in the picture, then choose the answer the four clues support.':
    'انظر إلى الصورة. عمّ يتحدّثون؟ وكيف عرفت؟ انقر كل دليل في الصورة، ثم اختر الإجابة التي تدعمها الأدلّة الأربعة.',
  'Listen to the sample conversation. What does Carlos want to do? Then use the phrase bank: tap each way of saying you are not sure, and hear Carlos’s line change.':
    'استمع إلى المحادثة النموذجية. ماذا يريد كارلوس أن يفعل؟ ثم استخدم بنك العبارات: اضغط كل صيغة للتعبير عن عدم اليقين واسمع جملة كارلوس وهي تتغيّر.',
  'Role-play the situation below. Choose your role — the scene will play the other part and leave a timed gap for your lines. Record yourself if you like, then write two of your own lines.':
    'مثّل الموقف أدناه. اختر دورك — سيؤدّي المشهد الدور الآخر ويترك فجوة زمنية لجُمَلك. سجّل صوتك إن أردت، ثم اكتب جملتين من عندك.',
  'Do you agree or disagree with the statement below? Why or why not? Move the slider, state your reasons, then read what the rest of the class said.':
    'هل توافق على العبارة أدناه أم تخالفها؟ ولماذا؟ حرّك المؤشّر، واذكر أسبابك، ثم اقرأ ما قاله بقية الصف.',
  'Read the sentences. Predict what you will hear in the interview and write your guess in each gap. Press Check answers to lock your predictions — then listen in 5C and press Check answers again to compare.':
    'اقرأ الجمل. توقّع ما ستسمعه في المقابلة واكتب تخمينك في كل فراغ. اضغط «تحقّق من الإجابات» لتثبيت توقّعاتك، ثم استمع في ٥ج واضغط «تحقّق من الإجابات» مرة أخرى للمقارنة.',
  'Listen to Ray’s interview, then answer the two questions below. When you have, go back up to your predictions in 5B and press Check answers again to see which ones you got.':
    'استمع إلى مقابلة راي ثم أجب عن السؤالين أدناه. وبعدها عُد إلى توقّعاتك في ٥ب واضغط «تحقّق من الإجابات» مرة أخرى لترى ما أصبتَ منها.',
  'Work in a group. Read the question and collaborate to make a chart. What job skills do you need for each of these cyber jobs? A skill can belong to more than one job — that is the point. Add your own ideas too.':
    'اعمل ضمن مجموعة. اقرأ السؤال وتعاونوا على إعداد جدول: ما المهارات التي تحتاجها كل وظيفة من وظائف الأمن السيبراني هذه؟ قد تنتمي المهارة الواحدة إلى أكثر من وظيفة، وهذا هو المقصود. أضف أفكارك الخاصة أيضًا.',
  'Drag each skill into a job column — or click the skill, then click a column. One skill can go in several columns if you add it more than once; put it where it matters most.':
    'اسحب كل مهارة إلى عمود الوظيفة، أو انقر المهارة ثم انقر العمود. يمكن وضع المهارة في عدة أعمدة إن أضفتها أكثر من مرة؛ ضعها حيث تكون أهمّ.',
  'Report the results of your discussion to the class. Use the stems, then listen to your own report.':
    'اعرض نتائج نقاشكم على الصف. استعن ببدايات الجمل، ثم استمع إلى عرضك بصوتك.',
  'Assess your participation in the group and class discussions. Today I was able to…':
    'قيّم مشاركتك في نقاشات المجموعة والصف. اليوم استطعتُ أن…',
  'Talk about the questions with your classmates. The first one is about where you live, so only you can answer it. The second has a defensible answer — choose it.':
    'ناقش الأسئلة مع زملائك. السؤال الأول عن المكان الذي تعيش فيه، فلا يجيب عنه سواك. أما الثاني فله إجابة يمكن الدفاع عنها — اخترها.',
  'Read the definitions of two words you will meet in the column. Both are now in your glossary — tap any underlined word anywhere in the unit to see it again.':
    'اقرأ تعريفَي كلمتين ستصادفهما في المقال. الكلمتان الآن في مسردك — اضغط أي كلمة مسطّرة في أي مكان من الوحدة لتراها مرة أخرى.',
  'Preview the reading. Look at the title and the picture in the newspaper advice column below. What can you guess about the column? Circle the answer. The article itself is still hidden — guess from the title and picture only.':
    'تصفّح النصّ قبل قراءته. انظر إلى العنوان والصورة في باب النصائح الصحفي أدناه. ماذا تستنتج عن الباب؟ ظلّل الإجابة. المقال نفسه ما زال مخفيًّا — خمّن من العنوان والصورة فقط.',
  'Read the advice column. What advice does Allison give her readers? Press play to hear it read, with a different voice for each letter-writer.':
    'اقرأ باب النصائح. ما النصيحة التي تقدّمها أليسون لقرّائها؟ اضغط التشغيل لسماعه مقروءًا بصوت مختلف لكل مُرسِل.',
  'Read the advice column again. Is Allison encouraging her readers to succeed? Click the words and phrases that support your answer. Six sentences carry the encouragement.':
    'أعد قراءة باب النصائح. هل تشجّع أليسون قرّاءها على النجاح؟ انقر الكلمات والعبارات التي تدعم إجابتك. ستّ جمل تحمل هذا التشجيع.',
  'Mark each statement T (true), F (false) or NI (no information). For each true or false answer, write the line number where you found it. The first one is done for you.':
    'ضع أمام كل عبارة T (صحيحة) أو F (خاطئة) أو NI (لا معلومات). واكتب رقم السطر الذي وجدت فيه الدليل لكل إجابة صحيحة أو خاطئة. الأولى محلولة لك.',
  'Finish the rule below. The chart and the seven sentences open underneath it.':
    'أكمل القاعدة أدناه. سيُفتَح الجدول والجمل السبع تحتها.',
  'Not every word takes dis- . Drag each base word into takes dis- or does not take dis- . This is the Try again path for the chart above.':
    'ليست كل كلمة تقبل السابقة dis-. اسحب كل كلمة أصلية إلى «تقبل dis-» أو «لا تقبل dis-». هذا هو مسار إعادة المحاولة للجدول أعلاه.',
  'Drag each base word into the right box — or click it, then click a box.':
    'اسحب كل كلمة أصلية إلى المربّع الصحيح، أو انقرها ثم انقر المربّع.',
  'Work in a team. Take turns responding to each prompt. Use the underlined words. Record yourself if you like, then compare with a model answer.':
    'اعمل ضمن فريق. تبادلوا الردّ على كل مُحفِّز مستخدمين الكلمات المسطّرة. سجّل صوتك إن أردت ثم قارنه بإجابة نموذجية.',
  'Before the graph: work out how good readers handle a chart like this. Then the pyramid opens — hover or click a tier to see what counts, and complete the sentences underneath.':
    'قبل الرسم البياني: استنتج كيف يتعامل القرّاء الجيّدون مع جدول كهذا. ثم يُفتَح الهرم — مرّر المؤشّر أو انقر أي طبقة لترى ما تتضمّنه، وأكمل الجمل تحتها.',
  'The learning activities below generally help learners remember or recall 30% or more of what they learned after two weeks. With a partner, list additional activities in each area that could increase your recall. One example is given in each column.':
    'تساعد أنشطة التعلّم أدناه عادةً على تذكّر ٣٠٪ أو أكثر ممّا تعلّمتَه بعد أسبوعين. مع زميل، أضف أنشطة أخرى في كل مجال تزيد قدرتك على التذكّر. في كل عمود مثال واحد.',
  'Drag each activity to the tier it belongs to — or add your own.':
    'اسحب كل نشاط إلى الطبقة التي ينتمي إليها، أو أضف نشاطًا من عندك.',
  'Talk about your ideas with your classmates. First commit to one change: pick the activity and the evening. Then say what passive habit it replaces.':
    'ناقش أفكارك مع زملائك. التزم أولًا بتغيير واحد: اختر النشاط والمساء الذي ستفعله فيه. ثم اذكر العادة السلبية التي سيحلّ محلّها.',
  'A task to do before the next class.': 'مهمة تُنجَز قبل الحصة القادمة.',
  'Listen to the people working in the Security Operations Centre. How many people are talking in each conversation? Listen for the voices, not the faces.':
    'استمع إلى العاملين في مركز العمليات الأمنية. كم شخصًا يتحدّث في كل محادثة؟ ركّز على الأصوات لا على الوجوه.',
  'Listen again. Then put a check next to every activity that is mentioned. Play the handover above as many times as you need.':
    'استمع مرة أخرى، ثم ضع علامة أمام كل نشاط يُذكَر. شغّل تسليم المناوبة أعلاه بقدر ما تحتاج.',
  'Read the chart. Click a behaviour to watch it, and a phrase to hear it. Then answer the three questions — the first two have a right answer, the third is yours.':
    'اقرأ الجدول. انقر سلوكًا لمشاهدته، وعبارةً لسماعها. ثم أجب عن الأسئلة الثلاثة — للأوّلَين إجابة صحيحة، والثالث إجابته لك.',
  'Three conversations are starting at once on the first morning. Each opening line is already said — choose the reply that answers it. Click any person to see who they are. Three of the six replies answer a question nobody asked.':
    'ثلاث محادثات تبدأ في وقت واحد صباح اليوم الأول. كل جملة افتتاحية مقولة سلفًا — اختر الردّ الذي يجيب عنها. انقر أي شخص لتعرف من يكون. ثلاثة من الردود الستة تجيب عن سؤال لم يطرحه أحد.',
  'Click a reply, then click the gap it belongs in — or drag it there. Three of the six fit none of the three openings.':
    'انقر الردّ ثم انقر الفراغ المناسب، أو اسحبه إليه. ثلاثة من الستة لا تناسب أيًّا من الافتتاحيات الثلاث.',
  'Work in a team. You are interviewing a classmate about the room in A. She answers each question, so your next one has to follow from her answer — and your three questions must each use a different verb tense.':
    'اعمل ضمن فريق. أنت تُجري مقابلة مع زميلة عن القاعة في التمرين أ. تجيب عن كل سؤال، فيجب أن ينبني سؤالك التالي على إجابتها — وأن يستخدم كل سؤال من أسئلتك الثلاثة زمنًا مختلفًا.',
  'Talk to people from another team. Ask your questions and write down what they say. Team 2’s answers are below — choose which of their questions was hardest, then say why in your own words.':
    'تحدّث مع أفراد فريق آخر. اطرح أسئلتك ودوّن إجاباتهم. إجابات الفريق الثاني أدناه — اختر أصعب أسئلتهم ثم اشرح السبب بكلماتك.',
  'Work in a team. Write a paragraph about the picture. Say what is happening now and what happened before. Share your paragraph with the class.':
    'اعمل ضمن فريق. اكتب فقرة عن الصورة. اذكر ما يحدث الآن وما حدث قبل ذلك. شارك فقرتك مع الصف.',
  'Interview three classmates and write their answers. Press ask to hear each one — then use the last column for a real classmate if you are in a group.':
    'أجرِ مقابلة مع ثلاثة من زملائك واكتب إجاباتهم. اضغط «اسأل» لسماع كل إجابة، ثم استخدم العمود الأخير لزميل حقيقي إن كنت ضمن مجموعة.',
  'Report your results to the class. Make a pie chart with your class results for the first interview question. Change the numbers and the chart redraws.':
    'اعرض نتائجك على الصف. أنشئ رسمًا دائريًّا لنتائج صفّك في سؤال المقابلة الأول. غيّر الأرقام فيُعاد رسم الشكل.',
  'Listen and read about Teresa. Switch the Arabic subtitles on if they help.':
    'استمع واقرأ عن تيريزا. شغّل الترجمة العربية إن كانت تساعدك.',
  'Work with your classmates. 1. What is Teresa’s problem? 2. What should Teresa do? Think of two or three solutions, then rank them and say how easy and how fast each one is.':
    'اعمل مع زملائك. ١. ما مشكلة تيريزا؟ ٢. ماذا ينبغي لها أن تفعل؟ فكّروا في حلّين أو ثلاثة، ثم رتّبوها وبيّنوا مدى سهولة كل حلّ وسرعته.',
  'Write a letter to Teresa. Use your ranked solutions from B — press the button below the letter to bring them in.':
    'اكتب رسالة إلى تيريزا. استعن بالحلول التي رتّبتَها في التمرين ب — اضغط الزرّ أسفل الرسالة لإدراجها.',
  'Work in a team of three and take turns in each role. Speaker A asks about the other’s favourite way to practise cybersecurity English outside class, and shows they are listening. Speaker B answers. The Observer marks every example of active listening they see or hear. On your own you are the Observer: play the handover and tick each behaviour as it happens . A tick only counts if it lands within a few seconds of the real cue.':
    'اعملوا في فريق من ثلاثة وتبادلوا الأدوار. المتحدّث (أ) يسأل عن الطريقة المفضّلة لدى زميله لممارسة إنجليزية الأمن السيبراني خارج الصف، ويُظهر أنه يُصغي. المتحدّث (ب) يجيب. والمراقب يرصد كل مثال على الإصغاء الفعّال يراه أو يسمعه. وإن كنت وحدك فأنت المراقب: شغّل تسليم المناوبة وضع علامة عند كل سلوك لحظة وقوعه. لا تُحتسَب العلامة إلا إذا جاءت خلال ثوانٍ من الإشارة الحقيقية.',

  /* ---------- the texts and the conversations ---------- */

  'Our instructor gave us nine rules this morning. I want to copy one or two from you — what do you do the first time a new term comes up in the briefing?':
    'أعطتنا المدرّبة تسع قواعد هذا الصباح. أريد أن أقتبس منك واحدة أو اثنتين — ماذا تفعل أول مرة يَرِد فيها مصطلح جديد في الإحاطة؟',
  'Sensible. My flatmate plays music all evening, so I can never work at home. Where do you go?':
    'تصرّف حكيم. شريكي في السكن يشغّل الموسيقى طوال المساء، فلا أستطيع العمل في البيت أبدًا. إلى أين تذهب أنت؟',
  'I will try that. The trouble is that after four hours I start missing things in a phishing email.':
    'سأجرّب ذلك. المشكلة أنني بعد أربع ساعات أبدأ بإغفال أشياء في رسالة التصيّد.',
  'And my week is a mess — Monday, Tuesday, Wednesday, all the same, and nothing ever finished.':
    'وأسبوعي فوضى — الاثنين والثلاثاء والأربعاء كلها سواء، ولا شيء يكتمل أبدًا.',
  'One more. We have thirty new terms for Friday. How are you going to get them all into your head?':
    'سؤال أخير. لدينا ثلاثون مصطلحًا جديدًا ليوم الجمعة. كيف ستُدخلها كلها إلى رأسك؟',

  'Come in, Tara. You wanted to ask about the pathways on the poster.':
    'تفضّلي يا تارا. أردتِ أن تسألي عن المسارات المذكورة في الملصق.',
  'Adults with a high school diploma or a GED. That is the two-year route, and it costs far less than the four-year one.':
    'البالغون الحاصلون على شهادة الثانوية أو ما يعادلها. هذا مسار السنتين، وتكلفته أقلّ بكثير من مسار الأربع سنوات.',
  'Any adult, with or without a diploma. That is where a lot of people start, and nobody is turned away.':
    'أي شخص بالغ، بشهادة أو بدونها. من هنا يبدأ كثيرون، ولا يُردّ أحد.',
  'Anyone who wants one specific skill fast — penetration testing, say, or digital forensics. Twelve weeks, not four years.':
    'كل من يريد إتقان مهارة واحدة بسرعة — اختبار الاختراق مثلًا أو التحليل الجنائي الرقمي. اثنا عشر أسبوعًا لا أربع سنوات.',

  'Danny is on shift until half past seven, so ask me anything you need for the handover.':
    'داني في مناوبته حتى السابعة والنصف، فاسألني ما تشاء من أجل تسليم المناوبة.',
  'Right at this moment he is at the SOC desk, an hour into the shift.':
    'في هذه اللحظة بالذات هو على مكتب مركز العمليات، وقد مضت ساعة على مناوبته.',
  'Every Tuesday it is the same pattern: the briefing first thing, then study at home before his shift.':
    'كل ثلاثاء النمط نفسه: الإحاطة أول شيء، ثم الدراسة في البيت قبل مناوبته.',
  'At half past ten he was at home studying. He had the room to himself.':
    'في العاشرة والنصف كان في البيت يدرس. وكانت الغرفة له وحده.',
  'He ate lunch at half past twelve and reviewed his notes at the same time. Thanks — that is the handover done.':
    'تناول الغداء في الثانية عشرة والنصف وراجع ملاحظاته في الوقت نفسه. شكرًا — بهذا اكتمل تسليم المناوبة.',

  'Here we are. Five people in today — ask me about any of them.':
    'ها قد وصلنا. خمسة أشخاص اليوم — اسألني عن أيٍّ منهم.',
  'She is reading the lab manual. She has been on that chapter all morning.':
    'إنها تقرأ دليل المختبر. وهي على هذا الفصل طوال الصباح.',
  'He was unpacking a box of hardware keys. It took him nearly an hour.':
    'كان يُفرِغ صندوقًا من مفاتيح التشفير. استغرق الأمر منه قرابة الساعة.',
  'It closes on Sunday, every week. Every other day it is open.':
    'يُغلَق يوم الأحد من كل أسبوع. وفي بقية الأيام يكون مفتوحًا.',
  'It opened at eight this morning, same as always. Right — come and meet them.':
    'فُتِح في الثامنة هذا الصباح كالمعتاد. حسنًا — تعال وتعرّف إليهم.',

  'The mentor asked me what kind of worker I am. I said I am a patient worker, and that I like to work slowly and get it right.':
    'سألني المُرشِد أيّ نوع من العاملين أنا. قلت إنني عامل صبور، وإنني أحبّ أن أعمل بتأنٍّ وأُتقِن العمل.',
  'Interesting. On the help desk last month they told me the opposite — they wanted everything finished fast.':
    'مثير للاهتمام. في مكتب الدعم الشهر الماضي قالوا لي العكس — أرادوا إنجاز كل شيء بسرعة.',
  'So what would you put on an application form, if you only had room for one thing?':
    'فماذا ستكتب في استمارة التقديم لو لم يكن لديك سوى مكان لشيء واحد؟',

  'Conversation 1 — Fred to Jan: Nice to meet you, Jan. Where did you go this summer?':
    'المحادثة ١ — فريد إلى جان: سُررت بلقائك يا جان. إلى أين ذهبتِ هذا الصيف؟',
  'Conversation 2 — Maria to Pedro, across the room: Hello again! Are you taking this course too?':
    'المحادثة ٢ — ماريا إلى بيدرو من الطرف الآخر للقاعة: أهلًا من جديد! هل تدرس هذه الدورة أيضًا؟',
  'Conversation 3 — Myra to Kazuko, at the badge table: What were you doing when the class started?':
    'المحادثة ٣ — مايرا إلى كازوكو عند طاولة البطاقات: ماذا كنتِ تفعلين حين بدأت الحصة؟',
  'Mr. Chen: Right, everybody — take a login card and find a machine.':
    'السيد تشين: حسنًا جميعًا — خذوا بطاقة دخول وابحثوا عن جهاز.',

  'Press Play the day and listen. Danny’s team leader walks you through his Tuesday from eight o’clock up to now — two o’clock — and stops there, because that is as far as the day has gone. Then build the four questions below. Her answer comes straight after each gap, so her answer tells you what the question must have been. Between them the four questions use all four tenses.':
    'اضغط «شغّل اليوم» واستمع. تأخذك رئيسة فريق داني في جولة عبر يوم الثلاثاء من الثامنة حتى الآن — الثانية ظهرًا — وتتوقّف عندها، لأن اليوم لم يتجاوزها بعد. ثم كوّن الأسئلة الأربعة أدناه. إجابتها تأتي مباشرة بعد كل فراغ، فهي تدلّك على السؤال الذي لا بدّ أنه قيل. وتستخدم الأسئلة الأربعة مجتمعةً الأزمنة الأربعة.',

  /* The gaps are shown as ____ : this is a guide to the meaning, not a
     filled-in copy of the exercise.

     ONE TEXT IS DELIBERATELY NOT HERE, and check-arabic warns about
     it on purpose: §4.2B's "I'm [[1]] not [[2]]…" is a DICTATION —
     the learner's task is to write down the very words the gaps
     hide. Any honest translation of it hands over the answers, so it
     stays English. The warning is the record of that decision. */
  'Nine rules for the lab 1 The first time you hear a new term, [[b1]] — write it down there and then. 2 [[b2]]: the booth at the back has a silence sign for a reason. 3 [[b3]]. Read the advisory, read the report, then read it again. 4 Nobody analyses a phishing email well after four hours, so [[b4]]. 5 [[b5]] — carefully, and in the databases we give you. 6 [[b6]]: cables, notebooks and folders, all in their place. 7 [[b7]]: Monday ports, Tuesday five new terms, Wednesday an outline. 8 [[b8]]. Phishing, payload, patch — say them until they are yours. 9 And always [[b9]] before you write any incident report.':
    'قواعد المختبر التسع\n١ أول مرة تسمع فيها مصطلحًا جديدًا، ____ — دوّنه في حينه.\n٢ ____: الكُشك في الخلف يحمل لافتة صمت لسبب وجيه.\n٣ ____. اقرأ النشرة التحذيرية، ثم التقرير، ثم أعد قراءته.\n٤ لا أحد يحلّل رسالة تصيّد جيدًا بعد أربع ساعات، لذا ____.\n٥ ____ — بعناية، وفي قواعد البيانات التي نوفّرها لك.\n٦ ____: الكابلات والدفاتر والملفات، كلٌّ في مكانه.\n٧ ____: الاثنين المنافذ، الثلاثاء خمسة مصطلحات جديدة، الأربعاء مخطّط.\n٨ ____. التصيّد، الحمولة الخبيثة، رقعة التحديث — ردّدها حتى تصير لك.\n٩ ودائمًا ____ قبل أن تكتب أي تقرير حادثة.',

  'PATHWAYS INTO CYBERSECURITY In the United States, most people begin with basic digital skills. They usually take a [[0]] before anything else. After that, many learners go on to an [[1]]. From there, students at school can go on to a [[2]], which is usually grades nine to twelve, and receive their diploma. Adults can attend an [[3]] with or without a high school diploma. Adults who attend a [[4]] or a [[5]] must have a high school diploma or a GED (general educational development certificate). Adults can also choose to enrol in a [[6]] to study a specific skill such as penetration testing or digital forensics.':
    'مسارات الدخول إلى الأمن السيبراني\nفي الولايات المتحدة يبدأ معظم الناس بالمهارات الرقمية الأساسية. وعادةً ما يلتحقون بـ ____ قبل أي شيء آخر. وبعد ذلك ينتقل كثير من المتعلّمين إلى ____. ومن هناك يستطيع طلاب المدارس الانتقال إلى ____، وهي عادةً الصفوف من التاسع إلى الثاني عشر، فينالون شهادتهم.\nويمكن للبالغين الالتحاق بـ ____ بشهادة ثانوية أو بدونها. أما البالغون الذين يلتحقون بـ ____ أو ____ فعليهم أن يحملوا شهادة الثانوية أو ما يعادلها (GED). ويستطيع البالغون أيضًا الالتحاق بـ ____ لدراسة مهارة محدّدة مثل اختبار الاختراق أو التحليل الجنائي الرقمي.',

  'Tuesday, September 11 [[g1]] in the lab was difficult, and not for the reason I expected. The briefing was all in English and it [[g2]] very fast. I could listen or I could write, but I could not do both. I [[g3]] four words in an hour, and I did not understand two of them. [[g4]] something small. At the break I [[g5]] my four words to the instructor and asked what they meant. She [[g6]] them in two minutes. After that I [[g7]] trying to write every sentence and wrote only the words I did not know. [[g8]] five words I can use are worth more than twenty I cannot. Now I keep a short list, and I ask about it before I go home.':
    'الثلاثاء ١١ سبتمبر\n____ في المختبر كان صعبًا، وليس للسبب الذي توقّعته. كانت الإحاطة كلها بالإنجليزية و____ بسرعة شديدة. كنت أستطيع أن أستمع أو أن أكتب، لكن لا الاثنين معًا. ____ أربع كلمات في ساعة، ولم أفهم اثنتين منها.\n____ شيئًا صغيرًا. في الاستراحة ____ كلماتي الأربع للمدرّبة وسألتها عن معناها، ____ لي في دقيقتين.\nبعد ذلك ____ محاولة كتابة كل جملة، وكتبتُ الكلمات التي لا أعرفها فقط. ____ خمس كلمات أستطيع استخدامها خير من عشرين لا أستطيع. والآن أحتفظ بقائمة قصيرة، وأسأل عنها قبل أن أعود إلى البيت.',

  'SHIFT NOTEBOOK Date: Mon 9/26 &nbsp; Class: Security &nbsp;&nbsp;1. Learn 5 new terms &nbsp;&nbsp;2. Write incident report — due Wed &nbsp;&nbsp;3. ______________ Date: Tue 9/27 &nbsp; Class: Networking &nbsp;&nbsp;Chapter 2: questions p. 24 — due Thurs Date: Wed 9/28 &nbsp; Class: Security &nbsp;&nbsp;Learn 5 terms':
    'دفتر المناوبة\nالتاريخ: الاثنين ٢٦/٩ — الحصة: الأمن\n١. تعلّم ٥ مصطلحات جديدة\n٢. كتابة تقرير حادثة — موعد التسليم الأربعاء\n٣. ______________\nالتاريخ: الثلاثاء ٢٧/٩ — الحصة: الشبكات\nالفصل ٢: أسئلة صفحة ٢٤ — موعد التسليم الخميس\nالتاريخ: الأربعاء ٢٨/٩ — الحصة: الأمن\nتعلّم ٥ مصطلحات',

  'ASK ALLISON your cyber questions answered Dear Allison, I used the same password for everything. Last week somebody got into my email and read my messages. I changed one password, but I have forty accounts and I can’t remember forty passwords. What should I do? —Locked Out Dear Locked Out, No need to worry. Change that password today and get a password manager. It’s an app that stores and protects your passwords, and it makes a different one for every site. Then turn on two-factor authentication. It’s easy. You can do it! Dear Allison, I need to research cyber career choices. I want to search for jobs online, but I don’t have access to the Internet. What should I do? —Looking in Laredo Dear Laredo, There’s no need to worry. Most libraries have computers. Get a library card—it’s free—and you can be online in no time. The librarians are very helpful. They even let you sign up for computer time in advance so you don’t wait in line. Dear Allison, My son is in high school. His online safety homework is very difficult. I try to help him, but sometimes it’s over my head¹. Please help. PS. I dislike computers. Please don’t tell me to use one! —Frustrated Father Dear Frustrated, Don’t worry! Your library can help. Many libraries have free homework help centres and free family guides about staying safe online. Go to the library with your son and ask a librarian for advice. Anyone can do it! Dear Allison, I got an email that said my account would close today, so I clicked the link and typed my password. Now I’m worried. —Phished Once Dear Phished Once, You are not alone, and it’s not too late. Change your password now and turn on two-factor authentication. Report the message to your company. Then run your updates and back up your files. The library has free guides about this too, and they open on Saturday. It’s easy, and you can do it! ¹over (my) head: too difficult to understand':
    'اسأل أليسون — إجابات عن أسئلتك السيبرانية\n\nعزيزتي أليسون، كنت أستخدم كلمة المرور نفسها لكل شيء. في الأسبوع الماضي دخل أحدهم إلى بريدي وقرأ رسائلي. غيّرتُ كلمة مرور واحدة، لكن لديّ أربعون حسابًا ولا أستطيع تذكّر أربعين كلمة مرور. ماذا أفعل؟ — محبوس في الخارج\n\nعزيزي المحبوس، لا داعي للقلق. غيّر تلك الكلمة اليوم واحصل على مدير كلمات مرور: تطبيق يحفظ كلماتك ويحميها ويولّد لكل موقع كلمة مختلفة. ثم فعّل المصادقة الثنائية. الأمر سهل، وأنت قادر عليه!\n\nعزيزتي أليسون، أحتاج إلى البحث عن خيارات المهن السيبرانية. أريد البحث عن وظائف عبر الإنترنت، لكن لا اتصال لديّ. ماذا أفعل؟ — باحث في لاريدو\n\nعزيزي لاريدو، لا داعي للقلق. معظم المكتبات فيها حواسيب. احصل على بطاقة مكتبة — وهي مجانية — وستكون متصلًا في لحظات. وأمناء المكتبة متعاونون جدًّا، بل يتيحون لك حجز وقت على الحاسوب مسبقًا كي لا تنتظر في الطابور.\n\nعزيزتي أليسون، ابني في المرحلة الثانوية، وواجب السلامة الرقمية صعب جدًّا عليه. أحاول مساعدته، لكن الأمر أحيانًا يفوق فهمي. أرجو المساعدة. ملاحظة: أنا لا أحبّ الحواسيب، فأرجو ألّا تطلبي منّي استخدام واحد! — أبٌ محبَط\n\nعزيزي المحبَط، لا تقلق! مكتبتك تستطيع المساعدة. كثير من المكتبات فيها مراكز مجانية لمساعدة الطلاب في الواجبات، وأدلّة أُسَرية مجانية عن الأمان على الإنترنت. اذهب إلى المكتبة مع ابنك واطلب النصيحة من أمين المكتبة. الجميع قادر على ذلك!\n\nعزيزتي أليسون، وصلتني رسالة تقول إن حسابي سيُغلَق اليوم، فنقرتُ الرابط وكتبتُ كلمة المرور. والآن أنا قلق. — وقعتُ في التصيّد مرة\n\nعزيزي الواقع في التصيّد، لستَ وحدك، ولم يفُت الأوان. غيّر كلمة مرورك الآن وفعّل المصادقة الثنائية. أبلِغ شركتك عن الرسالة. ثم ثبّت التحديثات وخذ نسخة احتياطية من ملفاتك. وفي المكتبة أدلّة مجانية عن هذا أيضًا، وهي تفتح يوم السبت. الأمر سهل، وأنت قادر عليه!\n\n¹ يفوق فهمي: أصعب من أن أستوعبه'

});
