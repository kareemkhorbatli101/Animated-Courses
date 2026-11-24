# -*- coding: utf-8 -*-
import figs

U = dict(
num=4, title='What Was Agreed Before',
gram='nominalisation in positions and texts',
ai='precedent: what has been agreed before, and where',
strap='CEFR B2 · Grammar: nominalisation · AI: what was agreed before',
cando=['form and unpack nominalisations in formal text',
       'see when a nominalisation hides who must act',
       'say what a precedent search can and cannot establish',
       'distinguish a precedent from an analogous case that does not hold',
       'write a precedent tasking that requires the differences as well as the matches'],
hero=('WE HAVE AGREED THIS BEFORE',
      ['Eleven instruments contain the formula, which settled the argument in the room.',
       'In nine of the eleven the Ministry was the party receiving, not the party paying.'],
      [(730, 'blue', 'long'), (1390, 'teal', 'short'),
       (2050, 'purple', 'long'), (2690, 'orange', 'short')]),
hero_cap='Legal and Treaties, the morning after the formula was accepted.',

warm=['How does your office find out what it agreed to in the past?',
      'When is an earlier case a precedent, and when is it merely similar?',
      'What would you need to know about a precedent before relying on it?'],
read=[
 'In October the Oristani delegation proposed a formula on the allocation of inspection costs '
 'and observed that the Ministry had accepted the same formula before. Samir Haddad asked for '
 'half an hour and ran a precedent search across the Ministry’s own treaty collection.',
 'Eleven instruments contained the formula, word for word. On that basis the Ministry accepted '
 'it, the point was settled, and the round moved on two hours earlier than it would otherwise '
 'have done.',
 'The following morning Samir read the eleven instruments properly. In nine of them the '
 'Ministry was the party receiving the inspection and in two it was the party paying. The '
 'formula allocates costs to the party paying. The Ministry had accepted, by precedent, a '
 'formula that had never before operated against it.',
 'Nothing had gone wrong with the search. It had been asked which instruments contained the '
 'formula and it had answered correctly and completely. It had not been asked which side of '
 'the formula the Ministry had been on, because nobody had thought to ask, the question being '
 'obvious once put and invisible until it is.',
 'The section now runs precedent searches in two halves. The first lists every instrument '
 'containing the provision. The second states, for each, the Ministry’s position in that '
 'instrument and anything in it that differs materially from the case in hand. Samir says the '
 'second half takes four times as long and is the whole of the value, and that a precedent '
 'without its differences is not a precedent but a coincidence of wording.'],
c_a=[('What did Oristan propose?', 'a formula on the allocation of inspection costs, saying the Ministry had accepted it before'),
     ('What did the search find?', 'eleven instruments containing the formula word for word'),
     ('What did Samir find the next morning?', 'that in nine of the eleven the Ministry was the receiving party'),
     ('What does the formula do?', 'it allocates costs to the party paying'),
     ('What had the search not been asked?', 'which side of the formula the Ministry had been on'),
     ('What are the two halves now?', 'the instruments containing the provision, and the Ministry’s position and material differences in each')],
c_b=[('The formula appeared in eleven instruments.', 'T'),
     ('The search answered incorrectly.', 'F'),
     ('In two instruments the Ministry was the paying party.', 'T'),
     ('Nobody had thought to ask which side the Ministry was on.', 'T'),
     ('The second half of the search is quicker.', 'F'),
     ('Samir calls a precedent without differences a coincidence of wording.', 'T')],
c_c=[('The round moved on two hours ____________.', 'earlier'),
     ('The formula allocates costs to the party ____________.', 'paying'),
     ('A formula that had never before operated ____________ it.', 'against'),
     ('Obvious once put and ____________ until it is.', 'invisible'),
     ('Anything in it that differs ____________ from the case in hand.', 'materially'),
     ('A precedent without its differences is a ____________ of wording.', 'coincidence')],
c_d=[('The search was ( correctly answering the wrong question / wrong ).', ['correctly answering the wrong question', 'wrong'], 0),
     ('In how many instruments was the Ministry the paying party?', ['nine', 'two', 'eleven', 'none'], 1),
     ('How much longer does the second half take?', ['twice', 'four times', 'half', 'the same'], 1),
     ('What does the second half state?', ['the wording', 'the Ministry’s position and material differences', 'the dates', 'the parties'], 1),
     ('What did the search save in the room?', ['nothing', 'two hours', 'a day', 'eleven instruments'], 1)],
c_e=('Nominalisation or plain verb? Put each in the right column.',
     [('the allocation of costs', 'nominalisation'),
      ('costs are allocated to', 'plain verb'),
      ('the giving of notice', 'nominalisation'),
      ('either Party gives notice', 'plain verb'),
      ('a determination by the Committee', 'nominalisation'),
      ('the Committee determines', 'plain verb')],
     ['nominalisation', 'plain verb']),

v_fig_title='THE APPARATUS OF PRECEDENT',
v_fig=[('book', 'a precedent book'), ('doc', 'a model clause'), ('key', 'a standard provision'),
       ('pin', 'an analogous case'), ('shield', 'a saving clause'), ('bulb', 'a departure from precedent')],
v_fig_cap='Six words for the Ministry’s memory of what it has agreed.',
vocab=[
 ('an earlier case', 'a case relied on to settle a present one'),
 ('a distinguishing feature', 'the difference that stops an earlier case from applying'),
 ('a line of practice', 'a series of cases treated consistently over time'),
 ('a departure from precedent', 'a decision taken against earlier practice'),
 ('an analogous case', 'a case similar enough to be worth comparing'),
 ('a one-off arrangement', 'an arrangement made for a single case and not to be followed'),
 ('a model clause', 'a provision kept ready for reuse'),
 ('a standard provision', 'a provision normally included without negotiation'),
 ('a derogation', 'a permitted departure from a general rule'),
 ('an exception clause', 'a provision stating when the rule does not apply'),
 ('a saving clause', 'a provision preserving rights that would otherwise be affected'),
 ('a without-prejudice formula', 'wording that prevents a step from affecting a position'),
 ('a course of dealing', 'the way two parties have in fact behaved towards each other'),
 ('a usage', 'a practice so general that parties expect it'),
 ('a prior practice', 'what was done before the present case'),
 ('a binding precedent', 'an earlier case that must be followed'),
 ('a persuasive precedent', 'an earlier case that may be followed but need not be'),
 ('a precedent book', 'the collection in which precedents are kept and indexed'),
 ('a clause bank', 'an organised store of provisions available for reuse'),
 ('an unhelpful precedent', 'an earlier case whose existence weakens a present position')],
v_a=[('The difference that stops an earlier case from applying is a ____________.', 'distinguishing feature'),
     ('A provision preserving rights that would otherwise be affected is a ____________.', 'saving clause'),
     ('An arrangement made for a single case and not to be followed is a ____________.', 'one-off arrangement'),
     ('An earlier case whose existence weakens a present position is an ____________.', 'unhelpful precedent'),
     ('The way two parties have in fact behaved towards each other is a ____________.', 'course of dealing'),
     ('A permitted departure from a general rule is a ____________.', 'derogation'),
     ('An organised store of provisions available for reuse is a ____________.', 'clause bank'),
     ('An earlier case that may be followed but need not be is a ____________.', 'persuasive precedent')],
v_b=[('An earlier case is a case relied on', 'to settle a present one.'),
     ('A line of practice is a series of cases', 'treated consistently over time.'),
     ('A usage is a practice so general', 'that parties expect it.'),
     ('A without-prejudice formula is wording that prevents', 'a step from affecting a position.'),
     ('A precedent book is the collection in which', 'precedents are kept and indexed.')],

g_title='Grammar: nominalisation in positions and texts',
g_rule=['A nominalisation turns a verb into a noun: allocate becomes the allocation of.',
        'It allows a provision to state a thing without naming who does it.',
        'That is useful in a text and dangerous in an instruction.',
        'To test a nominalisation, turn it back into a verb and ask who the subject is.'],
g_fig=('LOOSE',
       ['The allocation of costs shall be in accordance with Annex 2.',
        'Notification shall take place within 30 days.',
        'A determination shall be made by the Committee.',
        'The review of the fee shall occur in 2027.'],
       'PRECISE',
       ['Oristan shall bear the costs of inspection, as set out in Annex 2.',
        'The Party carrying out the inspection shall notify the other within 30 days.',
        'The Committee shall determine the question within 60 days of referral.',
        'The Parties shall review the fee in 2027.'],
       'four provisions in which no party is named',
       'four provisions in which somebody has to act'),
g_fig_cap='Every nominalisation in a text is a question about who: sometimes deliberately.',
g_a=[('The ____________ (allocate) of costs shall be in accordance with Annex 2.', 'allocation'),
     ('____________ (notify) shall take place within 30 days.', 'Notification'),
     ('A ____________ (determine) shall be made by the Committee.', 'determination'),
     ('The ____________ (review) of the fee shall occur in 2027.', 'review'),
     ('The ____________ (give) of notice shall be in writing.', 'giving'),
     ('____________ (settle) of the dispute shall be sought in good faith.', 'Settlement'),
     ('The ____________ (apply) of this Article is subject to Article 9.', 'application'),
     ('____________ (implement) shall begin on 1 January.', 'Implementation'),
     ('The ____________ (interpret) of the Annex is a matter for the Committee.', 'interpretation')],
g_b=[('A nominalisation turns a verb into a ( modal / noun ).', ['modal', 'noun'], 1),
     ('What does it allow a provision to omit?', ['the date', 'who acts', 'the annex', 'the figure'], 1),
     ('Where is it dangerous?', ['in a treaty', 'in an instruction', 'in a preamble', 'in an annex'], 1),
     ('How do you test one?', ['count the words', 'turn it back into a verb and ask who', 'check the annex', 'read it aloud'], 1),
     ('Allocate becomes', ['allocating of', 'the allocation of', 'allocatement', 'allocative'], 1),
     ('Which names an actor?', ['the allocation of costs', 'Oristan shall bear the costs', 'notification shall take place', 'a determination shall be made'], 1)],

d1=dict(title='Which side were we on?',
        fig=(['Eleven instruments, same formula.', 'And in nine we were receiving.'],
             ['The search was right.', 'The question was wrong.']),
        cap='Samir Haddad and Lina Khalil, the morning after.',
        lines=[('Samir', 'Eleven instruments contain the formula. I checked that in the room and '
                         'I was right about it.'),
               ('Lina', 'And this morning?'),
               ('Samir', 'In nine of the eleven the Ministry was the party receiving the '
                         'inspection. The formula puts the cost on the party paying. We have '
                         'accepted a provision that has never once operated against us.'),
               ('Lina', 'Did Oristan know?'),
               ('Samir', 'I would assume so. It is the kind of thing a good legal adviser '
                         'notices, and their adviser is good.'),
               ('Lina', 'So they said the Ministry has agreed this before, which is true, and '
                        'let you do the rest.'),
               ('Samir', 'They said a true thing and I supplied the inference. The search '
                         'answered what I asked, completely and in four minutes, and what I '
                         'asked was which instruments contain the words.'),
               ('Lina', 'You could have asked which side we were on.'),
               ('Samir', 'I could, and it did not occur to me, and I have been doing this for '
                         'eleven years. The question is obvious the moment somebody says it out '
                         'loud and invisible until then, which makes it exactly the kind of '
                         'question that has to be in a form rather than in a head.'),
               ('Lina', 'Can the provision be reopened?'),
               ('Samir', 'Not without cost. It can be qualified in Annex 2, which is the work I '
                         'am doing instead of the work I had planned.'),
               ('Lina', 'Then put the question in the form today, before you do the annex.')],
        a=[('How many instruments contained the formula?', 'eleven'),
           ('What was the Ministry’s position in nine of them?', 'the party receiving the inspection'),
           ('Who supplied the inference?', 'Samir; Oristan said only a true thing'),
           ('Why does the question need to be in a form?', 'because it is obvious once said and invisible until then'),
           ('Can the provision be reopened?', 'not without cost; it can be qualified in Annex 2')],
        b=[('A provision that has never once operated ____________ us.', 'against'),
           ('They said a true thing and I supplied the ____________.', 'inference'),
           ('In a form rather than in a ____________.', 'head'),
           ('It can be ____________ in Annex 2.', 'qualified')]),
d2=dict(title='Four times as long',
        fig=(['The second half takes four times as long.', 'And is the whole of the value.'],
             ['Then the first half is free.', 'And worth what it costs.']),
        cap='Samir and Omar Nasri.',
        lines=[('Omar', 'You have split precedent searches in two. The first half is the list of '
                        'instruments. What is the second?'),
               ('Samir', 'For each instrument: what position the Ministry held in it, and '
                         'anything in it that differs materially from the case in hand.'),
               ('Omar', 'That is reading eleven instruments.'),
               ('Samir', 'It is reading eleven instruments, and it takes four times as long as '
                         'the search, and it is where the entire value sits. The list of matches '
                         'is a concordance. A precedent is a match plus the reasons it may not '
                         'apply.'),
               ('Omar', 'Can the second half be assembled too?'),
               ('Samir', 'Partly. Which party we were can be extracted, because it is on the '
                         'face of each instrument. Whether a difference is material cannot, '
                         'because material means material to the argument somebody is about to '
                         'have.'),
               ('Omar', 'So it lists candidate differences and a lawyer decides.'),
               ('Samir', 'It lists every difference it can see in the operative provisions and '
                         'the parties, and a lawyer marks which of them matter. On the eleven, '
                         'that was forty minutes rather than an afternoon.'),
               ('Omar', 'And Oristan will do the same thing to us.'),
               ('Samir', 'Oristan is already doing it, which is the actual change. The question '
                         'is no longer whether a precedent exists. Both sides can find that in '
                         'four minutes. The question is who has read the eleven.')],
        a=[('What is in the second half?', 'the Ministry’s position in each instrument and any material differences'),
           ('What does Samir call the list of matches?', 'a concordance'),
           ('What can be extracted and what cannot?', 'which party the Ministry was; not whether a difference is material'),
           ('How long did marking the differences take?', 'forty minutes rather than an afternoon'),
           ('What is the actual change?', 'that both sides can find precedents in minutes, so the question is who has read them')],
        b=[('The list of matches is a ____________.', 'concordance'),
           ('A precedent is a match plus the reasons it may not ____________.', 'apply'),
           ('Material means material to the ____________ somebody is about to have.', 'argument'),
           ('The question is who has ____________ the eleven.', 'read')]),

speak=[('Unpack the noun',
        ['Student A: read out six nominalisations from documents you use.',
         'Student B: turn each into a verb and name the actor.',
         'Say which ones hid the actor on purpose.']),
       ('Precedent or coincidence',
        ['Describe an earlier case your office relies on.',
         'Your partner asks three questions about how it differs from the present one.',
         'Say whether it still helps.']),
       ('Which side were we on',
        ['Take a provision your office has accepted before.',
         'Say which side of it you were on each time.',
         'Say what that changes.'])],

ext_title='A precedent search finds matching words in minutes; a precedent is a match plus the reasons it may not apply',
ext_fig=figs.source_check('THE FORMULA IN ELEVEN INSTRUMENTS',
                          [('the formula appears word for word', '11 instruments, collection', 'verified'),
                           ('the Ministry was a party in each', '11 instruments', 'verified'),
                           ('the Ministry was the receiving party', '9 of 11', 'verified'),
                           ('the Ministry was the paying party', '2 of 11', 'verified'),
                           ('in both of those, costs were capped', '2 of 11, annexes', 'verified'),
                           ('the present case resembles those 2', 'no document', 'none')]),
ext_fig_cap='Five rows establish the pattern. The sixth is the question the room was actually '
            'deciding.',
ext=[
 'Precedent is the working memory of a legal and treaty section, and it has always been kept '
 'badly. A collection of several hundred instruments, indexed by title and date, answers the '
 'question "where is the 2019 agreement" and not the question "have we accepted this formula '
 'before", which is the question a negotiator asks in a room with somebody waiting for an '
 'answer.',
 'A search across the collection answers the second question in minutes, exactly and '
 'completely. That is a change in what is possible in a negotiating round, and it is being '
 'used on both sides of every table: the delegation that says you have agreed this before can '
 'now be checked while it is still speaking, and so can the delegation doing the checking.',
 'The failure that follows is a failure of the question rather than of the answer. Asked which '
 'instruments contain a provision, a search returns the instruments containing the provision. '
 'It does not say which side of the provision the ministry was on, because it was not asked, '
 'and nothing in the list draws attention to the omission. Eleven instruments containing a '
 'formula on inspection costs look like eleven precedents, and if the ministry was the '
 'receiving party in nine of them, the formula has never once operated against it.',
 'So a precedent search needs two halves, and the second is the expensive one. For each '
 'matching instrument: the ministry’s position in it, which is on the face of the document '
 'and can be extracted, and every material difference from the case in hand, which cannot, '
 'because material means material to the argument about to be had. The practice that works is '
 'that the method lists candidate differences across the operative provisions and the parties, '
 'and a lawyer marks which matter. Forty minutes against an afternoon, and nothing is skipped.',
 'The deeper change in a negotiation is that the existence of a precedent has stopped being '
 'the question. Both sides can establish existence in four minutes; neither can be caught out '
 'by a half-remembered 2017 instrument; and the advantage has moved entirely to whichever '
 'delegation has read the eleven matches rather than counted them.'],
dp1=('Precedent search',
     'Legal and treaty sections in several foreign services introduced full-text precedent '
     'search across their own instrument collections in 2025, adding mandatory reporting of '
     'the ministry’s position in each matching instrument.',
     'Source: reported practice in diplomatic legal services, 2025–2026.'),
e_a=[('What question did an indexed collection answer?', 'where a named instrument is, not whether a formula has been accepted before'),
     ('Why does speed matter in a round?', 'because a claim about precedent can be checked while the other side is still speaking'),
     ('What is the failure?', 'a failure of the question: the search is not asked which side the ministry was on'),
     ('What is in the second half of a search?', 'the ministry’s position in each instrument and every material difference'),
     ('What has stopped being the question?', 'whether a precedent exists; both sides can establish that in minutes')],
e_b=[('Precedent collections answered the negotiator’s question well.', 'F'),
     ('Both sides now check claims in real time.', 'T'),
     ('A list of matches draws attention to what it omits.', 'F'),
     ('Whether a difference is material can be extracted automatically.', 'F'),
     ('The second half is the cheaper one.', 'F'),
     ('Reading the matches now matters more than counting them.', 'T')],

w_model=(
 'Purpose: establish whether the Ministry has accepted the inspection-costs formula before, '
 'and on which side of it, so that the delegation knows what the precedent is worth. Scope: '
 'the Ministry’s own instrument collection; instruments to which the Ministry is not a party '
 'are out of scope, as are drafts never concluded. Inputs: the collection and the text of the '
 'proposed provision. Criteria: list every instrument containing the formula, with its file '
 'reference and date; for each, state whether the Ministry was the paying or the receiving '
 'party; list every difference between that instrument and the present case in the operative '
 'provisions and the parties, without judging which differences are material. Done: 2 lists, '
 'matches and differences, with the Ministry’s position stated for every match, within 1 hour. '
 'Fallback: where the Ministry’s position in an instrument cannot be determined from its '
 'text, say so and do not infer it from the other instruments.'),
w_fig=figs.spec_card('THE TASKING FOR A PRECEDENT SEARCH',
                     [('Purpose', 'accepted before, and on which side'),
                      ('Scope', 'the Ministry’s own instruments; drafts excluded'),
                      ('Inputs', 'the collection and the proposed provision'),
                      ('Criteria', 'matches with references; the Ministry’s side; differences unjudged'),
                      ('Done', '2 lists with the position stated for every match, within 1 hour'),
                      ('Fallback', 'position undeterminable: say so, do not infer')]),
w_fig_cap='Which side of it is the clause that turns a concordance into a precedent search.',
w_task='Write a precedent tasking for a question in your own work.',
w_steps=['Say what the delegation must know beyond existence.',
         'Bound the collection and exclude what is not binding.',
         'Require the Ministry’s position in every match.',
         'Require differences to be listed but not judged.',
         'Say what to do where a position cannot be determined.'],
w_bank=['Establish whether … and on which … , so that …',
        'Cover … ; … are out of scope, as are …',
        'Work from … and …',
        'List every instrument … ; for each, state whether … ; list every difference … , without judging …',
        'Where … cannot be determined from its text, say so and do not …'],
w_check=['Is the Ministry’s position required for every match?',
         'Are differences listed without being judged?',
         'Are non-binding documents excluded?',
         'Is inference from other instruments forbidden?'],

t_title='Precedent: what was agreed before',
t_fig=figs.split('A PRECEDENT SEARCH',
                 'Establishes',
                 ['which instruments contain the words',
                  'their dates and file references',
                  'which party the Ministry was',
                  'what differs in the operative text'],
                 'Cannot establish',
                 ['whether a difference is material',
                  'what the formula was traded for',
                  'whether the earlier case was a one-off',
                  'whether the precedent helps you']),
t_fig_cap='The left column takes minutes. The right column is why a lawyer reads the eleven.',
t_body=[
 'A precedent collection indexed by title and date answers the question where is the 2019 '
 'agreement, and never answered the question a negotiator actually asks, which is whether the '
 'Ministry has accepted this formula before. A full-text search answers that in minutes, '
 'completely, and it can be done while the other side is still speaking. Take it: it is one of '
 'the clearest gains in this field, and both sides of every table now have it.',
 'Then ask the question that does not occur to anybody in the room. A search told to find '
 'instruments containing a provision will find them and will say nothing about which side of '
 'the provision the Ministry was on, because nothing in a list of matches draws attention to '
 'what the list omits. Eleven matches on a costs formula look like eleven precedents; if the '
 'Ministry was the receiving party in nine, the formula has never operated against it, and '
 'accepting it by precedent is accepting something new.',
 'So split the work. The first half lists the matches with their references. The second states '
 'the Ministry’s position in each, which is on the face of the instrument, and lists every '
 'difference from the present case in the operative provisions and the parties, leaving a '
 'lawyer to mark which differences matter, since material means material to the argument about '
 'to be had. The second half costs four times the first and carries all of the value: a match '
 'without its differences is a coincidence of wording.'],
t_say=[('Ask the second question: ', 'In each match, which party was the Ministry?'),
       ('Separate the judgement: ', 'List every difference; do not judge which are material.'),
       ('Refuse the inference: ', 'Position undeterminable in 1 instrument; not inferred from the others.')],
t_bound=('A search establishes the presence of words in documents. It cannot weigh a '
         'difference, cannot know what a formula was traded for in 2017, and cannot tell a '
         'line of practice from a one-off arrangement that was never meant to be followed. The '
         'advantage now goes to the delegation that has read its eleven matches, not the one '
         'that has counted them.'),
t_a=[('In each match, which ____________ was the Ministry?', 'party'),
     ('List every difference; do not judge which are ____________.', 'material'),
     ('Position undeterminable in 1 instrument; not ____________ from the others.', 'inferred'),
     ('Nothing in a list of matches draws attention to what the list ____________.', 'omits'),
     ('A match without its differences is a ____________ of wording.', 'coincidence'),
     ('The delegation that has ____________ its eleven matches.', 'read')],
t_b_rubric='Rewrite each provision so that the actor is named.',
t_b=[('The allocation of costs shall be in accordance with Annex 2.', 'Oristan shall bear the costs of inspection, as set out in Annex 2'),
     ('Notification shall take place within 30 days.', 'the Party carrying out the inspection shall notify the other within 30 days'),
     ('A determination shall be made by the Committee.', 'the Committee shall determine the question within 60 days of referral'),
     ('The review of the fee shall occur in 2027.', 'the Parties shall review the fee in 2027')],

case=dict(
 title='The Decision Room · Qualifying it in the annex',
 brief=[
  'The formula has been accepted in the round. It allocates inspection costs to the paying '
  'party, and the Ministry will be the paying party in this arrangement.',
  'In the two earlier instruments where the Ministry paid, the costs were capped in an annex. '
  'Nobody has yet proposed a cap here.',
  'Samir wants to propose the cap in Annex 2 as a drafting matter consistent with precedent. '
  'Lina says reopening anything in the annex invites Oristan to reopen article 7. Hana asks '
  'what happens if the cap is never proposed.'],
 exhibit=figs.datatable('THE ELEVEN MATCHES, READ',
                        ['', 'Figure', 'Note'],
                        [['instruments containing the formula', '11', 'word for word'],
                         ['Ministry as receiving party', '9', 'formula operated for us'],
                         ['Ministry as paying party', '2', '2014 and 2018'],
                         ['of those, costs capped in an annex', '2', 'both'],
                         ['cap level in those annexes', 'stated sum', 'different in each'],
                         ['present draft annexes', 'no cap', '—']]),
 exhibit_cap='Both times the Ministry paid, it capped. The present text does not.',
 exhibit_note='Oristan has not reopened article 7 since the Ministry restored its formula '
              'there in September.',
 voices=[('Samir Haddad', 'Legal and Treaties',
          'Propose the cap in Annex 2 and present it as consistency with our own practice, '
          'which it is. In both instruments where we paid, we capped.'),
         ('Lina Khalil', 'Bilateral Affairs',
          'Touch the annex and you invite a round on the annex, and article 7 is sitting there '
          'quietly agreed. I would carry the uncapped formula and live with it.'),
         ('Dr Hana Mourad', 'Policy Planning',
          'Then say what uncapped means. If the inspection programme grows, the Ministry pays '
          'whatever it costs for the life of the arrangement, and nobody has put a figure on '
          'that.')],
 steps=[('Find it', 'What did the Ministry do the last two times it paid?'),
        ('Compare it', 'What are the three positions?'),
        ('Infer it', 'Why does Lina want the annex left alone?'),
        ('Weigh it', 'An uncapped liability against reopening a settled article.'),
        ('Decide', 'Is the cap proposed, and how?')],
 analysis=[('Find it. In how many instruments did the Ministry pay?', 'two, in 2014 and 2018, capped in both'),
           ('Compare it. What does Samir propose?', 'the cap in Annex 2, presented as consistency with the Ministry’s own practice'),
           ('Infer it. What is Lina protecting?', 'article 7, quietly agreed, which a round on the annex might reopen'),
           ('Weigh it. What does uncapped mean?', 'that the Ministry pays whatever the programme costs for the life of the arrangement'),
           ('Decide. What would you do?', 'answers vary; the figure Hana asks for decides whether the risk is worth the reopening')],
 decision='Write what the Ministry does about the cap.',
 decision_steps=['Say whether the cap is proposed, and where.',
                 'Say how it is presented to Oristan.',
                 'Say what is done to protect article 7.',
                 'Say what figure the Ministry works to.'],
 bank=['The cap is …',
       'It is presented as …',
       'Article 7 is …',
       'The Ministry works to a figure of …',
       'This is reviewed …'],
 outcome='The cap was proposed in Annex 2, presented in two sentences as consistency with the '
         'Ministry’s own 2014 and 2018 practice, with the precedent references given. Oristan '
         'accepted it in the same round and did not reopen article 7. Samir says the two '
         'references did the work, because a proposal that cites the proposer’s own earlier '
         'practice is harder to read as a new demand; he adds that Lina’s fear was reasonable '
         'and that the thing that made it safe was having read the two instruments rather than '
         'knowing they existed.',
 outcome_q=[('How was the cap presented?', 'as consistency with the Ministry’s own 2014 and 2018 practice, with references'),
            ('What made the proposal safe?', 'having read the two instruments rather than merely knowing they existed')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · Have we agreed this before?',
 task=['This is the question Samir put during the round, written out as a tasking.',
       'It was answered correctly in four minutes and the Ministry accepted a provision that '
       'had never operated against it.'],
 draft=['Have we accepted this formula before?',
        'Check our agreements.',
        'Tell me where it appears.',
        'Include anything similar.',
        'Quickly, I am in a round.',
        'Just the list.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and the sixth one is the sentence that cost the Ministry the point.',
 asked=['The Ministry’s position in each match',
        'Differences listed and not judged',
        'A bounded collection, drafts excluded'],
 back=['11 instruments, correctly listed',
       'No statement of which side we were on',
       'Nothing about caps in the annexes'],
 gap='"This formula" does not say which version of it, "our agreements" does not bound the '
     'collection, "anything similar" invites unrelated instruments, and "just the list" '
     'excludes the half of the answer that mattered.',
 back_cap='A complete, correct list of eleven matches, in four minutes, answering a question '
          'nobody should have asked alone.',
 back_note='Line six is the failure. The list was what was asked for and the list is a '
           'concordance, not a precedent.',
 diagnosis=[('[1] "this formula" — as proposed today, or as the Ministry drafted it?', 'ambiguous referent'),
            ('[2] "check our agreements" — concluded instruments only, or drafts too?', 'ambiguous referent'),
            ('[3] "tell me where it appears" — and on which side of it we were?', 'hidden assumption'),
            ('[4] "anything similar" — similar by what test?', 'unstated criterion'),
            ('[5] "quickly, I am in a round" — assumes a 4-minute answer is a sufficient answer', 'hidden assumption'),
            ('[6] "just the list" — a list sufficient for what decision?', 'unstated criterion')],
 rewrite='Rewrite the tasking so that the Ministry’s position in each match is required.',
 scaffold=['What the delegation must know beyond existence',
           'The collection covered, and what is excluded',
           'The collection and the proposed text',
           'Matches with references; the Ministry’s side in each; differences listed, not judged',
           'Two lists and the time allowed',
           'What to do where a position cannot be determined'],
 bank=['Establish whether … and on which … , so that …',
       'Cover … ; … are out of scope, as are …',
       'Work from … and …',
       'List every instrument … ; for each, state … ; list every difference … , without …',
       'Return 2 lists … , within …',
       'Where … cannot be determined … , say so and do not …'],
 check=['Is the Ministry’s position in each match required?',
        'Is the collection bounded?',
        'Are differences unjudged?',
        'Is "just the list" replaced by two lists?'],
 model=['Establish whether the Ministry has accepted the inspection-costs formula before, and on which side of it, so that the delegation knows what the precedent is worth',
        'The Ministry’s own instrument collection; instruments to which the Ministry is not a party are out of scope, as are drafts never concluded',
        'The collection and the text of the proposed provision',
        'List every instrument containing the formula, with its file reference and date; for each, state whether the Ministry was the paying or the receiving party; list every difference between that instrument and the present case in the operative provisions and the parties, without judging which differences are material',
        '2 lists, matches and differences, with the Ministry’s position stated for every match, within 1 hour',
        'Where the Ministry’s position in an instrument cannot be determined from its text, say so and do not infer it from the other instruments'],
 cost='1 provision accepted by precedent that had never once operated against the Ministry, '
      'now requiring a cap to be negotiated into Annex 2.'),

rev_fig=figs.split('NOMINALISATION',
                   'Actor hidden',
                   ['The allocation of costs shall be …',
                    'Notification shall take place …',
                    'A determination shall be made …',
                    'The review of the fee shall occur …'],
                   'Actor named',
                   ['Oristan shall bear the costs …',
                    'The inspecting Party shall notify …',
                    'The Committee shall determine …',
                    'The Parties shall review the fee …']),
rev_fig_cap='Turn the noun back into a verb and ask who the subject is.',
rev=dict(
 read=[('A precedent search establishes', ['what a formula was traded for', 'which instruments contain the words', 'whether a difference matters', 'the chair’s view'], 1),
       ('In nine of eleven instruments the Ministry was', ['the paying party', 'the receiving party', 'not a party', 'the depositary'], 1),
       ('A match without its differences is', ['a precedent', 'a coincidence of wording', 'a usage', 'a derogation'], 1),
       ('In the Decision Room, what was proposed in Annex 2?', ['nothing', 'a cap', 'a new formula', 'a review date'], 1)],
 listen_text='Asked which instruments contain a provision, a search returns the instruments '
             'containing the provision. It does not say which side of the provision the '
             'ministry was on, because it was not asked, and nothing in the list draws '
             'attention to the omission.',
 listen=[('A search returns the instruments ____________ the provision.', 'containing'),
         ('Which ____________ of the provision the ministry was on.', 'side'),
         ('Because it was not ____________.', 'asked'),
         ('Nothing in the list draws attention to the ____________.', 'omission')],
 speak=['Say which side of a provision your office was on last time it used it.',
        'Turn three nominalisations from your work back into verbs with actors.'],
 write='Write one line requiring the Ministry’s position in every precedent match.',
 vocab=[('The difference that stops an earlier case from applying is a ____________.', 'distinguishing feature'),
        ('A provision preserving rights that would otherwise be affected is a ____________.', 'saving clause'),
        ('An earlier case whose existence weakens a present position is an ____________.', 'unhelpful precedent'),
        ('A permitted departure from a general rule is a ____________.', 'derogation'),
        ('An organised store of provisions available for reuse is a ____________.', 'clause bank')],
 gram=[('The ____________ (allocate) of costs shall be in accordance with Annex 2.', 'allocation'),
       ('____________ (notify) shall take place within 30 days.', 'Notification'),
       ('A ____________ (determine) shall be made by the Committee.', 'determination'),
       ('The ____________ (give) of notice shall be in writing.', 'giving'),
       ('____________ (implement) shall begin on 1 January.', 'Implementation')]),

found=['Find one provision your office has accepted before and check which side you were on.',
       'List the differences between that case and the present one.',
       'Turn three nominalisations in a document you use into verbs with actors.',
       'Ask who in your office has read the precedents it cites.'],
end_line='A match without its differences is a coincidence of wording.',
end_next='Next: Positions, Fallbacks, Red Lines',
)
