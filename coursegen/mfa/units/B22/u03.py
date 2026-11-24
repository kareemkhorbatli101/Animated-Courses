# -*- coding: utf-8 -*-
import figs

U = dict(
num=3, title='Inside the Brackets',
gram='the subjunctive in formal requirement: requests that it be',
ai='bracketed text and the language of compromise',
strap='CEFR B2 · Grammar: the formal subjunctive · AI: inside the brackets',
cando=['use the subjunctive after request, propose, require and insist',
       'write a formal requirement without softening it into a wish',
       'say what a bracket records and what it conceals',
       'distinguish a compromise formula from constructive ambiguity',
       'write a tasking for bracketed text that asks who is protected by each variant'],
hero=('FORTY-ONE SETS OF BRACKETS',
      ['Each one records a disagreement somebody could name in April.',
       'By November, eleven of them were held by nobody.'],
      [(730, 'orange', 'long'), (1390, 'blue', 'short'),
       (2050, 'teal', 'long'), (2690, 'purple', 'short')]),
hero_cap='The rolling text after the fourth round, in the room where it is kept.',

warm=['What does a bracket in a negotiating text actually record?',
      'When is an ambiguous form of words useful, and when is it a trap?',
      'How would you find out who objects to a phrase that has been bracketed for a year?'],
read=[
 'A rolling text accumulates square brackets. Every bracket is a disagreement that somebody, '
 'at some point, insisted be recorded rather than resolved, and after four rounds the Ministry '
 'and Oristan were working on a text with forty-one sets of them.',
 'Samir Haddad asked a comparison step to produce something no delegation had ever had: for '
 'each bracket, the round in which it first appeared, which side had proposed each variant, '
 'and whether any delegation had spoken to it since. The work took an afternoon because the '
 'records existed and nobody had ever had time to assemble them.',
 'The answer was uncomfortable. Eleven of the forty-one brackets had not been mentioned by '
 'anybody for three rounds. Of those eleven, four had been inserted by officers who had since '
 'left their posts, and in two cases neither delegation could say what the disagreement had '
 'been.',
 'That is not a curiosity. A bracket in a text is read by every later reader as a live '
 'disagreement, and a text with forty-one of them looks like a negotiation that is nowhere '
 'near agreement. Eleven of them were not disagreements at all. They were the residue of '
 'disagreements whose owners had gone.',
 'The round that followed cleared nine of the eleven in forty minutes, by the chair asking of '
 'each whether any delegation requested that it be retained. Two were retained, one by Oristan '
 'with a reason and one by the Ministry because Samir wanted to read the file first. He says '
 'the lesson is not about brackets. It is that a text records disagreements and does not '
 'record their deaths.'],
c_a=[('How many brackets did the text carry?', 'forty-one, after four rounds'),
     ('What did Samir ask for?', 'for each bracket, when it first appeared, who proposed each variant, and who had spoken to it since'),
     ('How long did the work take, and why?', 'an afternoon, because the records existed and nobody had had time'),
     ('What did the answer show?', 'eleven brackets had not been mentioned for three rounds'),
     ('How were nine cleared?', 'the chair asked whether any delegation requested that each be retained'),
     ('What does Samir say the lesson is?', 'that a text records disagreements and does not record their deaths')],
c_b=[('Every bracket records a disagreement.', 'T'),
     ('The assembly took three weeks.', 'F'),
     ('Four of the eleven were inserted by officers who had left.', 'T'),
     ('A bracket is read by later readers as resolved.', 'F'),
     ('All eleven were cleared.', 'F'),
     ('Samir retained one to read the file first.', 'T')],
c_c=[('Somebody insisted it ____________ recorded rather than resolved.', 'be'),
     ('Which side had proposed each ____________.', 'variant'),
     ('Neither delegation could say what the ____________ had been.', 'disagreement'),
     ('The ____________ of disagreements whose owners had gone.', 'residue'),
     ('Whether any delegation requested that it ____________ retained.', 'be'),
     ('A text records disagreements and does not record their ____________.', 'deaths')],
c_d=[('A bracket is read by later readers as a ( resolved / live ) disagreement.', ['resolved', 'live'], 1),
     ('How many brackets had been silent for three rounds?', ['four', 'eleven', 'forty-one', 'nine'], 1),
     ('How many were cleared in the next round?', ['eleven', 'nine', 'two', 'four'], 1),
     ('Why did Samir retain one?', ['Oristan objected', 'to read the file first', 'the chair refused', 'it was new'], 1),
     ('What had happened to four of the eleven?', ['they were agreed', 'their authors had left their posts', 'they were deleted', 'they were flagged'], 1)],
c_e=('Subjunctive or indicative? Put each in the right column.',
     [('requests that it be retained', 'subjunctive'),
      ('says that it is retained', 'indicative'),
      ('proposes that the figure be fixed', 'subjunctive'),
      ('notes that the figure is fixed', 'indicative'),
      ('insists that notice be given', 'subjunctive'),
      ('confirms that notice is given', 'indicative')],
     ['subjunctive', 'indicative']),

v_fig_title='THE APPARATUS OF COMPROMISE',
v_fig=[('doc', 'a square bracket'), ('key', 'a compromise formula'), ('bulb', 'constructive ambiguity'),
       ('pin', 'a sticking point'), ('chart', 'a package deal'), ('shield', 'a reservation of position')],
v_fig_cap='Six words for the machinery by which two capitals avoid a decision.',
vocab=[
 ('a square bracket', 'the mark enclosing text on which there is no agreement'),
 ('a bracketed phrase', 'wording that remains in dispute'),
 ('an agreed text', 'text on which no delegation maintains an objection'),
 ('an unagreed text', 'text on which an objection is recorded'),
 ('a placeholder figure', 'a number inserted so that the sentence can be read'),
 ('a chair’s text', 'a text put forward by the chair on the chair’s own responsibility'),
 ('a facilitator', 'a delegate asked to find a way through one question'),
 ('a bridging proposal', 'wording offered to carry two positions at once'),
 ('a compromise formula', 'an agreed form of words acceptable to both sides'),
 ('constructive ambiguity', 'wording left unclear on purpose so that both sides can accept it'),
 ('a sticking point', 'the question on which progress has stopped'),
 ('a package deal', 'an agreement in which several questions are settled together'),
 ('a linkage', 'the tying of one question to another for bargaining'),
 ('a concession', 'something given up in order to obtain something else'),
 ('a trade of positions', 'an exchange in which each side moves on a different question'),
 ('a reservation of position', 'a statement that a side is not yet bound'),
 ('a subject to confirmation text', 'text agreed by delegates and not yet by capitals'),
 ('a provisional agreement', 'agreement that holds until the whole is settled'),
 ('a reopening', 'the return to a question previously treated as closed'),
 ('a lifting of brackets', 'the removal of brackets once a disagreement is resolved')],
v_a=[('Wording left unclear on purpose is ____________.', 'constructive ambiguity'),
     ('A text put forward by the chair on the chair’s own responsibility is a ____________.', 'chair’s text'),
     ('Wording offered to carry two positions at once is a ____________.', 'bridging proposal'),
     ('The tying of one question to another for bargaining is a ____________.', 'linkage'),
     ('The removal of brackets once a disagreement is resolved is a ____________.', 'lifting of brackets'),
     ('Text agreed by delegates and not yet by capitals is a ____________.', 'subject to confirmation text'),
     ('The return to a question previously treated as closed is a ____________.', 'reopening'),
     ('A number inserted so that the sentence can be read is a ____________.', 'placeholder figure')],
v_b=[('A square bracket is the mark enclosing text', 'on which there is no agreement.'),
     ('A facilitator is a delegate asked', 'to find a way through one question.'),
     ('A package deal is an agreement in which', 'several questions are settled together.'),
     ('A reservation of position is a statement', 'that a side is not yet bound.'),
     ('A provisional agreement is agreement', 'that holds until the whole is settled.')],

g_title='Grammar: the subjunctive in formal requirement',
g_rule=['After request, propose, require, insist and recommend, use the base form: that it be '
        'retained.',
        'The base form does not change for person or number: that he be, that they be.',
        'The negative is that it not be, without do.',
        'Should plus infinitive is possible and weaker; in a text, prefer the base form.'],
g_fig=('LOOSE',
       ['The delegation requests that the bracket is retained.',
        'We propose the figure should maybe be fixed.',
        'He insisted that notice is given.',
        'The chair recommended that it was not reopened.'],
       'PRECISE',
       ['The delegation requests that the bracket be retained.',
        'The delegation proposes that the figure be fixed at the 2024 level.',
        'He insisted that notice be given in writing.',
        'The chair recommended that the question not be reopened.'],
       'an indicative, a hedged modal, a past indicative and a wrong negative',
       'four requirements in the base form, each committing somebody'),
g_fig_cap='The subjunctive is not decoration; the indicative turns a demand into a description.',
g_a=[('The delegation requests that the bracket ____________ retained.', 'be'),
     ('The delegation proposes that the figure ____________ fixed at the 2024 level.', 'be'),
     ('He insisted that notice ____________ given in writing.', 'be'),
     ('The chair recommended that the question ____________ be reopened.', 'not'),
     ('We require that the text ____________ circulated 10 days in advance.', 'be'),
     ('The Ministry asks that the brackets ____________ lifted.', 'be'),
     ('Oristan proposed that the review ____________ held in 2027.', 'be'),
     ('It is essential that the record ____________ accurate.', 'be'),
     ('The chair requested that each delegation ____________ speak once.', 'should')],
g_b=[('After request, use ( the base form / the present tense ).', ['the base form', 'the present tense'], 0),
     ('The delegation requests that the bracket ____ retained.', ['is', 'be', 'was', 'will be'], 1),
     ('The negative is', ['that it does not be', 'that it not be', 'that it is not', 'that it be not had'], 1),
     ('Which verb does not take the subjunctive here?', ['insist', 'confirm', 'propose', 'require'], 1),
     ('He insisted that notice ____ in writing.', ['is given', 'be given', 'was given', 'gives'], 1),
     ('Which is weaker?', ['that it be retained', 'that it should be retained', 'that it not be retained', 'that it be lifted'], 1)],

d1=dict(title='Eleven brackets nobody owns',
        fig=(['Forty-one brackets.', 'Eleven silent for three rounds.'],
             ['Whose are they?', 'In two cases, nobody knows.']),
        cap='Samir Haddad and Nadia Barakat, before the fifth round.',
        lines=[('Samir', 'Forty-one sets of brackets. Eleven of them have not been mentioned by '
                         'any delegation for three rounds.'),
               ('Nadia', 'Which eleven?'),
               ('Samir', 'Articles 4, 9, 11, 12, 14, 16, 19, 22, 23, 28 and 31. Four were '
                         'inserted by officers who have left their posts, two of them ours.'),
               ('Nadia', 'And the disagreements?'),
               ('Samir', 'In two cases neither side can say what the disagreement was. The '
                         'bracket is there, the two variants are there, and nobody now in the '
                         'room knows why either was preferred.'),
               ('Nadia', 'That is worse than it sounds, because a bracket is not neutral. Every '
                         'new reader counts it as a live disagreement, so our text looks like a '
                         'negotiation with forty-one open questions.'),
               ('Samir', 'It has thirty, at most.'),
               ('Nadia', 'And the eleven are doing damage in both capitals, because somebody '
                         'reporting on progress counts brackets. It is the only number a text '
                         'offers.'),
               ('Samir', 'So I will ask the chair to go through the eleven and ask of each '
                         'whether any delegation requests that it be retained.'),
               ('Nadia', 'That is the right question and it is also a risk. Asking makes '
                         'somebody look at a provision they had stopped thinking about.'),
               ('Samir', 'Which may reopen something that was quietly dying.'),
               ('Nadia', 'Twice in my experience it has. The rest of the time it clears half the '
                         'text in an hour. I would still ask.')],
        a=[('How many brackets had been silent for three rounds?', 'eleven of forty-one'),
           ('What happened to four of them?', 'they were inserted by officers who have left their posts'),
           ('Why is a bracket not neutral?', 'because every new reader counts it as a live disagreement'),
           ('Why does the number matter in both capitals?', 'because somebody reporting progress counts brackets, the only number a text offers'),
           ('What is the risk of asking?', 'it makes somebody look at a provision they had stopped thinking about')],
        b=[('Four were inserted by officers who have ____________ their posts.', 'left'),
           ('Nobody now in the ____________ knows why either was preferred.', 'room'),
           ('Somebody reporting on progress counts ____________.', 'brackets'),
           ('It may reopen something that was quietly ____________.', 'dying')]),
d2=dict(title='Who is protected by each variant',
        fig=(['Two variants, one bracket.', 'And who does each protect?'],
             ['That is not in the text.', 'It is the only thing worth knowing.']),
        cap='Samir and Dr Hana Mourad, on the bracket report.',
        lines=[('Hana', 'Your report gives the round, the proposer and the last mention. It does '
                        'not say what each variant is for.'),
               ('Samir', 'It cannot. What a variant is for is in somebody’s head or in a round '
                         'brief, and often it is in neither.'),
               ('Hana', 'Then half the value is missing. A bracket with two variants is only '
                        'tractable if somebody can say which interest each variant protects.'),
               ('Samir', 'I agree, and I can only get that from the instruction files, which '
                         'exist for our variants and not for theirs.'),
               ('Hana', 'Do ours. If we know what our own variant protects in all forty-one '
                        'cases, we will find some where the answer is nothing.'),
               ('Samir', 'We found that already. In article 22 our variant protects a position '
                         'the Ministry abandoned in 2023.'),
               ('Hana', 'Then lift it.'),
               ('Samir', 'If I lift it, Oristan learns that we no longer hold the 2023 position, '
                         'which is information they do not have and which bears on three other '
                         'articles.'),
               ('Hana', 'So the bracket is now protecting the fact that we no longer need the '
                        'bracket.'),
               ('Samir', 'Which is not a position. It is a tactic, and I am not sure it is a '
                         'good one, because a bracket I cannot explain is a bracket my successor '
                         'will defend for reasons that do not exist.'),
               ('Hana', 'I do not have an answer. I would record in the file that article 22 is '
                        'held for presentational reasons only, and accept that recording it '
                        'somewhere is the most we can do.')],
        a=[('What does the report not say?', 'what each variant is for'),
           ('Why not?', 'because the purpose is in somebody’s head or a round brief, and often in neither'),
           ('What did they find in article 22?', 'that the Ministry’s variant protects a position abandoned in 2023'),
           ('Why not simply lift it?', 'because lifting it tells Oristan the 2023 position is no longer held'),
           ('How is it left?', 'unresolved; recorded in the file as held for presentational reasons only')],
        b=[('What a variant is for is in somebody’s ____________.', 'head'),
           ('Which interest each variant ____________.', 'protects'),
           ('A position the Ministry ____________ in 2023.', 'abandoned'),
           ('A bracket my ____________ will defend for reasons that do not exist.', 'successor')],
        unresolved=True),

speak=[('Require it formally',
        ['Student A: make six demands about your own work.',
         'Student B: restate each as a formal requirement with the subjunctive.',
         'Make two of them negative, correctly.']),
       ('Two variants',
        ['Take a sentence and write two versions that differ on one point.',
         'Say which interest each version protects.',
         'Your partner says which they would bracket.']),
       ('Whose bracket',
        ['Think of an unresolved question in your office.',
         'Say who is protected by leaving it unresolved.',
         'Say what would happen if somebody asked whether it was still live.'])],

ext_title='A text records disagreements and does not record their deaths, so brackets outlive the reasons for them',
ext_fig=figs.datatable('FORTY-ONE BRACKETS, ASSEMBLED',
                       ['', 'Figure', 'Note'],
                       [['brackets in the rolling text', '41', 'after 4 rounds'],
                        ['mentioned in the last 3 rounds', '30', '—'],
                        ['silent for 3 rounds', '11', '—'],
                        ['inserted by officers since departed', '4', '2 of them the Ministry’s'],
                        ['whose disagreement neither side can state', '2', '—'],
                        ['cleared in the 5th round in 40 minutes', '9', 'of the 11']]),
ext_fig_cap='Nine brackets, forty minutes, and the only new thing in the room was a list.',
ext=[
 'A rolling text carries its own history in square brackets. Each set records a point at which '
 'a delegation preferred that a disagreement be recorded rather than resolved, and over four '
 'rounds a long text accumulates dozens. This is a sound practice: a bracket is honest, it '
 'preserves both variants, and it allows a round to move on.',
 'What a text cannot do is record the end of a disagreement that nobody closes. A bracket is '
 'inserted by an officer with a reason; the officer is posted elsewhere; the capital’s '
 'position shifts; and the bracket remains, now owned by nobody and defended by no one, while '
 'reading exactly like the brackets that matter. Every new reader counts it as live, which '
 'matters more than it sounds, because the number of brackets is the only figure a text offers '
 'and both capitals use it to report progress.',
 'Assembling the history of the brackets is the use that has changed this, and it is clerical '
 'rather than clever. For each bracket: the round in which it first appeared, the delegation '
 'that proposed each variant, and the last round in which any delegation spoke to it. The '
 'records exist in reports and chairs’ texts; nobody had ever had the afternoon required to '
 'put them side by side.',
 'What the list enables is a question the chair can ask in forty minutes: does any delegation '
 'request that this bracket be retained? Nine of eleven silent brackets will usually fall. '
 'The risk, which is real and known to every delegate, is that asking makes somebody read a '
 'provision they had stopped thinking about, and occasionally a dying disagreement is revived '
 'by the enquiry.',
 'The limit of the method is that it establishes who proposed a variant and never what the '
 'variant was for. That lives in an instruction file, in a round brief, or in nobody’s '
 'possession at all. A ministry can do this for its own variants and will find, as the '
 'Ministry did, that some of its own brackets protect positions it no longer holds, which '
 'opens a question the list cannot answer: whether to lift a bracket and reveal the change, or '
 'keep one whose purpose a successor will not be able to discover.'],
dp1=('Bracket management',
     'Delegations in several multilateral and bilateral negotiations began assembling full '
     'bracket histories in 2025, enabling systematic clearance of provisions no delegation '
     'maintained.',
     'Source: reported practice in treaty negotiation support, 2025–2026.'),
e_a=[('Why is bracketing a sound practice?', 'it is honest, preserves both variants and lets a round move on'),
     ('What can a text not record?', 'the end of a disagreement that nobody closes'),
     ('Why does the number of brackets matter?', 'it is the only figure a text offers and both capitals report progress with it'),
     ('What does the assembly consist of?', 'the round of first appearance, the proposer of each variant, and the last mention'),
     ('What is the limit of the method?', 'it establishes who proposed a variant, never what the variant was for')],
e_b=[('Bracketing is a bad practice.', 'F'),
     ('A bracket can be owned by nobody.', 'T'),
     ('The assembly requires new records.', 'F'),
     ('Asking about a silent bracket is risk-free.', 'F'),
     ('The method can say what a variant protects.', 'F'),
     ('Some brackets protect abandoned positions.', 'T')],

w_model=(
 'Purpose: assemble the history of every bracket in the rolling text so that the delegation '
 'can ask the chair to clear those no delegation maintains. Scope: the 41 bracketed passages '
 'in the text as it stood after the 4th round; passages agreed and unbracketed are out of '
 'scope. Inputs: the 4 rolling texts, the chairs’ texts, and the Ministry’s round reports. '
 'Criteria: for each bracket give the round in which it first appeared, the delegation that '
 'proposed each variant, and the last round in which any delegation spoke to it; where the '
 'proposer cannot be established from the records, say so and do not infer it from the '
 'wording; state nothing about what any variant protects. Done: 1 table of 41 rows, with the '
 'brackets unmentioned for 3 rounds listed separately, by the Friday before the round. '
 'Fallback: where a bracket cannot be traced to a round, place it in a fourth list headed '
 'origin not established.'),
w_fig=figs.spec_card('THE TASKING FOR A BRACKET HISTORY',
                     [('Purpose', 'clear the brackets no delegation maintains'),
                      ('Scope', 'the 41 bracketed passages after round 4'),
                      ('Inputs', 'the 4 rolling texts, chairs’ texts and round reports'),
                      ('Criteria', 'first round, proposer, last mention; no inference; no purposes'),
                      ('Done', '1 table of 41 rows, silent brackets listed separately'),
                      ('Fallback', 'untraceable: a fourth list, origin not established')]),
w_fig_cap='State nothing about what any variant protects: that is an instruction file, not a text.',
w_task='Write a tasking to assemble the history of unresolved points in your own work.',
w_steps=['Say what the assembly is to enable.',
         'Name the passages and the versions covered.',
         'Name the records that may be used.',
         'Forbid inference about proposers and purposes.',
         'Say where an untraceable item goes.'],
w_bank=['Assemble … so that … can …',
        'Cover … ; … are out of scope.',
        'Work from … , … and …',
        'For each … give … , … and … ; where … cannot be established, say so and do not … ; state nothing about …',
        'Where … cannot be traced … , place it in …'],
w_check=['Is inference from wording forbidden?',
         'Are purposes excluded from the output?',
         'Are silent items listed separately?',
         'Is there a home for untraceable items?'],

t_title='Bracketed text and the language of compromise',
t_fig=figs.split('A BRACKET',
                 'Records',
                 ['that there was a disagreement',
                  'both variants, exactly',
                  'who proposed each, if the records survive',
                  'that a round could move on'],
                 'Does not record',
                 ['what the disagreement was about',
                  'what each variant protects',
                  'that the disagreement has ended',
                  'that nobody now maintains it']),
t_fig_cap='Everything in the right-hand column has to be supplied by a person or it is lost.',
t_body=[
 'Bracketing is an honest device and should be defended. A delegation that prefers a '
 'disagreement be recorded rather than resolved keeps both variants intact and lets a round '
 'proceed, and a text without brackets after four rounds is usually a text in which somebody '
 'conceded without authority.',
 'The defect is structural and nothing in the practice addresses it. A text records '
 'disagreements and has no way to record their deaths. An officer inserts a bracket for a '
 'reason, is posted elsewhere, the capital’s position moves, and the bracket remains, '
 'indistinguishable from the live ones and counted by every reader as an open question. Since '
 'the number of brackets is the only figure a text offers, both capitals report progress with '
 'a number that is wrong.',
 'The remedy is clerical. Assemble, for each bracket, the round it first appeared, who '
 'proposed each variant and the last round anybody spoke to it; the records exist and nobody '
 'has ever had the afternoon. Then a chair can ask of each silent bracket whether any '
 'delegation requests that it be retained, and most will fall. Two limits remain: asking can '
 'revive a dying disagreement, and no assembly can say what a variant was for, which lives in '
 'an instruction file or in nobody’s possession.'],
t_say=[('Ask the question: ', 'Does any delegation request that this bracket be retained?'),
       ('Separate the silent: ', '11 brackets unmentioned for 3 rounds, listed separately.'),
       ('Refuse the inference: ', 'Proposer not established; not inferred from the wording.')],
t_bound=('A bracket history establishes what the records contain: a round, a proposer, a last '
         'mention. It cannot establish what either variant protects, cannot tell a live '
         'disagreement from a dead one without asking a delegation, and cannot see a position '
         'a capital abandoned without telling anybody. The assembly makes a question askable; '
         'it does not answer it.'),
t_a=[('Does any delegation request that this bracket ____________ retained?', 'be'),
     ('11 brackets unmentioned for 3 ____________.', 'rounds'),
     ('Proposer not established; not ____________ from the wording.', 'inferred'),
     ('A text records disagreements and has no way to record their ____________.', 'deaths'),
     ('The only figure a text ____________.', 'offers'),
     ('Asking can ____________ a dying disagreement.', 'revive')],
t_b_rubric='Rewrite each as a formal requirement in the subjunctive.',
t_b=[('The delegation requests that the bracket is retained.', 'the delegation requests that the bracket be retained'),
     ('We propose the figure should maybe be fixed.', 'the delegation proposes that the figure be fixed at the 2024 level'),
     ('He insisted that notice is given.', 'he insisted that notice be given in writing'),
     ('The chair recommended that it was not reopened.', 'the chair recommended that the question not be reopened')],

case=dict(
 title='The Decision Room · Article 22',
 brief=[
  'The Ministry’s variant in article 22 protects a position the Ministry abandoned in 2023. '
  'Nobody on the Oristani side knows that the position has been abandoned.',
  'Lifting the bracket would settle article 22 and would also disclose the change, which bears '
  'on three other articles still in dispute.',
  'Samir wants the position recorded in the file and the bracket kept for now. Hana agrees and '
  'is uneasy. Nadia Barakat says a bracket nobody can explain will be defended by somebody who '
  'never knew why.'],
 exhibit=figs.datatable('ARTICLE 22',
                        ['', 'Finding', 'Note'],
                        [['the Ministry’s variant', 'protects the 2023 position', 'abandoned'],
                         ['Oristan’s knowledge of the change', 'none', 'as far as is known'],
                         ['other articles affected by the change', '3', 'still bracketed'],
                         ['value of article 22 itself', 'low', 'section’s assessment'],
                         ['officers who know the history', '2', 'both in this section'],
                         ['anything recorded on the file', 'nothing', 'until now']]),
 exhibit_cap='Two officers hold the whole explanation and the file holds none of it.',
 exhibit_note='Both officers expect to be in different posts within 3 years.',
 voices=[('Samir Haddad', 'Legal and Treaties',
          'Keep it for now and record on the file exactly why: held for presentational reasons, '
          'no substantive position behind it, review at the next round.'),
         ('Nadia Barakat', 'Multilateral Affairs, Geneva',
          'Record it and expect the record to fail. In Geneva I have inherited brackets with '
          'notes on them and defended them anyway, because the note said presentational and the '
          'room said otherwise.'),
         ('Dr Hana Mourad', 'Policy Planning',
          'Then put a date on it. A bracket held for presentational reasons falls at the next '
          'round unless somebody renews the reason in writing. That way the default is lifting '
          'rather than keeping.')],
 steps=[('Find it', 'What does the Ministry’s variant protect?'),
        ('Compare it', 'What are the three positions?'),
        ('Infer it', 'Why does Nadia expect the record to fail?'),
        ('Weigh it', 'Tactical concealment against a bracket nobody can explain.'),
        ('Decide', 'What happens to article 22?')],
 analysis=[('Find it. How many other articles are affected by the change?', 'three, all still bracketed'),
           ('Compare it. What does Hana propose?', 'that the bracket fall at the next round unless the reason is renewed in writing'),
           ('Infer it. What is Nadia’s experience?', 'that she has defended inherited brackets despite notes saying presentational'),
           ('Weigh it. Who holds the explanation?', 'two officers, both expecting different posts within three years'),
           ('Decide. What would you do?', 'answers vary; an expiry date makes keeping the bracket require an act')],
 decision='Write what is done with article 22 and with brackets like it.',
 decision_steps=['Say whether the bracket is kept.',
                 'Say what is recorded, and where.',
                 'Say what happens if nobody renews the reason.',
                 'Say what the rule is for any bracket held presentationally.'],
 bank=['The bracket in article 22 is …',
       'It is recorded on the file that …',
       'Unless the reason is renewed in writing before … , the bracket …',
       'Any bracket held for presentational reasons …',
       'This is reviewed …'],
 outcome='The bracket was kept with a recorded reason and an expiry: unless renewed in writing '
         'before the next round, it would be lifted. It was renewed once and then not renewed, '
         'and fell at the seventh round without any decision having to be taken. The rule was '
         'extended to all presentational brackets, of which five were identified across two '
         'negotiations; four fell within a year. Nadia says the expiry did what a note could '
         'not, because a note asks a successor to understand and an expiry asks a predecessor '
         'to act.',
 outcome_q=[('What was recorded, and with what condition?', 'the reason, with an expiry unless renewed in writing before the next round'),
            ('What does Nadia say the expiry achieved?', 'it asks a predecessor to act rather than a successor to understand')],
 tags=[]),

lab=dict(
 title='Brief Lab · Tell me about the brackets',
 task=['This is the tasking Samir first wrote when he asked for the bracket history.',
       'It came back with an assessment of what each bracket was about, most of which was '
       'invented.'],
 draft=['Go through the brackets in the text.',
        'Say what each disagreement is about.',
        'Note which ones are still live.',
        'Give the background where you can.',
        'Cover the whole text.',
        'Before the round.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and the second asks for something that exists in no document.',
 asked=['Round of first appearance, proposer, last mention',
        'Silent brackets listed separately',
        'No statement about purposes'],
 back=['41 confident accounts of what each bracket was about',
       'Inferences from the wording of each variant',
       'No separation of silent brackets'],
 gap='"What each disagreement is about" is not in the text, "still live" has no test, "the '
     'background where you can" invites inference, and "cover the whole text" does not say '
     'which version of it.',
 back_cap='Forty-one accounts, each plausible, drawn from the wording of the two variants and '
          'nothing else.',
 back_note='Line two is the failure. The purpose of a variant lives in an instruction file; '
           'asked for it from the text, any method will read it off the wording.',
 diagnosis=[('[1] "the brackets in the text" — in which version, after which round?', 'unscoped set'),
            ('[2] "what each disagreement is about" — assumes the text records purposes', 'hidden assumption'),
            ('[3] "which ones are still live" — live by what test?', 'undefined done'),
            ('[4] "the background where you can" — from the records, or inferred?', 'hidden assumption'),
            ('[5] "cover the whole text" — including agreed passages?', 'unscoped set'),
            ('[6] "before the round" — delivered to whom, and in what form?', 'undefined done')],
 rewrite='Rewrite the tasking so that only what the records contain is reported.',
 scaffold=['What the assembly is to enable',
           'The bracketed passages and the version, and what is excluded',
           'The rolling texts, chairs’ texts and round reports',
           'Round of first appearance, proposer, last mention; no inference; no purposes',
           'One table with silent brackets separate, and by when',
           'Where an untraceable bracket goes'],
 bank=['Assemble … so that … can ask …',
       'Cover … ; … are out of scope.',
       'Work from … , … and …',
       'For each bracket give … , … and … ; where … cannot be established, … ; state nothing about …',
       'Return 1 table of … rows, with … listed separately, by …',
       'Where a bracket cannot be traced … , place it in …'],
 check=['Is the version of the text identified?',
        'Is inference about purposes forbidden?',
        'Is "live" replaced by a records-based test?',
        'Is the delivery named and dated?'],
 model=['Assemble the history of every bracket in the rolling text so that the delegation can ask the chair to clear those no delegation maintains',
        'The 41 bracketed passages in the text as it stood after the 4th round; passages agreed and unbracketed are out of scope',
        'The 4 rolling texts, the chairs’ texts, and the Ministry’s round reports',
        'For each bracket give the round in which it first appeared, the delegation that proposed each variant, and the last round in which any delegation spoke to it; where the proposer cannot be established from the records, say so and do not infer it from the wording; state nothing about what any variant protects',
        '1 table of 41 rows, with the brackets unmentioned for 3 rounds listed separately, by the Friday before the round',
        'Where a bracket cannot be traced to a round, place it in a fourth list headed origin not established'],
 cost='41 invented accounts of disagreements, 2 of which were quoted in a round brief before '
      'anybody checked whether a document supported them.'),

rev_fig=figs.split('FORMAL REQUIREMENT',
                   'Weak',
                   ['requests that the bracket is retained',
                    'proposes the figure should maybe be fixed',
                    'insisted that notice is given',
                    'recommended that it was not reopened'],
                   'Correct',
                   ['requests that the bracket be retained',
                    'proposes that the figure be fixed',
                    'insisted that notice be given',
                    'recommended that it not be reopened']),
rev_fig_cap='Request, propose, require, insist, recommend — then the base form.',
rev=dict(
 read=[('A bracket records', ['a resolution', 'a disagreement', 'a concession', 'a date'], 1),
       ('A text cannot record', ['both variants', 'the death of a disagreement', 'the proposer', 'the round'], 1),
       ('The assembly can establish', ['what a variant protects', 'who proposed each variant', 'the capital’s position', 'the chair’s view'], 1),
       ('In the Decision Room, what was attached to the bracket?', ['nothing', 'an expiry unless renewed', 'a new variant', 'a footnote'], 1)],
 listen_text='An officer inserts a bracket for a reason, is posted elsewhere, the capital’s '
             'position moves, and the bracket remains, indistinguishable from the live ones '
             'and counted by every reader as an open question.',
 listen=[('An officer inserts a bracket for a ____________.', 'reason'),
         ('Is ____________ elsewhere.', 'posted'),
         ('Indistinguishable from the ____________ ones.', 'live'),
         ('Counted by every reader as an ____________ question.', 'open')],
 speak=['Make three formal requirements about your work in the subjunctive.',
        'Say who is protected by an unresolved question in your office.'],
 write='Write one line asking a chair to clear a silent bracket.',
 vocab=[('Wording left unclear on purpose is ____________.', 'constructive ambiguity'),
        ('Wording offered to carry two positions at once is a ____________.', 'bridging proposal'),
        ('The tying of one question to another for bargaining is a ____________.', 'linkage'),
        ('The removal of brackets once a disagreement is resolved is a ____________.', 'lifting of brackets'),
        ('Text agreed by delegates and not yet by capitals is a ____________.', 'subject to confirmation text')],
 gram=[('The delegation requests that the bracket ____________ retained.', 'be'),
       ('The delegation proposes that the figure ____________ fixed at the 2024 level.', 'be'),
       ('He insisted that notice ____________ given in writing.', 'be'),
       ('The chair recommended that the question ____________ be reopened.', 'not'),
       ('It is essential that the record ____________ accurate.', 'be')]),

found=['Count the unresolved points in a document your office is working on.',
       'Find one that nobody has mentioned for three months.',
       'Ask who is protected by leaving it unresolved.',
       'Write three formal requirements in the subjunctive.'],
end_line='A text records disagreements and never records their deaths.',
end_next='Next: What Was Agreed Before',
)
