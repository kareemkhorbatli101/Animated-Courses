/* §1.5 Who writes the rules — five scenes.
   Four bodies, four jobs, taught as an org chart where the PCAOB sits on the
   auditing branch, so the distinction is structural rather than memorised. */
(function () {
  var L = window.LEDGER, T = window.TERMS;

  window.PAGE = {
    id: "s1-5", n: "1.5", up: "../",
    title: "Who writes the rules? U.S. GAAP and IFRS",
    terms: T.bridge("1.5"),
    /* the Brief: the author's own opening for this section, the terms with
       his Arabic, a voice and one drawing. assets/brief.js builds it. */
    brief: {
      about: "In the United States, the accounting rules are called U.S. GAAP (generally accepted accounting principles). The FASB (Financial Accounting Standards Board) writes them. The FASB is a private, independent organization. It keeps all U.S. GAAP in one place: the Accounting Standards Codification (ASC). The ASC is the single source of authoritative nongovernmental U.S. GAAP. It is organized by topic numbers. For example, ASC 606 covers revenue and ASC 842 covers leases.",
      /* two rulebooks and which one the exam uses - the author's own sentence from
         §1.5, so this section has a mechanism after all */
      anim: "rules"
    },
    scenes: [

    { id: "fig-f01-08", kind: "figure", file: "F01-08.png",
      label: "Figure F01-08.", caption: "Who writes the rules: SEC, FASB and the ASC for U.S. GAAP; IFRS Foundation and IASB for IFRS." },


    { id: "jobs", kind: "sort", board: "org",
      kicker: "Figure F01-08",
      title: "Four bodies, four jobs",
      say: "One of these does not write accounting standards at all. Put each body on the job it does.",
      traps: ["four-bodies"],
      groups: [
        { id: "us", label: "■ United States · U.S. GAAP", sub: "what the CMA exam tests" },
        { id: "intl", label: "● International · IFRS", sub: "used across the Middle East and North Africa" }
      ],
      targets: [
        { id: "sec", group: "us", label: "Legal authority over public-company reporting", sub: "a U.S. government agency" },
        { id: "fasb", group: "us", label: "Writes the standards", sub: "private and independent" },
        { id: "asc", group: "us", label: "Holds all U.S. GAAP in one place", sub: "organized by topic number" },
        { id: "pcaob", group: "us", label: "Sets AUDITING standards", sub: "not accounting standards" },
        { id: "iasb", group: "intl", label: "Writes IFRS", sub: "" },
        { id: "found", group: "intl", label: "The body above the standard setter", sub: "" }
      ],
      items: [
        { name: "SEC", to: "sec", trap: "four-bodies",
          why: "A U.S. government agency. It has legal authority over the financial reporting of public companies, and it recognizes the FASB as the standard setter." },
        { name: "FASB", to: "fasb", trap: "four-bodies",
          why: "A private, independent organization. It writes U.S. GAAP." },
        { name: "Accounting Standards Codification (ASC)", to: "asc",
          why: "The single source of authoritative nongovernmental U.S. GAAP." },
        { name: "PCAOB", to: "pcaob", trap: "four-bodies",
          why: "It oversees the audits of public companies and sets auditing standards — not accounting standards." },
        { name: "IASB", to: "iasb", trap: "four-bodies",
          why: "The International Accounting Standards Board writes IFRS." },
        { name: "IFRS Foundation", to: "found", why: "The IASB issues IFRS under the IFRS Foundation." }
      ],
      distractors: [
        { name: "ICMA", why: "The ICMA Learning Outcome Statements are quoted in this chapter. The ICMA does not write accounting standards." }
      ] },

    { id: "shelf", kind: "shelf",
      kicker: "The Codification",
      title: "Find the two topics this book builds on",
      ask: "The ASC is organized by topic numbers. Find the one for revenue, and the one for leases.",
      intro: "When the FASB changes a rule, it issues an <b>Accounting Standards Update</b> (ASU), which amends the Codification.",
      missWhy: "Not one the chapter names. It names ASC 606 for revenue and ASC 842 for leases.",
      volumes: [
        { n: 210 }, { n: 330 }, { n: 450 },
        { n: 606, topic: "revenue", why: "Chapter 11 of this book is built on it." },
        { n: 740 }, { n: 805 },
        { n: 842, topic: "leases", why: "Chapter 14 of this book is built on it." },
        { n: 958 }
      ] },

    { id: "names", kind: "switch",
      kicker: "IFRS contrast",
      title: "Six names, in the form the exam uses",
      say: "Most concepts are the same. Change the names and read both columns.",
      titleUs: "U.S. GAAP — the names the exam uses",
      titleIfrs: "IFRS — the names you may already know",
      pairs: [
        { us: "balance sheet", ifrs: "statement of financial position" },
        { us: "income statement", ifrs: "statement of profit or loss" },
        { us: "common stock", ifrs: "share capital (ordinary shares)" },
        { us: "additional paid-in capital", ifrs: "share premium" },
        { us: "accounts receivable", ifrs: "trade receivables" },
        { us: "net income", ifrs: "profit" }
      ] },

    { id: "scope", kind: "probe",
      kicker: "What the exam tests",
      title: "Four things to carry out of this section",
      say: "Open each one.",
      probes: [
        { q: "Which framework does the CMA exam test?",
          a: "<b>U.S. GAAP.</b> However, Section A also asks about the main differences between U.S. GAAP and IFRS, which is Chapter 17. If you learned accounting under IFRS, most concepts are the same, so every chapter has an IFRS Contrast box and Chapter 17 will be revision for you." },
        { q: "Which countries require IFRS for listed companies?",
          a: "Many countries in the Middle East and North Africa, for example <b>Jordan and the United Arab Emirates</b>, require IFRS for listed companies. In this book, <b>Cedar Retail S.A.L.</b> is our IFRS company." },
        { q: "What is a conceptual framework?",
          a: "<b>The basic ideas behind the standards</b>: the users, the elements, and the qualities of useful information. Both systems rest on one. You studied the U.S. version in sections 1.1 and 1.2." },
        { q: "Why does Orontes report under U.S. GAAP?",
          a: "Orontes Foods, Inc. makes olive oil and tahini in Amman, Jordan, and frozen pastries in Dubai. <b>Its shares are listed on a U.S. stock exchange</b>, and it reports under U.S. GAAP." }
      ] },

    { id: "sc1", kind: "check", kicker: "SC5-1", title: "Which organization writes U.S. GAAP?",
      traps: ["four-bodies"],
      options: [
        { text: "The FASB", correct: true,
          why: "The FASB writes U.S. GAAP and keeps it in the Accounting Standards Codification." },
        { text: "The SEC", why: "The SEC has legal authority, but it recognizes the FASB as the standard setter." },
        { text: "The PCAOB", why: "The PCAOB sets auditing standards, not accounting standards." },
        { text: "The IASB", why: "The IASB writes IFRS, not U.S. GAAP." }
      ] },

    { id: "sc2", kind: "check", kicker: "SC5-2",
      title: "The IFRS term <em>share premium</em> means the same as which U.S. GAAP term?",
      options: [
        { text: "retained earnings", why: "Retained earnings come from past profits, not from selling shares." },
        { text: "common stock", why: "Common stock holds only the par value of the shares." },
        { text: "net income", why: "Net income is a performance measure, not an equity account." },
        { text: "additional paid-in capital", correct: true,
          why: "Share premium is the amount received for shares above their par value." }
      ] }
    ]
  };
})();
