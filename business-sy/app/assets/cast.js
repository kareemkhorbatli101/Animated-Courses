/* cast.js — the recurring cast. Same face, name, voice and accent in every unit.
   Authored SVG rather than photography: no licence exposure, no model release,
   a few hundred bytes each, and it gives the book one identity. */
(function (root, doc) {
  "use strict";
  var PEOPLE = {
    haddad: { name: "Professor Nadia Haddad", role: "lecturer",     accent: "en-GB", sk:"#c99a72", hr:"#2f2a26", hs:"bob",   cl:"#4a5f7a" },
    mei:    { name: "Mei Lin",                role: "first year",   accent: "en-US", sk:"#e8c49c", hr:"#1f1b19", hs:"long",  cl:"#2a78d6" },
    dan:    { name: "Dan Okafor",             role: "peer advisor", accent: "en-US", sk:"#8a5a3b", hr:"#241c17", hs:"short", cl:"#1baf7a" },
    priya:  { name: "Priya Raman",            role: "student",      accent: "en-AU", sk:"#b07d52", hr:"#302019", hs:"bun",   cl:"#eb6834" },
    tomas:  { name: "Tomás Ferreira",    role: "student",      accent: "en-US", sk:"#d9a97d", hr:"#3b2b20", hs:"curl",  cl:"#6250d6" },
    you:    { name: "You",                    role: "",             accent: "en-US", sk:"#bdb9ae", hr:"#8a877e", hs:"short", cl:"#8a877e" }
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
