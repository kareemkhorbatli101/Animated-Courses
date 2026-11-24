# -*- coding: utf-8 -*-
import figs

U = dict(
num=9, title='A Telegram on One Page',
gram='linking cause and effect',
ai='turning a reporting telegram into a one-page summary',
strap='CEFR B1 · Grammar: linking cause and effect · AI: a telegram on one page',
cando=['link cause and effect with because, since, as, so and therefore',
       'use as a result, consequently and which meant that correctly',
       'say what a one-page summary of a telegram must keep',
       'protect the comment paragraph from being summarised away',
       'task a summary so that the judgement survives the compression'],
hero=('FOUR THOUSAND WORDS, ONE PAGE',
      ['Paragraph 19 was the ambassador’s judgement.',
       'It is the paragraph a summary drops first, because it is the shortest.'],
      [(730, 'orange', 'long'), (1390, 'blue', 'short'),
       (2050, 'teal', 'long'), (2690, 'purple', 'short')]),
hero_cap='Telegram 214 from Astrene, as received and as read.',

warm=['Who reads the long version of a document in your office, and who reads the short one?',
      'What is usually in the last paragraph of a long report?',
      'What would you want kept if your four pages had to become one?'],
read=[
 'Ambassador Faris Said sends between two and five reporting telegrams a week from Astrene. '
 'A long one runs to four thousand words: what was said, by whom, in what order, with the '
 'texts of what was handed over.',
 'Almost nobody in the Ministry reads four thousand words. Six or seven officers need the '
 'detail; forty need to know what happened; and the Director needs one page before an eleven '
 'o’clock meeting.',
 'Since March a summary step has produced that page. It takes the telegram and returns a '
 'one-page version with the paragraph numbers kept, so that any reader who wants the detail '
 'can go straight to it.',
 'In May it summarised telegram 214, which ran to nineteen paragraphs. Paragraphs 1 to 18 '
 'reported a difficult conversation about port access. Paragraph 19 was four lines long and '
 'said that in the Ambassador’s judgement Astrene would move within six weeks if the '
 'Ministry said nothing at all.',
 'The summary covered paragraphs 1 to 18 well and did not mention paragraph 19, because '
 'paragraph 19 was the shortest paragraph in the telegram and contained no names, no figures '
 'and no quotations. As a result the Director read a page about a difficult conversation and '
 'not the sentence that told her what to do, which was nothing.'],
c_a=[('How many telegrams does the Ambassador send a week?', 'between two and five'),
     ('How long is a long one?', 'about four thousand words'),
     ('Who needs one page?', 'the Director, before an eleven o’clock meeting'),
     ('What does the summary keep?', 'the paragraph numbers'),
     ('What did paragraph 19 say?', 'that Astrene would move within six weeks if the Ministry said nothing'),
     ('Why was it dropped?', 'it was the shortest paragraph, with no names, figures or quotations')],
c_b=[('Forty officers need the full detail.', 'F'),
     ('The summary step has run since March.', 'T'),
     ('Telegram 214 had nineteen paragraphs.', 'T'),
     ('Paragraph 19 contained figures.', 'F'),
     ('The Director read the Ambassador’s judgement.', 'F'),
     ('The advice was to say nothing.', 'T')],
c_c=[('Six or seven officers need the ____________.', 'detail'),
     ('The paragraph numbers are ____________.', 'kept'),
     ('Paragraph 19 was four ____________ long.', 'lines'),
     ('Astrene would move within six ____________.', 'weeks'),
     ('As a result the Director read a page about a difficult ____________.', 'conversation'),
     ('The sentence that told her what to do, which was ____________.', 'nothing')],
c_d=[('Paragraph 19 was dropped because it was ( unimportant / short and plain ).', ['unimportant', 'short and plain'], 1),
     ('How long was paragraph 19?', ['four pages', 'four lines', 'four words', 'nineteen lines'], 1),
     ('What did the Ambassador advise?', ['a protest', 'saying nothing', 'a visit', 'a letter'], 1),
     ('Why are paragraph numbers kept?', ['tradition', 'so a reader can go to the detail', 'to count words', 'for the archive'], 1),
     ('Who needed the detail?', ['nobody', 'six or seven officers', 'forty officers', 'the Director'], 1)],
c_e=('Cause or effect? Put each marker in the right column.',
     [('because', 'introduces a cause'), ('since', 'introduces a cause'),
      ('so', 'introduces an effect'), ('therefore', 'introduces an effect'),
      ('as', 'introduces a cause'), ('as a result', 'introduces an effect')],
     ['introduces a cause', 'introduces an effect']),

v_fig_title='THE PARTS OF A TELEGRAM',
v_fig=[('envelope', 'a reporting telegram'), ('clock', 'a dateline'), ('shield', 'a classification line'),
       ('bulb', 'a comment paragraph'), ('doc', 'a lead paragraph'), ('pin', 'a key judgement')],
v_fig_cap='Six words for the parts, one of which carries the whole point.',
vocab=[
 ('a reporting telegram', 'a despatch from a mission reporting what occurred'),
 ('a despatch', 'a formal written report sent from a mission'),
 ('a cable', 'another word for a telegram, from when it travelled by wire'),
 ('a dateline', 'the line giving the place and date of sending'),
 ('a classification line', 'the line stating how far a document may go'),
 ('a comment paragraph', 'the paragraph in which the sender gives a view'),
 ('an assessment', 'a statement of what the facts are judged to mean'),
 ('a lead paragraph', 'the opening paragraph, carrying the main point'),
 ('a subhead', 'a small heading inside a document'),
 ('a precis', 'a short version keeping the substance'),
 ('a cover note', 'a short note sent on top of a longer document'),
 ('a key judgement', 'the single most important conclusion offered'),
 ('a bottom line', 'what the reader is to take away above all'),
 ('a paragraph number', 'the number by which a paragraph can be cited'),
 ('to compress', 'to make shorter without removing what matters'),
 ('a word count', 'the number of words a document contains'),
 ('a reading time', 'how long a document takes an ordinary reader'),
 ('a one-pager', 'a document deliberately held to a single page'),
 ('a running order', 'the sequence in which items are presented'),
 ('a sign-off block', 'the lines naming who sent a document and from where')],
v_a=[('The paragraph in which the sender gives a view is a ____________.', 'comment paragraph'),
     ('The line stating how far a document may go is a ____________.', 'classification line'),
     ('The single most important conclusion offered is a ____________.', 'key judgement'),
     ('A short version keeping the substance is a ____________.', 'precis'),
     ('The number by which a paragraph can be cited is a ____________.', 'paragraph number'),
     ('The sequence in which items are presented is a ____________.', 'running order'),
     ('The lines naming who sent a document are a ____________.', 'sign-off block'),
     ('The line giving the place and date of sending is a ____________.', 'dateline')],
v_b=[('A reporting telegram is a despatch', 'from a mission reporting what occurred.'),
     ('An assessment is a statement of what', 'the facts are judged to mean.'),
     ('To compress is to make shorter', 'without removing what matters.'),
     ('A reading time is how long a document', 'takes an ordinary reader.'),
     ('A one-pager is a document deliberately held', 'to a single page.')],

g_title='Grammar: linking cause and effect',
g_rule=['Because, since and as introduce the cause: it was dropped because it was short.',
        'So, therefore and as a result introduce the effect.',
        'Which meant that attaches an effect to the whole clause before it.',
        'Due to and owing to take a noun, not a clause: due to the length, not due to it was long.'],
g_fig=('LOOSE',
       ['Paragraph 19 was short. It was dropped.',
        'The Director read one page. She did not see the advice.',
        'Due to it was plain, it was lost.',
        'The summary was good, the judgement was gone.'],
       'PRECISE',
       ['Paragraph 19 was dropped because it was short.',
        'The Director read one page, so she did not see the advice.',
        'Owing to its plainness, the paragraph was lost.',
        'The summary was good; the judgement, however, was gone.'],
       'two unlinked pairs and one wrong preposition',
       'four sentences in which the link is stated'),
g_fig_cap='A reader should not have to guess which sentence caused the other.',
g_a=[('Paragraph 19 was dropped ____________ it was the shortest.', 'because'),
     ('____________ nobody reads four thousand words, a summary is made.', 'Since'),
     ('The Director read one page, ____________ she missed the advice.', 'so'),
     ('The judgement was plain; ____________ it looked unimportant.', 'therefore'),
     ('____________ its plainness, the paragraph was lost.', 'Owing to'),
     ('Numbers are kept, ____________ meant that readers could find the detail.', 'which'),
     ('____________ a result, Astrene moved before the Ministry replied.', 'As'),
     ('The telegram was long, ____________ the Director had eleven minutes.', 'but'),
     ('____________ the length of the telegram, a one-pager is produced.', 'Due to')],
g_b=[('Because introduces the ( cause / effect ).', ['cause', 'effect'], 0),
     ('Paragraph 19 was dropped ____ it was short.', ['so', 'because', 'therefore', 'as a result'], 1),
     ('She read one page, ____ she missed the advice.', ['because', 'so', 'since', 'owing to'], 1),
     ('Which takes a noun, not a clause?', ['because', 'due to', 'so', 'since'], 1),
     ('____ a result, Astrene moved first.', ['For', 'As', 'By', 'In'], 1),
     ('Which attaches an effect to the whole clause?', ['because of', 'which meant that', 'due to', 'since'], 1)],

d1=dict(title='Paragraph 19',
        fig=(['The summary is excellent.', 'It does not contain the advice.'],
             ['Which paragraph?', 'Nineteen. Four lines.']),
        cap='Ambassador Faris Said and Dr Hana Mourad, by telephone from Astrene.',
        lines=[('Faris', 'I have read the one-page version of my 214. It is accurate and well '
                         'made.'),
               ('Hana', 'The Director found it useful.'),
               ('Faris', 'It does not contain paragraph 19.'),
               ('Hana', 'Paragraph 19 is four lines.'),
               ('Faris', 'Paragraph 19 is the telegram. Paragraphs 1 to 18 are why I believe '
                         'paragraph 19. If you read only the eighteen you have the conversation '
                         'and not the advice.'),
               ('Hana', 'What was the advice?'),
               ('Faris', 'That Astrene will move within six weeks if we say nothing, and that '
                         'anything we say will slow them down.'),
               ('Hana', 'The Director has sent a letter.'),
               ('Faris', 'I know. I read the letter this morning. It is a good letter and it '
                         'will cost us five weeks.'),
               ('Hana', 'Why was it dropped? It is the most important thing in the document.'),
               ('Faris', 'Because it is short, it has no names in it, no figures and no '
                         'quotations, and every method of shortening a document keeps the parts '
                         'that have those.'),
               ('Hana', 'Then the comment paragraph has to be protected by a rule, since it '
                         'will always look like the least substantial part of a telegram.')],
        a=[('What does the Ambassador say about the summary?', 'that it is accurate and well made'),
           ('What is missing?', 'paragraph 19, his comment and advice'),
           ('What was the advice?', 'that Astrene would move within six weeks if the Ministry said nothing'),
           ('What has the Director done?', 'sent a letter, which the Ambassador says will cost five weeks'),
           ('Why was paragraph 19 dropped?', 'it is short and contains no names, figures or quotations')],
        b=[('Paragraphs 1 to 18 are why I believe paragraph ____________.', '19'),
           ('Anything we say will ____________ them down.', 'slow'),
           ('It is a good letter and it will cost us five ____________.', 'weeks'),
           ('The comment paragraph has to be protected by a ____________.', 'rule')]),
d2=dict(title='A page, and the paragraph it came from',
        fig=(['One page, numbers kept.', 'And the comment paragraph first.'],
             ['Even if it is four lines?', 'Especially if it is four lines.']),
        cap='Hana and Lina Khalil, writing the new rule.',
        lines=[('Hana', 'The rule is going to say that the comment paragraph is reproduced in '
                        'full, whatever its length, at the top of the page.'),
               ('Lina', 'In full? Some comment paragraphs run to a page themselves.'),
               ('Hana', 'Then the one-pager is a page of comment and a note that the reporting '
                        'is at paragraphs 1 to 18. That is the right failure.'),
               ('Lina', 'Because the Director would rather have the judgement and no detail '
                        'than the detail and no judgement.'),
               ('Hana', 'She has said so in those words.'),
               ('Lina', 'Then we should also say which paragraph is the comment, since not '
                        'every telegram marks it.'),
               ('Hana', 'That is the harder half. Missions mark it differently and some do not '
                        'mark it at all.'),
               ('Lina', 'So the rule has two parts: missions mark the comment paragraph as '
                        'Comment, and the summary reproduces whatever is so marked.'),
               ('Hana', 'And where nothing is marked?'),
               ('Lina', 'The summary says that no comment paragraph was marked. Which will '
                         'embarrass three missions into marking them.'),
               ('Hana', 'That is a better mechanism than an instruction. Put it in.'),
               ('Lina', 'I will. And I will send it to Astrene first, because the Ambassador is '
                         'the person who found this and he will want to see it before it goes '
                         'out.')],
        a=[('What does the rule say about the comment paragraph?', 'that it is reproduced in full, whatever its length, at the top'),
           ('What is the right failure?', 'a page of comment and a note that the reporting is at paragraphs 1 to 18'),
           ('What is the harder half?', 'identifying which paragraph is the comment, since missions mark it differently'),
           ('What happens where nothing is marked?', 'the summary says that no comment paragraph was marked'),
           ('Why send it to Astrene first?', 'because the Ambassador found the problem')],
        b=[('Reproduced in ____________, whatever its length.', 'full'),
           ('The Director would rather have the ____________ and no detail.', 'judgement'),
           ('Missions mark the comment paragraph as ____________.', 'Comment'),
           ('Which will ____________ three missions into marking them.', 'embarrass')]),

speak=[('Link it',
        ['Student A: say six pairs of facts from your work.',
         'Student B: join each pair with because, since, so, therefore or as a result.',
         'Find one pair where the link runs the other way.']),
       ('One page',
        ['Describe a long document you have had to shorten.',
         'Say what you kept and what you dropped.',
         'Your partner asks what a reader would have missed.']),
       ('Protect the judgement',
        ['In pairs, decide which part of a document in your work must never be cut.',
         'Write the rule in one sentence.',
         'Say what happens when it is not marked.'])],

ext_title='A summary keeps what looks substantial, and a judgement is the least substantial-looking thing in a telegram',
ext_fig=figs.datatable('TELEGRAM 214, BY PARAGRAPH',
                       ['Paragraphs', 'Content', 'In the one-pager?'],
                       [['1–3', 'who met whom, where, when', 'yes'],
                        ['4–9', 'the port access discussion', 'yes, compressed'],
                        ['10–14', 'figures on tonnage and fees', 'yes, with numbers'],
                        ['15–17', 'texts handed over, quoted', 'yes, quoted'],
                        ['18', 'the Astrene minister’s closing remark', 'yes'],
                        ['19', 'the Ambassador’s judgement and advice', 'no']]),
ext_fig_cap='Every paragraph with a name, a figure or a quotation survived. The one without them did not.',
ext=[
 'A mission’s reporting telegram is written for two readers at once. One needs the detail: '
 'who said what, in what order, with the texts attached. The other has eleven minutes before '
 'a meeting. For most of the history of the trade the second reader was served by whoever '
 'happened to be free to read the long version first.',
 'A summary step serves that reader properly, and several foreign services now use one. The '
 'telegram goes in; a one-page version comes out, with the paragraph numbers preserved so '
 'that a reader who wants paragraph 11 can go to paragraph 11. The compression is good, the '
 'facts survive, and the forty officers who need to know what happened now know within '
 'minutes rather than by the afternoon.',
 'The failure is specific and it is not random. Any method of shortening a document keeps '
 'what looks substantial: names, figures, quotations, the long paragraph with the texts in '
 'it. A comment paragraph has none of those. It is four lines of plain prose containing the '
 'only thing in the document that the Ministry cannot get anywhere else, which is the '
 'judgement of the person who was in the room.',
 'So it goes, and it goes silently, because the summary that results is a good summary of '
 'everything else. A Director reads an accurate page about a difficult conversation and sends '
 'a letter that the Ambassador had advised against in the paragraph she did not see.',
 'The repair is a rule rather than a better method. The comment paragraph is reproduced in '
 'full at the top of the one-pager, whatever its length, and where the telegram marks no '
 'comment paragraph the summary says so. That second half matters as much as the first, '
 'because it turns a silent loss into a visible gap, and a visible gap gets fixed by the '
 'mission that caused it.'],
dp1=('Summarising mission reporting',
     'Services that introduced automated summarising of mission reporting in 2025 required '
     'the sender’s comment or assessment to be carried in full, having found that '
     'compression systematically favoured factual over evaluative paragraphs.',
     'Source: reported practice in diplomatic reporting, 2025–2026.'),
e_a=[('Who are the two readers of a telegram?', 'one who needs the detail and one who has eleven minutes'),
     ('Why are paragraph numbers preserved?', 'so that a reader who wants paragraph 11 can go to it'),
     ('What does any shortening method keep?', 'names, figures, quotations and long paragraphs with texts'),
     ('Why is the comment paragraph lost?', 'it has none of those and is four lines of plain prose'),
     ('What is the repair?', 'reproducing the comment in full, and saying so where none is marked')],
e_b=[('The compression loses facts.', 'F'),
     ('The failure is random.', 'F'),
     ('A comment paragraph usually contains figures.', 'F'),
     ('The summary that results is a bad summary of the rest.', 'F'),
     ('A visible gap gets fixed by the mission.', 'T'),
     ('Paragraph numbers are dropped in the one-pager.', 'F')],

w_model=(
 'Purpose: produce a 1-page version of the reporting telegram so that an officer with 10 '
 'minutes knows what happened and what the mission advises. Scope: the 1 telegram named; '
 'earlier telegrams on the same subject are out of scope. Inputs: the telegram as received. '
 'Criteria: reproduce the paragraph marked Comment in full at the top, whatever its length; '
 'keep every paragraph number so that the detail can be found; carry every figure and date '
 'exactly; compress the reporting paragraphs to no more than 350 words; where no paragraph is '
 'marked Comment, state that none was marked. Done: 1 page, comment first, within 1 hour of '
 'receipt. Fallback: where the comment paragraph alone exceeds 1 page, send the comment in '
 'full and 1 line naming the paragraphs that hold the reporting.'),
w_fig=figs.spec_card('THE TASKING FOR A ONE-PAGER',
                     [('Purpose', 'what happened and what the mission advises, in 10 minutes'),
                      ('Scope', 'the 1 telegram named; earlier ones excluded'),
                      ('Inputs', 'the telegram as received'),
                      ('Criteria', 'Comment in full at the top; numbers kept; reporting to 350 words'),
                      ('Done', '1 page, comment first, within 1 hour'),
                      ('Fallback', 'comment over a page: send it in full and name the reporting paragraphs')]),
w_fig_cap='Whatever its length is the clause that saves the judgement.',
w_task='Write a tasking for a one-page version of a long document in your own work.',
w_steps=['Say who the one page is for and how long they have.',
         'Name the part that must survive in full.',
         'Require the numbering to be kept.',
         'Put a word limit on the compressible part.',
         'Say what happens when the protected part is not marked.'],
w_bank=['Produce a … version of … so that …',
        'Cover … ; … are out of scope.',
        'Work from …',
        'Reproduce … in full … , whatever … ; keep … ; carry … exactly; compress … to no more than … ; where … , state that …',
        'Where … exceeds … , send … and 1 line naming …'],
w_check=['Is the protected part named and its length waived?',
         'Is the numbering required?',
         'Is the compressible part capped by a number?',
         'Is an unmarked protected part reported as missing?'],

t_title='Turning a telegram into one page',
t_fig=figs.split('WHAT COMPRESSION KEEPS',
                 'Survives',
                 ['names and titles',
                  'figures and dates',
                  'quoted text',
                  'the long paragraph with the annexes'],
                 'Disappears',
                 ['a four-line judgement',
                  'plain prose with no numbers',
                  'an advice to do nothing',
                  'the part only the sender could write']),
t_fig_cap='The right-hand column is not less important. It is less countable.',
t_body=[
 'A telegram has two readers: one who needs paragraph 11 and one who has eleven minutes '
 'before a meeting. A summary step serves the second properly for the first time, and the '
 'paragraph numbers should be kept so that the first reader is not punished for it. The '
 'facts survive compression well, because facts have names, figures and quotation marks '
 'around them.',
 'The judgement does not survive, and the reason is worth stating exactly, since it is not a '
 'fault that a better method repairs. A comment paragraph is short, plain and unquantified. '
 'It looks like the least substantial part of the document and it is the only part the '
 'Ministry cannot obtain anywhere else. Therefore it goes first, silently, leaving a good '
 'summary of everything that mattered less.',
 'Fix it with a rule rather than with a tool. The paragraph marked Comment is reproduced in '
 'full at the top of the page, whatever its length, and where the telegram marks none the '
 'summary says that none was marked. The second half is what makes the first half work, '
 'because a mission that sees its own gap recorded will mark its comment paragraph next '
 'time.'],
t_say=[('Protect it: ', 'Reproduce the Comment paragraph in full, whatever its length.'),
       ('Keep the route: ', 'Keep every paragraph number so the detail can be found.'),
       ('Show the gap: ', 'Where no paragraph is marked Comment, state that none was marked.')],
t_bound=('Compression favours the countable. A four-line judgement with no names or figures '
         'will be dropped by any method that shortens well, and the resulting page will read '
         'as complete. Nothing in the method can be trusted to keep the one paragraph the '
         'Ministry cannot get elsewhere; only a rule can.'),
t_a=[('Reproduce the Comment paragraph in full, whatever its ____________.', 'length'),
     ('Keep every paragraph ____________ so the detail can be found.', 'number'),
     ('Where no paragraph is marked Comment, state that none was ____________.', 'marked'),
     ('Facts survive compression because they have names, figures and ____________ marks.', 'quotation'),
     ('It looks like the least ____________ part of the document.', 'substantial'),
     ('Compression favours the ____________.', 'countable')],
t_b_rubric='Join each pair so that the cause and the effect are stated.',
t_b=[('Paragraph 19 was short. It was dropped.', 'paragraph 19 was dropped because it was short'),
     ('The Director read one page. She missed the advice.', 'the Director read one page, so she missed the advice'),
     ('The numbers were kept. Readers could find the detail.', 'the numbers were kept, which meant that readers could find the detail'),
     ('No comment was marked. The summary said so.', 'since no comment was marked, the summary said so')],

case=dict(
 title='The Decision Room · A page of comment and nothing else',
 brief=[
  'The new rule reproduces the Comment paragraph in full at the top of every one-pager. It '
  'has worked: no judgement has been lost since June.',
  'Three missions have now begun writing comment paragraphs of a page and a half, which means '
  'the one-pager is a page of comment and a line saying where the reporting is.',
  'Tarek Zayed says the rule is being gamed and wants a cap on the comment. Faris Said says a '
  'cap will teach ambassadors to write judgements that fit rather than judgements that are '
  'true. Hana Mourad has the figures.'],
 exhibit=figs.datatable('ONE-PAGERS, JUNE TO NOVEMBER',
                        ['', 'Figure', 'Note'],
                        [['one-pagers produced', '690', '—'],
                         ['judgements lost', '0', 'was 1 in 9 before June'],
                         ['comment paragraphs over 400 words', '41', 'from 3 missions'],
                         ['of those, one-pagers with no reporting', '41', '—'],
                         ['readers asking for the full telegram after', '9', 'of the 41'],
                         ['average comment length, other 12 missions', '95 words', '—']]),
 exhibit_cap='Forty-one of six hundred and ninety, from three missions out of fifteen.',
 exhibit_note='Of the 41, 9 led a reader to call for the full telegram, which the Director '
              'describes as the system working rather than failing.',
 voices=[('Tarek Zayed', 'Protocol',
          'Cap the comment at 200 words. Three missions have found the loophole and the others '
          'will follow, because a page of your own prose at the top of the Director’s reading '
          'is worth having.'),
         ('Ambassador Faris Said', 'Head of Mission, Astrene',
          'Cap it and you will get judgements written to a word count. Mine was four lines '
          'because four lines was the truth; somebody else’s is a page because theirs is '
          'complicated.'),
         ('Dr Hana Mourad', 'Policy Planning',
          'Forty-one of six hundred and ninety, and nine of those made a reader open the full '
          'telegram. I am not sure that is a problem. I am sure a cap would be.')],
 steps=[('Find it', 'How many judgements have been lost since June?'),
        ('Compare it', 'What are the two proposals?'),
        ('Infer it', 'Why does Faris object to a word count?'),
        ('Weigh it', 'A gamed rule against judgements written to fit.'),
        ('Decide', 'Cap the comment, or leave it and publish the lengths?')],
 analysis=[('Find it. How many comment paragraphs exceeded 400 words?', 'forty-one, from three missions'),
           ('Compare it. What does Tarek propose?', 'a cap of 200 words on the comment'),
           ('Infer it. What does Faris fear?', 'judgements written to a word count rather than to the truth'),
           ('Weigh it. What happened in nine of the forty-one cases?', 'a reader called for the full telegram'),
           ('Decide. What would you do?', 'answers vary; publishing comment lengths by mission tests the gaming claim without a cap')],
 decision='Write the rule on the length of the comment paragraph.',
 decision_steps=['Say whether there is a cap, and what it is.',
                 'Say what the one-pager does when the comment fills the page.',
                 'Say what is published about comment lengths.',
                 'Say when the question is looked at again.'],
 bank=['The comment paragraph is …',
       'Where the comment fills the page, the one-pager …',
       'Comment lengths by mission are published …',
       'A cap is introduced only if …',
       'This is reviewed …'],
 outcome='No cap was introduced. Comment lengths by mission were published every quarter, and '
         'within two quarters the three missions had come down to an average of 180 words '
         'without being told to, while the twelve others did not change. Tarek, who had asked '
         'for a cap, says publishing the lengths did what a cap would have done and left the '
         'four-line judgements alone, and that he had been treating a reporting habit as a '
         'rule problem.',
 outcome_q=[('What was done instead of a cap?', 'comment lengths by mission were published quarterly'),
            ('What does Tarek say he got wrong?', 'that he had treated a reporting habit as a rule problem')],
 tags=[]),

lab=dict(
 title='Brief Lab · Shorten the telegram',
 task=['This is the tasking the summary step worked to from March to June, before the comment '
       'rule was written.',
       'It produced one-pagers that were accurate, useful and in seventy-six cases missing the '
       'advice.'],
 draft=['Summarise the telegram.',
        'Keep the important parts.',
        'Make it short.',
        'Keep the numbers.',
        'Mention the main points.',
        'Quickly after it arrives.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and nothing in them tells a method that four plain lines outrank two '
           'pages of figures.',
 asked=['The comment paragraph in full',
        'Paragraph numbers preserved',
        'A word limit on the reporting'],
 back=['Accurate summaries of paragraphs 1 to 18',
       'No comment paragraph in 76 of 690',
       'Lengths from 180 to 900 words'],
 gap='"The important parts" does not say which, "short" sets no number, "the numbers" could '
     'mean figures or paragraph numbers, and "quickly" fixes nothing a reader can rely on.',
 back_cap='Seventy-six pages about difficult conversations, and no advice on any of them.',
 back_note='Line two is the failure. Importance was left to the method, and the method rates '
           'a figure above a judgement.',
 diagnosis=[('[1] "summarise the telegram" — to what length, for which reader?', 'undefined done'),
            ('[2] "keep the important parts" — important by what test?', 'unstated criterion'),
            ('[3] "make it short" — how short?', 'unbounded quantity'),
            ('[4] "keep the numbers" — figures, or paragraph numbers?', 'unstated criterion'),
            ('[5] "mention the main points" — how many, and chosen how?', 'unbounded quantity'),
            ('[6] "quickly after it arrives" — ready when, and for whom?', 'undefined done')],
 rewrite='Rewrite the tasking so that the comment paragraph cannot be dropped.',
 scaffold=['Who the page is for and how long they have',
           'Which telegram, and what is excluded',
           'The telegram as received',
           'Comment in full at the top; numbers kept; figures exact; reporting capped; unmarked comment reported',
           'One page, comment first, and by when',
           'What to do where the comment alone fills the page'],
 bank=['Produce a … version of … so that …',
       'Cover … ; … are out of scope.',
       'Work from …',
       'Reproduce … in full at the top, whatever … ; keep … ; carry … ; compress … to no more than … ; where … , state …',
       'Return 1 page, … first, within …',
       'Where … exceeds … , send … and 1 line naming …'],
 check=['Is the comment paragraph protected by name?',
        'Is its length explicitly waived?',
        'Is the reporting capped by a number?',
        'Is an unmarked comment reported as such?'],
 model=['Produce a 1-page version of the reporting telegram so that an officer with 10 minutes knows what happened and what the mission advises',
        'The 1 telegram named; earlier telegrams on the same subject are out of scope',
        'The telegram as received',
        'Reproduce the paragraph marked Comment in full at the top, whatever its length; keep every paragraph number so that the detail can be found; carry every figure and date exactly; compress the reporting paragraphs to no more than 350 words; where no paragraph is marked Comment, state that none was marked',
        '1 page, comment first, within 1 hour of receipt',
        'Where the comment paragraph alone exceeds 1 page, send the comment in full and 1 line naming the paragraphs that hold the reporting'],
 cost='76 one-pagers with no advice in them, and 1 letter sent to Astrene against the '
      'Ambassador’s judgement, costing 5 weeks.'),

rev_fig=figs.split('CAUSE AND EFFECT',
                   'Unlinked',
                   ['Paragraph 19 was short. It was dropped.',
                    'She read one page. She missed the advice.',
                    'Due to it was plain, it was lost.',
                    'The summary was good, the judgement was gone.'],
                   'Linked',
                   ['It was dropped because it was short.',
                    'She read one page, so she missed the advice.',
                    'Owing to its plainness, it was lost.',
                    'The summary was good; the judgement, however, was gone.']),
rev_fig_cap='Because, since, as; so, therefore, as a result; owing to and due to take nouns.',
rev=dict(
 read=[('Paragraph 19 contained', ['figures', 'the Ambassador’s judgement', 'quoted text', 'a distribution list'], 1),
       ('Compression favours', ['judgements', 'the countable', 'short paragraphs', 'plain prose'], 1),
       ('The repair for the lost judgement is', ['a better method', 'a rule', 'a longer page', 'more readers'], 1),
       ('In the Decision Room, what was done instead of a cap?', ['nothing', 'lengths were published', 'a new template', 'a word limit'], 1)],
 listen_text='A comment paragraph is short, plain and unquantified. It looks like the least '
             'substantial part of the document and it is the only part the Ministry cannot '
             'obtain anywhere else. Therefore it goes first, silently, leaving a good summary '
             'of everything that mattered less.',
 listen=[('Short, plain and ____________.', 'unquantified'),
         ('The least ____________ part of the document.', 'substantial'),
         ('The Ministry cannot ____________ it anywhere else.', 'obtain'),
         ('A good summary of everything that mattered ____________.', 'less')],
 speak=['Explain a decision in your work using because and as a result.',
        'Say which part of a long document in your office must never be cut.'],
 write='Write one line protecting a paragraph from compression.',
 vocab=[('The paragraph in which the sender gives a view is a ____________.', 'comment paragraph'),
        ('The single most important conclusion offered is a ____________.', 'key judgement'),
        ('A short version keeping the substance is a ____________.', 'precis'),
        ('The sequence in which items are presented is a ____________.', 'running order'),
        ('The line stating how far a document may go is a ____________.', 'classification line')],
 gram=[('Paragraph 19 was dropped ____________ it was the shortest.', 'because'),
       ('____________ nobody reads four thousand words, a summary is made.', 'Since'),
       ('The Director read one page, ____________ she missed the advice.', 'so'),
       ('____________ its plainness, the paragraph was lost.', 'Owing to'),
       ('____________ a result, Astrene moved before the Ministry replied.', 'As')]),

found=['Find the comment paragraph in a report you received this week.',
       'Shorten a long document of your own to one page and say what you dropped.',
       'Write the rule for what may never be cut from your office’s reporting.',
       'Join three pairs of facts from your work with a stated cause.'],
end_line='Compression keeps what can be counted, and a judgement cannot.',
end_next='Next: What a Summary Loses',
)
