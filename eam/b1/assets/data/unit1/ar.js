/* ============================================================
   Unit 1 — the Arabic layer.

   A SCAFFOLD, NOT A TRANSLATION OF THE EXERCISE. Only the DIRECTIONS live here: what the
   learner is being asked to do. The questions, the options, the answers and the worked reasons
   are deliberately absent — a learner who can read the answer in Arabic has not done the
   exercise, and gates/eam_ar.py fails the build if one appears.

   KEYED BY THE ENGLISH SENTENCE, normalised through core.js's arKey(): markup becomes a space,
   curly quotes become straight ones, whitespace collapses. So rewrapping a sentence in a data
   file does not orphan its translation, while rewriting the words does — and
   gates/eam_ar.py B1 and B3 report both. The keys below were taken verbatim from the data
   files rather than retyped, because a key that differs by one space attaches to nothing and
   fails silently.

   NOTE THE SPACE A TAG LEAVES BEHIND. arKey turns `<[^>]+>` into a SPACE, not into nothing, so
   an instruction ending `<b>what they do</b>.` is looked up as `…what they do .` — with a
   space before the full stop. An entry typed without it attaches to no sentence at all and
   says nothing about it. This is why the keys are generated and never retyped.

   FILLED BY tools/eam_ar_pool.py from the Arabic units 1–5 already carry, for every
   direction this unit shares with them — which is most of them, because the directions are
   emitted from the same templates. The unit's own titles and its own words were written for
   this unit.

   NOT NATIVE-REVIEWED. This is a scaffold written for a learner who cannot yet read the
   English direction. It should be read by an Arabic speaker before a classroom relies on it.
   ============================================================ */
