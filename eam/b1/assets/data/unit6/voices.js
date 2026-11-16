/* Unit 6 — the same cast as unit 1, so a voice belongs to a person rather than
   to a unit. Recorded 2026-11-16: every line of every scene, and every speaker button, has an
   mp3 under assets/audio/<unit>/ and an entry in assets/data/<unit>/audio.js. A line
   with no recording still falls back to the device voice. RESIDUALS EAM-E6. */
EAM.voices({
  course: 'en-US-JennyNeural',
  maher: 'en-US-GuyNeural',
  nabil: 'en-US-AndrewNeural',
  rana: 'en-US-AriaNeural',
  lina: 'en-US-AvaNeural',
  tarek: 'en-US-BrianNeural',
  aboud: 'en-US-ChristopherNeural',       /* the customer, by name: every scene
                                             says `aboud`, and before this he had
                                             no voice at all */
  customer: 'en-US-ChristopherNeural'
});
