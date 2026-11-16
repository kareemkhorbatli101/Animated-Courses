/* ============================================================
   Unit 6 — the glossary, and the source of the reinforcement deck.

   The ten words are the book's own Part 10 list, in its order. `en` is the meaning the book
   itself gives the word — taken from the matching exercise's own Column B, not rewritten —
   and `ar` is a gloss for a learner who cannot yet read it. `img` names the drawing that shows
   the thing, so the same picture names the word on the matching card, in the reading tooltip
   and in the flashcard deck; a word with no drawing yet has no `img` rather than a borrowed one.

   WHERE EACH MEANING COMES FROM is recorded in `from`. Seven of the ten are the book's Part 1
   Column B. The other three are in the Part 10 list but not in the matching exercise, so their
   meaning is taken from the book's own text where it defines them, and `from` says so. None is
   invented: the first draft of this file was built by a script that searched every screen and
   took the first label it matched, which paired `interval` with "to make sure the car stops
   safely" — a REASON from a different exercise. Reading one named card instead of every card
   is what fixed it.

   This is also what makes the reading text clickable: core.js links every term it finds in a
   passage, and a learner who stops at a word gets its meaning, its Arabic and its sound
   without leaving the page. It is also what puts the vocabulary cue cards into this unit's
   scenes — a word with no `img` here is never cued, because the player would fall back to a
   generic notes icon, which teaches nothing.

   THE ARABIC IS NOT NATIVE-REVIEWED. It should be read by an Arabic speaker before a
   classroom relies on it. It never translates a question, an option or an answer.
   ============================================================ */
EAM.glossary({
  'oil change': {
    en: 'removing old oil and adding new oil',
    ar: 'تغيير الزيت: إخراج الزيت القديم وإضافة زيت جديد',
    img: 'oil change', from: 'Part 1'
  },
  'air filter': {
    en: 'it cleans the air going into the engine',
    ar: 'فلتر الهواء: ينقّي الهواء الداخل إلى المحرك',
    img: 'air filter', from: 'Part 1'
  },
  'brake pads': {
    en: 'the parts that press to stop the car',
    ar: 'فحمات الفرامل: القطع التي تضغط لإيقاف السيارة',
    img: 'brake pads', from: 'Part 1'
  },
  'tyre rotation': {
    en: 'moving the tyres so they wear evenly',
    ar: 'تبديل مواضع الإطارات: نقلها لتتآكل بالتساوي',
    img: 'tyre rotation', from: 'Part 1'
  },
  'spark plugs': {
    en: 'small parts that light the fuel',
    ar: 'شمعات الإشعال: قطع صغيرة تُشعل الوقود',
    img: 'spark plugs', from: 'Part 1'
  },
  'service schedule': {
    en: 'a plan of when to do each service',
    ar: 'جدول الصيانة: خطة تبيّن موعد كل صيانة',
    img: 'service schedule', from: 'Part 1'
  },
  'interval': {
    en: 'the time or distance between services',
    ar: 'الفترة الفاصلة: الزمن أو المسافة بين صيانة وأخرى',
    img: 'interval', from: 'Part 1'
  },
  'mileage': {
    en: 'how far the car has driven',
    ar: 'عدد الكيلومترات المقطوعة: المسافة التي قطعتها السيارة',
    img: 'mileage', from: 'Part 3 — the listening defines it'
  },
  'coolant flush': {
    en: 'draining the old coolant out and filling the system with new coolant',
    ar: 'غسل دائرة التبريد: تصريف سائل التبريد القديم وتعبئة الدائرة بسائل جديد',
    img: 'coolant flush', from: 'Part 1 — the full-service list; the meaning is written here'
  },
  'maintenance': {
    en: 'the regular check and care a car needs',
    ar: 'الصيانة: الفحص والعناية المنتظمان اللذان تحتاجهما السيارة',
    img: 'maintenance', from: 'Part 1 — the book\'s own worked example for Service'
  }
});
