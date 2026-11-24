# -*- coding: utf-8 -*-
import figs

U = dict(
num=3, title='Even If',
gram='concessive clauses: while, even if, granted that',
ai='data you must not hand over',
strap='CEFR C1 · Grammar: concessive clauses · AI: data you must not hand over',
cando=['use while, even if, granted that and albeit accurately',
       'concede a point without conceding the argument',
       'establish whether you are permitted to send data somewhere',
       'distinguish a security question from a permission question',
       'state what must never leave, and on what authority'],
hero=('GRANTED THAT IT IS SECURE',
      ['Nobody doubted that the supplier was careful.',
       'The clause did not mention care. It said shall not be transmitted.'],
      [(760, 'purple', 'long'), (1500, 'orange', 'short'),
       (2200, 'teal', 'long'), (2840, 'blue', 'short')]),
hero_cap='Whether you may send it and whether it would be safe are two different questions.',

warm=['What data does your organisation hold that must not leave the building?',
      'Who established that, and where is it written?',
      'Has anybody checked whether your systems already send it somewhere?'],
read=[
 'The supplier’s system was, by every account, the most careful of the three. It encrypted '
 'material at rest and in transit, held certifications Marta Olsen had taken the trouble to '
 'verify, and had never reported a breach in eleven years of trading. While all of that was '
 'true, and while nobody in the room disputed any of it, the question Marta put to the '
 'project was a different one: are we permitted to send this material at all?',
 'The answer, established over nine days of reading contracts, was that for most clients they '
 'were and for some they were not. One hundred and ninety-one of the two hundred and thirty '
 'client agreements contained a confidentiality clause permitting disclosure to '
 'subcontractors engaged in performing the work. Thirty-one permitted it only with written '
 'notice. Eight forbade transmission outside the jurisdiction in terms that admitted no '
 'exception, and two of those eight were among the firm’s largest accounts.',
 'What made the finding awkward was not the eight. It was that the drafting system already in '
 'use had been sending material to a supplier’s infrastructure for two years, that nobody had '
 'ever asked where that infrastructure was, and that it turned out to be in two '
 'jurisdictions, one of which was outside the permitted set for the eight clients and for '
 'eleven of the thirty-one.',
 'Granted that no harm had occurred, and granted that the supplier was careful, the position '
 'was that the firm had been in breach of nineteen contracts for two years without knowing '
 'it. Marta’s advice was that the firm disclose this to all nineteen clients, which Thomas '
 'Reed described as volunteering for a problem nobody had noticed, and which Ines Carvalho '
 'accepted within an hour.',
 'Even if the disclosure had gone badly, Marta argued, the alternative was worse: a firm that '
 'knows it is in breach and continues is in a materially different position from a firm that '
 'did not know, and the difference arrives precisely at the moment somebody else discovers '
 'it. As it happened, seventeen of the nineteen replied without concern, one asked for a '
 'remediation plan, and one terminated.'],
c_a=[('What did Marta verify about the supplier?', 'its encryption and certifications, and that it had never reported a breach'),
     ('What was her different question?', 'whether the firm was permitted to send the material at all'),
     ('What did the contract review find?', '191 permitting subcontractor disclosure, 31 requiring notice, 8 forbidding transmission abroad'),
     ('What was the awkward discovery?', 'that the existing system had been sending material outside the permitted set for two years'),
     ('What happened after disclosure?', 'seventeen replied without concern, one asked for a plan, one terminated')],
c_b=[('The supplier had never reported a breach in eleven years.', 'T'),
     ('All 230 agreements permitted subcontractor disclosure.', 'F'),
     ('Nobody had asked where the existing supplier’s infrastructure was.', 'T'),
     ('Harm had occurred.', 'F'),
     ('Thomas supported the disclosure.', 'F'),
     ('One client terminated.', 'T')],
c_c=[('It encrypted material at rest and in ____________.', 'transit'),
     ('Permitting disclosure to ____________ engaged in performing the work.', 'subcontractors'),
     ('In terms that admitted no ____________.', 'exception'),
     ('Nobody had ever asked where that ____________ was.', 'infrastructure'),
     ('Volunteering for a problem nobody had ____________.', 'noticed'),
     ('The difference arrives at the moment somebody else ____________ it.', 'discovers')],
c_d=[('The decisive question was one of ( security / permission ).', ['security', 'permission'], 1),
     ('How many agreements forbade transmission abroad?', ['thirty-one', 'eight', 'nineteen', 'none'], 1),
     ('How many contracts had the firm been in breach of?', ['eight', 'nineteen', 'thirty-one', 'two'], 1),
     ('Thomas described the disclosure as', ['necessary', 'volunteering for a problem nobody had noticed', 'illegal', 'overdue'], 1),
     ('Marta’s argument was that knowing and continuing is', ['the same', 'materially different', 'safer', 'cheaper'], 1)],
c_e=('Which concessive? Put each sentence in the right column.',
     [('While the supplier is careful, the clause forbids it.', 'while'),
      ('Even if no harm occurred, we were in breach.', 'even if'),
      ('Granted that it is encrypted, we have no permission.', 'granted that'),
      ('The system is secure, albeit in two jurisdictions.', 'albeit'),
      ('While nobody disputed it, the question was different.', 'while'),
      ('Even if disclosure goes badly, the alternative is worse.', 'even if')],
     ['while', 'even if', 'granted that', 'albeit']),

v_fig_title='DATA YOU HOLD FOR SOMEBODY ELSE',
v_fig=[('key', 'confidentiality'), ('doc', 'a lawful basis'), ('bank', 'data residency'),
       ('scale', 'minimisation'), ('bulb', 'redaction'), ('chart', 'a subprocessor')],
v_fig_cap='Six words for the rules that decide where a client’s material may go.',
vocab=[
 ('confidentiality', 'the obligation not to disclose what you were told in confidence'),
 ('personal data', 'information relating to an identifiable living person'),
 ('a data subject', 'the person whom a piece of personal data is about'),
 ('consent', 'permission given freely, specifically and on an informed basis'),
 ('anonymisation', 'the irreversible removal of what identifies a person'),
 ('pseudonymisation', 'the replacing of identifiers with a key held separately'),
 ('a lawful basis', 'the ground on which processing data is legally permitted'),
 ('a processor', 'a party that handles data on another party’s instructions'),
 ('a controller', 'the party that decides why and how data is processed'),
 ('data residency', 'the requirement that data be held in a stated jurisdiction'),
 ('encryption at rest', 'the keeping of stored data in a form unreadable without a key'),
 ('redaction', 'the removal of particular content before material is handed over'),
 ('minimisation', 'the principle of handling no more data than the purpose requires'),
 ('purpose limitation', 'the rule that data may be used only for the purpose it was given for'),
 ('a breach', 'an incident in which data is exposed, lost or disclosed improperly'),
 ('exfiltration', 'the removal of data out of an organisation without authority'),
 ('a non-disclosure agreement', 'a contract binding a party not to disclose what it learns'),
 ('a subprocessor', 'a party engaged by your processor to handle the same data'),
 ('a privacy notice', 'the statement telling people what is done with their data'),
 ('a cross-border transfer', 'the sending of data from one jurisdiction to another')],
v_a=[('The requirement that data be held in a stated jurisdiction is ____________.', 'data residency'),
     ('A party engaged by your processor to handle the same data is a ____________.', 'subprocessor'),
     ('The principle of handling no more data than the purpose requires is ____________.', 'minimisation'),
     ('The rule that data may be used only for the purpose it was given for is ____________.', 'purpose limitation'),
     ('The replacing of identifiers with a key held separately is ____________.', 'pseudonymisation'),
     ('The removal of data out of an organisation without authority is ____________.', 'exfiltration'),
     ('The ground on which processing is legally permitted is a ____________.', 'lawful basis'),
     ('The removal of particular content before handing material over is ____________.', 'redaction')],
v_b=[('Confidentiality is the obligation not to disclose', 'what you were told in confidence.'),
     ('A controller is the party that decides', 'why and how data is processed.'),
     ('A processor is a party that handles data', 'on another party’s instructions.'),
     ('Anonymisation is the irreversible removal', 'of what identifies a person.'),
     ('A cross-border transfer is the sending of data', 'from one jurisdiction to another.')],

g_title='Grammar: concessive clauses',
g_rule=['While concedes a fact and keeps the main point: while that is true, the clause forbids it.',
        'Even if concedes a hypothetical: even if no harm occurred, we were in breach.',
        'Granted that concedes something the other party has argued, before answering it.',
        'Albeit introduces a short concessive phrase, not a clause with its own subject and verb.'],
g_fig=('LOOSE',
       ['Despite the supplier is careful, the clause forbids it.',
        'Even if no harm would occur, we were in breach.',
        'Granted it is encrypted, but we have no permission.',
        'The system is secure, albeit it is in two jurisdictions.'],
       'PRECISE',
       ['While the supplier is careful, the clause forbids it.',
        'Even if no harm occurred, we were in breach.',
        'Granted that it is encrypted, we have no permission.',
        'The system is secure, albeit in two jurisdictions.'],
       'four concessives with the wrong structure',
       'four that concede cleanly and keep the point'),
g_fig_cap='A concession made badly reads as an admission; made well it strengthens the point.',
g_a=[('____________ the supplier is careful, the clause forbids the transfer.', 'While'),
     ('____________ if no harm occurred, we were in breach for two years.', 'Even'),
     ('____________ that it is encrypted, we have no permission to send it.', 'Granted'),
     ('The arrangement is secure, ____________ in two jurisdictions.', 'albeit'),
     ('____________ nobody disputed the certifications, the question was different.', 'While'),
     ('____________ if the disclosure goes badly, the alternative is worse.', 'Even'),
     ('____________ that the risk is small, it is not ours to accept.', 'Granted'),
     ('The review took nine days, ____________ with three people on it.', 'albeit'),
     ('____________ the clause is unusual, it is perfectly clear.', 'While')],
g_b=[('Concessive clauses concede a point without conceding the ( argument / fact ).', ['argument', 'fact'], 0),
     ('____ the supplier is careful, the clause forbids it.', ['Despite', 'While', 'Albeit', 'Even'], 1),
     ('____ that it is encrypted, we have no permission.', ['Granted', 'Granting', 'Grant', 'Granted of'], 0),
     ('The system is secure, ____ in two jurisdictions.', ['albeit it is', 'albeit', 'although', 'despite'], 1),
     ('____ if no harm occurred, we were in breach.', ['Even', 'Although', 'Granted', 'While'], 0),
     ('Albeit introduces', ['a full clause', 'a short phrase', 'a question', 'a list'], 1)],

d1=dict(title='May we send it?',
        fig=(['The encryption is excellent.', 'I verified it myself.'],
             ['Then what is the objection?', 'We have not asked whether we may.']),
        cap='Marta and Jonas, before the trial.',
        lines=[('Jonas', 'You verified the certifications yourself and you are still blocking the '
                         'trial. Help me understand.'),
               ('Marta', 'I am not blocking it. I am asking a question that has not been asked, which '
                         'is whether we are permitted to send client material there.'),
               ('Jonas', 'It is encrypted in transit and at rest.'),
               ('Marta', 'While that is true, and I have no criticism of it, encryption answers '
                         'whether the material is safe. It does not answer whether we have '
                         'permission.'),
               ('Jonas', 'Permission from whom? The clients?'),
               ('Marta', 'From the two hundred and thirty confidentiality clauses we have signed, '
                         'which I have never read in one sitting and nor has anybody else.'),
               ('Jonas', 'How long will that take?'),
               ('Marta', 'Nine days with three of us. And I want to tell you the thing I expect to '
                         'find, so that you can tell me if I am wrong.'),
               ('Jonas', 'Go on.'),
               ('Marta', 'The system you already run has been sending material somewhere for two '
                         'years. I do not know where. I would like you to find out before I finish '
                         'the contracts, because if the two answers are incompatible we have a '
                         'different conversation.'),
               ('Jonas', 'I can find out this afternoon and I am fairly confident the answer is '
                         'fine.'),
               ('Marta', 'You may be right. Granted that you probably are, nobody has ever written '
                         'the answer down, and an answer nobody has written down is not an answer we '
                         'can give to a client.')],
        a=[('What question had not been asked?', 'whether the firm was permitted to send client material'),
           ('What does encryption answer, and not answer?', 'whether the material is safe, not whether there is permission'),
           ('Where must permission come from?', 'the 230 signed confidentiality clauses'),
           ('What does Marta ask Jonas to establish first?', 'where the existing system has been sending material'),
           ('Why is Jonas’s confidence insufficient?', 'because nobody has written the answer down')],
        b=[('Encryption answers whether the material is ____________.', 'safe'),
           ('Which I have never read in one ____________.', 'sitting'),
           ('If the two answers are ____________ we have a different conversation.', 'incompatible'),
           ('An answer nobody has written down is not an answer we can ____________.', 'give')]),
d2=dict(title='Nineteen contracts',
        fig=(['Nineteen, for two years.', 'And no harm done.'],
             ['Do we tell them?', 'That is the only question left.']),
        cap='Marta, Ines and Thomas.',
        lines=[('Marta', 'Nineteen contracts, in breach for two years, no harm, no complaint, nobody '
                         'outside this room aware of it.'),
               ('Thomas', 'Then we fix it and say nothing. You are proposing to volunteer for a '
                          'problem that does not exist.'),
               ('Marta', 'The problem exists. What does not exist is anybody else knowing about it.'),
               ('Thomas', 'That is a distinction without a practical difference.'),
               ('Marta', 'It is the whole of the practical difference. Today we are a firm that '
                         'discovered a breach and disclosed it. From the moment we decide not to '
                         'tell, we are a firm that knows it is in breach and is concealing it, and '
                         'those two things are treated very differently by everybody who matters.'),
               ('Ines', 'Including by us, in five years, when somebody else finds it.'),
               ('Thomas', 'And if a client terminates?'),
               ('Marta', 'One probably will. Even if one does, I would make the same recommendation, '
                         'because the alternative is a decision we would have to keep making every '
                         'year, in front of new people, one of whom will eventually disagree with it '
                         'and be right.'),
               ('Ines', 'That is the argument that persuades me and I want it in the minute in those '
                        'words.'),
               ('Thomas', 'I am going to be recorded as against it, and I would like my reason '
                          'recorded accurately: I think the probability of discovery was very low '
                          'and I think the cost of disclosure is certain.'),
               ('Marta', 'That is a fair statement of your position and it is correct on both '
                         'counts.'),
               ('Ines', 'Record both. We disclose on Monday.')],
        a=[('What is the position Marta describes?', 'nineteen contracts in breach for two years, with no harm and nobody else aware'),
           ('What does Thomas propose?', 'fixing it and saying nothing'),
           ('What is the distinction Marta insists on?', 'between a firm that disclosed and a firm that knows and conceals'),
           ('What is the recurring cost of concealment?', 'a decision that must be remade every year in front of new people'),
           ('What is Thomas’s recorded reason?', 'that discovery was very unlikely and the cost of disclosure is certain')],
        b=[('What does not exist is anybody else ____________ about it.', 'knowing'),
           ('A distinction without a practical ____________.', 'difference'),
           ('One of whom will eventually ____________ with it and be right.', 'disagree'),
           ('The cost of disclosure is ____________.', 'certain')]),

speak=[('Say it correctly',
        ['Student A: make six concessions using while, even if, granted that and albeit.',
         'Student B: check that the main point survives each concession.',
         'Find the one where the concession gave away the argument.']),
       ('Spoken specification: may we send it?',
        ['Choose data your organisation holds for somebody else.',
         'Brief aloud where it currently goes and what permits that.',
         'Your partner asks who established the permission, and where it is written.']),
       ('The two questions',
        ['In pairs, take a system your organisation uses.',
         'Ask separately whether it is safe and whether you are permitted to use it so.',
         'Find the case where the answers differ.'])],

ext_title='Whether it is safe and whether you may are different questions, and only one is usually asked',
ext_fig=figs.datatable('TWO HUNDRED AND THIRTY CLAUSES, READ AT LAST',
                       ['Clause type', 'Count', 'Permits a supplier?', 'Permits transfer abroad?'],
                       [['subcontractor disclosure permitted', '191', 'yes', 'yes'],
                        ['written notice required first', '31', 'yes, on notice', '11 no'],
                        ['no transmission outside jurisdiction', '8', 'yes', 'no'],
                        ['contracts breached for 2 years', '19', '—', '—'],
                        ['clients who terminated', '1', '—', '—']]),
ext_fig_cap='The eight were not the problem; the nineteen the firm had already breached were.',
ext=[
 'Decisions about sending data to a supplier are routinely made as security decisions, '
 'because security is the question that has an expert attached to it and a certificate at the '
 'end. While that question matters, it is the second question. The first is whether you are '
 'permitted to send the material at all, and permission comes from contracts, statute and '
 'the undertakings you have given, none of which are improved by encryption.',
 'The permission question is tedious to answer and that is the only reason it is skipped. It '
 'requires somebody to read every confidentiality clause the organisation has signed, in one '
 'sitting, and to classify them: those permitting disclosure to subcontractors performing the '
 'work, those permitting it on notice, and those forbidding transfer outside a jurisdiction '
 'in terms admitting no exception. A firm of any age will find all three, and will find that '
 'the categories do not correspond to the size or sophistication of the client.',
 'What such a review almost always also finds is the uncomfortable part, which is that '
 'systems already in use are already sending material somewhere nobody has established. The '
 'question where is this held has no natural owner: the people who chose the system asked '
 'about security, the people who signed the contracts never saw the system, and the supplier '
 'answers truthfully in terms that mention two jurisdictions in a footnote.',
 'Granted that no harm has occurred and granted that the supplier is careful, a firm in this '
 'position is nonetheless in breach, and the decision in front of it is about disclosure '
 'rather than about repair. The repair is straightforward. The disclosure is where the real '
 'argument happens, and it has a shape worth recognising: the probability of discovery is '
 'genuinely low and the cost of disclosure is genuinely certain, which is an argument for '
 'silence that is correct on both of its premises.',
 'The answer to it is not about probability. A firm that discloses is a firm that found a '
 'breach and reported it; a firm that does not is a firm that knows and is concealing, and it '
 'must renew that decision every year in front of people who joined after it was taken. Even '
 'if disclosure costs a client, which it sometimes does, it is paid once; the alternative is '
 'an obligation to keep choosing concealment indefinitely, and that obligation is the thing '
 'that eventually fails.'],
dp1=('Disclosure of self-discovered breaches',
     'Regulatory practice in most jurisdictions treats self-reported breaches substantially '
     'more leniently than those discovered externally, and concealment after discovery is '
     'commonly treated as an aggravating factor in itself.',
     'Source: general regulatory practice, 2026. Regimes differ considerably.'),
e_a=[('Why is the security question asked first?', 'because it has an expert attached and a certificate at the end'),
     ('Where does permission come from?', 'contracts, statute and undertakings given'),
     ('What three categories does a clause review find?', 'subcontractor disclosure permitted, permitted on notice, and transfer forbidden'),
     ('Why does "where is this held" have no natural owner?', 'those who chose the system asked about security and those who signed the contracts never saw it'),
     ('Why is the argument for silence not answered on probability?', 'because concealment must be re-chosen every year in front of new people')],
e_b=[('Encryption improves your contractual permission.', 'F'),
     ('The permission question is difficult rather than tedious.', 'F'),
     ('Clause categories correspond to client size.', 'F'),
     ('Reviews often find systems already sending material somewhere unestablished.', 'T'),
     ('The argument for silence is wrong on its premises.', 'F'),
     ('Disclosure is paid once; concealment is renewed.', 'T')],

w_model=(
 'Purpose: establish, for each of the 230 client agreements, whether Arclight may send that '
 'client’s material to a supplier and to which jurisdictions, so that no system is used '
 'outside what the contracts permit. Scope: the 230 current client agreements and the 2 '
 'systems already in use; prospective clients are out of scope. Inputs: the 230 signed '
 'agreements, the 2 suppliers’ written statements of where material is held, and the '
 'statutory transfer rules dated 1 April. Criteria: classify each agreement into 1 of 3 '
 'categories, quoting the clause; for each of the 2 systems, state every jurisdiction in '
 'which material is held, on the supplier’s written confirmation and not on inference; list '
 'by name every client whose material is currently held outside what its agreement permits. '
 'Done: 1 classification of 230 rows, 2 jurisdiction statements, and 1 named list of '
 'non-compliant clients. Fallback: where a supplier will not confirm a jurisdiction in '
 'writing, treat the material as held in an unpermitted jurisdiction rather than assuming the '
 'permitted case.'),
w_fig=figs.spec_card('THE PERMISSION BRIEF',
                     [('Purpose', 'establish for each client whether material may be sent, and where'),
                      ('Scope', '230 current agreements and the 2 systems in use'),
                      ('Inputs', '230 agreements, 2 written supplier statements, transfer rules'),
                      ('Criteria', 'classify all 230 quoting the clause; jurisdictions in writing only'),
                      ('Done', '230-row classification, 2 statements, 1 named list'),
                      ('Fallback', 'no written confirmation: treat as unpermitted')]),
w_fig_cap='The fallback row is what turns an assumption into a finding.',
w_task='Write a permission specification for data your organisation sends out.',
w_steps=['Define the set of agreements and the systems covered.',
         'Require every agreement to be classified with its clause quoted.',
         'Require jurisdictions to rest on written supplier confirmation, not inference.',
         'Require non-compliant clients to be listed by name.',
         'Say what is assumed when a supplier will not confirm in writing.'],
w_bank=['Establish, for each of the … agreements, whether … and to which … , so that …',
        'Cover … and the … systems already in use; … is out of scope.',
        'Work from the … signed agreements, the … written statements … , and … dated …',
        'Classify each agreement into 1 of … categories, quoting … ; state every jurisdiction on … and not on inference; list by name …',
        'Where a supplier will not confirm … in writing, treat … rather than assuming …'],
w_check=['Must every agreement be classified with its clause quoted?',
         'Do jurisdictions rest on written confirmation?',
         'Are non-compliant clients to be named?',
         'Does the unconfirmed case default against the firm?'],

t_title='Data you must not hand over',
t_fig=figs.split('TWO QUESTIONS ABOUT ONE TRANSFER',
                 'Security — usually asked',
                 ['is it encrypted in transit?',
                  'is it encrypted at rest?',
                  'what certifications do they hold?',
                  'have they ever had a breach?'],
                 'Permission — usually not',
                 ['does the clause permit a supplier?',
                  'does it require notice first?',
                  'which jurisdictions are permitted?',
                  'where is it actually held, in writing?']),
t_fig_cap='The left column has an expert and a certificate. The right column has a contract and nobody.',
t_body=[
 'Ask the permission question before the security question, or at least ask it at all. '
 'Encryption, certification and a clean incident history tell you whether material would be '
 'safe; they are silent on whether you are allowed to send it, and that answer lives in the '
 'confidentiality clauses you have signed, in statute and in the undertakings you have given '
 'to people who are not in the room.',
 'Then establish where your existing systems already send things, on written confirmation '
 'rather than on anybody’s understanding. This is the step that produces findings, because '
 'the question has no owner: whoever chose the system asked about security, whoever signed '
 'the contracts never saw the system, and the answer is often two jurisdictions where '
 'everybody assumed one. Expect to find that you are already outside what some contracts '
 'permit.',
 'When you do, treat the repair and the disclosure as separate decisions, and recognise the '
 'shape of the argument for silence: the probability of discovery is low and the cost of '
 'disclosure is certain, both of which are usually true. The answer is that disclosure is '
 'paid once, while concealment is a decision you must take again every year in front of '
 'people who were not there, one of whom will eventually be right to refuse. Even if a client '
 'leaves, that is the cheaper of the two.'],
t_say=[('Separate the questions: ', 'Is it safe, and are we permitted? Those are different.'),
       ('Insist on writing: ', 'Which jurisdictions, confirmed in writing by the supplier?'),
       ('Name the choice: ', 'Disclosed once, or concealed every year from now on.')],
t_bound=('A clause review tells you what you are permitted to do. It cannot tell you how a '
         'client will react to being told, whether a regulator would have treated the matter '
         'as material, or what a court would make of a clause that two careful readers read '
         'differently. It converts an unknown into a decision, not into a certainty.'),
t_a=[('Is it safe, and are we ____________? Those are different.', 'permitted'),
     ('Which jurisdictions, confirmed in ____________ by the supplier?', 'writing'),
     ('Disclosed once, or ____________ every year from now on.', 'concealed'),
     ('The answer lives in the confidentiality ____________ you have signed.', 'clauses'),
     ('The question has no ____________.', 'owner'),
     ('One of whom will eventually be right to ____________.', 'refuse')],
t_b_rubric='Rewrite each security answer as an answer to the permission question.',
t_b=[('It is encrypted end to end.', 'one hundred and ninety-one clauses permit a subcontractor; eight do not'),
     ('They have never had a breach.', 'they have confirmed in writing that material is held in two jurisdictions'),
     ('They hold the relevant certifications.', 'eleven clients require written notice before any supplier is engaged'),
     ('The risk is extremely low.', 'nineteen contracts do not permit what we have been doing for two years')],

case=dict(
 title='Decision Clinic · The client who was never told',
 brief=[
  'Arclight disclosed to nineteen clients. One terminated, taking four per cent of revenue '
  'with it. Seventeen replied without concern and one asked for a remediation plan, which was '
  'supplied.',
  'Eleven months later, the client that terminated issued a claim for the period of the '
  'breach, seeking the fees paid during it on the basis that the service had been delivered '
  'in breach of a material term. The claim is weak on causation and expensive to defend.',
  'Thomas Reed has not said I told you so and does not need to. Marta Olsen maintains that '
  'the decision was right. Kenji Watanabe has done the arithmetic and says it is closer than '
  'either of them thinks.'],
 exhibit=figs.datatable('WHAT DISCLOSURE COST AND WHAT IT BOUGHT',
                        ['', 'Figure', 'Note'],
                        [['clients told', '19', '—'],
                         ['replied without concern', '17', '—'],
                         ['terminated', '1', '4% of revenue'],
                         ['claim brought', '1', 'fees for the breach period'],
                         ['defence cost estimate', '60,000–110,000 EUR', 'weak on causation'],
                         ['regulatory consequence', 'none', 'self-reported']]),
 exhibit_cap='Two certain costs, one avoided unknown, and no way of pricing what was avoided.',
 exhibit_note='The claim has not been decided and the defence cost estimate is the firm’s own '
              'counsel’s.',
 voices=[('Marta Olsen', 'risk and liability',
          'A claim we can defend, brought by a client we had already lost, arising from a '
          'breach we found and reported. That is the good version of this situation. The bad '
          'version is the same claim brought after a regulator found it.'),
         ('Thomas Reed', 'service delivery',
          'Four per cent of revenue and up to a hundred and ten thousand in costs, against a '
          'risk whose probability nobody has ever estimated. I accept the principle and I '
          'would like somebody to say out loud that the principle has a price and we have now '
          'paid it.'),
         ('Kenji Watanabe', 'finance',
          'It is closer than either position admits. Disclosure cost us about two hundred and '
          'sixty thousand all in. Concealment risked an unknown multiple of that at an unknown '
          'probability. I would have disclosed, and I cannot show that disclosing was cheaper, '
          'and those two statements sit together uncomfortably.')],
 steps=[('Find it', 'What did disclosure cost in money and revenue?'),
        ('Compare it', 'What is known about the avoided outcome?'),
        ('Infer it', 'Why does Kenji say the two positions are closer than they look?'),
        ('Weigh it', 'A certain cost against an unpriced risk.'),
        ('Decide', 'Would you make the same decision again, and on what basis?')],
 analysis=[('Find it. What did disclosure cost?', 'about two hundred and sixty thousand euros in all'),
           ('Compare it. What is known about the concealment risk?', 'neither its probability nor its magnitude'),
           ('Infer it. What is Kenji’s uncomfortable pair?', 'that he would disclose and cannot show disclosing was cheaper'),
           ('Weigh it. What is Marta’s strongest point?', 'that the same claim after a regulator found it would be a different matter'),
           ('Decide. On what basis would you decide?', 'answers vary; a basis that does not rest on comparing a certain cost with an unpriced risk')],
 decision='Write Arclight’s standing policy on self-discovered breaches.',
 decision_steps=['Say what is done when a breach is discovered internally.',
                 'Say within what period, and who decides.',
                 'Say what the policy states about cost as a consideration.',
                 'Say what would justify not disclosing, if anything.'],
 bank=['On discovering … , Arclight …',
       'The decision is taken by … within …',
       'The policy states that cost …',
       'Non-disclosure would require …',
       'This is reviewed every …'],
 outcome='Arclight adopted a standing policy of disclosure within fourteen days of '
         'establishing a breach, with non-disclosure requiring the written agreement of the '
         'board and external counsel, and recorded that cost to the firm is not a ground for '
         'non-disclosure. The claim was settled for thirty-one thousand euros. Thomas, who '
         'argued against disclosure, drafted the policy and says he believes it is right as a '
         'standing rule while continuing to believe the particular decision was expensive; '
         'Marta notes that a rule somebody argued against and then drafted is in better shape '
         'than one everybody agreed with.',
 outcome_q=[('What does the policy say about cost?', 'that cost to the firm is not a ground for non-disclosure'),
            ('Why does Marta regard Thomas drafting it as a good sign?', 'because a rule argued against and then drafted is in better shape than one nobody questioned')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · Check we are allowed to use it',
 task=['This is the brief Jonas wrote before the supplier trial, intending to clear the legal '
       'position in a week.',
       'It produced a clean answer that was wrong, because it asked about the new supplier and '
       'not about the ones already in use.'],
 draft=['Check whether we can use the new supplier with client data.',
        'Look at the contracts for the clients involved.',
        'Confirm the security arrangements are adequate.',
        'Flag any clients who would need special handling.',
        'Assume the existing arrangements are compliant.',
        'I need a yes or no by Friday.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six instructions, one of which assumes away the entire finding.',
 asked=['All 230 agreements classified',
        'Jurisdictions for every system in use',
        'Non-compliant clients named'],
 back=['41 contracts read, for the trial clients',
       'Security confirmed, jurisdictions not asked',
       '"Yes, subject to notice for 6 clients"'],
 gap='"The clients involved" covers only the trial set, "confirm the security arrangements" '
     'answers the second question as though it were the first, "assume the existing '
     'arrangements are compliant" forbids the only finding that mattered, and "a yes or no by '
     'Friday" fixes the form of the answer before the work.',
 back_cap='A clean yes, delivered on time, about the wrong forty-one contracts.',
 back_note='The instruction to assume the existing arrangements compliant is the reason the '
           'nineteen breaches went undiscovered for a further four months.',
 diagnosis=[('[1] "whether we can use the new supplier" — permitted, or secure?', 'hidden assumption'),
            ('[2] "the clients involved" — involved in the trial, or all of them?', 'missing condition'),
            ('[3] "confirm the security arrangements are adequate" — adequate against what?', 'hidden assumption'),
            ('[4] "any clients who would need special handling" — handling meaning what?', 'unstated exception'),
            ('[5] "assume the existing arrangements are compliant" — on what authority?', 'unstated exception'),
            ('[6] "a yes or no by Friday" — and if the answer is neither?', 'missing condition')],
 rewrite='Rewrite the brief so that all agreements are classified, existing systems are '
         'included, and nothing is assumed compliant.',
 scaffold=['What must be established and what it governs',
           'Which agreements and which systems are covered',
           'The agreements, written supplier statements and rules it is built from',
           'How agreements are classified, what jurisdictions must rest on, and who must be named',
           'What comes back, in how many parts, and by when',
           'What to assume where a supplier will not confirm in writing'],
 bank=['Establish, for each of the … agreements, whether … and to which … , so that …',
       'Cover … and the … systems already in use; … is out of scope.',
       'Work from the … signed agreements, the … written statements … , and … dated …',
       'Classify each agreement into 1 of … categories, quoting … ; state every jurisdiction on written confirmation and not on inference; list by name every client whose material …',
       'Return 1 classification of … rows, … statements and … list, by …',
       'Where a supplier will not confirm … , treat … rather than assuming …'],
 check=['Does the brief cover all agreements, not only the trial set?',
        'Are existing systems in scope?',
        'Is anything permitted to be assumed compliant?',
        'Must jurisdictions rest on written confirmation?'],
 model=['Establish, for each of the 230 client agreements, whether Arclight may send that client’s material to a supplier and to which jurisdictions, so that no system is used outside what the contracts permit',
        'The 230 current client agreements and the 2 systems already in use; prospective clients are out of scope',
        'The 230 signed agreements, the 2 suppliers’ written statements of where material is held, and the statutory transfer rules dated 1 April',
        'Classify each agreement into 1 of 3 categories, quoting the clause; for each of the 2 systems state every jurisdiction in which material is held, on the supplier’s written confirmation and not on inference; list by name every client whose material is currently held outside what its agreement permits',
        '1 classification of 230 rows, 2 jurisdiction statements, and 1 named list of non-compliant clients, by 30 April',
        'Where a supplier will not confirm a jurisdiction in writing, treat the material as held in an unpermitted jurisdiction rather than assuming the permitted case'],
 cost='1 clean answer about 41 of 230 contracts, 4 further months of breach on 19 contracts, '
      'and a disclosure made later and therefore worse than it needed to be.'),

rev_fig=figs.split('CONCESSIVE CLAUSES',
                   'Wrong',
                   ['Despite the supplier is careful...',
                    'Even if no harm would occur...',
                    'Granted it is encrypted, but...',
                    'The system is secure, albeit it is abroad.'],
                   'Right',
                   ['While the supplier is careful...',
                    'Even if no harm occurred...',
                    'Granted that it is encrypted...',
                    'The system is secure, albeit abroad.']),
rev_fig_cap='Four concessions that keep the point they were conceding against.',
rev=dict(
 read=[('The first question about a data transfer is', ['is it encrypted', 'are we permitted', 'what does it cost', 'who chose it'], 1),
       ('Permission comes from', ['certifications', 'contracts, statute and undertakings', 'the supplier', 'the board'], 1),
       ('"Where is this held" has no natural owner because', ['nobody cares', 'the system choosers asked about security and the signers never saw it', 'suppliers refuse', 'it is secret'], 1),
       ('In the Clinic, what does the policy say about cost?', ['it is decisive', 'it is not a ground for non-disclosure', 'it is capped', 'it is confidential'], 1)],
 listen_text='Ask the permission question before the security question, or at least ask it at '
             'all. Then establish where your existing systems already send things, on written '
             'confirmation rather than on anybody’s understanding. When you find that you are '
             'already outside what some contracts permit, treat the repair and the disclosure '
             'as separate decisions.',
 listen=[('Ask the ____________ question before the security question.', 'permission'),
         ('On written ____________ rather than on anybody’s understanding.', 'confirmation'),
         ('Already outside what some ____________ permit.', 'contracts'),
         ('Treat the repair and the disclosure as ____________ decisions.', 'separate')],
 speak=['Name data your organisation sends out and say what permits it.',
        'Say where it is held, and whether you have that in writing.'],
 write='Write one concessive sentence conceding a supplier’s care and keeping the point.',
 vocab=[('The requirement that data be held in a stated jurisdiction is ____________.', 'data residency'),
        ('A party engaged by your processor to handle the same data is a ____________.', 'subprocessor'),
        ('Handling no more data than the purpose requires is ____________.', 'minimisation'),
        ('Replacing identifiers with a key held separately is ____________.', 'pseudonymisation'),
        ('The removal of data without authority is ____________.', 'exfiltration')],
 gram=[('____________ the supplier is careful, the clause forbids the transfer.', 'While'),
       ('____________ if no harm occurred, we were in breach.', 'Even'),
       ('____________ that it is encrypted, we have no permission.', 'Granted'),
       ('The arrangement is secure, ____________ in two jurisdictions.', 'albeit'),
       ('____________ that the risk is small, it is not ours to accept.', 'Granted')]),

found=['Ask where the data in one of your systems is actually held, and get it in writing.',
       'Read the confidentiality clause in your three largest contracts.',
       'Establish whether any system you use is already outside what they permit.',
       'Write your organisation’s rule for a breach it discovers itself.'],
end_line='An answer nobody has written down is not an answer we can give to a client.',
end_next='Next: We Ought To Have',
)
