/* ============================================================
   Unit 8 — the Arabic layer.

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
  'Match the words with their meanings. One meaning is not needed. Write the letter. Column A Column B':
    'صِلْ كل كلمة بمعناها. هناك معنى واحد زائد لا يُستخدم. في الكتاب تُكتب الحروف؛ هنا اسحب المعنى إلى الكلمة.',
  'Complete the sentences using the words in the word bank.':
    'أكمل الجمل بالكلمات الموجودة في بنك الكلمات.',
  'Press a paragraph button to hear it read.':
    'اضغط زر الفقرة لتسمعها مقروءة.',
  'Read the text and choose the correct answer. Every answer is in the text above — look back at it rather than answering from what you already know.':
    'اقرأ النص ثم اختر الإجابة الصحيحة. كل إجابة موجودة في النص أعلاه، فارجع إليه بدل الإجابة من معلوماتك السابقة.',

  /* ---- s02-vocabulary ---- */
  'Match the words with their meanings. One meaning is not needed. (0. is done for you.) Column A Column B':
    'صِلْ كل كلمة بمعناها. هناك معنى واحد زائد لا يُستخدم. (البند 0 محلول كمثال.)',
  'The book prints a table here and asks you to complete it. Read the worked row, then do the two cards on this screen — they practise the same words.':
    'يطبع الكتاب هنا جدولًا ويطلب منك إكماله. اقرأ الصف المحلول، ثم أنجز البطاقتين الأخريين في هذه الصفحة؛ فهما تتدربان على الكلمات نفسها.',
  'Match each rule with its reason. One reason is not needed. Write the letter. Column A Column B':
    'صِلْ كل قاعدة بسببها. هناك سبب واحد زائد لا يُستخدم. في الكتاب تُكتب الحروف؛ هنا اسحب السبب إلى القاعدة.',

  /* ---- s03-pronunciation ---- */
  'Play each word, then put it in the column that matches where you hear the beat.':
    'شغِّل كل كلمة، ثم ضعها في العمود الذي يوافق موضع النبرة التي تسمعها.',

  /* ---- s04-check ---- */
  'Read and choose the correct answer.':
    'اقرأ ثم اختر الإجابة الصحيحة.',
  'Complete the sentences with the correct word.':
    'أكمل الجمل بالكلمة الصحيحة.',
  'Write two or three sentences about quality and warranty. Use three words from this unit.':
    'اكتب جملتين أو ثلاثاً عن الجودة والضمان، واستخدم ثلاث كلمات من هذه الوحدة.',

  /* ---- s05-grammar-notice ---- */
  'Read these lines. Which say \'it is necessary\'? Which say \'it is not allowed\'? Which say \'it is not necessary\'?':
    'اقرأ هذه العبارات. أيُّها يقول "هذا واجب"؟ وأيُّها يقول "هذا ممنوع"؟ وأيُّها يقول "هذا غير واجب"؟',
  'The book\'s own box. Read it once now; the practice that follows comes straight out of it.':
    'صندوق الكتاب نفسه. اقرأه مرة الآن؛ فالتمارين التالية تخرج منه مباشرة.',

  /* ---- s06-grammar-practice ---- */
  'Complete with must or mustn\'t. (0. is done.)':
    'أكمل بـ must أو mustn\'t. (رقم ٠ محلول لك.)',
  'Complete with have to, has to, don\'t have to, or doesn\'t have to.':
    'أكمل بـ have to أو has to أو don\'t have to أو doesn\'t have to.',

  /* ---- s07-grammar-review ---- */
  'Each sentence has one grammar mistake. Write the correct sentence.':
    'في كل جملة خطأ نحوي واحد. اكتب الجملة صحيحة.',
  'Write three quality rules for a garage: one with must, one with have to, and one with mustn\'t.':
    'اكتب ثلاث قواعد للجودة في ورشة: واحدة بـ must، وواحدة بـ have to، وواحدة بـ mustn\'t.',
  'Choose the correct answer.':
    'اختر الإجابة الصحيحة.',

  /* ---- s08-listening-1 ---- */
  'Before you listen: what must a car pass before it is handed over? Press play. You can slow it down, loop a line, and turn the Arabic on.':
    'قبل أن تسمع: ما الذي يجب أن تجتازه السيارة قبل تسليمها؟ اضغط زر التشغيل. يمكنك إبطاء الصوت، وتكرار سطر واحد، وإظهار الترجمة العربية.',
  'While you listen: write True, False, or Not Given. (0. is done.) Every statement is settled by the text: read it again rather than answering from what you already know.':
    'أثناء الاستماع: اكتب True أو False أو Not Given. (البند 0 محلول.) كل عبارة يحسمها النص: أعِد قراءته بدل الإجابة من معلوماتك السابقة.',

  /* ---- s09-listening-2 ---- */
  'Before you listen: if a car is under warranty, who pays for a real defect? Press play. You can slow it down, loop a line, and turn the Arabic on.':
    'قبل أن تسمع: إذا كانت السيارة تحت الضمان، فمن يدفع ثمن عيب حقيقي؟ اضغط زر التشغيل. يمكنك إبطاء الصوت، وتكرار سطر واحد، وإظهار الترجمة العربية.',
  'While you listen: answer the questions. (0. is done.)':
    'أثناء الاستماع: أجب عن الأسئلة. (البند 0 محلول.)',

  /* ---- s10-listening-3 ---- */
  'Before you listen: why does an authorised dealer follow the carmaker\'s rules? Press play. You can slow it down, loop a line, and turn the Arabic on.':
    'قبل أن تسمع: لماذا يتّبع الوكيل المعتمد قواعد الشركة الصانعة؟ اضغط زر التشغيل. يمكنك إبطاء الصوت، وتكرار سطر واحد، وإظهار الترجمة العربية.',
  'While you listen: match each rule with the detail. One is not needed. (0. is done.) Column A Column B':
    'أثناء السماع: صِلْ كل قاعدة بالتفصيل الذي يخصّها. هناك بند واحد زائد لا يُستخدم. (رقم ٠ محلول لك.)',

  /* ---- s11-speaking-model ---- */
  'Work with a partner. Ask and answer these questions. What must every car pass before it is handed over? Why mustn\'t a garage hide a defect? What does a warranty mean for the customer?':
    'اعمل مع زميل. اسأل وأجب عن هذه الأسئلة: ما الذي يجب أن تجتازه كل سيارة قبل تسليمها؟ لماذا يُمنع على الورشة أن تُخفي عيباً؟ وما معنى الضمان بالنسبة إلى العميل؟',
  'Work in pairs. Student A looks at Car A; Student B looks at Car B. Ask and answer to find three differences. Do not show your card.':
    'اعملا ثنائيًّا: الطالب (أ) ينظر إلى السيارة A، والطالب (ب) إلى السيارة B. تبادلا الأسئلة لإيجاد ثلاثة فروق. لا تُرِ زميلك بطاقتك.',

  /* ---- s12-role-play ---- */
  'Work in pairs. Read the model, then use the cards.':
    'اعملا ثنائيًّا: اقرآ النموذج ثم استعملا البطاقتين.',
  'Prepare a short talk (about one minute). Explain the quality rules at a good garage. Use must, have to, and mustn\'t.':
    'حضِّر كلمة قصيرة (نحو دقيقة واحدة). اشرح قواعد الجودة في ورشة جيدة. استخدم must و have to و mustn\'t.',

  /* ---- s13-reading-text ---- */
  'Before you read: what does \'quality\' mean at a service centre? Say your guess, then read and see. Press a paragraph button to hear it read.':
    'قبل أن تقرأ: ما معنى "الجودة" في مركز خدمة؟ قل توقّعك، ثم اقرأ وتحقّق. اضغط زر الفقرة لتسمعها مقروءة.',
  'Answer the multiple-choice questions. (0. is done.) Every answer is in the text above — look back at it rather than answering from what you already know.':
    'أجب عن أسئلة الاختيار من متعدد. (البند 0 محلول.) كل إجابة موجودة في النص أعلاه، فارجع إليه بدل الإجابة من معلوماتك السابقة.',

  /* ---- s14-reading-comprehension ---- */
  'Match each word from the text with its meaning. One meaning is not needed. Write the letter. Column A Column B':
    'صِلْ كل كلمة من النص بمعناها. هناك معنى واحد زائد لا يُستخدم.',
  'Before you read: why does a written guarantee mean a lot in Syria? Say your guess, then read and see. Press a paragraph button to hear it read.':
    'قبل أن تقرأ: لماذا يعني الضمان المكتوب الكثير في سوريا؟ قل توقّعك، ثم اقرأ وتحقّق. اضغط زر الفقرة لتسمعها مقروءة.',
  'Write True or False. (0. is done.) Every statement is settled by the text: read it again rather than answering from what you already know.':
    'اكتب True أو False. (البند 0 محلول.) كل عبارة يحسمها النص: أعِد قراءته بدل الإجابة من معلوماتك السابقة.',

  /* ---- s15-writing-model ---- */
  'Write the quality rules for a garage. Use must, have to, and mustn\'t.':
    'اكتب قواعد الجودة لورشة. استخدم must و have to و mustn\'t.',
  'Write why quality standards and honest warranty work are important. Give reasons.':
    'اكتب لماذا تُعدّ معايير الجودة والعمل الصادق بالضمان مهمة، واذكر الأسباب.',
  'Write a short note to a customer, explaining their warranty and what it covers.':
    'اكتب مذكرة قصيرة لعميل تشرح فيها ضمانه وما الذي يغطّيه.',
  'Write about a time a shop or a person kept a promise (a guarantee), or did not. What happened?':
    'اكتب عن مرة أوفى فيها متجر أو شخص بوعده (بضمانه)، أو لم يُوفِ. ماذا حدث؟',

  /* ---- s16-management-file-dialogue ---- */
  'Match what a manager says with its purpose. One purpose is not needed. Write the letter. Column A Column B':
    'صِلْ ما يقوله المدير بالغرض منه. هناك غرض واحد زائد لا يُستخدم.',
  'Before you listen: what does a manager check before a car is handed over? Press play. You can slow it down, loop a line, and turn the Arabic on.':
    'قبل أن تسمع: ماذا يتفقّد المدير قبل تسليم السيارة؟ اضغط زر التشغيل. يمكنك إبطاء الصوت، وتكرار سطر واحد، وإظهار الترجمة العربية.',
  'Answer the questions. (0. is done.)':
    'أجب عن الأسئلة. (البند 0 محلول.)',

  /* ---- s17-management-file-practice ---- */
  'Complete with must, mustn\'t, have to, or don\'t have to.':
    'أكمل بـ must أو mustn\'t أو have to أو don\'t have to.',
  'In pairs. One is the manager (Maher); one is the mechanic (Nabil). Use the model and cards.':
    'ثنائيًّا: أحدكما المدير (ماهر) والآخر الميكانيكي (نبيل). استعملا النموذج والبطاقتين.',
  'You are Maher. Write a short quality-check note for the car\'s file: what passed, what must be fixed, and the rule.':
    'أنت ماهر. اكتب مذكرة فحص جودة قصيرة لملف السيارة: ما الذي اجتاز الفحص، وما الذي يجب إصلاحه، والقاعدة التي تستند إليها.',

  /* ---- s18-global-case-study ---- */
  'Answer in a few words each.':
    'أجب بكلمات قليلة عن كل سؤال.',
  'Match each word with its meaning. One meaning is not needed. Write the letter. Column A Column B':
    'صِلْ كل كلمة بمعناها. هناك معنى واحد زائد لا يُستخدم.',
  'Talk with a partner. Use the frames.':
    'تحدَّث مع زميل مستعينًا بالعبارات الجاهزة.',

  /* ---- s19-local-case-study ---- */
  'A customer\'s repair fails inside the guarantee time. Should the garage (a) argue and refuse to help, (b) fix it for free as the guarantee promises, or (c) charge half the price? Decide and explain. Use the frame.':
    'فشل إصلاح سيارة عميل خلال مدة الضمان. هل ينبغي للورشة: (أ) أن تجادل وترفض المساعدة، (ب) أن تُصلحها مجاناً كما يَعِد الضمان، (ج) أن تتقاضى نصف الأجر؟ اختر وبرِّر اختيارك مستعيناً بالقالب.',

  /* ---- s20-spiral-review ---- */
  'Complete the review. (0. is done.)':
    'أكمل المراجعة. (البند 0 محلول.)',

  /* ---- s21-can-do-glossary ---- */
  'Can-Do checklist — tick what you can do. Each row is checked against what you actually did on this unit\'s writing screen, so a tick you have not earned says so rather than being taken on trust.':
    'قائمة «أستطيع أن» — ضع علامة أمام ما تستطيع فعله. كل سطر يُقابَل بما فعلته بالفعل في صفحة الكتابة في هذه الوحدة، فالعلامة التي لم تستحقها تُقال لك بدل أن تُقبل على عِلّاتها.',
  'Unit 8 glossary (10 words)':
    'مفردات الوحدة الثامنة (عشر كلمات)'
});
