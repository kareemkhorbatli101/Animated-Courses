/* ============================================================
   Unit 2 — the glossary, and the source of the reinforcement deck.

   The ten words are the book's own Part 10 list, in its order. `en` is the meaning the book
   itself gives the word — taken from the matching exercise's own key, not rewritten — and `ar`
   is a gloss for a learner who cannot yet read it. `img` names the drawing that shows the
   thing, so the same picture names the word on the matching card, in the reading tooltip and
   in the flashcard deck; a word with no drawing yet has no `img` rather than a borrowed one.

   This is also what makes the reading text clickable: core.js links every term it finds in a
   passage, and a learner who stops at a word gets its meaning, its Arabic and its sound
   without leaving the page.

   THE ARABIC IS NOT NATIVE-REVIEWED. It should be read by an Arabic speaker before a
   classroom relies on it. It never translates a question, an option or an answer.
   ============================================================ */
EAM.glossary({
  'battery': {
    en: 'it stores electricity to start the car',
    ar: 'البطارية: تخزّن الكهرباء لتشغيل السيارة',
    img: 'battery', from: 'Part 1'
  },
  'radiator': {
    en: 'it holds the coolant and lets heat escape',
    ar: 'الرادياتير: يحمل سائل التبريد ويسمح للحرارة بالخروج',
    img: 'radiator', from: 'Part 1'
  },
  'alternator': {
    en: 'it makes electricity while the engine runs',
    ar: 'المولّد (الدينامو): يولّد الكهرباء أثناء دوران المحرك',
    from: 'Part 1'
  },
  'belt': {
    en: 'a rubber loop that turns parts in the engine',
    ar: 'السير: حلقة مطاطية تُدير أجزاء في المحرك',
    from: 'Part 1'
  },
  'hose': {
    en: 'a rubber pipe that carries a fluid',
    ar: 'الخرطوم: أنبوب مطاطي ينقل سائلًا',
    from: 'Part 1'
  },
  'engine oil': {
    en: 'it keeps the engine parts moving smoothly',
    ar: 'زيت المحرك: يبقي أجزاء المحرك تتحرك بسلاسة',
    img: 'oil', from: 'Warm Up'
  },
  'coolant': {
    en: 'a liquid that keeps the engine from getting too hot',
    ar: 'سائل التبريد: يمنع المحرك من السخونة الزائدة',
    from: 'Warm Up'
  },
  'brake fluid': {
    en: 'it makes the brakes work',
    ar: 'سائل الفرامل: هو ما يجعل الفرامل تعمل',
    img: 'brakes', from: 'Warm Up'
  },
  'air filter': {
    en: 'it cleans the air going into the engine',
    ar: 'فلتر الهواء: ينظّف الهواء الداخل إلى المحرك',
    from: 'Part 3'
  },
  'dipstick': {
    en: 'a tool to check the oil level',
    ar: 'مقياس الزيت: أداة لفحص مستوى الزيت',
    from: 'Part 1'
  }
});
