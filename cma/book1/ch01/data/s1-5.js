/* Section 1.5 — Who writes the rules? U.S. GAAP and IFRS.
   Covers FASB, the ASC as the single authoritative source, topic numbers, the
   ASU, the SEC, the PCAOB distinction, the IASB and IFRS Foundation, MENA
   adoption and Cedar Retail, F01-08, the conceptual framework, the six-pair IFRS
   name table, the Exam Trap on four bodies, the 7-row Term Bridge, SC5-1, SC5-2. */
(function () {
  var L = window.LEDGER;

  window.PAGE = {
    id: "s1-5", kind: "section", n: "1.5", up: "../",
    title: "Who writes the rules? U.S. GAAP and IFRS",
    crumb: "Section 1.5",
    question: "Which body writes the rules the exam tests, which body merely has legal authority, and which one does not write accounting rules at all?",
    los: ["Background"],
    blocks: [

    { type: "prose", html:
      "<p>In the United States, the accounting rules are called <span class=\"defn\">U.S. GAAP</span> (generally " +
      "accepted accounting principles). The <span class=\"defn\">FASB</span> (Financial Accounting Standards Board) " +
      "writes them. The FASB is a <em class=\"sig\">private, independent organization</em>. It keeps all U.S. GAAP in " +
      "one place: the <span class=\"defn\">Accounting Standards Codification</span> (ASC). The ASC is " +
      "<em class=\"sig\">the single source of authoritative nongovernmental U.S. GAAP</em>. It is organized by topic " +
      "numbers. For example, <strong>ASC 606</strong> covers revenue and <strong>ASC 842</strong> covers leases. " +
      "When the FASB changes a rule, it issues an <span class=\"defn\">Accounting Standards Update</span> (ASU), " +
      "which amends the Codification.</p>" +
      "<p>The <span class=\"defn\">SEC</span> (Securities and Exchange Commission) is a " +
      "<em class=\"sig\">U.S. government agency</em>. It has <em class=\"sig\">legal authority</em> over the " +
      "financial reporting of public companies, and it recognizes the FASB as the standard setter. For companies " +
      "that report to the SEC, SEC rules are also part of authoritative GAAP. " +
      "<strong>Do not confuse these bodies with the PCAOB</strong>, which oversees the audits of public companies. " +
      "The PCAOB sets <em class=\"sig\">auditing</em> standards, not accounting standards.</p>" +
      "<p>Outside the United States, many countries use <span class=\"defn\">IFRS</span> (International Financial " +
      "Reporting Standards). The <span class=\"defn\">IASB</span> (International Accounting Standards Board) issues " +
      "them, under the IFRS Foundation. Many countries in the Middle East and North Africa — for example Jordan " +
      "and the United Arab Emirates — require IFRS for listed companies. In this book, " +
      L.company.cedar + " is our IFRS company.</p>" },

    { type: "imagedrop", id: "x01", badge: "01",
      title: "Figure F01-08 · four bodies, four jobs",
      tag: "Drag onto the map",
      instruction: "This is the single most reliable question in the section. Learn it as four jobs, not four names.",
      figure: "orgmap",
      prompt: "Drag each body onto the job it actually does.",
      items: [
        { name: "SEC", zone: "sec", trap: "four-bodies",
          why: "A U.S. GOVERNMENT agency with legal authority over public-company reporting. It recognizes the FASB as the standard setter rather than writing the standards itself." },
        { name: "FASB", zone: "fasb", trap: "four-bodies",
          why: "A private, independent organization. It WRITES U.S. GAAP and keeps it in the Accounting Standards Codification." },
        { name: "Accounting Standards Codification (ASC)", zone: "asc",
          why: "Not a body but the single source of authoritative nongovernmental U.S. GAAP, organized by topic number — ASC 606 revenue, ASC 842 leases." },
        { name: "PCAOB", zone: "pcaob", trap: "four-bodies",
          why: "It oversees the audits of public companies and sets AUDITING standards. It does not write accounting standards." },
        { name: "IASB", zone: "iasb", trap: "four-bodies",
          why: "The International Accounting Standards Board writes IFRS, under the IFRS Foundation." },
        { name: "IFRS Foundation", zone: "foundation",
          why: "The oversight body above the IASB." }
      ],
      distractors: [
        { name: "AICPA",
          why: "A professional body for U.S. certified public accountants. It does not write authoritative U.S. GAAP — the FASB does." },
        { name: "ICMA",
          why: "The Institute of Certified Management Accountants, which sets the CMA exam. It does not write accounting standards." }
      ],
      traps: ["four-bodies"] },

    { type: "match", id: "x02", badge: "02",
      title: "The parts of U.S. GAAP",
      tag: "Matching",
      instruction: "The exam uses these exact names. One word — auditing instead of accounting — changes the answer.",
      hint: "Drag the name into the box beside its description. Two names belong to no description here.",
      dropHint: "which one is this?",
      speakPrompt: false,
      pairs: [
        { a: "The single source of authoritative nongovernmental U.S. GAAP.", b: "The Accounting Standards Codification (ASC)",
          why: "All U.S. GAAP lives in one place, organized by topic number." },
        { a: "What the FASB issues to amend the Codification.", b: "An Accounting Standards Update (ASU)",
          why: "An ASU changes the ASC; it is not a separate body of rules sitting beside it." },
        { a: "The ASC topic that covers revenue.", b: "ASC 606",
          why: "Chapter 11 of this book is built on it." },
        { a: "The ASC topic that covers leases.", b: "ASC 842",
          why: "Chapter 14 of this book is built on it." },
        { a: "The basic ideas behind the standards: the users, the elements, the qualities of useful information.", b: "The conceptual framework",
          why: "You studied the U.S. version in sections 1.1 and 1.2." }
      ],
      distractors: [
        { b: "ASC 842-10-15", why: "A real-looking subsection reference, but the chapter names only ASC 606 and ASC 842." },
        { b: "The audit report", why: "An auditor's product, not part of the accounting standards." }
      ] },

    { type: "classify", id: "x03", badge: "03",
      title: "Accounting standards, auditing standards, or legal authority?",
      tag: "Drag and drop",
      instruction: "The PCAOB is the trap. It is a real, important body — it simply does not write accounting rules.",
      prompt: "Sort each body by what it actually produces or holds.",
      categories: [
        { id: "writes-gaap", label: "Writes U.S. GAAP" },
        { id: "writes-ifrs", label: "Writes IFRS" },
        { id: "auditing", label: "Sets AUDITING standards" },
        { id: "legal", label: "Holds legal authority over public-company reporting" }
      ],
      items: [
        { name: "FASB", cat: "writes-gaap", trap: "four-bodies",
          why: "The FASB writes U.S. GAAP and keeps it in the ASC." },
        { name: "IASB", cat: "writes-ifrs", trap: "four-bodies",
          why: "The IASB writes IFRS only — never U.S. GAAP." },
        { name: "PCAOB", cat: "auditing", trap: "four-bodies",
          why: "It oversees the audits of public companies and sets auditing standards, not accounting standards." },
        { name: "SEC", cat: "legal", trap: "four-bodies",
          why: "A U.S. government agency with legal authority. It recognizes the FASB as the standard setter." }
      ],
      distractors: [
        { name: "IFRS Foundation",
          why: "The oversight body above the IASB. It does not itself write the standards." },
        { name: "ICMA",
          why: "It sets the CMA exam. It has no standard-setting role at all." }
      ],
      traps: ["four-bodies"] },

    { type: "mcq", id: "x04", badge: "04",
      title: "Who requires IFRS?",
      tag: "Comprehension",
      prompt: "Orontes Foods is based in Amman, Jordan, but its shares are listed in the United States. Which framework does it report under, and why?",
      options: [
        { text: "U.S. GAAP, because it is listed on a U.S. stock exchange and reports to the SEC.", correct: true,
          why: "Orontes is the book's U.S. GAAP company for exactly this reason. Its location in Jordan does not decide its framework." },
        { text: "IFRS, because Jordan requires IFRS for listed companies.",
          why: "Jordan does require IFRS for companies listed there — but Orontes's shares are listed in the United States. " + L.company.cedar + " is the book's IFRS company." },
        { text: "Both at once, because it operates in two countries.",
          why: "A company prepares one set of general-purpose statements under one framework. Orontes uses U.S. GAAP." },
        { text: "Neither: a company that operates across borders chooses its own rules.",
          why: "Reporting frameworks are not optional. The regulator of the market where the shares are listed decides." }
      ] },

    { type: "prose", html:
      "<p>The CMA exam tests <em class=\"sig\">U.S. GAAP</em>. However, Section A also asks about the main " +
      "differences between U.S. GAAP and IFRS (Chapter 17). If you learned accounting under IFRS, this is good news: " +
      "most concepts are the same. Every chapter has an IFRS Contrast box, so Chapter 17 will be revision for you.</p>" +
      "<p>Both systems rest on a <span class=\"defn\">conceptual framework</span>: the basic ideas behind the " +
      "standards, such as the users, the elements and the qualities of useful information. You studied the U.S. " +
      "version in sections 1.1 and 1.2.</p>" },

    { type: "box", kind: "ifrs", title: "U.S. GAAP names and IFRS names", html:
      "<table class=\"data-table\"><thead><tr><th>■ U.S. GAAP (used on the exam)</th><th>● IFRS</th></tr></thead><tbody>" +
      "<tr><td class=\"row-head\">balance sheet</td><td>statement of financial position</td></tr>" +
      "<tr><td class=\"row-head\">income statement</td><td>statement of profit or loss</td></tr>" +
      "<tr><td class=\"row-head\">common stock</td><td>share capital (ordinary shares)</td></tr>" +
      "<tr><td class=\"row-head\">additional paid-in capital</td><td>share premium</td></tr>" +
      "<tr><td class=\"row-head\">accounts receivable</td><td>trade receivables</td></tr>" +
      "<tr><td class=\"row-head\">net income</td><td>profit</td></tr>" +
      "</tbody></table>" },

    { type: "match", id: "x05", badge: "05",
      title: "All six name pairs",
      tag: "IFRS contrast",
      instruction: "An IFRS-trained reader knows every one of these items already. Only the English label is new.",
      hint: "Drag the U.S. GAAP term into the box beside the IFRS term that means the same thing. Two U.S. terms have no partner here.",
      dropHint: "the U.S. GAAP name is…",
      speakPrompt: false,
      pairs: [
        { a: "statement of financial position", b: "balance sheet", why: "The exam says balance sheet." },
        { a: "statement of profit or loss", b: "income statement", why: "The exam says income statement." },
        { a: "share capital (ordinary shares)", b: "common stock", why: "U.S. GAAP holds only the par value in common stock." },
        { a: "share premium", b: "additional paid-in capital", why: "Both mean the amount received for shares above par value." },
        { a: "trade receivables", b: "accounts receivable", why: "Same asset: what customers owe." },
        { a: "profit", b: "net income", why: "Same measure. Note that IFRS also uses <em>income</em> to cover revenue and gains together." }
      ],
      distractors: [
        { b: "trial balance", why: "Both frameworks use the same name for it, so it is not one of the contrast pairs." },
        { b: "cost of goods sold", why: "Not in this table. IFRS often says cost of sales, but the chapter does not list it among the six." }
      ] },

    { type: "box", kind: "trap", title: "Four bodies, four jobs", html:
      "<ul>" +
      "<li><strong>FASB</strong>: writes U.S. GAAP (the ASC).</li>" +
      "<li><strong>SEC</strong>: U.S. government agency with legal authority over public company reporting.</li>" +
      "<li><strong>PCAOB</strong>: sets auditing standards for audits of public companies.</li>" +
      "<li><strong>IASB</strong>: writes IFRS.</li>" +
      "</ul>" },

    { type: "mcq", id: "x06", badge: "06",
      title: "Exam trap · authority versus standard setting",
      tag: "Exam trap",
      prompt: "Which statement is TRUE?",
      options: [
        { text: "The SEC has legal authority over public company reporting and recognizes the FASB as the standard setter.", correct: true,
          why: "The SEC has the legal authority; the FASB sets the standards; the ASC holds U.S. GAAP." },
        { text: "The PCAOB writes U.S. GAAP for public companies.",
          why: "The PCAOB sets auditing standards." },
        { text: "The IASB writes U.S. GAAP for companies that also report under IFRS.",
          why: "The IASB writes IFRS only." },
        { text: "The ASC contains IFRS for U.S. companies.",
          why: "The ASC is U.S. GAAP. IFRS is a separate set of standards." }
      ],
      traps: ["four-bodies"] },

    { type: "bridge", title: "Key words in this section", rows: window.TERMS.bridge("1.5") },

    { type: "match", id: "x07", badge: "07",
      title: "English ↔ Arabic · the terms of this section",
      tag: "Term bridge",
      instruction: "The body names stay in English on the exam, but their Arabic descriptions are worth knowing.",
      hint: "Drag the Arabic term into the box beside its English exam term. Two Arabic tiles belong to terms from other sections.",
      dropHint: "drop the Arabic term here",
      pairs: window.TERMS.bridge("1.5").map(function (t) { return { a: t.en, b: t.ar, why: t.gloss }; }),
      distractors: [
        { b: "الميزانية العمومية",
          why: "This is the balance sheet — section 1.6, not 1.5." },
        { b: "مبدأ مقابلة الإيرادات بالمصروفات",
          why: "This is the matching principle — section 1.4, not 1.5." }
      ] },

    { type: "checkgroup", title: "Test yourself",
      note: "These are SC5-1 and SC5-2 from the book, with the explanation for every option.",
      items: [
        { id: "sc1", type: "mcq", badge: "SC5-1", title: "SC5-1", tag: "Section check",
          prompt: "Which organization writes U.S. GAAP?",
          options: [
            { text: "The FASB", correct: true,
              why: "The FASB writes U.S. GAAP and keeps it in the Accounting Standards Codification." },
            { text: "The SEC", why: "The SEC has legal authority, but it recognizes the FASB as the standard setter." },
            { text: "The PCAOB", why: "The PCAOB sets auditing standards, not accounting standards." },
            { text: "The IASB", why: "The IASB writes IFRS, not U.S. GAAP." }
          ],
          traps: ["four-bodies"] },

        { id: "sc2", type: "mcq", badge: "SC5-2", title: "SC5-2", tag: "Section check",
          prompt: "The IFRS term <strong>share premium</strong> has the same meaning as the U.S. GAAP term:",
          options: [
            { text: "retained earnings", why: "Retained earnings come from past profits, not from selling shares." },
            { text: "common stock", why: "Common stock holds only the par value of the shares." },
            { text: "net income", why: "Net income is a performance measure, not an equity account." },
            { text: "additional paid-in capital", correct: true,
              why: "Share premium is the amount received for shares above their par value: additional paid-in capital." }
          ] }
      ] }
    ]
  };
})();
