AL-HASAN INTERNATIONAL — EXTRA MATERIAL FOR STUDENT BOOK 2 (CEFR B1)
====================================================================

120 lessons. Ten units, twelve lessons in each: six things to read and
six to listen to. Every text and every conversation is read aloud by the
voices already installed on the computer you are using — there are no
audio files to download and nothing to install.

This is the companion to the Student Book 1 pack (CEFR A2). The two are
separate folders and keep separate scores; you can have both open.

HOW TO OPEN IT
--------------
Unzip this folder anywhere, then double-click index.html.
It opens in your normal browser and works with no internet connection.
Nothing is sent anywhere; your answers stay on your own computer.

Chrome, Edge, Safari and Firefox all work. Chrome and Edge usually have
the best voices.

WHAT IS IN EACH LESSON
----------------------
Five steps, in order:

  1  Before you read / listen   3 exercises to prepare you
  2  The text or the conversation, with audio and a glossary
  3  Comprehension              6 exercises on what it said
  4  Words in context           3 exercises on the language
  5  After you read / listen    3 exercises that use it

Fifteen exercises per lesson, 1,800 in the whole pack.

Twelve of the fifteen mark themselves. The other three ask you to write
— a short answer and two longer ones — and show you a model answer
afterwards, which you compare with your own and mark yourself. At B1
those three are the heart of the pack: the model answers are written in
the register the Student Book's writing tasks ask for.

Your score is remembered in this browser, per lesson and per unit. The
"Reset all" button at the top clears everything.

HOW THIS DIFFERS FROM THE A2 PACK
---------------------------------
Same shell, same five steps, same eight exercise types. Inside:

  readings       6 paragraphs, 420-520 words (A2: 300-380)
  dialogues      16-20 turns, with hedging, interruption and repair
  sentences      subordination expected - although, unless, which
  comprehension  two of the six need inference, not retrieval
  gap-fills      test the unit's grammar, not only vocabulary
  written tasks  a paragraph or a document, not three sentences
  glossary       the word, its meaning, and the phrase it lives in

THE AUDIO
---------
Readings are read straight through, one sentence at a time, with the
sentence being spoken highlighted so you can follow it.

Conversations use two different voices — Voice A and Voice B — so the two
speakers sound like two people. You can choose both voices in the player
at the bottom of the screen, and change the speed from 0.7 (slow, for
dictation) to 1.15 (quick).

Transcripts of the conversations start hidden. Listen first; the "Show
the transcript" button is there when you want it.

IF YOU HEAR NOTHING
-------------------
The page will tell you if your computer has no speech voices installed,
and what to do about it:

  Windows   Settings > Time & Language > Speech > Manage voices > Add
  macOS     System Settings > Accessibility > Spoken Content > System Voice
  Linux     install speech-dispatcher and espeak-ng, then restart the browser

On some systems the voices load a second or two after the page. If the
voice list is empty, wait a moment and reload.

THE TEN UNITS
-------------
  1  The Group and Its Companies
     present perfect vs past simple                       Trade + Admin
  2  Sourcing a Supplier
     must · have to · mustn't · don't have to · can       Trade + Admin
  3  Offers, Prices and the Margin
     first conditional · unless · time clauses            Finance + Trade
  4  Ordering and Paying Across Borders
     will · going to · present continuous                 Finance + Admin
  5  Shipping In and Clearing Customs
     the passive · by + agent                             Logistics
  6  Goods In: Quality, Quantity and Stock
     defining relative clauses                            Trade + Logistics
  7  Selling in Syria
     reported speech - say · tell · ask                   Trade
  8  Getting Paid and Giving Credit
     should · shouldn't · could · may · might             Finance + Admin
  9  When It Goes Wrong
     past continuous vs past simple · because of · so     Logistics/Finance/Admin
 10  Reporting the Year and Growing
     review · the language of figures and trends          all four

The lessons follow the Student Book's own year: a packing machine bought
from a supplier nobody had used, 1,200 tonnes of steel across a sea, a
certificate in the wrong name, a container with eleven coils, forty
tonnes that should never have left the yard, and four hundred and six
people who asked for something the Group did not sell.

FOR TEACHERS
------------
Everything is plain HTML, CSS and JavaScript — no build step, no
framework, no network calls.

  index.html              the whole shell; regenerate with build.py
  assets/site.css         one stylesheet
  assets/app.js           the engine: router, exercises, speech, scoring
  assets/data/u1r1.js …   one file per lesson, 120 in all
  build.py                rewrites index.html from whatever is in data/
  check.py                checks every lesson file: 15 exercises, a model
                          answer on every written task, well-formed
                          multiple choice, no duplicate ids

To add a lesson: copy any file in assets/data/, change the id, unit, kind
and n, then run  python3 check.py  and  python3 build.py .

To use a lesson in class without the computer: open the lesson, print the
page. The exercises print in order with the text at the top.

Al-Hasan Holding Group · Damascus
