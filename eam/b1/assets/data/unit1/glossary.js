/* ============================================================
   Unit 1 — the glossary, and the source of the reinforcement deck.

   The ten words are the book's own Part 10 list, in its order. Each carries the meaning the
   book gives it, an Arabic gloss, and the name of the drawing that shows it — so the same
   picture names the word in the matching card, in the glossary and in the flashcard deck.
   Drawing a word twice is how two pictures of one thing drift apart; art.js records that
   defect against itself.

   `from` names the part where the word is first met, which is what lets the deck refuse to
   be a word's first encounter.

   THE ARABIC IS NOT NATIVE-REVIEWED. It is a scaffold for a learner who cannot yet read the
   English direction, and it should be read by an Arabic speaker before a classroom relies
   on it. It never translates a question, an option or an answer.
   ============================================================ */
EAM.glossary({
  'engine': {
    en: 'the machine that makes the car move',
    ar: 'المحرك: الآلة التي تُسيّر السيارة',
    img: 'engine', from: 'Warm Up'
  },
  'battery': {
    en: 'it stores electricity to start the car',
    ar: 'البطارية: تخزّن الكهرباء لتشغيل السيارة',
    img: 'battery', from: 'Warm Up'
  },
  'radiator': {
    en: 'it keeps the engine cool with water',
    ar: 'الرادييتر: يحافظ على برودة المحرك بالماء',
    img: 'radiator', from: 'Part 1'
  },
  'bonnet': {
    en: 'the cover over the engine at the front',
    ar: 'غطاء المحرك: الغطاء فوق المحرك في المقدمة',
    img: 'bonnet', from: 'Warm Up'
  },
  'boot': {
    en: 'the space at the back for bags',
    ar: 'الصندوق الخلفي: المساحة في الخلف للحقائب',
    img: 'boot', from: 'Warm Up'
  },
  'service bay': {
    en: 'the place in the workshop where a car is worked on',
    ar: 'حيّز الصيانة: المكان في الورشة حيث تُصان السيارة',
    img: 'service-bay', from: 'Part 1'
  },
  'job card': {
    en: 'the paper that lists the work to do on a car',
    ar: 'بطاقة العمل: الورقة التي تُدرج الأعمال المطلوبة للسيارة',
    img: 'job-card', from: 'Part 1'
  },
  'mechanic': {
    en: 'the person who repairs and services cars',
    ar: 'الميكانيكي: الشخص الذي يُصلح السيارات ويصونها',
    img: 'mechanic', from: 'Warm Up'
  },
  'service': {
    en: 'the regular check and care a car needs',
    ar: 'الصيانة الدورية: الفحص والعناية المنتظمة التي تحتاجها السيارة',
    img: 'service', from: 'Warm Up'
  },
  'workshop': {
    en: 'the room where mechanics work on cars',
    ar: 'الورشة: المكان الذي يعمل فيه الميكانيكيون على السيارات',
    img: 'workshop', from: 'Part 1'
  }
});
