/* cast.js — the recurring cast. Same face, name, voice and accent in every unit.
   Authored SVG rather than photography: no licence exposure, no model release,
   a few hundred bytes each, and it gives the book one identity.

   All six are fictional. None is a real person, company or official.

   A NOTE ON `accent`, so nothing here is read as a claim. The field selects a
   Web Speech API voice, and the voices a browser offers are en-GB, en-US and
   en-AU. There is no Arabic-accented English voice to choose. The values
   below are therefore chosen so the six speakers are TELLABLE APART in a
   listening exercise, which is what the exercises need. They are not a claim
   about how a Syrian colleague sounds, and the course says so in its README
   rather than leaving a learner to infer it. */
(function (root, doc) {
  "use strict";
  var PEOPLE = {
    nour:  { name: "Nour Haddad",   role: "operations manager",   accent: "en-GB", sk:"#d9ab80", hr:"#2f2a26", hs:"hijab", cl:"#4a5f7a" },
    samer: { name: "Samer Khoury",  role: "export coordinator",   accent: "en-US", sk:"#c99a72", hr:"#241c17", hs:"short", cl:"#2a78d6" },
    lina:  { name: "Lina Al-Masri", role: "accounts",             accent: "en-GB", sk:"#e8c49c", hr:"#1f1b19", hs:"bob",   cl:"#1baf7a" },
    fadi:  { name: "Fadi Barakat",  role: "warehouse supervisor", accent: "en-US", sk:"#a8744b", hr:"#302019", hs:"curl",  cl:"#eb6834" },
    rana:  { name: "Rana Darwish",  role: "buyer, client side",   accent: "en-AU", sk:"#b07d52", hr:"#3b2b20", hs:"bun",   cl:"#6250d6" },
    ziad:  { name: "Ziad Haffar",   role: "Homs Spinning",        accent: "en-GB", sk:"#8a5a3b", hr:"#1f1b19", hs:"short", cl:"#7a6a4a" },
    maya:  { name: "Maya Seif",     role: "Aleppo Weaving",       accent: "en-US", sk:"#d9a97d", hr:"#2f2a26", hs:"long",  cl:"#2f7d7a" },
    you:   { name: "You",           role: "",                     accent: "en-US", sk:"#bdb9ae", hr:"#8a877e", hs:"short", cl:"#8a877e" }
  };
  function svg(key, size) {
    var a = PEOPLE[key] || PEOPLE.you, s = size || 46, h = "";
    h += '<svg viewBox="0 0 84 84" width="' + s + '" height="' + s + '" aria-hidden="true">';
    h += '<path d="M8 84c0-16 15-25 34-25s34 9 34 25z" fill="' + a.cl + '"/>';
    h += '<path d="M34 60h16v8a8 8 0 0 1-16 0z" fill="' + a.sk + '"/>';
    h += '<ellipse cx="42" cy="38" rx="17" ry="20" fill="' + a.sk + '"/>';
    if (a.hs === "bob")
      h += '<path d="M22 38c0-13 9-21 20-21s20 8 20 21c0 0-3-9-20-9s-20 9-20 9z" fill="' + a.hr + '"/>'
         + '<path d="M22 36c-2 10 0 18 2 20-4-4-6-13-2-20zM62 36c2 10 0 18-2 20 4-4 6-13 2-20z" fill="' + a.hr + '"/>';
    else if (a.hs === "long")
      h += '<path d="M23 38c0-13 8-21 19-21s19 8 19 21c0 0-2-10-19-10s-19 10-19 10z" fill="' + a.hr + '"/>'
         + '<path d="M23 35c-3 14-1 26 1 31-6-6-8-22-1-31zM61 35c3 14 1 26-1 31 6-6 8-22 1-31z" fill="' + a.hr + '"/>';
    else if (a.hs === "bun")
      h += '<circle cx="42" cy="15" r="7" fill="' + a.hr + '"/>'
         + '<path d="M24 37c0-12 8-20 18-20s18 8 18 20c0 0-2-9-18-9s-18 9-18 9z" fill="' + a.hr + '"/>';
    else if (a.hs === "curl")
      h += '<path d="M24 37c0-13 8-21 18-21s18 8 18 21c0 0-2-9-18-9s-18 9-18 9z" fill="' + a.hr + '"/>'
         + '<circle cx="27" cy="28" r="5" fill="' + a.hr + '"/><circle cx="42" cy="21" r="6" fill="' + a.hr + '"/>'
         + '<circle cx="57" cy="28" r="5" fill="' + a.hr + '"/>';
    else if (a.hs === "hijab")
      /* Drawn in the same stroke-and-fill language as the other styles: a
         covering that frames the face and drapes to the shoulder line. It
         uses `cl`, the clothing colour, because that is what it is. */
      h += '<path d="M20 40c0-15 10-24 22-24s22 9 22 24c0 7-1 13-3 19h-6c3-7 4-13 4-19 0-10-7-16-17-16s-17 6-17 16c0 6 1 12 4 19h-6c-2-6-3-12-3-19z" fill="' + a.cl + '"/>'
         + '<path d="M23 55c-2 8-2 15 0 22h38c2-7 2-14 0-22-3 6-10 9-19 9s-16-3-19-9z" fill="' + a.cl + '"/>'
         + '<path d="M25 36c0-9 7-15 17-15s17 6 17 15c0 0-3-6-17-6s-17 6-17 6z" fill="' + a.cl + '" opacity=".55"/>';
    else
      h += '<path d="M25 38c0-12 8-20 17-20s17 8 17 20c0 0-2-8-17-8s-17 8-17 8z" fill="' + a.hr + '"/>';
    h += '<circle cx="35" cy="38" r="2.1" fill="#2b2622"/><circle cx="49" cy="38" r="2.1" fill="#2b2622"/>';
    h += '<path d="M37 47q5 4 10 0" stroke="#2b2622" stroke-width="1.6" fill="none" stroke-linecap="round"/>';
    h += "</svg>";
    return h;
  }

  /* The speaker block the spec requires beside every listening item. */
  function speakerBlock(key, note) {
    var a = PEOPLE[key] || PEOPLE.you;
    var d = doc.createElement("div");
    d.className = "speaker";
    d.innerHTML = svg(key, 46) + "<div><b>" + a.name + "</b><span>" +
      (note || a.role) + (a.accent ? " · " + a.accent.replace("en-", "") : "") + "</span></div>";
    return d;
  }

  root.CAST = { PEOPLE: PEOPLE, svg: svg, speakerBlock: speakerBlock, person: function (k) { return PEOPLE[k]; } };
})(window, document);
