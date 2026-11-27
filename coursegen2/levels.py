# -*- coding: utf-8 -*-
"""The level guard.

Every word a learner reads is checked against a core list for the book's band.
A word above the band fails the build unless it is one of three things:

  1. taught in the unit (the productive core, the receptive set, the phrase
     bank, the morphology table) - the whole point of the unit is to teach it;
  2. in the series' domain inventory, declared in the series file;
  3. in the unit's own `allow` list - the deliberate challenge item, kept to a
     handful, as is conventional.

When the gate fires, the fix is to PARAPHRASE into the band - up or down - not
to delete the idea. A unit that loses its content to pass a readability gate
has failed in a way no gate can see.
"""
import re

A1 = set("""
a about after again all also always am an and another answer any are arm around as ask at
away baby back bad bag be beautiful because bed been before begin behind best better between
big bird birthday black blue boat body book boot both bowl box boy bread break breakfast
bring brother brown build bus busy but buy by cake call can car card careful carry cat chair
change cheap check child children city class clean clear clock close clothes coat cold come
computer cook cool corner cost could country cup cut dad dance dark date daughter day dear
desk did die different difficult dinner do doctor does dog door down draw dress drink drive
drop dry during each ear early east easy eat egg eight either else end enough enter evening
ever every everybody everyone everything exercise eye face family far fast fat father feel
feet few find fine finger finish fire first fish five floor flower fly follow food foot for
forget four free friend from front fruit full fun game garden get girl give glass go good
goodbye grandmother great green grey ground group grow had hair half hand happen happy hard
has hat hate have he head hear heart heavy hello help her here high him his hold holiday home
hope hospital hot hotel hour house how hungry husband I ice idea if important in interesting
into is it its job join juice jump just keep key kind kitchen know lake lamp land large last
late laugh learn leave left leg lesson let letter library life light like line list listen
little live long look lose lot love low lunch made make man many map market may maybe me meat
meet men menu might milk minute miss mobile money month moon more morning most mother mouth
move much music must my name near need never new news next nice night nine no noise north
nose not nothing now number of off office often oh oil old on once one only open or orange
other our out outside over own page paint paper parent park part party pay pen pencil people
person phone photo pick picture piece place plan plant play please pocket point police poor
possible post potato practise prefer pretty price problem put question quick quickly quiet
quite radio rain read ready real really red remember repeat rest restaurant return rice rich
ride right ring river road room round run sad safe said salt same sat save say school sea
season seat second see sell send sentence seven several she sheet shoe shop short should show
sick side sign silver simple since sing sister sit six sleep slow small smile snow so some
somebody something sometimes son song soon sorry sound soup south speak special spell spend
spoon sport spring stand star start station stay still stop story street strong student study
subject sugar summer sun supper sure sweet swim table take talk tall tea teach teacher team
telephone television tell ten test than thank that the their them then there these they thing
think third thirsty this those three through throw ticket time tired to today together
tomorrow tonight too tooth top town train travel tree trousers true try turn twelve twenty
two under understand university until up us use usually vegetable very video village visit
wait wake walk wall want warm wash watch water way we wear weather week weekend welcome well
west wet what when where which while white who why wife will win wind window winter with
without woman women word work world would write wrong year yellow yes yesterday you young
your
""".split())

