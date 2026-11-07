/* icons.js — line-art icons keyed by CONCEPT, not by picture.
 *
 * The point is F50: the same idea takes the same icon in all twelve
 * units, so the icon becomes a retrieval cue rather than decoration.
 * `cost`, `deadline`, `agreement`, `risk` and `deliverable` recur in every
 * unit of this book under different subject matter - a quotation, an
 * order, a contract term, an inspection, a proposal - and this is what
 * makes that visible. They are the five things a business conversation in
 * any language keeps coming back to.
 *
 * Drawn in a 24x24 box, stroke only, currentColor, so an icon inherits
 * the colour of whatever it sits in and needs no second palette.
 */
(function (root) {
  "use strict";
  var P = {
    /* the five that recur across every unit */
    cost:        'M4 13l7-7a2 2 0 011.4-.6H19a1 1 0 011 1v5.6a2 2 0 01-.6 1.4l-7 7a2 2 0 01-2.8 0l-5-5a2 2 0 010-2.8zM16.5 8.5h.01',
    deadline:    'M4 6h16v14H4zM4 10h16M8 3v4M16 3v4M12 13v3M12 17.5h.01',
    agreement:   'M6 3h9l4 4v14H6zM15 3v4h4M9 13l2 2 4-4',
    risk:        'M12 3l8 3v6c0 5-3.5 8.6-8 9.6-4.5-1-8-4.6-8-9.6V6zM12 9v4M12 16h.01',
    deliverable: 'M3 8l9-5 9 5v8l-9 5-9-5zM3 8l9 5 9-5M12 13v8',
    /* method and reasoning */
    comparison:  'M12 4v16M4 8h5M4 14h5M15 8h5M15 14h5',
    evidence:    'M5 4h10l4 4v12H5zM15 4v4h4M8 13h8M8 17h5',
    sequence:    'M4 6h5v4H4zM15 6h5v4h-5zM4 14h5v4H4zM9 8h6M9 16h6M12 10v4',
    cause:       'M4 16c3-9 6-9 9 0s6 9 7 0',
    error:       'M12 3l9 16H3zM12 9v5M12 17h.01',
    correct:     'M4 13l5 5L20 7',
    /* language */
    word:        'M5 19l5-14h4l5 14M8 14h8',
    sound:       'M4 9v6h4l5 4V5L8 9zM17 9a5 5 0 010 6',
    write:       'M4 20h16M5 16l10-10 3 3-10 10H5z',
    listen:      'M4 12a8 8 0 1116 0v5a3 3 0 01-3 3h-1M4 12v5a3 3 0 003 3h1',
    speak:       'M12 3a4 4 0 014 4v5a4 4 0 01-8 0V7a4 4 0 014-4zM5 11a7 7 0 0014 0M12 18v3',
    read:        'M12 6c-3-2-6-2-8-1v12c2-1 5-1 8 1 3-2 6-2 8-1V5c-2-1-5-1-8 1zM12 6v12',
    /* study and review */
    recall:      'M4 12a8 8 0 108-8v3M12 4L9 7l3 3M12 8v4l3 2',
    spacing:     'M4 12h3M11 12h2M17 12h3M5 8v8M19 8v8',
    card:        'M4 6h12v12H4zM8 3h12v12',
    /* the workplace */
    invoice:     'M6 2h12v20l-3-2-3 2-3-2-3 2zM9 7h6M9 11h6M9 15h3',
    delivery:    'M3 7h11v8H3zM14 10h4l3 3v2h-7zM7.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3M17.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3',
    supplier:    'M3 21V10l5-3v3l5-3v3l5-3v14zM8 17h2M14 17h2',
    approval:    'M12 3a9 9 0 100 18 9 9 0 000-18zM8 12l3 3 5-5',
    escalation:  'M12 20V7M7 12l5-5 5 5M5 20h14',
    margin:      'M19 5L5 19M7 7h.01M17 17h.01M5.5 7a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0M15.5 17a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0',
    /* general */
    time:        'M12 21a9 9 0 110-18 9 9 0 010 18zM12 7v5l3 2',
    place:       'M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11zM12 8a2 2 0 100 4 2 2 0 000-4z',
    people:      'M8 11a3 3 0 100-6 3 3 0 000 6zM3 20v-1a5 5 0 015-5M16 11a3 3 0 100-6 3 3 0 000 6zM13 20v-1a5 5 0 015-5h1',
    money:       'M12 3v18M8 7h6a3 3 0 010 6H9a3 3 0 000 6h7',
    question:    'M9 9a3 3 0 115 2c-1 1-2 1.5-2 3M12 18h.01M12 21a9 9 0 110-18 9 9 0 010 18z'
  };

  /* A concept may be named by several words; map them to one drawing so
     a data file can say what it means rather than what to draw. The
     business synonyms matter more here than in an academic book, because
     the same idea arrives as a quote, a PO, a tender and an estimate. */
  var ALIAS = {
    price: 'cost', quote: 'cost', quotation: 'cost', estimate: 'cost',
      charge: 'cost', rate: 'cost', budget: 'cost',
    'lead-time': 'deadline', leadtime: 'deadline', due: 'deadline',
      schedule: 'deadline', date: 'deadline', urgent: 'deadline',
    contract: 'agreement', terms: 'agreement', deal: 'agreement',
      signed: 'agreement', clause: 'agreement', negotiation: 'agreement',
    hazard: 'risk', exposure: 'risk', liability: 'risk', delay: 'risk',
      problem: 'risk', complaint: 'risk',
    goods: 'deliverable', shipment: 'deliverable', consignment: 'deliverable',
      output: 'deliverable', product: 'deliverable', stock: 'deliverable',
    compare: 'comparison', contrast: 'comparison', options: 'comparison',
      tender: 'comparison', shortlist: 'comparison',
    proof: 'evidence', source: 'evidence', cite: 'evidence', record: 'evidence',
      document: 'evidence', reference: 'evidence',
    order: 'sequence', process: 'sequence', steps: 'sequence',
      workflow: 'sequence', stage: 'sequence',
    effect: 'cause', reason: 'cause', because: 'cause', mechanism: 'cause',
    mistake: 'error', wrong: 'error', defect: 'error',
    fix: 'correct', right: 'correct', check: 'correct', resolved: 'correct',
    vocabulary: 'word', affix: 'word', spelling: 'word', grammar: 'word',
    audio: 'sound', pronounce: 'sound', hear: 'listen',
    essay: 'write', email: 'write', paragraph: 'write', memo: 'write',
      report: 'write', proposal: 'write', minutes: 'write', letter: 'write',
    passage: 'read', text: 'read', article: 'read', notice: 'read',
    memory: 'recall', test: 'recall', review: 'spacing',
    cards: 'card', term: 'card',
    clock: 'time', duration: 'time',
    map: 'place', site: 'place', city: 'place', port: 'place',
      warehouse: 'place', branch: 'place',
    audience: 'people', group: 'people', team: 'people', staff: 'people',
      client: 'people', customer: 'people', colleague: 'people',
    payment: 'money', invoiced: 'money', cash: 'money', currency: 'money',
    bill: 'invoice', 'purchase-order': 'invoice', po: 'invoice', receipt: 'invoice',
    shipping: 'delivery', logistics: 'delivery', dispatch: 'delivery',
      transport: 'delivery', courier: 'delivery',
    vendor: 'supplier', manufacturer: 'supplier', factory: 'supplier',
      producer: 'supplier', workshop: 'supplier',
    approved: 'approval', 'sign-off': 'approval', authorise: 'approval',
      permission: 'approval', licence: 'approval', compliance: 'approval',
    escalate: 'escalation', raise: 'escalation', 'follow-up': 'escalation',
      chase: 'escalation', remind: 'escalation',
    percentage: 'margin', discount: 'margin', profit: 'margin', markup: 'margin',
    ask: 'question', hint: 'question', explain: 'question'
  };

  function resolve(name) {
    var k = String(name || "").toLowerCase();
    return P[k] ? k : (ALIAS[k] && P[ALIAS[k]] ? ALIAS[k] : null);
  }

  /* svg(name, size) -> markup, or "" when the concept is unknown, so a
     caller can tell the difference between "no icon" and "wrong icon". */
  function svg(name, size) {
    var k = resolve(name);
    if (!k) return "";
    var s = size || 20;
    return '<svg class="icon" width="' + s + '" height="' + s + '" viewBox="0 0 24 24" ' +
      'fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" ' +
      'stroke-linejoin="round" aria-hidden="true"><path d="' + P[k] + '"/></svg>';
  }

  /* A labelled badge: icon plus the concept, for the top of an exercise. */
  function badge(doc, name, label) {
    var k = resolve(name);
    if (!k) return null;
    var b = doc.createElement("span");
    b.className = "icon-badge";
    b.innerHTML = svg(k, 18) + "<span>" + (label || k) + "</span>";
    return b;
  }

  root.Icons = { svg: svg, badge: badge, resolve: resolve,
                 names: Object.keys(P), aliases: Object.keys(ALIAS) };
})(window);
