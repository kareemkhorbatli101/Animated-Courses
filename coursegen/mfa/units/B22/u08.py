# -*- coding: utf-8 -*-
import figs

U = dict(
num=8, title='The Exact Word',
gram='cleft sentences in argument',
ai='treaty text, reservations and the exact word',
strap='CEFR B2 · Grammar: cleft sentences · AI: the exact word',
cando=['build it-clefts and what-clefts to place emphasis in an argument',
       'use a cleft to isolate the point in dispute',
       'say what a comparison of language versions can and cannot establish',
       'see why an undefined term is sometimes left undefined on purpose',
       'write a tasking for a text comparison that does not resolve a discrepancy'],
hero=('TWO AUTHENTIC TEXTS, ONE OBLIGATION',
      ['In one language version the Parties shall endeavour to provide access.',
       'In the other, the Parties shall provide access so far as practicable.'],
      [(730, 'blue', 'long'), (1390, 'purple', 'short'),
       (2050, 'teal', 'long'), (2690, 'orange', 'short')]),
hero_cap='Legal and Treaties, with the two versions side by side and both of them signed.',

warm=['What happens when two official versions of a text do not say the same thing?',
      'Why would a negotiator leave a word undefined?',
      'What is the difference between endeavouring to do something and doing it so far as is practicable?'],
read=[
 'The 2019 instrument has two authentic language versions, both signed, both equally valid. '
 'In article 11 the Ministry’s version requires the Parties to endeavour to provide access. '
 'The other version requires them to provide access so far as practicable.',
 'Those are not the same obligation. Endeavouring is an obligation of conduct: a Party that '
 'tries and fails has complied. So far as practicable is an obligation of result, limited by '
 'practicability: a Party that could have provided access and did not has not complied, '
 'whatever it tried.',
 'Samir Haddad discovered the difference not by reading the two versions, which his section '
 'had done in 2019 and found acceptable, but by running a comparison across all eleven '
 'bilateral instruments with language versions in two languages. Four showed discrepancies. '
 'Three were trivial. This one was not.',
 'The comparison does not resolve anything. Both versions are authentic, neither prevails, and '
 'what the Parties agreed is a question about what was negotiated, which lives in the travaux '
 'preparatoires and in the memory of people who were in the room in 2018.',
 'What it did was make the question askable. Samir says the useful finding was not that the '
 'texts differ. It was that in 2018 the negotiating record shows the phrase was discussed for '
 'two hours and left as it was, which means somebody knew and decided, and the Ministry’s '
 'position is now that the difference was deliberate on both sides.'],
c_a=[('How many authentic versions does the instrument have?', 'two, both signed and equally valid'),
     ('What does each version require?', 'to endeavour to provide access; and to provide access so far as practicable'),
     ('Why are those different?', 'one is an obligation of conduct, the other an obligation of result limited by practicability'),
     ('How was the difference found?', 'by comparing all eleven bilateral instruments with two language versions'),
     ('What does the comparison not do?', 'resolve anything; both versions are authentic and neither prevails'),
     ('What did the 2018 record show?', 'that the phrase was discussed for two hours and left as it was')],
c_b=[('One version prevails over the other.', 'F'),
     ('The section had read both versions in 2019.', 'T'),
     ('Four of eleven instruments showed discrepancies.', 'T'),
     ('A Party that tries and fails has complied under both versions.', 'F'),
     ('The comparison settles what was agreed.', 'F'),
     ('The Ministry now treats the difference as deliberate.', 'T')],
c_c=[('Both signed, both equally ____________.', 'valid'),
     ('Endeavouring is an obligation of ____________.', 'conduct'),
     ('So far as practicable is an obligation of ____________.', 'result'),
     ('Three were ____________. This one was not.', 'trivial'),
     ('A question about what was ____________.', 'negotiated'),
     ('The phrase was discussed for two hours and ____________ as it was.', 'left')],
c_d=[('The comparison made the question ( askable / answerable ).', ['askable', 'answerable'], 0),
     ('How many instruments were compared?', ['two', 'eleven', 'four', 'three'], 1),
     ('How many discrepancies mattered?', ['four', 'one', 'three', 'none'], 1),
     ('Where does the answer live?', ['in the text', 'in the travaux and in memories', 'in the annex', 'in the depositary’s file'], 1),
     ('What does the 2018 record establish?', ['who was right', 'that somebody knew and decided', 'the meaning', 'the date'], 1)],
c_e=('Match each cleft to what it isolates.',
     [('It is the word endeavour that matters here.', 'the disputed word'),
      ('What the Ministry disputes is the scope, not the duty.', 'the disputed element'),
      ('It was in 2018 that the phrase was settled.', 'the time'),
      ('What happened was that both sides knew.', 'the whole event'),
      ('It is practicability, not effort, that the other version requires.', 'a contrast'),
      ('What we need is the negotiating record.', 'what is required')],
     ['the disputed word', 'the disputed element', 'the time', 'the whole event',
      'a contrast', 'what is required']),

v_fig_title='THE APPARATUS OF A TREATY',
v_fig=[('doc', 'a language version'), ('key', 'a reservation to a treaty'), ('shield', 'a scope provision'),
       ('book', 'a travaux preparatoires'), ('pin', 'a depositary'), ('clock', 'entry into force')],
v_fig_cap='Six words for the parts of an instrument that outlive everybody who made it.',
vocab=[
 ('a treaty', 'a written agreement between states governed by international law'),
 ('a reservation to a treaty', 'a statement excluding or modifying a provision for one state'),
 ('a declaration', 'a statement made on signature or ratification'),
 ('an interpretative declaration', 'a statement of how a state understands a provision'),
 ('an objection to a reservation', 'a statement that another state does not accept a reservation'),
 ('ratification', 'the act by which a state becomes bound after signature'),
 ('accession', 'the act by which a state joins a treaty it did not sign'),
 ('entry into force', 'the point from which a treaty binds its parties'),
 ('a depositary', 'the state or body holding the original text and receiving instruments'),
 ('a signature subject to ratification', 'signature that does not yet bind the state'),
 ('a provisional application', 'the application of a treaty before it enters into force'),
 ('a travaux preparatoires', 'the record of the negotiation of a text'),
 ('a language version', 'one of the texts of an instrument in a particular language'),
 ('a discrepancy between texts', 'a difference of meaning between language versions'),
 ('a term left undefined', 'a word a text uses without saying what it means'),
 ('a scope provision', 'the article stating what a treaty applies to'),
 ('a dispute settlement clause', 'the provision saying how disagreements are resolved'),
 ('a withdrawal clause', 'the provision stating how a party may leave'),
 ('a final clause', 'a closing provision on signature, ratification and texts'),
 ('an obligation of conduct', 'a duty to try rather than a duty to achieve')],
v_a=[('A statement excluding or modifying a provision for one state is a ____________.', 'reservation to a treaty'),
     ('The record of the negotiation of a text is a ____________.', 'travaux preparatoires'),
     ('A difference of meaning between language versions is a ____________.', 'discrepancy between texts'),
     ('The article stating what a treaty applies to is a ____________.', 'scope provision'),
     ('A duty to try rather than a duty to achieve is an ____________.', 'obligation of conduct'),
     ('The state or body holding the original text is a ____________.', 'depositary'),
     ('A statement of how a state understands a provision is an ____________.', 'interpretative declaration'),
     ('The application of a treaty before it enters into force is a ____________.', 'provisional application')],
v_b=[('A treaty is a written agreement between states', 'governed by international law.'),
     ('Ratification is the act by which a state', 'becomes bound after signature.'),
     ('Entry into force is the point', 'from which a treaty binds its parties.'),
     ('A term left undefined is a word a text uses', 'without saying what it means.'),
     ('A withdrawal clause is the provision stating', 'how a party may leave.')],

g_title='Grammar: cleft sentences in argument',
g_rule=['An it-cleft isolates one element: It is the word endeavour that matters.',
        'A what-cleft fronts the whole point: What the Ministry disputes is the scope.',
        'A cleft is for emphasis and contrast; it must not be used twice in a sentence.',
        'In argument, the cleft names the thing in dispute, which stops an opponent widening '
        'it.'],
g_fig=('LOOSE',
       ['The word endeavour matters here.',
        'The Ministry disputes the scope and not the duty.',
        'The phrase was settled in 2018.',
        'Both sides knew.'],
       'PRECISE',
       ['It is the word endeavour that matters here.',
        'What the Ministry disputes is the scope, not the duty.',
        'It was in 2018 that the phrase was settled.',
        'What happened was that both sides knew and said nothing.'],
       'four true statements with no element isolated',
       'four clefts, each naming exactly what is in dispute'),
g_fig_cap='A cleft is the cheapest way to stop an argument being widened by the other side.',
g_a=[('It is the word endeavour ____________ matters here.', 'that'),
     ('____________ the Ministry disputes is the scope, not the duty.', 'What'),
     ('It ____________ in 2018 that the phrase was settled.', 'was'),
     ('____________ happened was that both sides knew.', 'What'),
     ('It is practicability, not effort, ____________ the other version requires.', 'that'),
     ('____________ we need is the negotiating record.', 'What'),
     ('It was the ____________ version that was signed first.', 'second'),
     ('____________ the comparison established is that somebody decided.', 'What'),
     ('It is not the text ____________ is in dispute but its scope.', 'that')],
g_b=[('An it-cleft isolates ( the whole clause / one element ).', ['the whole clause', 'one element'], 1),
     ('It is the word endeavour ____ matters here.', ['what', 'that', 'which it', 'who'], 1),
     ('____ the Ministry disputes is the scope.', ['That', 'What', 'It', 'Which'], 1),
     ('A cleft should be used', ['twice per sentence', 'once per sentence', 'in every sentence', 'never in argument'], 1),
     ('In argument a cleft', ['widens the dispute', 'names the thing in dispute', 'softens a claim', 'hides the subject'], 1),
     ('Which is a what-cleft?', ['It is the scope that matters.', 'What matters is the scope.', 'The scope matters.', 'Scope is what.'], 1)],

d1=dict(title='Endeavour and practicable',
        fig=(['Endeavour to provide access.', 'Provide access so far as practicable.'],
             ['Both are signed.', 'And they are different duties.']),
        cap='Samir Haddad and Omar Nasri, with the two versions.',
        lines=[('Omar', 'Article 11. Ours says the Parties shall endeavour to provide access. '
                        'Theirs says the Parties shall provide access so far as practicable.'),
               ('Samir', 'Read them again. It is the difference between trying and achieving.'),
               ('Omar', 'Endeavour is conduct. A Party that tries and fails has complied.'),
               ('Samir', 'And so far as practicable is result, bounded by practicability. A '
                         'Party that could have provided access and did not has breached, '
                         'however hard it says it tried.'),
               ('Omar', 'Both texts are authentic. Neither prevails.'),
               ('Samir', 'Neither prevails, and the question of what was agreed is not a '
                         'question about the texts at all. It is a question about 2018.'),
               ('Omar', 'Which nobody in this section was present for.'),
               ('Samir', 'Two people were. One has retired and one is in Lysmark. And the '
                         'negotiating record exists.'),
               ('Omar', 'What does it say?'),
               ('Samir', 'It says the phrase was discussed for two hours on the second day and '
                         'left as it stood. Two hours is not inadvertence. Somebody on each side '
                         'looked at this and decided to live with it.'),
               ('Omar', 'Then the discrepancy was the agreement.'),
               ('Samir', 'That is the Ministry’s position and I believe it is right. What I '
                         'cannot tell you is what each side thought it had obtained, and that is '
                         'the thing that will matter if this is ever litigated.')],
        a=[('What does each version require?', 'to endeavour to provide access; and to provide access so far as practicable'),
           ('What is the difference?', 'conduct against result bounded by practicability'),
           ('Which version prevails?', 'neither; both are authentic'),
           ('What does the 2018 record show?', 'the phrase was discussed for two hours and left as it stood'),
           ('What can Samir not establish?', 'what each side thought it had obtained')],
        b=[('A Party that tries and fails has ____________.', 'complied'),
           ('However hard it says it ____________.', 'tried'),
           ('Two hours is not ____________.', 'inadvertence'),
           ('If this is ever ____________.', 'litigated')]),
d2=dict(title='Four of eleven',
        fig=(['Eleven instruments compared.', 'Four show discrepancies.'],
             ['And three are trivial.', 'Trivial until somebody needs them.']),
        cap='Samir and Dr Hana Mourad.',
        lines=[('Hana', 'You compared the language versions of all eleven bilateral instruments. '
                        'Four show discrepancies.'),
               ('Samir', 'Three are trivial on any reading: a definite article, a plural, a '
                         'date written two ways with the same meaning.'),
               ('Hana', 'And the fourth is article 11.'),
               ('Samir', 'Which is a difference in the kind of obligation, and I would not have '
                         'found it by reading, because reading two versions for consistency is '
                         'what my section did in 2019 and we passed it.'),
               ('Hana', 'Why did you pass it?'),
               ('Samir', 'Because both phrases are ordinary treaty language and both are '
                         'qualified. You see endeavour, you see so far as practicable, your eye '
                         'reports two qualified obligations and moves on. The difference is in a '
                         'category, not in a word.'),
               ('Hana', 'What do you want to do about the three trivial ones?'),
               ('Samir', 'Record them. Not correct them, which would require reopening '
                         'instruments in force for nothing, and not forget them.'),
               ('Hana', 'And if one of the three turns out to matter in some case nobody has '
                        'thought of?'),
               ('Samir', 'Then we will be glad it is recorded, and I will have been wrong to '
                         'call it trivial. I am calling three of them trivial on my own judgement '
                         'and I have just been wrong about the fourth for six years.'),
               ('Hana', 'So the honest statement is that four instruments have discrepancies and '
                        'the Ministry has assessed three as immaterial.'),
               ('Samir', 'With my name on the assessment, which is the most I can offer and less '
                         'than I would like.')],
        a=[('How many of the eleven showed discrepancies?', 'four'),
           ('What are the three trivial ones?', 'a definite article, a plural, and a date written two ways'),
           ('Why did the 2019 reading pass article 11?', 'because both phrases look like ordinary qualified obligations'),
           ('What does Samir want done with the three?', 'recorded, not corrected and not forgotten'),
           ('What does he concede?', 'that he is judging them trivial after being wrong about the fourth for six years')],
        b=[('The difference is in a ____________, not in a word.', 'category'),
           ('Reopening instruments in ____________ for nothing.', 'force'),
           ('Three of them trivial on my own ____________.', 'judgement'),
           ('With my ____________ on the assessment.', 'name')],
        unresolved=True),

speak=[('Cleft it',
        ['Student A: make six statements about a disagreement in your work.',
         'Student B: rewrite each as an it-cleft or a what-cleft.',
         'Say which element each cleft isolates.']),
       ('Two versions',
        ['Take a short sentence and write two versions that look equivalent.',
         'Say what each would require of you.',
         'Your partner says whether the difference is a word or a category.']),
       ('Trivial until',
        ['Name something in your work you treat as immaterial.',
         'Say what case would make it material.',
         'Say who would be blamed.'])],

ext_title='A comparison of language versions finds the discrepancy; what was agreed is a question about the negotiation',
ext_fig=figs.source_check('ARTICLE 11, THE TWO VERSIONS',
                          [('version A requires endeavour', 'the signed text', 'verified'),
                           ('version B requires so far as practicable', 'the signed text', 'verified'),
                           ('both texts are authentic', 'the final clause', 'verified'),
                           ('neither version prevails', 'the final clause', 'verified'),
                           ('the phrase was discussed in 2018', 'the negotiating record', 'single'),
                           ('what each side understood it to mean', 'no document', 'none')]),
ext_fig_cap='Four rows are settled by the text, one by the record, and the last one by nothing '
            'at all.',
ext=[
 'An instrument with two authentic language versions carries a risk that is well known and '
 'rarely examined after signature. Both texts are valid, neither prevails unless the final '
 'clause says so, and a difference of meaning between them is not an error to be corrected '
 'but a feature of the instrument the parties made.',
 'Sections check the versions against each other at the time, by reading. That catches '
 'mistranslation and misses the harder case, which is not a wrong word but a different '
 'category of obligation expressed in ordinary language. Shall endeavour to provide access '
 'and shall provide access so far as practicable both read as qualified duties; the first is '
 'an obligation of conduct, discharged by trying, and the second an obligation of result, '
 'bounded by practicability and breached by a party that could have performed and did not. A '
 'reader’s eye reports two hedged obligations and moves on.',
 'Comparison across a collection is what has changed, and the value is in the scale rather '
 'than the cleverness. Eleven bilateral instruments in two languages each, compared '
 'provision by provision, produced four discrepancies, of which three were a definite '
 'article, a plural and a date written two ways. The fourth was article 11, which the ministry '
 'had read and passed in 2019.',
 'What the comparison cannot do is resolve anything, and this is worth stating plainly '
 'because the output looks conclusive. Both versions are authentic. What the parties agreed '
 'is a question about the negotiation, answerable, if at all, from the negotiating record and '
 'from the recollection of people who were present. In this case the record showed the phrase '
 'had been discussed for two hours and left as it stood, which establishes that somebody on '
 'each side knew, and establishes nothing about what either thought it had obtained.',
 'The practice that follows is modest. Record every discrepancy found, including the ones the '
 'section assesses as immaterial, with the assessment and the name of the officer who made '
 'it. Do not reopen instruments in force to correct a plural. And do not treat an immateriality '
 'assessment as a finding, because the officer making it has usually just discovered that an '
 'earlier assessment of the same kind was wrong for six years.'],
dp1=('Language version comparison',
     'Treaty sections in several foreign services ran systematic comparisons of authentic '
     'language versions across their instrument collections in 2025, recording discrepancies '
     'with materiality assessments rather than seeking corrections.',
     'Source: reported practice in diplomatic treaty administration, 2025–2026.'),
e_a=[('What is the risk with two authentic versions?', 'both are valid and a difference of meaning is a feature of the instrument'),
     ('What does reading catch and miss?', 'it catches mistranslation and misses a different category of obligation'),
     ('What is the difference in article 11?', 'conduct discharged by trying against result bounded by practicability'),
     ('What has changed?', 'comparison across a whole collection, provision by provision'),
     ('What does the record establish?', 'that somebody on each side knew, and nothing about what either thought it obtained')],
e_b=[('A discrepancy is an error to be corrected.', 'F'),
     ('Reading reliably catches category differences.', 'F'),
     ('Three of the four discrepancies were small.', 'T'),
     ('The comparison resolves what was agreed.', 'F'),
     ('Immaterial discrepancies should be recorded.', 'T'),
     ('Instruments in force should be reopened for a plural.', 'F')],

w_model=(
 'Purpose: compare the authentic language versions of the Ministry’s 11 bilateral instruments '
 'so that every discrepancy of meaning is on the record. Scope: instruments in force with 2 '
 'or more authentic versions; instruments with a single authentic text are out of scope, as '
 'are annexes not forming part of the instrument. Inputs: the signed texts of each version '
 'and the final clauses. Criteria: compare provision by provision and report every difference '
 'of meaning, however small; for each, state whether the difference changes the kind of '
 'obligation, the scope, a date or a figure; state what each final clause says about which '
 'version prevails; do not state what the Parties agreed and do not propose a correction. '
 'Done: 1 schedule of discrepancies by instrument and article, with the final-clause position '
 'noted for each, within 3 working days. Fallback: where a difference may be a matter of '
 'idiom rather than meaning, report it and say that it may be idiomatic rather than deciding.'),
w_fig=figs.spec_card('THE TASKING FOR A VERSION COMPARISON',
                     [('Purpose', 'every discrepancy of meaning on the record'),
                      ('Scope', 'instruments in force with 2 or more authentic texts'),
                      ('Inputs', 'the signed texts and the final clauses'),
                      ('Criteria', 'every difference, classified; prevalence noted; no conclusions'),
                      ('Done', '1 schedule by instrument and article, within 3 working days'),
                      ('Fallback', 'possibly idiomatic: report and say so, do not decide')]),
w_fig_cap='Do not state what the Parties agreed: that answer is in the negotiation, not in the texts.',
w_task='Write a tasking for comparing two official versions of something in your own work.',
w_steps=['Say what the comparison is to put on the record.',
         'Bound the documents and exclude single-version material.',
         'Require every difference, with its kind.',
         'Forbid conclusions about what was agreed.',
         'Say what to do with a possible matter of idiom.'],
w_bank=['Compare … so that … is on the record.',
        'Cover … ; … are out of scope, as are …',
        'Work from … and …',
        'Compare … and report every difference … ; for each, state whether … ; state what … ; do not state … and do not …',
        'Where a difference may be … , report it and say … rather than …'],
w_check=['Is every difference required, however small?',
         'Is the kind of difference classified?',
         'Are conclusions about the agreement forbidden?',
         'Is an idiom question reported rather than decided?'],

t_title='Treaty text and the exact word',
t_fig=figs.split('TWO AUTHENTIC VERSIONS',
                 'The comparison gives',
                 ['every difference, provision by provision',
                  'the kind of each difference',
                  'what the final clause says about prevalence',
                  'a schedule that survives the officers'],
                 'It cannot give',
                 ['what the Parties agreed',
                  'what each side thought it obtained',
                  'whether a difference is material',
                  'a correction anybody can make']),
t_fig_cap='The left column is clerical and durable. The right column needs 2018.',
t_body=[
 'Treaty text is read years later by people who were not there, and reservations and language '
 'versions are where that reading goes wrong. Where an instrument has two authentic versions, both are valid, neither prevails unless the '
 'final clause says so, and a difference between them is part of the instrument rather than a '
 'mistake in it. Sections read the versions against each other at signature, which catches '
 'mistranslation and misses the case that matters.',
 'That case is a difference of category in ordinary language. Shall endeavour to provide '
 'access is an obligation of conduct, discharged by trying. Shall provide access so far as '
 'practicable is an obligation of result, bounded by practicability, and is breached by a '
 'Party that could have performed and did not. Both look like hedged duties, so a careful '
 'reader passes them, as the Ministry did in 2019.',
 'Comparison across a whole collection is cheap and has value in scale rather than in insight: '
 'eleven instruments, four discrepancies, three of them a plural, an article and a date. But '
 'be clear what the output is not. It is not a finding about the agreement, because what the '
 'Parties agreed is a question about the negotiation, answerable from the record and from '
 'people who were present, and in this case the record showed two hours of discussion and no '
 'change, which proves that somebody knew and proves nothing about what either side believed '
 'it had won. Record every discrepancy, including the ones you assess as immaterial, with your '
 'name on the assessment.'],
t_say=[('Isolate the point: ', 'It is the word endeavour that carries the difference.'),
       ('State the limit: ', 'Both versions are authentic; neither prevails.'),
       ('Record the judgement: ', '3 discrepancies assessed immaterial, by the Director of Legal and Treaties.')],
t_bound=('A comparison establishes that two texts differ and in what respect. It cannot '
         'establish what was agreed, which is a question about a negotiation; it cannot weigh '
         'materiality, which is a judgement about cases nobody has brought yet; and it cannot '
         'be acted on by correcting an instrument in force. Its output is a record, not a '
         'remedy.'),
t_a=[('It is the word ____________ that carries the difference.', 'endeavour'),
     ('Both versions are authentic; neither ____________.', 'prevails'),
     ('3 discrepancies assessed ____________.', 'immaterial'),
     ('An obligation of conduct, discharged by ____________.', 'trying'),
     ('Bounded by ____________.', 'practicability'),
     ('Its output is a record, not a ____________.', 'remedy')],
t_b_rubric='Rewrite each as a cleft that isolates the point in dispute.',
t_b=[('The word endeavour matters here.', 'it is the word endeavour that matters here'),
     ('The Ministry disputes the scope and not the duty.', 'what the Ministry disputes is the scope, not the duty'),
     ('The phrase was settled in 2018.', 'it was in 2018 that the phrase was settled'),
     ('Both sides knew.', 'what happened was that both sides knew and said nothing')],

case=dict(
 title='The Decision Room · Whether to raise article 11',
 brief=[
  'The Ministry has found that the two authentic versions of article 11 impose different kinds '
  'of obligation, and that the 2018 record shows the phrase was discussed and left.',
  'No case has arisen under article 11. The Ministry’s own performance has been consistent '
  'with the stricter version.',
  'Samir wants to raise it with Oristan and seek an interpretative understanding. Lina says '
  'raising it invites Oristan to adopt the stricter reading formally. Hana asks what the '
  'Ministry does if a case arises before anything is agreed.'],
 exhibit=figs.datatable('ARTICLE 11 AS IT STANDS',
                        ['', 'Finding', 'Note'],
                        [['the 2 versions', 'conduct / result', 'both authentic'],
                         ['which prevails', 'neither', 'final clause silent'],
                         ['the 2018 discussion', '2 hours, no change', 'negotiating record'],
                         ['cases arisen since', '0', '6 years'],
                         ['Ministry performance', 'consistent with the stricter', '—'],
                         ['Oristani performance', 'consistent with both', '—']]),
 exhibit_cap='Six years, no cases, and the Ministry has in practice met the stricter version '
             'throughout.',
 exhibit_note='An interpretative understanding would require both Parties to state a common '
              'reading in writing.',
 voices=[('Samir Haddad', 'Legal and Treaties',
          'Raise it. An instrument with two incompatible obligations is a dispute waiting for '
          'an occasion, and the occasion will be a case we care about.'),
         ('Lina Khalil', 'Bilateral Affairs',
          'Raise it and Oristan will propose the stricter reading, because the stricter reading '
          'is better for them. At present nobody has a formal position and our practice '
          'happens to be generous.'),
         ('Dr Hana Mourad', 'Policy Planning',
          'Then decide now what we say if a case arises. Six years of performing to the '
          'stricter standard is itself becoming an argument against us, whatever the text '
          'says.')],
 steps=[('Find it', 'How many cases have arisen in six years?'),
        ('Compare it', 'What are the three positions?'),
        ('Infer it', 'Why would Oristan propose the stricter reading?'),
        ('Weigh it', 'Settling a latent dispute against conceding the stricter duty.'),
        ('Decide', 'Is article 11 raised, and what is prepared?')],
 analysis=[('Find it. What has the Ministry’s practice been?', 'consistent with the stricter version throughout'),
           ('Compare it. What does Lina expect Oristan to do?', 'propose the stricter reading, which favours it'),
           ('Infer it. Why does Hana raise performance?', 'because six years of generous practice is itself becoming an argument'),
           ('Weigh it. What does the final clause say about prevalence?', 'nothing'),
           ('Decide. What would you do?', 'answers vary; preparing a position without raising it keeps both options')],
 decision='Write what the Ministry does about article 11.',
 decision_steps=['Say whether the matter is raised with Oristan.',
                 'Say what position is prepared in case a case arises.',
                 'Say what is done about the Ministry’s own practice.',
                 'Say what is recorded for a successor.'],
 bank=['Article 11 is … with Oristan.',
       'If a case arises, the Ministry’s position is …',
       'The Ministry’s practice is …',
       'It is recorded for a successor that …',
       'This is reviewed …'],
 outcome='The matter was not raised. A position was written and filed: that both texts are '
         'authentic, that the 2018 record shows the difference was known, and that the '
         'Ministry’s obligation is one of conduct under its own authentic version. The '
         'Ministry’s practice was left unchanged, with a note that it is performed as a matter '
         'of good relations and not of obligation. Four years later a case arose and the filed '
         'position was used unaltered. Lina, who had argued against raising it, says the part '
         'that mattered was not the silence but the note about practice, because without it six '
         'more years of generous performance would have been quoted against the Ministry as '
         'acceptance of the stricter duty.',
 outcome_q=[('What was filed?', 'a position on both texts, the 2018 record, and the conduct obligation'),
            ('What does Lina say mattered most?', 'the note that the practice was good relations rather than obligation')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · Check the two versions',
 task=['This is the instruction the section worked to in 2019, when it compared the versions '
       'of the new instrument and passed them.',
       'It was carried out carefully and did not catch a difference in the kind of obligation '
       'in article 11.'],
 draft=['Check the two language versions against each other.',
        'Look for anything that does not match.',
        'Report any mistranslations.',
        'Confirm the texts are equivalent.',
        'Flag anything serious.',
        'Before signature.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and the third narrows the search to the error that was not made.',
 asked=['Every difference of meaning, however small',
        'The kind of each difference stated',
        'No conclusion about equivalence'],
 back=['A confirmation that the texts were equivalent',
       'No mention of endeavour or practicable',
       'Three small differences not recorded at all'],
 gap='"Anything that does not match" sets no test, "mistranslations" is the wrong category for '
     'a difference of obligation, "confirm the texts are equivalent" asks for a conclusion the '
     'exercise cannot support, and "anything serious" leaves materiality to the reader.',
 back_cap='A careful comparison that produced a confirmation, which is the one output nobody '
          'should have asked for.',
 back_note='Line four is the failure. Asked to confirm equivalence, a careful reader will '
           'confirm it, because two hedged obligations look equivalent.',
 diagnosis=[('[1] "the two language versions" — of which instrument, as signed when?', 'ambiguous referent'),
            ('[2] "anything that does not match" — match by what test?', 'unstated criterion'),
            ('[3] "report any mistranslations" — and a difference that is not a mistranslation?', 'missing condition'),
            ('[4] "confirm the texts are equivalent" — equivalent in what respect?', 'unstated criterion'),
            ('[5] "flag anything serious" — serious to whom, and for which case?', 'ambiguous referent'),
            ('[6] "before signature" — and if the comparison is not finished?', 'missing condition')],
 rewrite='Rewrite the instruction so that every difference is reported and no conclusion is '
         'drawn.',
 scaffold=['What the comparison is to put on the record',
           'Which instruments and versions, and what is excluded',
           'The signed texts and the final clauses',
           'Every difference however small, classified by kind, prevalence noted, no conclusions',
           'The schedule and the time allowed',
           'What to do with a possible matter of idiom'],
 bank=['Compare … so that …',
       'Cover … ; … are out of scope, as are …',
       'Work from … and …',
       'Compare … and report every difference … ; for each, state whether … ; state what … ; do not state …',
       'Return 1 schedule of … , within …',
       'Where a difference may be … , report it and …'],
 check=['Is every difference required, however small?',
        'Is "mistranslation" replaced by a wider test?',
        'Is a confirmation of equivalence forbidden?',
        'Is materiality left out of the output?'],
 model=['Compare the authentic language versions of the Ministry’s 11 bilateral instruments so that every discrepancy of meaning is on the record',
        'Instruments in force with 2 or more authentic versions; instruments with a single authentic text are out of scope, as are annexes not forming part of the instrument',
        'The signed texts of each version and the final clauses',
        'Compare provision by provision and report every difference of meaning, however small; for each, state whether the difference changes the kind of obligation, the scope, a date or a figure; state what each final clause says about which version prevails; do not state what the Parties agreed and do not propose a correction',
        '1 schedule of discrepancies by instrument and article, with the final-clause position noted for each, within 3 working days',
        'Where a difference may be a matter of idiom rather than meaning, report it and say that it may be idiomatic rather than deciding'],
 cost='6 years during which the Ministry held an instrument imposing 2 different kinds of '
      'obligation in its 2 authentic versions, with a confirmation of equivalence on the file.'),

rev_fig=figs.split('CLEFTS',
                   'Flat',
                   ['The word endeavour matters here.',
                    'The Ministry disputes the scope.',
                    'The phrase was settled in 2018.',
                    'Both sides knew.'],
                   'Cleft',
                   ['It is the word endeavour that matters.',
                    'What the Ministry disputes is the scope.',
                    'It was in 2018 that it was settled.',
                    'What happened was that both sides knew.']),
rev_fig_cap='It is X that … ; what … is that … One cleft to a sentence.',
rev=dict(
 read=[('Endeavour to provide access is an obligation of', ['result', 'conduct', 'scope', 'form'], 1),
       ('Where two versions are authentic', ['the first prevails', 'neither prevails unless stated', 'the depositary decides', 'both are void'], 1),
       ('The comparison establishes', ['what was agreed', 'that the texts differ', 'materiality', 'the remedy'], 1),
       ('In the Decision Room, what was done about article 11?', ['raised with Oristan', 'a position was filed', 'the practice changed', 'nothing at all'], 1)],
 listen_text='Shall endeavour to provide access and shall provide access so far as practicable '
             'both read as qualified duties; the first is an obligation of conduct, discharged '
             'by trying, and the second an obligation of result, bounded by practicability.',
 listen=[('Both read as ____________ duties.', 'qualified'),
         ('An obligation of conduct, discharged by ____________.', 'trying'),
         ('An obligation of ____________.', 'result'),
         ('Bounded by ____________.', 'practicability')],
 speak=['Isolate a point in dispute in your work with a cleft.',
        'Say what two versions of one sentence would require of you.'],
 write='Write one line forbidding a conclusion about what was agreed.',
 vocab=[('A statement excluding or modifying a provision for one state is a ____________.', 'reservation to a treaty'),
        ('The record of the negotiation of a text is a ____________.', 'travaux preparatoires'),
        ('A difference of meaning between language versions is a ____________.', 'discrepancy between texts'),
        ('A duty to try rather than a duty to achieve is an ____________.', 'obligation of conduct'),
        ('A statement of how a state understands a provision is an ____________.', 'interpretative declaration')],
 gram=[('It is the word endeavour ____________ matters here.', 'that'),
       ('____________ the Ministry disputes is the scope, not the duty.', 'What'),
       ('It ____________ in 2018 that the phrase was settled.', 'was'),
       ('____________ happened was that both sides knew.', 'What'),
       ('It is not the text ____________ is in dispute but its scope.', 'that')]),

found=['Find a term left undefined in a document your office relies on.',
       'Ask what two readings of it would require of you.',
       'Check whether a document you use has more than one official version.',
       'Isolate one disputed point with a cleft sentence.'],
end_line='The comparison makes the question askable; 2018 answers it, or nothing does.',
end_next='Next: Rehearsing Against Nobody',
)
