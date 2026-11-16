/* ============================================================
   Unit 7 — the Arabic layer.

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
  'Match each step with what happens. One is not needed. Write the letter. Column A Column B':
    'صِلْ كل خطوة بما يحدث فيها. هناك بند واحد زائد لا يُستخدم. في الكتاب تُكتب الحروف؛ هنا اسحب الوصف إلى الخطوة.',

  /* ---- s03-pronunciation ---- */
  'Play each word, then put it in the column that matches where you hear the beat.':
    'شغِّل كل كلمة، ثم ضعها في العمود الذي يوافق موضع النبرة التي تسمعها.',

  /* ---- s04-check ---- */
  'Read and choose the correct answer.':
    'اقرأ ثم اختر الإجابة الصحيحة.',
  'Complete the sentences with the correct word.':
    'أكمل الجمل بالكلمة الصحيحة.',
  'Write two or three sentences about booking a service. Use three words from this unit.':
    'اكتب جملتين أو ثلاثاً عن حجز موعد صيانة، واستخدم ثلاث كلمات من هذه الوحدة.',

  /* ---- s05-grammar-notice ---- */
  'Read these lines. Which is a promise? Which is a plan? Which is a fixed arrangement?':
    'اقرأ هذه العبارات. أيُّها وعد؟ وأيُّها خطة سابقة؟ وأيُّها موعد مثبَّت؟',
  'The book\'s own box. Read it once now; the practice that follows comes straight out of it.':
    'صندوق الكتاب نفسه. اقرأه مرة الآن؛ فالتمارين التالية تخرج منه مباشرة.',

  /* ---- s06-grammar-practice ---- */
  'Choose the correct future form.':
    'اختر صيغة المستقبل الصحيحة.',
  'Choose the correct form.':
    'اختر الصيغة الصحيحة.',

  /* ---- s07-grammar-review ---- */
  'Each sentence has one grammar mistake. Write the correct sentence.':
    'في كل جملة خطأ نحوي واحد. اكتب الجملة صحيحة.',
  'Write three sentences to a customer: one promise (will), one plan (going to), and one arrangement (present continuous).':
    'اكتب ثلاث جمل لعميل: وعداً واحداً بـ will، وخطة واحدة بـ going to، وموعداً مثبَّتاً بالمضارع المستمر.',
  'Choose the correct answer.':
    'اختر الإجابة الصحيحة.',

  /* ---- s08-listening-1 ---- */
  'Before you listen: what does an advisor say when a customer books a service? Press play. You can slow it down, loop a line, and turn the Arabic on.':
    'قبل أن تسمع: ماذا يقول مستشار الخدمة عندما يحجز العميل موعد صيانة؟ اضغط زر التشغيل. يمكنك إبطاء الصوت، وتكرار سطر واحد، وإظهار الترجمة العربية.',
  'While you listen: write True, False, or Not Given. (0. is done.) Every statement is settled by the text: read it again rather than answering from what you already know.':
    'أثناء الاستماع: اكتب True أو False أو Not Given. (البند 0 محلول.) كل عبارة يحسمها النص: أعِد قراءته بدل الإجابة من معلوماتك السابقة.',

  /* ---- s09-listening-2 ---- */
  'Before you listen: what does a customer want to know before the work starts? Press play. You can slow it down, loop a line, and turn the Arabic on.':
    'قبل أن تسمع: ما الذي يريد العميل معرفته قبل أن يبدأ العمل؟ اضغط زر التشغيل. يمكنك إبطاء الصوت، وتكرار سطر واحد، وإظهار الترجمة العربية.',
  'While you listen: answer the questions. (0. is done.)':
    'أثناء الاستماع: أجب عن الأسئلة. (البند 0 محلول.)',

  /* ---- s10-listening-3 ---- */
  'Before you listen: how does a manager plan a whole week of work? Press play. You can slow it down, loop a line, and turn the Arabic on.':
    'قبل أن تسمع: كيف يخطّط المدير لعمل أسبوع كامل؟ اضغط زر التشغيل. يمكنك إبطاء الصوت، وتكرار سطر واحد، وإظهار الترجمة العربية.',
  'While you listen: match each item with the detail. One is not needed. (0. is done.) Column A Column B':
    'أثناء السماع: صِلْ كل بند بالتفصيل الذي يخصّه. هناك بند واحد زائد لا يُستخدم. (رقم ٠ محلول لك.)',

  /* ---- s11-speaking-model ---- */
  'Work with a partner. Ask and answer these questions. What happens step by step when a customer books a service? Why is an estimate important before the work starts? What can a garage offer if a job takes more than a day?':
    'اعمل مع زميل. اسأل وأجب عن هذه الأسئلة: ماذا يحدث خطوة بخطوة عندما يحجز العميل موعد صيانة؟ لماذا تُعدّ الكلفة التقديرية مهمة قبل بدء العمل؟ ماذا يمكن أن تقدّم الورشة إذا استغرق العمل أكثر من يوم؟',
  'Work in pairs. Student A looks at Booking A; Student B looks at Booking B. Ask and answer to find three differences. Do not show your card.':
    'اعملا في ثنائيات. الطالب (أ) ينظر إلى الحجز (أ)، والطالب (ب) ينظر إلى الحجز (ب). اسألا وأجيبا لتجدا ثلاثة فروق. لا تُظهِر بطاقتك لزميلك.',

  /* ---- s12-role-play ---- */
  'Work in pairs. Read the model, then use the cards.':
    'اعملا ثنائيًّا: اقرآ النموذج ثم استعملا البطاقتين.',
  'Prepare a short talk (about one minute). Explain what happens at the service desk, from booking to handover. Use future forms.':
    'حضِّر كلمة قصيرة (نحو دقيقة واحدة). اشرح ما يحدث في مكتب الخدمة، من الحجز إلى تسليم السيارة. استخدم صيغ المستقبل.',

  /* ---- s13-reading-text ---- */
  'Before you read: why is the service desk important for the customer? Say your guess, then read and see. Press a paragraph button to hear it read.':
    'قبل أن تقرأ: لماذا يُعدّ مكتب الخدمة مهماً للعميل؟ قل توقّعك، ثم اقرأ وتحقّق. اضغط زر الفقرة لتسمعها مقروءة.',
  'Answer the multiple-choice questions. (0. is done.) Every answer is in the text above — look back at it rather than answering from what you already know.':
    'أجب عن أسئلة الاختيار من متعدد. (البند 0 محلول.) كل إجابة موجودة في النص أعلاه، فارجع إليه بدل الإجابة من معلوماتك السابقة.',

  /* ---- s14-reading-comprehension ---- */
  'Match each word from the text with its meaning. One meaning is not needed. Write the letter. Column A Column B':
    'صِلْ كل كلمة من النص بمعناها. هناك معنى واحد زائد لا يُستخدم.',
  'Before you read: what problems can a service desk in Syria have? Say your guess, then read and see. Press a paragraph button to hear it read.':
    'قبل أن تقرأ: ما المشكلات التي قد تواجه مكتب الخدمة في سوريا؟ قل توقّعك، ثم اقرأ وتحقّق. اضغط زر الفقرة لتسمعها مقروءة.',
  'Write True or False. (0. is done.) Every statement is settled by the text: read it again rather than answering from what you already know.':
    'اكتب True أو False. (البند 0 محلول.) كل عبارة يحسمها النص: أعِد قراءته بدل الإجابة من معلوماتك السابقة.',

  /* ---- s15-writing-model ---- */
  'Write an email to a customer to confirm a booking. Use future forms.':
    'اكتب بريداً إلكترونياً لعميل لتأكيد حجزه. استخدم صيغ المستقبل.',
  'Write why clear communication is important at a service desk. Give reasons.':
    'اكتب لماذا يُعدّ التواصل الواضح مهماً في مكتب الخدمة، واذكر الأسباب.',
  'Write a short message to a customer to tell them the car is ready.':
    'اكتب رسالة قصيرة لعميل تخبره أن سيارته جاهزة.',
  'Write about a time you waited for something (a repair, a part, or a delivery). How did you feel? What helped?':
    'اكتب عن مرة انتظرتَ فيها شيئاً: إصلاحاً أو قطعة أو شحنة. بماذا شعرت؟ وما الذي ساعدك؟',

  /* ---- s16-management-file-dialogue ---- */
  'Match what a manager says with its purpose. One purpose is not needed. Write the letter. Column A Column B':
    'صِلْ ما يقوله المدير بالغرض منه. هناك غرض واحد زائد لا يُستخدم.',
  'Before you listen: how does a manager plan a big job across the week? Press play. You can slow it down, loop a line, and turn the Arabic on.':
    'قبل أن تسمع: كيف يوزّع المدير عملاً كبيراً على أيام الأسبوع؟ اضغط زر التشغيل. يمكنك إبطاء الصوت، وتكرار سطر واحد، وإظهار الترجمة العربية.',
  'Answer the questions. (0. is done.)':
    'أجب عن الأسئلة. (البند 0 محلول.)',

  /* ---- s17-management-file-practice ---- */
  'Complete with will, going, is, or are.':
    'أكمل بـ will أو going أو is أو are.',
  'In pairs. One is the manager (Maher); one is the advisor (Rana). Use the model and cards.':
    'في ثنائيات: أحدكما المدير (ماهر)، والآخر مستشارة الخدمة (رنا). استعِن بالحوار النموذجي والبطاقتين.',
  'You are Maher. Write a short update message to the customer of the big job. Give an honest plan and ready time.':
    'أنت ماهر. اكتب رسالة متابعة قصيرة لصاحب العمل الكبير. أعطِه خطة صادقة ووقتاً واقعياً للتسليم.',

  /* ---- s18-global-case-study ---- */
  'Answer in a few words each.':
    'أجب بكلمات قليلة عن كل سؤال.',
  'Match each word with its meaning. One meaning is not needed. Write the letter. Column A Column B':
    'صِلْ كل كلمة بمعناها. هناك معنى واحد زائد لا يُستخدم.',
  'Talk with a partner. Use the frames.':
    'تحدَّث مع زميل مستعينًا بالعبارات الجاهزة.',

  /* ---- s19-local-case-study ---- */
  'A part will take a week to import, but the customer needs the car. Should the advisor (a) promise the car in two days to keep the customer happy, (b) give an honest ready time and offer a courtesy car, or (c) say nothing and hope the part comes? Decide and explain. Use the frame.':
    'استيراد القطعة يستغرق أسبوعاً، والعميل بحاجة إلى سيارته. هل ينبغي لمستشار الخدمة: (أ) أن يوعده بالسيارة بعد يومين لإرضائه، (ب) أن يعطيه وقتاً صادقاً للتسليم ويعرض عليه سيارة بديلة، (ج) أن يسكت ويأمل وصول القطعة؟ اختر وبرِّر اختيارك مستعيناً بالقالب.',

  /* ---- s20-spiral-review ---- */
  'Complete the review. (0. is done.)':
    'أكمل المراجعة. (البند 0 محلول.)',

  /* ---- s21-can-do-glossary ---- */
  'Can-Do checklist — tick what you can do. Each row is checked against what you actually did on this unit\'s writing screen, so a tick you have not earned says so rather than being taken on trust.':
    'قائمة «أستطيع أن» — ضع علامة أمام ما تستطيع فعله. كل سطر يُقابَل بما فعلته بالفعل في صفحة الكتابة في هذه الوحدة، فالعلامة التي لم تستحقها تُقال لك بدل أن تُقبل على عِلّاتها.',
  'Unit 7 glossary (10 words)':
    'مفردات الوحدة السابعة (عشر كلمات)'
});
