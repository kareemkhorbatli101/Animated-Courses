# -*- coding: utf-8 -*-
"""The second tier of the control band: Foundation 2's extra room.

Foundation 1 is written inside the 2,200 most frequent forms of English
(content/_band.py). Foundation 2 is a level above it, so it is written inside
the 4,000 most frequent. This file holds the difference: the forms ranked
roughly 2,201 to 4,000 in the same public frequency list the first band came
from, minus anything already in it.

It is a band, not a syllabus. A word in here is one Foundation 2's own prose
may use without glossing, in the same way Foundation 1 used its 2,200. The
words Foundation 2 formally teaches are the 330 in f2_wordplan.json, and they
were measured against Foundation 1's band, which is the right baseline
because it describes the student arriving at this book.

Some of the measured gap words turn out to sit in this tier. They are taught
anyway: they are the words Volume 1's academic passages actually lean on, and
a word a student can half-guess from frequency is not a word they can use.

Not for Foundation 1, which must stay inside the first band alone.
"""

BAND2 = set("""
a aaron abandon abandoned abby ability aboard absolute abuse academy
accent accepted accounts accused actions active activity actor actors actress
acts actual ad admiral admire adult advance adventure affairs africa
afterwards agency agents ages agreement ahh aid aii aim albert
album alcohol alert alexander ali alibi alien alley alpha amanda
ambassador ambulance amen americans andrew angela angeles angels anger angle
ann anne anniversary announcer annoying answered answering anthony anxious anytime
apology appeal appearance appeared appears apple apply approach approaching appropriate
april areas argue arguing argument armed arrange arranged arrive article
artists arts ashley asks assault assignment assure atmosphere attached attacks
attempt attend attitude attractive august auntie authorities authority average award
awfully awkward b background backup bags bail balance banging banks
barbara barking barry bars baseball basement basic basketball bastards bat
batman battery bay beans beard bears beast beaten beats becoming
bee beef beep beeps begging begins begun behalf behave behavior
beings believes bells belly beloved belt bend beneath benefit berlin
beside beth betrayed betty bible billion bills bishop bitches bits
bitter blade blah blake blast blessed blew blocks blonde blowing
blown blows bo bombs bond bone boom booth boots border
bored borrow boston bothering bottles bound bout bow bowl boxes
brad brains branch brand bravo breaks brick bride brief britain
bruce buck bud bug buildings bull bullets bum burden burns
burnt bury bush bust busted butter button buzz buzzing c
cab cabin cable cage california cameras campaign canada cancel candy
cap capable capital capture captured cared carlos carol caroline carrie
carried carter casey cast catching catherine cats causing cave cells
centre centuries ceremony chain chairman chamber champagne champion chances channel
chaos characters charged charity charlotte charm charming chasing chat chatter
chattering cheat cheated cheating checks cheer chffffff chicago chick childhood
chill chin chip chips chloe choices chop chosen chuck cia
cigarette cigarettes cinema circle circumstances circus cities citizen citizens civil
claim claims clark classes classic clay cleaned cleaning cleared clicking
clicks clients cliff climb clinic closet closing cloud clouds clown
clue coast cock coincidence coke cole colleague colleagues collect collection
colors colour comedy comfort comin comment commercial commission commissioner commit
committee communication companies compared complain complex comrade concentrate concert conditions
conference confess confession confidence confident confirm confirmed connect connected conscience
consequences considered considering constantly construction contest conversations convince convinced cooked
cookies cooper core corn corpse costs costume couch coughing counting
countries counts county covering cow coward craig crane creating creature
creatures creepy cried cries crimes criminals crisis critical crossed crown
cruel crush crystal culture cure curious current currently curse custody
customer customers cutting d daily damned dancer darkness dates daughters
davis deadly deaf dealer dean debt decent decisions deck deeper
deeply defeat defend defendant degree degrees delivered delivery demand demon
dennis deny depressed deputy derek describe desert deserves design designed
desperate despite dessert destiny destruction detail determined developed development device
diamond diamonds diana diane diet differently digging direct directly dirt
disappear disappointed disaster discover dish dishes distant district disturb divine
division divorced documents doll dollar donna dont doorbell doug downtown
dozen drag dragged dragon drama dramatic drank drawing drawn dreamed
dreaming dressing drew drill driven drives dropping duck duke dump
dumped dust dylan e earl earn earned ease eaten edge
education edward effects effort egg el elder election electric electricity
elena elephant elevator elizabeth ellen embarrassed embarrassing emotional emotions emperor
empire employees ending engaged engagement engineer enjoyed enjoying enormous entered
entirely entrance entry environment episode equal equipment erm escaped escort
estate eternal ethan eva eve events everyday ex exact exam
exchange exercise exhales exhausted existence exists exit experienced experiment expert
explained explanation explosion exposed express expression extraordinary extreme extremely f
fabulous facility facing facts fail failure fairy fallen falls false
fans fantasy farewell fascinating fashion favour favourite fed federal feeding
fella fellas fence festival fetch fever fields fifteen fifth fifty
fighter fights figures files films filthy financial fingerprints firing fishing
fits flag flash flesh flew flies florida flow flower fond
foolish fools footage footsteps former forms fort forth foster fourth
fox frame francis francisco frankie frankly fraud freaking freeze freezing
fridge friendly friendship frightened frozen fruit fuel fully furniture g
gain gambling garage garbage gasping gates gather gear gee gene
generation generous gentle germans germany gettin ghosts gifts gimme global
glory gloves goal goat goddess golf goodnight goods gordon gorgeous
governor grabbed grade granny granted grass grateful gray greater greek
greetings greg grey grief gross groups growling growls guarantee guards
guessing guide guilt guitar gunshot gus guts gym h habit
hail halfway hammer han hank hannah happily harold harvey hated
hates headache headquarters heal heavens heavily heck helen helicopter helpful
helps heroes herr hers hid highest highly highness highway hills
hire hitler hits hitting holds holes holiday holly hollywood homes
homework homicide honeymoon hong hood hop hoped hopefully hopes host
hostage houses howard hug humanity humming hundreds hung hunter hunting
hurting i ian id identify identity idiots ignore ii illegal
images imagination imagined impact impressed impression impressive incident increase incredibly
indians individual industry influence inform informed injured injury insist instance
instructions insult intelligence intelligent intend intense intention interests internal international
internet interrupt invented investigate investigating invisible invitation issues italy j
jackie jackson jacob jam jamie japan jay jazz jean jeez
jennifer jeremy jess jesse jessica jet jewish jews jin jo
joan joey johnson joined joining joint jokes jonathan jones jordan
joseph josh judges judgment judy juice julia julian julie july
jumped jumping june jungle junior junk justin karen karl katie
keith ken kenny kicking kidnapped kills kinds kingdom kissed kissing
kit kitty knee knees knight knocked kong kyle l lack
lad lads laid landed landing lane lap latest latin launch
laundry laws lawyers lazy le leaders leading leads league learning
legend lemon lend lessons lets levels lewis lf li liberty
library lifetime lightning lily limit linda link lion liquor listened
literally liver liz ll ln load loaded loan locker lois
lookin los loser lou louis louise lousy lovers loving loyal
loyalty ls lucas m mac machines madness magazine maggie magical
magnificent maid maintain makeup malcolm management manner marco marcus margaret
marie marks marrying mars marshall martha marty mask mason mass
massive matches material math matthew maya meantime meanwhile mental merely
merry messages messed messing metal mexico miami michelle mickey mighty
mile miller minds minor miserable mistaken mistakes mistress mix mixed
moaning mobile molly moments monica monitor monk monsieur monsters moral
morgan moron mostly motel motherfucker mothers motion motive motor mount
mountains mouse movement mud multiple mummy murders muscle museum musical
mustn mysterious n na nail nancy nasty natalie nate nathan
native naturally naughty navy nearby necklace negative neighbor neighbors nephew
nerve nerves net network newspaper nicely nicole nightmare nina noble
noon normally norman notes nothin novel nuclear o obey object
objection obsessed occasion occurred odds offense offering officially oi oliver
olivia online opera opposite option options orange ordinary organization oscar
ouch outfit owen owns oxygen p pa package packed pages
painful painted pan panic paperwork paradise parent parker parking particularly
parties partners passes passing passion passport pat pathetic patience patrick
patrol pattern payment pays peaceful pee pen penis penny percent
perform performance personality pet philip phones photograph pie pigs pile
pilot pin pink pipe pissed pit pitch placed plain plants
plastic plates players pleasant poetry pole policeman policy politics pope
popular population pork porn port possession possibility pot potatoes potential
pound pour powder practically praise prayer precious precisely presence presents
pretending prevent previous previously prick principal print prints prisoner prisoners
prize pro procedure proceed produce producer product production profile profit
progress promises properly propose protected protecting provide pulling pulse punch
punish punished punishment punk purse pushed pushing pussy puts quality
quarter quietly r rabbit racing ralph random randy range rape
raped rare rate rats raw reaction realise reasonable rebecca recall
receive recent reception reckon recommend recorded recording refuse refused related
relationships relatives released relief religion religious remains remarkable remembered reminds
remote remove removed replace reported reporter reports represent reputation required
rescue resist resistance resources respond response result returning reveal reverend
review revolution reward rice ricky riding rifle rip ripped rita
roads robbed robbery robin robot rocket rocks rolling roman romance
ron rooms rope ross rotten route routine row roy rubbish
rude rumbling russell russia russians ruth s sacred sacrifice safely
saint salad salary sale sales sally salt sammy sample sand
sandwich sandy sang sara satisfied sauce scale schedule schools scientific
scientist scientists scoffs score scotland scratch scream screeching screen script
seal sean searching seats sec section secure seek self selfish
senator sends senior sensitive sentence separate separated september serial series
servant served services serving session sets setting settled shadow shaking
shared sharing shark sharp shawn shed sheep shell shelter shift
shine ships shocked shoe shore shortly shoulder shoulders shout shown
shy sides signature signs silent similar sin singer sink sins
siren sisters skills skip skull slap slave slide slightly slip
slipped slut smaller smiling smoking smooth snake snap sneak soap
sobbing socks soda softly solid solution solve solved someday someplace
somethin sometime sons sophie souls sounded southern spain species specific
spending spin spirits spit spoken sport sports spy squad squeeze
st stabbed stable stairs stake stan standard stands stanley staring
starving statue status stays steady steak stealing steel stephen stepped
steps steven stock stones stopping stranger strangers strategy stress stretch
string strip stroke stronger struck structure struggle stubborn studied studies
studying subtitles succeed successful sucks sue suffered suffering suits superior
supper supplies supply surface surgeon surrender surrounded surveillance survival survived
susan suspects suspicious sweat swimming swing symbol sync systems t
tail tale talented talkin talks tank tap task tastes tattoo
tax taylor teachers teaching teams tear technically technology ted teddy
temperature tend tense tent term terribly terrific territory terrorist terry
testify testimony testing tests texas text theater theatre thee theme
therapy therefore thick thieves thin thirsty thirty thou threatened threatening
throne throughout throwing thrown thunder thursday thus thy tied tiger
timing tina tip tires title tits toast toby todd tokyo
tone tools tooth torture touching toward tower toy toys trace
tracking tracks tradition tragedy trail trained traitor transfer transferred transport
trapped trash trauma traveling treasure treated tribe tricks tries trigger
troops troubles trunk trusted tube tuesday tune tunnel turkey twelve
twenty twins tyler typical u ultimate unable unbelievable uncomfortable underground
underneath understanding underwear unhappy uniform unique units unknown unlike unusual
upper urgent useful uses valley valuable vampire ve vegas vehicle
version vic vice victor victoria vince vincent violent virgin virginia
virus vision visited visiting visitors voices von votes wailing walker
walks wallet wanting ward warehouse warn warned warrant warrior wars
washed wasted wasting waters wave waves wayne wealth wednesday western
wheel wheels whirring whiskey whispering whispers whistle whistling wicked wide
widow williams wilson windows wing wings winning wins wipe wire
wise wishes witch witnesses wives woke wolf wondered woo wore
worker workers worries worrying worthy wounded wounds wrap writer x
y yard yay ye yell youth yup zero zoe zone
""".split())
