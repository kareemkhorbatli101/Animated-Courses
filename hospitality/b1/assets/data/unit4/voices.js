/* Unit 4 — voice casting. The single source of truth.

   The audio builder reads tools/hosp_cast.py to decide what to synthesise and
   the browser reads this file to find the finished recording, so the two
   cannot disagree: both come from the same table.

   The hotel's staff keep one voice across all ten units. The GUEST is cast
   per unit - American here - because a course that teaches a receptionist to
   understand international guests while every guest sounds the same has
   taught her the easy half. RESIDUALS FM-43. */
HSP.voices({
    caller: 'en-GB-ThomasNeural',
    course: 'en-US-JennyNeural',
    guest: 'en-US-GuyNeural',
    lina: 'en-US-AriaNeural',
    nabil: 'en-US-ChristopherNeural',
    rana: 'en-US-MichelleNeural',
    salma: 'en-US-EmmaNeural',
    waiter: 'en-US-BrianNeural'
});
