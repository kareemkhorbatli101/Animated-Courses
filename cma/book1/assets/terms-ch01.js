/* terms-ch01.js — the term bank for Chapter 1.
 *
 * PROVENANCE RULE: every Arabic string below is copied from a TERM BRIDGE box in
 * source/chapter-01.txt. There are 54 of them and there will not be 55 until the
 * author writes one. _qa.html fails the build if any Arabic here is absent from
 * the source file.
 *
 * Terms the chapter defines in prose but never bridges are listed separately in
 * ENGLISH_ONLY. They are shown in English with their meaning and are marked as
 * awaiting the author's Arabic. They are NOT drilled as translation pairs.
 */
(function (root) {
  "use strict";

  /* ---- the 54 bridged terms, section by section, in the book's order ---- */
  var B = {
    "1.1": [
      ["financial statements", "القوائم المالية", "The standard-form reports that summarize a company's facts for outside readers."],
      ["general-purpose financial statements", "القوائم المالية ذات الغرض العام", "Reports for many readers at the same time, not for one special reader."],
      ["primary users", "المستخدمون الرئيسيون", "Existing and potential investors, lenders and other creditors."],
      ["relevance", "الملاءمة", "A fundamental quality: the information can make a difference to a decision."],
      ["faithful representation", "التمثيل الصادق", "A fundamental quality: complete, neutral and free from error."],
      ["materiality", "الأهمية النسبية", "Part of relevance: omitting or misstating it could change users' decisions."],
      ["recognize", "يعترف (الاعتراف)", "Include an item in the statements, with a name and an amount."],
      ["disclose", "يُفصح (الإفصاح)", "Explain the item in the notes to the statements."]
    ],
    "1.2": [
      ["asset", "أصل (أصول)", "A present right of an entity to an economic benefit."],
      ["liability", "التزام (التزامات)", "A present obligation of an entity to transfer an economic benefit."],
      ["equity", "حقوق الملكية", "The residual interest in the assets after the liabilities are deducted."],
      ["revenue", "إيراد (إيرادات)", "From the company's central, ongoing operations."],
      ["expense", "مصروف (مصروفات)", "From the company's central, ongoing operations."],
      ["gain", "مكسب (مكاسب)", "From a peripheral or incidental event."],
      ["loss", "خسارة", "From a peripheral or incidental event."],
      ["net income", "صافي الدخل", "What remains after expenses. Not the same as revenue."],
      ["retained earnings", "الأرباح المحتجزة", "Past net income the company kept instead of paying it out as dividends."],
      ["common stock", "الأسهم العادية", "Shares, held at par value. In U.S. English, stock means shares."],
      ["additional paid-in capital", "علاوة إصدار الأسهم (رأس المال الإضافي المدفوع)", "The amount owners paid above par value."],
      ["par value", "القيمة الاسمية", "The nominal value carried in the common stock account."],
      ["dividend", "توزيعات الأرباح", "A distribution to owners. It reduces retained earnings and is not an expense."],
      ["accounting equation", "المعادلة المحاسبية", "Assets = Liabilities + Equity. It always holds."]
    ],
    "1.3": [
      ["double-entry system", "نظام القيد المزدوج", "Each transaction affects at least two accounts; total debits always equal total credits."],
      ["debit", "مدين", "The left side of an account."],
      ["credit", "دائن", "The right side of an account."],
      ["normal balance", "الرصيد الطبيعي", "The side that increases an account."],
      ["journal entry", "قيد اليومية", "The record of one transaction, with equal debits and credits."],
      ["T-account", "حساب على شكل حرف T", "An account drawn with a left and a right side."],
      ["trial balance", "ميزان المراجعة", "A list of every account balance that checks total debits equal total credits."],
      ["contra account", "حساب مقابل (حساب عكسي)", "Reduces a related account, so it has the opposite normal balance."],
      ["accumulated depreciation", "مجمع الإهلاك (مجمع الاستهلاك / الاهتلاك)", "A contra-asset with a credit balance that reduces equipment."],
      ["allowance for credit losses", "مخصص الخسائر الائتمانية", "A contra-asset that reduces accounts receivable."],
      ["accounts receivable", "الذمم المدينة (المدينون)", "Amounts customers owe."],
      ["accounts payable", "الذمم الدائنة (الدائنون)", "Amounts the company owes suppliers."],
      ["inventory", "المخزون", "Goods held for sale. In a CMA question, inventory is always inventory."],
      ["cost of goods sold", "تكلفة البضاعة المباعة", "The cost of the goods sold, recorded with the sales revenue."],
      ["notes payable", "أوراق الدفع", "Borrowing evidenced by a note."]
    ],
    "1.4": [
      ["accrual basis", "أساس الاستحقاق", "Revenue when earned, expenses when incurred. The cash timing does not decide the period."],
      ["cash basis", "الأساس النقدي", "Records items only when cash is received or paid. Not acceptable under U.S. GAAP."],
      ["matching principle", "مبدأ مقابلة الإيرادات بالمصروفات", "Record expenses in the same period as the revenues they help to produce."],
      ["prepaid expense", "مصروف مدفوع مقدماً", "An asset: cash paid before the expense is incurred."],
      ["contract liability (unearned revenue)", "التزام العقد (إيراد مقبوض مقدماً)", "A liability: cash received before the revenue is earned."]
    ],
    "1.5": [
      ["U.S. GAAP", "المبادئ المحاسبية المقبولة عموماً في الولايات المتحدة", "Generally accepted accounting principles in the United States. The exam uses these."],
      ["IFRS", "المعايير الدولية لإعداد التقارير المالية", "International Financial Reporting Standards, issued by the IASB."],
      ["FASB", "مجلس معايير المحاسبة المالية", "A private, independent organization. It writes U.S. GAAP."],
      ["Accounting Standards Codification (ASC)", "تقنين معايير المحاسبة", "The single source of authoritative nongovernmental U.S. GAAP."],
      ["IASB", "مجلس معايير المحاسبة الدولية", "Issues IFRS, under the IFRS Foundation."],
      ["SEC", "هيئة الأوراق المالية والبورصات الأمريكية", "A U.S. government agency with legal authority over public-company reporting."],
      ["conceptual framework", "الإطار المفاهيمي", "The basic ideas behind the standards."]
    ],
    "1.6": [
      ["balance sheet", "الميزانية العمومية", "What the company has and owes, at a date."],
      ["statement of financial position", "قائمة المركز المالي", "The IFRS name for the balance sheet."],
      ["income statement", "قائمة الدخل", "How the company performed, for a period."],
      ["statement of changes in equity", "قائمة التغيرات في حقوق الملكية", "Why each equity account changed, for a period."],
      ["statement of cash flows", "قائمة التدفقات النقدية", "Where cash came from and where it went, for a period."]
    ]
  };

  var ALL = [];
  Object.keys(B).forEach(function (sec) {
    B[sec].forEach(function (r) {
      ALL.push({ en: r[0], ar: r[1], gloss: r[2], sec: sec, bridge: true });
    });
  });

  /* The 16-row chapter key-terms table, in the book's order. Every one is bridged. */
  var KEY = ["financial statements", "primary users", "asset", "liability", "equity", "revenue",
             "expense", "retained earnings", "dividend", "accounting equation", "debit", "credit",
             "accrual basis", "matching principle", "U.S. GAAP", "IFRS"];

  /* Terms the chapter defines in prose but does not bridge. NO ARABIC: the author
     has not supplied it, and inventing it is what broke the terminology lock on the
     first build. English and meaning only, flagged. */
  var ENGLISH_ONLY = [
    ["measure", "1.1", "Decide the amount of the item."],
    ["record", "1.1", "Enter the item in the accounts (journal and ledger)."],
    ["present", "1.1", "Show the item on the face of a statement."],
    ["predictive value", "1.1", "Part of relevance: it helps users predict the future."],
    ["confirmatory value", "1.1", "Part of relevance: it helps users check their past predictions."],
    ["comparability", "1.1", "An enhancing quality."],
    ["verifiability", "1.1", "An enhancing quality."],
    ["timeliness", "1.1", "An enhancing quality."],
    ["understandability", "1.1", "An enhancing quality."],
    ["cost constraint", "1.1", "The benefit of reporting information should be greater than its cost."],
    ["stewardship", "1.1", "How well the managers used the owners' resources."],
    ["comprehensive income", "1.2", "The total change in equity from sources other than owners."],
    ["investments by owners", "1.2", "Such as buying new shares. They increase equity."],
    ["distributions to owners", "1.2", "Such as dividends. They decrease equity."],
    ["contributed capital", "1.2", "Common stock at par value plus additional paid-in capital."],
    ["accrued expense", "1.4", "A liability: the expense is incurred before cash is paid."],
    ["accrued revenue", "1.4", "An asset: revenue is earned before cash is received or billed."],
    ["Accounting Standards Update (ASU)", "1.5", "What the FASB issues to amend the Codification."],
    ["PCAOB", "1.5", "Oversees the audits of public companies. It sets auditing standards."],
    ["gross profit", "1.7", "Revenue less cost of goods sold."],
    ["operating income", "1.7", "Gross profit less operating expenses, before interest."],
    ["working capital", "1.7", "Current assets less current liabilities."],
    ["current ratio", "1.7", "Current assets divided by current liabilities."]
  ].map(function (r) {
    return { en: r[0], ar: null, sec: r[1], gloss: r[2], bridge: false, awaitingArabic: true };
  });

  function find(en) {
    for (var i = 0; i < ALL.length; i++) if (ALL[i].en === en) return ALL[i];
    for (var j = 0; j < ENGLISH_ONLY.length; j++) if (ENGLISH_ONLY[j].en === en) return ENGLISH_ONLY[j];
    throw new Error("terms: no term '" + en + "'");
  }

  root.TERMS = {
    all: ALL,                       /* the 54 bridged, bilingual terms */
    englishOnly: ENGLISH_ONLY,      /* 23 the chapter defines but does not bridge */
    everything: ALL.concat(ENGLISH_ONLY),
    bridge: function (sec) { return ALL.filter(function (t) { return t.sec === sec; }); },
    keys: function () { return KEY.map(find); },
    find: find,
    count: ALL.length
  };
})(window);