A2 = A1 | set("""
complain complains complained complaint complaints signal signals
explanation explanations explaining explains explained
able above accept accident across activity actually add address adult advice afraid afternoon
even examination identify medical history guidance belong born calm
cannot realise realize suppose sore leaflet paste gentle colleague
against onto underneath blank alike further replace translate tutor
bound hunt base wisdom
age ago agree ahead air airport allow almost alone along already although among amount angry
animal announce another answer anybody anything anyway apart appear apple area argue arrive
art article artist asleep attack attend attention available average avoid awake aware
baby back badly bank bath bathroom beach bear beat become bedroom beer begin beginning behave
believe bell belong below bend beside besides bicycle bill birth bite block blood blow board
boil bone bored boring borrow bottle bottom brain branch brave bread breathe bridge brief
bright brush building burn bury bush business butter button cafe camera camp cancel candle
capital care career careless case cash castle catch cause ceiling celebrate centre century
certain certainly chance character charge cheese chemist chest chicken choice choose church
cigarette cinema circle clever climb clock close cloth cloud club coast coffee coin collect
college colour comfortable common company compare complete computer concert condition
confident confuse connect consider contact contain continue control conversation copy corner
correct cotton count course cover crash cream create credit cross crowd cry cup cupboard
curtain customer cycle damage dangerous dark dead deal death decide decision deep degree
delay deliver dentist depend describe desert design destroy detail develop diary die diet
difference dinner direct direction dirty disappear discover discuss disease dish distance
divide doctor dollar double doubt download downstairs dozen drawer dream drive driver drop
drug dust duty each earn earth east edge education effect effort electric electricity email
embarrassed emergency empty encourage energy engine engineer enjoy enough enter entrance
environment equal equipment escape especially event everywhere exact example excellent except
exchange excited exciting excuse exist exit expect expensive experience experiment expert
explain express extra fact factory fail fair fall false famous fan farm fashion fault
favourite fear feed feeling female fence festival field fight fill film final finally finger
finish fit fix flat flight float floor flour fly fold foreign forest forever forget forgive
fork form forward fresh fridge friendly frighten fry fuel furniture future gain garage gas
gate gather general gentleman gift glass glove goal gold golf government grade grammar grass
great greet ground grow guard guess guest guide guitar gun habit hall hang happen happiness
harm hate health healthy heat heavy height hide hill history hit hobby hold hole holiday
honest hope horse hospital host however human humour hurry hurt husband ice idea ignore
ill illness image imagine immediately important impossible improve include increase indeed
industry influence information injure insect inside insist instead instruction instrument
insurance intend interest internet interview introduce invent invitation invite iron island
issue item jacket jam jazz jewellery joke journey judge juice jump keep kick kill kilo kind
king kiss kitchen knee knife knock knowledge lack ladder lady lake language last laugh law
lawyer lay lazy lead leader leaf learn least leather leave lecture left legal lemon lend
length less lesson level library lie lift light likely limit lion liquid list listen litre
little local lock lonely look lorry lose loss loud love lovely luck lucky luggage machine
mad magazine main major make male manage manager mark market marry match material matter
meal mean meaning measure medicine medium meet melt member memory mention message metal
method middle mind mine minute mirror miss mistake mix model modern moment monkey month
mood moon moreover morning mountain mouse move movement murder museum mushroom music must
narrow nation natural nature near nearly neat necessary neck need needle neighbour neither
nervous net network news newspaper noise noisy none nor normal north note notice novel
nurse object ocean offer office officer official oil once onion online operate opinion
opportunity opposite order ordinary organise original other otherwise ought outside oven
over own owner pack package page pain paint painting pair palace pale paper parcel pardon
parent park part particular partner pass passenger passport past path patient pattern pause
peace pen pencil penny people pepper per perfect perform perhaps period permission person
personal petrol phone photograph physical piano pick picnic picture piece pig pile pilot pin
pink pipe pity place plain plan plane plant plastic plate platform play pleasant please
pleasure plenty pocket poem point poison police polite pollution pool poor popular
population port position possible post pot potato pound pour power practical practice
prepare present president press pressure pretend prevent previous price pride print prison
private prize probably problem produce product programme progress project promise
pronounce proper protect proud provide public pull punish pupil pure purple purpose push
put quality quantity quarter queen question queue quick quiet quietly quite race radio
railway rain raise range rare rate rather reach react read ready real reason receive
recent recipe recognise record recover reduce refuse regard region regular relation
relax release remain remember remind remove rent repair repeat reply report represent
request require rescue research reserve respect responsible rest restaurant result return
rice rich ride ring rise risk river road rock role roll roof room root rope rough round
row rub rubbish rude rule run rush sad safe safety sail salad sale salt same sand
satisfy sauce save say scene school science scissors score scream screen sea search season
seat second secret secretary section see seed seem select sell send sense sentence separate
serious serve service set several sex shade shadow shake shall shame shape share sharp
shave she sheep sheet shelf shine ship shirt shock shoe shoot shop short shoulder shout
show shower shut sick side sight sign signal silence silent silk silly silver similar
simple since sing single sink sister sit situation size skill skin skirt sky sleep slice
slide slip slow small smell smile smoke smooth snake snow soap social society sock soft
soil soldier solid solve some somewhere son song soon sorry sort sound soup south space
speak special speech speed spell spend spill spoon sport spot spread spring square stage
stair stamp stand standard star start state station stay steal steam step stick still stone
stop store storm story straight strange street stress stretch strict strike string strong
structure struggle student study stuff stupid style subject succeed success such sudden
suffer sugar suggest suit suitable summer sun supermarket supply support suppose sure
surface surprise surround survive sweet swim switch system table tail take talk tall tape
taste tax taxi tea teach team tear technology telephone television tell temperature
temporary tennis tent term terrible test text than thank theatre then therefore thick thin
thing think thirsty though thought threat throat through throw thumb ticket tidy tie tight
till time tiny tip tired title today toe together toilet tomato tomorrow tongue tonight
tool tooth top total touch tour tourist towards towel tower town toy track trade traffic
train transport travel treat tree trip trouble trousers truck true trust truth try tube
turn twice type typical ugly umbrella uncle under understand underwear unfortunately
uniform unit universe university unless until unusual upstairs use useful user usual
valley valuable value various vegetable vehicle version very victim video view village
violence visit visitor voice volume vote wage wait wake walk wall wallet want war warm
warn wash waste watch water wave way weak wear weather website wedding week weigh weight
welcome well west wet wheel when where whether which while whisper whistle white who
whole why wide wife wild will win wind window wine wing winner winter wire wise wish
with within without witness woman wonder wood wool word work world worry worse worth would
wound wrap write wrong yard year yellow yes yesterday yet young
""".split())

