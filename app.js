// AnimatedEverything - the catalogue page. Engineered by Mohamad Khorbatli.
//
// v28.3: A HOST OF THE LESSON PLAYER. Everything a visitor used on this page - the catalogue tree, the stage, the
// badge, subtitles and cards, the voice, the script, the camera, the assistant - is player/animated_player.js, the
// same component any other page can mount. It was moved there, not rewritten: its body is this file's previous
// contents with every page global replaced by a service the host provides. This file now provides those services
// the way this site always has:
//
//   * the ADDRESS BAR  - the player's shareable state (c, v, speech, subs, mode, cam) is written here with
//                        history.replaceState, and read from here at boot
//   * STORAGE          - the same browser key as before (animatedeverything:state), so returning visitors keep their
//                        choices
//   * the HEADER       - the title and the course tally
//   * the SIZE MODES   - theatre and full page, which are this site's and not an embedding's
//   * DEBUG HOOKS      - window.__overlay, __part, __scene, __askPaneRef, as this site's gates have always read them
(function () {
  'use strict';

  // ================================================================= size modes
  function sizeReduce(state, action) {
    if (action === 'escape') return 'default';
    if (action === 'toggle_theatre') return state === 'theatre' ? 'default' : 'theatre';
    if (action === 'toggle_full') return state === 'full' ? 'default' : 'full';
    return state;
  }

  var host = document.getElementById('player');
  var size = 'default';

  var player = window.__sitePlayer = AnimatedPlayer.create(host, {
    base: new URL('./', location.href).href,
    ui: {
      // The stage's reserve under it, as this page always had it: 210 px of the window, of which 53 px is the header
      // above the player. The component reserves the rest.
      stageReserve: 157
    },
    preload: ['ai'],
    services: {
      debug: true,
      store: {
        get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
        set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) { /* private mode, or full */ } }
      },
      // THE URL DESCRIBES WHAT IS ON SCREEN NOW. The player says what that is; this page is the one that writes it,
      // with replaceState (never pushState: a selector change is not a place to go Back to).
      url: {
        read: function () { return new URLSearchParams(location.search); },
        write: function (q) { history.replaceState(null, '', '?' + q); },
        href: function () { return location.href; }
      },
      title: function (t) { document.title = t; },
      tally: function (s) { document.getElementById('tally').textContent = s; }
    }
  });

  function setSize(s) {
    size = s;
    document.body.classList.toggle('full', s === 'full');
    player.ui.set({size: s});
    var bt = player.hostSlot('bar');
    if (bt) {
      var t = bt.querySelector('#btheatre'), f = bt.querySelector('#bfull');
      if (t) t.setAttribute('aria-pressed', s === 'theatre' ? 'true' : 'false');
      if (f) f.setAttribute('aria-pressed', s === 'full' ? 'true' : 'false');
    }
  }

  player.mounted.then(function () {
    var slot = player.hostSlot('bar');
    slot.appendChild(document.getElementById('sitebar').content.cloneNode(true));
    slot.querySelector('#btheatre').onclick = function () { setSize(sizeReduce(size, 'toggle_theatre')); };
    slot.querySelector('#bfull').onclick = function () { setSize(sizeReduce(size, 'toggle_full')); };
  });

  // The page's keys. The size modes are this page's own. s, / and Space always worked anywhere on this page, so when
  // focus is not inside the player they are handed to it; inside it, the player's own focus-scoped keys act.
  document.addEventListener('keydown', function (e) {
    var t = (e.composedPath && e.composedPath()[0]) || e.target;
    if (t && (/input|select|textarea/i.test(t.tagName) || t.isContentEditable)) return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    var inPlayer = host.contains(e.target);
    if (e.key === 'Escape') setSize(sizeReduce(size, 'escape'));
    else if (e.key === 't') setSize(sizeReduce(size, 'toggle_theatre'));
    else if (e.key === 'f') setSize(sizeReduce(size, 'toggle_full'));
    else if (inPlayer) return;
    else if (e.key === 's') {
      var ui = player.ui.get();
      if (ui.panes.script.allowed) player.ui.set({panes: {script: {open: !ui.panes.script.open}}});
    } else if (e.key === '/') { e.preventDefault(); player.focus('filter'); }
    else if (e.key === ' ') {
      var st = player.state();
      if (st.lifecycle !== 'loading') { e.preventDefault(); if (st.playing) player.pause(); else player.play(); }
    }
  });
})();
