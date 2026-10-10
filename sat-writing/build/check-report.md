# Check report — Writing the Five Fields

SUMMARY: 6000/6000 per-exercise passes, 120/120 book-level checks

Eight checks on every one of the 750 exercises, and 120 checks on the book as a
whole. The per-exercise eight are identity, placement, stimulus, rule, key,
distractors, uniqueness of correctness, and mechanics. Run them with
`python3 tools/xchecks.py` (add `-v` for every line, `--partial` while writing).

## The document it measured

- `appendices`: 4
- `arabic_blocks`: 90
- `arabic_headings`: 60
- `arabic_pages`: 90
- `contents`: 15
- `exercises`: 750
- `key_rows`: 750
- `openers`: 15
- `pages`: 325
- `part_heads`: 75
- `split`: 0


## A — completeness

- ok A1 fifteen chapters present  15 chapters
- ok A2 seventy-five parts  75 parts
- ok A3 seven hundred and fifty exercises  750 exercises
- ok A4 ten exercises in every part  0 wrong-sized
- ok A5 fifteen chapter files  15 files
- ok A6 fifty exercises in every file  15 files
- ok A7 all exercise ids unique  750 ids
- ok A8 numbering one to seven hundred and fifty contiguous  
- ok A9 every chapter holds all five domains in order  chapters out of order: []
- ok A10 all fifteen elements present once  15 elements

## B — the grid

- ok B1 every element and domain cell holds exactly ten  75 cells
- ok B2 one hundred and fifty exercises per domain  {'HIS': 150, 'BIO': 150, 'PHY': 150, 'HUM': 150, 'SOC': 150}
- ok B3 fifty exercises per chapter  15 chapters
- ok B4 every position appears seventy-five times  {1: 75, 2: 75, 3: 75, 4: 75, 5: 75, 6: 75, 7: 75, 8: 75, 9: 75, 10: 75}
- ok B5 level totals one fifty, two twenty-five, two twenty-five, one fifty  {1: 150, 2: 225, 3: 225, 4: 150}
- ok B6 difficulty totals two twenty-five, three hundred, two twenty-five  {'easy': 225, 'medium': 300, 'hard': 225}
- ok B7 difficulty never falls as position rises, in all seventy-five parts  0 parts fall
- ok B8 level never falls as position rises  0 parts fall
- ok B9 three chapters make their home in each domain  {'BIO': 3, 'HIS': 3, 'SOC': 3, 'HUM': 3, 'PHY': 3}
- ok B10 every chapter declares one home domain from the five  

## C — the key letters

- ok C1 key totals one eighty-eight, one eighty-seven, one eighty-eight, one eighty-seven  {'B': 187, 'D': 187, 'A': 188, 'C': 188}
- ok C2 every letter between twenty-two and twenty-eight per cent of each chapter  
- ok C3 every letter between twenty-two and twenty-eight per cent of each domain  
- ok C4 the planned key pattern holds in all seventy-five parts  
- ok C5 no run of three identical keys inside a part  0 runs
- ok C6 no position holds one letter in more than forty per cent of its exercises  worst 25% at position 10
- ok C7 every letter used in every chapter  
- ok C8 every key letter inside A to D  
- ok C9 at least three distinct key letters in every part  0 thin
- ok C10 no letter outside twenty-four to twenty-six per cent of the book  {'A': 25.07, 'B': 24.93, 'C': 25.07, 'D': 24.93}

## D — the rules

- ok D1 every rule inside its chapter closed set  0 outside
- ok D2 every declared rule used at least once in its chapter  
- ok D3 at least four distinct rules in every chapter  4
- ok D4 the home-domain part carries every one of its chapter hardest rules  
- ok D5 no rule fills more than forty per cent of a chapter  
- ok D6 every rule has an entry in the rule index  
- ok D7 every exercise declares a rule span  
- ok D8 every rule span is a token run of its key  0 bad
- ok D9 at least two distinct rules in every part  0 thin
- ok D10 all eighty-one rules used somewhere in the book  81 of 81 used

## E — the moves

- ok E1 every move inside its chapter closed set  0 outside
- ok E2 every declared move used at least once in its chapter  
- ok E3 at least three distinct moves in every part  0 thin
- ok E4 no move fills more than sixty per cent of a chapter  
- ok E5 two distinct moves in every exercise  0 single-move
- ok E6 all forty-nine distinct moves used somewhere  50 of 50 used
- ok E7 exactly three faults in every exercise  0 wrong
- ok E8 the three faults sit on the three letters that are not the key  0 wrong
- ok E9 every move is either detected or declared undetectable  
- ok E10 at least half of all faults carry a machine predicate  1408 of 2250, 63%

