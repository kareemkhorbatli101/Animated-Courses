/* ar.js — the interface in Arabic (F36).

   What is translated: the controls and the labels this engine generates —
   the buttons, the headings it writes itself, the words it uses to tell you
   what to do. What is NOT translated: a single word of the English being
   taught. Translating a reading passage, an exercise item, an option or a
   rationale would remove the exercise; the learner is here to read English.

   So this is a chrome translation, deliberately, and the toggle says so.

   Arabic for the taught vocabulary is a separate thing (F18) and belongs
   beside each term, not in place of it.

   The page stays dir="ltr" because the content is English and mixing
   directions at the page level reflows every exercise. Arabic strings are
   marked dir="rtl" individually, which is what they need. */
(function (root, doc) {
  "use strict";
  var KEY = (root.COURSE && root.COURSE.ns || "toefl.") + "ui.lang";

  /* English exactly as the engine writes it -> Arabic */
  var AR = {
    /* the deck */
    "Check Answers": "تحقّق من الإجابات",
    "Try Again": "حاول مرة أخرى",
    "Explain": "اشرح",
    "Play this page": "استمع إلى الصفحة",
    "Stop": "أوقف",
    "← Back": "→ السابق",
    "Next →": "التالي ←",
    "Finish →": "إنهاء ←",
    "Theme": "المظهر",
    "Right": "صحيح",
    "Not yet": "ليس بعد",
    "Reset and reshuffled.": "أُعيد الترتيب من جديد.",

    /* help, prediction and explanation */
    "Stuck?": "تحتاج مساعدة؟",
    "Give me a hint": "أعطني تلميحًا",
    "Need help?": "تحتاج مساعدة؟",
    "Show me the first one": "أرني المثال الأول",
    "Hide the worked example": "أخفِ المثال المحلول",
    "Answer": "الإجابة",
    "Because": "لأنّ",
    "In your own words — why is the right answer right?":
      "بكلماتك أنت — لماذا الإجابة الصحيحة صحيحة؟",
    "Now show me": "أرني الآن",

    /* reading and listening */
    "Transcript": "النص المكتوب",
    "Your notes": "ملاحظاتك",
    "kept on this device, never marked": "تُحفظ على هذا الجهاز، ولا تُصحَّح",
    "Play slower (0.8x)": "استمع ببطء (٠٫٨×)",
    "after one attempt": "بعد محاولة واحدة",
    "Listen again": "استمع مرة أخرى",
    "Say it": "انطقها",
    "Hear it": "استمع إليها",
    "Hear it right": "استمع إلى الصواب",
    "Hear it slowly": "استمع إليها ببطء",
    "Shadow it": "ردّد معها",
    "Speak along": "تحدّث معها",
    "Again": "مرة أخرى",
    "Record and compare": "سجّل وقارن",
    "Microphone unavailable": "الميكروفون غير متاح",

    /* writing and speaking */
    "words": "كلمة",
    "seconds": "ثانية",
    "Editing checklist": "قائمة المراجعة",
    "Start the clock": "ابدأ الوقت",
    "Speaking…": "تتحدّث الآن…",
    "The model answer": "الإجابة النموذجية",
    "Play the model": "استمع إلى النموذج",
    "Reveal the model": "أظهر النموذج",
    "Reveal a model answer": "أظهر إجابة نموذجية",
    "Rate your own answer": "قيّم إجابتك",
    "Rate your answer against the model": "قيّم إجابتك مقارنةً بالنموذج",
    "How close were you?": "إلى أي مدى اقتربت؟",
    "Sentence shapes from this unit": "صيغ الجمل في هذه الوحدة",
    "found": "وُجدت",
    "not found": "لم تُوجد",
    "closest": "الأقرب",
    "cannot tell": "يتعذّر الحكم",
    "nothing written": "لم تكتب شيئًا بعد",
    "your first sentence": "جملتك الأولى",
    "your last sentence": "جملتك الأخيرة",
    "how you signed off": "كيف أنهيت رسالتك",

    /* grammar */
    "corrected": "صُحِّحت",
    "The rule, as you build it": "القاعدة، كما تبنيها بنفسك",
    "What each sentence of the model is doing": "ما تفعله كل جملة في النموذج",

    /* the explain sheet */
    "What this is": "ما هذا",
    "How to do it": "كيف تؤدّيه",
    "Why it is here": "لماذا هو هنا",
    "On this page": "على هذه الصفحة",
    "Close": "إغلاق",
    "Read this aloud": "اقرأ هذا بصوت عالٍ"
  };

  /* Only the chrome. An element inside these is the engine talking; an
     element outside them is the lesson, and the lesson stays English. */
  var CHROME = [".btn-check", ".btn-again", ".aux button", ".steps button",
    ".ln-hints-label", ".ln-hint-btn", ".ln-worked-btn", ".ln-worked-label",
    ".ln-why-q", ".ln-askwhy-go", ".ln-predict-q",
    ".rl-pad-head span", ".rl-slow", ".rl-slow-note", ".rl-tr-h",
    ".rl-shadow-label", ".rl-shadow-btn",
    ".ws-ring-cap", ".ws-frames-label", ".ws-model-label", ".ws-jobs-h",
    ".ws-point-tag", ".rubric h4",
    ".gr-fixbar-tag", ".gr-rule-h",
    ".explain-sheet h4", ".explain-sheet .sheet-close"];

  function on() {
    try { return root.localStorage.getItem(KEY) === "ar"; } catch (e) { return false; }
  }
  function setOn(v) {
    try { root.localStorage.setItem(KEY, v ? "ar" : "en"); } catch (e) {}
  }

  /* Keep the English on the element so switching back is exact, rather than
     translating Arabic back into English and hoping. */
  function apply(root_) {
    var scope = root_ || doc;
    CHROME.forEach(function (sel) {
      var list;
      try { list = scope.querySelectorAll(sel); } catch (e) { return; }
      [].forEach.call(list, function (el) {
        if (el.querySelector && el.querySelector("*")) {
          /* only translate elements whose whole text is one known string */
          if (el.children.length) return;
        }
        var en = el.dataset.en != null ? el.dataset.en : el.textContent.trim();
        var ar = AR[en];
        if (!ar) return;
        if (el.dataset.en == null) el.dataset.en = en;
        el.textContent = ar;
        el.setAttribute("lang", "ar");
        el.setAttribute("dir", "rtl");
      });
    });
  }
  function revert(root_) {
    var scope = root_ || doc;
    [].forEach.call(scope.querySelectorAll("[data-en]"), function (el) {
      el.textContent = el.dataset.en;
      el.removeAttribute("lang");
      el.removeAttribute("dir");
    });
  }

  function refresh() { if (on()) apply(); else revert(); }

  function toggle(host) {
    var b = doc.createElement("button");
    b.type = "button";
    b.className = "ar-toggle";
    function label() {
      b.textContent = on() ? "English" : "العربية";
      b.setAttribute("aria-label", on()
        ? "Switch the interface back to English"
        : "عرض واجهة الكتاب بالعربية — النصوص الإنجليزية تبقى كما هي");
      b.title = on()
        ? "Buttons and labels in English"
        : "Buttons and labels in Arabic. The English being taught stays English.";
    }
    b.addEventListener("click", function () {
      setOn(!on());
      label();
      refresh();
    });
    label();
    if (host) host.appendChild(b);
    return b;
  }

  root.AR = { apply: apply, revert: revert, refresh: refresh, toggle: toggle,
              on: on, TABLE: AR, CHROME: CHROME };
})(window, document);
