/* The one place a visitor's API key is kept, for the whole site.
 *
 * WHY A SHARED MODULE AND NOT A VARIABLE IN THE PANE. The key is entered once and has to be
 * found again by every other entry point: the button on the home page, and later the Ask
 * pane inside a lesson. If each stored its own, a learner who typed the key on the front
 * page would be asked for it again on an exercise, which is the quickest way to make a
 * feature feel broken. Everything that needs the key asks THIS file, and anything that
 * needs it and does not find it opens the same prompt.
 *
 * WHOSE KEY IT IS. The visitor's own, from Google AI Studio. It is sent to Google and
 * nowhere else - learnactively.com is a static site with no server to send it to, which is
 * what makes "bring your own key" honest here rather than a way of collecting keys.
 *
 * WHY sessionStorage BY DEFAULT. It is gone when the tab closes, which is the right
 * default for a secret typed on a shared or public machine - a school computer, an
 * internet cafe. sessionStorage is also per-TAB, so a learner who opens a course in a new
 * tab would be asked again; that is the price of the safe default, and it is why
 * "remember on this device" exists and says exactly what it does. Nothing is ever written
 * to a cookie, so the key is never attached to a request by the browser automatically.
 *
 * WHAT THIS FILE WILL NOT DO: log the key, put it in a URL, put it in the DOM, send it to
 * any origin, or keep it after `forget()`. Both stores are cleared, not just the one in
 * use, so "forget" means forgotten.
 */
(function (root) {
  'use strict';

  var KEY = 'la.gemini.key';
  var WHERE = 'la.gemini.where';          // 'session' | 'device', so the UI can say which

  function safe(fn, dflt) {               // storage throws in private mode and with cookies blocked
    try { return fn(); } catch (e) { return dflt; }
  }

  var Keyring = {

    /* The key, or '' - looking in both stores, device first so a remembered key wins. */
    get: function () {
      return safe(function () {
        return (root.localStorage && root.localStorage.getItem(KEY)) ||
               (root.sessionStorage && root.sessionStorage.getItem(KEY)) || '';
      }, '');
    },

    has: function () { return !!Keyring.get(); },

    where: function () {
      return safe(function () {
        if (root.localStorage && root.localStorage.getItem(KEY)) return 'device';
        if (root.sessionStorage && root.sessionStorage.getItem(KEY)) return 'session';
        return '';
      }, '');
    },

    /* remember === true puts it in localStorage (survives the tab and the browser closing). */
    set: function (value, remember) {
      var v = String(value == null ? '' : value).trim();
      if (!v) return false;
      return safe(function () {
        Keyring.forget();
        if (remember) {
          root.localStorage.setItem(KEY, v);
          root.localStorage.setItem(WHERE, 'device');
        } else {
          root.sessionStorage.setItem(KEY, v);
          root.sessionStorage.setItem(WHERE, 'session');
        }
        return true;
      }, false);
    },

    /* BOTH stores, always. A forget that leaves a copy behind is a lie. */
    forget: function () {
      safe(function () {
        if (root.localStorage) { root.localStorage.removeItem(KEY); root.localStorage.removeItem(WHERE); }
        if (root.sessionStorage) { root.sessionStorage.removeItem(KEY); root.sessionStorage.removeItem(WHERE); }
        return true;
      }, false);
    },

    /* Enough of the key to recognise it, never enough to use it. Shown in the UI so a
     * person can tell WHICH key is stored without the key being on screen. */
    hint: function () {
      var k = Keyring.get();
      return k ? (k.slice(0, 4) + '…' + k.slice(-4)) : '';
    },

    /* A shape check only, offered before a request is spent. Google's keys are long and
     * alphanumeric with - and _; this rejects an empty box or a pasted sentence, and it
     * deliberately does NOT claim the key is valid - only the API can say that. */
    looksLikeAKey: function (v) {
      v = String(v == null ? '' : v).trim();
      return v.length >= 30 && /^[A-Za-z0-9_\-]+$/.test(v);
    }
  };

  root.Keyring = Keyring;
})(window);