B1 = A2 | set("""
bent blade blades glance glances load loads loaded learnt polish polishes
polished appearance appearances trap traps
act acts acted acting reference references optional possibly origin origins
series adjacent furthest remainder remainders
alive depth upset loose skip skips skipped overlap overlaps vertical
easily easier continuous continuously centimetre centimetres metre metres
complain complains complained complaint complaints signal signals
abroad action actions aloud classmate classmates simply shorten shortens
accuse accuses accusing exam exams
shortened lengthen lengthened
award awards awarded parallel correction corrections locate locates located
heal heals healed band bands script scripts decoration whose cell cells
numb drill drills drilled drilling socket sockets edge edges volume
absolutely abstract academic access accommodation account accurate achieve acknowledge
acquire adapt adequate adjust administration admire admit advantage adventure advertise
affect afford agency agenda aggressive aim alarm alcohol alternative ambition analyse
ancient annoy annual anxious apologise apparent apply appoint appreciate approach
appropriate approve approximately architecture argument arrange arrest aspect assess
assist associate assume assure atmosphere attach attempt attitude attract audience
authority automatic awful background balance ban bargain barrier basic basis battle
behaviour belief benefit bitter blame boundary breath broad budget calculate calm campaign
capable capacity capture category ceremony challenge championship characteristic charity
chemical circumstance citizen civil claim client climate code collapse colleague combine
comment commercial commit committee communicate community compete competition complain
complex complicated component concentrate concept concern conclude conclusion conduct
confidence confirm conflict confuse congratulate conscious consequence conservative
consist constant construct consult consume contemporary content context contract
contrast contribute convenient convince cooperate core corporate correspond cost
council counter crack craft crash creative crisis criterion critical criticise crucial
cultural culture cure curious current cycle data deadline debate debt decade decline
decorate dedicate defeat defend define definite delay delicate deliberate demand
demonstrate deny department depend deposit depress derive descend describe desire
despite destination detect determine device devote diagnose differ digital dimension
diminish disagree disappoint disaster discipline discount dismiss display dispute
distinct distinguish distribute district disturb diverse document domestic dominate
donate draft dramatic drought due duty eager economic economy edit educate effective
efficient element eliminate elsewhere embrace emerge emotion emphasise employ enable
enclose encounter endure enforce engage enhance enormous ensure entertain enthusiasm
entire entitle entry environment episode equip equivalent era error essential establish
estate estimate ethical evaluate eventually evidence evident exceed exception exchange
exclude executive exhibit expand expense explore export expose extend extent external
extreme facility factor faith familiar fare feature federal fee female fibre figure
finance firm flexible fluent focus forecast formal format former fortunate foundation
framework frequent function fundamental furthermore gain gap gender generate generation
genuine gesture globe govern grab grade gradual grant graphic grateful guarantee guideline
handle hardly harvest hence heritage hesitate highlight hire historic household housing
identify identity illustrate immediate impact implement imply import impose impress
incident incline income incorporate indicate individual industrial inevitable infect
inform initial initiative injury innocent innovation input inquiry insert inspect inspire
install instance institute instruct insure intense intention interact interfere internal
interpret invest investigate involve isolate journal justify label labour launch layer
leading legal legislation leisure liberal licence likewise link literature loan located
logical loyal maintain majority manner manual manufacture margin mature maximum
meanwhile mechanism media medical mental mere merely minimum minor mode monitor moral
motivate multiple mutual narrative negative neglect negotiate nevertheless niche
nonetheless norm notion nuclear objective observe obtain obvious occasion occupy occur
odd offence operate opponent option organic outcome outline output overall overcome
overlook participate particular partly passage passive patient perceive percentage
permanent permit persist perspective phase phenomenon philosophy physical plot policy
portion portray positive potential precise predict prejudice preliminary presence preserve
previous primary principal principle prior priority procedure proceed process profession
professional profile profit prohibit promote prompt proportion proposal propose prospect
protest prove psychology publish purchase pursue qualify quotation random range ratio
react recall recommend recruit reduce refer reflect reform refugee regarding regime
region register regret regulate reinforce reject relate relative relevant reliable
relieve religion reluctant rely remark remote remove render repetition reputation
request resident resign resist resolve resource respond response restore restrict
retain retire reveal revenue reverse review revise revolution reward rhythm rigid
rival routine sample satisfy scale scan scenario schedule scheme scope sector secure
seek seize select sequence session settle severe shift shortage significant similar
situation slight sole somewhat sophisticated source spare specialist specific specify
spectacular spin split sponsor stability stable statistic status steady stimulate
strategy strengthen strictly structure submit subsequent substance substantial subtle
sufficient suggest summary superior supplement surgery survey suspect suspend sustain
switch symbol sympathy symptom tackle talent target technical technique temporary tempt
tendency tension terminal territory theme theory thorough threaten thus tissue tolerate
trace tradition transfer transform transition transmit treatment trend trial trigger
ultimate undergo undertake unique unite universal unlikely update upgrade urban urge
utility utilise vacant valid vary venture venue version via violate virtual virtue
visible vision visual vital volunteer vulnerable welfare whereas whereby widespread
willing withdraw witness yield zone
""".split())

