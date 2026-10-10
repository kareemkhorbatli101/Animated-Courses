# -*- coding: utf-8 -*-
"""Chapter 15 - tables and graphs. Home domain SOC.

Key plans: HIS DBCADCBACA, BIO ACDBADCBDB, PHY BDACBADCAC, HUM CABDCBADBD,
SOC DBCADCBACA.

The one chapter of the book whose stimulus is a table. Every part carries all
five rules twice: read one value, compare two, read the direction across rows,
support a claim, and say that the table does not contain what a claim would
need. The last of those is the question students lose most often, because a
table that is about the right subject feels like evidence for any statement
about it.

Like chapters 13 and 14 this one has no machine predicates: whether a sentence
reads a row correctly is a question about arithmetic and reference, not form.
The spans and the end-to-end read carry it, and every number in every option
was checked against its own table.
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import xemit                                                            # noqa: E402

CHAPTER = 15

AR = dict(
    qaida="الجداول والرسوم: الدعوى لا يسندها إلّا الرقم الذي يتعلّق بها. فإن طُلب رقم واحد "
          "فخذه من خانته، وإن طُلبت مقارنة فخذ الرقمين على جهتهما الصحيحة، وإن طُلب اتّجاه "
          "فاقرأ الصفوف كلّها لا صفّين منها.",
    kayf="يعرض اختبار سات جدولاً صغيراً ودعوى، ثمّ يسأل عن الخيار الذي يسندها. والخيارات "
         "الأربعة كلّها أرقام من الجدول، لكن واحداً منها فقط يتعلّق بالدعوى. فاقرأ الدعوى "
         "أوّلاً وحدّد الخانة التي تحتاجها قبل أن تنظر في الخيارات.",
    fakh="الفخّ الأوّل خيار يقرأ الصفّ الخطأ، والثاني خيار يقلب جهة المقارنة، والثالث خيار "
         "يزيد على الجدول سبباً ليس فيه. والجدول يقول ماذا حدث ولا يقول لماذا حدث أبداً.",
    sila="هذا الباب هو مقياس الدليل الكمّي في اختبار سات، ويأتي في القسم الكتابيّ وفي "
         "القراءة معاً. وهو الباب الوحيد في هذا الكتاب الذي لا تكفي فيه اللغة وحدها، إذ "
         "يلزم فيه قراءة الرقم.",
)

HIS = dict(domain='HIS', note_ar=(
    "جداول التاريخ والنظام المدني تعرض الإيرادات والأصوات والسكّان على السنين، والفخّ "
    "فيها أن يُقرأ سبب الحادثة من الجدول، والجدول لا يذكر إلّا مقدارها. ومن هنا جاء في "
    "هذا المجال أكثر أسئلة ما لا يسنده الجدول."), xs=[
    dict(strand='HIS-S01', pos=1, stem_form=0,
         table=dict(title='Federal revenue by source, 1800 and 1830 (per cent of total)',
                    cols=['Source', '1800', '1830'],
                    rows=[['Customs duties', '84', '88'],
                          ['Public land sales', '1', '9'],
                          ['Internal taxes', '15', '3']]),
         claim='A student claims that the federal government of 1830 depended on customs '
               'duties for most of its revenue.',
         rule='read_cell', rule_span='customs duties were 88 per cent of federal revenue',
         opts=['In 1830 public land sales were 88 per cent of federal revenue.',
               'Internal taxes fell from 15 per cent of revenue in 1800 to 3 per cent in '
               '1830.',
               'Customs duties were the only source of federal revenue in 1830.',
               'In 1830 customs duties were 88 per cent of federal revenue.'], key='D',
         faults={'A': ('misread_row', 'public land sales were 88 per cent'),
                 'B': ('true_not_asked', 'Internal taxes fell from 15 per cent'),
                 'C': ('overreach', 'the only source of federal revenue')},
         why="The claim rests on one value in the table, and that value is the 88 per cent "
             "of revenue that customs duties supplied in 1830.",
         trap="A takes the right number from the wrong row, which is the commonest way to "
              "lose this question."),
    dict(strand='HIS-S02', pos=2, stem_form=1,
         table=dict(title='Immigration to the United States by decade (millions)',
                    cols=['Decade', 'Arrivals'],
                    rows=[['1841-1850', '1.7'], ['1851-1860', '2.6'],
                          ['1861-1870', '2.3'], ['1871-1880', '2.8']]),
         claim='Arrivals in the 1860s fell from the level of the decade before, dropping '
               'to ___',
         rule='read_cell', rule_span='2.3 million, from 2.6 million in the 1850s',
         opts=['2.6 million, the figure for the 1850s.',
               '2.3 million, from 2.6 million in the 1850s.',
               '2.8 million, the highest of the four decades.',
               '2.3 million, the lowest total of the century.'], key='B',
         faults={'A': ('misread_row', '2.6 million, the figure for the 1850s'),
                 'C': ('true_not_asked', '2.8 million, the highest of the four decades'),
                 'D': ('overreach', '2.3 million, the lowest total of the century')},
         why="The statement needs the value for the 1860s, and the table gives it as 2.3 "
             "million against 2.6 in the decade before.",
         trap="D gives the right figure and then calls it the lowest of a century the table "
              "does not cover."),
    dict(strand='HIS-S03', pos=3, stem_form=0,
         table=dict(title='Population of four cities, 1850 and 1900 (thousands)',
                    cols=['City', '1850', '1900'],
                    rows=[['New York', '696', '3,437'], ['Philadelphia', '121', '1,294'],
                          ['Chicago', '30', '1,699'], ['New Orleans', '116', '287']]),
         claim='A student claims that Chicago gained more people between 1850 and 1900 '
               'than Philadelphia did.',
         rule='compare_cells',
         rule_span='Chicago gained about 1,669,000 people and Philadelphia about 1,173,000',
         opts=['Philadelphia gained about 1,669,000 people and Chicago about 1,173,000.',
               'Chicago gained about 1,669,000 people and New Orleans about 171,000.',
               'Chicago gained about 1,669,000 people and Philadelphia about 1,173,000.',
               'Chicago gained more people after 1850 than any other city in the country.'],
         key='C',
         faults={'A': ('reversed_comparison', 'Philadelphia gained about 1,669,000 people'),
                 'B': ('true_not_asked', 'New Orleans about 171,000'),
                 'D': ('overreach', 'than any other city in the country')},
         why="The claim rests on the difference between two pairs of values, so the "
             "supporting sentence has to give the gain of each of the two cities named.",
         trap="A has both figures right and attaches each to the wrong city, which turns "
              "the claim on its head."),
    dict(strand='HIS-S04', pos=4, stem_form=1,
         table=dict(title='Railroad mileage by region, 1860',
                    cols=['Region', 'Miles'],
                    rows=[['New England', '3,660'], ['Middle states', '6,705'],
                          ['Southern states', '9,167'], ['Western states', '11,000']]),
         claim='In 1860 the Southern states had fewer miles of railroad than the Western '
               'states, a difference of ___',
         rule='compare_cells', rule_span='about 1,800 miles, 9,167 against 11,000',
         opts=['about 1,800 miles, 9,167 against 11,000.',
               'about 1,800 miles more than the Western states had.',
               'about 2,500 miles, 6,705 against 9,167.',
               'about 1,800 miles, which left the South unable to supply an army.'],
         key='A',
         faults={'B': ('reversed_comparison', 'more than the Western states had'),
                 'C': ('misread_row', 'about 2,500 miles, 6,705 against 9,167'),
                 'D': ('overreach', 'which left the South unable to supply an army')},
         why="The statement needs the difference between the two figures, and the table "
             "puts the South at 9,167 miles and the West at 11,000.",
         trap="B gives the right difference in the wrong direction, which would make the "
              "South the better served of the two."),
    dict(strand='HIS-S05', pos=5, stem_form=2,
         table=dict(title='Share of the labor force in agriculture (per cent)',
                    cols=['Year', 'Share'],
                    rows=[['1870', '53'], ['1900', '41'], ['1930', '22'], ['1960', '8']]),
         claim='A student is studying the movement of Americans out of farm work between '
               '1870 and 1960.',
         rule='trend_across_rows',
         rule_span='fell at every reading between 1870 and 1960',
         opts=['The share of the labor force in agriculture rose between 1870 and 1900 and '
               'fell after that.',
               'Agriculture had almost disappeared from the American economy by 1960.',
               'In 1930 just over a fifth of the labor force worked in agriculture.',
               'The share of the labor force in agriculture fell at every reading between '
               '1870 and 1960.'], key='D',
         faults={'A': ('misread_row', 'rose between 1870 and 1900'),
                 'B': ('overreach', 'had almost disappeared from the American economy'),
                 'C': ('true_not_asked', 'just over a fifth of the labor force')},
         why="A conclusion about movement out of farm work is a claim about direction, and "
             "the four readings fall one after another without exception.",
         trap="B reads eight per cent of the labor force as almost nothing, which is a "
              "judgment and not a reading."),
    dict(strand='HIS-S06', pos=6, stem_form=2,
         table=dict(title='Daily newspapers and total circulation',
                    cols=['Year', 'Dailies', 'Circulation (millions)'],
                    rows=[['1910', '2,200', '24'], ['1930', '1,942', '40'],
                          ['1950', '1,772', '54'], ['1970', '1,748', '62']]),
         claim='A student is writing about the newspaper business between 1910 and 1970.',
         rule='trend_across_rows',
         rule_span='the number of dailies fell at every reading while total circulation '
                   'rose at every reading',
         opts=['Between 1910 and 1970 both the number of dailies and total circulation '
               'fell.',
               'By 1970 the newspaper business had entered a decline it would not recover '
               'from.',
               'Between 1910 and 1970 the number of dailies fell at every reading while '
               'total circulation rose at every reading.',
               'In 1930 there were 1,942 daily newspapers with a circulation of 40 '
               'million.'], key='C',
         faults={'A': ('misread_row', 'both the number of dailies and total circulation '
                       'fell'),
                 'B': ('overreach', 'had entered a decline it would not recover from'),
                 'D': ('true_not_asked', 'there were 1,942 daily newspapers')},
         why="The table holds two columns moving in opposite directions, and a conclusion "
             "about the business has to give the direction of both.",
         trap="A reads the two columns as though they moved together, which is the "
              "conclusion the table exists to refute."),
    dict(strand='HIS-S07', pos=7, stem_form=0,
         table=dict(title='Votes in the House on restricting slavery in Missouri, 1820',
                    cols=['Region', 'For restriction', 'Against'],
                    rows=[['Free states', '87', '14'], ['Slave states', '0', '66'],
                          ['Total', '87', '80']]),
         claim='A student claims that the vote on restricting slavery in Missouri divided '
               'the House by section rather than by party.',
         rule='support_claim',
         rule_span='all 66 votes from the slave states were against it',
         opts=['The House cast 87 votes for restriction and 80 votes against it.',
               'Eighty-seven of the 101 votes from the free states were for restriction, '
               'and all 66 votes from the slave states were against it.',
               'Fourteen votes from the slave states were cast for restriction.',
               'No member of the House ever voted against the interest of his own '
               'section.'], key='B',
         faults={'A': ('true_not_asked', 'cast 87 votes for restriction and 80 votes '
                       'against it'),
                 'C': ('misread_row', 'Fourteen votes from the slave states'),
                 'D': ('overreach', 'No member of the House ever voted against')},
         why="The claim is about a split by section, so the data that support it are the "
             "two regional rows read against each other.",
         trap="A gives the totals, which are true and say nothing about how the sections "
              "divided."),
    dict(strand='HIS-S08', pos=8, stem_form=2,
         table=dict(title='Patents issued, 1841-1880 (thousands)',
                    cols=['Decade', 'Patents'],
                    rows=[['1841-1850', '6'], ['1851-1860', '23'], ['1861-1870', '79'],
                          ['1871-1880', '125']]),
         claim='A student wants to say something about what lay behind the rise in '
               'patenting after 1850.',
         rule='no_support',
         rule_span='does not say what lay behind the rise',
         opts=['The table shows that patenting rose decade by decade but does not say what '
               'lay behind the rise.',
               'The rise in patenting after 1850 followed the spread of the railroad '
               'network across the country.',
               'The rise in patenting shows that Americans had become more inventive than '
               'other peoples.',
               'Patenting rose until 1870 and then fell away in the following decade.'],
         key='A',
         faults={'B': ('imported', 'followed the spread of the railroad network'),
                 'C': ('overreach', 'had become more inventive than other peoples'),
                 'D': ('misread_row', 'rose until 1870 and then fell away')},
         why="The table gives how many patents were issued and does not give the reason "
             "any of them were, so a cause cannot be read out of it.",
         trap="B offers a cause that is plausible and is nowhere in the table, which is "
              "what makes it the most attractive of the three wrong answers."),
    dict(strand='HIS-S09', pos=9, stem_form=0,
         table=dict(title='Average duty on imports and customs revenue',
                    cols=['Year', 'Average duty (per cent)',
                          'Customs revenue (millions of dollars)'],
                    rows=[['1828', '45', '23'], ['1833', '40', '29'], ['1846', '26', '26'],
                          ['1857', '19', '64'], ['1860', '19', '53']]),
         claim='A student claims that cutting the average duty did not cut the revenue the '
               'duties raised.',
         rule='support_claim',
         rule_span='while customs revenue rose from 23 million dollars to 64 million',
         opts=['The average duty fell from 45 per cent in 1828 to 26 in 1846 while revenue '
               'fell to 26 million dollars.',
               'Customs revenue fell from 64 million dollars to 23 million as the average '
               'duty rose from 19 per cent to 45.',
               'The average duty fell from 45 per cent in 1828 to 19 in 1857 while customs '
               'revenue rose from 23 million dollars to 64 million.',
               'A lower duty always raises more revenue than a higher one.'], key='C',
         faults={'A': ('misread_row', 'to 26 in 1846 while revenue fell to 26 million '
                       'dollars'),
                 'B': ('reversed_comparison', 'Customs revenue fell from 64 million '
                       'dollars to 23 million'),
                 'D': ('overreach', 'always raises more revenue than a higher one')},
         why="The claim needs the duty and the revenue read together, and the two columns "
             "support it between 1828 and 1857.",
         trap="B runs the same two columns backwards through time, so a rise in duty "
              "appears to have cost the Treasury money."),
    dict(strand='HIS-S10', pos=10, stem_form=2,
         table=dict(title='School enrollment of children aged five to nineteen (per cent)',
                    cols=['Year', 'North', 'South'],
                    rows=[['1850', '62', '35'], ['1870', '69', '28'], ['1890', '72', '45'],
                          ['1910', '75', '55']]),
         claim='A student wants to draw a conclusion about how good the schools these '
               'children attended were.',
         rule='no_support',
         rule_span='does not speak to how good those schools were',
         opts=['The table gives the share of children enrolled in each region and does not '
               'speak to how good those schools were.',
               'Southern schools were poorer than Northern ones because the region spent '
               'less on each pupil.',
               'The schools of the two regions had become equally good by 1910.',
               'Enrollment in the South rose at every reading between 1850 and 1910.'],
         key='A',
         faults={'B': ('imported', 'because the region spent less on each pupil'),
                 'C': ('overreach', 'had become equally good by 1910'),
                 'D': ('misread_row', 'rose at every reading between 1850 and 1910')},
         why="The table counts enrollment and nothing else, so it does not reach a question "
             "about the quality of a school.",
         trap="D sounds like a careful reading and is wrong on its own terms, because "
              "Southern enrollment falls between 1850 and 1870."),
])

BIO = dict(domain='BIO', note_ar=(
    "جداول الأحياء وعلوم الأرض تعرض القياسات على الأنواع أو على السنين، والفخّ فيها أن "
    "يُقرأ من الجدول حكم على ما يَصلح أو ما يأمَن، والجدول لا يذكر إلّا المقدار المقيس."),
    xs=[
    dict(strand='BIO-S01', pos=1, stem_form=0,
         table=dict(title='Carbon dioxide in the atmosphere (parts per million)',
                    cols=['Year', 'Concentration'],
                    rows=[['1960', '317'], ['1980', '339'], ['2000', '369'],
                          ['2020', '414']]),
         claim='A student claims that the concentration in 2000 already stood well above '
               'the figure for 1960.',
         rule='read_cell',
         rule_span='In 2000 the concentration stood at 369 parts per million',
         opts=['In 2000 the concentration stood at 369 parts per million.',
               'In 2000 the concentration stood at 339 parts per million.',
               'In 2020 the concentration stood at 414 parts per million.',
               'The concentration has risen faster since 1960 than at any time in the '
               'history of the earth.'], key='A',
         faults={'B': ('misread_row', 'stood at 339 parts per million'),
                 'C': ('true_not_asked', 'In 2020 the concentration stood at 414'),
                 'D': ('overreach', 'faster since 1960 than at any time')},
         why="The claim rests on one value, the 369 parts per million the table gives for "
             "2000, read against the 317 of 1960.",
         trap="B takes the 1980 figure, which is the row above the one the claim is "
              "about."),
    dict(strand='BIO-S02', pos=2, stem_form=1,
         table=dict(title='Mean body temperature of four mammals (degrees Celsius)',
                    cols=['Animal', 'Temperature'],
                    rows=[['Human', '37.0'], ['Cat', '38.6'], ['Cow', '38.3'],
                          ['Platypus', '32.0']]),
         claim='The platypus holds a body temperature below the human figure by ___',
         rule='compare_cells', rule_span='five degrees, 32.0 against 37.0',
         opts=['six and a half degrees, 32.0 against 38.6.',
               'five degrees, which is the amount by which it is higher.',
               'five degrees, 32.0 against 37.0.',
               'five degrees, the lowest temperature of any mammal alive.'], key='C',
         faults={'A': ('misread_row', 'six and a half degrees, 32.0 against 38.6'),
                 'B': ('reversed_comparison', 'the amount by which it is higher'),
                 'D': ('overreach', 'the lowest temperature of any mammal alive')},
         why="The statement needs the difference between two values in the table, and the "
             "two the sentence names are 32.0 and 37.0.",
         trap="A measures the platypus against the cat, which is a row the statement never "
              "mentions."),
    dict(strand='BIO-S03', pos=3, stem_form=1,
         table=dict(title='Length of gestation in days',
                    cols=['Animal', 'Days'],
                    rows=[['Mouse', '20'], ['Dog', '63'], ['Human', '267'],
                          ['Elephant', '645']]),
         claim='A dog carries its young about three times as long as a mouse does, that is '
               'for ___',
         rule='read_cell', rule_span='63 days against 20',
         opts=['267 days against 20 for the mouse.',
               '645 days, the longest figure in the table.',
               '63 days, longer than any other small mammal.',
               '63 days against 20.'], key='D',
         faults={'A': ('misread_row', '267 days against 20 for the mouse'),
                 'B': ('true_not_asked', 'the longest figure in the table'),
                 'C': ('overreach', 'longer than any other small mammal')},
         why="The statement needs the value on the dog's row, which the table gives as 63 "
             "days, a little over three times the twenty of the mouse.",
         trap="C gives the right figure and adds a ranking over all small mammals that the "
              "four rows cannot support."),
    dict(strand='BIO-S04', pos=4, stem_form=0,
         table=dict(title='Forest cover (per cent of land area)',
                    cols=['Country', '1990', '2020'],
                    rows=[['Brazil', '70', '59'], ['Indonesia', '65', '49'],
                          ['Costa Rica', '40', '59'], ['Vietnam', '29', '47']]),
         claim='A student claims that two of these countries gained forest over the thirty '
               'years while two lost it.',
         rule='compare_cells',
         rule_span='Costa Rica rose from 40 to 59 per cent and Vietnam from 29 to 47',
         opts=['Brazil rose from 59 to 70 per cent and Indonesia from 49 to 65.',
               'Costa Rica rose from 40 to 59 per cent and Vietnam from 29 to 47, while '
               'Brazil fell from 70 to 59 and Indonesia from 65 to 49.',
               'Costa Rica and Brazil both stood at 59 per cent of land area in 2020.',
               'Forest cover is now rising across the tropics as a whole.'], key='B',
         faults={'A': ('reversed_comparison', 'Brazil rose from 59 to 70 per cent'),
                 'C': ('true_not_asked', 'both stood at 59 per cent of land area'),
                 'D': ('overreach', 'rising across the tropics as a whole')},
         why="The claim is about the difference between the two years in four countries, so "
             "the sentence has to give both directions with their figures.",
         trap="A runs Brazil and Indonesia backwards through time, turning two losses into "
              "two gains."),
    dict(strand='BIO-S05', pos=5, stem_form=2,
         table=dict(title='Average size of a dairy herd in the United States',
                    cols=['Year', 'Cows per farm'],
                    rows=[['1970', '19'], ['1990', '61'], ['2010', '179'],
                          ['2020', '337']]),
         claim='A student is writing about the structure of dairy farming since 1970.',
         rule='trend_across_rows',
         rule_span='grew at every reading between 1970 and 2020',
         opts=['The average dairy herd grew at every reading between 1970 and 2020.',
               'The average dairy herd grew until 2010 and then leveled off.',
               'The small dairy farm has disappeared from the United States.',
               'In 1990 the average dairy herd held sixty-one cows.'], key='A',
         faults={'B': ('misread_row', 'grew until 2010 and then leveled off'),
                 'C': ('overreach', 'has disappeared from the United States'),
                 'D': ('true_not_asked', 'held sixty-one cows')},
         why="A conclusion about structure is a claim about direction, and the figure rises "
             "at each of the four readings without a break.",
         trap="B stops the rise at 2010, when the table has the herd almost doubling again "
              "in the ten years after it."),
    dict(strand='BIO-S06', pos=6, stem_form=2,
         table=dict(title='Nesting pairs of bald eagles in the lower forty-eight states',
                    cols=['Year', 'Pairs'],
                    rows=[['1963', '487'], ['1981', '1,188'], ['1998', '5,748'],
                          ['2007', '9,789']]),
         claim='A student is writing about the recovery of the bald eagle.',
         rule='trend_across_rows',
         rule_span='rose at every reading between 1963 and 2007',
         opts=['The number of nesting pairs fell between 1963 and 1981 and rose after '
               'that.',
               'The bald eagle is no longer at risk anywhere in the country.',
               'In 1998 there were 5,748 nesting pairs in the lower forty-eight states.',
               'The number of nesting pairs rose at every reading between 1963 and 2007.'],
         key='D',
         faults={'A': ('misread_row', 'fell between 1963 and 1981'),
                 'B': ('overreach', 'no longer at risk anywhere in the country'),
                 'C': ('true_not_asked', 'there were 5,748 nesting pairs')},
         why="The recovery is a direction, and all four readings run the same way, from "
             "487 pairs to nearly ten thousand.",
         trap="A reverses the first interval, where the table has the number more than "
              "doubling."),
    dict(strand='BIO-S07', pos=7, stem_form=2,
         table=dict(title='Mercury in the muscle of four fish (parts per million)',
                    cols=['Fish', 'Mercury'],
                    rows=[['Swordfish', '0.99'], ['Tuna', '0.35'], ['Cod', '0.11'],
                          ['Salmon', '0.02']]),
         claim='A student wants to draw a conclusion about how much of each fish a person '
               'may safely eat.',
         rule='no_support',
         rule_span='does not say what quantity of it is safe to eat',
         opts=['A person may eat salmon twice a week but swordfish only once a month.',
               'Swordfish is unsafe for anyone to eat at all.',
               'The table gives the mercury in each fish and does not say what quantity of '
               'it is safe to eat.',
               'Cod carries more mercury in its muscle than tuna does.'], key='C',
         faults={'A': ('imported', 'twice a week but swordfish only once a month'),
                 'B': ('overreach', 'unsafe for anyone to eat at all'),
                 'D': ('misread_row', 'Cod carries more mercury in its muscle')},
         why="The table measures a concentration, and a safe quantity depends on a "
             "threshold the table does not contain.",
         trap="A sounds like the advice a table of this kind usually comes with, and not "
              "one of its numbers is in the table."),
    dict(strand='BIO-S08', pos=8, stem_form=0,
         table=dict(title='Coral surviving a bleaching summer (per cent of colonies)',
                    cols=['Species', 'Shallow reef', 'Deep reef'],
                    rows=[['Acropora', '14', '61'], ['Porites', '52', '79'],
                          ['All species', '31', '70']]),
         claim='A student claims that depth mattered more to survival than species did.',
         rule='support_claim',
         rule_span='so the gap between the depths is wider than the gap between the '
                   'species',
         opts=['Acropora survived at 61 per cent on the shallow reef and 14 on the deep.',
               'Survival on the deep reef was 61 and 79 per cent against 14 and 52 on the '
               'shallow, so the gap between the depths is wider than the gap between the '
               'species.',
               'Across all species survival on the shallow reef was 31 per cent.',
               'Species makes no difference at all to how a coral survives a bleaching '
               'summer.'], key='B',
         faults={'A': ('reversed_comparison', 'at 61 per cent on the shallow reef and 14 '
                       'on the deep'),
                 'C': ('true_not_asked', 'survival on the shallow reef was 31 per cent'),
                 'D': ('overreach', 'makes no difference at all')},
         why="The claim compares two gaps, so the data that support it are all four "
             "species-by-depth figures read together.",
         trap="A swaps the two depths for one species, which makes the shallow reef look "
              "like the safer place to be."),
    dict(strand='BIO-S09', pos=9, stem_form=2,
         table=dict(title='Resistant isolates in one hospital (per cent)',
                    cols=['Year', 'Resistant'],
                    rows=[['2005', '12'], ['2010', '19'], ['2015', '28'], ['2020', '34']]),
         claim='A student wants to draw a conclusion about why resistance rose in this '
               'hospital.',
         rule='no_support', rule_span='does not say why it rose',
         opts=['Resistance rose because the hospital prescribed more antibiotics in each '
               'year of the period.',
               'Nothing the hospital does now can slow the rise in resistance.',
               'Resistance rose between 2005 and 2015 and then fell away.',
               'The table shows that resistance rose at every reading and does not say why '
               'it rose.'], key='D',
         faults={'A': ('imported', 'because the hospital prescribed more antibiotics'),
                 'B': ('overreach', 'Nothing the hospital does now can slow the rise'),
                 'C': ('misread_row', 'between 2005 and 2015 and then fell away')},
         why="Four percentages give the size and the direction of the rise, and the table "
             "does not hold anything that would explain it.",
         trap="A names the cause a reader expects, and the table contains no column for "
              "prescriptions at all."),
    dict(strand='BIO-S10', pos=10, stem_form=0,
         table=dict(title='Seeds germinating after storage (per cent)',
                    cols=['Species', 'After 1 year', 'After 10 years', 'After 50 years'],
                    rows=[['Wheat', '96', '84', '3'], ['Lotus', '91', '90', '86'],
                          ['Lettuce', '94', '61', '0']]),
         claim='A student claims that lotus seed loses almost nothing to half a century of '
               'storage while the other two lose nearly everything.',
         rule='support_claim',
         rule_span='where wheat fell to 3 per cent and lettuce to none at all',
         opts=['Lotus seed germinated at 91 per cent after fifty years and lettuce at 61.',
               'Lotus seed germinated at 86 per cent after fifty years, where wheat fell '
               'to 3 per cent and lettuce to none at all.',
               'All three species germinated above ninety per cent after a single year.',
               'Lotus seed will germinate after any length of storage at all.'], key='B',
         faults={'A': ('misread_row', 'at 91 per cent after fifty years and lettuce at 61'),
                 'C': ('true_not_asked', 'above ninety per cent after a single year'),
                 'D': ('overreach', 'after any length of storage at all')},
         why="The claim sets one species against two at fifty years, so the data that "
             "support it are the three figures in the last column.",
         trap="A reads the fifty-year claim off the one-year and ten-year columns, which "
              "are the two columns the claim is not about."),
])

PHY = dict(domain='PHY', note_ar=(
    "جداول العلوم الفيزيائية تعرض القيم ووحداتها وحدود الخطأ فيها، والفخّ فيها أن تُقرأ "
    "القيمة من صفّ آخر أو أن تُقلب جهة المقارنة، لأن الصفوف متشابهة في صورتها."), xs=[
    dict(strand='PHY-S01', pos=1, stem_form=1,
         table=dict(title='Speed of sound in four media (meters a second)',
                    cols=['Medium', 'Speed'],
                    rows=[['Air', '343'], ['Water', '1,480'], ['Steel', '5,960'],
                          ['Diamond', '12,000']]),
         claim='Sound moves through steel about four times as fast as through water, that '
               'is at ___',
         rule='compare_cells', rule_span='5,960 meters a second against 1,480',
         opts=['12,000 meters a second against 1,480.',
               '5,960 meters a second against 1,480.',
               '1,480 meters a second against 5,960.',
               '5,960 meters a second, faster than in any other solid.'], key='B',
         faults={'A': ('misread_row', '12,000 meters a second against 1,480'),
                 'C': ('reversed_comparison', '1,480 meters a second against 5,960'),
                 'D': ('overreach', 'faster than in any other solid')},
         why="The statement needs the difference between two rows, and the table puts steel "
             "at 5,960 against the 1,480 of water.",
         trap="C gives both figures in the wrong order, which would have sound moving "
              "faster through water than through steel."),
    dict(strand='PHY-S02', pos=2, stem_form=0,
         table=dict(title='Half-life of four isotopes',
                    cols=['Isotope', 'Half-life'],
                    rows=[['Carbon-14', '5,730 years'], ['Radium-226', '1,600 years'],
                          ['Uranium-238', '4.5 billion years'], ['Iodine-131', '8 days']]),
         claim='A student claims that carbon-14 suits the dating of material a few '
               'thousand years old.',
         rule='read_cell', rule_span='Carbon-14 has a half-life of 5,730 years',
         opts=['Carbon-14 has a half-life of 1,600 years.',
               'Iodine-131 has a half-life of only eight days.',
               'Carbon-14 can date an object of any age at all.',
               'Carbon-14 has a half-life of 5,730 years.'], key='D',
         faults={'A': ('misread_row', 'half-life of 1,600 years'),
                 'B': ('true_not_asked', 'Iodine-131 has a half-life of only eight days'),
                 'C': ('overreach', 'can date an object of any age at all')},
         why="The claim rests on one value in the table, the 5,730 years on the carbon-14 "
             "row, which is the right order of magnitude for the claim.",
         trap="A gives the radium figure, and the two rows sit next to each other."),
    dict(strand='PHY-S03', pos=3, stem_form=0,
         table=dict(title='Energy from one kilogram of fuel (megajoules)',
                    cols=['Fuel', 'Energy'],
                    rows=[['Wood', '16'], ['Coal', '27'], ['Gasoline', '46'],
                          ['Uranium-235', '83,000,000']]),
         claim='A student claims that the difference between chemical and nuclear fuel is '
               'of a different order from the differences among the chemical fuels.',
         rule='compare_cells',
         rule_span='while uranium yields eighty-three million',
         opts=['Gasoline yields 46 megajoules a kilogram against the 16 of wood, while '
               'uranium yields eighty-three million.',
               'Coal yields 46 megajoules a kilogram against the 27 of gasoline.',
               'A kilogram of coal yields 27 megajoules.',
               'Nuclear fuel is a better choice than any chemical fuel for every purpose '
               'to which fuel is put.'], key='A',
         faults={'B': ('misread_row', 'Coal yields 46 megajoules a kilogram'),
                 'C': ('true_not_asked', 'A kilogram of coal yields 27 megajoules'),
                 'D': ('overreach', 'a better choice than any chemical fuel')},
         why="The claim is about two differences at once, so the sentence has to give the "
             "widest chemical gap and the nuclear figure beside it.",
         trap="B swaps the labels on two rows, so the biggest chemical figure lands on the "
              "wrong fuel."),
    dict(strand='PHY-S04', pos=4, stem_form=1,
         table=dict(title='Boiling point of water with altitude',
                    cols=['Altitude (meters)', 'Boiling point (Celsius)'],
                    rows=[['0', '100'], ['1,000', '96.7'], ['2,000', '93.4'],
                          ['3,000', '90.1']]),
         claim='At two thousand meters above sea level water boils at ___',
         rule='read_cell', rule_span='93.4 degrees Celsius',
         opts=['96.7 degrees Celsius.', '100 degrees Celsius, as it does at sea level.',
               '93.4 degrees Celsius.', '93.4 degrees, which is too cool to cook with.'],
         key='C',
         faults={'A': ('misread_row', '96.7 degrees Celsius'),
                 'B': ('true_not_asked', '100 degrees Celsius, as it does at sea level'),
                 'D': ('overreach', 'which is too cool to cook with')},
         why="The statement needs the value on one row, and the table gives 93.4 degrees "
             "for two thousand meters.",
         trap="A reads the row above, which is the one mistake this kind of table invites."),
    dict(strand='PHY-S05', pos=5, stem_form=2,
         table=dict(title='Transistors on a commercial processor',
                    cols=['Year', 'Transistors'],
                    rows=[['1971', '2,300'], ['1989', '1,200,000'],
                          ['2000', '42,000,000'], ['2020', '39,000,000,000']]),
         claim='A student is writing about the scale of commercial processors since 1971.',
         rule='trend_across_rows',
         rule_span='rose at every reading between 1971 and 2020',
         opts=['The number of transistors on a processor rose until 2000 and then held '
               'steady.',
               'The number of transistors on a processor rose at every reading between '
               '1971 and 2020.',
               'The number of transistors on a processor will go on doubling '
               'indefinitely.',
               'A processor of 1989 carried about 1.2 million transistors.'], key='B',
         faults={'A': ('misread_row', 'rose until 2000 and then held steady'),
                 'C': ('overreach', 'will go on doubling indefinitely'),
                 'D': ('true_not_asked', 'carried about 1.2 million transistors')},
         why="A claim about scale over fifty years is a claim about direction, and every "
             "reading in the table is larger than the one before it.",
         trap="A has the figure holding steady after 2000, when the table has it rising by "
              "a factor of nearly a thousand."),
    dict(strand='PHY-S06', pos=6, stem_form=2,
         table=dict(title='Cost of putting one kilogram into low orbit (thousands of '
                          'dollars)',
                    cols=['Vehicle and year', 'Cost'],
                    rows=[['Saturn V, 1967', '5.4'], ['Shuttle, 1981', '54.5'],
                          ['Falcon 9, 2010', '2.7'], ['Falcon Heavy, 2018', '1.4']]),
         claim='A student is writing about the cost of reaching orbit.',
         rule='trend_across_rows',
         rule_span='it rose with the Shuttle before falling below the Saturn figure after '
                   '2010',
         opts=['The cost did not fall steadily: it rose with the Shuttle before falling '
               'below the Saturn figure after 2010.',
               'The cost fell at every step from 1967 to 2018.',
               'Launch costs will go on falling until reaching orbit is free.',
               'The Shuttle cost 54,500 dollars for every kilogram it carried.'], key='A',
         faults={'B': ('misread_row', 'fell at every step from 1967 to 2018'),
                 'C': ('overreach', 'until reaching orbit is free'),
                 'D': ('true_not_asked', 'cost 54,500 dollars for every kilogram')},
         why="The direction across these four rows is not one direction, and a conclusion "
             "has to say so rather than smooth it out.",
         trap="B assumes the direction every reader expects, and the Shuttle row is ten "
              "times the row above it."),
    dict(strand='PHY-S07', pos=7, stem_form=0,
         table=dict(title='Published values of the gravitational constant',
                    cols=['Year', 'Value', 'Stated uncertainty'],
                    rows=[['1942', '6.673', '0.003'], ['1982', '6.672', '0.001'],
                          ['2001', '6.675', '0.0007'], ['2014', '6.674', '0.0003']]),
         claim='A student claims that the published values differ from each other by more '
               'than their stated uncertainties allow.',
         rule='support_claim',
         rule_span='differ by 0.003 while each is quoted to 0.001 or better',
         opts=['The 1942 and 2014 values differ by 0.001 and are quoted to 0.003.',
               'The value published in 2014 was 6.674 with an uncertainty of 0.0003.',
               'The gravitational constant cannot be measured at all.',
               'The values of 1982 and 2001 differ by 0.003 while each is quoted to 0.001 '
               'or better.'], key='D',
         faults={'A': ('misread_row', 'differ by 0.001 and are quoted to 0.003'),
                 'B': ('true_not_asked', 'with an uncertainty of 0.0003'),
                 'C': ('overreach', 'cannot be measured at all')},
         why="The claim needs two values and their two uncertainties, and the support is "
             "the pair whose gap is three times the larger of them.",
         trap="A picks the pair whose gap is smallest and the uncertainty that is largest, "
              "which is the claim stood on its head."),
    dict(strand='PHY-S08', pos=8, stem_form=2,
         table=dict(title='Efficiency of four light sources (lumens a watt)',
                    cols=['Source', 'Efficiency'],
                    rows=[['Incandescent', '15'], ['Halogen', '20'], ['Fluorescent', '60'],
                          ['White LED', '120']]),
         claim='A student wants to draw a conclusion about which source gives the '
               'pleasantest light.',
         rule='no_support', rule_span='says nothing about how the light looks',
         opts=['The LED gives the pleasantest light because its spectrum is closest to '
               'daylight.',
               'The LED is the best light source for every purpose.',
               'The table gives the light each source yields for a watt and says nothing '
               'about how the light looks.',
               'The fluorescent lamp yields 120 lumens a watt.'], key='C',
         faults={'A': ('imported', 'because its spectrum is closest to daylight'),
                 'B': ('overreach', 'the best light source for every purpose'),
                 'D': ('misread_row', 'fluorescent lamp yields 120 lumens a watt')},
         why="Lumens a watt is a measure of quantity, and the table does not carry any "
             "column that would bear on the look of a light.",
         trap="A supplies a reason about the spectrum, and no column of the table mentions "
              "a spectrum."),
    dict(strand='PHY-S09', pos=9, stem_form=0,
         table=dict(title='October ozone over Halley Station (Dobson units)',
                    cols=['Year', 'Ozone'],
                    rows=[['1957', '321'], ['1975', '280'], ['1985', '196'],
                          ['1994', '73'], ['2019', '160']]),
         claim='A student claims that the ozone over Antarctica thinned sharply and has '
               'since begun to recover.',
         rule='support_claim',
         rule_span='fell from 321 units in 1957 to 73 in 1994 and had risen to 160 by 2019',
         opts=['October ozone fell from 321 units in 1957 to 73 in 1994 and had risen to '
               '160 by 2019.',
               'October ozone fell from 321 units in 1957 to 160 in 1994 and had risen to '
               '196 by 2019.',
               'In 1975 the October figure stood at 280 Dobson units.',
               'The ozone over Antarctica has returned to the thickness it had in 1957.'],
         key='A',
         faults={'B': ('misread_row', 'to 160 in 1994 and had risen to 196 by 2019'),
                 'C': ('true_not_asked', 'In 1975 the October figure stood at 280'),
                 'D': ('overreach', 'returned to the thickness it had in 1957')},
         why="The claim has two halves, a fall and a recovery, so the data that support it "
             "are the first, the lowest and the last readings together.",
         trap="B swaps the figures for 1994 and 2019, which leaves the recovery smaller "
              "than the fall by a factor it never was."),
    dict(strand='PHY-S10', pos=10, stem_form=2,
         table=dict(title='Global surface temperature, departure from the 1951 to 1980 '
                          'mean (Celsius)',
                    cols=['Decade', 'Departure'],
                    rows=[['1880s', '-0.27'], ['1930s', '-0.03'], ['1980s', '0.18'],
                          ['2010s', '0.86']]),
         claim='A student wants to draw a conclusion about what has driven the warming of '
               'the past century.',
         rule='no_support', rule_span='does not give its cause',
         opts=['The warming of the past century has been driven by the carbon dioxide '
               'released from fuel.',
               'The warming will pass two degrees before the end of the century.',
               'The table gives the size of the warming at four points and does not give '
               'its cause.',
               'The departure fell between the 1930s and the 1980s.'], key='C',
         faults={'A': ('imported', 'driven by the carbon dioxide released from fuel'),
                 'B': ('overreach', 'will pass two degrees before the end'),
                 'D': ('misread_row', 'fell between the 1930s and the 1980s')},
         why="Four departures from a mean give the size and the direction of a change, and "
             "the table does not hold a cause of any kind.",
         trap="A states the cause that is in fact the accepted one, which is exactly why it "
              "has to be read against the table and not against memory."),
])

HUM = dict(domain='HUM', note_ar=(
    "جداول الإنسانيات تعدّ الأعمال والطبعات والترجمات، والفخّ فيها أن يُقرأ من العدد حكم "
    "في الذوق أو في القيمة، والجدول لا يعدّ إلّا ما عُدّ فيه."), xs=[
    dict(strand='HUM-S01', pos=1, stem_form=0,
         table=dict(title='Plays in the Shakespeare first folio by section',
                    cols=['Section', 'Plays'],
                    rows=[['Comedies', '14'], ['Histories', '10'], ['Tragedies', '12']]),
         claim='A student claims that the folio gave more room to comedy than to either of '
               'the other two kinds.',
         rule='read_cell', rule_span='The folio prints fourteen comedies',
         opts=['The folio prints ten comedies in all.',
               'The folio prints twelve tragedies in all.',
               'The folio prints fourteen comedies.',
               'Comedy was the most popular kind of play in London.'], key='C',
         faults={'A': ('misread_row', 'prints ten comedies in all'),
                 'B': ('true_not_asked', 'prints twelve tragedies in all'),
                 'D': ('overreach', 'the most popular kind of play in London')},
         why="The claim rests on one value, the fourteen comedies, which is larger than "
             "either of the other two counts.",
         trap="A puts the number of histories on the comedies, which is the easiest "
              "substitution in a table of three rows."),
    dict(strand='HUM-S02', pos=2, stem_form=1,
         table=dict(title='First printings of four novels (copies)',
                    cols=['Novel', 'Copies'],
                    rows=[['Moby-Dick, 1851', '2,915'], ['Middlemarch, 1872', '5,000'],
                          ['Ulysses, 1922', '1,000'], ['The Great Gatsby, 1925',
                                                       '20,870']]),
         claim='The first printing of Ulysses in 1922 ran to ___',
         rule='read_cell', rule_span='a thousand copies in all',
         opts=['a thousand copies in all.', 'five thousand copies in all.',
               'twenty thousand eight hundred and seventy copies.',
               'a thousand copies, fewer than any novel printed since.'], key='A',
         faults={'B': ('misread_row', 'five thousand copies in all'),
                 'C': ('true_not_asked', 'twenty thousand eight hundred and seventy'),
                 'D': ('overreach', 'fewer than any novel printed since')},
         why="The statement needs the value on the Ulysses row, which the table gives as a "
             "thousand copies.",
         trap="B takes the Middlemarch figure, and the two rows sit one above the other."),
    dict(strand='HUM-S03', pos=3, stem_form=0,
         table=dict(title='A playing company in the season of 1610',
                    cols=['Place of performance', 'Performances', 'Capacity'],
                    rows=[['Globe', '98', '3,000'], ['Blackfriars', '42', '700'],
                          ['Court', '14', '400']]),
         claim='A student claims that the company played to more people at the Globe that '
               'season than at the other two places together.',
         rule='compare_cells',
         rule_span='98 performances in a house of 3,000 against 42 in a house of 700 and '
                   '14 in a room for 400',
         opts=['The company gave 42 performances at the Globe, in a house of 3,000, and 98 '
               'at the Blackfriars, in a house of 700.',
               'The company gave 98 performances in a house of 3,000 against 42 in a house '
               'of 700 and 14 in a room for 400.',
               'The company played fourteen times at court that season.',
               'The Globe was the most profitable playhouse in London.'], key='B',
         faults={'A': ('reversed_comparison', '42 performances at the Globe, in a house of '
                       '3,000'),
                 'C': ('true_not_asked', 'played fourteen times at court'),
                 'D': ('overreach', 'the most profitable playhouse in London')},
         why="The claim turns on the difference between one product and two others, so the "
             "sentence has to give all three counts with all three capacities.",
         trap="A swaps the two playhouses, which makes the small indoor house carry the "
              "season."),
    dict(strand='HUM-S04', pos=4, stem_form=2,
         table=dict(title='Novels published in Britain by decade',
                    cols=['Decade', 'Titles'],
                    rows=[['1820s', '640'], ['1840s', '1,180'], ['1860s', '2,170'],
                          ['1880s', '3,340']]),
         claim='A student is writing about the growth of the novel in nineteenth-century '
               'Britain.',
         rule='trend_across_rows',
         rule_span='rose at every reading between the 1820s and the 1880s',
         opts=['The number of novels published rose until the 1860s and then fell away.',
               'By the 1880s the novel had driven poetry out of the market.',
               'In the 1840s about 1,180 novels were published in Britain.',
               'The number of novels published rose at every reading between the 1820s and '
               'the 1880s.'], key='D',
         faults={'A': ('misread_row', 'rose until the 1860s and then fell away'),
                 'B': ('overreach', 'had driven poetry out of the market'),
                 'C': ('true_not_asked', 'about 1,180 novels were published in Britain')},
         why="Growth is a direction, and each of the four decades in the table stands above "
             "the one before it.",
         trap="A turns the last interval round, where the table has the largest rise of the "
              "four."),
    dict(strand='HUM-S05', pos=5, stem_form=1,
         table=dict(title='Length of four symphonies (minutes)',
                    cols=['Work', 'Minutes'],
                    rows=[['Haydn 94', '24'], ['Beethoven 5', '31'], ['Beethoven 9', '68'],
                          ['Mahler 3', '95']]),
         claim="Mahler's third symphony runs longer than Beethoven's ninth by ___",
         rule='compare_cells', rule_span='twenty-seven minutes, 95 against 68',
         opts=['sixty-four minutes, 95 against 31.',
               'twenty-seven minutes, 68 against 95.',
               'twenty-seven minutes, 95 against 68.',
               'twenty-seven minutes, longer than any symphony ever written.'], key='C',
         faults={'A': ('misread_row', 'sixty-four minutes, 95 against 31'),
                 'B': ('reversed_comparison', 'twenty-seven minutes, 68 against 95'),
                 'D': ('overreach', 'longer than any symphony ever written')},
         why="The statement needs the difference between two rows, and the two the "
             "statement names are the 95 of Mahler and the 68 of Beethoven's ninth.",
         trap="A measures Mahler against the fifth symphony rather than the ninth."),
    dict(strand='HUM-S06', pos=6, stem_form=2,
         table=dict(title='Share of feature films released in color (per cent)',
                    cols=['Year', 'In color'],
                    rows=[['1940', '5'], ['1955', '25'], ['1965', '60'], ['1970', '94']]),
         claim='A student is writing about the arrival of color in the cinema.',
         rule='trend_across_rows',
         rule_span='rose at every reading between 1940 and 1970',
         opts=['The share of films in color held steady until 1955 and then rose.',
               'The share of films in color rose at every reading between 1940 and 1970.',
               'No film has been released in black and white since 1970.',
               'In 1965 three films in five were released in color.'], key='B',
         faults={'A': ('misread_row', 'held steady until 1955 and then rose'),
                 'C': ('overreach', 'No film has been released in black and white'),
                 'D': ('true_not_asked', 'three films in five were released in color')},
         why="The arrival of color is a direction, and the share rises at each of the four "
             "readings, from five per cent to ninety-four.",
         trap="A has the share holding steady to 1955, when the table has it five times "
              "larger by then."),
    dict(strand='HUM-S07', pos=7, stem_form=2,
         table=dict(title='Paintings in four museum collections',
                    cols=['Collection', 'Paintings', 'By women'],
                    rows=[['A', '2,400', '96'], ['B', '1,800', '126'], ['C', '900', '81'],
                          ['D', '3,200', '64']]),
         claim='A student wants to draw a conclusion about why so few of the paintings are '
               'by women.',
         rule='no_support',
         rule_span='does not say why the shares are what they are',
         opts=['The table counts the paintings in each collection and does not say why the '
               'shares are what they are.',
               'The shares are low because the academies would not admit women before '
               '1870.',
               'The curators of these museums are not interested in the work of women.',
               'Collection D holds the largest share of paintings by women.'], key='A',
         faults={'B': ('imported', 'the academies would not admit women before 1870'),
                 'C': ('overreach', 'not interested in the work of women'),
                 'D': ('misread_row', 'Collection D holds the largest share')},
         why="Two columns of counts give the shares and nothing else, so the table does "
             "not reach a question about their cause.",
         trap="D confuses the largest number of paintings with the largest share of them, "
              "and D in fact holds the smallest share."),
    dict(strand='HUM-S08', pos=8, stem_form=0,
         table=dict(title='Books translated into English by language of origin',
                    cols=['Language', '2010', '2020'],
                    rows=[['French', '98', '142'], ['Spanish', '88', '151'],
                          ['Japanese', '31', '118'], ['Korean', '7', '54']]),
         claim='A student claims that the sharpest growth in translation came from the two '
               'East Asian languages rather than the two European ones.',
         rule='support_claim',
         rule_span='Japanese translations nearly quadrupled and Korean rose almost '
                   'eightfold',
         opts=['French translations rose from 98 to 151 and Spanish from 88 to 142.',
               'In 2020 Spanish supplied 151 of the translations counted.',
               'More Korean books are now translated into English than French ones.',
               'Japanese translations nearly quadrupled and Korean rose almost eightfold, '
               'while French grew by about half and Spanish by three quarters.'], key='D',
         faults={'A': ('misread_row', 'French translations rose from 98 to 151'),
                 'B': ('true_not_asked', 'Spanish supplied 151 of the translations'),
                 'C': ('overreach', 'More Korean books are now translated into English')},
         why="The claim compares four rates of growth, so the data that support it are the "
             "four pairs of figures turned into multiples.",
         trap="A exchanges the second figures of the two European rows, which leaves the "
              "growth rates of both of them wrong."),
    dict(strand='HUM-S09', pos=9, stem_form=0,
         table=dict(title='Poems in four collections of the 1590s',
                    cols=['Collection', 'Year', 'Sonnets', 'Other poems'],
                    rows=[['A', '1591', '108', '4'], ['B', '1594', '78', '22'],
                          ['C', '1597', '52', '60'], ['D', '1600', '22', '96']]),
         claim='A student claims that the sonnet filled the earliest of these collections '
               'and had given way in the latest.',
         rule='support_claim',
         rule_span='Sonnets fall from 108 of the 112 poems in the collection of 1591 to 22 '
                   'of 118 in that of 1600',
         opts=['Sonnets fall from 96 of the poems in the collection of 1591 to 4 in that '
               'of 1600.',
               'Sonnets fall from 108 of the 112 poems in the collection of 1591 to 22 of '
               '118 in that of 1600.',
               'The collection of 1597 holds 52 sonnets and 60 other poems.',
               'The sonnet had gone out of fashion in England by the year 1600.'], key='B',
         faults={'A': ('misread_row', 'from 96 of the poems in the collection of 1591'),
                 'C': ('true_not_asked', 'holds 52 sonnets and 60 other poems'),
                 'D': ('overreach', 'had gone out of fashion in England')},
         why="The claim is about the first collection and the last, so the support is those "
             "two rows read as shares of their own totals.",
         trap="A takes its two numbers from the wrong column and the wrong rows at once."),
    dict(strand='HUM-S10', pos=10, stem_form=2,
         table=dict(title='Age at first publication, four generations of poets',
                    cols=['Generation', 'Poets counted', 'Average age'],
                    rows=[['Born in the 1900s', '40', '29'],
                          ['Born in the 1930s', '40', '27'],
                          ['Born in the 1960s', '40', '31'],
                          ['Born in the 1990s', '40', '26']]),
         claim='A student wants to draw a conclusion about why the age of first publication '
               'has moved as it has.',
         rule='no_support', rule_span='does not say what moved it',
         opts=['The age fell for the youngest generation because poems now first appear '
               'online.',
               'The poets of the 1990s generation were more talented than those before '
               'them.',
               'The average age of first publication fell in each generation.',
               'The table gives the average age in each generation and does not say what '
               'moved it.'], key='D',
         faults={'A': ('imported', 'because poems now first appear online'),
                 'B': ('overreach', 'were more talented than those before them'),
                 'C': ('misread_row', 'fell in each generation')},
         why="Four averages give the size and the direction of the movement, and the table "
             "does not hold a column that would account for it.",
         trap="C reads the four averages as a single fall, and the third of them is the "
              "highest in the table."),
])

SOC = dict(domain='SOC', note_ar=(
    "جداول العلوم الاجتماعية تعرض النسب على السنين أو على الفئات، والفخّ فيها أن يُقرأ "
    "السبب من الجدول أو أن تُقلب جهة المقارنة. ولذلك جُعل هذا المجال أصل الفصل، وفيه "
    "أسئلة ما لا يسنده الجدول على وجهها الأصعب."), xs=[
    dict(strand='SOC-S01', pos=1, stem_form=1,
         table=dict(title='Turnout in four national elections (per cent of eligible '
                          'voters)',
                    cols=['Year', 'Turnout'],
                    rows=[['2014', '36'], ['2016', '60'], ['2018', '50'], ['2020', '67']]),
         claim='Turnout in the midterm election of 2018 ran above the previous midterm by '
               '___',
         rule='compare_cells', rule_span='fourteen points, 50 against 36',
         opts=['seven points, 67 against 60.', 'fourteen points, 36 against 50.',
               'fourteen points, the largest rise ever recorded.',
               'fourteen points, 50 against 36.'], key='D',
         faults={'A': ('misread_row', 'seven points, 67 against 60'),
                 'B': ('reversed_comparison', 'fourteen points, 36 against 50'),
                 'C': ('overreach', 'the largest rise ever recorded')},
         why="The statement needs the difference between the two midterm rows, which the "
             "table puts at 50 per cent and 36.",
         trap="A compares the two presidential years, which are the rows the statement is "
              "not about."),
    dict(strand='SOC-S02', pos=2, stem_form=0,
         table=dict(title='Share of households with selected goods, 1930 (per cent)',
                    cols=['Good', 'Share'],
                    rows=[['Radio', '40'], ['Electric light', '68'], ['Telephone', '41'],
                          ['Automobile', '60']]),
         claim='A student claims that by 1930 electric light had reached a clear majority '
               'of American homes.',
         rule='read_cell',
         rule_span='In 1930 electric light reached 68 per cent of households',
         opts=['In 1930 electric light reached 60 per cent of households.',
               'In 1930 electric light reached 68 per cent of households.',
               'In 1930 the telephone reached 41 per cent of households.',
               'By 1930 every town in the country had electric light.'], key='B',
         faults={'A': ('misread_row', 'reached 60 per cent of households'),
                 'C': ('true_not_asked', 'the telephone reached 41 per cent'),
                 'D': ('overreach', 'every town in the country had electric light')},
         why="The claim rests on one value, and the table puts electric light at 68 per "
             "cent, which is the clear majority the claim needs.",
         trap="A gives the figure for the automobile, which is also a majority and is the "
              "wrong row."),
    dict(strand='SOC-S03', pos=3, stem_form=1,
         table=dict(title='Median age at first marriage',
                    cols=['Year', 'Men', 'Women'],
                    rows=[['1960', '22.8', '20.3'], ['1980', '24.7', '22.0'],
                          ['2000', '26.8', '25.1'], ['2020', '30.5', '28.6']]),
         claim='In 2000 the median age at first marriage for women was ___',
         rule='read_cell', rule_span='25.1 years for women',
         opts=['22.0 years for women.', '26.8 years, which is the figure for men.',
               '25.1 years for women.', '25.1 years, later than in any other country.'],
         key='C',
         faults={'A': ('misread_row', '22.0 years for women'),
                 'B': ('true_not_asked', 'which is the figure for men'),
                 'D': ('overreach', 'later than in any other country')},
         why="The statement needs one value, where the row for 2000 meets the column for "
             "women, and the table puts it at 25.1 years.",
         trap="B reads along the right row into the wrong column, which a table of two "
              "columns invites."),
    dict(strand='SOC-S04', pos=4, stem_form=0,
         table=dict(title='Prisoners per hundred thousand residents',
                    cols=['Country', 'Rate'],
                    rows=[['United States', '639'], ['Russia', '328'],
                          ['England and Wales', '131'], ['Japan', '38']]),
         claim='A student claims that the American rate is nearly twice the Russian rate '
               'and almost five times the English one.',
         rule='compare_cells',
         rule_span='nearly twice the Russian 328 and almost five times the 131 of England '
                   'and Wales',
         opts=['The American rate of 639 is nearly twice the Russian 328 and almost five '
               'times the 131 of England and Wales.',
               'The American rate of 639 is nearly twice the English 131.',
               'The Japanese rate is 38 for every hundred thousand residents.',
               'The United States imprisons more people than any country has imprisoned in '
               'any period.'], key='A',
         faults={'B': ('misread_row', 'nearly twice the English 131'),
                 'C': ('true_not_asked', 'The Japanese rate is 38'),
                 'D': ('overreach', 'more people than any country has imprisoned')},
         why="The claim states two differences, so the support has to carry three of the "
             "four rates and keep each with its own country.",
         trap="B gives the English figure where the Russian one belongs, and 639 is five "
              "times 131 rather than twice it."),
    dict(strand='SOC-S05', pos=5, stem_form=2,
         table=dict(title='Adults who had completed high school (per cent)',
                    cols=['Year', 'Share'],
                    rows=[['1940', '24'], ['1960', '41'], ['1980', '69'], ['2000', '84'],
                          ['2020', '91']]),
         claim='A student is writing about schooling in the United States since 1940.',
         rule='trend_across_rows',
         rule_span='rose at every reading from 1940 to 2020',
         opts=['The share rose until 1980 and then held steady at about seven in ten.',
               'Every American adult will have finished high school within a decade.',
               'In 1960 about two adults in five had completed high school.',
               'The share of adults who had completed high school rose at every reading '
               'from 1940 to 2020.'], key='D',
         faults={'A': ('misread_row', 'rose until 1980 and then held steady'),
                 'B': ('overreach', 'will have finished high school within a decade'),
                 'C': ('true_not_asked', 'about two adults in five')},
         why="A claim about schooling over eighty years is a claim about direction, and all "
             "five readings run upward.",
         trap="A stops the rise at 1980, when the table adds twenty-two points after it."),
    dict(strand='SOC-S06', pos=6, stem_form=2,
         table=dict(title='Union membership as a share of employed workers (per cent)',
                    cols=['Year', 'Private sector', 'Public sector'],
                    rows=[['1973', '24', '23'], ['1983', '17', '37'], ['2000', '9', '37'],
                          ['2020', '6', '35']]),
         claim='A student is writing about union membership in the two sectors since 1973.',
         rule='trend_across_rows',
         rule_span='while public membership rose sharply to 1983 and has held near a third '
                   'since',
         opts=['Membership fell at every reading in both of the two sectors.',
               'The union has no future in either sector of the economy.',
               'Private membership fell at every reading while public membership rose '
               'sharply to 1983 and has held near a third since.',
               'In 1983 public-sector membership stood at 37 per cent.'], key='C',
         faults={'A': ('misread_row', 'fell at every reading in both of the two sectors'),
                 'B': ('overreach', 'has no future in either sector'),
                 'D': ('true_not_asked', 'public-sector membership stood at 37 per cent')},
         why="The two columns take different directions, and a conclusion about the two "
             "sectors has to give the direction of each.",
         trap="A reads the public column as though it followed the private one, when it "
              "rises by fourteen points in the first interval."),
    dict(strand='SOC-S07', pos=7, stem_form=0,
         table=dict(title='Life expectancy at birth by income quartile (years)',
                    cols=['Quartile', '1980', '2010'],
                    rows=[['Lowest', '74.4', '76.0'], ['Second', '75.4', '78.4'],
                          ['Third', '76.0', '80.3'], ['Highest', '76.8', '83.2']]),
         claim='A student claims that the gap in life expectancy between the richest and '
               'the poorest quarter widened between 1980 and 2010.',
         rule='support_claim',
         rule_span='grew from 2.4 years in 1980 to 7.2 years in 2010',
         opts=['The gap between the highest and the lowest quartile grew from 1.6 years in '
               '1980 to 4.3 years in 2010.',
               'The gap between the highest and the lowest quartile grew from 2.4 years in '
               '1980 to 7.2 years in 2010.',
               'The lowest quartile gained 1.6 years of life expectancy over the period.',
               'Income is the only thing that determines how long an American lives.'],
         key='B',
         faults={'A': ('misread_row', 'grew from 1.6 years in 1980 to 4.3 years'),
                 'C': ('true_not_asked', 'gained 1.6 years of life expectancy'),
                 'D': ('overreach', 'the only thing that determines how long')},
         why="The claim is about a gap at two dates, so the support is the difference "
             "between the top and bottom rows in each of the two columns.",
         trap="A gives the gain of one quartile where the gap between two belongs, and the "
              "figures are the wrong ones for either."),
    dict(strand='SOC-S08', pos=8, stem_form=0,
         table=dict(title='Households by type (per cent of all households)',
                    cols=['Type', '1960', '2020'],
                    rows=[['Married with children', '44', '18'],
                          ['Married without children', '31', '29'],
                          ['One person', '13', '28'], ['Other', '12', '25']]),
         claim='A student claims that the household of a married couple with children has '
               'gone from the commonest kind to one of the least common.',
         rule='support_claim',
         rule_span='fell from 44 per cent of households to 18, while one-person households '
                   'rose from 13 to 28',
         opts=['Married couples with children fell from 44 per cent of households to 18, '
               'while one-person households rose from 13 to 28.',
               'Married couples with children fell from 44 per cent to 29, while '
               'one-person households rose to 25.',
               'Married couples without children were 31 per cent of households in 1960.',
               'The family of two parents and their children has ceased to exist in '
               'America.'], key='A',
         faults={'B': ('misread_row', 'fell from 44 per cent to 29'),
                 'C': ('true_not_asked', 'were 31 per cent of households in 1960'),
                 'D': ('overreach', 'has ceased to exist in America')},
         why="The claim is about one row losing its place to another, so the support is "
             "both rows at both dates.",
         trap="B takes its second figures from the rows below the two it names, which "
              "leaves the fall and the rise both too small."),
    dict(strand='SOC-S09', pos=9, stem_form=2,
         table=dict(title='Reported crime and police employment in one city',
                    cols=['Year', 'Reported crimes', 'Officers'],
                    rows=[['2000', '48,200', '3,100'], ['2008', '36,400', '3,450'],
                          ['2016', '29,800', '3,120'], ['2022', '31,500', '2,760']]),
         claim='A student wants to draw a conclusion about whether the number of officers '
               'drove the fall in reported crime.',
         rule='no_support',
         rule_span='it cannot say which of the two moved the other',
         opts=['Crime fell because the city put three hundred and fifty more officers on '
               'the street after 2000.',
               'The number of officers in a city has no effect at all on the crime '
               'reported in it.',
               'The table shows crime falling while the number of officers moves in both '
               'directions, and it cannot say which of the two moved the other.',
               'Reported crime fell at every reading between 2000 and 2022.'], key='C',
         faults={'A': ('imported', 'because the city put three hundred and fifty more '
                       'officers'),
                 'B': ('overreach', 'has no effect at all on the crime reported'),
                 'D': ('misread_row', 'fell at every reading between 2000 and 2022')},
         why="The two columns move together over part of the period and apart over the "
             "rest, and the table does not contain anything that would settle the cause.",
         trap="D is wrong on the table's own terms, because reported crime rises between "
              "2016 and 2022."),
    dict(strand='SOC-S10', pos=10, stem_form=2,
         table=dict(title='Births to unmarried mothers by education of the mother (per '
                          'cent)',
                    cols=['Education', '1980', '2010'],
                    rows=[['No high school', '35', '62'], ['High school', '13', '44'],
                          ['Some college', '8', '34'], ['College degree', '3', '9']]),
         claim='A student wants to draw a conclusion about why the shares rose in every '
               'group.',
         rule='no_support', rule_span='does not give any reason for the rise',
         opts=['The table gives the shares in each group at two dates and does not give '
               'any reason for the rise.',
               'The shares rose because the wages of men without a degree fell over the '
               'same thirty years.',
               'Marriage has become something that only college graduates do.',
               'The share rose in every group except the one with a college degree.'],
         key='A',
         faults={'B': ('imported', 'because the wages of men without a degree fell'),
                 'C': ('overreach', 'only college graduates do'),
                 'D': ('misread_row', 'in every group except the one with a college '
                       'degree')},
         why="Eight percentages give the size of the rise in four groups, and the table "
             "does not hold a column that would explain any of it.",
         trap="D denies the one row that rose least, and three per cent to nine is still a "
              "rise of three times."),
])

PARTS = [HIS, BIO, PHY, HUM, SOC]

if __name__ == '__main__':
    xemit.emit(CHAPTER, AR, PARTS)
