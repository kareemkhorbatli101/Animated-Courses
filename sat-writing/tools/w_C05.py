# -*- coding: utf-8 -*-
"""Chapter 5 - plural and possessive nouns. Home domain HUM.

Key plans: HIS BDACBADCAC, BIO CABDCBADBD, PHY DBCADCBACA, HUM ACDBADCBDB,
SOC BDACBADCAC.
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import xemit                                                            # noqa: E402

CHAPTER = 5

AR = dict(
    qaida="الجمع والملكية بابان يُختبران معاً لأن الفاصلة العليا هي ما يفرّق بينهما. فالاسم "
          "المفرد المالك يأخذ فاصلة عليا ثمّ سيناً، والجمع المنتهي بسين يأخذ الفاصلة بعد "
          "السين لا قبلها، والجمع الذي لا يملك شيئاً لا يأخذ فاصلة أصلاً. وجمع التكسير الذي "
          "لا ينتهي بسين يأخذ فاصلة ثمّ سيناً كالمفرد.",
    kayf="يعرض الاختبار أربع صور للكلمة الواحدة: المفرد، والجمع، والمفرد المالك، والجمع "
         "المالك. فالسؤال ليس هل تعرف القاعدة بل أيّ المعاني أرادته الجملة: واحد يملك، أم "
         "كثير يملك، أم كثير لا يملك.",
    fakh="الفخّ أن الصور الأربع تُلفظ لفظاً واحداً تقريباً، فلا يفيد السمع شيئاً. والعلاج أن "
         "تسأل سؤالين: هل بعد الكلمة اسم مملوك؟ وهل المالك واحد أم أكثر؟ فجواب السؤالين "
         "يعيّن الصورة تعييناً لا يحتمل غيره.",
    sila="الجمع والملكية من أكثر أبواب قواعد الإنجليزية المعيارية تكراراً في اختبار سات، "
         "وأقلّها احتياجاً إلى حفظ: قاعدتان فقط تحكمان الصور الأربع. وتعود الفاصلة العليا في "
         "فصل العبارات المعترضة حيث تُستعمل لغرض آخر تماماً.",
)

HIS = dict(domain='HIS', note_ar=(
    "جمل التاريخ والنظام المدني مليئة بالمالكين الجماعيين: مطالب العمّال، وحجج الموقّعين، "
    "وقرارات المحكمة. وهذه كلّها جموع مالكة، وهي أصعب الصور الأربع لأن السين موجودة قبل "
    "الفاصلة."), xs=[
    dict(strand='HIS-S01', pos=1,
         carrier="The fifty-six ___ who signed the Declaration did not all sign on the same "
                 "day.",
         rule='plural_plain', rule_span='signers',
         opts=["signer's", 'signers', "signers'", 'signer'], key='B',
         faults={'A': ('poss_for_plural', "signer's"),
                 'C': ('poss_for_plural', "signers'"),
                 'D': ('wrong_plural', 'signer')},
         why="The word is a plain plural that possesses nothing, so it takes no apostrophe.",
         trap="C looks like the careful choice because the noun is plural, but a plural "
              "owning nothing needs no mark."),
    dict(strand='HIS-S02', pos=2,
         carrier="The ___ veto can be overridden only by a two-thirds vote in both "
                 "chambers.",
         rule='sing_possessive', rule_span="President's",
         opts=['Presidents', "Presidents'", 'President', "President's"], key='D',
         faults={'A': ('plural_for_poss', 'Presidents'),
                 'B': ('poss_misplaced', "Presidents'"),
                 'C': ('poss_missing', 'President')},
         why="One officeholder owns the veto, so the noun takes the singular possessive "
             "form, apostrophe before the s.",
         trap="B puts the apostrophe after the s, which would mean several presidents share "
              "one veto."),
    dict(strand='HIS-S03', pos=3,
         carrier="The early ___ requirements for citizenship included two years of "
                 "residence and good moral character, and a petition to drop the racial bar "
                 "failed in 1795.",
         rule='plural_possessive', rule_span="statutes'",
         opts=["statutes'", "statute's", 'statutes', 'statute'], key='A',
         faults={'B': ('poss_misplaced', "statute's"),
                 'C': ('plural_for_poss', 'statutes'),
                 'D': ('poss_missing', 'statute')},
         why="Several statutes own the requirements, so the plural possessive takes the "
             "apostrophe after the s that is already there.",
         trap="B marks one statute as the owner, which the word early and the plural "
              "requirements both contradict."),
    dict(strand='HIS-S04', pos=4,
         carrier="An argument resting on natural rights draws ___ force from a premise that "
                 "its opponents also accept, which is why abolitionists used it so often.",
         rule='its_possessive', rule_span='its',
         opts=["it's", "its'", 'its', 'it'], key='C',
         faults={'A': ('poss_for_plural', "it's"), 'B': ('poss_for_plural', "its'"),
                 'D': ('wrong_plural', 'it')},
         why="Its is the possessive form of it and carries no apostrophe at all, unlike "
             "every noun in this chapter.",
         trap="A is the contraction of it is, which cannot stand in front of a noun it is "
              "meant to own."),
    dict(strand='HIS-S05', pos=5,
         carrier="The ___ enforcement clause is what later Congresses relied on, once the "
                 "courts had emptied the rest of it of content.",
         rule='sing_possessive', rule_span="amendment's",
         opts=['amendments', "amendment's", "amendments'", 'amendment'], key='B',
         faults={'A': ('plural_for_poss', 'amendments'),
                 'C': ('poss_misplaced', "amendments'"),
                 'D': ('poss_missing', 'amendment')},
         why="One amendment owns the clause, so the singular possessive is right, with the "
             "apostrophe before the s.",
         trap="C would make several amendments share a single enforcement clause, which is "
              "not what the sentence says."),
    dict(strand='HIS-S06', pos=6,
         carrier="The ___ demands at Homestead were for recognition rather than for wages, "
                 "and the company's refusal to recognize the union was what the strike was "
                 "finally about.",
         rule='plural_possessive', rule_span="strikers'",
         opts=["strikers'", "striker's", 'strikers', 'striker'], key='A',
         faults={'B': ('poss_misplaced', "striker's"),
                 'C': ('plural_for_poss', 'strikers'),
                 'D': ('poss_missing', 'striker')},
         why="Many strikers own the demands, so the plural possessive puts the apostrophe "
             "after the existing s.",
         trap="C drops the apostrophe entirely and leaves the demands belonging to nobody."),
    dict(strand='HIS-S07', pos=7,
         carrier="The brief that won the school cases was ___ joint work, and neither man "
                 "would afterward claim the larger share of it in public, though their "
                 "collaborators disagreed about who had done what.",
         rule='joint_possession', rule_span="Marshall and Houston's",
         opts=["Marshall's and Houston's", 'Marshall and Houstons',
               'Marshall and Houston', "Marshall and Houston's"], key='D',
         faults={'A': ('poss_misplaced', "Marshall's and Houston's"),
                 'B': ('plural_for_poss', 'Marshall and Houstons'),
                 'C': ('poss_missing', 'Marshall and Houston')},
         why="One brief belongs to both men together, and joint possession marks only the "
             "last name in the pair.",
         trap="A marks both names and so says each man had a brief of his own, which the "
              "word joint denies."),
    dict(strand='HIS-S08', pos=8,
         carrier="The ___ suffrage campaign split in 1869 over whether to support an "
                 "amendment that enfranchised black men and left women out, and the two "
                 "wings did not reunite for twenty years.",
         rule='irregular_plural_poss', rule_span="women's",
         opts=['women', 'womens', "women's", "womens'"], key='C',
         faults={'A': ('poss_missing', 'women'), 'B': ('plural_for_poss', 'womens'),
                 'D': ('poss_misplaced', "womens'")},
         why="Women is already an irregular plural and does not end in s, so it takes an "
             "apostrophe and then an s, exactly as a singular would.",
         trap="D treats women as though it were a regular plural ending in s and puts the "
              "apostrophe after a letter that is not there."),
    dict(strand='HIS-S09', pos=9,
         carrier="The ___ convictions under the wartime sedition statutes were mostly of "
                 "editors rather than of spies, and the Supreme Court, which upheld the "
                 "statutes while the war lasted, never squarely reconsidered them once it "
                 "had ended.",
         rule='plural_possessive', rule_span="defendants'",
         opts=["defendants'", "defendant's", 'defendants', 'defendant'], key='A',
         faults={'B': ('poss_misplaced', "defendant's"),
                 'C': ('plural_for_poss', 'defendants'),
                 'D': ('poss_missing', 'defendant')},
         why="Many defendants own the convictions, so the plural possessive places the "
             "apostrophe after the s.",
         trap="B marks a single defendant as the owner of convictions the sentence counts "
              "in the plural throughout."),
    dict(strand='HIS-S10', pos=10,
         carrier="The partnership that built the first penny papers was ___ idea before it "
                 "was anyone else's, and the model of selling cheaply to a large audience "
                 "and recovering the cost from advertisers outlived both of them by a "
                 "century and a half.",
         rule='joint_possession', rule_span="Day and Bennett's",
         opts=["Day's and Bennett's", 'Day and Bennetts', "Day and Bennett's",
               'Day and Bennett'], key='C',
         faults={'A': ('poss_misplaced', "Day's and Bennett's"),
                 'B': ('plural_for_poss', 'Day and Bennetts'),
                 'D': ('poss_missing', 'Day and Bennett')},
         why="The idea belonged to the two of them together, and joint possession marks "
             "only the second name.",
         trap="A marks each name separately, which would give the two men one idea apiece "
              "rather than one between them."),
])

BIO = dict(domain='BIO', note_ar=(
    "جمل الأحياء وعلوم الأرض تستعمل جموعاً شاذّة لا تنتهي بسين، مثل البكتيريا والأنوية "
    "واليرقات، وهذه تأخذ الفاصلة ثمّ السين كالمفرد تماماً، وهو ما يخالف توقّع الطالب."), xs=[
    dict(strand='BIO-S01', pos=1,
         carrier="A ___ fitness is measured by the offspring it leaves, not by how long it "
                 "lives.",
         rule='sing_possessive', rule_span="organism's",
         opts=['organisms', "organisms'", "organism's", 'organism'], key='C',
         faults={'A': ('plural_for_poss', 'organisms'),
                 'B': ('poss_misplaced', "organisms'"),
                 'D': ('poss_missing', 'organism')},
         why="One organism owns the fitness, so the singular possessive is right, with the "
             "apostrophe before the s.",
         trap="B puts the apostrophe after the s and so hands the fitness to a group rather "
              "than to the single organism the sentence names."),
    dict(strand='BIO-S02', pos=2,
         carrier="The seven ___ that Mendel followed each sorted independently of the other "
                 "six.",
         rule='plural_plain', rule_span='traits',
         opts=['traits', "trait's", "traits'", 'trait'], key='A',
         faults={'B': ('poss_for_plural', "trait's"),
                 'C': ('poss_for_plural', "traits'"),
                 'D': ('wrong_plural', 'trait')},
         why="The word is a plain plural owning nothing, so it takes no apostrophe at all.",
         trap="C is the form a writer reaches for when a noun is plural, though plurality "
              "alone never calls for a mark."),
    dict(strand='BIO-S03', pos=3,
         carrier="A mitochondrion folds ___ inner membrane so tightly that the surface "
                 "inside it is many times the area of the smooth outer one.",
         rule='its_possessive', rule_span='its',
         opts=["it's", 'its', "its'", 'it'], key='B',
         faults={'A': ('poss_for_plural', "it's"), 'C': ('poss_for_plural', "its'"),
                 'D': ('wrong_plural', 'it')},
         why="Its is the possessive of it and takes no apostrophe, which is the one noun-"
             "like word in English that works this way.",
         trap="A is the contraction of it is and cannot own the membrane that follows it."),
    dict(strand='BIO-S04', pos=4,
         carrier="The ___ energy losses at each step are what keep a food chain short, and "
                 "a fifth link is rare in any ecosystem that has been measured.",
         rule='plural_possessive', rule_span="consumers'",
         opts=["consumer's", 'consumers', 'consumer', "consumers'"], key='D',
         faults={'A': ('poss_misplaced', "consumer's"),
                 'B': ('plural_for_poss', 'consumers'),
                 'C': ('poss_missing', 'consumer')},
         why="Many consumers own the losses, so the plural possessive puts the apostrophe "
             "after the s already there.",
         trap="A marks one consumer, which the plural losses and the phrase at each step "
              "both rule out."),
    dict(strand='BIO-S05', pos=5,
         carrier="A ___ growth outruns its food supply before any gentle levelling off can "
                 "happen, and the crash that follows can carry it below the level the "
                 "habitat would support.",
         rule='sing_possessive', rule_span="population's",
         opts=['populations', "populations'", "population's", 'population'], key='C',
         faults={'A': ('plural_for_poss', 'populations'),
                 'B': ('poss_misplaced', "populations'"),
                 'D': ('poss_missing', 'population')},
         why="One population owns the growth, as its later in the sentence confirms, so the "
             "singular possessive is right.",
         trap="A drops the apostrophe and leaves growth belonging to nothing, which reads "
              "smoothly and says nothing."),
    dict(strand='BIO-S06', pos=6,
         carrier="The ___ role in disease was not accepted until Koch could show that one "
                 "organism grown in pure culture produced one illness, and the postulates "
                 "he wrote are still the test.",
         rule='irregular_plural_poss', rule_span="bacteria's",
         opts=['bacteria', "bacteria's", 'bacterias', "bacterias'"], key='B',
         faults={'A': ('poss_missing', 'bacteria'),
                 'C': ('plural_for_poss', 'bacterias'),
                 'D': ('poss_misplaced', "bacterias'")},
         why="Bacteria is already an irregular plural and does not end in s, so it takes an "
             "apostrophe and then an s.",
         trap="C invents a second plural ending for a word that is plural already, and then "
              "drops the mark of possession as well."),
    dict(strand='BIO-S07', pos=7,
         carrier="The ___ nitrogen comes from bacteria housed in nodules on the roots "
                 "rather than from the soil, and a field of them leaves the ground richer "
                 "than it found it.",
         rule='plural_possessive', rule_span="legumes'",
         opts=["legumes'", "legume's", 'legumes', 'legume'], key='A',
         faults={'B': ('poss_misplaced', "legume's"),
                 'C': ('plural_for_poss', 'legumes'),
                 'D': ('poss_missing', 'legume')},
         why="Many legumes own the nitrogen, so the plural possessive places the apostrophe "
             "after the s.",
         trap="C leaves out the apostrophe, which turns the owner into a bare plural and "
              "the sentence into a list."),
    dict(strand='BIO-S08', pos=8,
         carrier="The first clear account of the carbon cycle in the deep ocean was ___ "
                 "work, and the two of them published it together after a decade of "
                 "measurements that neither could have made alone.",
         rule='joint_possession', rule_span="Revelle and Suess's",
         opts=["Revelle's and Suess's", 'Revelle and Suesses', 'Revelle and Suess',
               "Revelle and Suess's"], key='D',
         faults={'A': ('poss_misplaced', "Revelle's and Suess's"),
                 'B': ('plural_for_poss', 'Revelle and Suesses'),
                 'C': ('poss_missing', 'Revelle and Suess')},
         why="One account belongs to both men, and joint possession marks only the second "
             "name in the pair.",
         trap="A marks each name and so describes two separate accounts, which together "
              "later in the sentence denies."),
    dict(strand='BIO-S09', pos=9,
         carrier="The ___ arrangement in a rock tells a geologist the order in which the "
                 "layers were laid down, and an overturned sequence, where the oldest sits "
                 "on top, is itself the evidence that the whole block has been folded "
                 "right over.",
         rule='irregular_plural_poss', rule_span="strata's",
         opts=['stratas', "strata's", 'strata', "stratas'"], key='B',
         faults={'A': ('plural_for_poss', 'stratas'),
                 'C': ('poss_missing', 'strata'),
                 'D': ('poss_misplaced', "stratas'")},
         why="Strata is an irregular plural that does not end in s, so it takes an "
             "apostrophe and then an s, as a singular would.",
         trap="D adds a regular plural ending and then marks possession after it, going "
              "wrong twice in one word."),
    dict(strand='BIO-S10', pos=10,
         carrier="The ___ circulation times differ by a factor of ten, and a tracer put "
                 "into the North Atlantic in the 1960s has still not reached the deepest "
                 "water of the Pacific, which is why one measurement cannot stand for the "
                 "ocean as a whole.",
         rule='plural_possessive', rule_span="basins'",
         opts=["basin's", 'basins', 'basin', "basins'"], key='D',
         faults={'A': ('poss_misplaced', "basin's"), 'B': ('plural_for_poss', 'basins'),
                 'C': ('poss_missing', 'basin')},
         why="Several basins own the circulation times, so the plural possessive puts the "
             "apostrophe after the s.",
         trap="A marks a single basin, which the plural times and the comparison between "
              "oceans both exclude."),
])

PHY = dict(domain='PHY', note_ar=(
    "جمل العلوم الفيزيائية تضيف أسماء القياسات والأجهزة بعضها إلى بعض، فتتوالى صور الملكية. "
    "وتستعمل كذلك جموعاً لاتينية شاذّة مثل الأنوية والأوساط، وحكمها حكم جمع التكسير."), xs=[
    dict(strand='PHY-S01', pos=1,
         carrier="A ___ uncertainty must be reported with it, or the number means very "
                 "little.",
         rule='sing_possessive', rule_span="measurement's",
         opts=['measurements', "measurements'", 'measurement', "measurement's"], key='D',
         faults={'A': ('plural_for_poss', 'measurements'),
                 'B': ('poss_misplaced', "measurements'"),
                 'C': ('poss_missing', 'measurement')},
         why="One measurement owns the uncertainty, so the singular possessive takes the "
             "apostrophe before the s.",
         trap="B hands one uncertainty to several measurements, which the singular it later "
              "contradicts."),
    dict(strand='PHY-S02', pos=2,
         carrier="A pendulum keeps time by ___ length alone, whatever mass is hung at the "
                 "bottom of it.",
         rule='its_possessive', rule_span='its',
         opts=["it's", 'its', 'it', "its'"], key='B',
         faults={'A': ('poss_for_plural', "it's"), 'C': ('wrong_plural', 'it'),
                 'D': ('poss_for_plural', "its'")},
         why="Its is the possessive form of it and takes no apostrophe, unlike every noun "
             "in this chapter.",
         trap="A is the contraction of it is, which cannot own the length that follows it."),
    dict(strand='PHY-S03', pos=3,
         carrier="The two ___ acting on a book at rest on a table are equal in size and "
                 "opposite in direction, and neither of them is the cause of the other.",
         rule='plural_plain', rule_span='forces',
         opts=["force's", "forces'", 'forces', 'force'], key='C',
         faults={'A': ('poss_for_plural', "force's"),
                 'B': ('poss_for_plural', "forces'"),
                 'D': ('wrong_plural', 'force')},
         why="The word is a plain plural owning nothing, so it takes no apostrophe.",
         trap="B adds the mark a plural possessive would carry, though nothing here is "
              "owned by the forces."),
    dict(strand='PHY-S04', pos=4,
         carrier="The ___ efficiencies are bounded by the temperatures they work between, "
                 "and no amount of engineering moves the limit that Carnot worked out in "
                 "1824.",
         rule='plural_possessive', rule_span="engines'",
         opts=["engines'", 'engines', "engine's", 'engine'], key='A',
         faults={'B': ('plural_for_poss', 'engines'),
                 'C': ('poss_misplaced', "engine's"),
                 'D': ('poss_missing', 'engine')},
         why="Several engines own the efficiencies, so the plural possessive places the "
             "apostrophe after the s.",
         trap="C marks one engine, though the sentence counts efficiencies and "
              "temperatures in the plural."),
    dict(strand='PHY-S05', pos=5,
         carrier="A ___ resistance depends on the material it is made of and on how long "
                 "and thin it is, and nothing else about it matters to the current at all.",
         rule='sing_possessive', rule_span="wire's",
         opts=['wires', "wires'", 'wire', "wire's"], key='D',
         faults={'A': ('plural_for_poss', 'wires'), 'B': ('poss_misplaced', "wires'"),
                 'C': ('poss_missing', 'wire')},
         why="One wire owns the resistance, as it is made of later confirms, so the "
             "singular possessive is right.",
         trap="A drops the apostrophe altogether and reads as a list of wires rather than a "
              "property of one."),
    dict(strand='PHY-S06', pos=6,
         carrier="The ___ wavelengths are what a prism separates, and the order of the "
                 "colors never changes because the glass always bends the short waves more "
                 "than the long.",
         rule='plural_possessive', rule_span="colors'",
         opts=["color's", 'colors', "colors'", 'color'], key='C',
         faults={'A': ('poss_misplaced', "color's"), 'B': ('plural_for_poss', 'colors'),
                 'D': ('poss_missing', 'color')},
         why="The several colors own the wavelengths, so the plural possessive puts the "
             "apostrophe after the s.",
         trap="A marks a single color as the owner of wavelengths the sentence keeps in the "
              "plural."),
    dict(strand='PHY-S07', pos=7,
         carrier="The ___ binding energies rise steeply through the lightest elements and "
                 "then fall away slowly, which is why both fusion at the bottom and fission "
                 "at the top release energy.",
         rule='irregular_plural_poss', rule_span="nuclei's",
         opts=['nucleis', "nuclei's", 'nuclei', "nucleis'"], key='B',
         faults={'A': ('plural_for_poss', 'nucleis'), 'C': ('poss_missing', 'nuclei'),
                 'D': ('poss_misplaced', "nucleis'")},
         why="Nuclei is an irregular plural that does not end in s, so it takes an "
             "apostrophe and then an s.",
         trap="A adds a second plural ending to a word already plural and drops the mark of "
              "possession as well."),
    dict(strand='PHY-S08', pos=8,
         carrier="The first reliable distance to another galaxy came out of ___ joint work, "
                 "one of them timing the variable stars on the plates and the other "
                 "measuring how bright they were.",
         rule='joint_possession', rule_span="Leavitt and Shapley's",
         opts=["Leavitt and Shapley's", "Leavitt's and Shapley's",
               'Leavitt and Shapleys', 'Leavitt and Shapley'], key='A',
         faults={'B': ('poss_misplaced', "Leavitt's and Shapley's"),
                 'C': ('plural_for_poss', 'Leavitt and Shapleys'),
                 'D': ('poss_missing', 'Leavitt and Shapley')},
         why="The work belonged to both of them together, and joint possession marks only "
             "the second name.",
         trap="B marks both names and so describes two separate bodies of work rather than "
              "the one the sentence calls joint."),
    dict(strand='PHY-S09', pos=9,
         carrier="The ___ fatigue limits are what an engineer designs to, and a load that "
                 "stays below the limit may be applied without end while one just above it "
                 "will open a crack after a number of cycles that can be counted in "
                 "advance.",
         rule='plural_possessive', rule_span="alloys'",
         opts=["alloy's", 'alloys', "alloys'", 'alloy'], key='C',
         faults={'A': ('poss_misplaced', "alloy's"), 'B': ('plural_for_poss', 'alloys'),
                 'D': ('poss_missing', 'alloy')},
         why="Several alloys own the limits, so the plural possessive puts the apostrophe "
             "after the s that is already there.",
         trap="A marks one alloy as the owner of limits the sentence counts in the plural."),
    dict(strand='PHY-S10', pos=10,
         carrier="A ___ period, once it has been timed on a long enough series of plates, "
                 "gives away the true brightness of the star, and that single fact turned a "
                 "photographic plate full of anonymous points of light into a measuring rod "
                 "that reached out of the galaxy altogether.",
         rule='sing_possessive', rule_span="Cepheid's",
         opts=["Cepheid's", 'Cepheids', "Cepheids'", 'Cepheid'], key='A',
         faults={'B': ('plural_for_poss', 'Cepheids'),
                 'C': ('poss_misplaced', "Cepheids'"),
                 'D': ('poss_missing', 'Cepheid')},
         why="One star owns the period, so the singular possessive is right, with the "
             "apostrophe standing before the s.",
         trap="C puts the apostrophe after the s and so hands one period to a whole class "
              "of stars."),
])

HUM = dict(domain='HUM', note_ar=(
    "الإنسانيات هي المجال الأصلي لهذا الفصل: أسماء المؤلّفين والملحّنين تُضاف إليها أعمالهم "
    "في كلّ سطر، ومعها جموع شاذّة مثل النساء والأطفال، ومعها الملكية المشتركة بين مؤلّفين "
    "اثنين. فالصور الأربع كلّها حاضرة هنا في جملة واحدة أحياناً."), xs=[
    dict(strand='HUM-S01', pos=1,
         carrier="A ___ reliability is something a reader has to judge from inside the "
                 "story.",
         rule='sing_possessive', rule_span="narrator's",
         opts=["narrator's", 'narrators', "narrators'", 'narrator'], key='A',
         faults={'B': ('plural_for_poss', 'narrators'),
                 'C': ('poss_misplaced', "narrators'"),
                 'D': ('poss_missing', 'narrator')},
         why="One narrator owns the reliability, so the singular possessive takes the "
             "apostrophe before the s.",
         trap="C puts the apostrophe after the s and so attributes one reliability to a "
              "crowd of narrators."),
    dict(strand='HUM-S02', pos=2,
         carrier="The ___ a novelist gives a character are usually left for the reader to "
                 "infer.",
         rule='plural_plain', rule_span='motives',
         opts=["motive's", "motives'", 'motives', 'motive'], key='C',
         faults={'A': ('poss_for_plural', "motive's"),
                 'B': ('poss_for_plural', "motives'"),
                 'D': ('wrong_plural', 'motive')},
         why="The word is a plain plural owning nothing, so no apostrophe belongs on it.",
         trap="B is the plural possessive, which looks careful but gives the motives "
              "something to own that the sentence never names."),
    dict(strand='HUM-S03', pos=3,
         carrier="A ___ two halves stop being felt as two when the figure has been used "
                 "often enough, and the phrase then passes into the language as a single "
                 "word.",
         rule='sing_possessive', rule_span="metaphor's",
         opts=['metaphors', "metaphors'", 'metaphor', "metaphor's"], key='D',
         faults={'A': ('plural_for_poss', 'metaphors'),
                 'B': ('poss_misplaced', "metaphors'"),
                 'C': ('poss_missing', 'metaphor')},
         why="One metaphor owns the two halves, so the singular possessive is right, with "
             "the apostrophe before the s.",
         trap="B marks a plural owner, which the singular a at the start of the sentence "
              "rules out."),
    dict(strand='HUM-S04', pos=4,
         carrier="The ___ rhyme schemes differ from the Italian originals they were "
                 "translated from, and the English form settled into three quatrains and a "
                 "couplet within a generation.",
         rule='plural_possessive', rule_span="sonnets'",
         opts=["sonnet's", "sonnets'", 'sonnets', 'sonnet'], key='B',
         faults={'A': ('poss_misplaced', "sonnet's"),
                 'C': ('plural_for_poss', 'sonnets'),
                 'D': ('poss_missing', 'sonnet')},
         why="Many sonnets own the schemes, so the plural possessive places the apostrophe "
             "after the s.",
         trap="A marks a single sonnet, which the plural schemes and originals both "
              "contradict."),
    dict(strand='HUM-S05', pos=5,
         carrier="The ___ parts on the Elizabethan stage were played by boys, and a "
                 "successful apprentice could expect to move on to men's roles once his "
                 "voice had broken.",
         rule='irregular_plural_poss', rule_span="women's",
         opts=["women's", 'womens', 'women', "womens'"], key='A',
         faults={'B': ('plural_for_poss', 'womens'), 'C': ('poss_missing', 'women'),
                 'D': ('poss_misplaced', "womens'")},
         why="Women is an irregular plural that does not end in s, so it takes an "
             "apostrophe and then an s, as men's later in the sentence does.",
         trap="D adds a regular plural ending to a word already plural and then marks "
              "possession after it."),
    dict(strand='HUM-S06', pos=6,
         carrier="The comic operas that filled the Savoy for twenty years were ___ joint "
                 "invention, and the quarrel that ended the partnership was about the cost "
                 "of a carpet.",
         rule='joint_possession', rule_span="Gilbert and Sullivan's",
         opts=["Gilbert's and Sullivan's", 'Gilbert and Sullivans',
               'Gilbert and Sullivan', "Gilbert and Sullivan's"], key='D',
         faults={'A': ('poss_misplaced', "Gilbert's and Sullivan's"),
                 'B': ('plural_for_poss', 'Gilbert and Sullivans'),
                 'C': ('poss_missing', 'Gilbert and Sullivan')},
         why="The invention belonged to the two of them together, and joint possession "
             "marks only the second name.",
         trap="A marks each name separately and so describes two inventions, which joint "
              "denies."),
    dict(strand='HUM-S07', pos=7,
         carrier="The ___ first thoughts are what a sketchbook preserves, and the "
                 "corrections visible under the paint of a finished canvas tell the same "
                 "story in a way no catalog entry can.",
         rule='plural_possessive', rule_span="painters'",
         opts=["painter's", 'painters', "painters'", 'painter'], key='C',
         faults={'A': ('poss_misplaced', "painter's"),
                 'B': ('plural_for_poss', 'painters'),
                 'D': ('poss_missing', 'painter')},
         why="Many painters own the first thoughts, so the plural possessive puts the "
             "apostrophe after the s.",
         trap="A marks one painter, though the sentence speaks of sketchbooks and canvases "
              "in the plural throughout."),
    dict(strand='HUM-S08', pos=8,
         carrier="The ___ parts in an opera are written for voices that will break within a "
                 "season or two, which is why the roles are short and why a company has to "
                 "train replacements continuously.",
         rule='irregular_plural_poss', rule_span="children's",
         opts=['childrens', "children's", 'children', "childrens'"], key='B',
         faults={'A': ('plural_for_poss', 'childrens'),
                 'C': ('poss_missing', 'children'),
                 'D': ('poss_misplaced', "childrens'")},
         why="Children is an irregular plural ending in n rather than s, so it takes an "
             "apostrophe and then an s.",
         trap="A treats children as a singular needing a plural ending, which doubles the "
              "plural and loses the possession."),
    dict(strand='HUM-S09', pos=9,
         carrier="The street that everyone now photographs was ___ compromise, one of them "
                 "wanting an arcade along the whole length of it and the other wanting the "
                 "shops set back, and the line where the two intentions meet is still "
                 "visible in the stonework.",
         rule='joint_possession', rule_span="Nash and Soane's",
         opts=["Nash's and Soane's", 'Nash and Soanes', 'Nash and Soane',
               "Nash and Soane's"], key='D',
         faults={'A': ('poss_misplaced', "Nash's and Soane's"),
                 'B': ('plural_for_poss', 'Nash and Soanes'),
                 'C': ('poss_missing', 'Nash and Soane')},
         why="One compromise belonged to both men, and joint possession marks only the "
             "second of the two names.",
         trap="A gives each architect a compromise of his own, which is not what a "
              "compromise between two people is."),
    dict(strand='HUM-S10', pos=10,
         carrier="The ___ disagreements about whether a poem's meaning is fixed by its "
                 "author outlasted every one of the positions taken in them, and a reader "
                 "who opens a journal from the period finds the same argument conducted in "
                 "a vocabulary that has since gone out of use.",
         rule='plural_possessive', rule_span="critics'",
         opts=["critic's", "critics'", 'critics', 'critic'], key='B',
         faults={'A': ('poss_misplaced', "critic's"),
                 'C': ('plural_for_poss', 'critics'),
                 'D': ('poss_missing', 'critic')},
         why="Many critics own the disagreements, so the plural possessive places the "
             "apostrophe after the s.",
         trap="A marks one critic as the owner of disagreements that by definition took "
              "more than one person to have."),
])

SOC = dict(domain='SOC', note_ar=(
    "جمل العلوم الاجتماعية تتحدّث عن أجوبة المستجيبين، وخصائص الأسر، ومعايير الاختيار، وهي "
    "كلّها جموع مالكة. ومعها جمع شاذّ متكرّر هو الناس، وحكمه حكم المفرد في الفاصلة."), xs=[
    dict(strand='SOC-S01', pos=1,
         carrier="The order of the ___ on a questionnaire changes which one gets picked.",
         rule='plural_plain', rule_span='choices',
         opts=["choice's", 'choices', "choices'", 'choice'], key='B',
         faults={'A': ('poss_for_plural', "choice's"),
                 'C': ('poss_for_plural', "choices'"),
                 'D': ('wrong_plural', 'choice')},
         why="The word is a plain plural that owns nothing, so it takes no apostrophe.",
         trap="C adds the mark of a plural possessive, though the choices in this sentence "
              "possess nothing at all."),
    dict(strand='SOC-S02', pos=2,
         carrier="A ___ wording matters more to the answers than the order of the options "
                 "does.",
         rule='sing_possessive', rule_span="question's",
         opts=['questions', "questions'", 'question', "question's"], key='D',
         faults={'A': ('plural_for_poss', 'questions'),
                 'B': ('poss_misplaced', "questions'"),
                 'C': ('poss_missing', 'question')},
         why="One question owns the wording, so the singular possessive is right, with the "
             "apostrophe before the s.",
         trap="B marks a plural owner, which the singular a at the head of the sentence "
              "forbids."),
    dict(strand='SOC-S03', pos=3,
         carrier="A trial earns ___ authority from the drawing of lots rather than from the "
                 "size of the groups, and a small randomized study can settle what a large "
                 "uncontrolled one cannot.",
         rule='its_possessive', rule_span='its',
         opts=['its', "it's", "its'", 'it'], key='A',
         faults={'B': ('poss_for_plural', "it's"), 'C': ('poss_for_plural', "its'"),
                 'D': ('wrong_plural', 'it')},
         why="Its is the possessive form of it and carries no apostrophe, which is what "
             "separates it from the nouns in this chapter.",
         trap="B is the contraction of it is and cannot own the authority that follows it."),
    dict(strand='SOC-S04', pos=4,
         carrier="The ___ characteristics have to be measured before the treatment begins, "
                 "because a difference found afterward can always be blamed on the "
                 "treatment itself.",
         rule='plural_possessive', rule_span="subjects'",
         opts=["subject's", 'subjects', "subjects'", 'subject'], key='C',
         faults={'A': ('poss_misplaced', "subject's"),
                 'B': ('plural_for_poss', 'subjects'),
                 'D': ('poss_missing', 'subject')},
         why="Many subjects own the characteristics, so the plural possessive puts the "
             "apostrophe after the s.",
         trap="A marks a single subject, which the plural characteristics and the "
              "comparison between groups both rule out."),
    dict(strand='SOC-S05', pos=5,
         carrier="A ___ shape matters as much as its center, and two distributions with the "
                 "same mean can describe populations that have almost nothing in common.",
         rule='sing_possessive', rule_span="distribution's",
         opts=['distributions', "distribution's", "distributions'", 'distribution'],
         key='B',
         faults={'A': ('plural_for_poss', 'distributions'),
                 'C': ('poss_misplaced', "distributions'"),
                 'D': ('poss_missing', 'distribution')},
         why="One distribution owns the shape, as its center confirms, so the singular "
             "possessive is right.",
         trap="A drops the apostrophe and leaves shape belonging to nothing, which is the "
              "easiest of the four to overlook."),
    dict(strand='SOC-S06', pos=6,
         carrier="The ___ responses to a cash incentive differ by how much they earn "
                 "already, and a dollar that persuades one household is an insult to "
                 "another.",
         rule='plural_possessive', rule_span="respondents'",
         opts=["respondents'", "respondent's", 'respondents', 'respondent'], key='A',
         faults={'B': ('poss_misplaced', "respondent's"),
                 'C': ('plural_for_poss', 'respondents'),
                 'D': ('poss_missing', 'respondent')},
         why="Many respondents own the responses, so the plural possessive places the "
             "apostrophe after the s.",
         trap="C leaves out the apostrophe and turns the owner into a bare plural, which "
              "reads smoothly and says nothing."),
    dict(strand='SOC-S07', pos=7,
         carrier="The ___ willingness to give an answer they know to be wrong is what the "
                 "line-judging experiments measured, and the rate fell sharply as soon as "
                 "one confederate broke ranks.",
         rule='irregular_plural_poss', rule_span="people's",
         opts=['peoples', 'people', "peoples'", "people's"], key='D',
         faults={'A': ('plural_for_poss', 'peoples'), 'B': ('poss_missing', 'people'),
                 'C': ('poss_misplaced', "peoples'")},
         why="People is an irregular plural that does not end in s, so it takes an "
             "apostrophe and then an s.",
         trap="A is a real word but means nations rather than persons, and it drops the "
              "mark of possession as well."),
    dict(strand='SOC-S08', pos=8,
         carrier="The idea that a judgment made quickly uses a rule of thumb rather than a "
                 "calculation was ___ joint contribution, and the two of them published "
                 "almost everything together for fifteen years.",
         rule='joint_possession', rule_span="Tversky and Kahneman's",
         opts=["Tversky's and Kahneman's", 'Tversky and Kahnemans',
               "Tversky and Kahneman's", 'Tversky and Kahneman'], key='C',
         faults={'A': ('poss_misplaced', "Tversky's and Kahneman's"),
                 'B': ('plural_for_poss', 'Tversky and Kahnemans'),
                 'D': ('poss_missing', 'Tversky and Kahneman')},
         why="One contribution belonged to both men, and joint possession marks only the "
             "second name in the pair.",
         trap="A marks both names and so describes two separate contributions, which joint "
              "contradicts."),
    dict(strand='SOC-S09', pos=9,
         carrier="The ___ shares of national income can be computed from tax records in "
                 "some countries and only from household surveys in others, and the two "
                 "kinds of source disagree most about exactly the households that the "
                 "measure is designed to describe.",
         rule='plural_possessive', rule_span="earners'",
         opts=["earners'", "earner's", 'earners', 'earner'], key='A',
         faults={'B': ('poss_misplaced', "earner's"),
                 'C': ('plural_for_poss', 'earners'),
                 'D': ('poss_missing', 'earner')},
         why="Many earners own the shares, so the plural possessive puts the apostrophe "
             "after the s already present.",
         trap="B marks one earner as the owner of shares that the whole sentence counts in "
              "the plural."),
    dict(strand='SOC-S10', pos=10,
         carrier="The ___ that a committee writes down before it starts reading "
                 "applications are what keep the decision from drifting toward whichever "
                 "candidate is being discussed at the moment, and a committee that writes "
                 "them down afterward has not used them at all.",
         rule='plural_plain', rule_span='criteria',
         opts=["criteria's", 'criterias', 'criteria', "criterias'"], key='C',
         faults={'A': ('poss_for_plural', "criteria's"),
                 'B': ('wrong_plural', 'criterias'),
                 'D': ('poss_for_plural', "criterias'")},
         why="Criteria is already a plural and owns nothing here, so it takes neither an "
             "apostrophe nor a further s.",
         trap="B adds an English plural ending to a word that is plural in Latin already, "
              "which is the commonest error with this noun."),
])

PARTS = [HIS, BIO, PHY, HUM, SOC]

if __name__ == '__main__':
    xemit.emit(CHAPTER, AR, PARTS)
