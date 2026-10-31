/* terms-ch01.js — the bilingual term bank for Chapter 1.
 *
 * `bridge: true`  = the row appears in one of the chapter's eight TERM BRIDGE
 *                   boxes, or in the 16-row chapter key-terms table. These are
 *                   reproduced exactly as the book prints them, Arabic included.
 * `bridge: false` = a term the chapter defines in prose but does not put in a
 *                   bridge box. Carried so that terms.html can drill every term
 *                   in the chapter, not only the boxed ones.
 *
 * `sec`  the section that introduces it.  `key` true = in the chapter key-terms table.
 * No French column anywhere, by decision (see PLAN.md §12 Q1).
 */
(function (root) {
  "use strict";

  var T = [
    /* ---- 1.1 ---- */
    { en: "financial statements", ar: "القوائم المالية", sec: "1.1", bridge: true, key: true,
      gloss: "The standard-form reports that summarize a company's facts for outside readers." },
    { en: "general-purpose financial statements", ar: "القوائم المالية ذات الغرض العام", sec: "1.1", bridge: true,
      gloss: "Reports for many readers at the same time, not for one special reader." },
    { en: "primary users", ar: "المستخدمون الرئيسيون", sec: "1.1", bridge: true, key: true,
      gloss: "Existing and potential investors, lenders and other creditors." },
    { en: "relevance", ar: "الملاءمة", sec: "1.1", bridge: true,
      gloss: "A fundamental quality: the information can make a difference to a decision." },
    { en: "faithful representation", ar: "التمثيل الصادق", sec: "1.1", bridge: true,
      gloss: "A fundamental quality: complete, neutral and free from error." },
    { en: "materiality", ar: "الأهمية النسبية", sec: "1.1", bridge: true,
      gloss: "Part of relevance: an item is material if omitting or misstating it could change users' decisions." },
    { en: "recognize", ar: "يعترف (الاعتراف)", sec: "1.1", bridge: true,
      gloss: "Include an item in the statements, with a name and an amount." },
    { en: "disclose", ar: "يُفصح (الإفصاح)", sec: "1.1", bridge: true,
      gloss: "Explain the item in the notes to the statements." },
    { en: "measure", ar: "يقيس (القياس)", sec: "1.1", bridge: false,
      gloss: "Decide the amount of the item." },
    { en: "record", ar: "يسجل (التسجيل)", sec: "1.1", bridge: false,
      gloss: "Enter the item in the accounts — the journal and the ledger." },
    { en: "present", ar: "يعرض (العرض)", sec: "1.1", bridge: false,
      gloss: "Show the item on the face of a statement." },
    { en: "predictive value", ar: "القيمة التنبؤية", sec: "1.1", bridge: false,
      gloss: "Part of relevance: it helps users predict the future." },
    { en: "confirmatory value", ar: "القيمة التأكيدية", sec: "1.1", bridge: false,
      gloss: "Part of relevance: it helps users check their past predictions." },
    { en: "comparability", ar: "القابلية للمقارنة", sec: "1.1", bridge: false,
      gloss: "An enhancing quality: users can compare companies or periods." },
    { en: "verifiability", ar: "القابلية للتحقق", sec: "1.1", bridge: false,
      gloss: "An enhancing quality: independent observers could reach the same result." },
    { en: "timeliness", ar: "التوقيت المناسب", sec: "1.1", bridge: false,
      gloss: "An enhancing quality: the information arrives in time to affect the decision." },
    { en: "understandability", ar: "القابلية للفهم", sec: "1.1", bridge: false,
      gloss: "An enhancing quality: the information can be comprehended by users." },
    { en: "cost constraint", ar: "قيد التكلفة", sec: "1.1", bridge: false,
      gloss: "The benefit of reporting information should be greater than its cost." },
    { en: "stewardship", ar: "الإشراف على الموارد", sec: "1.1", bridge: false,
      gloss: "How well the managers used the owners' resources." },

    /* ---- 1.2 ---- */
    { en: "asset", ar: "أصل (أصول)", sec: "1.2", bridge: true, key: true,
      gloss: "A present right of an entity to an economic benefit." },
    { en: "liability", ar: "التزام (التزامات)", sec: "1.2", bridge: true, key: true,
      gloss: "A present obligation of an entity to transfer an economic benefit." },
    { en: "equity", ar: "حقوق الملكية", sec: "1.2", bridge: true, key: true,
      gloss: "The residual interest in the assets after the liabilities are deducted." },
    { en: "revenue", ar: "إيراد (إيرادات)", sec: "1.2", bridge: true, key: true,
      gloss: "Inflows from the company's central, ongoing operations." },
    { en: "expense", ar: "مصروف (مصروفات)", sec: "1.2", bridge: true, key: true,
      gloss: "Outflows from the company's central, ongoing operations." },
    { en: "gain", ar: "مكسب (مكاسب)", sec: "1.2", bridge: true,
      gloss: "An increase from a peripheral or incidental event." },
    { en: "loss", ar: "خسارة", sec: "1.2", bridge: true,
      gloss: "A decrease from a peripheral or incidental event." },
    { en: "net income", ar: "صافي الدخل", sec: "1.2", bridge: true,
      gloss: "What remains after expenses. Not the same as revenue." },
    { en: "retained earnings", ar: "الأرباح المحتجزة", sec: "1.2", bridge: true, key: true,
      gloss: "Past net income the company kept instead of paying it out as dividends." },
    { en: "common stock", ar: "الأسهم العادية", sec: "1.2", bridge: true,
      gloss: "Shares, held at par value. In U.S. English, stock means shares — not inventory." },
    { en: "additional paid-in capital", ar: "علاوة إصدار الأسهم (رأس المال الإضافي المدفوع)", sec: "1.2", bridge: true,
      gloss: "The amount owners paid above par value. IFRS calls it share premium." },
    { en: "par value", ar: "القيمة الاسمية", sec: "1.2", bridge: true,
      gloss: "The nominal value carried in the common stock account." },
    { en: "dividend", ar: "توزيعات الأرباح", sec: "1.2", bridge: true, key: true,
      gloss: "A distribution to owners. It reduces retained earnings and is never an expense." },
    { en: "accounting equation", ar: "المعادلة المحاسبية", sec: "1.2", bridge: true, key: true,
      gloss: "Assets = Liabilities + Equity. It always holds." },
    { en: "comprehensive income", ar: "الدخل الشامل", sec: "1.2", bridge: false,
      gloss: "The total change in equity from sources other than owners. Chapters 3 and 15." },
    { en: "investments by owners", ar: "استثمارات المالكين", sec: "1.2", bridge: false,
      gloss: "An element: owners putting resources in, which increases equity." },
    { en: "distributions to owners", ar: "التوزيعات على المالكين", sec: "1.2", bridge: false,
      gloss: "An element: resources going out to owners, which decreases equity." },
    { en: "contributed capital", ar: "رأس المال المدفوع", sec: "1.2", bridge: false,
      gloss: "What owners paid in: common stock at par plus additional paid-in capital." },

    /* ---- 1.3 ---- */
    { en: "double-entry system", ar: "نظام القيد المزدوج", sec: "1.3", bridge: true,
      gloss: "Every transaction affects at least two accounts, and total debits always equal total credits." },
    { en: "debit", ar: "مدين", sec: "1.3", bridge: true, key: true,
      gloss: "The left side of an account. It does not mean good, bad, or always increase." },
    { en: "credit", ar: "دائن", sec: "1.3", bridge: true, key: true,
      gloss: "The right side of an account. It does not mean good, bad, or always increase." },
    { en: "normal balance", ar: "الرصيد الطبيعي", sec: "1.3", bridge: true,
      gloss: "The side that increases an account." },
    { en: "journal entry", ar: "قيد اليومية", sec: "1.3", bridge: true,
      gloss: "The record of one transaction, with equal debits and credits." },
    { en: "T-account", ar: "حساب على شكل حرف T", sec: "1.3", bridge: true,
      gloss: "An account drawn with a left (debit) and a right (credit) side." },
    { en: "trial balance", ar: "ميزان المراجعة", sec: "1.3", bridge: true,
      gloss: "A list of every account balance that checks total debits equal total credits." },
    { en: "contra account", ar: "حساب مقابل (حساب عكسي)", sec: "1.3", bridge: true,
      gloss: "An account that reduces a related account, so it has the opposite normal balance." },
    { en: "accumulated depreciation", ar: "مجمع الإهلاك (مجمع الاستهلاك / الاهتلاك)", sec: "1.3", bridge: true,
      gloss: "A contra-asset with a credit balance that reduces equipment. In English, always say depreciation." },
    { en: "allowance for credit losses", ar: "مخصص الخسائر الائتمانية", sec: "1.3", bridge: true,
      gloss: "A contra-asset that reduces accounts receivable. Never 'reserve for bad debts'. Chapter 6." },
    { en: "accounts receivable", ar: "الذمم المدينة (المدينون)", sec: "1.3", bridge: true,
      gloss: "Amounts customers owe. IFRS calls them trade receivables." },
    { en: "accounts payable", ar: "الذمم الدائنة (الدائنون)", sec: "1.3", bridge: true,
      gloss: "Amounts the company owes suppliers." },
    { en: "inventory", ar: "المخزون", sec: "1.3", bridge: true,
      gloss: "Goods held for sale. In a CMA question, inventory is always inventory — never 'stock'." },
    { en: "cost of goods sold", ar: "تكلفة البضاعة المباعة", sec: "1.3", bridge: true,
      gloss: "The cost of the goods sold, recorded in the same period as the sales revenue." },
    { en: "notes payable", ar: "أوراق الدفع", sec: "1.3", bridge: true,
      gloss: "Borrowings evidenced by a note." },
    { en: "depreciation", ar: "الإهلاك (الاستهلاك / الاهتلاك)", sec: "1.3", bridge: false,
      gloss: "Spreading the cost of a long-lived asset over the years of use. Arabic has three regional words; English has one." },
    { en: "provision", ar: "مخصص (التزام)", sec: "1.3", bridge: false,
      gloss: "A liability. Arabic مخصص covers both this and an allowance — in English they are different things." },
    { en: "allowance", ar: "مخصص (مقابل أصل)", sec: "1.3", bridge: false,
      gloss: "A contra account that reduces an asset. Not the same as a provision." },

    /* ---- 1.4 ---- */
    { en: "accrual basis", ar: "أساس الاستحقاق", sec: "1.4", bridge: true, key: true,
      gloss: "Record revenue when earned and expenses when incurred. Cash timing does not decide the period." },
    { en: "cash basis", ar: "الأساس النقدي", sec: "1.4", bridge: true,
      gloss: "Record items only when cash is received or paid. Not acceptable under U.S. GAAP." },
    { en: "matching principle", ar: "مبدأ مقابلة الإيرادات بالمصروفات", sec: "1.4", bridge: true, key: true,
      gloss: "Record expenses in the same period as the revenues they help to produce." },
    { en: "prepaid expense", ar: "مصروف مدفوع مقدماً", sec: "1.4", bridge: true,
      gloss: "An asset: cash paid before the expense is incurred." },
    { en: "contract liability (unearned revenue)", ar: "التزام العقد (إيراد مقبوض مقدماً)", sec: "1.4", bridge: true,
      gloss: "A liability: cash received before the revenue is earned." },
    { en: "accrued expense", ar: "مصروف مستحق", sec: "1.4", bridge: false,
      gloss: "A liability: the expense is incurred before cash is paid." },
    { en: "accrued revenue", ar: "إيراد مستحق", sec: "1.4", bridge: false,
      gloss: "An asset: revenue is earned before cash is received or billed. Chapter 11." },

    /* ---- 1.5 ---- */
    { en: "U.S. GAAP", ar: "المبادئ المحاسبية المقبولة عموماً في الولايات المتحدة", sec: "1.5", bridge: true, key: true,
      gloss: "Generally accepted accounting principles in the United States. The CMA exam uses these." },
    { en: "IFRS", ar: "المعايير الدولية لإعداد التقارير المالية", sec: "1.5", bridge: true, key: true,
      gloss: "International Financial Reporting Standards, issued by the IASB." },
    { en: "FASB", ar: "مجلس معايير المحاسبة المالية", sec: "1.5", bridge: true,
      gloss: "The Financial Accounting Standards Board. A private, independent body: it writes U.S. GAAP." },
    { en: "Accounting Standards Codification (ASC)", ar: "تقنين معايير المحاسبة", sec: "1.5", bridge: true,
      gloss: "The single source of authoritative nongovernmental U.S. GAAP, organized by topic number." },
    { en: "IASB", ar: "مجلس معايير المحاسبة الدولية", sec: "1.5", bridge: true,
      gloss: "The International Accounting Standards Board. It writes IFRS, under the IFRS Foundation." },
    { en: "SEC", ar: "هيئة الأوراق المالية والبورصات الأمريكية", sec: "1.5", bridge: true,
      gloss: "A U.S. government agency with legal authority over public-company reporting. It recognizes the FASB." },
    { en: "conceptual framework", ar: "الإطار المفاهيمي", sec: "1.5", bridge: true,
      gloss: "The basic ideas behind the standards: the users, the elements, the qualities of useful information." },
    { en: "Accounting Standards Update (ASU)", ar: "تحديث معايير المحاسبة", sec: "1.5", bridge: false,
      gloss: "What the FASB issues to amend the Codification." },
    { en: "PCAOB", ar: "مجلس مراقبة حسابات الشركات العامة", sec: "1.5", bridge: false,
      gloss: "Oversees the audits of public companies. It sets AUDITING standards, not accounting standards." },

    /* ---- 1.6 ---- */
    { en: "balance sheet", ar: "الميزانية العمومية", sec: "1.6", bridge: true,
      gloss: "What the company has and owes, at a date. IFRS: statement of financial position." },
    { en: "statement of financial position", ar: "قائمة المركز المالي", sec: "1.6", bridge: true,
      gloss: "The IFRS name for the balance sheet." },
    { en: "income statement", ar: "قائمة الدخل", sec: "1.6", bridge: true,
      gloss: "How the company performed, for a period. IFRS: statement of profit or loss." },
    { en: "statement of changes in equity", ar: "قائمة التغيرات في حقوق الملكية", sec: "1.6", bridge: true,
      gloss: "Why each equity account changed, for a period." },
    { en: "statement of cash flows", ar: "قائمة التدفقات النقدية", sec: "1.6", bridge: true,
      gloss: "Where cash came from and where it went, for a period." },
    { en: "gross profit", ar: "الربح الإجمالي", sec: "1.7", bridge: false,
      gloss: "Revenue less cost of goods sold." },
    { en: "operating income", ar: "الدخل التشغيلي", sec: "1.7", bridge: false,
      gloss: "Gross profit less operating expenses, before interest." },
    { en: "working capital", ar: "رأس المال العامل", sec: "1.7", bridge: false,
      gloss: "Current assets less current liabilities." },
    { en: "current ratio", ar: "النسبة الجارية (نسبة التداول)", sec: "1.7", bridge: false,
      gloss: "Current assets divided by current liabilities." }
  ];

  /* The eight TERM BRIDGE boxes, in the order the book prints them, so each
     section page can render its own box exactly. */
  var bridges = {
    "1.1": ["financial statements", "general-purpose financial statements", "primary users", "relevance",
            "faithful representation", "materiality", "recognize", "disclose"],
    "1.2": ["asset", "liability", "equity", "revenue", "expense", "gain", "loss", "net income",
            "retained earnings", "common stock", "additional paid-in capital", "par value", "dividend",
            "accounting equation"],
    "1.3": ["double-entry system", "debit", "credit", "normal balance", "journal entry", "T-account",
            "trial balance", "contra account", "accumulated depreciation", "allowance for credit losses",
            "accounts receivable", "accounts payable", "inventory", "cost of goods sold", "notes payable"],
    "1.4": ["accrual basis", "cash basis", "matching principle", "prepaid expense",
            "contract liability (unearned revenue)"],
    "1.5": ["U.S. GAAP", "IFRS", "FASB", "Accounting Standards Codification (ASC)", "IASB", "SEC",
            "conceptual framework"],
    "1.6": ["balance sheet", "statement of financial position", "income statement",
            "statement of changes in equity", "statement of cash flows"]
  };

  /* The 16-row chapter key-terms table, in the book's order. */
  var keyTerms = ["financial statements", "primary users", "asset", "liability", "equity", "revenue",
                  "expense", "retained earnings", "dividend", "accounting equation", "debit", "credit",
                  "accrual basis", "matching principle", "U.S. GAAP", "IFRS"];

  function find(en) {
    for (var i = 0; i < T.length; i++) if (T[i].en === en) return T[i];
    throw new Error("terms: no term '" + en + "'");
  }
  function bridge(sec) { return bridges[sec].map(find); }
  function keys() { return keyTerms.map(find); }
  function bySection(sec) { return T.filter(function (t) { return t.sec === sec; }); }

  root.TERMS = {
    all: T, bridges: bridges, keyTerms: keyTerms,
    find: find, bridge: bridge, keys: keys, bySection: bySection,
    count: T.length
  };
})(window);
