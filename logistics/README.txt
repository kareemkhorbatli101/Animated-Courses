AL-HASAN INTERNATIONAL — LOGISTICS: WHEN SHIPPING AND RECEIVING GO WRONG
Six readings and six listenings, CEFR B1, with audio read by this computer.

-------------------------------------------------------------------------------
HOW TO RUN IT
-------------------------------------------------------------------------------
Unzip the folder anywhere, then open  index.html  in a browser.
That is all. There is no installation, no server and no internet connection
needed. Chrome, Edge, Firefox and Safari all work.

If you would rather serve it (recommended on Safari, and for a classroom where
several people use the same machine), open a terminal in this folder and run:

    python3 -m http.server 8000

then go to  http://localhost:8000  in the browser. On Windows without Python,
any static server will do.

-------------------------------------------------------------------------------
THE AUDIO
-------------------------------------------------------------------------------
Every text and every line of dialogue is spoken by the voices already installed
on this computer — the browser's own speech engine. Nothing is downloaded and
no audio files are shipped, so the whole course is about 150 KB.

  * The bar at the bottom of a lesson has Play, Stop, Speed, Voice A and Voice B.
  * In a reading, Voice A reads everything, and the sentence being spoken is
    highlighted. The small round button beside a paragraph reads that paragraph.
  * In a conversation, the two speakers take Voice A and Voice B, so pick two
    different voices. The line being spoken is highlighted.
  * Start at 0.7x or 0.8x the first time through.

If the bar shows a red warning, this computer has no speech voices installed:
  Windows   Settings > Time & language > Speech > Manage voices
  macOS     System Settings > Accessibility > Spoken Content > System Voice
  Linux     install speech-dispatcher and a voice package, then restart the browser
Everything else in the course still works; the texts are all on the page.

-------------------------------------------------------------------------------
WHAT IS IN IT
-------------------------------------------------------------------------------
12 lessons, 180 exercises. Each lesson has five steps:

  1  Before you read / listen   warm-up and the words, 3 exercises
  2  The text / the conversation   with audio; a listening keeps its transcript
                                   hidden until you ask for it
  3  Comprehension              6 exercises
  4  The words                  3 exercises
  5  After you read / listen    3 exercises, ending in writing or a decision

Eight kinds of exercise: choose one, choose several, true/false, gap-fill,
matching, ordering, short answer and writing. The first six mark themselves and
explain the answer; the last two show a model answer and you mark your own.

READINGS                                 LISTENINGS
 1 Twenty-five sacks that were not there  1 A driver with no papers
 2 Rain on the road from Lattakia         2 Four o'clock on a Thursday
 3 Four free days, and then the clock     3 Too heavy for the forklift
   starts                                 4 Labels nobody can read
 4 A piece of paper worth nine days       5 The right goods, the wrong town
 5 The right steel, the wrong grade       6 Who pays for the wet cement?
 6 The number on the seal

-------------------------------------------------------------------------------
YOUR ANSWERS
-------------------------------------------------------------------------------
They are saved in this browser, on this device, and nothing is sent anywhere.
"Reset this lesson" clears one lesson; "Reset all" at the top clears everything.
If several students share a machine, give each one a different browser profile,
or use the private window and accept that the scores will not be kept.

-------------------------------------------------------------------------------
USING IT IN CLASS
-------------------------------------------------------------------------------
Readings    Do step 1 with the text covered. Play the audio once while the class
            follows. Read again individually, then answer. Finish on step 5,
            which is where they have to decide something.
Listenings  The transcript is hidden on purpose. Play twice, let them answer what
            they can, play once more, then reveal the words and replay the lines
            they argued about with the single-line buttons.
Print       Ctrl-P on any lesson prints it as a clean worksheet: the controls and
            the hidden-transcript panel drop away and the transcript prints.

-------------------------------------------------------------------------------
FILES
-------------------------------------------------------------------------------
index.html              the whole site: open this
assets/site.css         styling
assets/app.js           the engine: router, exercises, scoring, speech
assets/data/r1..r6.js   the six readings, one file each
assets/data/c1..c6.js   the six conversations, one file each

To change a text or add an exercise, edit one data file: the format is plain
JavaScript and every exercise is one short object. Nothing is compiled.

Al-Hasan International — English for Trade, Industry & Global Partnerships