B2 = B1 | set("""
abandon abolish abundant accelerate accompany accomplish accordance accumulate accusation
adhere adjacent advocate aesthetic affiliate aggregate allege alleviate allocate allude
ambiguous amend ample analogy anomaly anticipate apparatus arbitrary articulate ascertain
aspire assemble assert asset assign assumption attain attribute augment authentic autonomy
avert benchmark bias bulk bureaucracy candid capital cease cite clarify coherent coincide
collaborate commence commodity compel compensate compile complement compliance comply
comprehensive comprise compromise conceive concede conceptual concise condense confer
configure confine conform confront consecutive consensus consent considerable consistent
console conspicuous constitute constrain contemplate contend contingency contradict
controversy conversely convey conviction correlate corrupt credible criteria cumulative
curtail deduce deem defer deficiency deficit delegate deliberately denote depict deprive
derive designate detain deteriorate deviate devise diagnosis differentiate discard discern
disclose discreet discrete discretion disperse disposal disseminate dissent distort
diversify divert doctrine drawback elaborate elicit embed empirical emulate enact
endorse entail entrepreneur equilibrium erode essence evoke exacerbate exempt exert
exhaust exhibit explicit exploit extract facilitate fluctuate forgo formulate foster
fraction fragment framework fraud fulfil fuse generic grievance hierarchy hinder hypothesis
ideology illuminate immerse imminent impair impartial impede imperative implication
implicit incentive incidence inclination incur indefinite indicative induce indulge
inference infrastructure inherent inhibit initiate innate insight instigate integral
integrate integrity intellectual intercept interim intermediate interpretation intervene
intricate intrinsic intuitive invoke irrespective jurisdiction juxtapose legitimate
leverage liability liaison literal magnitude mandate manifest manipulate marginal
mediate mediocre merge methodology meticulous mitigate modify momentum mundane negligible
nominal notwithstanding nurture obscure offset ongoing onset optimal oversee paradigm
parameter paramount partial pending perceive peripheral persistent pertinent pervasive
plausible pose posit postulate practitioner precedent preclude predominant preliminary
premise prescribe presume prevail proficiency profound proliferate prominent propensity
proponent provision proximity prudent qualitative quantitative radical ratify rationale
reciprocal reconcile rectify redundant refine refute regulate reiterate relinquish
remainder reminiscent remuneration render replicate repository reproduce resemble
residual resolve respective restrain retrieve revenue rigorous robust rudimentary
sanction scarce scrutiny sequential simulate simultaneous sceptical speculate sporadic
stagnant stance stipulate straightforward subordinate subsidise succinct supersede
supplement surpass susceptible synthesis tangible tentative terminate threshold
transcend transparent unanimous underlying undermine underpin uniform unprecedented
validate variable verify viable vigorous warrant whereby widespread
""".split())

