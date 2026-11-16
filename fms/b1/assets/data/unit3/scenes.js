/* Unit 3 — the acted scenes. Every line is the book's own, from
   Appendix A (Audio Scripts) or the key's Spoken Sample Answer. Each subtitle is
   LOOKED UP from ar.js through FMS.ar(), so a line and its Arabic cannot drift
   apart; gates/fms_ar.py fails the build on a line whose lookup returns nothing. */
FMS.scene('u3-wb', {
  set: 'office',
  cast: {
    valentina: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.22, 0.52] }; }(FMS.art.cast.valentina)),
    dawit: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.44, 0.52] }; }(FMS.art.cast.dawit))
  },
  lines: [
    { who: 'valentina', cam: { shot: 'mid' }, en: 'Let me be direct with you about something. The hardest questions are not '
        + 'the hostile ones — the hardest questions are the ones that are completely '
        + 'fair and we do not yet have a full answer to. A journalist who asks "when '
        + 'will the next phase be funded?" is asking a legitimate question. Our job '
        + 'is not to dodge it — our job is to give the most honest and complete '
        + 'answer that the official government position allows, and to be clear when '
        + 'we are at the limit of what we can say.',
      ar: FMS.ar('Let me be direct with you about something. The hardest questions are not '
        + 'the hostile ones — the hardest questions are the ones that are completely '
        + 'fair and we do not yet have a full answer to. A journalist who asks "when '
        + 'will the next phase be funded?" is asking a legitimate question. Our job '
        + 'is not to dodge it — our job is to give the most honest and complete '
        + 'answer that the official government position allows, and to be clear when '
        + 'we are at the limit of what we can say.') || '' },
    { who: 'dawit', en: 'How do you handle that limit professionally?',
      ar: FMS.ar('How do you handle that limit professionally?') || '' },
    { who: 'valentina', en: 'You say it directly: "I do not have information beyond what has been '
        + 'officially announced on that timeline. I would encourage you to submit a '
        + 'formal inquiry to the spokesperson\'s office, which I can facilitate for '
        + 'you." That is not evasion. That is proper process. The journalist '
        + 'understands the difference.',
      ar: FMS.ar('You say it directly: "I do not have information beyond what has been '
        + 'officially announced on that timeline. I would encourage you to submit a '
        + 'formal inquiry to the spokesperson\'s office, which I can facilitate for '
        + 'you." That is not evasion. That is proper process. The journalist '
        + 'understands the difference.') || '' },
    { who: 'dawit', en: 'And what if they push back and say we are hiding something?',
      ar: FMS.ar('And what if they push back and say we are hiding something?') || '' },
    { who: 'valentina', en: 'You stay calm. You do not match their energy. You say: "Our position is '
        + 'what I have described. I would encourage you to engage through official '
        + 'channels." Then you move on. The moment you become defensive, you have '
        + 'given the story they were looking for.',
      ar: FMS.ar('You stay calm. You do not match their energy. You say: "Our position is '
        + 'what I have described. I would encourage you to engage through official '
        + 'channels." Then you move on. The moment you become defensive, you have '
        + 'given the story they were looking for.') || '' }
  ]
});