## F — uniqueness of correctness

- ok F1 no span that is a fault only evidence appears inside its key  0 spans in a key
- ok F2 every fault span is a token run of the option it faults  0 bad
- ok F3 the three fault spans of an exercise are distinct  0 repeat
- ok F4 every predicate that exists fires on the distractor it is given  0 silent: []
- ok F5 no predicate fires on any of the seven hundred and fifty keys  0 fire on a key: []
- ok F6 four distinct options in every exercise  
- ok F7 no option contained inside another  0 contained
- ok F8 no part repeats an option set, and none is the habit of the book  0 parts repeat; commonest set used 5 times
- ok F9 every exercise supplies the context its predicates need  0 missing: []
- ok F10 the key span is never also quoted as a fault  0 bad

## G — the stimulus

- ok G1 seven hundred and fifty distinct stimuli  750 distinct of 750
- ok G2 no carrier reproduces a sentence of Book 2  0 lifted
- ok G3 mean filled-carrier length rises strictly with level  L1:18.2 L2:25.6 L3:33.0 L4:43.7
- ok G4 all fifty strands of Book 2 used  50 strands
- ok G5 at least eight distinct strands in every chapter  50
- ok G6 every strand belongs to its exercise own domain  0 wrong
- ok G7 exactly one blank in every carrier  0 bad
- ok G8 a blank only in a claim the stem asks the student to complete  0 stray
- ok G9 notes and tables inside their declared shapes  0 bad
- ok G10 every filled carrier inside its level word band  0 out of band

## H — the language

- ok H1 no British spellings anywhere  
- ok H2 no second person anywhere  0 exercises
- ok H3 no contractions in stem, explanation or trap  0 exercises
- ok H4 every stem is the form its element prescribes  0 bad
- ok H5 no banned option forms  0 bad
- ok H6 no identifiable extreme of option length locates the key  key uniquely longest 19.2%, uniquely shortest 13.6%, band 8-40%
- ok H7 uniform end punctuation inside every option set  0 mixed
- ok H8 every explanation between eight and forty words  0 out
- ok H9 every trap between six and thirty words and naming a letter  0 out
- ok H10 every explanation names the rule it rests on  0 silent

## I — the Arabic

- ok I1 a chapter page for every chapter  15 of 15
- ok I2 four parts in every chapter page  chapters []
- ok I3 every chapter page inside its word band  chapters []
- ok I4 every chapter page relates the element to the test at length  chapters []
- ok I5 a note for every one of the seventy-five parts  75 of 75
- ok I6 every part note inside its word band  
- ok I7 every Arabic block at least ninety-two per cent Arabic script  0 thin
- ok I8 no Latin in the Arabic outside the allowlist  
- ok I9 every chapter page names its element and the test  chapters []
- ok I10 every part note names its domain  

## J — the answer key

- ok J1 a key row available for every exercise  
- ok J2 every key row carries key, rule, explanation and trap  0 short
- ok J3 key rows in exercise order  
- ok J4 every key letter agrees with its exercise file  
- ok J5 every rule named in the key appears in the rule index  
- ok J6 every trap names a distractor and never the key  0 bad
- ok J7 no explanation gives away a letter  0 bad
- ok J8 every letter a trap names has a fault of its own  0 bad
- ok J9 no explanation repeated anywhere in the book  0 repeated
- ok J10 no trap repeated anywhere in the book  0 repeated

## K — the document

- ok K1 the document has been built  build/doc-stats.json
- ok K2 page count inside the declared band  325 pages, band 260-400
- ok K3 fifteen chapter openers  15
- ok K4 seventy-five part heads  75
- ok K5 seven hundred and fifty exercises rendered  750
- ok K6 no exercise split across a page  0
- ok K7 seven hundred and fifty answer key rows  750
- ok K8 four appendices  4
- ok K9 contents rows match the fifteen chapters  15
- ok K10 ninety Arabic blocks rendered  90

## L — the series

- ok L1 both Standard English Conventions skills covered  {1: 8, 2: 4, 3: 2, 4: 1}
- ok L2 Expression of Ideas covered  
- ok L3 quantitative evidence covered  
- ok L4 punctuation now present at hard difficulty, which Book 2 left easy only  60 hard of 200 punctuation exercises
- ok L5 Book 2 passages unchanged since its manifest was baselined  
- ok L6 every strand this book names exists in Book 2  0 unknown
- ok L7 the five domain codes and titles are Book 2 five, unchanged  differs: []
- ok L8 the domain names and order match Book 2 exactly  
- ok L9 this book overlaps Book 2 only where the test demands depth  shared: ['synthesis', 'transition']
- ok L10 the three difficulty names match Book 2  