# The language of study itself. A course whose job is to teach a student to
# define, classify, describe and argue cannot bar the words for doing so, at
# any level. This set is allowed in the student series only, and it is small
# and closed on purpose.
ACADEMIC = set("""
convention conventions select selects selected selection selections
abbreviate abbreviates abbreviated abbreviation abbreviations
ambiguity ambiguous infer infers inferred omission omissions
precision imprecision consistently interchangeably arbitrary likelihood
composition structural interchangeable memorise memorises memorised
stimulus stimuli consequence consequences examinable scheme schemes marker markers
clause clauses defensible division divisions dictate dictates dictated
designate designates designation designations
dictation notation notations
define defines defined defining definition definitions describe describes
described describing description descriptions classify classifies classified
classifying classification category categories feature features example
examples diagram diagrams label labels labelled labelling heading headings
compare compares compared comparing comparison contrast contrasts contrasted
differ differs differed difference differences distinction distinguish
evidence reason reasons explain explains explained explaining explanation
summary summarise summarised state states stated statement statements
structure structures function functions position positions surface surfaces
layer layers boundary boundaries region regions according therefore however
although whereas thus because consist consists consisting composed
essay examination examiner examine examines examined marking mark marks
lecture lecturer tutorial supervisor supervise supervised seminar notes
observe observes observed observation observations record records recorded
accurate accuracy precise precisely exactly specific general
method methods process processes procedure procedures stage stages step steps
beneath above below between within outside inside upper lower anterior
account accounted accounting term terms technical everyday
noun nouns verb verbs plural singular ordinal adjective adverb phrase phrases
quotation quotations sentence sentences paragraph paragraphs topic topics
sequence sequences order ordered ordering
""".split())

BANDS = {'A1': A1, 'A2': A2, 'B1': B1, 'B2': B2, 'C1': B2}

