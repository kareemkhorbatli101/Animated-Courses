/* ============================================================
   Unit 4 — the glossary, and the source of the reinforcement deck.

   The ten words are the book's own Part 10 list, in its order. `en` is the meaning the book
   itself gives the word — taken from the matching exercise's own key where it gives one — and
   `ar` is a gloss for a learner who cannot yet read it. `img` names the drawing that shows the
   thing; a word with no drawing yet has no `img` rather than a borrowed one.

   Two of the ten — `meter` and `millimetre` — are used by the book but never defined by it.
   Their `en` is written from the way the book uses them, and the coverage manifest records
   that these two meanings are not the book's own words.

   THE ARABIC IS NOT NATIVE-REVIEWED. It should be read by an Arabic speaker before a
   classroom relies on it. It never translates a question, an option or an answer.
   ============================================================ */
EAM.glossary({
  'gauge': {
    en: 'a tool that shows a measurement',
    ar: 'المقياس: أداة تُظهر قيمة قياس',
    img: 'diagnostic-machine', from: 'Warm Up'
  },
  'tyre pressure': {
    en: 'how hard the air pushes inside a tyre',
    ar: 'ضغط الإطار: مقدار دفع الهواء داخل الإطار',
    img: 'tyre', from: 'Warm Up'
  },
  'tread depth': {
    en: 'how deep a tyre’s grooves are',
    ar: 'عمق المداس: عمق أخاديد الإطار',
    img: 'tyre', from: 'Part 1'
  },
  'voltage': {
    en: 'the amount of electric power, in volts',
    ar: 'الجهد الكهربائي: مقدار الطاقة الكهربائية بالفولت',
    img: 'battery', from: 'Part 1'
  },
  'temperature': {
    en: 'how hot or cold something is',
    ar: 'الحرارة: مدى سخونة الشيء أو برودته',
    from: 'Part 1'
  },
  'tolerance': {
    en: 'the correct level, or allowed range',
    ar: 'الحد المسموح: المستوى الصحيح أو المدى المقبول',
    from: 'Part 1'
  },
  'reading': {
    en: 'the number a tool or meter shows',
    ar: 'القراءة: الرقم الذي تُظهره الأداة أو العدّاد',
    from: 'Warm Up'
  },
  'worn': {
    en: 'old and used, with less tread',
    ar: 'متآكل: قديم ومستعمل، وقد نقص مداسه',
    img: 'tyre', from: 'Part 2'
  },
  'meter': {
    en: 'the instrument that takes a reading and shows it as a number',
    ar: 'العدّاد: الجهاز الذي يأخذ القياس ويُظهره رقمًا',
    from: 'Part 1'
  },
  'millimetre': {
    en: 'the unit tread depth is measured in — one thousandth of a metre',
    ar: 'الميليمتر: وحدة قياس عمق المداس، وهي جزء من ألف من المتر',
    from: 'Part 1'
  }
});