FMS.scene('u3-3b', {
  set: 'reception',
  cast: {
    selamawit: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.22, 0.52] }; }(FMS.art.cast.selamawit)),
    aigerim: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.44, 0.52] }; }(FMS.art.cast.aigerim)),
    ambassador: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.66, 0.52] }; }(FMS.art.cast.ambassador)),
    official: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.84, 0.52] }; }(FMS.art.cast.official))
  },
  lines: [
    { who: 'selamawit', cam: { shot: 'mid' }, en: 'Good afternoon. The Ministry of Foreign Affairs is pleased to announce '
        + 'that a comprehensive bilateral cooperation framework has been signed today '
        + 'between our country and Germany. The framework covers rural '
        + 'infrastructure, water systems, and educational exchange. A joint technical '
        + 'working committee has been established and will convene its first session '
        + 'within 60 days. This agreement was reached after six months of '
        + 'negotiations. It represents a significant milestone in our diplomatic '
        + 'engagement in Europe and in our partnership with Germany.',
      ar: FMS.ar('Good afternoon. The Ministry of Foreign Affairs is pleased to announce '
        + 'that a comprehensive bilateral cooperation framework has been signed today '
        + 'between our country and Germany. The framework covers rural '
        + 'infrastructure, water systems, and educational exchange. A joint technical '
        + 'working committee has been established and will convene its first session '
        + 'within 60 days. This agreement was reached after six months of '
        + 'negotiations. It represents a significant milestone in our diplomatic '
        + 'engagement in Europe and in our partnership with Germany.') || '' },
    { who: 'aigerim', en: 'Significant progress has been made in the southern region. Over forty '
        + 'thousand metric tonnes of equipment and supplies have been delivered since '
        + 'January. Four new coordination offices have been opened in partnership '
        + 'with national authorities. We are currently processing support '
        + 'applications for more than fifteen thousand households. These programs are '
        + 'being implemented in close coordination with the national government and '
        + 'cannot succeed without continued international funding and political '
        + 'support.',
      ar: FMS.ar('Significant progress has been made in the southern region. Over forty '
        + 'thousand metric tonnes of equipment and supplies have been delivered since '
        + 'January. Four new coordination offices have been opened in partnership '
        + 'with national authorities. We are currently processing support '
        + 'applications for more than fifteen thousand households. These programs are '
        + 'being implemented in close coordination with the national government and '
        + 'cannot succeed without continued international funding and political '
        + 'support.') || '' },
    { who: 'ambassador', en: 'Germany is proud to be represented here today at this milestone session. '
        + 'The cooperation framework that has been agreed between our two countries '
        + 'reflects a long-term German commitment to this partnership and to its '
        + 'people. Germany believes that sustainable development can only be achieved '
        + 'when it is supported by strong institutional frameworks, transparent '
        + 'implementation, and active civil society participation. We are committed '
        + 'to this partnership for the long term.',
      ar: FMS.ar('Germany is proud to be represented here today at this milestone session. '
        + 'The cooperation framework that has been agreed between our two countries '
        + 'reflects a long-term German commitment to this partnership and to its '
        + 'people. Germany believes that sustainable development can only be achieved '
        + 'when it is supported by strong institutional frameworks, transparent '
        + 'implementation, and active civil society participation. We are committed '
        + 'to this partnership for the long term.') || '' },
    { who: 'official', en: 'I speak today as someone who left this country in 2015 and has lived '
        + 'abroad for a decade. We want to come back. We are ready to bring our '
        + 'skills, our capital, and our commitment. But we need to know that the '
        + 'return process is clear, that our rights will be protected, and that we '
        + 'will be met as citizens, not as strangers. The returning-citizens program '
        + 'is a good beginning. It needs to become something bigger and faster.',
      ar: FMS.ar('I speak today as someone who left this country in 2015 and has lived '
        + 'abroad for a decade. We want to come back. We are ready to bring our '
        + 'skills, our capital, and our commitment. But we need to know that the '
        + 'return process is clear, that our rights will be protected, and that we '
        + 'will be met as citizens, not as strangers. The returning-citizens program '
        + 'is a good beginning. It needs to become something bigger and faster.') || '' }
  ]
});

FMS.scene('u3-4a', {
  set: 'reception',
  cast: {
    guest: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.22, 0.52] }; }(FMS.art.cast.guest)),
    valentina: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.44, 0.52] }; }(FMS.art.cast.valentina)),
    visitor: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.66, 0.52] }; }(FMS.art.cast.visitor))
  },
  lines: [
    { who: 'guest', cam: { shot: 'mid' }, en: 'Critics say that your development promises are not backed by real '
        + 'institutional capacity. How do you respond?',
      ar: FMS.ar('Critics say that your development promises are not backed by real '
        + 'institutional capacity. How do you respond?') || '' },
    { who: 'valentina', en: 'That is a legitimate concern that we take seriously. A joint technical '
        + 'working committee has been established with both national and '
        + 'international participants. A monitoring and reporting framework has been '
        + 'agreed, with quarterly implementation reports to be published. The '
        + 'ministry is committed to demonstrating capacity through consistent '
        + 'delivery, not declarations.',
      ar: FMS.ar('That is a legitimate concern that we take seriously. A joint technical '
        + 'working committee has been established with both national and '
        + 'international participants. A monitoring and reporting framework has been '
        + 'agreed, with quarterly implementation reports to be published. The '
        + 'ministry is committed to demonstrating capacity through consistent '
        + 'delivery, not declarations.') || '' },
    { who: 'visitor', en: 'Civil society organizations have raised concerns about the '
        + 'returning-citizens process. What guarantees are being offered?',
      ar: FMS.ar('Civil society organizations have raised concerns about the '
        + 'returning-citizens process. What guarantees are being offered?') || '' },
    { who: 'valentina', en: 'The returning-citizens program has been designed in coordination with IOM '
        + 'and UNHCR. Rights protection is embedded in the framework: applications '
        + 'are processed through official channels, applicants are informed of '
        + 'outcomes in writing, and a return assistance office has been established '
        + 'to address individual cases. We acknowledge that processing times need '
        + 'improvement, and that is actively being addressed.',
      ar: FMS.ar('The returning-citizens program has been designed in coordination with IOM '
        + 'and UNHCR. Rights protection is embedded in the framework: applications '
        + 'are processed through official channels, applicants are informed of '
        + 'outcomes in writing, and a return assistance office has been established '
        + 'to address individual cases. We acknowledge that processing times need '
        + 'improvement, and that is actively being addressed.') || '' }
  ]
});

