/* ============================================================
   Practise IELTS Writing (IWR) - nav.js

   Moving around a book of 274 essays in 22 categories. Prev/next at the foot of a page is not
   navigation; it is a corridor. This adds, on every essay page:

     * a category chooser and an essay chooser in the top bar, both jumping straight there
     * previous/next WITHIN the category, and previous/next across the whole book
     * a way back to the category and to the course home from anywhere

   Built from assets/data/index.js - the catalogue the builder already writes - so there is one
   source of truth for what exists and what is live. An essay that is not built yet is listed
   and disabled rather than hidden: a forward control that leads to a 404 is a defect this
   project has shipped before, and so is pretending the rest of the book does not exist.
   ============================================================ */
(function (w, d) {
  'use strict';
  var IWR = w.IWR;
  var el = IWR.el, esc = IWR.esc;

  function rows() {
    return (w.IWR_INDEX || []).slice().sort(function (a, b) { return a.num - b.num; });
  }

  function categories(all) {
    var seen = {}, out = [];
    all.forEach(function (r) {
      if (!seen[r.category_slug]) {
        seen[r.category_slug] = { name: r.category, slug: r.category_slug, n: 0, live: 0 };
        out.push(seen[r.category_slug]);
      }
      seen[r.category_slug].n++;
      if (r.live) seen[r.category_slug].live++;
    });
    return out;
  }

  function href(r, fromCategory) {
    return (fromCategory === r.category_slug ? '' : '../' + r.category_slug + '/')
      + r.slug + '.html';
  }

  IWR.nav = function (E) {
    var all = rows();
    if (!all.length) return;
    var here = all.filter(function (r) { return r.num === E.num; })[0] || E;
    var mine = all.filter(function (r) { return r.category_slug === E.category_slug; });
    var live = all.filter(function (r) { return r.live; });

    /* ---------- the top bar ---------- */
    var bar = d.querySelector('.top .inner');
    if (bar) {
      var pick = el('div', 'navpick');

      var cats = el('select', 'sel sel-sm');
      cats.setAttribute('aria-label', 'Choose a category');
      categories(all).forEach(function (c) {
        var o = el('option', '', esc(c.name) + ' (' + c.live + ' of ' + c.n + ')');
        o.value = c.slug;
        if (c.slug === E.category_slug) o.selected = true;
        if (!c.live) o.disabled = true;          /* listed, but it opens nothing yet */
        cats.appendChild(o);
      });
      cats.addEventListener('change', function () {
        w.location.href = '../' + cats.value + '/index.html';
      });
      pick.appendChild(cats);

      var ess = el('select', 'sel sel-sm');
      ess.setAttribute('aria-label', 'Choose an essay in this category');
      mine.forEach(function (r) {
        var o = el('option', '', r.num + '. ' + esc(r.title)
          + (r.live ? '' : ' — not built yet'));
        o.value = r.slug;
        if (r.num === E.num) o.selected = true;
        if (!r.live) o.disabled = true;
        ess.appendChild(o);
      });
      ess.addEventListener('change', function () { w.location.href = ess.value + '.html'; });
      pick.appendChild(ess);

      var spacer = bar.querySelector('.spacer');
      if (spacer) bar.insertBefore(pick, spacer.nextSibling);
      else bar.appendChild(pick);
    }

    /* ---------- the foot ---------- */
    function at(list, step) {
      var i = -1, k;
      for (k = 0; k < list.length; k++) if (list[k].num === E.num) { i = k; break; }
      if (i < 0) return null;
      for (k = i + step; k >= 0 && k < list.length; k += step) {
        if (list[k].live) return list[k];
      }
      return null;
    }
    var box = el('nav', 'card navfoot');
    box.setAttribute('aria-label', 'Move around the book');
    box.appendChild(el('div', 'sec-n', 'WHERE TO NEXT'));

    var rowCat = el('div', 'btn-row');
    rowCat.appendChild(el('span', 'counter', 'In ' + esc(E.category) + ':'));
    var pc = at(mine, -1), nc = at(mine, 1);
    if (pc) {
      var a1 = el('a', 'btn', '← ' + esc(pc.title));
      a1.href = href(pc, E.category_slug);
      rowCat.appendChild(a1);
    }
    if (nc) {
      var a2 = el('a', 'btn', esc(nc.title) + ' →');
      a2.href = href(nc, E.category_slug);
      rowCat.appendChild(a2);
    }
    if (!pc && !nc) {
      rowCat.appendChild(el('span', 'counter', 'this is the only one built here yet'));
    }
    box.appendChild(rowCat);

    var rowBook = el('div', 'btn-row');
    rowBook.appendChild(el('span', 'counter', 'Across the book:'));
    var pb = at(live, -1), nb = at(live, 1);
    if (pb) {
      var a3 = el('a', 'btn btn-sm', '← ' + pb.num + '. ' + esc(pb.title));
      a3.href = href(pb, E.category_slug);
      rowBook.appendChild(a3);
    }
    if (nb) {
      var a4 = el('a', 'btn btn-sm', nb.num + '. ' + esc(nb.title) + ' →');
      a4.href = href(nb, E.category_slug);
      rowBook.appendChild(a4);
    }
    box.appendChild(rowBook);

    var rowUp = el('div', 'btn-row');
    var up1 = el('a', 'btn btn-sm', 'All of ' + esc(E.category));
    up1.href = 'index.html';
    rowUp.appendChild(up1);
    var up2 = el('a', 'btn btn-sm', 'All 22 categories');
    up2.href = '../index.html';
    rowUp.appendChild(up2);
    rowUp.appendChild(el('span', 'counter',
      'Essay ' + E.num + ' of ' + all.length + ' · ' + live.length + ' built so far'));
    box.appendChild(rowUp);

    var main = d.getElementById('app') || d.body;
    main.appendChild(box);
  };
})(window, document);