EAM.arabic({
  /* ---- s01-warm-up ---- */
  'Five parts of a car are drawn below. Drag each meaning onto the part it describes — or click the meaning, then click the part. One meaning is not needed.':
    'في الأسفل رسوم لخمسة أجزاء من السيارة. اسحب كل معنى إلى الجزء الذي يصفه، أو انقر المعنى ثم انقر الجزء. هناك معنى واحد زائد لا يُستخدم.',
  'Complete the four sentences with the words in the bank. Each word is used once.':
    'أكمل الجمل الأربع بالكلمات الموجودة في بنك الكلمات. كل كلمة تُستعمل مرة واحدة.',
  'Five sentences about a service department. The two questions on the next card are answered inside them, so read it once before you go on.':
    'خمس جمل عن قسم الصيانة. إجابتا السؤالين في البطاقة التالية موجودتان داخلها، فاقرأها مرة قبل المتابعة.',
  'Everything you need is in the five sentences above. Read them again if you want to — this is not a memory test.':
    'كل ما تحتاجه موجود في الجمل الخمس أعلاه. أعد قراءتها إن شئت؛ هذا ليس اختبار حفظ.',

  /* ---- s02-vocabulary ---- */
  'Drag each meaning onto the thing it describes — or click the meaning, then click the picture. One meaning is not needed. The first one is done for you.':
    'اسحب كل معنى إلى الشيء الذي يصفه، أو انقر المعنى ثم انقر الصورة. هناك معنى واحد زائد. المثال الأول محلول.',
  'Three people in the department. Write where each one works and what they do . The first row is done for you.':
    'ثلاثة أشخاص في القسم. اكتب أين يعمل كل واحد منهم وما الذي يقوم به. الصف الأول محلول.',
  'Five parts you can see from outside the car. One description is not needed.':
    'خمسة أجزاء يمكنك رؤيتها من خارج السيارة. هناك وصف واحد زائد.',

  /* ---- s03-pronunciation ---- */
  'Press a word to hear it. The CAPITALS show the loud syllable — say it a little longer and a little higher, not just louder. Say each one aloud twice before you go on.':
    'اضغط على الكلمة لتسمعها. الأحرف الكبيرة تدل على المقطع المشدَّد: انطقه أطول قليلًا وأعلى نبرة، لا أعلى صوتًا فقط. انطق كل كلمة مرتين بصوت مسموع قبل المتابعة.',
  'Play each word, then put it in the column that matches where you hear the beat. Two are done for you.':
    'شغّل كل كلمة، ثم ضعها في العمود الموافق للمقطع الذي تسمع عليه النبر. مثالان محلولان.',

  /* ---- s04-check ---- */
  'Three questions about the words you have just met. Every answer is somewhere on the two screens before this one.':
    'ثلاثة أسئلة عن الكلمات التي قابلتها للتو. كل إجابة موجودة في الشاشتين السابقتين.',
  'Four sentences, four words, each used once.':
    'أربع جمل وأربع كلمات، كل كلمة تُستعمل مرة واحدة.',
  'Write about a car, or about the service department. Use three words from this unit. There is no single right answer — the model below is one way of doing it, not the answer.':
    'اكتب عن سيارة أو عن قسم الصيانة، مستعملًا ثلاث كلمات من هذه الوحدة. لا توجد إجابة واحدة صحيحة؛ النموذج في الأسفل طريقة من الطرق وليس الإجابة.',

  /* ---- s05-grammar-notice ---- */
  'Five lines from the workshop. Click the two that are about this moment — not about what usually happens. Click a line again to let it go.':
    'خمس جمل من الورشة. انقر الجملتين اللتين تتحدثان عن هذه اللحظة، لا عمّا يحدث عادة. انقر الجملة ثانية لإلغاء اختيارها.',
  'The book\'s own focus box. Read it once now; the practice on the next two screens comes straight out of it.':
    'إطار القاعدة كما ورد في الكتاب. اقرأه مرة الآن؛ فتمارين الشاشتين التاليتين مأخوذة منه مباشرة.',

  /* ---- s06-grammar-practice ---- */
  'The verb is in brackets. Write it in the present simple or the present continuous. The first one is done for you.':
    'الفعل بين قوسين. اكتبه في المضارع البسيط أو المضارع المستمر. المثال الأول محلول.',
  'Four sentences. Put each one in the column of the tense it needs. The correct form is shown once you have finished.':
    'أربع جمل. ضع كل جملة في عمود الزمن الذي تحتاجه. تظهر الصيغة الصحيحة بعد أن تنتهي.',

  /* ---- s07-grammar-review ---- */
  'Each sentence has one grammar mistake. Choose the repair, then write the whole sentence out — writing it is what makes it stick.':
    'في كل جملة خطأ نحوي واحد. اختر التصحيح ثم اكتب الجملة كاملة؛ فالكتابة هي ما يثبّت القاعدة.',
  'One about a routine (present simple) and one about now (present continuous). They can be about anything you do — the tenses are what is being practised, not cars.':
    'جملة عن عادة متكررة (مضارع بسيط) وجملة عمّا يحدث الآن (مضارع مستمر). يمكن أن تكونا عن أي شيء تفعله؛ المطلوب تدريب الزمنين لا الحديث عن السيارات.',
  'One of the four is right in each set. The bracket tells you which meaning is wanted.':
    'واحدة من الأربع صحيحة في كل مجموعة. ما بين القوسين يبيّن المعنى المطلوب.',

  /* ---- s08-listening-1 ---- */
  'Before you listen: what does a mechanic do first — read the job card, or start the engine? Press play. You can slow it down, loop a line, and turn the Arabic on.':
    'قبل الاستماع: ما أول ما يفعله الميكانيكي، أيقرأ بطاقة العمل أم يشغّل المحرك؟ اضغط «تشغيل». يمكنك إبطاء المشهد، وتكرار أي جملة، وإظهار الترجمة العربية.',
  'Judge each statement against what Nabil actually said. Then write the line number that proves it. If nothing in the text settles it, the answer is Not Given and there is no line to write.':
    'احكم على كل عبارة بالرجوع إلى ما قاله نبيل فعلًا، ثم اكتب رقم السطر الذي يثبتها. وإن لم يحسم النص المسألة فالجواب «غير مذكور» ولا سطر تكتبه.',

  /* ---- s09-listening-2 ---- */
  'Before you listen: what does a service advisor ask a customer first? Watch it once straight through, then again with the Arabic on if you need it.':
    'قبل الاستماع: ما أول ما يسأله مستشار الصيانة الزبون؟ شاهد المشهد كاملًا مرة، ثم أعِده مع الترجمة العربية إن احتجت.',
  'Short answers are fine — a few words each. Spelling and capitals are marked kindly; the meaning is what counts. The first is done for you: Where is Mr Aboud? — At Cham Motors (reception).':
    'تكفي إجابات قصيرة من بضع كلمات. التصحيح متسامح في الإملاء والحروف الكبيرة؛ المعنى هو المهم. المثال الأول محلول: أين السيد عبود؟ — في شام موتورز (الاستقبال).',

  /* ---- s10-listening-3 ---- */
  'Before you listen: who works in a car service department? Name two jobs. Then watch — everybody he mentions is standing there.':
    'قبل الاستماع: من يعمل في قسم صيانة السيارات؟ اذكر مهنتين. ثم شاهد المشهد: كل من يذكرهم ماهر واقفون أمامك.',
  'Drag each action onto the person doing it. One action is not needed. Maher is done for you.':
    'اسحب كل عمل إلى الشخص الذي يقوم به. هناك عمل واحد زائد. ماهر محلول لك.',

  /* ---- s11-speaking-model ---- */
  'The book does these with a partner. On your own, answer each one in a sentence or two — say it aloud first, then write it . Somebody from Cham Motors has answered each question too; their answers open once you have written yours.':
    'يطلب الكتاب أداء هذا مع زميل. وإن كنت وحدك فأجب عن كل سؤال بجملة أو جملتين: انطقها أولًا ثم اكتبها. وقد أجاب أحد العاملين في «شام موتورز» عن كل سؤال، وتظهر إجاباتهم بعد أن تكتب إجابتك.',

  /* ---- s12-role-play ---- */
  'The book does this in pairs. On your own: choose your role below and press play — the scene acts the other part and goes quiet for yours. Then swap and take the other card.':
    'يطلب الكتاب أداء هذا في ثنائيات. وإن كنت وحدك فاختر دورك في الأسفل واضغط «تشغيل»: يؤدي المشهد الدور الآخر ويصمت عند دورك. ثم بدّل وخذ البطاقة الأخرى.',
  'Describe your job, or a car you know : what it is, its main parts, and what you check or do. Use the stems to plan it, then say the whole thing aloud once without stopping.':
    'صِف عملك أو سيارة تعرفها: ما هي، وأهم أجزائها، وما الذي تفحصه أو تفعله. استعن ببدايات الجمل في التخطيط، ثم انطق الحديث كاملًا مرة واحدة دون توقف.',

  /* ---- s13-reading-text ---- */
  'Before you read: what three areas do you think a service department has? Say your guess, then read and see. Press a paragraph to hear it.':
    'قبل القراءة: ما الأقسام الثلاثة التي تظن أن قسم الصيانة يضمها؟ قل تخمينك ثم اقرأ وتحقق. اضغط على الفقرة لتسمعها.',
  'The answers are all in the four paragraphs above. The first one is done for you: What does a service department do? — It looks after cars.':
    'الإجابات كلها في الفقرات الأربع أعلاه. المثال الأول محلول: ماذا يفعل قسم الصيانة؟ — يعتني بالسيارات.',

  /* ---- s14-reading-comprehension ---- */
  'Each of these four words is in the text you have just read. Match it with its meaning. One meaning is not needed.':
    'كل كلمة من هذه الكلمات الأربع وردت في النص الذي قرأته للتو. صِلها بمعناها. هناك معنى واحد زائد.',
  'Before you read: why do people in Syria keep cars for many years? Say what you think, then read.':
    'قبل القراءة: لماذا يحتفظ الناس في سوريا بسياراتهم سنوات طويلة؟ قل رأيك ثم اقرأ.',
  'Three statements about the text above. Judge each one, and give the paragraph that proves it (1, 2 or 3).':
    'ثلاث عبارات عن النص أعلاه. احكم على كل عبارة، وحدّد الفقرة التي تثبتها (1 أو 2 أو 3).',

  /* ---- s15-writing-model ---- */
  'Use one present-simple sentence and one present-continuous sentence . The plan below is the book\'s; fill it in, then write the piece.':
    'استعمل جملة في المضارع البسيط وجملة في المضارع المستمر. الخطة في الأسفل من الكتاب؛ املأها ثم اكتب النص.',
  'Give reasons , not a description. This is the first piece in the unit that asks you to argue rather than report.':
    'قدّم أسبابًا لا وصفًا. هذا أول نص في الوحدة يطلب منك أن تحاجّ لا أن تصف.',
  'You are Rana . Write a short note to Nabil about a car that has just come in. This is a real workshop task: the note is how what the customer said becomes what the mechanic does.':
    'أنت رنا. اكتب رسالة قصيرة إلى نبيل عن سيارة وصلت للتو. هذه مهمة حقيقية في الورشة: فالرسالة هي ما يحوّل كلام الزبون إلى عمل يقوم به الميكانيكي.',
  'Write about a car in your family, or one you know well. Shorter than the others, and personal: this one has no right answer at all.':
    'اكتب عن سيارة في عائلتك أو سيارة تعرفها جيدًا. أقصر من سابقاتها وشخصية: لا إجابة صحيحة لها إطلاقًا.',

  /* ---- s16-management-file-dialogue ---- */
  'Four things a manager says on an apprentice\'s first day. Match each one with its purpose — what he is doing by saying it. One purpose is not needed.':
    'أربع عبارات يقولها المدير في أول يوم للمتدرّب. صِل كل عبارة بالغرض منها، أي بما يفعله حين يقولها. هناك غرض واحد زائد.',
  'Before you read: what does a manager say to a new apprentice on the first day? Then read, and notice how many of the four purposes above you can hear.':
    'قبل القراءة: ماذا يقول المدير لمتدرّب جديد في أول يوم؟ ثم اقرأ ولاحظ كم غرضًا من الأغراض الأربعة أعلاه تسمعه.',
  'A few words each. The first is done for you: Where does Tarek start work? — At Cham Motors.':
    'بضع كلمات لكل سؤال. المثال الأول محلول: أين يبدأ طارق العمل؟ — في «شام موتورز».',

  /* ---- s17-management-file-practice ---- */
  'Five things a manager does on a new worker\'s first morning. Put them in the order you would do them. Step 1 is done for you.':
    'خمسة أمور يقوم بها المدير في أول صباح لعامل جديد. رتّبها بالترتيب الذي تراه مناسبًا. الخطوة الأولى محلولة.',
  'The book does this in pairs. On your own: choose your role and press play — the scene acts the other part and goes quiet for yours. Then swap.':
    'يطلب الكتاب أداء هذا في ثنائيات. وإن كنت وحدك فاختر دورك واضغط «تشغيل»: يؤدي المشهد الدور الآخر ويصمت عند دورك. ثم بدّل الدور.',
  'You are Maher . Write a short welcome note to Tarek, with his plan for the first week.':
    'أنت ماهر. اكتب رسالة ترحيب قصيرة إلى طارق تتضمن خطة أسبوعه الأول.',

  /* ---- s18-global-case-study ---- */
  'A short case from outside Syria. Read it once, then answer the three questions.':
    'حالة قصيرة من خارج سوريا. اقرأها مرة ثم أجب عن الأسئلة الثلاثة.',
  'A few words each. The first is done for you: Who started the garage? — A mechanic named Sami.':
    'بضع كلمات لكل سؤال. المثال الأول محلول: من أسّس الورشة؟ — ميكانيكي اسمه سامي.',
  'Match each word with its meaning. One meaning is not needed.':
    'صِل كل كلمة بمعناها. هناك معنى واحد زائد.',
  'The book does this with a partner, using the frames below. On your own, write an answer to each — a sentence or two is enough.':
    'يطلب الكتاب أداء هذا مع زميل باستعمال القوالب في الأسفل. وإن كنت وحدك فاكتب إجابة عن كل سؤال؛ تكفي جملة أو جملتان.',

  /* ---- s19-local-case-study ---- */
  'A case from Syria. Read it, then answer the three questions.':
    'حالة من سوريا. اقرأها ثم أجب عن الأسئلة الثلاثة.',
  'A few words each. The first is done for you: What did Lina want to open? — Her own workshop.':
    'بضع كلمات لكل سؤال. المثال الأول محلول: ماذا أرادت لينا أن تفتح؟ — ورشتها الخاصة.',
  'Lina now has a little more money. Should she (a) buy a new diagnostic machine, (b) rent a bigger workshop, or (c) hire one helper? Decide, and explain. Use the frame.':
    'صار لدى لينا مال أكثر قليلًا. أتشتري (أ) جهاز فحص جديدًا، أم تستأجر (ب) ورشة أكبر، أم توظّف (ج) مساعدًا واحدًا؟ قرّر واشرح، مستعملًا القالب.',

  /* ---- s20-spiral-review ---- */
  'Five sentences from across the unit. The first is done for you.':
    'خمس جمل من مختلف أجزاء الوحدة. المثال الأول محلول.',
  'The other way round from §2: here you are given the meaning and have to find the word. This card is not in the book — it is here because recognising a word in a sentence is easier than producing it, and only one of those is useful in a workshop.':
    'عكس ما فعلته في §2: هنا يُعطى لك المعنى وعليك أن تجد الكلمة. هذه البطاقة ليست في الكتاب، وإنما أُضيفت لأن التعرّف على كلمة داخل جملة أسهل من استحضارها، وواحد فقط من هذين ينفعك في الورشة.',

  /* ---- s21-can-do-glossary ---- */
  'Tick a line only if you believe it. Each tick is then checked against the work you actually did in this unit — the screens you finished, the marks you scored, and the words in your own writing. A tick you have not earned will say so.':
    'ضع علامة على السطر إن كنت تصدّقه حقًا. ثم تُراجَع كل علامة بالرجوع إلى ما أنجزته فعلًا في هذه الوحدة: الشاشات التي أتممتها، والعلامات التي نلتها، والكلمات التي استعملتها في كتابتك. والعلامة التي لم تستحقها ستُظهر ذلك.',
  'A word is spoken. Point at it. Ten words, three rounds, scored. Everything here you have already met — this deck is not where any of them is introduced.':
    'تُنطق كلمة، فأشر إليها. عشر كلمات في ثلاث جولات، مع احتساب النتيجة. وكل ما هنا قابلته من قبل؛ فهذه المجموعة ليست مكان تقديم أي كلمة لأول مرة.'
});
