/* ============================================================
   Unit 10 — the Arabic layer.

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
  'Match each verb with its meaning. One meaning is not needed. Write the letter. Column A Column B':
    'صِلْ كل فعل بمعناه. هناك معنى واحد زائد لا يُستخدم. في الكتاب تُكتب الحروف؛ هنا اسحب المعنى إلى الفعل.',

  /* ---- s03-pronunciation ---- */
  'Play each word, then put it in the column that matches where you hear the beat.':
    'شغِّل كل كلمة، ثم ضعها في العمود الذي يوافق موضع النبرة التي تسمعها.',

  /* ---- s04-check ---- */
  'Read and choose the correct answer.':
    'اقرأ ثم اختر الإجابة الصحيحة.',
  'Complete the sentences with the correct word.':
    'أكمل الجمل بالكلمة الصحيحة.',
  'Write two or three sentences about looking after customers. Use three words from this unit.':
    'اكتب جملتين أو ثلاثاً عن العناية بالعملاء، واستخدم ثلاث كلمات من هذه الوحدة.',

  /* ---- s05-grammar-notice ---- */
  'Read these pairs. How does the sentence change when we report it?':
    'اقرأ هذه الأزواج. كيف تتغيّر الجملة عندما ننقلها على لسان غيرنا؟',
  'The book\'s own box. Read it once now; the practice that follows comes straight out of it.':
    'صندوق الكتاب نفسه. اقرأه مرة الآن؛ فالتمارين التالية تخرج منه مباشرة.',

  /* ---- s06-grammar-practice ---- */
  'Report each statement. (0. is done.)':
    'انقل كل جملة على لسان غيرك. (رقم ٠ محلول لك.)',
  'Report each question. (0. is done.)':
    'انقل كل سؤال على لسان غيرك. (رقم ٠ محلول لك.)',

  /* ---- s07-grammar-review ---- */
  'Each sentence has one grammar mistake. Write the correct sentence.':
    'في كل جملة خطأ نحوي واحد. اكتب الجملة صحيحة.',
  'Report two things: one statement someone said, and one question someone asked, this week.':
    'انقل أمرين من هذا الأسبوع: جملة قالها أحدهم، وسؤالاً سأله أحدهم.',
  'Choose the correct answer.':
    'اختر الإجابة الصحيحة.',

  /* ---- s08-listening-1 ---- */
  'Before you listen: why does a garage ask customers for feedback? Press play. You can slow it down, loop a line, and turn the Arabic on.':
    'قبل أن تسمع: لماذا تسأل الورشة عملاءها عن رأيهم؟ اضغط زر التشغيل. يمكنك إبطاء الصوت، وتكرار سطر واحد، وإظهار الترجمة العربية.',
  'While you listen: write True, False, or Not Given. (0. is done.) Every statement is settled by the text: read it again rather than answering from what you already know.':
    'أثناء الاستماع: اكتب True أو False أو Not Given. (البند 0 محلول.) كل عبارة يحسمها النص: أعِد قراءته بدل الإجابة من معلوماتك السابقة.',

  /* ---- s09-listening-2 ---- */
  'Before you listen: what kind of news does a carmaker send to a dealer? Press play. You can slow it down, loop a line, and turn the Arabic on.':
    'قبل أن تسمع: أيَّ أخبار تُرسل الشركة الصانعة إلى الوكيل؟ اضغط زر التشغيل. يمكنك إبطاء الصوت، وتكرار سطر واحد، وإظهار الترجمة العربية.',
  'While you listen: answer the questions. (0. is done.)':
    'أثناء الاستماع: أجب عن الأسئلة. (البند 0 محلول.)',

  /* ---- s10-listening-3 ---- */
  'Before you listen: what news does a manager share at a team meeting? Press play. You can slow it down, loop a line, and turn the Arabic on.':
    'قبل أن تسمع: أيَّ أخبار يُطلع المدير فريقه عليها في الاجتماع؟ اضغط زر التشغيل. يمكنك إبطاء الصوت، وتكرار سطر واحد، وإظهار الترجمة العربية.',
  'While you listen: match each topic with the news. One is not needed. (0. is done.) Column A Column B':
    'أثناء السماع: صِلْ كل موضوع بالخبر الذي يخصّه. هناك بند واحد زائد لا يُستخدم. (رقم ٠ محلول لك.)',

  /* ---- s11-speaking-model ---- */
  'Work with a partner. Ask and answer these questions. Why is customer feedback important? What kind of news does a manufacturer send a dealer? Why does a team need training every year?':
    'اعمل مع زميل. اسأل وأجب عن هذه الأسئلة: لماذا يُعدّ رأي العميل مهماً؟ أيَّ أخبار تُرسل الشركة الصانعة إلى الوكيل؟ ولماذا يحتاج الفريق إلى تدريب كل عام؟',
  'Work in pairs. Student A looks at Meeting notes A; Student B looks at Meeting notes B. Ask and answer to find three differences. Do not show your card.':
    'اعملا في ثنائيات. الطالب (أ) ينظر إلى محضر الاجتماع (أ)، والطالب (ب) ينظر إلى محضر الاجتماع (ب). اسألا وأجيبا لتجدا ثلاثة فروق. لا تُظهِر بطاقتك لزميلك.',

  /* ---- s12-role-play ---- */
  'Work in pairs. Read the model, then use the cards.':
    'اعملا ثنائيًّا: اقرآ النموذج ثم استعملا البطاقتين.',
  'Prepare a short talk (about one minute). Report the news from a team meeting: what the customers, the manufacturer, and the team said. Use reported speech.':
    'حضِّر كلمة قصيرة (نحو دقيقة واحدة). انقل أخبار اجتماع الفريق: ما قاله العملاء، وما قالته الشركة الصانعة، وما قاله الفريق. استخدم الكلام المنقول.',

  /* ---- s13-reading-text ---- */
  'Before you read: which three groups does a dealership service department talk to? Say your guess, then read and see. Press a paragraph button to hear it read.':
    'قبل أن تقرأ: أيَّ ثلاث جهات يتعامل معها قسم الخدمة في وكالة سيارات؟ قل توقّعك، ثم اقرأ وتحقّق. اضغط زر الفقرة لتسمعها مقروءة.',
  'Answer the multiple-choice questions. (0. is done.) Every answer is in the text above — look back at it rather than answering from what you already know.':
    'أجب عن أسئلة الاختيار من متعدد. (البند 0 محلول.) كل إجابة موجودة في النص أعلاه، فارجع إليه بدل الإجابة من معلوماتك السابقة.',

  /* ---- s14-reading-comprehension ---- */
  'Match each word from the text with its meaning. One meaning is not needed. Write the letter. Column A Column B':
    'صِلْ كل كلمة من النص بمعناها. هناك معنى واحد زائد لا يُستخدم.',
  'Before you read: what does it mean for a Syrian company to become an authorised dealer? Say your guess, then read and see. Press a paragraph button to hear it read.':
    'قبل أن تقرأ: ماذا يعني لشركة سورية أن تصبح وكيلاً معتمداً؟ قل توقّعك، ثم اقرأ وتحقّق. اضغط زر الفقرة لتسمعها مقروءة.',
  'Write True or False. (0. is done.) Every statement is settled by the text: read it again rather than answering from what you already know.':
    'اكتب True أو False. (البند 0 محلول.) كل عبارة يحسمها النص: أعِد قراءته بدل الإجابة من معلوماتك السابقة.',

  /* ---- s15-writing-model ---- */
  'Report a conversation between a customer and an advisor. Use reported speech (said, told, asked).':
    'انقل حواراً بين عميل ومستشار خدمة. استخدم الكلام المنقول بـ said و told و asked.',
  'Write why good communication is important in a service department. Give reasons.':
    'اكتب لماذا يُعدّ التواصل الجيد مهماً في قسم الخدمة، واذكر الأسباب.',
  'Write short notes from a team meeting. Report what the customers, the manufacturer, and the team said. Use reported speech.':
    'اكتب محضراً قصيراً لاجتماع فريق. انقل ما قاله العملاء والشركة الصانعة والفريق. استخدم الكلام المنقول.',
  'This is the last unit. Write about what you have learned in this course, and how it will help you at work.':
    'هذه هي الوحدة الأخيرة. اكتب عمّا تعلّمته في هذه الدورة، وكيف سيساعدك في عملك.',

  /* ---- s16-management-file-dialogue ---- */
  'Match what a manager says with its purpose. One purpose is not needed. Write the letter. Column A Column B':
    'صِلْ ما يقوله المدير بالغرض منه. هناك غرض واحد زائد لا يُستخدم.',
  'Before you listen: how does a manager prepare the news for a team meeting? Press play. You can slow it down, loop a line, and turn the Arabic on.':
    'قبل أن تسمع: كيف يُعِدّ المدير الأخبار لاجتماع الفريق؟ اضغط زر التشغيل. يمكنك إبطاء الصوت، وتكرار سطر واحد، وإظهار الترجمة العربية.',
  'Answer the questions. (0. is done.)':
    'أجب عن الأسئلة. (البند 0 محلول.)',

  /* ---- s17-management-file-practice ---- */
  'Complete with said, told, asked, or that.':
    'أكمل بـ said أو told أو asked أو that.',
  'In small groups. One is the manager (Maher); the others are the team. Use the model and cards.':
    'في مجموعات صغيرة: أحدكم المدير (ماهر)، والباقون أعضاء الفريق. استعينوا بالحوار النموذجي والبطاقات.',
  'You are Maher. Write the minutes (notes) of the service-team meeting. Report the news in reported speech, and list the actions.':
    'أنت ماهر. اكتب محضر اجتماع فريق الخدمة. انقل الأخبار بالكلام المنقول، واذكر الإجراءات المطلوبة.',

  /* ---- s18-global-case-study ---- */
  'Answer in a few words each.':
    'أجب بكلمات قليلة عن كل سؤال.',
  'Match each word with its meaning. One meaning is not needed. Write the letter. Column A Column B':
    'صِلْ كل كلمة بمعناها. هناك معنى واحد زائد لا يُستخدم.',
  'Talk with a partner. Use the frames.':
    'تحدَّث مع زميل مستعينًا بالعبارات الجاهزة.',

  /* ---- s19-local-case-study ---- */
  'A dealership must meet an international standard but also keep its own local strengths (like repairing parts). Should it (a) copy the manufacturer exactly and drop its local skills, (b) meet the standard and keep its honest local strengths, or (c) ignore the standard and only do things its own way? Decide and explain. Use the frame.':
    'على وكالة سيارات أن تلتزم بمعيار عالمي، وأن تحافظ في الوقت نفسه على نقاط قوّتها المحلية مثل تجديد القطع. هل ينبغي لها: (أ) أن تنسخ تعليمات الشركة الصانعة حرفياً وتتخلّى عن مهاراتها المحلية، (ب) أن تلتزم بالمعيار وتحافظ على نقاط قوّتها المحلية الصادقة، (ج) أن تتجاهل المعيار وتعمل بطريقتها وحدها؟ اختر وبرِّر اختيارك مستعيناً بالقالب.',

  /* ---- s20-spiral-review ---- */
  'Complete the review. (0. is done.)':
    'أكمل المراجعة. (البند 0 محلول.)',

  /* ---- s21-can-do-glossary ---- */
  'Can-Do checklist — tick what you can do. Each row is checked against what you actually did on this unit\'s writing screen, so a tick you have not earned says so rather than being taken on trust.':
    'قائمة «أستطيع أن» — ضع علامة أمام ما تستطيع فعله. كل سطر يُقابَل بما فعلته بالفعل في صفحة الكتابة في هذه الوحدة، فالعلامة التي لم تستحقها تُقال لك بدل أن تُقبل على عِلّاتها.',
  'Unit 10 glossary (10 words)':
    'مفردات الوحدة العاشرة (عشر كلمات)',
  'You have reached the end of the book. Read this, or press the button to hear it.':
    'لقد وصلت إلى نهاية الكتاب. اقرأ هذه الكلمة، أو اضغط الزر لتسمعها مقروءة.'
});
