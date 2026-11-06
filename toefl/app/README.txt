TOEFL iBT 2026
Units 1 to 5


TO START
--------
Open index.html in your browser. Double-clicking it is enough.
No internet connection is needed. No web server. Nothing is sent anywhere.


WHAT IS HERE
------------
Five of the twelve units, complete. Each unit is seven blocks:

  Lesson 1  Vocabulary               Complete the Words
  Lesson 2  Writing                  Academic Discussion, Build a Sentence
  Lesson 3  Grammar                  Build a Sentence, Complete the Words
  Lesson 4  Everyday Conversation    Choose a Response, Conversation, Repeat
  Lesson 5  Reading                  Read in Daily Life, Academic Passage
  On Campus                          Announcement, Academic Talk
  Teamwork & Language Review         Write an Email, Interview, mixed review

53 scored items per unit. By section: Reading 18, Listening 17,
Writing 12, Speaking 6, plus 6 review items. Writing lands on exactly
the live test's twelve items.

  1  How We Learn                cognitive psychology
  2  Climate and Prediction      earth science
  3  Adaptation and Diversity    evolutionary biology
  4  Migration and the Human Past  archaeology
  5  Exploring Space             astronomy


HOW IT WORKS
------------
Every exercise has "Check Answers" and "Try Again".

  Try Again re-shuffles and clears your marks. It never reveals the
  answer as a shortcut.

  Options are shuffled every time. When you are wrong, the feedback
  begins with the reason for the option YOU chose, not a generic
  "incorrect".

  Drag and drop always has a click path, and works from the keyboard.
  In Build a Sentence there are always more words than places, so the
  last word is never a free placement.

  Listening plays ONCE, as on the real test. That is said before the
  first item rather than sprung on you. Academic talks open a notepad
  you can type in while the audio runs; the notes stay, the audio does
  not.

  Your drafts in Write an Email and Write for an Academic Discussion
  survive Try Again and a page reload.


SPEAKING
--------
The two speaking tasks are AI-scored out of 5 on the real test, so this
book cannot mark them. It gives you the model answer, the transcript and
a five-point scale, and asks you to rate yourself honestly.

Recording is attempted and used if your browser allows it. Opened as a
file, Chromium refuses microphone access because a file:// page has no
origin a permission can attach to - so the book falls back to
self-assessment automatically. Serving the folder over
http://localhost restores recording if you want it.


AUDIO
-----
Where no recording is bundled, the book speaks the audio using the
voices already installed on your computer. ETS's own specification says
2026 listening stimuli are delivered using AI-generated audio, so a
synthetic voice is faithful here rather than a compromise - but recorded
audio remains the quality target, because the browser's voices cannot
reliably deliver the accent range the specification describes.

On Windows, Chrome and Edge both expose the installed voices directly,
and Edge usually has the better ones.


YOUR PROGRESS
-------------
Saved in this browser, on this computer, and nowhere else. It is not
uploaded and does not follow you to another machine.


IF SOMETHING LOOKS WRONG
------------------------
From the app folder:

  node tools/check.js    the quality gate
  node tools/solve.js    opens every block and solves every exercise

check.js enforces: every item declares a real ETS task type and a CEFR
level inside that task's published range; each unit's item counts match
the published budget; reading passages sit inside ETS's own word and
Flesch-Kincaid bands; audio sits inside its length bands; every
multiple-choice item has exactly one correct option, at least three
options, and a rationale on every one; and T/F answers cite a line while
NI answers cite none.

solve.js opens every block in a real browser and answers every exercise
through its own click path. An item nobody can answer by operating the
interface is a broken item however good its data looks.


SOURCES
-------
The test blueprint is ETS's own: the TOEFL iBT 2026 Test Blueprint and
Specifications Document, and ets.org/toefl/test-takers/ibt/about/content.
Item counts, CEFR ranges, maximum scores, text and audio length limits
and difficulty bands are theirs and are held in assets/spec.js with
their citation.

The course architecture - the seven-block unit, the three invariant
lesson templates, the grammar order, the affix and pronunciation
ladders, the one-data-visual-per-unit rule - is modelled on Oxford's
Step Forward, Second Edition, Level 3. No text, artwork or exercise
content is reproduced from it. Everything here is newly written.
