/* ============================================================
   Unit 6 — the Arabic layer.

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
  'Match each job with its reason. One reason is not needed. Write the letter. Column A Column B':
    'صِلْ كل عمل من أعمال الصيانة بسببه. هناك سبب واحد زائد لا يُستخدم. في الكتاب تُكتب الحروف؛ هنا اسحب السبب إلى العمل.',

  /* ---- s03-pronunciation ---- */
  'Play each word, then put it in the column that matches where you hear the beat.':
    'شغِّل كل كلمة، ثم ضعها في العمود الذي يوافق موضع النبرة التي تسمعها.',

  /* ---- s04-check ---- */
  'Read and choose the correct answer.':
    'اقرأ ثم اختر الإجابة الصحيحة.',
  'Complete the sentences with the correct word.':
    'أكمل الجمل بالكلمة الصحيحة.',
  'Write two or three sentences about a routine service. Use three words from this unit.':
    'اكتب جملتين أو ثلاثاً عن الصيانة الدورية، واستخدم ثلاث كلمات من هذه الوحدة.',

  /* ---- s05-grammar-notice ---- */
  'Read these lines. Which are requests? Which are offers? Which give advice?':
    'اقرأ هذه العبارات. أيُّها طلب؟ وأيُّها عَرْض مساعدة؟ وأيُّها نصيحة؟',
  'The book\'s own box. Read it once now; the practice that follows comes straight out of it.':
    'صندوق الكتاب نفسه. اقرأه مرة الآن؛ فالتمارين التالية تخرج منه مباشرة.',

  /* ---- s06-grammar-practice ---- */
  'Write a request, offer, or advice, as shown. (0. is done.)':
    'اكتب طلباً أو عَرْضاً أو نصيحة، كما في المثال. (رقم ٠ محلول لك.)',
  'Choose the correct word.':
    'اختر الكلمة الصحيحة.',

  /* ---- s07-grammar-review ---- */
  'Each sentence has one grammar mistake. Write the correct sentence.':
    'في كل جملة خطأ نحوي واحد. اكتب الجملة صحيحة.',
  'Write one request, one offer, and one piece of advice you could say to a customer.':
    'اكتب طلباً واحداً وعَرْضاً واحداً ونصيحة واحدة يمكن أن تقولها للعميل.',
  'Choose the correct answer.':
    'اختر الإجابة الصحيحة.',

  /* ---- s08-listening-1 ---- */
  'Before you listen: what does a service advisor say about a worn part? Press play. You can slow it down, loop a line, and turn the Arabic on.':
    'قبل أن تسمع: ماذا يقول مستشار الخدمة عن قطعة بالية؟ اضغط زر التشغيل. يمكنك إبطاء الصوت، وتكرار سطر واحد، وإظهار الترجمة العربية.',
  'While you listen: write True, False, or Not Given. (0. is done.) Every statement is settled by the text: read it again rather than answering from what you already know.':
    'أثناء الاستماع: اكتب True أو False أو Not Given. (البند 0 محلول.) كل عبارة يحسمها النص: أعِد قراءته بدل الإجابة من معلوماتك السابقة.',

  /* ---- s09-listening-2 ---- */
  'Before you listen: what does a customer say when booking a service? Press play. You can slow it down, loop a line, and turn the Arabic on.':
    'قبل أن تسمع: ماذا يقول العميل عندما يحجز موعد صيانة؟ اضغط زر التشغيل. يمكنك إبطاء الصوت، وتكرار سطر واحد، وإظهار الترجمة العربية.',
  'While you listen: answer the questions. (0. is done.)':
    'أثناء الاستماع: أجب عن الأسئلة. (البند 0 محلول.)',

  /* ---- s10-listening-3 ---- */
  'Before you listen: what is the difference between a small service and a full service? Press play. You can slow it down, loop a line, and turn the Arabic on.':
    'قبل أن تسمع: ما الفرق بين الصيانة الصغيرة والصيانة الكاملة؟ اضغط زر التشغيل. يمكنك إبطاء الصوت، وتكرار سطر واحد، وإظهار الترجمة العربية.',
  'While you listen: match each item with the detail. One is not needed. (0. is done.) Column A Column B':
    'أثناء السماع: صِلْ كل بند بالتفصيل الذي يخصّه. هناك بند واحد زائد لا يُستخدم. (رقم ٠ محلول لك.)',

  /* ---- s11-speaking-model ---- */
  'Work with a partner. Ask and answer these questions. What jobs are done at a full service? Why should a mechanic give honest advice? How do you politely tell a customer a part is worn?':
    'اعمل مع زميل. اسأل وأجب عن هذه الأسئلة: ما الأعمال التي تُنجَز في الصيانة الكاملة؟ لماذا ينبغي للميكانيكي أن ينصح بصدق؟ كيف تخبر العميل بلباقة أن قطعة ما بالية؟',
  'Work in pairs. Student A looks at Service A; Student B looks at Service B. Ask and answer to find three differences. Do not show your card.':
    'اعملا في ثنائيات. الطالب (أ) ينظر إلى الصيانة (أ)، والطالب (ب) ينظر إلى الصيانة (ب). اسألا وأجيبا لتجدا ثلاثة فروق. لا تُظهِر بطاقتك لزميلك.',

  /* ---- s12-role-play ---- */
  'Work in pairs. Read the model, then use the cards.':
    'اعملا ثنائيًّا: اقرآ النموذج ثم استعملا البطاقتين.',
  'Prepare a short talk (about one minute). Explain what is done at a full service, and give one piece of advice to a customer.':
    'حضِّر كلمة قصيرة (نحو دقيقة واحدة). اشرح ما يُنجَز في الصيانة الكاملة، وأعطِ العميل نصيحة واحدة.',

  /* ---- s13-reading-text ---- */
  'Before you read: is it more important for a mechanic to be fast or to be honest? Say your guess, then read and see. Press a paragraph button to hear it read.':
    'قبل أن تقرأ: أيُّهما أهم للميكانيكي، أن يكون سريعاً أم أن يكون صادقاً؟ قل توقّعك، ثم اقرأ وتحقّق. اضغط زر الفقرة لتسمعها مقروءة.',
  'Answer the multiple-choice questions. (0. is done.) Every answer is in the text above — look back at it rather than answering from what you already know.':
    'أجب عن أسئلة الاختيار من متعدد. (البند 0 محلول.) كل إجابة موجودة في النص أعلاه، فارجع إليه بدل الإجابة من معلوماتك السابقة.',

  /* ---- s14-reading-comprehension ---- */
  'Match each word from the text with its meaning. One meaning is not needed. Write the letter. Column A Column B':
    'صِلْ كل كلمة من النص بمعناها. هناك معنى واحد زائد لا يُستخدم.',
  'Before you read: why is a trusted mechanic so important in Syria? Say your guess, then read and see. Press a paragraph button to hear it read.':
    'قبل أن تقرأ: لماذا يُعدّ الميكانيكي الموثوق مهماً جداً في سوريا؟ قل توقّعك، ثم اقرأ وتحقّق. اضغط زر الفقرة لتسمعها مقروءة.',
  'Write True or False. (0. is done.) Every statement is settled by the text: read it again rather than answering from what you already know.':
    'اكتب True أو False. (البند 0 محلول.) كل عبارة يحسمها النص: أعِد قراءته بدل الإجابة من معلوماتك السابقة.',

  /* ---- s15-writing-model ---- */
  'Write to a customer after a service. Give advice about a worn part, and offer to help. Use modals.':
    'اكتب إلى عميل بعد الصيانة. انصحه بشأن قطعة بالية، واعرض عليه المساعدة. استخدم أفعال الطلب والنصيحة.',
  'Write why honest servicing is important. Give reasons.':
    'اكتب لماذا تُعدّ الصيانة الصادقة مهمة، واذكر الأسباب.',
  'Write a short note from the mechanic to the service advisor about a car\'s condition and your advice.':
    'اكتب مذكرة قصيرة من الميكانيكي إلى مستشار الخدمة عن حالة السيارة وعن نصيحتك.',
  'Write about a time someone gave you honest advice, or you gave honest advice to someone.':
    'اكتب عن مرة نصحك فيها أحدهم بصدق، أو نصحتَ فيها أنت أحداً بصدق.',

  /* ---- s16-management-file-dialogue ---- */
  'Match what an advisor or manager says with its purpose. One purpose is not needed. Write the letter. Column A Column B':
    'صِلْ كل عبارة يقولها المستشار أو المدير بالغرض منها. هناك غرض واحد زائد لا يُستخدم. في الكتاب تُكتب الحروف؛ هنا اسحب الغرض إلى العبارة.',
  'Before you listen: how does a manager approve additional work with a customer? Press play. You can slow it down, loop a line, and turn the Arabic on.':
    'قبل أن تسمع: كيف يحصل المدير على موافقة العميل على عمل إضافي؟ اضغط زر التشغيل. يمكنك إبطاء الصوت، وتكرار سطر واحد، وإظهار الترجمة العربية.',
  'Answer the questions. (0. is done.)':
    'أجب عن الأسئلة. (البند 0 محلول.)',

  /* ---- s17-management-file-practice ---- */
  'Complete with should, Shall, Could, or shouldn\'t.':
    'أكمل بـ should أو Shall أو Could أو shouldn\'t.',
  'In pairs. One is the advisor/manager; one is the customer. Use the model and cards.':
    'في ثنائيات: أحدكما مستشار الخدمة أو المدير، والآخر العميل. استعِن بالحوار النموذجي والبطاقتين.',
  'You are Maher. Write a short service recommendation for the customer\'s file: what is worn, what you advise, and what is urgent.':
    'أنت ماهر. اكتب توصية صيانة قصيرة لملف العميل: ما القطعة البالية، وبماذا تنصح، وما العمل العاجل.',

  /* ---- s18-global-case-study ---- */
  'Answer in a few words each.':
    'أجب بكلمات قليلة عن كل سؤال.',
  'Match each word with its meaning. One meaning is not needed. Write the letter. Column A Column B':
    'صِلْ كل كلمة بمعناها. هناك معنى واحد زائد لا يُستخدم.',
  'Talk with a partner. Use the frames.':
    'تحدَّث مع زميل مستعينًا بالعبارات الجاهزة.',

  /* ---- s19-local-case-study ---- */
  'A customer\'s car has a small, cheap problem, but a bigger, more expensive repair would earn the garage more. Should the mechanic (a) do the big repair for more money, (b) do only the small repair the car needs, or (c) send the customer away? Decide and explain. Use the frame.':
    'سيارة عميل فيها مشكلة صغيرة رخيصة الإصلاح، لكن إصلاحاً أكبر وأغلى يُدخل على الورشة مالاً أكثر. هل ينبغي للميكانيكي: (أ) أن يُجري الإصلاح الكبير ليكسب أكثر، (ب) أن يُجري الإصلاح الصغير الذي تحتاجه السيارة فقط، (ج) أن يصرف العميل؟ اختر وبرِّر اختيارك مستعيناً بالقالب.',

  /* ---- s20-spiral-review ---- */
  'Complete the review. (0. is done.)':
    'أكمل المراجعة. (البند 0 محلول.)',

  /* ---- s21-can-do-glossary ---- */
  'Can-Do checklist — tick what you can do. Each row is checked against what you actually did on this unit\'s writing screen, so a tick you have not earned says so rather than being taken on trust.':
    'قائمة «أستطيع أن» — ضع علامة أمام ما تستطيع فعله. كل سطر يُقابَل بما فعلته بالفعل في صفحة الكتابة في هذه الوحدة، فالعلامة التي لم تستحقها تُقال لك بدل أن تُقبل على عِلّاتها.',
  'Unit 6 glossary (10 words)':
    'مفردات الوحدة السادسة (عشر كلمات)'
});
