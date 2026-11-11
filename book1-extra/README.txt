AL-HASAN INTERNATIONAL — EXTRA MATERIAL FOR STUDENT BOOK 1 (CEFR A2)
====================================================================

120 lessons. Ten units, twelve lessons in each: six things to read and
six to listen to. Every text and every conversation is read aloud by the
voices already installed on the computer you are using — there are no
audio files to download and nothing to install.

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

Twelve of the fifteen mark themselves: multiple choice, several-answer,
true/false, gap-fill, matching and ordering. The other three ask you to
write — a short answer and two longer ones — and show you a model answer
afterwards, which you compare with your own and mark yourself.

Your score is remembered in this browser, per lesson and per unit. The
"Reset all" button at the top clears everything.

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
  1  Our Group, Our People & Our Partners
     be · have got · present simple · there is/are        Trade + Admin
  2  Products, Materials & Specifications
     countable/uncountable · some/any · adjectives        Trade
  3  Enquiries & International Communication
     can · would like · question forms                    Trade + Admin
  4  Prices, Quotations & Offers
     numbers & money · comparatives · quantifiers         Finance + Trade
  5  Orders, Confirmations & Documents
     present simple · sequence words · imperatives        Admin + Trade
  6  Shipping, Logistics & Customs
     prepositions · present continuous · going to         Logistics
  7  Invoices, Payments & Financial Communication
     past simple · time expressions                       Finance
  8  Meetings & Simple Agreements
     simple agreement · would like · can/could            Trade
  9  Problems, Delays & Solutions
     past simple · because · should/can                   Logistics/Finance/Admin
 10  The International Partner Project
     review of all A2 grammar                             all four sectors

Each unit's lessons sit beside that unit of the Student Book and use the
same grammar, the same people and the same companies. Unit 6 is the
logistics set, written a little above A2 as a stretch.

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
