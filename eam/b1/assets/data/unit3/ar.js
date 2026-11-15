/* ============================================================
   Unit 3 — the Arabic layer.

   A SCAFFOLD, NOT A TRANSLATION OF THE EXERCISE. Only the DIRECTIONS live here: what the
   learner is being asked to do. The questions, the options, the answers and the worked reasons
   are deliberately absent — a learner who can read the answer in Arabic has not done the
   exercise, and gates/eam_ar.py fails the build if one appears.

   KEYED BY THE ENGLISH SENTENCE, normalised through core.js's arKey(): markup becomes a space,
   curly quotes become straight ones, whitespace collapses. The keys below were taken verbatim
   from the data files by tools/eam_ar_keys.py rather than retyped, because a key that differs
   by one space attaches to nothing and fails silently.

   NOT NATIVE-REVIEWED. This is a scaffold written for a learner who cannot yet read the
   English direction. It should be read by an Arabic speaker before a classroom relies on it.
   ============================================================ */
EAM.arabic({

  /* ---- s01-warm-up ---- */
  'Match the tools with their uses. One use is not needed. Write the letter. Column A Column B':
    'صِلْ كل أداة بالعمل الذي تُستعمل فيه. هناك استعمال واحد زائد لا يُستخدم. في الكتاب تُكتب الحروف؛ هنا اسحب المعنى إلى الأداة.',
  'Complete the sentences using the words in the word bank.':
    'أكمل الجمل بالكلمات الموجودة في بنك الكلمات.',
  'Press a paragraph button to hear it read.':
    'اضغط زر الفقرة لتسمعها مقروءة.',
  'Read the text and choose the correct answer. Every answer is in the text above — look back at it rather than answering from what you already know.':
    'اقرأ النص ثم اختر الإجابة الصحيحة. كل إجابة موجودة في النص أعلاه، فارجع إليه بدل الإجابة من معلوماتك السابقة.',

  /* ---- s02-vocabulary ---- */
  'Match the tools with their meanings. One meaning is not needed. (0. is done for you.) Column A Column B':
    'صِلْ كل أداة بمعناها. هناك معنى واحد زائد لا يُستخدم. (البند 0 محلول كمثال.)',
  'Complete the table. Write what each item protects and when to wear it. (0. is done.)':
    'أكمل الجدول: اكتب ماذا يحمي كل عنصر ومتى يُلبَس. (البند 0 محلول.)',
  'Match each item with what it does. One meaning is not needed. Write the letter. Column A Column B':
    'صِلْ كل عنصر بالعمل الذي يؤديه. هناك معنى واحد زائد لا يُستخدم.',

  /* ---- s03-pronunciation ---- */
  'Play each word, then put it in the column that matches where you hear the beat.':
    'شغِّل كل كلمة، ثم ضعها في العمود الذي يوافق موضع النبرة التي تسمعها.',

  /* ---- s04-check ---- */
  'Read and choose the correct answer.':
    'اقرأ ثم اختر الإجابة الصحيحة.',
  'Complete the sentences with the correct word.':
    'أكمل الجمل بالكلمة الصحيحة.',
  'Write two or three sentences about the tools and safety gear you use. Use three words from this unit.':
    'اكتب جملتين أو ثلاثًا عن الأدوات ومعدات السلامة التي تستعملها. استعمل ثلاث كلمات من هذه الوحدة.',

  /* ---- s05-grammar-notice ---- */
  'Read these safety rules. Underline the verbs. Which words show the order of the steps?':
    'اقرأ قواعد السلامة هذه وحدِّد الأفعال. ما الكلمات التي تدل على ترتيب الخطوات؟',
  'The book\'s own box. Read it once now; the practice that follows comes straight out of it.':
    'صندوق الكتاب نفسه. اقرأه مرة الآن؛ فالتمارين التالية تخرج منه مباشرة.',

  /* ---- s06-grammar-practice ---- */
  'Write the instruction as an imperative. (0. is done.)':
    'اكتب التعليمة بصيغة الأمر. (البند 0 محلول.)',
  'Number these steps to raise a car safely. Use the safe order. (0. is done.)':
    'رتِّب هذه الخطوات لرفع السيارة بأمان. استعمل الترتيب الآمن. (البند 0 محلول.)',

  /* ---- s07-grammar-review ---- */
  'Each sentence has one grammar mistake. Write the correct sentence.':
    'في كل جملة خطأ نحوي واحد. اكتب الجملة صحيحة.',
  'Write three safety rules for a workshop. Use imperatives (and one Don\'t or Never).':
    'اكتب ثلاث قواعد سلامة للورشة بصيغة الأمر (وواحدة بـ Don\'t أو Never).',
  'Choose the correct answer.':
    'اختر الإجابة الصحيحة.',

  /* ---- s08-listening-1 ---- */
  'Before you listen: what does a foreman say before the work starts? Press play. You can slow it down, loop a line, and turn the Arabic on.':
    'قبل الاستماع: ماذا يقول رئيس العمال قبل بدء العمل؟ اضغط تشغيل. يمكنك إبطاء الصوت، وتكرار سطر واحد، وإظهار الترجمة العربية.',
  'While you listen: write True, False, or Not Given. (0. is done.) Every statement is settled by the text: read it again rather than answering from what you already know.':
    'أثناء الاستماع: اكتب True أو False أو Not Given. (البند 0 محلول.) كل عبارة يحسمها النص: أعِد قراءته بدل الإجابة من معلوماتك السابقة.',

  /* ---- s09-listening-2 ---- */
  'Before you listen: where does a workshop keep its tools? Press play. You can slow it down, loop a line, and turn the Arabic on.':
    'قبل الاستماع: أين تحفظ الورشة أدواتها؟ اضغط تشغيل. يمكنك إبطاء الصوت، وتكرار سطر واحد، وإظهار الترجمة العربية.',
  'While you listen: answer the questions. (0. is done.)':
    'أثناء الاستماع: أجب عن الأسئلة. (البند 0 محلول.)',

  /* ---- s10-listening-3 ---- */
  'Before you listen: how many safety rules do you think a workshop needs? Press play. You can slow it down, loop a line, and turn the Arabic on.':
    'قبل الاستماع: كم قاعدة سلامة تظن أن الورشة تحتاج إليها؟ اضغط تشغيل. يمكنك إبطاء الصوت، وتكرار سطر واحد، وإظهار الترجمة العربية.',
  'While you listen: match each rule with what it says. One is not needed. (0. is done.) Column A Column B':
    'أثناء الاستماع: صِلْ كل قاعدة بما تنص عليه. هناك واحدة زائدة لا تُستخدم. (البند 0 محلول.)',

  /* ---- s11-speaking-model ---- */
  'Work with a partner. Ask and answer these questions. What safety gear do you wear in a workshop? Why is a tidy workshop a safe workshop? What are three important safety rules?':
    'اعمل مع زميل: اسأل وأجب عن هذه الأسئلة.',
  'Work in pairs. Student A looks at Workshop A; Student B looks at Workshop B. Ask and answer to find three differences. Do not show your card.':
    'اعملا ثنائيًّا: الطالب (أ) ينظر إلى الورشة A، والطالب (ب) إلى الورشة B. تبادلا الأسئلة لإيجاد ثلاثة فروق. لا تُرِ زميلك بطاقتك.',

  /* ---- s12-role-play ---- */
  'Work in pairs. Read the model, then use the cards.':
    'اعملا ثنائيًّا: اقرآ النموذج ثم استعملا البطاقتين.',
  'Prepare a short talk (about one minute). Explain the safety rules in a workshop, and the safety gear you wear.':
    'حضِّر كلمة قصيرة (نحو دقيقة): اشرح قواعد السلامة في الورشة ومعدات الوقاية التي تلبسها.',

  /* ---- s13-reading-text ---- */
  'Before you read: what is the most important safety rule in a workshop? Say your guess, then read and see. Press a paragraph button to hear it read.':
    'قبل القراءة: ما أهم قاعدة سلامة في الورشة؟ قل تخمينك، ثم اقرأ وتحقق. اضغط زر الفقرة لتسمعها مقروءة.',
  'Answer the multiple-choice questions. (0. is done.) Every answer is in the text above — look back at it rather than answering from what you already know.':
    'أجب عن أسئلة الاختيار من متعدد. (البند 0 محلول.) كل إجابة موجودة في النص أعلاه، فارجع إليه بدل الإجابة من معلوماتك السابقة.',

  /* ---- s14-reading-comprehension ---- */
  'Match each word from the text with its meaning. One meaning is not needed. Write the letter. Column A Column B':
    'صِلْ كل كلمة من النص بمعناها. هناك معنى واحد زائد لا يُستخدم.',
  'Before you read: how can a small garage make its work safer? Say your guess, then read and see. Press a paragraph button to hear it read.':
    'قبل القراءة: كيف يمكن لورشة صغيرة أن تجعل عملها أكثر أمانًا؟ قل تخمينك، ثم اقرأ وتحقق. اضغط زر الفقرة لتسمعها مقروءة.',
  'Write True or False. (0. is done.) Every statement is settled by the text: read it again rather than answering from what you already know.':
    'اكتب True أو False. (البند 0 محلول.) كل عبارة يحسمها النص: أعِد قراءته بدل الإجابة من معلوماتك السابقة.',

  /* ---- s15-writing-model ---- */
  'Write five safety rules for a workshop. Use imperatives and sequencers.':
    'اكتب خمس قواعد سلامة للورشة. استعمل صيغة الأمر وكلمات الترتيب.',
  'Write why safety is important in a workshop. Give reasons.':
    'اكتب لماذا تُعدّ السلامة مهمة في الورشة. اذكر الأسباب.',
  'Write a short safety notice to put on the workshop wall. Use imperatives.':
    'اكتب لافتة سلامة قصيرة تُعلَّق على جدار الورشة. استعمل صيغة الأمر.',
  'Write about a time when safety was important, at work or at home.':
    'اكتب عن مرة كانت فيها السلامة مهمة، في العمل أو في البيت.',

  /* ---- s16-management-file-dialogue ---- */
  'Match what a foreman says with its purpose. One purpose is not needed. Write the letter. Column A Column B':
    'صِلْ ما يقوله رئيس العمال بالغرض منه. هناك غرض واحد زائد لا يُستخدم.',
  'Before you listen: what does a foreman show a new worker on their first day in the bay? Press play. You can slow it down, loop a line, and turn the Arabic on.':
    'قبل الاستماع: ماذا يُري رئيسُ العمال عاملًا جديدًا في أول يوم له في الورشة؟ اضغط تشغيل. يمكنك إبطاء الصوت، وتكرار سطر واحد، وإظهار الترجمة العربية.',
  'Answer the questions. (0. is done.)':
    'أجب عن الأسئلة. (البند 0 محلول.)',

  /* ---- s17-management-file-practice ---- */
  'Put a foreman\'s induction steps in order. Number them 1–5. (0. is done.)':
    'رتِّب خطوات التعريف التي يتبعها رئيس العمال من 1 إلى 5. (البند 0 محلول.)',
  'In pairs. One is the foreman (Nabil); one is the new mechanic (Tarek). Use the model and cards.':
    'ثنائيًّا: أحدكما رئيس العمال (نبيل) والآخر الميكانيكي الجديد (طارق). استعملا النموذج والبطاقتين.',
  'You are Maher. Write the workshop\'s safety rules as a short notice for the wall. Use imperatives and sequencers.':
    'أنت ماهر: اكتب قواعد السلامة في الورشة في صورة لافتة قصيرة للجدار. استعمل صيغة الأمر وكلمات الترتيب.',

  /* ---- s18-global-case-study ---- */
  'Answer in a few words each.':
    'أجب بكلمات قليلة عن كل سؤال.',
  'Match each word with its meaning. One meaning is not needed. Write the letter. Column A Column B':
    'صِلْ كل كلمة بمعناها. هناك معنى واحد زائد لا يُستخدم.',
  'Talk with a partner. Use the frames.':
    'تحدَّث مع زميل مستعينًا بالعبارات الجاهزة.',

  /* ---- s19-local-case-study ---- */
  'Answer in a few words each.':
    'أجب بكلمات قليلة عن كل سؤال.',
  'A garage owner has some money to improve his workshop. Should he first (a) buy a new diagnostic machine, (b) buy safety gear and axle stands and train the team, or (c) paint the building? Decide and explain. Use the frame.':
    'صاحب ورشة لديه مبلغ من المال ليحسّن ورشته. هل يشتري أولًا (أ) جهاز تشخيص جديدًا، أم (ب) معدات سلامة وحوامل محاور ويدرِّب فريقه، أم (ج) يدهن المبنى؟ قرِّر واشرح، مستعينًا بالعبارات الجاهزة.',

  /* ---- s20-spiral-review ---- */
  'Complete the review. (0. is done.)':
    'أكمل المراجعة. (البند 0 محلول.)',

  /* ---- s21-can-do-glossary ---- */
  'Can-Do checklist — tick what you can do. Each row is checked against what you actually did on this unit\'s writing screen, so a tick you have not earned says so rather than being taken on trust.':
    'قائمة «أستطيع أن» — ضع علامة أمام ما تستطيع فعله. كل سطر يُقابَل بما فعلته بالفعل في صفحة الكتابة في هذه الوحدة، فالعلامة التي لم تستحقها تُقال لك بدل أن تُقبل على عِلّاتها.',
  'Unit 3 glossary (10 words)':
    'مفردات الوحدة الثالثة (عشر كلمات)'
});
