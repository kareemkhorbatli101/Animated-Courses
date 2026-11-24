#!/usr/bin/env node
/* Build a frame-accurate timeline from the lesson content plus the measured
   speech durations in voice.json.
   Usage: node timeline.js <content.json> <outdir>                           */
const fs = require('fs');
const path = require('path');

const FPS = 25, W = 1920, H = 1080;

const P = {
  titleLead: 1.3, titleTail: 1.5,
  header: 1.7,
  lead: 0.18,
  gapPreview: 0.55,
  gapTeaser: 1.35,
  gapVocab: 0.8,
  gapLine: 0.42,
  gapAr: 0.3,
  chapter: 2.3,
  gapTake: 1.7,
  gapQ: 1.5,
  gapDisc: 2.6,
  outro: 3.4
};

function main() {
  const [, , contentPath, outdir] = process.argv;
  const c = JSON.parse(fs.readFileSync(contentPath, 'utf8'));
  const voice = JSON.parse(fs.readFileSync(path.join(outdir, 'voice.json'), 'utf8'));
  const U = {};
  voice.utterances.forEach(u => { U[u.id] = u; });

  const segs = [];
  const audio = [];
  let t = 0;

  /* push a segment; `utt` audio starts `lead` seconds into it */
  function seg(type, dur, data, utt, lead) {
    const s = { type, t0: round(t), dur: round(dur), data: data || {} };
    if (utt && U[utt]) {
      const at = round(t + (lead === undefined ? P.lead : lead));
      s.utt = utt;
      s.audioAt = at;
      s.words = U[utt].words;
      s.audioDur = U[utt].dur;
      audio.push({ file: U[utt].file, at, dur: U[utt].dur });
    }
    segs.push(s);
    t = round(t + dur);
    return s;
  }
  const d = id => (U[id] ? U[id].dur : 0);
  const round = n => Math.round(n * 1000) / 1000;

  /* ---------------- shared opening ---------------- */
  seg('title', P.titleLead + d('title') + P.titleTail, {
    number: c.number, title: c.title, titleAr: c.titleAr,
    unit: c.unit, level: c.level, course: c.course,
    setting: c.setting || null, settingAr: c.settingAr || null,
    speakers: c.speakers || null
  }, 'title', P.titleLead);

  /* ---------------- preview ---------------- */
  seg('header', P.header, {
    en: c.preview.headline, ar: c.preview.headlineAr, step: '1', icon: 'question'
  });
  c.preview.lines.forEach((ln, i) => {
    seg('preview', P.lead + d(`pv${i}`) + P.gapPreview,
      { en: ln.en, ar: ln.ar, icon: ln.icon, index: i, total: c.preview.lines.length },
      `pv${i}`);
  });
  seg('teaser', P.lead + d('pvt') + P.gapTeaser,
    { en: c.preview.teaser.en, ar: c.preview.teaser.ar }, 'pvt');

  /* ---------------- vocabulary ---------------- */
  seg('header', P.header, {
    en: c.vocab.headline, ar: c.vocab.headlineAr, step: '2', icon: 'invoice'
  });
  c.vocab.items.forEach((it, i) => {
    const hasAr = !!U[`vc${i}a`];
    const dur = P.lead + d(`vc${i}`) + (hasAr ? P.gapAr + d(`vc${i}a`) : 0) + P.gapVocab;
    const s = seg('vocab', dur,
      { ...it, index: i, total: c.vocab.items.length }, `vc${i}`);
    if (hasAr) {
      const at = round(s.t0 + P.lead + d(`vc${i}`) + P.gapAr);
      s.utt2 = `vc${i}a`; s.audio2At = at; s.words2 = U[`vc${i}a`].words;
      s.audio2Dur = U[`vc${i}a`].dur;
      audio.push({ file: U[`vc${i}a`].file, at, dur: U[`vc${i}a`].dur });
    }
  });

  /* ---------------- body ---------------- */
  if (c.kind === 'reading') {
    c.paragraphs.forEach((para, pi) => {
      seg('chapter', P.chapter, {
        en: para.chapter, ar: para.chapterAr, scene: para.scene,
        index: pi, total: c.paragraphs.length
      });
      para.lines.forEach((ln, li) => {
        seg('line', P.lead + d(`p${pi}l${li}`) + P.gapLine, {
          en: ln.en, ar: ln.ar, cues: ln.cues || [],
          scene: para.scene, chapter: para.chapter,
          para: pi, line: li, lastOfPara: li === para.lines.length - 1
        }, `p${pi}l${li}`);
      });
    });
  } else {
    c.dialogue.forEach((ln, i) => {
      const sp = c.speakers[ln.sp];
      const dEn = d(`d${i}`), dAr = d(`d${i}a`);
      const dur = P.lead + dEn + P.gapAr + dAr + P.gapLine;
      const s = seg('turn', dur, {
        sp: ln.sp, speaker: sp, en: ln.en, ar: ln.ar,
        cues: ln.cues || [], mood: ln.mood || 'neutral',
        phrase: ln.phrase || null, card: ln.card || null,
        index: i, total: c.dialogue.length
      }, `d${i}`);
      const at = round(s.t0 + P.lead + dEn + P.gapAr);
      s.utt2 = `d${i}a`; s.audio2At = at; s.words2 = U[`d${i}a`].words;
      s.audio2Dur = dAr;
      audio.push({ file: U[`d${i}a`].file, at, dur: dAr });
    });
  }

  /* ---------------- takeaway ---------------- */
  {
    const hasAr = !!U['takea'];
    const dur = P.lead + d('take') + (hasAr ? P.gapAr + d('takea') : 0) + P.gapTake;
    const s = seg('takeaway', dur,
      { en: c.takeaway.en, ar: c.takeaway.ar, icon: c.takeaway.icon }, 'take');
    if (hasAr) {
      const at = round(s.t0 + P.lead + d('take') + P.gapAr);
      s.utt2 = 'takea'; s.audio2At = at; s.words2 = U['takea'].words;
      s.audio2Dur = d('takea');
      audio.push({ file: U['takea'].file, at, dur: d('takea') });
    }
  }

  /* ---------------- questions ---------------- */
  seg('header', P.header, {
    en: c.questions.headline, ar: c.questions.headlineAr, step: '3', icon: 'question'
  });
  c.questions.items.forEach((it, i) => {
    seg('question', P.lead + d(`q${i}`) + P.gapQ, {
      en: it.en, ar: it.ar, index: i, total: c.questions.items.length,
      all: c.questions.items
    }, `q${i}`);
  });

  /* ---------------- discussion + outro ---------------- */
  seg('discussion', P.lead + d('disc') + P.gapDisc, {
    en: c.discussion.en, ar: c.discussion.ar,
    headline: c.discussion.headline, headlineAr: c.discussion.headlineAr
  }, 'disc');

  seg('outro', P.outro, {
    title: c.title, number: c.number, course: c.course,
    takeaway: c.takeaway.en, takeawayAr: c.takeaway.ar
  });

  const duration = round(t);
  const out = {
    id: c.id, kind: c.kind, fps: FPS, w: W, h: H,
    duration, frames: Math.ceil(duration * FPS),
    accent: c.accent || 'amber',
    meta: {
      unit: c.unit, number: c.number, title: c.title, titleAr: c.titleAr,
      level: c.level, course: c.course, speakers: c.speakers || null,
      narratorLook: (c.narrator && c.narrator.look) || 'narrator_m'
    },
    segments: segs,
    audio
  };
  const p = path.join(outdir, 'timeline.json');
  fs.writeFileSync(p, JSON.stringify(out, null, 1));
  const mm = Math.floor(duration / 60), ss = (duration % 60).toFixed(1).padStart(4, '0');
  console.log(`[timeline] ${c.id}: ${segs.length} segments, ${mm}:${ss}, ` +
              `${out.frames} frames @ ${FPS}fps -> ${p}`);
}

main();
