/* camera_view.js — THE VIEWER'S CAMERA, laid over the authored one.
 *
 * THE SPLIT, which everything else depends on:
 *
 *   The AUTHORED camera is the spec. It is computed by drive() - the one interpreter that Prime and the
 *   browser player share - and nothing in this file touches it. What drive() returns is what the MP4 was
 *   rendered from, and it is what the parity gate compares.
 *
 *   The VIEWER'S camera is a VIEW laid over the top: browser-only, per-viewer, never written into the
 *   scene, never seen by drive(), never part of parity.
 *
 * So the guarantee is re-worded rather than spent: the interactive render reproduces the MP4 exactly
 * WHILE THE VIEW IS THE DIRECTOR'S. The page says so the moment it is not.
 *
 * The rule runs BACKWARDS here, deliberately. Whatever the two renderers must AGREE on belongs in
 * drive()'s output, because that output is what parity compares. A viewer's camera is the opposite: the
 * one thing they must NOT share. Putting it in drive() would leave the parity gate passing while it
 * compared nothing at all.
 *
 * THE FRAME. Drags are SCREEN-RELATIVE, because the screen plane is the camera's image plane and the
 * screen is the thing a person is actually looking at. Drag right, the world slides right; no mental
 * translation, and no need to remember which way the room faces. Two refinements, each preventing one
 * specific ugly behaviour:
 *   * LR and IO are FLATTENED TO THE FLOOR. Pure screen-relative "in" follows the view direction
 *     including its downward tilt, so looking slightly down and pushing In drives the camera into the
 *     ground. Projected onto the floor, In means further into the room at whatever height you are.
 *   * UD is TRUE WORLD-UP. If UD followed the screen, a tilted camera would make "up" mean up-ish and
 *     the lift would drift forward. Mixed frames sound impure; every tool does it, and it is right.
 *
 * THE OFFSET'S FRAME. In Ride along the offset is stored in the DIRECTOR'S OWN BASIS (his right, up and
 * forward), NOT in world axes. 71 of the 102 authored shots are CUTS: in world axes, "two metres to his
 * right" becomes two metres to his LEFT the moment the film cuts to a camera facing the other way, which
 * destroys the mode's entire premise. In his basis, "you moved his tripod" stays true through every cut.
 * Free look has no director to be relative to, so it stores world positions - and the two are never
 * confused.
 *
 * AIM IS ANGULAR. The viewer's aim offset is a yaw and a pitch, not a point in metres. A metres-based aim
 * offset produces a different angular change depending on how far away the subject is, and the numbers
 * panel and the pad would then be editing different quantities for the same thing. The authored spec
 * still stores tx, ty, tz; the panel shows the resulting look-at point as a DERIVED readout.
 *
 * ZOOM IS A MULTIPLIER, never degrees - scene_player.js carries FOVK = 0.70, an admitted and unresolved
 * convention mismatch between Prime and three.js, and printing a degree figure would publish a
 * disagreement as though it were a fact.
 */