NUMBERS = set("""
one two three four five six seven eight nine ten eleven twelve thirteen fourteen
fifteen sixteen seventeen eighteen nineteen twenty thirty forty fifty sixty
seventy eighty ninety hundred thousand million
first second third fourth fifth sixth seventh eighth ninth tenth eleventh
twelfth thirteenth fourteenth fifteenth sixteenth seventeenth eighteenth
nineteenth twentieth thirtieth
monday tuesday wednesday thursday friday saturday sunday
january february march april may june july august september october november
december
""".split())

# Irregular forms the suffix stripper cannot reach.
IRREGULAR = {
 'am': 'be', 'is': 'be', 'are': 'be', 'was': 'be', 'were': 'be', 'been': 'be',
 'being': 'be', 'has': 'have', 'had': 'have', 'having': 'have', 'does': 'do',
 'bit': 'bite', 'bitten': 'bite', 'did': 'do', 'done': 'do', 'doing': 'do', 'goes': 'go', 'went': 'go',
 'gone': 'go', 'going': 'go', 'says': 'say', 'said': 'say', 'saw': 'see',
 'seen': 'see', 'seeing': 'see', 'told': 'tell', 'telling': 'tell',
 'wrote': 'write', 'written': 'write', 'writing': 'write', 'ran': 'run',
 'running': 'run', 'took': 'take', 'taken': 'take', 'taking': 'take',
 'gave': 'give', 'given': 'give', 'giving': 'give', 'got': 'get',
 'gotten': 'get', 'getting': 'get', 'made': 'make', 'making': 'make',
 'came': 'come', 'coming': 'come', 'knew': 'know', 'known': 'know',
 'thought': 'think', 'found': 'find', 'left': 'leave', 'leaving': 'leave',
 'kept': 'keep', 'keeping': 'keep', 'put': 'put', 'putting': 'put',
 'read': 'read', 'reading': 'read', 'heard': 'hear', 'felt': 'feel',
 'meant': 'mean', 'sat': 'sit', 'sitting': 'sit', 'stood': 'stand',
 'brought': 'bring', 'bought': 'buy', 'caught': 'catch', 'chose': 'choose',
 'chosen': 'choose', 'drank': 'drink', 'drove': 'drive', 'driven': 'drive',
 'ate': 'eat', 'eaten': 'eat', 'fell': 'fall', 'fallen': 'fall',
 'forgot': 'forget', 'forgotten': 'forget', 'held': 'hold', 'lost': 'lose',
 'met': 'meet', 'meeting': 'meet', 'paid': 'pay', 'sent': 'send',
 'shown': 'show', 'slept': 'sleep', 'spoke': 'speak', 'spoken': 'speak',
 'spent': 'spend', 'taught': 'teach', 'understood': 'understand',
 'wore': 'wear', 'worn': 'wear', 'won': 'win', 'began': 'begin',
 'begun': 'begin', 'broke': 'break', 'broken': 'break', 'built': 'build',
 'chose': 'choose', 'cut': 'cut', 'felt': 'feel', 'fought': 'fight',
 'flew': 'fly', 'grew': 'grow', 'hit': 'hit', 'hurt': 'hurt', 'let': 'let',
 'lay': 'lie', 'lit': 'light', 'rose': 'rise', 'sold': 'sell', 'shut': 'shut',
 'sang': 'sing', 'spoilt': 'spoil', 'stuck': 'stick', 'struck': 'strike',
 'swam': 'swim', 'threw': 'throw', 'thrown': 'throw', 'woke': 'wake',
 'wound': 'wind', 'worse': 'bad', 'worst': 'bad', 'better': 'good',
 'best': 'good', 'children': 'child', 'men': 'man', 'women': 'woman',
 'teeth': 'tooth', 'feet': 'foot', 'people': 'person', 'lives': 'life',
 'knives': 'knife', 'leaves': 'leaf', 'shelves': 'shelf', 'wives': 'wife',
 'mice': 'mouse', 'dealt': 'deal', 'laid': 'lay', 'drew': 'draw',
 'drawn': 'draw', 'became': 'become', 'become': 'become',
}