FMS.scene('u3-8c', {
  set: 'reception',
  cast: {
    visitor: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.22, 0.52] }; }(FMS.art.cast.visitor)),
    valentina: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.44, 0.52] }; }(FMS.art.cast.valentina))
  },
  lines: [
    { who: 'visitor', cam: { shot: 'mid' }, en: 'Your ministry says it has signed many bilateral agreements. But are these '
        + 'real partnerships or just paper deals?',
      ar: FMS.ar('Your ministry says it has signed many bilateral agreements. But are these '
        + 'real partnerships or just paper deals?') || '' },
    { who: 'valentina', en: 'That is a fair challenge. The agreements that have been signed are legally '
        + 'binding documents with specific implementation mechanisms — not '
        + 'declarations. A joint technical committee has been established under each '
        + 'framework, with quarterly reporting requirements. Implementation has '
        + 'begun: the Germany working group held its inaugural session in March, and '
        + 'an aide-mémoire was signed at that session.',
      ar: FMS.ar('That is a fair challenge. The agreements that have been signed are legally '
        + 'binding documents with specific implementation mechanisms — not '
        + 'declarations. A joint technical committee has been established under each '
        + 'framework, with quarterly reporting requirements. Implementation has '
        + 'begun: the Germany working group held its inaugural session in March, and '
        + 'an aide-mémoire was signed at that session.') || '' },
    { who: 'visitor', en: 'Your returning-citizens program — how many people have actually returned, '
        + 'not just applied?',
      ar: FMS.ar('Your returning-citizens program — how many people have actually returned, '
        + 'not just applied?') || '' },
    { who: 'valentina', en: 'That is exactly the right question to ask. Return completion numbers are '
        + 'compiled and published by the Consular Affairs Section in partnership with '
        + 'IOM. The gap between applications and completed returns reflects '
        + 'processing time and documentation challenges, which we acknowledge and are '
        + 'actively addressing.',
      ar: FMS.ar('That is exactly the right question to ask. Return completion numbers are '
        + 'compiled and published by the Consular Affairs Section in partnership with '
        + 'IOM. The gap between applications and completed returns reflects '
        + 'processing time and documentation challenges, which we acknowledge and are '
        + 'actively addressing.') || '' },
    { who: 'visitor', en: 'Some civil society organizations say the consultation process is not '
        + 'genuine. How do you respond?',
      ar: FMS.ar('Some civil society organizations say the consultation process is not '
        + 'genuine. How do you respond?') || '' },
    { who: 'valentina', en: 'I understand why that question is being asked, and I want to answer it '
        + 'carefully. The official position on consultation processes has been stated '
        + 'by the Foreign Minister and is a matter of public record. For specific '
        + 'mechanisms, I recommend a formal inquiry to the Political Affairs '
        + 'Directorate — I can facilitate that. What I will say is this: '
        + 'accountability is not something we are trying to avoid — it is something '
        + 'we are building into our institutional frameworks precisely because we '
        + 'understand that international confidence depends on it.',
      ar: FMS.ar('I understand why that question is being asked, and I want to answer it '
        + 'carefully. The official position on consultation processes has been stated '
        + 'by the Foreign Minister and is a matter of public record. For specific '
        + 'mechanisms, I recommend a formal inquiry to the Political Affairs '
        + 'Directorate — I can facilitate that. What I will say is this: '
        + 'accountability is not something we are trying to avoid — it is something '
        + 'we are building into our institutional frameworks precisely because we '
        + 'understand that international confidence depends on it.') || '' }
  ]
});
