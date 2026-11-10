/* ============================================================
   Unit 1 — glossary.

   Every definition is the book's own, from the Part 1 matching exercise,
   the Part 5 Reading B matching exercise, or the Part 11 study terms.
   Nothing here is written by the site: a gloss that paraphrases the
   author is a gloss the learner cannot check against the page, and
   tools/check-terms.cjs fails on a definition that does not come from
   the unit showing it.

   `ar` is newly written, because the book has no Arabic.
   ============================================================ */
EAFM.glossary({
  'finance officer': {
    en: 'a person who manages money and accounts',
    ar: 'مسؤول مالي: شخص يدير المال والحسابات',
    img: 'finance-officer', from: 'Part 1'
  },
  'ledger': {
    en: 'the main book or file that holds all the accounts',
    ar: 'دفتر الأستاذ: الدفتر الرئيس الذي يضم كل الحسابات',
    img: 'ledger', from: 'Part 1'
  },
  'transaction': {
    en: 'a single piece of financial business, such as a payment',
    ar: 'عملية مالية واحدة، مثل دفعة',
    img: 'transaction', from: 'Part 1'
  },
  'account': {
    en: 'a record of the money for one purpose or category',
    ar: 'حساب: سجل للمال لغرض أو فئة واحدة',
    img: 'account', from: 'Part 1'
  },
  'bookkeeping': {
    en: 'the daily work of writing down every transaction',
    ar: 'مسك الدفاتر: العمل اليومي في تدوين كل عملية',
    img: 'bookkeeping', from: 'Part 1'
  },
  'reconcile': {
    en: 'to check that two records of money agree',
    ar: 'يطابق: يتحقق من تطابق سجلين للمال',
    img: 'reconcile', from: 'Part 1'
  },
  'cash': {
    en: 'money in the form of notes and coins',
    ar: 'نقد: مال على شكل أوراق وقطع معدنية',
    img: 'cash', from: 'Part 1'
  },
  'balance': {
    en: 'the amount of money in an account at one moment',
    ar: 'الرصيد: مقدار المال في الحساب في لحظة واحدة',
    img: 'balance', from: 'Part 5'
  },
  'entry': {
    en: 'one line written in the accounts',
    ar: 'قيد: سطر واحد مكتوب في الحسابات',
    img: 'entry', from: 'Part 1'
  },

  /* Part 11 study terms — the bridge to the CMA */
  'financial accounting': {
    en: 'the side of accounting that records the past for people outside the team',
    ar: 'المحاسبة المالية: الجانب الذي يسجل الماضي لمن هم خارج الفريق',
    img: 'ledger', from: 'Part 11'
  },
  'management accounting': {
    en: 'the side of accounting that helps managers plan and decide',
    ar: 'المحاسبة الإدارية: الجانب الذي يساعد المديرين على التخطيط والقرار',
    img: 'budget', from: 'Part 11'
  },
  'users of information': {
    en: 'the people who read financial reports, such as donors, managers, and auditors',
    ar: 'مستخدمو المعلومات: من يقرأون التقارير المالية، كالمانحين والمديرين والمدققين',
    img: 'donor', from: 'Part 11'
  },
  'the accounting cycle': {
    en: 'the regular steps that turn transactions into reports',
    ar: 'الدورة المحاسبية: الخطوات المنتظمة التي تحول العمليات إلى تقارير',
    img: 'posting', from: 'Part 11'
  },
  'financial position': {
    en: 'a picture of what an organisation owns and owes at one moment',
    ar: 'المركز المالي: صورة لما تملكه المنظمة وما عليها في لحظة واحدة',
    img: 'statement', from: 'Part 11'
  }
});
