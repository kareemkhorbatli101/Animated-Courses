/* ============================================================
   Unit 5 — the Arabic layer.

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
  'Match the steps with their meanings. One meaning is not needed. Write the letter. Column A Column B':
    'صِلْ كل خطوة بمعناها. هناك معنى واحد زائد لا يُستخدم. في الكتاب تُكتب الحروف؛ هنا اسحب المعنى إلى الخطوة.',
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
  'Match each department with its job. One job is not needed. Write the letter. Column A Column B':
    'صِلْ كل قسم بعمله. هناك عمل واحد زائد لا يُستخدم.',

  /* ---- s03-pronunciation ---- */
  'Play each word, then put it in the column that matches where you hear the beat.':
    'شغِّل كل كلمة، ثم ضعها في العمود الذي يوافق موضع النبرة التي تسمعها.',

  /* ---- s04-check ---- */
  'Read and choose the correct answer.':
    'اقرأ ثم اختر الإجابة الصحيحة.',
  'Complete the sentences with the correct word.':
    'أكمل الجمل بالكلمة الصحيحة.',
  'Write two or three sentences about the service process. Use three words from this unit.':
    'اكتب جملتين أو ثلاثًا عن مسار الصيانة. استعمل ثلاث كلمات من هذه الوحدة.',

  /* ---- s05-grammar-notice ---- */
  'Read these pairs. In which sentence is the doer important? In which is the action important?':
    'اقرأ هذه الأزواج: في أي جملة يكون الفاعل هو المهم؟ وفي أيها يكون الفعل نفسه هو المهم؟',
  'The book\'s own box. Read it once now; the practice that follows comes straight out of it.':
    'صندوق الكتاب نفسه. اقرأه مرة الآن؛ فالتمارين التالية تخرج منه مباشرة.',

  /* ---- s06-grammar-practice ---- */
  'Make each sentence passive. (0. is done.)':
    'حوِّل كل جملة إلى المبني للمجهول. (البند 0 محلول.)',
  'Choose the correct form.':
    'اختر الصيغة الصحيحة.',

  /* ---- s07-grammar-review ---- */
  'Each sentence has one grammar mistake. Write the correct sentence.':
    'في كل جملة خطأ نحوي واحد. اكتب الجملة صحيحة.',
  'Describe three steps of the service process. Use the passive (is / are + past participle).':
    'صِفْ ثلاث خطوات من مسار الصيانة. استعمل المبني للمجهول (is / are + التصريف الثالث).',
  'Choose the correct answer.':
    'اختر الإجابة الصحيحة.',

  /* ---- s08-listening-1 ---- */
  'Before you listen: what is the first step when a car arrives? Press play. You can slow it down, loop a line, and turn the Arabic on.':
    'قبل الاستماع: ما أول خطوة حين تصل السيارة؟ اضغط تشغيل. يمكنك إبطاء الصوت، وتكرار سطر واحد، وإظهار الترجمة العربية.',
  'While you listen: write True, False, or Not Given. (0. is done.) Every statement is settled by the text: read it again rather than answering from what you already know.':
    'أثناء الاستماع: اكتب True أو False أو Not Given. (البند 0 محلول.) كل عبارة يحسمها النص: أعِد قراءته بدل الإجابة من معلوماتك السابقة.',

  /* ---- s09-listening-2 ---- */
  'Before you listen: what does a customer ask when the car is not ready? Press play. You can slow it down, loop a line, and turn the Arabic on.':
    'قبل الاستماع: ماذا يسأل الزبون حين لا تكون السيارة جاهزة؟ اضغط تشغيل. يمكنك إبطاء الصوت، وتكرار سطر واحد، وإظهار الترجمة العربية.',
  'While you listen: answer the questions. (0. is done.)':
    'أثناء الاستماع: أجب عن الأسئلة. (البند 0 محلول.)',

  /* ---- s10-listening-3 ---- */
  'Before you listen: how does a manager share out the day\'s cars? Press play. You can slow it down, loop a line, and turn the Arabic on.':
    'قبل الاستماع: كيف يوزّع المدير سيارات اليوم؟ اضغط تشغيل. يمكنك إبطاء الصوت، وتكرار سطر واحد، وإظهار الترجمة العربية.',
  'While you listen: match each item with what happens. One is not needed. (0. is done.) Column A Column B':
    'أثناء الاستماع: صِلْ كل بند بما يحدث له. هناك واحد زائد لا يُستخدم. (البند 0 محلول.)',

  /* ---- s11-speaking-model ---- */
  'Work with a partner. Ask and answer these questions. What are the main steps of the service process? Why is the order of the steps important? Why is no car handed over until it is checked?':
    'اعمل مع زميل: اسأل وأجب عن هذه الأسئلة.',
  'Work in pairs. Student A looks at Job card A; Student B looks at Job card B. Ask and answer to find three differences. Do not show your card.':
    'اعملا ثنائيًّا: الطالب (أ) ينظر إلى بطاقة العمل A، والطالب (ب) إلى بطاقة العمل B. تبادلا الأسئلة لإيجاد ثلاثة فروق. لا تُرِ زميلك بطاقتك.',

  /* ---- s12-role-play ---- */
  'Work in pairs. Read the model, then use the cards.':
    'اعملا ثنائيًّا: اقرآ النموذج ثم استعملا البطاقتين.',
  'Prepare a short talk (about one minute). Describe the service process from check-in to handover. Use the passive.':
    'حضِّر كلمة قصيرة (نحو دقيقة): صِفْ مسار الصيانة من استلام السيارة إلى تسليمها. استعمل المبني للمجهول.',

  /* ---- s13-reading-text ---- */
  'Before you read: why does a car not just go straight to a mechanic? Say your guess, then read and see. Press a paragraph button to hear it read.':
    'قبل القراءة: لماذا لا تذهب السيارة إلى الميكانيكي مباشرة؟ قل تخمينك، ثم اقرأ وتحقق. اضغط زر الفقرة لتسمعها مقروءة.',
  'Answer the multiple-choice questions. (0. is done.) Every answer is in the text above — look back at it rather than answering from what you already know.':
    'أجب عن أسئلة الاختيار من متعدد. (البند 0 محلول.) كل إجابة موجودة في النص أعلاه، فارجع إليه بدل الإجابة من معلوماتك السابقة.',

  /* ---- s14-reading-comprehension ---- */
  'Match each word from the text with its meaning. One meaning is not needed. Write the letter. Column A Column B':
    'صِلْ كل كلمة من النص بمعناها. هناك معنى واحد زائد لا يُستخدم.',
  'Before you read: how can a service centre do a very big order quickly? Say your guess, then read and see. Press a paragraph button to hear it read.':
    'قبل القراءة: كيف يمكن لمركز خدمة أن ينجز طلبًا كبيرًا جدًّا بسرعة؟ قل تخمينك، ثم اقرأ وتحقق. اضغط زر الفقرة لتسمعها مقروءة.',
  'Write True or False. (0. is done.) Every statement is settled by the text: read it again rather than answering from what you already know.':
    'اكتب True أو False. (البند 0 محلول.) كل عبارة يحسمها النص: أعِد قراءته بدل الإجابة من معلوماتك السابقة.',

  /* ---- s15-writing-model ---- */
  'Describe the service process from check-in to handover. Use the passive and sequencers.':
    'صِفْ مسار الصيانة من استلام السيارة إلى تسليمها. استعمل المبني للمجهول وكلمات الترتيب.',
  'Write why a clear service process is important. Give reasons.':
    'اكتب لماذا يُعدّ وضوح مسار الصيانة مهمًّا. اذكر الأسباب.',
  'Write a short note from Rana to a customer, explaining what will happen to their car.':
    'اكتب رسالة قصيرة من رنا إلى زبون تشرح فيها ما سيحدث لسيارته.',
  'Write about a process you know well (at work, at home, or in a shop). Describe the steps in order.':
    'اكتب عن عملية تعرفها جيدًا (في العمل أو البيت أو المتجر). صِفْ خطواتها بالترتيب.',

  /* ---- s16-management-file-dialogue ---- */
  'Match what a manager says with its purpose. One purpose is not needed. Write the letter. Column A Column B':
    'صِلْ ما يقوله المدير بالغرض منه. هناك غرض واحد زائد لا يُستخدم.',
  'Before you listen: what does a manager plan at the start of the day? Press play. You can slow it down, loop a line, and turn the Arabic on.':
    'قبل الاستماع: ماذا يخطط له المدير في بداية اليوم؟ اضغط تشغيل. يمكنك إبطاء الصوت، وتكرار سطر واحد، وإظهار الترجمة العربية.',
  'Answer the questions. (0. is done.)':
    'أجب عن الأسئلة. (البند 0 محلول.)',

  /* ---- s17-management-file-practice ---- */
  'Number the steps of the service process in order. (0. is done.)':
    'رتِّب خطوات مسار الصيانة بالترتيب الصحيح. (البند 0 محلول.)',
  'In pairs. One is the manager (Maher); one is the foreman (Nabil). Use the model and cards.':
    'ثنائيًّا: أحدكما المدير (ماهر) والآخر رئيس العمال (نبيل). استعملا النموذج والبطاقتين.',
  'You are Maher. Write the plan for the day for the team. Say the order of the cars and the rule for handover.':
    'أنت ماهر: اكتب خطة اليوم للفريق. قل ترتيب السيارات وقاعدة التسليم.',

  /* ---- s18-global-case-study ---- */
  'Answer in a few words each.':
    'أجب بكلمات قليلة عن كل سؤال.',
  'Match each word with its meaning. One meaning is not needed. Write the letter. Column A Column B':
    'صِلْ كل كلمة بمعناها. هناك معنى واحد زائد لا يُستخدم.',
  'Talk with a partner. Use the frames.':
    'تحدَّث مع زميل مستعينًا بالعبارات الجاهزة.',

  /* ---- s19-local-case-study ---- */
  'A big fleet job comes in, but the normal customers still need service. Should Maher (a) stop all normal work, (b) plan the fleet in small groups and keep some normal work going, or (c) refuse the fleet job? Decide and explain. Use the frame.':
    'وصل طلب كبير لأسطول سيارات، لكن الزبائن المعتادين ما زالوا بحاجة إلى الصيانة. هل ينبغي لماهر (أ) أن يوقف كل العمل المعتاد، أم (ب) أن يوزّع سيارات الأسطول على مجموعات صغيرة ويُبقي جزءًا من العمل المعتاد، أم (ج) أن يرفض طلب الأسطول؟ قرِّر واشرح، مستعينًا بالعبارات الجاهزة.',

  /* ---- s20-spiral-review ---- */
  'Complete the review. (0. is done.)':
    'أكمل المراجعة. (البند 0 محلول.)',

  /* ---- s21-can-do-glossary ---- */
  'Can-Do checklist — tick what you can do. Each row is checked against what you actually did on this unit\'s writing screen, so a tick you have not earned says so rather than being taken on trust.':
    'قائمة «أستطيع أن» — ضع علامة أمام ما تستطيع فعله. كل سطر يُقابَل بما فعلته بالفعل في صفحة الكتابة في هذه الوحدة، فالعلامة التي لم تستحقها تُقال لك بدل أن تُقبل على عِلّاتها.',
  'Unit 5 glossary (10 words)':
    'مفردات الوحدة الخامسة (عشر كلمات)'
});
