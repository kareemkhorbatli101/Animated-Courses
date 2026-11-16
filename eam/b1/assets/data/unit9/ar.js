/* ============================================================
   Unit 9 — the Arabic layer.

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
  'Match each action with its meaning. One meaning is not needed. Write the letter. Column A Column B':
    'صِلْ كل إجراء بمعناه. هناك معنى واحد زائد لا يُستخدم. في الكتاب تُكتب الحروف؛ هنا اسحب المعنى إلى الإجراء.',

  /* ---- s03-pronunciation ---- */
  'Play each word, then put it in the column that matches where you hear the beat.':
    'شغِّل كل كلمة، ثم ضعها في العمود الذي يوافق موضع النبرة التي تسمعها.',

  /* ---- s04-check ---- */
  'Read and choose the correct answer.':
    'اقرأ ثم اختر الإجابة الصحيحة.',
  'Complete the sentences with the correct word.':
    'أكمل الجمل بالكلمة الصحيحة.',
  'Write two or three sentences about how a mechanic finds and fixes a fault. Use three words from this unit.':
    'اكتب جملتين أو ثلاثاً عن كيف يجد الميكانيكي العطل ويُصلحه، واستخدم ثلاث كلمات من هذه الوحدة.',

  /* ---- s05-grammar-notice ---- */
  'Read these lines. Which have a finished time? Which talk about experience or a result now?':
    'اقرأ هذه العبارات. أيُّها يذكر زمناً منتهياً؟ وأيُّها يتحدّث عن خبرة أو عن نتيجة قائمة الآن؟',
  'The book\'s own box. Read it once now; the practice that follows comes straight out of it.':
    'صندوق الكتاب نفسه. اقرأه مرة الآن؛ فالتمارين التالية تخرج منه مباشرة.',

  /* ---- s06-grammar-practice ---- */
  'Complete with the past simple or present perfect. (0. is done.)':
    'أكمل بالماضي البسيط أو المضارع التام. (رقم ٠ محلول لك.)',
  'Choose the correct form.':
    'اختر الصيغة الصحيحة.',

  /* ---- s07-grammar-review ---- */
  'Each sentence has one grammar mistake. Write the correct sentence.':
    'في كل جملة خطأ نحوي واحد. اكتب الجملة صحيحة.',
  'Write two sentences: one about a repair you did (past simple, with a time), and one about your experience (present perfect, with ever).':
    'اكتب جملتين: واحدة عن إصلاح أجريته (الماضي البسيط، مع ذكر الزمن)، وواحدة عن خبرتك (المضارع التام، مع ever).',
  'Choose the correct answer.':
    'اختر الإجابة الصحيحة.',

  /* ---- s08-listening-1 ---- */
  'Before you listen: what are the first signs of a fault? Press play. You can slow it down, loop a line, and turn the Arabic on.':
    'قبل أن تسمع: ما أوّل علامات العطل؟ اضغط زر التشغيل. يمكنك إبطاء الصوت، وتكرار سطر واحد، وإظهار الترجمة العربية.',
  'While you listen: write True, False, or Not Given. (0. is done.) Every statement is settled by the text: read it again rather than answering from what you already know.':
    'أثناء الاستماع: اكتب True أو False أو Not Given. (البند 0 محلول.) كل عبارة يحسمها النص: أعِد قراءته بدل الإجابة من معلوماتك السابقة.',

  /* ---- s09-listening-2 ---- */
  'Before you listen: what does a customer say when a fault returns? Press play. You can slow it down, loop a line, and turn the Arabic on.':
    'قبل أن تسمع: ماذا يقول العميل عندما يعود العطل؟ اضغط زر التشغيل. يمكنك إبطاء الصوت، وتكرار سطر واحد، وإظهار الترجمة العربية.',
  'While you listen: answer the questions. (0. is done.)':
    'أثناء الاستماع: أجب عن الأسئلة. (البند 0 محلول.)',

  /* ---- s10-listening-3 ---- */
  'Before you listen: is a comeback always a mistake? Press play. You can slow it down, loop a line, and turn the Arabic on.':
    'قبل أن تسمع: هل عودة السيارة بالعطل نفسه خطأٌ دائماً؟ اضغط زر التشغيل. يمكنك إبطاء الصوت، وتكرار سطر واحد، وإظهار الترجمة العربية.',
  'While you listen: match each time with what happened. One is not needed. (0. is done.) Column A Column B':
    'أثناء السماع: صِلْ كل زمن بما حدث فيه. هناك بند واحد زائد لا يُستخدم. (رقم ٠ محلول لك.)',

  /* ---- s11-speaking-model ---- */
  'Work with a partner. Ask and answer these questions. How does a mechanic find a fault, step by step? Have you ever fixed something difficult? What was it? Why must a garage take every comeback seriously?':
    'اعمل مع زميل. اسأل وأجب عن هذه الأسئلة: كيف يجد الميكانيكي العطل خطوة بخطوة؟ هل أصلحتَ يوماً شيئاً صعباً؟ وما كان؟ ولماذا يجب أن تأخذ الورشة كل عودة بعطل على محمل الجدّ؟',
  'Work in pairs. Student A looks at Car A; Student B looks at Car B. Ask and answer to find three differences. Do not show your card.':
    'اعملا ثنائيًّا: الطالب (أ) ينظر إلى السيارة A، والطالب (ب) إلى السيارة B. تبادلا الأسئلة لإيجاد ثلاثة فروق. لا تُرِ زميلك بطاقتك.',

  /* ---- s12-role-play ---- */
  'Work in pairs. Read the model, then use the cards.':
    'اعملا ثنائيًّا: اقرآ النموذج ثم استعملا البطاقتين.',
  'Prepare a short talk (about one minute). Explain how you find and fix a fault. Use the past simple and the present perfect.':
    'حضِّر كلمة قصيرة (نحو دقيقة واحدة). اشرح كيف تجد العطل وتُصلحه. استخدم الماضي البسيط والمضارع التام.',

  /* ---- s13-reading-text ---- */
  'Before you read: is finding a fault more like following a list, or solving a puzzle? Say your guess, then read and see. Press a paragraph button to hear it read.':
    'قبل أن تقرأ: هل البحث عن العطل أشبه باتّباع قائمة أم بحلّ أُلْغوزة؟ قل توقّعك، ثم اقرأ وتحقّق. اضغط زر الفقرة لتسمعها مقروءة.',
  'Answer the multiple-choice questions. (0. is done.) Every answer is in the text above — look back at it rather than answering from what you already know.':
    'أجب عن أسئلة الاختيار من متعدد. (البند 0 محلول.) كل إجابة موجودة في النص أعلاه، فارجع إليه بدل الإجابة من معلوماتك السابقة.',

  /* ---- s14-reading-comprehension ---- */
  'Match each word from the text with its meaning. One meaning is not needed. Write the letter. Column A Column B':
    'صِلْ كل كلمة من النص بمعناها. هناك معنى واحد زائد لا يُستخدم.',
  'Before you read: why is the skill to repair so important in Syria? Say your guess, then read and see. Press a paragraph button to hear it read.':
    'قبل أن تقرأ: لماذا تُعدّ مهارة الإصلاح مهمة جداً في سوريا؟ قل توقّعك، ثم اقرأ وتحقّق. اضغط زر الفقرة لتسمعها مقروءة.',
  'Write True or False. (0. is done.) Every statement is settled by the text: read it again rather than answering from what you already know.':
    'اكتب True أو False. (البند 0 محلول.) كل عبارة يحسمها النص: أعِد قراءته بدل الإجابة من معلوماتك السابقة.',

  /* ---- s15-writing-model ---- */
  'Describe how you found and fixed a fault. Use the past simple and the present perfect.':
    'صِفْ كيف وجدتَ عطلاً وأصلحتَه. استخدم الماضي البسيط والمضارع التام.',
  'Write why a garage must take every comeback seriously. Give reasons.':
    'اكتب لماذا يجب أن تأخذ الورشة كل عودة بعطل على محمل الجدّ، واذكر الأسباب.',
  'Write a short note from the technician to the manager about a repair and a comeback.':
    'اكتب مذكرة قصيرة من الفنّي إلى المدير عن إصلاح وعن عودة بالعطل نفسه.',
  'Write about a problem you found and fixed (a car, a machine, or anything). How did you find the cause?':
    'اكتب عن مشكلة وجدتَها وأصلحتَها، في سيارة أو آلة أو أيّ شيء. كيف وجدتَ السبب؟',

  /* ---- s16-management-file-dialogue ---- */
  'Match what a manager says with its purpose. One purpose is not needed. Write the letter. Column A Column B':
    'صِلْ ما يقوله المدير بالغرض منه. هناك غرض واحد زائد لا يُستخدم.',
  'Before you listen: how does a manager handle a car that has come back? Press play. You can slow it down, loop a line, and turn the Arabic on.':
    'قبل أن تسمع: كيف يتعامل المدير مع سيارة عادت بالعطل نفسه؟ اضغط زر التشغيل. يمكنك إبطاء الصوت، وتكرار سطر واحد، وإظهار الترجمة العربية.',
  'Answer the questions. (0. is done.)':
    'أجب عن الأسئلة. (البند 0 محلول.)',

  /* ---- s17-management-file-practice ---- */
  'Complete with the past simple or present perfect.':
    'أكمل بالماضي البسيط أو المضارع التام.',
  'In pairs. One is the manager (Maher); one is the technician (Lina). Use the model and cards.':
    'ثنائيًّا: أحدكما المدير (ماهر) والأخرى الفنية (لينا). استعملا النموذج والبطاقتين.',
  'You are Maher. Write a short comeback report for the car\'s file: what was done, what has come back, the real cause, and the action.':
    'أنت ماهر. اكتب تقريراً قصيراً لملف السيارة عن عودتها: ما الذي أُنجِز، وما الذي عاد، والسبب الحقيقي، والإجراء المتّخذ.',

  /* ---- s18-global-case-study ---- */
  'Answer in a few words each.':
    'أجب بكلمات قليلة عن كل سؤال.',
  'Match each word with its meaning. One meaning is not needed. Write the letter. Column A Column B':
    'صِلْ كل كلمة بمعناها. هناك معنى واحد زائد لا يُستخدم.',
  'Talk with a partner. Use the frames.':
    'تحدَّث مع زميل مستعينًا بالعبارات الجاهزة.',

  /* ---- s19-local-case-study ---- */
  'Sort each one into its column.':
    'صنِّف كل واحدة في عمودها.',
  'A customer\'s part has failed. A new one must be imported (three weeks, expensive), but the old part can be reconditioned (next day, cheaper, with a guarantee). Should the garage (a) make the customer wait for a new import, (b) offer to recondition the old part, or (c) fit a cheap, poor-quality part? Decide and explain. Use the frame.':
    'تعطّلت قطعة في سيارة عميل. القطعة الجديدة تحتاج استيراداً (ثلاثة أسابيع، وغالية)، لكن القطعة القديمة يمكن تجديدها (في الغد، وأرخص، ومع ضمان). هل ينبغي للورشة: (أ) أن تجعل العميل ينتظر الاستيراد، (ب) أن تعرض تجديد القطعة القديمة، (ج) أن تُركّب قطعة رخيصة رديئة؟ اختر وبرِّر اختيارك مستعيناً بالقالب.',

  /* ---- s20-spiral-review ---- */
  'Complete the review. (0. is done.)':
    'أكمل المراجعة. (البند 0 محلول.)',

  /* ---- s21-can-do-glossary ---- */
  'Can-Do checklist — tick what you can do. Each row is checked against what you actually did on this unit\'s writing screen, so a tick you have not earned says so rather than being taken on trust.':
    'قائمة «أستطيع أن» — ضع علامة أمام ما تستطيع فعله. كل سطر يُقابَل بما فعلته بالفعل في صفحة الكتابة في هذه الوحدة، فالعلامة التي لم تستحقها تُقال لك بدل أن تُقبل على عِلّاتها.',
  'Unit 9 glossary (10 words)':
    'مفردات الوحدة التاسعة (عشر كلمات)'
});
