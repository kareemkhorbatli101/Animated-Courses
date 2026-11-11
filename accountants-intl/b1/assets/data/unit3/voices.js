/* Unit 3 — voice casting. GENERATED from tools/voices.py, which is the
   single source of truth: the audio build reads it to decide what to
   synthesise and the browser reads this to find the finished recording, so
   the two cannot disagree. The `scene` block maps each stage's cast to the
   voice its lines were actually recorded with. No prosody is ever requested. */
EFA.voices({
  course: 'en-GB-SoniaNeural',
  narrator: 'en-GB-RyanNeural',
  'spk:Marta': 'en-GB-LibbyNeural',
  'spk:Ryan': 'en-GB-ThomasNeural',
  'spk:Mr Farouk': 'en-US-RogerNeural',
  'spk:Group Finance Manager': 'en-US-RogerNeural',
  'spk:Daniel': 'en-KE-ChilembaNeural',
  'spk:Priya': 'en-IN-NeerjaNeural',
  'spk:Aoife': 'en-IE-EmilyNeural',
  'spk:Ms Vogel': 'en-US-EmmaNeural',
  'spk:Accountant': 'en-US-AvaNeural',
  'spk:Senior Accountant': 'en-US-MichelleNeural',
  'spk:Junior': 'en-PH-JamesNeural',
  'spk:Supplier': 'en-US-ChristopherNeural',
  'spk:Custodian': 'en-SG-WayneNeural',
  'spk:Clerk': 'en-SG-LunaNeural',
  'spk:Employee': 'en-US-EricNeural',
  'spk:Manager': 'en-US-BrianNeural',
  'spk:Supervisor': 'en-NG-EzinneNeural',
  'spk:Collector': 'en-US-GuyNeural',
  'spk:Client': 'en-ZA-LeahNeural',
  'spk:Controller': 'en-US-AriaNeural',
  'spk:Director': 'en-ZA-LukeNeural',
  'spk:IT Specialist': 'en-US-AndrewNeural',
  'spk:Interviewer': 'en-GB-MaisieNeural',
  'spk:Applicant': 'en-NZ-MitchellNeural',
  'spk:Speaker': 'en-US-SteffanNeural',
  'spk:Student B': 'en-CA-ClaraNeural',
  'spk:A': 'en-AU-NatashaNeural',
  'spk:B': 'en-CA-LiamNeural',
  'spk:Colleague 1': 'en-US-JennyNeural',
  'spk:Colleague 2': 'en-IE-ConnorNeural',
  'spk:Student A': 'en-NG-AbeoNeural',
  'spk:Committee Member 1': 'en-IN-PrabhatNeural',
  'spk:Committee Member 2': 'en-NZ-MollyNeural',
  scene: {
    'u3-listening-1-c1': { employee: 'en-US-EricNeural', custodian: 'en-SG-WayneNeural' },
    'u3-reading-1-c2': { narr: 'en-GB-RyanNeural' },
    'u3-reading-2-c1': { narr: 'en-GB-RyanNeural' },
    'u3-reading-3-c1': { narr: 'en-GB-RyanNeural' },
    'u3-extension-c1': { narr: 'en-GB-RyanNeural' },
    'u3-extension-c3': { narr: 'en-GB-RyanNeural' },
    'u3-extension-c5': { narr: 'en-GB-RyanNeural' }
  }
});