(function (global) {
  'use strict';

  var WORLD_UP = [0, 1, 0];
  var EPS = 1e-9;

  function sub(a, b) { return [a[0] - b[0], a[1] - b[1], a[2] - b[2]]; }
  function add(a, b) { return [a[0] + b[0], a[1] + b[1], a[2] + b[2]]; }
  function mul(a, s) { return [a[0] * s, a[1] * s, a[2] * s]; }
  function dot(a, b) { return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]; }
  function len(a) { return Math.sqrt(dot(a, a)); }
  function norm(a) { var l = len(a); return l < EPS ? [0, 0, 1] : mul(a, 1 / l); }
  function cross(a, b) {
    return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  }
  function clamp(v, lo, hi) { return v < lo ? lo : (v > hi ? hi : v); }

  /* The camera's own axes. `forward` is where it looks; `right` is screen-right; `up` completes them.
   * A camera looking straight down would make right undefined, so the degenerate case falls back to
   * world X rather than producing NaNs that propagate into every later frame. */
  function basisOf(pos, target) {
    var f = norm(sub(target, pos));
    var r = cross(f, WORLD_UP);
    if (len(r) < 1e-6) r = [1, 0, 0]; else r = norm(r);
    return {forward: f, right: r, up: cross(r, f)};
  }

  /* The FLOOR basis: the same right and forward with the vertical component removed. This is what LR and
   * IO move along, and it is why pushing In never dives into the ground. */
  function floorBasisOf(pos, target) {
    var b = basisOf(pos, target);
    var f = [b.forward[0], 0, b.forward[2]];
    if (len(f) < 1e-6) f = [b.up[0], 0, b.up[2]];           // looking straight down: use the up vector
    f = norm(f);
    var r = norm(cross(f, WORLD_UP));
    return {forward: f, right: mul(r, -1), up: WORLD_UP.slice()};
  }

  /* Rotate `v` about an arbitrary unit axis (Rodrigues). Used for yaw about world up and pitch about the
   * camera's own right, which is what keeps the horizon level without a roll term. */
  function rotAxis(v, axis, ang) {
    var c = Math.cos(ang), s = Math.sin(ang);
    var k = cross(axis, v);
    return add(add(mul(v, c), mul(k, s)), mul(axis, dot(axis, v) * (1 - c)));
  }

  var STOPS = ['LR', 'IO', 'LR&IO', 'UD', 'Aim'];
  var MODES = ['director', 'ride', 'free'];

  function CameraView() { this.reset(); }

  CameraView.prototype.reset = function () {
    this.mode = 'director';
    // Ride along: an offset in the DIRECTOR'S basis - [right, up, forward].
    this.off = [0, 0, 0];
    // Free look: an absolute world position, plus the direction it looks and how far the aim point sits.
    this.pos = null;
    this.yaw = 0;               // angular aim offset, radians
    this.pitch = 0;
    this.dist = 4.0;            // free look only: distance to the aim point == the orbit radius
    this.zoom = 1.0;
    this.roll = 0.0;
    this._fb = null;
    return this;
  };

  /* IS THIS STILL THE DIRECTOR'S VIEW? The page asks this to decide whether to say so, and the gate asks
   * it to assert that a fresh player renders the authored picture exactly. */
  CameraView.prototype.isDirector = function () {
    return this.mode === 'director' &&
           this.off[0] === 0 && this.off[1] === 0 && this.off[2] === 0 &&
           this.yaw === 0 && this.pitch === 0 && this.zoom === 1 && this.roll === 0;
  };

  CameraView.prototype.setMode = function (m, cam) {
    if (MODES.indexOf(m) < 0) return this;
    // Entering FREE seeds from wherever the camera currently is, so the picture cannot jump.
    if (m === 'free' && this.mode !== 'free') {
      var c = this.apply(cam);
      var f = norm(sub(c.target, c.pos));
      this.pos = c.pos.slice();
      this.dist = Math.max(0.2, len(sub(c.target, c.pos)));
      this.yaw = Math.atan2(f[0], f[2]);
      this.pitch = Math.asin(clamp(f[1], -1, 1));
    } else if (m !== 'free' && this.mode === 'free') {
      // Leaving free: the ride offset is whatever it was. Aim angles are kept as offsets again.
      this.yaw = 0; this.pitch = 0;
    }
    this.mode = m;
    return this;
  };

  /* THE ONE PLACE the authored camera becomes the shown camera.
   *
   * `cam` is drive()'s output - {pos, target} - and is never mutated. In director mode it is returned
   * untouched, which is what makes the no-view render byte-identical to the picture the MP4 was made
   * from. */
  CameraView.prototype.apply = function (cam, fov) {
    var out = {pos: cam.pos.slice(), target: cam.target.slice(),
               fov: (fov || 0) * this.zoom, roll: this.roll};
    if (this.mode === 'director') {
      out.fov = fov || 0;
      out.roll = 0;
      return out;
    }

    var pos, aimDir, dist;
    if (this.mode === 'free') {
      if (!this.pos) return out;
      pos = this.pos.slice();
      dist = this.dist;
      aimDir = [Math.sin(this.yaw) * Math.cos(this.pitch), Math.sin(this.pitch),
                Math.cos(this.yaw) * Math.cos(this.pitch)];
    } else {
      // RIDE ALONG. The offset is in HIS basis, rebuilt from the authored camera every frame - so an
      // authored cut, an eased move and the speaker-aim turn all carry it without any of them being
      // special-cased here.
      var b = basisOf(cam.pos, cam.target);
      pos = add(cam.pos, add(add(mul(b.right, this.off[0]), mul(b.up, this.off[1])),
                             mul(b.forward, this.off[2])));
      dist = Math.max(0.2, len(sub(cam.target, cam.pos)));
      aimDir = norm(sub(cam.target, pos));
      // the viewer's angular offset, applied on top of the director's aim
      aimDir = rotAxis(aimDir, WORLD_UP, this.yaw);
      var rr = cross(aimDir, WORLD_UP);
      if (len(rr) > 1e-6) aimDir = rotAxis(aimDir, norm(rr), -this.pitch);
    }
    out.pos = pos;
    out.target = add(pos, mul(norm(aimDir), dist));
    return out;
  };

  /* A DRAG, in metres or radians, applied to whichever stop is live.
   *
   * `dx`/`dy` are fractions of the circle's diameter, so sensitivity can be stated as "one sweep across
   * the circle = N metres" - a number about the world rather than a 0-100 slider nobody can reason about.
   * `cam` is the AUTHORED camera for this instant; the frame is rebuilt from the CURRENT shown camera, so
   * after Aim has turned the view, LR and IO still match what is on screen.
   */
  /* A STROKE FIXES ITS AXIS AT THE MOMENT OF PRESS.
   *
   * Recomputing the floor basis on every pointermove looks equivalent and is not: as the camera slides
   * sideways its forward direction rotates towards the unchanged aim point, so "right" rotates with it
   * and a straight drag traces an ARC around the subject instead of translating. Measured: a sideways
   * stroke of 1.12 m also moved 0.40 m forward. Fixing the basis at pointerdown is what every 3D tool
   * does, and it is also what "the frame is recomputed per STROKE" was always supposed to mean.
   */
  CameraView.prototype.beginStroke = function (cam, fov) {
    var shown = this.apply(cam, fov);
    this._fb = floorBasisOf(shown.pos, shown.target);
    return this;
  };
  CameraView.prototype.endStroke = function () { this._fb = null; return this; };

  CameraView.prototype.drag = function (stop, dx, dy, sens, cam, fov, orbit) {
    if (this.mode === 'director') return this;      // director's view is read-only by definition
    var shown = this.apply(cam, fov);
    var fb = this._fb || floorBasisOf(shown.pos, shown.target);
    var world = [0, 0, 0];

    if (stop === 'Aim') {
      if (orbit) return this.orbitBy(dx * sens.turn, -dy * sens.turn, cam, fov);
      this.yaw += dx * sens.turn;
      this.pitch = clamp(this.pitch + (-dy) * sens.turn, -1.45, 1.45);
      return this;
    }
    if (stop === 'LR' || stop === 'LR&IO') world = add(world, mul(fb.right, dx * sens.move));
    if (stop === 'IO' || stop === 'LR&IO') world = add(world, mul(fb.forward, -dy * sens.move));
    if (stop === 'UD') world = add(world, mul(WORLD_UP, -dy * sens.move));
    return this.moveBy(world, cam);
  };

  /* A WORLD delta, stored in whichever frame the current mode uses. This is the single conversion point
   * the suite asserts happens exactly once. */
  CameraView.prototype.moveBy = function (world, cam) {
    if (this.mode === 'free') {
      if (!this.pos) return this;
      this.pos = add(this.pos, world);
      return this;
    }
    var b = basisOf(cam.pos, cam.target);
    this.off = [this.off[0] + dot(world, b.right),
                this.off[1] + dot(world, b.up),
                this.off[2] + dot(world, b.forward)];
    return this;
  };

  /* ORBIT. Aim's second behaviour: the camera travels on an arc and the aim point stays exactly where it
   * is on screen. This is the move that went missing between v2 and v5 - and it is what finally gives the
   * aim point's DISTANCE a visible job, as the orbit radius. */
  CameraView.prototype.orbitBy = function (dYaw, dPitch, cam, fov) {
    var shown = this.apply(cam, fov);
    var pivot = shown.target.slice();
    var v = sub(shown.pos, pivot);
    var r = len(v);
    if (r < 1e-6) return this;
    v = rotAxis(v, WORLD_UP, dYaw);
    var right = cross(norm(mul(v, -1)), WORLD_UP);
    if (len(right) > 1e-6) {
      var cand = rotAxis(v, norm(right), -dPitch);
      // Clamp the pitch so the picture can never invert: keep the camera off the poles.
      var h = clamp(cand[1] / r, -0.985, 0.985);
      var flat = Math.sqrt(Math.max(0, 1 - h * h));
      var fl = Math.sqrt(cand[0] * cand[0] + cand[2] * cand[2]);
      if (fl > 1e-9) v = [cand[0] / fl * flat * r, h * r, cand[2] / fl * flat * r];
    }
    var newPos = add(pivot, v);
    if (this.mode === 'free') {
      this.pos = newPos;
      var f = norm(sub(pivot, newPos));
      this.yaw = Math.atan2(f[0], f[2]);
      this.pitch = Math.asin(clamp(f[1], -1, 1));
      this.dist = r;
      return this;
    }
    // Ride along: express the new position as an offset in the director's basis, and re-aim at the pivot
    // so the subject stays put.
    var b = basisOf(cam.pos, cam.target);
    var d = sub(newPos, cam.pos);
    this.off = [dot(d, b.right), dot(d, b.up), dot(d, b.forward)];
    var want = norm(sub(pivot, newPos));
    var base = norm(sub(cam.target, newPos));
    this.yaw = Math.atan2(want[0], want[2]) - Math.atan2(base[0], base[2]);
    this.pitch = Math.asin(clamp(want[1], -1, 1)) - Math.asin(clamp(base[1], -1, 1));
    return this;
  };

  /* Keep the camera inside the room. A viewer who flies into the void concludes the page is broken, and
   * "press Reset" is not a discoverable answer. */
  CameraView.prototype.clampTo = function (box) {
    if (!box) return this;
    if (this.mode === 'free' && this.pos) {
      this.pos = [clamp(this.pos[0], box.x[0], box.x[1]),
                  clamp(this.pos[1], box.y[0], box.y[1]),
                  clamp(this.pos[2], box.z[0], box.z[1])];
    } else {
      var m = box.maxOffset || 12;
      this.off = [clamp(this.off[0], -m, m), clamp(this.off[1], -m, m), clamp(this.off[2], -m, m)];
    }
    return this;
  };

  /* Compact enough for a URL: a teacher can send "look at this from here". */
  CameraView.prototype.encode = function () {
    if (this.isDirector()) return '';
    var n = function (v) { return Math.round(v * 100) / 100; };
    return [this.mode === 'free' ? 'f' : 'r', n(this.off[0]), n(this.off[1]), n(this.off[2]),
            n(this.yaw), n(this.pitch), n(this.zoom), n(this.roll),
            this.pos ? this.pos.map(n).join('_') : ''].join(',');
  };

  CameraView.decode = function (s) {
    if (!s) return null;
    var p = String(s).split(',');
    if (p.length < 8) return null;
    var v = new CameraView();
    var f = function (i) { var x = parseFloat(p[i]); return isFinite(x) ? x : 0; };
    v.mode = p[0] === 'f' ? 'free' : 'ride';
    v.off = [f(1), f(2), f(3)];
    v.yaw = f(4); v.pitch = f(5);
    v.zoom = f(6) > 0 ? f(6) : 1;
    v.roll = f(7);
    if (p[8]) {
      var q = p[8].split('_').map(parseFloat);
      if (q.length === 3 && q.every(isFinite)) v.pos = q;
    }
    if (v.mode === 'free' && !v.pos) return null;      // an impossible view is refused, not obeyed
    return v;
  };

  CameraView.STOPS = STOPS;
  CameraView.MODES = MODES;
  CameraView._basisOf = basisOf;
  CameraView._floorBasisOf = floorBasisOf;

  global.CameraView = CameraView;
  if (typeof module !== 'undefined' && module.exports) module.exports = CameraView;
})(typeof window !== 'undefined' ? window : this);
