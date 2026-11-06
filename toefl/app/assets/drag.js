/* drag.js — drag and drop with a click path and full keyboard parity.
 *
 * Ported in spirit from the CMA build, which settled these rules the hard way:
 *   - a grip glyph marks what is draggable, so it is not a guess
 *   - every drag has a click path: tap a chip, tap a target
 *   - every drag has a keyboard path: Tab to a chip, Enter to lift, Tab to a
 *     target, Enter to drop. Escape puts it back.
 *   - a wrong drop springs back and says WHY on the chip, rather than silently
 *     refusing, which reads as a broken interface
 *   - a live region announces every move, so the exercise is usable unseen
 */
(function (root, doc) {
  "use strict";

  function E(t, c, x) {
    var n = doc.createElement(t);
    if (c) n.className = c;
    if (x !== undefined) n.textContent = x;
    return n;
  }

  /* opts: { live, onDrop(chipId, zoneId) -> true | string(reason) } */
  function Drag(opts) {
    opts = opts || {};
    var self = {}, picked = null, zones = [], chips = {};

    function say(m) { if (opts.live) opts.live.textContent = m; }

    function arm(on) {
      zones.forEach(function (z) { z.el.classList.toggle("armed", on); });
    }

    function lift(id) {
      if (picked) drop(null);
      picked = id;
      chips[id].el.classList.add("lifted");
      chips[id].el.setAttribute("aria-grabbed", "true");
      arm(true);
      say(chips[id].label + " lifted. Choose where it goes.");
    }

    function release() {
      if (!picked) return;
      chips[picked].el.classList.remove("lifted");
      chips[picked].el.setAttribute("aria-grabbed", "false");
      picked = null;
      arm(false);
    }

    function bounce(el, why) {
      el.classList.add("bounce");
      if (why) {
        var tag = E("span", "why", why);
        el.appendChild(tag);
        setTimeout(function () { if (tag.parentNode) tag.parentNode.removeChild(tag); }, 3200);
      }
      setTimeout(function () { el.classList.remove("bounce"); }, 380);
    }

    /* Move a chip into a zone, or back to the tray when zone is null. */
    function drop(zoneId) {
      if (!picked) return;
      var id = picked, chip = chips[id];
      if (zoneId === null) { release(); opts.tray.appendChild(chip.el); return; }
      var z = zoneOf(zoneId);
      if (!z) { release(); return; }
      var verdict = opts.onDrop ? opts.onDrop(id, zoneId) : true;
      if (verdict !== true) {
        bounce(chip.el, typeof verdict === "string" ? verdict : "");
        say("That is not where " + chip.label + " goes.");
        release();
        return;
      }
      z.el.appendChild(chip.el);
      chip.zone = zoneId;
      chip.el.classList.add("placed");
      say(chip.label + " placed in " + z.label + ".");
      release();
    }

    function zoneOf(id) {
      for (var i = 0; i < zones.length; i++) if (zones[i].id === id) return zones[i];
      return null;
    }

    self.chip = function (spec) {
      /* `label` is the plain text the live region announces, so it stays
         text. `html` is an optional rendered form for the eye: a takeaway
         with its operative phrase in bold reads as markup without it, and
         a screen reader should not have to say "less-than b greater-than". */
      var c = E("button", "chip", spec.html ? "" : spec.label);
      if (spec.html) c.innerHTML = spec.html;
      c.type = "button";
      c.draggable = true;
      c.dataset.chipId = spec.id;
      c.setAttribute("aria-grabbed", "false");
      c.addEventListener("click", function () {
        if (picked === spec.id) { release(); say("Put down."); return; }
        if (picked) { /* swap selection */ release(); }
        if (c.parentNode !== opts.tray && !opts.lockPlaced) {
          /* clicking a placed chip picks it up again */
          opts.tray.appendChild(c);
          c.classList.remove("placed");
          chips[spec.id].zone = null;
          say(spec.label + " returned.");
          return;
        }
        lift(spec.id);
      });
      c.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); c.click(); }
        if (e.key === "Escape" && picked) { e.preventDefault(); drop(null); say("Put back."); }
      });
      c.addEventListener("dragstart", function (e) {
        lift(spec.id);
        try { e.dataTransfer.setData("text/plain", spec.id); } catch (x) {}
      });
      c.addEventListener("dragend", function () { arm(false); });
      chips[spec.id] = { el: c, label: spec.label, zone: null };
      return c;
    };

    self.zone = function (spec) {
      var z = E("div", "zone");
      z.dataset.zoneId = spec.id;          /* keyboard routing, ?seed= replay, contract checks */
      z.setAttribute("role", "button");
      z.tabIndex = 0;
      z.setAttribute("aria-label", "Drop zone: " + spec.label);
      z.addEventListener("click", function () { if (picked) drop(spec.id); });
      z.addEventListener("keydown", function (e) {
        if ((e.key === "Enter" || e.key === " ") && picked) { e.preventDefault(); drop(spec.id); }
      });
      z.addEventListener("dragover", function (e) { e.preventDefault(); z.classList.add("over"); });
      z.addEventListener("dragleave", function () { z.classList.remove("over"); });
      z.addEventListener("drop", function (e) {
        e.preventDefault();
        z.classList.remove("over");
        drop(spec.id);
      });
      zones.push({ id: spec.id, el: z, label: spec.label });
      return z;
    };

    self.trayDrop = function (tray) {
      tray.addEventListener("dragover", function (e) { e.preventDefault(); });
      tray.addEventListener("drop", function (e) { e.preventDefault(); drop(null); });
    };

    self.placement = function () {
      var out = {};
      Object.keys(chips).forEach(function (id) { out[id] = chips[id].zone; });
      return out;
    };
    self.chipEl = function (id) { return chips[id].el; };
    self.reset = function () { release(); };
    return self;
  }

  root.Drag = Drag;
})(window, document);