# Everyday compounds and inflections the stripper cannot reach, plus the
# grammatical furniture of exercise rubrics.
EXTRA = set("""
ing
a.m p.m ok okay mr mrs ms dr st etc vs per cent percent o'clock
yours sincerely faithfully dear re cc
one's someone's anyone's everybody's
rubric gapped underline circle tick cross match complete rewrite bold italic
preview previewed task tasks example examples checklist transcript transcripts
recording recordings model models frame scaffold swap partner pairs unit units
answer answers gap gaps heading headings note notes figure figures caption
exercise exercises vocabulary grammar listening speaking reading writing review
nobody anybody everybody somebody myself yourself himself herself itself
ourselves yourselves themselves whenever wherever whoever whatever however
anywhere everywhere nowhere somewhere
tray treatment trays treatments
verb verbs noun nouns adjective adjectives question questions
sentence sentences word words phrase phrases column columns row rows
""".split()) | NUMBERS

SUFFIXES = [("ies", "y"), ("ied", "y"), ("ier", "y"), ("iest", "y"),
            ("ing", ""), ("ed", ""), ("es", ""), ("s", ""), ("ly", ""),
            ("er", ""), ("est", ""), ("'s", ""), ("n't", ""),
            ("ment", ""), ("ments", ""), ("ness", ""), ("ful", ""),
            ("less", ""), ("wards", ""), ("ward", ""), ("able", ""),
            ("ation", "e"), ("ations", "e"), ("ation", ""), ("ations", ""),
            ("aint", "ain"), ("aints", "ain")]
PREFIXES = ["mis", "un", "re", "pre", "over", "under", "non", "dis"]
WORD = re.compile(r"[A-Za-z][A-Za-z'’-]*")


def _forms(w):
    """Every reasonable base form of a surface word.

    Affixes are stripped to a fixed point rather than once, so that a word
    carrying both a prefix and a suffix - uncovered, rewritten, misreported -
    reaches the base the word lists actually hold.
    """
    w = w.lower().replace('’', "'")
    out = {w}
    frontier = {w}
    for _ in range(3):
        new = set()
        for x in frontier:
            if x in IRREGULAR:
                new.add(IRREGULAR[x])
            for suf, rep in SUFFIXES:
                if x.endswith(suf) and len(x) - len(suf) >= 2:
                    base = x[:len(x) - len(suf)] + rep
                    new.add(base)
                    new.add(base + 'e')          # live/lived, use/using
                    if len(base) > 2 and base[-1] == base[-2]:
                        new.add(base[:-1])       # stop/stopped, run/running
            for pre in PREFIXES:
                if x.startswith(pre) and len(x) - len(pre) >= 3:
                    new.add(x[len(pre):])
            for part in x.split('-'):
                if len(part) > 2:
                    new.add(part)
        new -= out
        if not new:
            break
        out |= new
        frontier = new
    return out


def _compound_ok(w, allowed):
    """lunchtime = lunch + time. Both halves known means the word is known."""
    for i in range(3, len(w) - 2):
        if (allowed & _forms(w[:i])) and (allowed & _forms(w[i:])):
            return True
    return False


def check(texts, band, taught=(), domain=(), allow=(), academic=False):
    """Return the words above the band, with the sentence each came from."""
    allowed = set(BANDS[band]) | EXTRA
    if academic:
        allowed |= ACADEMIC
    for group in (taught, domain, allow):
        for phrase in group:
            for w in WORD.findall(str(phrase).lower()):
                allowed.add(w)
    hits = {}
    for t in texts:
        for s in re.split(r'(?<=[.!?])\s+', str(t)):
            for w in WORD.findall(s):
                lw = w.lower().replace('’', "'")
                if lw.isdigit() or len(lw) < 3:
                    continue
                if w[0].isupper() and lw not in allowed:
                    continue                      # proper noun
                if allowed & _forms(lw):
                    continue
                if len(lw) > 6 and _compound_ok(lw, allowed):
                    continue
                hits.setdefault(lw, s.strip()[:80])
    return hits
