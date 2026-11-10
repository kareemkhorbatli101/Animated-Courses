/* selection.js - v28.3: "what did the viewer click?" answered from the WORLD INDEX, never from glb node names.
 *
 * WHY NOT NODE NAMES. The exact set glb carries the 23 object names the index was built from, but the COMPRESSED
 * (meshopt) glb carries none - measured: 0 named nodes. A resolver that read names would silently fail in the
 * "Interactive, smaller" mode. So the rule is:
 *
 *   1. ray from the camera the picture was ACTUALLY drawn with (the director's, or the viewer's view)
 *   2. the first surface hit, P - occlusion comes free, because the ray stops at what is in front
 *   3. P under an actor root  -> an actor (reserved in v28.3: reported, not selected)
 *   4. otherwise the SMALLEST world-index box (by volume) that contains P, within 2 cm
 *   5. no box contains P      -> nothing (a wall, the floor)
 *
 * Selection is VIEW-LAYER: it never touches drive(), never pauses, never moves the camera.
 */
(function (global) {
  'use strict';

  var EPS = 0.02;          // metres: a hit on a box's skin still counts as inside it

  function volume(o) { return Math.max(1e-9, o.size[0] * o.size[1] * o.size[2]); }

  function contains(o, p, eps) {
    return p[0] >= o.min[0] - eps && p[0] <= o.max[0] + eps &&
           p[1] >= o.min[1] - eps && p[1] <= o.max[1] + eps &&
           p[2] >= o.min[2] - eps && p[2] <= o.max[2] + eps;
  }

  // The smallest index box containing P. Nested parts (a car hood inside a car's box) resolve to the smaller one.
  function objectAt(index, p) {
    var best = null;
    ((index && index.objects) || []).forEach(function (o) {
      if (!o.min || !o.max || !contains(o, p, EPS)) return;
      if (!best || volume(o) < volume(best) ||
          (volume(o) === volume(best) && String(o.name) < String(best.name))) best = o;
    });
    return best;
  }

  function isUnder(node, root) {
    for (var n = node; n; n = n.parent) { if (n === root) return true; }
    return false;
  }

  /* Resolve a point in FRAME FRACTIONS (0..1, origin top-left) against a drawn ScenePlayer.
   * Returns {kind:'object', object, point} | {kind:'actor', actorIndex, point} | {kind:'none', point|null}. */
  function resolvePoint(THREE, player, index, fx, fy) {
    if (!player || !player.scene || !player.camera) return {kind: 'none', point: null, reason: 'not-ready'};
    var ray = new THREE.Raycaster();
    ray.setFromCamera({x: fx * 2 - 1, y: -(fy * 2 - 1)}, player.camera);
    var hits = ray.intersectObjects(player.scene.children, true).filter(function (h) {
      return h.object && h.object.isMesh && h.object.visible !== false;
    });
    if (!hits.length) return {kind: 'none', point: null};
    var h = hits[0], P = [h.point.x, h.point.y, h.point.z];
    var roots = player.roots || [];
    for (var i = 0; i < roots.length; i++) {
      if (roots[i] && isUnder(h.object, roots[i])) return {kind: 'actor', actorIndex: i, point: P};
    }
    var o = objectAt(index, P);
    return o ? {kind: 'object', object: o, point: P} : {kind: 'none', point: P};
  }

  function freeze(o) {
    if (o && typeof o === 'object' && !Object.isFrozen(o)) {
      Object.keys(o).forEach(function (k) { freeze(o[k]); });
      Object.freeze(o);
    }
    return o;
  }
  function copy(o) { return JSON.parse(JSON.stringify(o)); }

  /* The payload a host receives for a selected object: FULL information, as a deep frozen copy.
   * ctx: {index, scene, cards, course, video, t, shot, playing, cam:{pos,target}, fov, director, aspect, hit, screen} */
  function payload(o, ctx) {
    var D = global.Describe, S = global.Spatial, idx = ctx.index;
    var nouns = D ? D.nounsFor(idx) : {}, counts = D ? D.countsFor(idx) : {};
    var inShot = false;
    if (D && ctx.cam) {
      inShot = D.inShot(idx, ctx.cam, ctx.fov, ctx.aspect).some(function (x) { return x.name === o.name; });
    }
    var card = null;
    (ctx.cards || []).forEach(function (c) {
      if (!card && String(c.lemma) === String(o.name)) {
        card = {lemma: c.lemma, label: c.label, ar: c.ar, at: c.at};
      }
    });
    var data = {
      object: copy(o),
      noun: D ? (nouns[String(o.name)] || D.noun(o.name)) : String(o.name),
      prose: D ? D.objectLine(o, nouns, counts) : '',
      where: D ? D.where(o.centre) : '',
      inShot: inShot,
      distance: (S && ctx.cam) ? S.r(S.distance(ctx.cam.pos, o.centre), 3) : null,
      screen: ctx.screen || null,
      card: card,
      lesson: {course: ctx.course, video: ctx.video, t: ctx.t, shot: ctx.shot, playing: !!ctx.playing},
      view: {director: !!ctx.director, camera: ctx.cam ? copy(ctx.cam) : null, fov: ctx.fov}
    };
    if (ctx.hit) data.hit = ctx.hit.slice();
    return freeze(data);
  }

  // Where an object's centre lands on screen, as frame fractions - used to select by id with a `screen` field.
  function project(THREE, camera, centre) {
    var v = new THREE.Vector3(centre[0], centre[1], centre[2]).project(camera);
    return {x: (v.x + 1) / 2, y: (1 - v.y) / 2};
  }

  // THE NAME IS NOT `Selection`. Every browser already has a DOM interface called Selection (what
  // window.getSelection() returns), so taking that name would both shadow it for the host page - a component dropped
  // into someone else's page may break nothing - and make "is it loaded?" unanswerable: the built-in is always there,
  // so the component's loader skipped this file and object selection silently did not exist. Measured, then renamed.
  global.APSelection = {resolvePoint: resolvePoint, objectAt: objectAt, payload: payload, project: project,
                        freeze: freeze, EPS: EPS};
})(typeof window !== 'undefined' ? window : globalThis);
