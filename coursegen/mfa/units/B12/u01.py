# -*- coding: utf-8 -*-
import figs

U = dict(
num=1, title='The Point of a Long Report',
gram='the present perfect for the state of play',
ai='summarising a long report without losing the point',
strap='CEFR B1 · Grammar: the present perfect · AI: summarising without losing the point',
cando=['use the present perfect to describe where a matter now stands',
       'say what has happened and what has not yet happened',
       'summarise a long report without losing what it was for',
       'name what a summary is allowed to drop and what it is not',
       'check a summary against the recommendation it was written to carry'],
hero=('SIXTY PAGES INTO ONE',
      ['The summary was accurate, readable and correctly ordered.',
       'The recommendation was on page fifty-one and did not survive.'],
      [(740, 'teal', 'long'), (1400, 'blue', 'short'),
       (2060, 'purple', 'long'), (2700, 'orange', 'short')]),
hero_cap='The Policy Planning reading pile, which is never smaller than this.',

warm=['How long is the longest document you have read this month?',
      'What do you read first in a long report?',
      'What has a summary lost if it is accurate and still useless?'],
read=[
 'The post in Astrene sends an annual review of the relationship, and it runs to about sixty '
 'pages. It is a good document. It is also a document that three or four people in the '
 'Ministry read in full, and that perhaps forty people need to know the contents of.',
 'This year Lina was asked to produce a one-page summary. She put the review through a '
 'summarising step, read what came back, and found it excellent: accurate, well ordered, '
 'covering trade, consular work, the cultural centre and the border. Nothing in it was wrong.',
 'Dr Mourad read the page and asked what the Ambassador wanted. Lina said that the summary '
 'covered everything. Dr Mourad said that this was the difficulty, and asked her to find the '
 'Ambassador’s recommendation in the summary.',
 'There was no recommendation in the summary. On page fifty-one of the review, in a single '
 'paragraph, the Ambassador recommends that the Ministry propose a consular agreement before '
 'the end of the year, and gives three reasons. It is the only recommendation in sixty pages '
 'and it is the reason the document was written.',
 'The summarising step had treated the review as sixty pages of information and had produced '
 'a fair account of all of it. One paragraph in sixty pages was, proportionately, almost '
 'nothing. In the Ambassador’s mind, and in the Ministry’s practice, it was the whole thing.'],
c_a=[('How long is the annual review?', 'about sixty pages'),
     ('How many people read it in full?', 'three or four'),
     ('What was good about the summary?', 'it was accurate, well ordered and covered every subject'),
     ('What was missing?', 'the Ambassador’s recommendation'),
     ('Where is the recommendation in the review?', 'on page fifty-one, in a single paragraph'),
     ('Why did the summary drop it?', 'because one paragraph in sixty pages is proportionately almost nothing')],
c_b=[('Forty people read the review in full.', 'F'),
     ('The summary contained an error.', 'F'),
     ('The review contains several recommendations.', 'F'),
     ('The recommendation gives three reasons.', 'T'),
     ('Dr Mourad read the summary.', 'T'),
     ('The summarising step was careless.', 'F')],
c_c=[('The post in Astrene sends an annual ____________.', 'review'),
     ('Forty people need to know the ____________.', 'contents'),
     ('Covering trade, consular work, the cultural centre and the ____________.', 'border'),
     ('The Ambassador recommends a consular ____________.', 'agreement'),
     ('It is the reason the document was ____________.', 'written'),
     ('Proportionately, almost ____________.', 'nothing')],
c_d=[('The summary was wrong about ( the border / nothing ).', ['the border', 'nothing'], 1),
     ('Where is the recommendation?', ['page one', 'page fifty-one', 'the annex', 'the covering note'], 1),
     ('How many recommendations are in the review?', ['three', 'one', 'sixty', 'none'], 1),
     ('What did the summarising step treat the review as?', ['an argument', 'sixty pages of information', 'a recommendation', 'a request'], 1),
     ('What does a good summary need to know?', ['the length', 'what the document was for', 'the author', 'the date'], 1)],
c_e=('Present perfect or past simple? Put each sentence in the right column.',
     [('The post has sent the review.', 'present perfect'),
      ('The post sent the review in March.', 'past simple'),
      ('We have not yet replied.', 'present perfect'),
      ('We replied on Tuesday.', 'past simple'),
      ('The matter has been open since 2021.', 'present perfect'),
      ('The matter arose in 2021.', 'past simple')],
     ['present perfect', 'past simple']),

v_fig_title='A LONG DOCUMENT AND ITS PARTS',
v_fig=[('book', 'a report'), ('doc', 'an executive summary'), ('key', 'a key point'),
       ('chart', 'an annex'), ('pin', 'salient'), ('envelope', 'a covering note')],
v_fig_cap='Six words for the shape of something nobody has time to read in full.',
vocab=[
 ('a report', 'a written account prepared for somebody who must act on it'),
 ('a summary', 'a shorter account that keeps the substance'),
 ('an abstract', 'a very short statement of what a document contains'),
 ('an executive summary', 'the opening page written for somebody who will read no further'),
 ('the gist', 'the essential sense, without the detail'),
 ('substance', 'the matter itself, as distinct from the form it takes'),
 ('a key point', 'one of the few points the reader must take away'),
 ('a subheading', 'a heading inside a document marking one section'),
 ('a bullet point', 'one item in a list, set out on its own line'),
 ('to condense', 'to make shorter while keeping the sense'),
 ('to abridge', 'to shorten a text by leaving parts out'),
 ('verbose', 'using more words than the matter requires'),
 ('concise', 'saying what is needed in few words'),
 ('salient', 'standing out as important among other things'),
 ('peripheral', 'at the edge of the matter rather than at its centre'),
 ('to prioritise', 'to decide what comes first when not everything can'),
 ('an annex', 'material attached at the end, referred to from the text'),
 ('an appendix', 'supporting material placed after the main text'),
 ('a covering note', 'a short note sent with a document saying what it is'),
 ('a conclusion', 'what the writer wants the reader to take from the whole')],
v_a=[('The opening page for somebody who will read no further is an ____________.', 'executive summary'),
     ('The essential sense, without the detail, is the ____________.', 'gist'),
     ('Standing out as important among other things is ____________.', 'salient'),
     ('At the edge of the matter rather than at its centre is ____________.', 'peripheral'),
     ('To shorten a text by leaving parts out is to ____________ it.', 'abridge'),
     ('A short note sent with a document saying what it is is a ____________.', 'covering note'),
     ('Using more words than the matter requires is ____________.', 'verbose'),
     ('Material attached at the end, referred to from the text, is an ____________.', 'annex')],
v_b=[('A report is a written account prepared', 'for somebody who must act on it.'),
     ('To condense is to make shorter', 'while keeping the sense.'),
     ('To prioritise is to decide what comes first', 'when not everything can.'),
     ('Substance is the matter itself,', 'as distinct from the form it takes.'),
     ('A conclusion is what the writer wants', 'the reader to take from the whole.')],

g_title='Grammar: the present perfect for the state of play',
g_rule=['Use have or has plus the past participle for a state that still holds.',
        'Use it with since and for: the matter has been open since 2021.',
        'Use it with yet, already and still for what has or has not happened.',
        'Use the past simple when you give the time: the post sent the review in March.'],
g_fig=('LOOSE',
       ['The matter is open since 2021.',
        'We have replied on Tuesday.',
        'The post has sent the review in March.',
        'We did not reply yet.'],
       'PRECISE',
       ['The matter has been open since 2021.',
        'We replied on Tuesday.',
        'The post sent the review in March.',
        'We have not replied yet.'],
       'four sentences mixing the two tenses',
       'four with the right tense for the time given'),
g_fig_cap='A stated time takes the past simple. An open state takes the present perfect.',
g_a=[('The matter ____________ (be) open since 2021.', 'has been'),
     ('We ____________ (reply) on Tuesday.', 'replied'),
     ('The post ____________ (send) the review in March.', 'sent'),
     ('We ____________ (not/reply) yet.', 'have not replied'),
     ('They ____________ (already/confirm) the dates.', 'have already confirmed'),
     ('The Ambassador ____________ (recommend) an agreement in this year’s review.', 'recommends'),
     ('Nothing ____________ (change) since the last review.', 'has changed'),
     ('We ____________ (hold) four meetings so far this year.', 'have held'),
     ('The cultural centre ____________ (open) in 2022 and ____________ (be) open since.', 'opened / has been')],
g_b=[('With a stated time, use the ( past simple / present perfect ).', ['past simple', 'present perfect'], 0),
     ('The matter ____ open since 2021.', ['is', 'has been', 'was', 'has'], 1),
     ('We ____ on Tuesday.', ['have replied', 'replied', 'have reply', 'are replying'], 1),
     ('We ____ yet.', ['did not reply', 'have not replied', 'are not replying', 'not replied'], 1),
     ('They ____ the dates.', ['have already confirmed', 'already confirmed yesterday', 'confirm already', 'has already confirm'], 0),
     ('Which word goes with the present perfect?', ['yesterday', 'since', 'in March', 'last year'], 1)],

d1=dict(title='Where is the recommendation?',
        fig=(['It covers everything.', 'That is the problem.'],
             ['How can covering everything be a problem?', 'Find me page fifty-one.']),
        cap='Dr Mourad and Lina, with the summary.',
        lines=[('Dr Mourad', 'This is a good page. What does the Ambassador want?'),
               ('Lina', 'The summary covers trade, consular, the centre and the border.'),
               ('Dr Mourad', 'I know what it covers. What does he want?'),
               ('Lina', 'I would have to look at the review.'),
               ('Dr Mourad', 'Page fifty-one. One paragraph. He recommends that we propose a '
                             'consular agreement before the end of the year, and he gives three '
                             'reasons.'),
               ('Lina', 'That is not in the summary at all.'),
               ('Dr Mourad', 'One paragraph in sixty pages. If you are summarising sixty pages, '
                             'it is almost nothing.'),
               ('Lina', 'And if you are reading an Ambassador, it is everything.'),
               ('Dr Mourad', 'It is the only reason he wrote the document. The other fifty-nine '
                             'pages are there to make that paragraph credible.'),
               ('Lina', 'So the summary answered the wrong question.'),
               ('Dr Mourad', 'It answered what is in this document. Nobody asked what is this '
                             'document for.'),
               ('Lina', 'Those are different questions and I had not noticed.')],
        a=[('What does Dr Mourad ask twice?', 'what the Ambassador wants'),
           ('Where is the recommendation?', 'page fifty-one, one paragraph, with three reasons'),
           ('Why does the summary drop it?', 'because one paragraph in sixty pages is proportionately almost nothing'),
           ('What are the other fifty-nine pages for?', 'to make that paragraph credible'),
           ('What are the two different questions?', 'what is in this document, and what this document is for')],
        b=[('What does the Ambassador ____________?', 'want'),
           ('He gives three ____________.', 'reasons'),
           ('If you are reading an Ambassador, it is ____________.', 'everything'),
           ('Nobody asked what this document is ____________.', 'for')]),
d2=dict(title='Ask for the ask',
        fig=(['So what do I ask for?', 'The ask, first.'],
             ['And then everything else?', 'Then whatever fits.']),
        cap='Lina and Nadia Barakat, by telephone from Geneva.',
        lines=[('Nadia', 'In Geneva we summarise forty documents a week. I have one rule and it '
                         'took me two years to find it.'),
               ('Lina', 'Tell me the rule.'),
               ('Nadia', 'The first line of the summary says what the writer wants. Not what the '
                         'document covers. What they want.'),
               ('Lina', 'Some documents do not want anything.'),
               ('Nadia', 'Very few. A report with no ask is usually a report whose ask is buried, '
                         'and the burying is sometimes deliberate.'),
               ('Lina', 'Deliberate?'),
               ('Nadia', 'A post that wants something difficult will put it on page fifty-one '
                         'with sixty pages of context in front of it. That is not dishonest. It '
                         'is how you ask for something difficult.'),
               ('Lina', 'And a summary strips the context away and leaves a bare request.'),
               ('Nadia', 'Which can look more aggressive than the Ambassador intended. So the '
                         'summary must carry the ask and the reasons, not the ask alone.'),
               ('Lina', 'How many reasons?'),
               ('Nadia', 'However many they gave. If they gave three, you give three. The number '
                         'is part of what they said.'),
               ('Lina', 'That is a more careful rule than the one I was about to write.')],
        a=[('How many documents does Nadia summarise a week?', 'about forty'),
           ('What is her rule?', 'the first line says what the writer wants'),
           ('Why might an ask be buried?', 'because that is how you ask for something difficult'),
           ('What happens if a summary strips the context?', 'the request can look more aggressive than intended'),
           ('How many reasons should a summary carry?', 'however many were given')],
        b=[('It took me two years to ____________ it.', 'find'),
           ('A report with no ask is usually a report whose ask is ____________.', 'buried'),
           ('Which can look more ____________ than the Ambassador intended.', 'aggressive'),
           ('The number is part of what they ____________.', 'said')]),

speak=[('Say it correctly',
        ['Student A: say six things about the state of play on a matter you know.',
         'Student B: check the present perfect against the past simple in each.',
         'Find the sentence with a stated time that must take the past simple.']),
       ('Spoken tasking',
        ['Choose a long document you have read.',
         'Say in one sentence what the writer wanted.',
         'Your partner asks for the reasons, and how many there were.']),
       ('What is this document for?',
        ['In pairs, take two documents from your week.',
         'For each, say what it covers and what it is for.',
         'Find the one where those two answers are very different.'])],

ext_title='A summary of a document and a summary of what the document is for are not the same thing',
ext_fig=figs.datatable('SIXTY PAGES, AND WHAT A SUMMARY KEPT',
                       ['Section', 'Pages', 'In the summary?'],
                       [['trade and investment', '14', 'yes'],
                        ['consular work', '11', 'yes'],
                        ['the cultural centre', '9', 'yes'],
                        ['the border', '16', 'yes'],
                        ['political background', '9', 'yes, in part'],
                        ['the recommendation', '1', 'no']]),
ext_fig_cap='Five sections of fifty-nine pages survived. The one page that was the purpose did not.',
ext=[
 'Summarising is the capability most ministries adopt first after translation, and the '
 'arithmetic behind it is unarguable. A post sends sixty pages; four people read it; forty '
 'need to know what is in it. A summarising step turns the sixty pages into one, accurately, '
 'in about a minute, and the page is usually better organised than a tired officer would '
 'manage.',
 'What such a step does is proportionate. It reads the whole document and gives each part '
 'weight according to how much of the document that part occupies. Fourteen pages on trade '
 'become three lines; sixteen pages on the border become three lines; and one paragraph '
 'becomes nothing, because one paragraph in sixty pages is a rounding error.',
 'Official documents are not written proportionately. A report from a post is usually an '
 'argument with a single request at the end of it, and the length is there to make the '
 'request credible rather than to indicate its importance. The request may be one paragraph '
 'in sixty pages precisely because it is difficult, and difficult requests are made with a '
 'great deal of context in front of them.',
 'The remedy is to ask a different question. Do not ask what is in this document; ask what '
 'the writer wants, and require the summary to answer that in its first line, with the '
 'reasons the writer gave and in the number they gave them. Everything else in the summary '
 'then takes its place underneath.',
 'There is a second-order point that experienced officers raise. A request separated from its '
 'context can read more sharply than it was meant, and a summary that gives the ask without '
 'the reasoning may make a cautious Ambassador sound demanding. Carrying the reasons is '
 'therefore not a courtesy to the writer; it is part of reporting accurately what was said.'],
dp1=('Summarisation in diplomatic reporting',
     'Foreign ministries report summarisation of incoming reporting among the earliest '
     'capabilities adopted, with review retained because generated summaries weight material '
     'by length rather than by significance.',
     'Source: reported practice in several foreign ministries, 2025–2026.'),
e_a=[('Why is summarising adopted early?', 'because four read a sixty-page report and forty need to know it'),
     ('How does a summarising step give weight?', 'in proportion to how much of the document each part occupies'),
     ('Why are official documents not proportionate?', 'because length makes a request credible rather than marking its importance'),
     ('What question should be asked instead?', 'what the writer wants, answered in the first line'),
     ('Why must the reasons be carried?', 'because an ask without its reasoning can read more sharply than intended')],
e_b=[('A summarising step reads only the opening of a document.', 'F'),
     ('A one-paragraph request is proportionately significant.', 'F'),
     ('Length in a post report indicates importance.', 'F'),
     ('The summary should answer what the writer wants first.', 'T'),
     ('The number of reasons given is part of what was said.', 'T'),
     ('Carrying the reasons is only a courtesy.', 'F')],

w_model=(
 'Purpose: summarise the Astrene annual review so that the Director can act on what the '
 'Ambassador has asked for. Scope: the review of 14 November and its 3 annexes; earlier '
 'reviews are out of scope. Inputs: the review itself and the covering note. Criteria: line 1 '
 'states what the Ambassador recommends, in his own terms; lines 2 to 4 give the reasons he '
 'gives, in the number he gives them; the remainder covers the 5 subject sections in 1 '
 'sentence each; the present perfect is used for matters still open and the past simple for '
 'dated events. Done: 1 page of no more than 12 lines, by 20 November. Fallback: where the '
 'review contains no recommendation, say in line 1 that it contains none, rather than '
 'promoting the most emphatic passage.'),
w_fig=figs.spec_card('THE TASKING FOR A SUMMARY',
                     [('Purpose', 'summarise so the Director can act on what was asked for'),
                      ('Scope', 'the review of 14 November and 3 annexes'),
                      ('Inputs', 'the review and the covering note'),
                      ('Criteria', 'line 1 is the ask; lines 2–4 are the reasons, in number'),
                      ('Done', '1 page of 12 lines or fewer, by 20 November'),
                      ('Fallback', 'no recommendation: say so, do not promote a passage')]),
w_fig_cap='The first line is reserved before anybody starts reading.',
w_task='Write a tasking for a summary of a long document in your own work.',
w_steps=['Say what the summary is for and who acts on it.',
         'Name the document and what is out of scope.',
         'Reserve the first line for what the writer wants.',
         'Require the reasons in the number the writer gave.',
         'Say what to do where the document asks for nothing.'],
w_bank=['Summarise … so that … can act on …',
        'Cover … ; … is out of scope.',
        'Work from … and …',
        'Line 1 states … ; lines … give … in the number … ; the remainder covers …',
        'Where … contains no recommendation, … rather than …'],
w_check=['Is the first line reserved for the ask?',
         'Must the reasons match the number given?',
         'Is the length a number of lines?',
         'Is promoting an emphatic passage forbidden?'],

t_title='Summarising a long report without losing the point',
t_fig=figs.split('TWO QUESTIONS, TWO SUMMARIES',
                 'What is in this document?',
                 ['trade: three lines',
                  'consular: three lines',
                  'the border: three lines',
                  'the recommendation: nothing'],
                 'What is this document for?',
                 ['he wants a consular agreement',
                  'for three stated reasons',
                  'before the end of the year',
                  'the rest is the case for it']),
t_fig_cap='The same sixty pages. The right-hand column is what the Ambassador wrote them for.',
t_body=[
 'Use summarising freely, because the arithmetic is overwhelming: four officers read the '
 'sixty pages and forty need to know what is in them. The page that comes back will be '
 'accurate and better ordered than a late-evening draft of your own, and the time saved is '
 'measured in hours a week rather than minutes.',
 'Then notice what a summary weights by. It gives space in proportion to space, so fourteen '
 'pages on trade get more room than one paragraph of recommendation. Official documents are '
 'not written in that proportion at all: a post report is an argument with a request at the '
 'end, and the length exists to make the request credible.',
 'So change the question you ask. Do not ask what is in this document; ask what the writer '
 'wants, and reserve the first line of every summary for the answer, with the reasons they '
 'gave and in the number they gave them. Where there is no request, say that there is none, '
 'rather than letting the most emphatic passage stand in for one.'],
t_say=[('Reserve the line: ', 'Line one says what the writer wants.'),
       ('Keep the number: ', 'Three reasons, because he gave three.'),
       ('Say when there is none: ', 'This review makes no recommendation.')],
t_bound=('A summary tells you what a document says, weighted by how much of the document '
         'says it. It cannot tell you which paragraph the writer cared about, it cannot see '
         'the argument the length is making, and a request separated from its reasoning will '
         'read more sharply than it was written.'),
t_a=[('Line one says what the writer ____________.', 'wants'),
     ('Three reasons, because he ____________ three.', 'gave'),
     ('This review makes no ____________.', 'recommendation'),
     ('It gives space in proportion to ____________.', 'space'),
     ('The length exists to make the request ____________.', 'credible'),
     ('A request separated from its reasoning will read more ____________.', 'sharply')],
t_b_rubric='Rewrite each summary opening so that it answers what the document is for.',
t_b=[('The review covers trade, consular work and the border.', 'the Ambassador recommends proposing a consular agreement this year'),
     ('The report sets out the position in detail.', 'the post asks for two additional consular staff, for three reasons'),
     ('The note describes recent developments.', 'the post recommends no change, and gives two reasons for waiting'),
     ('The paper is a thorough analysis.', 'the paper asks for nothing; it was sent for information')],

case=dict(
 title='The Decision Room · The agreement that was proposed late',
 brief=[
  'The Astrene recommendation was found three weeks after the summary went round, when the '
  'Ambassador telephoned to ask whether the Ministry had taken a view.',
  'The consular agreement was proposed to Verenia in February rather than December. Verenia '
  'had in the meantime begun a similar negotiation with Oristan, and the Ministry’s proposal '
  'now waits behind it.',
  'Nobody can say whether December would have changed the outcome. Dr Mourad has asked what '
  'the Ministry should do about the forty other summaries produced in the same period.'],
 exhibit=figs.datatable('THE THREE WEEKS',
                        ['', 'Figure', 'Note'],
                        [['summary circulated', '21 November', '12 lines'],
                         ['recommendation found', '12 December', 'by telephone'],
                         ['proposal made', 'February', '2 months late'],
                         ['Verenia–Oristan talks began', 'January', '—'],
                         ['other summaries in the period', '40', 'same method'],
                         ['of those, rechecked', '0', 'at the time']]),
 exhibit_cap='Forty other summaries were produced the same way, and nobody has looked at them.',
 exhibit_note='Whether a December proposal would have preceded the Oristan talks is not known '
              'and cannot now be established.',
 voices=[('Dr Hana Mourad', 'Policy Planning',
          'Recheck all forty against their originals. It is a week of somebody’s time and we '
          'have just learned that the method drops recommendations.'),
         ('Nadia Barakat', 'Multilateral Affairs, Geneva',
          'Recheck the ones from posts, which is about nine. The rest are circulars and '
          'organisational papers that genuinely ask for nothing. A week spent on forty is '
          'four days spent on documents with no ask in them.'),
         ('Lina Khalil', 'desk officer, Bilateral Affairs',
          'I produced thirty-one of the forty. I would rather check all of them than find out '
          'in March which one I should have checked.')],
 steps=[('Find it', 'What happened between November and February?'),
        ('Compare it', 'How many summaries used the same method?'),
        ('Infer it', 'Why does Nadia narrow the set?'),
        ('Weigh it', 'A week of time against the chance of a second buried ask.'),
        ('Decide', 'What is rechecked?')],
 analysis=[('Find it. How late was the proposal?', 'two months'),
           ('Compare it. How many other summaries used the method?', 'forty'),
           ('Infer it. What is Nadia’s distinction?', 'between post reports, which carry asks, and circulars, which do not'),
           ('Weigh it. What is Lina’s argument?', 'that she would rather check all than discover in March which one mattered'),
           ('Decide. What would you recheck?', 'answers vary; the nine post reports are where asks live')],
 decision='Write what the Ministry rechecks and what changes.',
 decision_steps=['Say which summaries are rechecked, and by when.',
                 'Say what is checked in each one.',
                 'Say what the standing rule for summaries becomes.',
                 'Say what is said to the post in Astrene.'],
 bank=['The … summaries are rechecked by …',
       'In each, … is checked against …',
       'From now on every summary …',
       'The post is told that …',
       'This is reviewed …'],
 outcome='The nine post reports were rechecked within a week and two more contained '
         'recommendations that had not reached the summary, one of them about staffing in '
         'Oristan that had been outstanding for four months. The remaining thirty-one were '
         'rechecked over the following month and contained none. Nadia, whose narrower '
         'proposal was adopted first, notes that the thirty-one took four weeks and found '
         'nothing, which is what she predicted, and that she would still have checked them if '
         'the decision had been hers to take twice.',
 outcome_q=[('What did the nine post reports contain?', 'two further recommendations that had not reached a summary'),
            ('What did the thirty-one contain?', 'nothing, as Nadia had predicted')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Give me a page on the Astrene review',
 task=['This is the tasking Dr Mourad gave Lina in the corridor, on the morning the review '
       'arrived from the post.',
       'It is the ordinary way a summary is asked for, and it asks the question that loses '
       'recommendations.'],
 draft=['Give me a page on the Astrene review.',
        'Cover the main areas.',
        'Keep the important points.',
        'Make it readable for the department.',
        'Leave out the detail.',
        'By the end of the week.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines about coverage, and nothing about purpose.',
 asked=['Line 1: what the Ambassador wants',
        'The reasons, in the number given',
        'One sentence per subject section'],
 back=['An accurate 12-line page',
       'All 5 subject areas covered',
       'The recommendation absent'],
 gap='"A page on the review" asks what is in it, "the main areas" names no set, "the '
     'important points" supplies no test of importance, and "leave out the detail" is exactly '
     'the instruction that removes a one-paragraph recommendation.',
 back_cap='Everything covered, nothing wrong, and the purpose of sixty pages missing.',
 back_note='A recommendation of one paragraph is, to any proportionate method, detail. The '
           'tasking told the drafter to leave out detail.',
 diagnosis=[('[1] "a page on the review" — of what is in it, or of what it asks?', 'undefined done'),
            ('[2] "the main areas" — which areas, from what list?', 'unscoped set'),
            ('[3] "the important points" — important by what test?', 'unstated criterion'),
            ('[4] "readable for the department" — at what length?', 'undefined done'),
            ('[5] "leave out the detail" — including a one-paragraph recommendation?', 'unstated criterion'),
            ('[6] "by the end of the week" — which documents are included by then?', 'unscoped set')],
 rewrite='Rewrite the tasking so that the first line of the summary is reserved for what the '
         'writer wants.',
 scaffold=['What the summary is for, and who acts on it',
           'Which document and annexes are covered',
           'What the summary is built from',
           'What line 1 carries, how the reasons are treated, and what the rest covers',
           'How long the summary is, and when it is due',
           'What to do where the document asks for nothing'],
 bank=['Summarise … so that … can act on …',
       'Cover … and its … ; … is out of scope.',
       'Work from … and …',
       'Line 1 states … in his own terms; lines … give … in the number … ; the remainder covers … in 1 sentence each.',
       'Return 1 page of no more than … lines, by …',
       'Where the review contains no recommendation, … rather than …'],
 check=['Is line 1 reserved for the ask?',
        'Must the number of reasons match the original?',
        'Is the length given in lines?',
        'Is there a rule for a document with no ask?'],
 model=['Summarise the Astrene annual review so that the Director can act on what the Ambassador has asked for',
        'The review of 14 November and its 3 annexes; earlier reviews are out of scope',
        'The review itself and the covering note',
        'Line 1 states what the Ambassador recommends, in his own terms; lines 2 to 4 give the reasons he gives, in the number he gives them; the remainder covers the 5 subject sections in 1 sentence each',
        '1 page of no more than 12 lines, by 20 November',
        'Where the review contains no recommendation, say in line 1 that it contains none, rather than promoting the most emphatic passage'],
 cost='1 recommendation lost for 3 weeks, a proposal made 2 months late, and 40 summaries '
      'produced by the same method before anybody rechecked one.'),

rev_fig=figs.split('PRESENT PERFECT AND PAST SIMPLE',
                   'Wrong',
                   ['The matter is open since 2021.',
                    'We have replied on Tuesday.',
                    'The post has sent it in March.',
                    'We did not reply yet.'],
                   'Right',
                   ['The matter has been open since 2021.',
                    'We replied on Tuesday.',
                    'The post sent it in March.',
                    'We have not replied yet.']),
rev_fig_cap='A stated time pulls the past simple; an open state pulls the present perfect.',
rev=dict(
 read=[('A summarising step weights material by', ['importance', 'how much space it occupies', 'position', 'author'], 1),
       ('A post report is usually', ['a survey', 'an argument with a request at the end', 'a chronicle', 'a list'], 1),
       ('The first line of a summary should carry', ['the date', 'what the writer wants', 'the subject', 'the length'], 1),
       ('In the Decision Room, how many further recommendations were found in the nine post reports?', ['none', 'two', 'nine', 'forty'], 1)],
 listen_text='Use summarising freely, because four officers read the sixty pages and forty '
             'need to know what is in them. Then notice what a summary weights by: it gives '
             'space in proportion to space. Official documents are not written in that '
             'proportion at all, so change the question and reserve the first line for what '
             'the writer wants.',
 listen=[('Four officers read the sixty ____________.', 'pages'),
         ('It gives space in proportion to ____________.', 'space'),
         ('Official documents are not written in that ____________.', 'proportion'),
         ('Reserve the first line for what the writer ____________.', 'wants')],
 speak=['Take a long document you know and say in one sentence what the writer wanted.',
        'Say how many reasons they gave.'],
 write='Write the first line of a summary, stating what the writer wants.',
 vocab=[('The opening page for somebody who will read no further is an ____________.', 'executive summary'),
        ('The essential sense, without the detail, is the ____________.', 'gist'),
        ('Standing out as important among other things is ____________.', 'salient'),
        ('To shorten a text by leaving parts out is to ____________ it.', 'abridge'),
        ('Material attached at the end is an ____________.', 'annex')],
 gram=[('The matter ____________ (be) open since 2021.', 'has been'),
       ('We ____________ (reply) on Tuesday.', 'replied'),
       ('The post ____________ (send) the review in March.', 'sent'),
       ('We ____________ (not/reply) yet.', 'have not replied'),
       ('Nothing ____________ (change) since the last review.', 'has changed')]),

found=['Find the recommendation in the longest document on your desk.',
       'Count how many reasons the writer gave for it.',
       'Write the first line of a summary that carries both.',
       'Ask of your last summary what the document was for.'],
end_line='Nobody asked what this document is for.',
end_next='Next: A Week of Press in Four Languages',
)
