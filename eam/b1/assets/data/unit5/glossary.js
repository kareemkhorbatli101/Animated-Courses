/* ============================================================
   Unit 5 — the glossary, and the source of the reinforcement deck.

   The ten words are the book's own Part 10 list, in its order. `en` is the meaning the book
   itself gives the word — taken from the matching exercise's own key where it gives one — and
   `ar` is a gloss for a learner who cannot yet read it. `img` names the drawing that shows the
   thing or the place; a word with no drawing yet has no `img` rather than a borrowed one.

   `invoice` is used by the book but never defined by it. Its `en` is written from the way the
   book uses it, and the coverage manifest records that this meaning is not the book's own
   words.

   THE ARABIC IS NOT NATIVE-REVIEWED. It should be read by an Arabic speaker before a
   classroom relies on it. It never translates a question, an option or an answer.
   ============================================================ */
EAM.glossary({
  'book in': {
    en: 'to write a car into the system when it arrives',
    ar: 'التسجيل: إدخال السيارة إلى النظام عند وصولها',
    img: 'book in', from: 'Warm Up'
  },
  'inspect': {
    en: 'to look at a car carefully to check it',
    ar: 'الفحص: النظر في السيارة بعناية للتأكد من حالتها',
    img: 'inspect', from: 'Warm Up'
  },
  'diagnose': {
    en: 'to find out what is wrong with a car',
    ar: 'التشخيص: معرفة العطل في السيارة',
    img: 'diagnose', from: 'Part 1'
  },
  'service': {
    en: 'to do the regular checks and work on a car',
    ar: 'الصيانة الدورية: الفحوص والأعمال المنتظمة للسيارة',
    img: 'service', from: 'Warm Up'
  },
  'road-test': {
    en: 'to drive a car to check it works well',
    ar: 'تجربة الطريق: قيادة السيارة للتأكد من أنها تعمل جيدًا',
    img: 'road-test', from: 'Part 1'
  },
  'quality check': {
    en: 'the final check before handover',
    ar: 'فحص الجودة: الفحص الأخير قبل التسليم',
    img: 'quality check', from: 'Part 1'
  },
  'hand over': {
    en: 'to give the car back to the customer',
    ar: 'التسليم: إعادة السيارة إلى الزبون',
    img: 'hand over', from: 'Warm Up'
  },
  'reception': {
    en: 'where the car is booked in and handed over',
    ar: 'الاستقبال: حيث تُسجَّل السيارة وتُسلَّم',
    img: 'reception', from: 'Warm Up'
  },
  'workshop': {
    en: 'where the car is serviced and repaired',
    ar: 'الورشة: حيث تُصان السيارة وتُصلَّح',
    img: 'workshop', from: 'Warm Up'
  },
  'invoice': {
    en: 'the bill that lists the work done and what it costs',
    ar: 'الفاتورة: ورقة تبيّن العمل المنجز وكلفته',
    img: 'invoice', from: 'Part 7'
  }
});
