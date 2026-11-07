/* scenes.js — line-art scene composition.
 *
 * Step Forward's Lesson 1 is "match the words to the numbered picture." To
 * clone that I need pictures, and twelve hand-drawn SVGs would be twelve
 * inconsistent drawings. So a scene is DATA: a list of parts placed on a
 * 1000x600 stage, each part a primitive drawn in its own 100x100 box and
 * scaled. The result is one drawing style across the whole book, which is
 * what visual equivalence actually means.
 *
 *   SCENES.draw({ w:1000, h:600, parts:[{p:"desk", x:200, y:380, s:1.4}] })
 *
 * Stroke is currentColor so the drawings follow the theme with no second
 * palette. Fills use the tint tokens, which are defined in both modes.
 */
(function (root) {
  "use strict";

  var P = {};   /* primitive name -> markup drawn inside 0..100 x 0..100 */

  /* --- structure ------------------------------------------------------- */
  P.wall = '<path d="M0 0 H100 V62 H0 Z" fill="var(--sunk)"/>' +
           '<path d="M0 62 H100" /><path d="M0 62 L-6 100 M100 62 L106 100" opacity=".4"/>';
  P.floor = '<path d="M0 0 H100 V100 H0 Z" fill="var(--card)"/><path d="M0 0 H100"/>';
  P.window = '<rect x="6" y="8" width="88" height="66" rx="3" fill="var(--tint-b)"/>' +
             '<path d="M50 8 V74 M6 41 H94"/><rect x="6" y="8" width="88" height="66" rx="3" fill="none"/>' +
             '<path d="M2 76 H98" stroke-width="2.5"/>';
  P.door = '<rect x="18" y="4" width="64" height="96" rx="2" fill="var(--sunk)"/>' +
           '<circle cx="70" cy="54" r="3.5" fill="currentColor"/>' +
           '<rect x="26" y="14" width="48" height="30" rx="2" fill="var(--card)"/>';
  P.board = '<rect x="2" y="6" width="96" height="62" rx="2" fill="var(--card)" stroke-width="2"/>' +
            '<path d="M12 24 H54 M12 36 H70 M12 48 H40" opacity=".55" stroke-width="2"/>' +
            '<path d="M2 68 H98" stroke-width="3"/>';
  P.screen = '<path d="M50 0 V10"/><rect x="2" y="10" width="96" height="66" fill="var(--card)" stroke-width="2"/>' +
             '<path d="M16 58 L36 34 L52 48 L68 26 L84 44" fill="none" stroke-width="2.5" stroke="var(--blue)"/>' +
             '<path d="M14 62 H86 M14 24 V62" opacity=".5"/>';
  P.poster = '<rect x="10" y="6" width="80" height="88" rx="2" fill="var(--tint-y)"/>' +
             '<path d="M20 26 H80 M20 40 H70 M20 54 H76 M20 68 H52" opacity=".55" stroke-width="2"/>';

  /* --- furniture ------------------------------------------------------- */
  P.desk = '<path d="M4 34 H96 V42 H4 Z" fill="var(--sunk)"/>' +
           '<path d="M14 42 V92 M86 42 V92" stroke-width="2.5"/>';
  P.longdesk = '<path d="M0 30 H100 V40 H0 Z" fill="var(--sunk)"/><path d="M8 40 V84 M92 40 V84"/>';
  P.chair = '<path d="M24 32 H76 V42 H24 Z" fill="var(--sunk)"/>' +
            '<path d="M30 42 V88 M70 42 V88 M26 2 H34 V32 M66 2 H74 V32"/>' +
            '<path d="M26 8 H74" stroke-width="2.5"/>';
  P.pallet = '<path d="M6 62 H94 V72 H6 Z" fill="var(--tint-o)"/>' +
              '<path d="M6 78 H94 V88 H6 Z" fill="var(--tint-o)"/>' +
              '<path d="M10 72 V78 M48 72 V78 M90 72 V78" stroke-width="3"/>' +
              '<path d="M6 62 H94 V72 H6 Z M6 78 H94 V88 H6 Z" fill="none"/>' +
              '<path d="M18 62 V40 H82 V62" fill="var(--card)"/><path d="M18 50 H82" opacity=".5"/>';
  P.shelf = '<rect x="6" y="2" width="88" height="96" rx="2" fill="var(--sunk)"/>' +
            '<path d="M6 28 H94 M6 52 H94 M6 76 H94" stroke-width="2"/>' +
            '<path d="M14 6 V26 M20 6 V26 M26 6 V26 M34 8 V26 M40 8 V26" stroke="var(--maroon)" stroke-width="2.5"/>' +
            '<path d="M14 32 V50 M20 32 V50 M28 32 V50 M34 32 V50" stroke="var(--blue)" stroke-width="2.5"/>' +
            '<path d="M60 56 V74 M66 56 V74 M72 56 V74 M78 56 V74" stroke="var(--green)" stroke-width="2.5"/>';
  P.bench = '<path d="M0 36 H100 V46 H0 Z" fill="var(--sunk)"/><path d="M10 46 V92 M90 46 V92"/>' +
            '<path d="M0 36 H100" stroke-width="2.5"/>';
  P.counter = '<path d="M0 30 H100 V96 H0 Z" fill="var(--sunk)"/><path d="M0 30 H100" stroke-width="3"/>' +
              '<path d="M0 44 H100" opacity=".4"/>';
  P.plant = '<path d="M38 70 H62 L58 98 H42 Z" fill="var(--tint-o)"/>' +
            '<path d="M50 70 V36 M50 48 C38 44 32 30 34 18 C46 22 50 34 50 44 M50 52 C62 48 68 34 66 22 C54 26 50 38 50 48" fill="none"/>';
  P.clock = '<circle cx="50" cy="50" r="42" fill="var(--card)"/><circle cx="50" cy="50" r="42" fill="none" stroke-width="2.5"/>' +
            '<path d="M50 50 V24 M50 50 L70 60" stroke-width="2.5"/><circle cx="50" cy="50" r="3" fill="currentColor"/>';

  /* --- objects --------------------------------------------------------- */
  P.laptop = '<path d="M20 20 H80 V62 H20 Z" fill="var(--card)" stroke-width="2"/>' +
             '<path d="M10 62 H90 L96 76 H4 Z" fill="var(--sunk)"/>' +
             '<path d="M30 30 H70 M30 40 H62 M30 50 H52" opacity=".5" stroke-width="2"/>';
  P.ledger = '<path d="M14 84 H86 V94 H14 Z" fill="var(--maroon)" stroke="none"/>' +
              '<path d="M18 72 H82 V84 H18 Z" fill="var(--blue)" stroke="none"/>' +
              '<path d="M22 60 H78 V72 H22 Z" fill="var(--green)" stroke="none"/>' +
              '<path d="M14 84 H86 V94 H14 Z M18 72 H82 V84 H18 Z M22 60 H78 V72 H22 Z" fill="none"/>' +
              '<path d="M24 88 H44 M28 76 H48 M32 64 H52" opacity=".5" stroke-width="2"/>';
  P.binder = '<path d="M20 10 H84 V90 H20 Z" fill="var(--card)" stroke-width="2"/>' +
              '<path d="M20 10 H34 V90 H20 Z" fill="var(--blue)" stroke="none"/>' +
              '<path d="M20 10 H34 V90 H20 Z" fill="none"/>' +
              '<circle cx="27" cy="30" r="3.5" fill="var(--card)"/><circle cx="27" cy="50" r="3.5" fill="var(--card)"/>' +
              '<circle cx="27" cy="70" r="3.5" fill="var(--card)"/>' +
              '<path d="M44 30 H74 M44 44 H70 M44 58 H74" opacity=".5" stroke-width="2"/>';
  P.paper = '<path d="M22 6 H78 V94 H22 Z" fill="var(--card)"/>' +
            '<path d="M32 24 H68 M32 36 H68 M32 48 H60 M32 60 H68 M32 72 H48" opacity=".55" stroke-width="2"/>';
  P.pen = '<path d="M22 86 L30 78 L74 20 L82 28 L38 86 Z" fill="var(--tint-o)"/><path d="M22 86 L30 78"/>';
  P.crate = '<path d="M14 30 H86 V88 H14 Z" fill="var(--tint-o)"/>' +
             '<path d="M14 30 H86 V88 H14 Z" fill="none" stroke-width="2.5"/>' +
             '<path d="M14 30 L86 88 M86 30 L14 88" opacity=".45"/>' +
             '<path d="M14 44 H86 M14 74 H86" opacity=".5"/>';
  P.scales = '<path d="M50 92 H50 M30 92 H70" stroke-width="3"/><path d="M50 92 V28"/>' +
              '<path d="M16 28 H84" stroke-width="2.5"/>' +
              '<path d="M8 28 L24 28 L16 48 Z" fill="var(--tint-b)"/>' +
              '<path d="M76 28 L92 28 L84 44 Z" fill="var(--tint-g)"/>' +
              '<circle cx="50" cy="24" r="5" fill="var(--card)"/>';
  P.globe = '<circle cx="50" cy="44" r="34" fill="var(--tint-b)"/><circle cx="50" cy="44" r="34" fill="none"/>' +
            '<path d="M50 10 V78 M16 44 H84 M26 22 C40 32 60 32 74 22 M26 66 C40 56 60 56 74 66" fill="none" opacity=".6"/>' +
            '<path d="M50 78 V92 M36 92 H64" stroke-width="2.5"/>';
  P.mic = '<rect x="40" y="8" width="20" height="40" rx="10" fill="var(--sunk)"/>' +
          '<path d="M30 42 C30 62 70 62 70 42 M50 62 V84 M34 88 H66" />';
  P.phone = '<rect x="32" y="6" width="36" height="88" rx="6" fill="var(--card)"/>' +
            '<rect x="38" y="16" width="24" height="60" rx="2" fill="var(--tint-b)"/>' +
            '<circle cx="50" cy="85" r="4" fill="none"/>';
  P.sign = '<path d="M50 96 V44" stroke-width="3"/><path d="M8 18 H84 L94 31 L84 44 H8 Z" fill="var(--tint-y)"/>' +
           '<path d="M20 31 H70" opacity=".6" stroke-width="2.5"/>';
  P.tree = '<path d="M44 98 H56 V62 H44 Z" fill="var(--tint-o)"/>' +
           '<path d="M50 62 C18 58 10 30 30 14 C40 2 62 2 72 14 C92 30 82 58 50 62 Z" fill="var(--tint-g)"/>';
  P.building = '<path d="M8 96 V26 L50 6 L92 26 V96 Z" fill="var(--sunk)"/>' +
               '<path d="M26 96 V62 H42 V96 M58 96 V62 H74 V96" />' +
               '<path d="M30 36 H44 M56 36 H70" stroke-width="2.5"/>';
  P.path = '<path d="M12 98 C30 60 70 40 92 6" stroke-width="10" stroke="var(--sunk)" stroke-linecap="round"/>' +
           '<path d="M12 98 C30 60 70 40 92 6" stroke-dasharray="6 10" opacity=".5"/>';

  /* --- people ---------------------------------------------------------- */
  P.person = '<circle cx="50" cy="16" r="12" fill="var(--tint-y)"/>' +
             '<path d="M50 28 C34 28 30 42 30 56 V74 H70 V56 C70 42 66 28 50 28 Z" fill="var(--sunk)"/>' +
             '<path d="M30 52 L16 68 M70 52 L84 68 M40 74 V98 M60 74 V98" />';
  P.seated = '<circle cx="46" cy="16" r="11" fill="var(--tint-y)"/>' +
             '<path d="M46 27 C32 27 28 40 28 54 V66 H64 V54 C64 40 60 27 46 27 Z" fill="var(--sunk)"/>' +
             '<path d="M28 50 L14 60 M64 66 H88 V78 M34 66 V92 M34 92 H20" />';
  P.manager = '<circle cx="50" cy="14" r="12" fill="var(--tint-y)"/>' +
               '<path d="M50 26 C34 26 30 40 30 54 V72 H70 V54 C70 40 66 26 50 26 Z" fill="var(--tint-b)"/>' +
               '<path d="M70 48 L92 30 M30 50 L18 66 M40 72 V98 M60 72 V98" />' +
               '<path d="M90 24 L98 32" stroke-width="2.5"/>';
  P.pair = '<circle cx="34" cy="18" r="11" fill="var(--tint-y)"/>' +
           '<path d="M34 29 C22 29 18 42 18 54 V74 H50 V54 C50 42 46 29 34 29 Z" fill="var(--sunk)"/>' +
           '<circle cx="70" cy="22" r="10" fill="var(--tint-o)"/>' +
           '<path d="M70 32 C60 32 56 44 56 55 V74 H84 V55 C84 44 80 32 70 32 Z" fill="var(--card)"/>' +
           '<path d="M26 74 V98 M42 74 V98 M64 74 V98 M78 74 V98"/>';


  /* --- the workplace --------------------------------------------------- */
  P.container = '<path d="M4 28 H96 V80 H4 Z" fill="var(--tint-b)"/>' +
                '<path d="M4 28 H96 V80 H4 Z" fill="none" stroke-width="2.5"/>' +
                '<path d="M14 28 V80 M26 28 V80 M38 28 V80 M50 28 V80 M62 28 V80 M74 28 V80 M86 28 V80" opacity=".45"/>' +
                '<path d="M4 36 H96 M4 72 H96" opacity=".6" stroke-width="2"/>';
  P.forklift = '<path d="M20 74 H64 V40 H44 L36 24 H20 Z" fill="var(--tint-o)"/>' +
               '<path d="M20 74 H64 V40 H44 L36 24 H20 Z" fill="none" stroke-width="2.5"/>' +
               '<path d="M70 12 V82 M70 82 H94" stroke-width="3"/>' +
               '<path d="M70 44 H90" stroke-width="2.5"/>' +
               '<circle cx="32" cy="84" r="10" fill="var(--sunk)"/><circle cx="58" cy="84" r="8" fill="var(--sunk)"/>' +
               '<circle cx="32" cy="84" r="10" fill="none"/><circle cx="58" cy="84" r="8" fill="none"/>';
  P.van = '<path d="M4 38 H56 V76 H4 Z" fill="var(--card)"/>' +
          '<path d="M56 48 H78 L92 62 V76 H56 Z" fill="var(--tint-b)"/>' +
          '<path d="M4 38 H56 V76 H4 Z M56 48 H78 L92 62 V76 H56 Z" fill="none" stroke-width="2.5"/>' +
          '<path d="M60 52 H76 L84 61 H60 Z" fill="var(--sunk)"/>' +
          '<circle cx="26" cy="78" r="9" fill="var(--sunk)"/><circle cx="74" cy="78" r="9" fill="var(--sunk)"/>' +
          '<circle cx="26" cy="78" r="9" fill="none"/><circle cx="74" cy="78" r="9" fill="none"/>';
  P.invoice = '<path d="M20 4 H80 V96 L70 88 L60 96 L50 88 L40 96 L30 88 L20 96 Z" fill="var(--card)"/>' +
              '<path d="M20 4 H80 V96 L70 88 L60 96 L50 88 L40 96 L30 88 L20 96 Z" fill="none" stroke-width="2"/>' +
              '<path d="M30 22 H70 M30 34 H62 M30 46 H70" opacity=".55" stroke-width="2"/>' +
              '<path d="M44 62 H70 V74 H44 Z" fill="var(--tint-g)"/><path d="M44 62 H70 V74 H44 Z" fill="none"/>' +
              '<path d="M30 68 H38" opacity=".55" stroke-width="2"/>';
  P.stamp = '<path d="M42 8 H58 V22 H42 Z" fill="var(--sunk)"/>' +
            '<path d="M42 8 H58 V22 H42 Z" fill="none" stroke-width="2"/>' +
            '<path d="M34 22 H66 L72 44 H28 Z" fill="var(--card)"/>' +
            '<path d="M34 22 H66 L72 44 H28 Z" fill="none" stroke-width="2.5"/>' +
            '<path d="M24 44 H76 V54 H24 Z" fill="var(--sunk)"/>' +
            '<path d="M24 44 H76 V54 H24 Z" fill="none" stroke-width="2"/>' +
            '<path d="M10 64 H90" stroke-width="3"/>' +
            '<circle cx="50" cy="78" r="13" fill="none" stroke-width="2" opacity=".75"/>' +
            '<path d="M40 78 H60" opacity=".6" stroke-width="2"/>';
  /* `handshake` was drawn here and removed. At 100x100 in stroke-only line
     art every version of it read as a bow tie or a bar with a grip, and a
     picture that does not communicate is worse than no picture - which is
     the whole basis of this book's rule that a visual must be load-bearing.
     An agreement is carried by `stamp` (a document that has been signed off)
     or by `pair` (the two people who made it), and both of those read. */
  P.headset = '<path d="M20 56 V44 A30 30 0 0 1 80 44 V56" fill="none" stroke-width="3"/>' +
              '<path d="M10 54 H28 V78 H10 Z" fill="var(--sunk)"/><path d="M72 54 H90 V78 H72 Z" fill="var(--sunk)"/>' +
              '<path d="M10 54 H28 V78 H10 Z M72 54 H90 V78 H72 Z" fill="none"/>' +
              '<path d="M28 72 C44 72 48 82 56 86" fill="none" stroke-width="2.5"/>' +
              '<ellipse cx="60" cy="87" rx="7" ry="4" fill="var(--sunk)"/>';
  P.projector = '<path d="M50 6 V16" stroke-width="2.5"/>' +
                '<path d="M6 16 H94 V64 H6 Z" fill="var(--card)" stroke-width="2"/>' +
                '<path d="M18 28 L40 52 L54 38 L70 58" fill="none" stroke-width="2.5" stroke="var(--blue)"/>' +
                '<path d="M14 58 H86" opacity=".5"/>' +
                '<path d="M30 64 H70 L76 80 H24 Z" fill="var(--sunk)"/>';

  function draw(scene) {
    var w = scene.w || 1000, h = scene.h || 600, out = [];
    out.push('<svg viewBox="0 0 ' + w + ' ' + h + '" class="scene-svg" role="img" ' +
             'aria-label="' + String(scene.alt || "Scene illustration").replace(/"/g, "") + '">');
    (scene.parts || []).forEach(function (q) {
      var m = P[q.p];
      if (!m) { return; }
      var sx = q.sx !== undefined ? q.sx : (q.s === undefined ? 1 : q.s);
      var sy = q.sy !== undefined ? q.sy : (q.s === undefined ? 1 : q.s);
      var fx = q.flip ? " scale(-1,1) translate(-100,0)" : "";
      out.push('<g transform="translate(' + (q.x || 0) + ',' + (q.y || 0) + ') scale(' + sx + ',' + sy + ')' + fx + '"' +
               (q.o !== undefined ? ' opacity="' + q.o + '"' : "") + '>' + m + "</g>");
    });
    out.push("</svg>");
    return out.join("");
  }

  root.SCENES = { draw: draw, parts: P, names: Object.keys(P) };
})(window);
