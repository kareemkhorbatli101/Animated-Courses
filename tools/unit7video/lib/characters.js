/* Parametric SVG characters.
   build(kind) returns markup inside a 400x460 viewBox; pose() updates the
   cached nodes each frame for blinking, lip-sync, breathing and head turn.   */
(function (global) {

  const LOOKS = {
    narrator_m: {
      skin: '#d9a173', skinShade: '#c08a5c', hair: '#2c2118', hairLight: '#3d2e20',
      shirt: '#f3f6fb', jacket: '#1f3a5f', jacketDark: '#16293f', tie: '#c9893f',
      style: 'short', beard: true, glasses: false, paper: true
    },
    lina: {
      skin: '#e0ab7f', skinShade: '#c8906a', hair: '#1f1a16', hairLight: '#312821',
      shirt: '#ffffff', jacket: '#1d7d72', jacketDark: '#14574f', tie: null,
      style: 'bob', beard: false, glasses: false, earring: true
    },
    chen: {
      skin: '#eac4a0', skinShade: '#d2a988', hair: '#17141a', hairLight: '#2a2430',
      shirt: '#f7f1e8', jacket: '#a8572c', jacketDark: '#7d3f1f', tie: null,
      style: 'long', beard: false, glasses: true, earring: true
    },
    rami: {
      skin: '#cf9a69', skinShade: '#b47f50', hair: '#241b14', hairLight: '#39291c',
      shirt: '#eaf1f8', jacket: '#37506b', jacketDark: '#27394d', tie: null,
      style: 'short', beard: false, glasses: false
    },
    delgado: {
      skin: '#e0b48d', skinShade: '#c79a74', hair: '#6d6a68', hairLight: '#8a8683',
      shirt: '#ffffff', jacket: '#4a4f58', jacketDark: '#343940', tie: '#8c3b3b',
      style: 'short', beard: true, glasses: true
    },
    huda: {
      skin: '#d9a173', skinShade: '#bd8656', hair: '#1a1512', hairLight: '#2d2520',
      shirt: '#fdfbf6', jacket: '#6b4a8c', jacketDark: '#4d3566', tie: null,
      style: 'long', beard: false, glasses: true, earring: true
    },
    omar: {
      skin: '#c9925f', skinShade: '#ad7847', hair: '#1e1711', hairLight: '#332719',
      shirt: '#dfeaf5', jacket: '#2f4f63', jacketDark: '#203847', tie: null,
      style: 'short', beard: true, glasses: true
    },
    rana: {
      skin: '#d7a076', skinShade: '#bb8457', hair: '#17120f', hairLight: '#2a211b',
      shirt: '#ffffff', jacket: '#2b5f94', jacketDark: '#1d4369', tie: null,
      style: 'bob', beard: false, glasses: false, earring: true
    },
    bilal: {
      skin: '#c08f60', skinShade: '#a37448', hair: '#1c1510', hairLight: '#2f241a',
      shirt: '#f0d9a8', jacket: '#7a6134', jacketDark: '#5a4724', tie: null,
      style: 'short', beard: true, glasses: false
    }
  };

  function hairBack(L) {
    if (L.style === 'short') return '';
    if (L.style === 'bob')
      return `<path fill="${L.hair}" d="M104 196c0-62 38-96 96-96s96 34 96 96c0 44-6 74-14 96-6 16-22 10-20-6 4-28 6-52 2-70-30 14-98 14-128 0-4 18-2 42 2 70 2 16-14 22-20 6-8-22-14-52-14-96z"/>`;
    return `<path fill="${L.hair}" d="M100 200c0-66 40-100 100-100s100 34 100 100c0 56-8 100-16 134-5 20-26 14-23-5 7-44 9-84 4-110-32 16-98 16-130 0-5 26-3 66 4 110 3 19-18 25-23 5-8-34-16-78-16-134z"/>`;
  }

  function hairFront(L) {
    if (L.style === 'short')
      return `<path fill="${L.hair}" d="M114 192c-4-58 32-86 86-86s90 28 86 86c-2-26-14-42-30-48-16 16-78 20-110 2-14 8-28 20-32 46z"/>` +
             `<path fill="${L.hairLight}" opacity=".45" d="M130 150c14-22 44-32 70-28-24 6-48 14-70 28z"/>`;
    if (L.style === 'bob')
      return `<path fill="${L.hair}" d="M110 198c-6-62 34-94 90-94s96 32 90 94c-6-34-18-52-36-60-20 20-86 22-114 4-16 10-26 28-30 56z"/>` +
             `<path fill="${L.hairLight}" opacity=".4" d="M136 136c16-18 42-26 64-24-22 6-44 12-64 24z"/>`;
    return `<path fill="${L.hair}" d="M106 200c-8-66 36-100 94-100s102 34 94 100c-8-38-22-58-42-66-22 22-92 24-122 4-14 12-20 30-24 62z"/>` +
           `<path fill="${L.hairLight}" opacity=".4" d="M134 140c18-20 46-28 68-26-24 6-48 14-68 26z"/>`;
  }

  function build(kind) {
    const L = LOOKS[kind] || LOOKS.narrator_m;
    return `
<g class="ch-sway">
  <!-- torso -->
  <g class="ch-body">
    <path fill="${L.jacketDark}" d="M200 330c-62 0-112 36-120 94-2 14-4 26-4 36h248c0-10-2-22-4-36-8-58-58-94-120-94z"/>
    <path fill="${L.shirt}" d="M200 330c-16 0-30 4-42 10l42 54 42-54c-12-6-26-10-42-10z"/>
    <path fill="${L.jacket}" d="M158 340c-44 16-74 48-80 94h70l24-56z"/>
    <path fill="${L.jacket}" d="M242 340c44 16 74 48 80 94h-70l-24-56z"/>
    ${L.tie ? `<path fill="${L.tie}" d="M200 352l-14 16 10 72 8 14 8-14 10-72z"/>` : ''}
    ${!L.tie ? `<path fill="${L.jacket}" opacity=".5" d="M186 348l14 20 14-20-6-6h-16z"/>` : ''}
  </g>

  <!-- neck -->
  <path fill="${L.skinShade}" d="M176 268h48v62c0 12-48 12-48 0z"/>
  <path fill="${L.skin}" d="M176 268h48v48c-14 10-34 10-48 0z"/>

  ${hairBack(L)}

  <g class="ch-head">
    <!-- ears -->
    <ellipse cx="112" cy="214" rx="15" ry="23" fill="${L.skinShade}"/>
    <ellipse cx="288" cy="214" rx="15" ry="23" fill="${L.skinShade}"/>
    ${L.earring ? `<circle cx="112" cy="236" r="6" fill="#e8c46a"/><circle cx="288" cy="236" r="6" fill="#e8c46a"/>` : ''}
    <!-- face -->
    <path fill="${L.skin}" d="M200 104c50 0 86 36 86 92 0 62-38 106-86 106s-86-44-86-106c0-56 36-92 86-92z"/>
    <path fill="${L.skinShade}" opacity=".35" d="M200 272c-28 0-52-16-68-44 18 20 42 30 68 30s50-10 68-30c-16 28-40 44-68 44z"/>

    <!-- brows -->
    <g class="ch-brows">
      <path class="ch-brow" fill="${L.hair}" d="M146 178c12-9 32-10 44-3l-2 9c-12-6-28-5-40 2z"/>
      <path class="ch-brow" fill="${L.hair}" d="M254 178c-12-9-32-10-44-3l2 9c12-6 28-5 40 2z"/>
    </g>

    <!-- eyes -->
    <g class="ch-eyes">
      <ellipse cx="168" cy="204" rx="19" ry="13" fill="#fdfdfd"/>
      <ellipse cx="232" cy="204" rx="19" ry="13" fill="#fdfdfd"/>
      <circle class="ch-iris" cx="168" cy="204" r="9" fill="#3a2a1d"/>
      <circle class="ch-iris" cx="232" cy="204" r="9" fill="#3a2a1d"/>
      <circle cx="171" cy="201" r="3" fill="#fff" opacity=".9"/>
      <circle cx="235" cy="201" r="3" fill="#fff" opacity=".9"/>
      <!-- lids drop down to blink -->
      <g class="ch-lids">
        <path fill="${L.skin}" d="M149 191h38v-14h-38zM213 191h38v-14h-38z"/>
      </g>
    </g>
    ${L.glasses ? `<g fill="none" stroke="#2a2a2e" stroke-width="4" opacity=".85">
      <rect x="143" y="186" width="50" height="36" rx="12"/>
      <rect x="207" y="186" width="50" height="36" rx="12"/>
      <path d="M193 202h14M143 198l-18-6M257 198l18-6"/></g>` : ''}

    <!-- nose -->
    <path fill="none" stroke="${L.skinShade}" stroke-width="5" stroke-linecap="round" d="M200 214v18c0 5-5 8-9 9"/>

    <!-- mouth -->
    <g class="ch-mouth">
      <path class="ch-lips" fill="#8d3f3f" d="M178 258h44c0 11-10 18-22 18s-22-7-22-18z"/>
      <path class="ch-teeth" fill="#fff" opacity="0" d="M184 259h32c0 5-7 8-16 8s-16-3-16-8z"/>
    </g>
    ${L.beard ? `<path fill="${L.hair}" opacity=".55" d="M152 232c6 36 24 56 48 56s42-20 48-56c-6 44-22 66-48 66s-42-22-48-66z"/>` : ''}
    ${hairFront(L)}
  </g>
</g>`;
  }

  /* -------- per-frame posing ------------------------------------------- */
  function cache(root) {
    return {
      sway: root.querySelector('.ch-sway'),
      head: root.querySelector('.ch-head'),
      lids: root.querySelector('.ch-lids'),
      lips: root.querySelector('.ch-lips'),
      teeth: root.querySelector('.ch-teeth'),
      brows: root.querySelector('.ch-brows'),
      irises: root.querySelectorAll('.ch-iris')
    };
  }

  /* deterministic pseudo-noise so every render of frame N is identical */
  function noise(t, seed) {
    const x = Math.sin(t * 12.9898 + seed * 78.233) * 43758.5453;
    return x - Math.floor(x);
  }

  function pose(c, o) {
    const t = o.t, speak = o.speak || 0;

    // breathing + slow sway
    const sx = Math.sin(t * 0.7) * 5, sy = Math.sin(t * 1.1) * 3;
    c.sway.setAttribute('transform', `translate(${sx.toFixed(2)} ${sy.toFixed(2)})`);

    // head drifts a little, and leans in when speaking
    const hx = Math.sin(t * 0.53 + 1.2) * 7 + (o.lean || 0);
    const hy = Math.cos(t * 0.61) * 4 - speak * 3;
    const hr = Math.sin(t * 0.47) * 1.3;
    c.head.setAttribute('transform',
      `translate(${hx.toFixed(2)} ${hy.toFixed(2)}) rotate(${hr.toFixed(2)} 200 210)`);

    // eyes track slightly
    const ex = Math.sin(t * 0.53 + 1.2) * 2.4;
    c.irises.forEach(function (ir) {
      ir.setAttribute('transform', `translate(${ex.toFixed(2)} ${(hy * .2).toFixed(2)})`);
    });

    // blink: short closures on a drifting cycle
    const cyc = 3.4 + noise(Math.floor(t / 3.4), 7) * 2.6;
    const ph = (t % cyc) / cyc;
    let blink = 0;
    if (ph > 0.94) blink = Math.sin((ph - 0.94) / 0.06 * Math.PI);
    c.lids.setAttribute('transform', `translate(0 ${(blink * 27).toFixed(2)})`);

    // lip-sync: mouth opens while a word is being spoken, with jitter so it
    // reads as speech rather than a metronome
    let open = 0;
    if (speak > 0) {
      const j = noise(Math.floor(t * 14), 3) * 0.55 + noise(Math.floor(t * 9), 11) * 0.45;
      open = speak * (0.35 + 0.65 * j);
    }
    const ry = 3 + open * 17, w = 22 - open * 3;
    c.lips.setAttribute('d',
      `M${200 - w} 256h${w * 2}c0 ${(ry + 4).toFixed(1)} -${(w / 2).toFixed(1)} ${(ry + 7).toFixed(1)} -${w} ${(ry + 7).toFixed(1)}s-${w} -${(ry + 2).toFixed(1)} -${w} -${(ry + 7).toFixed(1)}z`);
    c.teeth.setAttribute('opacity', (open > 0.35 ? (open - 0.35) * 1.2 : 0).toFixed(2));

    // brows lift a touch on stressed speech
    const bl = speak > 0 ? noise(Math.floor(t * 3), 5) * 5 : 0;
    c.brows.setAttribute('transform', `translate(0 ${(-bl).toFixed(2)})`);
  }

  global.CHAR = { build: build, cache: cache, pose: pose, LOOKS: LOOKS };
})(window);
