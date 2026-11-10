/* TRACK B - spatial relations in the browser, mirroring engine/spatial.py operation for operation.
 *
 * This is the SECOND copy of a truth, which is the arrangement that has bitten this project before (the
 * mouth in E5, the clip phase in P2, the wire-size table in v27.36). It is allowed here for the same
 * reason the interpreter is: the page must answer "what is left of Maher" at an arbitrary time, from a
 * camera the viewer may have moved, and it cannot call Python to do it.
 *
 * So it is allowed ONLY with a parity gate, and the gate compares STRINGS - the finished sentence - not
 * intermediate numbers, because the sentence is what a person and a model actually receive.
 *
 * Arithmetic order is copied deliberately, expression for expression. Two IEEE-754 doubles put through
 * the same operations in the same order are bit-identical in both languages; put through mathematically
 * equal but differently ordered ones, they are not.
 */
(function (root) {
  'use strict';

  var WORLD_UP = [0.0, 1.0, 0.0];
  var DEAD_BAND = 0.15;
  var NEXT_TO = 1.2;

  function sub(a, b) { return [a[0] - b[0], a[1] - b[1], a[2] - b[2]]; }
  function dot(a, b) { return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]; }
  function cross(a, b) {
    return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  }
  function len(a) { return Math.sqrt(dot(a, a)); }
  function norm(a) {
    var n = len(a);
    return n < 1e-9 ? [0.0, 0.0, 1.0] : [a[0] / n, a[1] / n, a[2] / n];
  }

  // ROUNDING IS PART OF THE CONTRACT. Python's round() is round-half-to-EVEN and JavaScript's toFixed
  // is not, so the two would disagree on exactly the values a person is most likely to hit (2.125 m).
  // Rather than reimplement banker's rounding twice, both sides use this one rule - multiply, add a
  // half, floor - which is plain IEEE arithmetic and therefore reproduces exactly on both.
  // Inputs here are distances and depths; negatives are handled so the rule is total, not almost-total.
  function r(x, places) {
    var p = Math.pow(10, places);
    return x < 0 ? -Math.floor(-x * p + 0.5) / p : Math.floor(x * p + 0.5) / p;
  }

  function basis(cam) {
    var f = norm(sub(cam.target, cam.pos));
    var rt = cross(f, WORLD_UP);
    rt = len(rt) < 1e-6 ? [1.0, 0.0, 0.0] : norm(rt);
    return { forward: f, right: rt, up: cross(rt, f) };
  }

  function toCamera(point, cam) {
    var b = basis(cam);
    var d = sub(point, cam.pos);
    return [dot(d, b.right), dot(d, b.up), dot(d, b.forward)];
  }

  function side(a, b, cam, dead) {
    if (dead === undefined) dead = DEAD_BAND;
    var da = toCamera(a, cam)[0] - toCamera(b, cam)[0];
    if (Math.abs(da) <= dead) return 'level with';
    return da > 0 ? 'right' : 'left';
  }

  function depth(a, b, cam, dead) {
    if (dead === undefined) dead = DEAD_BAND;
    var da = toCamera(a, cam)[2] - toCamera(b, cam)[2];
    if (Math.abs(da) <= dead) return 'the same distance as';
    return da > 0 ? 'farther' : 'nearer';
  }

  // TRUE world-up, never the screen's - a tilted camera must not be able to put the floor above a shelf.
  function height(a, b, dead) {
    if (dead === undefined) dead = DEAD_BAND;
    var d = a[1] - b[1];
    if (Math.abs(d) <= dead) return 'level with';
    return d > 0 ? 'above' : 'below';
  }

  function distance(a, b) { return len(sub(a, b)); }
  function near(a, b, limit) { return distance(a, b) <= (limit === undefined ? NEXT_TO : limit); }

  // WHERE A POINT LANDS IN THE PICTURE. [x, y, depth, half] or null if it is behind the camera.
  // x and y run -1..+1 to the frame's edges; `half` is the half-height of the frame in metres at that
  // depth, which is what turns a real height into a fraction of the screen. Mirrors spatial.screen.
  function screen(point, cam, fovDeg, aspect) {
    var c = toCamera(point, cam);
    if (c[2] <= 0.01) return null;
    var half = Math.tan((fovDeg * Math.PI / 180.0) / 2.0) * c[2];
    return [c[0] / (half * (aspect || 16.0 / 9.0)), c[1] / half, c[2], half];
  }

  function relate(a, b, cam) {
    return {
      side: side(a, b, cam), depth: depth(a, b, cam), height: height(a, b),
      distance: r(distance(a, b), 2), near: near(a, b)
    };
  }

  var OPPOSITE = {
    'left': 'right', 'right': 'left', 'level with': 'level with',
    'nearer': 'farther', 'farther': 'nearer',
    'the same distance as': 'the same distance as',
    'above': 'below', 'below': 'above'
  };

  // Deliberately coarse, and deliberately said so: a box is not the object, so a thing can be reported
  // visible when only the air around it is in frame.
  function inView(boxMin, boxMax, cam, fovDeg, aspect) {
    if (aspect === undefined) aspect = 16.0 / 9.0;
    var b = basis(cam);
    var th = Math.tan((fovDeg * Math.PI / 180.0) / 2.0);
    var lo = boxMin, hi = boxMax;
    for (var i = 0; i < 2; i++) {
      for (var j = 0; j < 2; j++) {
        for (var k = 0; k < 2; k++) {
          var p = [(i ? hi : lo)[0], (j ? hi : lo)[1], (k ? hi : lo)[2]];
          var d = sub(p, cam.pos);
          var z = dot(d, b.forward);
          if (z <= 0.01) continue;
          if (Math.abs(dot(d, b.up)) <= th * z && Math.abs(dot(d, b.right)) <= th * z * aspect) {
            return true;
          }
        }
      }
    }
    return false;
  }

  root.Spatial = {
    WORLD_UP: WORLD_UP, DEAD_BAND: DEAD_BAND, NEXT_TO: NEXT_TO, OPPOSITE: OPPOSITE,
    r: r, basis: basis, toCamera: toCamera, side: side, depth: depth, height: height,
    distance: distance, near: near, relate: relate, inView: inView, screen: screen
  };
})(typeof window !== 'undefined' ? window : globalThis);
