/* ============================================================
   Unit 2 — the Arabic layer.

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
  'Match the words with their meanings. One meaning is not needed. Write the letter. Column A Column B':
    'صِلْ كل كلمة بمعناها. هناك معنى واحد زائد لا يُستخدم. في الكتاب تُكتب الحروف؛ هنا اسحب المعنى إلى الكلمة.',
  'Complete the sentences using the words in the word bank.':
    'أكمل الجمل بالكلمات الموجودة في بنك الكلمات.',
  'Press a paragraph button to hear it read.':
    'اضغط زر الفقرة لتسمعها مقروءة.',
  'Read the text and choose the correct answer. Every answer is in the text above — look back at it rather than answering from what you already know.':
    'اقرأ النص ثم اختر الإجابة الصحيحة. كل إجابة موجودة في النص أعلاه، فارجع إليه بدل الإجابة من معلوماتك السابقة.',

  /* ---- s02-vocabulary ---- */
  'Match the parts with their meanings. One meaning is not needed. (0. is done for you.) Column A Column B':
    'صِلْ كل جزء بمعناه. هناك معنى واحد زائد لا يُستخدم. (البند 0 محلول كمثال.)',
  'The book prints a table here and asks you to complete it. Read the worked row, then do the two cards on this screen — they practise the same words.':
    'يطبع الكتاب هنا جدولًا ويطلب منك إكماله. اقرأ الصف المحلول، ثم أنجز البطاقتين الأخريين في هذه الصفحة؛ فهما تتدربان على الكلمات نفسها.',
  'Match each fluid with what it does. One meaning is not needed. Write the letter. Column A Column B':
    'صِلْ كل سائل بالعمل الذي يؤديه. هناك معنى واحد زائد لا يُستخدم.',

  /* ---- s03-pronunciation ---- */
  'Play each word, then put it in the column that matches where you hear the beat.':
    'شغِّل كل كلمة، ثم ضعها في العمود الذي يوافق موضع النبرة التي تسمعها.',

  /* ---- s04-check ---- */
  'Read and choose the correct answer.':
    'اقرأ ثم اختر الإجابة الصحيحة.',
  'Complete the sentences with the correct word.':
    'أكمل الجمل بالكلمة الصحيحة.',
  'Write two or three sentences about what is under the bonnet. Use three words from this unit.':
    'اكتب جملتين أو ثلاثًا عمّا يوجد تحت غطاء المحرك. استعمل ثلاث كلمات من هذه الوحدة.',

  /* ---- s05-grammar-notice ---- */
  'Read these lines from the workshop. Underline there is / there are. When do we use some, any, much, and many?':
    'اقرأ هذه الجمل من الورشة، وحدِّد العبارتين there is / there are. متى نستعمل some و any و much و many؟',
  'The book\'s own box. Read it once now; the practice that follows comes straight out of it.':
    'صندوق الكتاب نفسه. اقرأه مرة الآن؛ فالتمارين التالية تخرج منه مباشرة.',

  /* ---- s06-grammar-practice ---- */
  'Complete with is or are. (0. is done.)':
    'أكمل بـ is أو are. (البند 0 محلول.)',
  'Choose the correct word.':
    'اختر الكلمة الصحيحة.',

  /* ---- s07-grammar-review ---- */
  'Each sentence has one grammar mistake. Write the correct sentence.':
    'في كل جملة خطأ نحوي واحد. اكتب الجملة صحيحة.',
  'Write two sentences about your workshop or toolbox: one with there is and one with there are.':
    'اكتب جملتين عن ورشتك أو صندوق عدّتك: واحدة بـ there is وأخرى بـ there are.',
  'Choose the correct sentence.':
    'اختر الجملة الصحيحة.',

  /* ---- s08-listening-1 ---- */
  'Before you listen: which fluid does a mechanic check first? Press play. You can slow it down, loop a line, and turn the Arabic on.':
    'قبل الاستماع: أي سائل يفحصه الميكانيكي أولًا؟ اضغط تشغيل. يمكنك إبطاء الصوت، وتكرار سطر واحد، وإظهار الترجمة العربية.',
  'While you listen: write True, False, or Not Given. (0. is done.) Every statement is settled by the text: read it again rather than answering from what you already know.':
    'أثناء الاستماع: اكتب True أو False أو Not Given. (البند 0 محلول.) كل عبارة يحسمها النص: أعِد قراءته بدل الإجابة من معلوماتك السابقة.',

  /* ---- s09-listening-2 ---- */
  'Before you listen: what parts does a service department keep in the store? Press play. You can slow it down, loop a line, and turn the Arabic on.':
    'قبل الاستماع: ما القطع التي يحتفظ بها قسم الصيانة في المخزن؟ اضغط تشغيل. يمكنك إبطاء الصوت، وتكرار سطر واحد، وإظهار الترجمة العربية.',
  'While you listen: answer the questions. (0. is done.)':
    'أثناء الاستماع: أجب عن الأسئلة. (البند 0 محلول.)',

  /* ---- s10-listening-3 ---- */
  'Before you listen: why does a manager check the stock before the day starts? Press play. You can slow it down, loop a line, and turn the Arabic on.':
    'قبل الاستماع: لماذا يفحص المدير المخزون قبل بدء يوم العمل؟ اضغط تشغيل. يمكنك إبطاء الصوت، وتكرار سطر واحد، وإظهار الترجمة العربية.',
  'While you listen: match each person with what they do. One action is not needed. (0. is done.) Column A Column B':
    'أثناء الاستماع: صِلْ كل شخص بما يقوم به. هناك عمل واحد زائد لا يُستخدم. (البند 0 محلول.)',

  /* ---- s11-speaking-model ---- */
  'Work with a partner. Ask and answer these questions. Which fluids does a car need? Name three. What can happen if there isn\'t enough oil or coolant? How often should a driver check the fluids?':
    'اعمل مع زميل: اسأل وأجب عن هذه الأسئلة.',
  'Work in pairs. Student A looks at Car A; Student B looks at Car B. Ask and answer to find three differences. Do not show your card.':
    'اعملا ثنائيًّا: الطالب (أ) ينظر إلى السيارة A، والطالب (ب) إلى السيارة B. تبادلا الأسئلة لإيجاد ثلاثة فروق. لا تُرِ زميلك بطاقتك.',

  /* ---- s12-role-play ---- */
  'Work in pairs. Read the model, then use the cards.':
    'اعملا ثنائيًّا: اقرآ النموذج ثم استعملا البطاقتين.',
  'Prepare a short talk (about one minute). Say what is under the bonnet of a car and which fluids it needs.':
    'حضِّر كلمة قصيرة (نحو دقيقة): قل ماذا يوجد تحت غطاء المحرك وأي السوائل تحتاجها السيارة.',

  /* ---- s13-reading-text ---- */
  'Before you read: which fluid do you think is the most important for the engine? Say your guess, then read and see. Press a paragraph button to hear it read.':
    'قبل القراءة: أي سائل تظنه الأهم للمحرك؟ قل تخمينك، ثم اقرأ وتحقق. اضغط زر الفقرة لتسمعها مقروءة.',
  'Answer the multiple-choice questions. (0. is done.) Every answer is in the text above — look back at it rather than answering from what you already know.':
    'أجب عن أسئلة الاختيار من متعدد. (البند 0 محلول.) كل إجابة موجودة في النص أعلاه، فارجع إليه بدل الإجابة من معلوماتك السابقة.',

  /* ---- s14-reading-comprehension ---- */
  'Match each word from the text with its meaning. One meaning is not needed. Write the letter. Column A Column B':
    'صِلْ كل كلمة من النص بمعناها. هناك معنى واحد زائد لا يُستخدم.',
  'Before you read: are good parts and fluids always easy to find where you live? Say your guess, then read and see. Press a paragraph button to hear it read.':
    'قبل القراءة: هل القطع والسوائل الجيدة متوفرة دائمًا حيث تعيش؟ قل تخمينك، ثم اقرأ وتحقق. اضغط زر الفقرة لتسمعها مقروءة.',
  'Write True or False. (0. is done.) Every statement is settled by the text: read it again rather than answering from what you already know.':
    'اكتب True أو False. (البند 0 محلول.) كل عبارة يحسمها النص: أعِد قراءته بدل الإجابة من معلوماتك السابقة.',

  /* ---- s15-writing-model ---- */
  'Describe what is under the bonnet of a car. Use there is and there are, and some / any / much / many.':
    'صِف ما يوجد تحت غطاء محرك السيارة. استعمل there is و there are، و some / any / much / many.',
  'Write why checking the fluids is important. Give reasons.':
    'اكتب لماذا يُعدّ فحص السوائل مهمًّا. اذكر الأسباب.',
  'Write a short note from Nabil (mechanic) to Maher (manager) about what to order.':
    'اكتب رسالة قصيرة من نبيل (الميكانيكي) إلى ماهر (المدير) عمّا يجب طلبه.',
  'Write about a time a car had a problem with a fluid or a part (for example, low oil or a leak).':
    'اكتب عن مرة حدثت فيها مشكلة في سائل أو قطعة في سيارة (مثلًا نقص الزيت أو تسريب).',

  /* ---- s16-management-file-dialogue ---- */
  'Match what a manager says with its purpose. One purpose is not needed. Write the letter. Column A Column B':
    'صِلْ ما يقوله المدير بالغرض منه. هناك غرض واحد زائد لا يُستخدم.',
  'Before you listen: what does a manager ask about when checking the stock? Press play. You can slow it down, loop a line, and turn the Arabic on.':
    'قبل الاستماع: عمّ يسأل المدير حين يفحص المخزون؟ اضغط تشغيل. يمكنك إبطاء الصوت، وتكرار سطر واحد، وإظهار الترجمة العربية.',
  'Answer the questions. (0. is done.)':
    'أجب عن الأسئلة. (البند 0 محلول.)',

  /* ---- s17-management-file-practice ---- */
  'Complete with much, many, some, or any.':
    'أكمل بـ much أو many أو some أو any.',
  'In pairs. One is the manager (Maher); one is the mechanic (Nabil). Use the model and cards.':
    'ثنائيًّا: أحدكما المدير (ماهر) والآخر الميكانيكي (نبيل). استعملا النموذج والبطاقتين.',
  'You are Maher. Write a short parts order for the supplier. Say what you need and how much / how many.':
    'أنت ماهر: اكتب طلب قطع قصيرًا إلى المورِّد. قل ما تحتاجه وكم الكمية والعدد.',

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
  'A customer wants the cheapest parts for everything, even the brakes. Should the advisor (a) sell only cheap parts, (b) explain the difference and advise honestly, or (c) refuse to serve the customer? Decide and explain. Use the frame.':
    'زبون يريد أرخص القطع لكل شيء، حتى الفرامل. هل ينبغي لمستشار الخدمة (أ) أن يبيعه القطع الرخيصة فقط، أم (ب) أن يشرح الفرق وينصحه بأمانة، أم (ج) أن يرفض خدمته؟ قرِّر واشرح، مستعينًا بالعبارات الجاهزة.',

  /* ---- s20-spiral-review ---- */
  'Complete the review. (0. is done.)':
    'أكمل المراجعة. (البند 0 محلول.)',

  /* ---- s21-can-do-glossary ---- */
  'Can-Do checklist — tick what you can do. Each row is checked against what you actually did on this unit\'s writing screen, so a tick you have not earned says so rather than being taken on trust.':
    'قائمة «أستطيع أن» — ضع علامة أمام ما تستطيع فعله. كل سطر يُقابَل بما فعلته بالفعل في صفحة الكتابة في هذه الوحدة، فالعلامة التي لم تستحقها تُقال لك بدل أن تُقبل على عِلّاتها.',
  'Unit 2 glossary (10 words)':
    'مفردات الوحدة الثانية (عشر كلمات)'
});
