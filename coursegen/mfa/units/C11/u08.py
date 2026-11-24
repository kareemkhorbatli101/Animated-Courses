# -*- coding: utf-8 -*-
import figs

U = dict(
num=8, title='A Condolence Cannot Be Generated',
gram='agentless structures in public statements',
ai='the register of a condolence, and why it is not generated',
strap='CEFR C1 · Grammar: agentless structures · AI: a condolence cannot be generated',
cando=['form and recognise agentless structures in official statements',
       'say when removing the actor is proper and when it is evasion',
       'distinguish a public statement from a letter to one family',
       'say what must be written by a person and why',
       'write a rule that names the documents a system may not draft'],
hero=('IT WAS SIGNED BY A PERSON',
      ['The letter was four sentences long and took the officer forty minutes.',
       'The family kept it, and wrote back about the third sentence.'],
      [(730, 'blue', 'long'), (1390, 'orange', 'short'),
       (2050, 'purple', 'long'), (2690, 'teal', 'short')]),
hero_cap='Consular Affairs, where the condolence letters are still written by hand.',

warm=['What makes a message of sympathy worth keeping?',
      'When is it right for an institution to speak without naming anybody?',
      'What would you never want a system to write on your behalf?'],
read=[
 'The Ministry writes about ninety letters of condolence a year to the families of citizens who '
 'have died abroad. They are four or five sentences long, they are signed by a named officer, '
 'and they take between thirty minutes and two hours each.',
 'In March the question was put formally whether these letters should be drafted like other '
 'correspondence, with an officer editing and signing. The arithmetic was not disputed: ninety '
 'letters at an hour each is about eleven working days a year of a section that has eleven '
 'officers and eight thousand monthly enquiries.',
 'Rana Deeb refused, and the reason she gave was not about quality. A drafted condolence would '
 'be good. It would have the right register, it would avoid the formulas that families find '
 'intolerable, and in a blind comparison it would be indistinguishable from the letters her '
 'officers write.',
 'Her reason was that the letter is not a communication. It is an act, and the act consists of '
 'a person having spent an hour on one family. Families write back about such letters, '
 'sometimes years later, and what they write back about is almost always a detail: that the '
 'officer used her son’s first name, that the letter mentioned the town he had lived in, that '
 'somebody had evidently read the file.',
 'What the Ministry did instead was assist everything around the letter. The case summary, the '
 'repatriation arrangements, the list of documents the family will need, the translation of the '
 'local death certificate: all of that is now prepared in minutes and used to be the reason an '
 'officer had forty minutes rather than two hours. The letter itself is still four sentences '
 'written by a person who has read the file.'],
c_a=[('How many condolence letters does the Ministry write a year?', 'about ninety'),
     ('What was not disputed?', 'the arithmetic: ninety letters at an hour each is about eleven working days'),
     ('What was Rana’s reason for refusing?', 'not quality: a drafted letter would be indistinguishable'),
     ('What does she say the letter is?', 'an act, consisting of a person having spent an hour on one family'),
     ('What do families write back about?', 'a detail: a first name, a town, evidence that somebody read the file'),
     ('What was assisted instead?', 'the case summary, the arrangements, the document list and the translation')],
c_b=[('A drafted condolence would be of poor quality.', 'F'),
     ('The letters are signed by a named officer.', 'T'),
     ('Rana’s objection was about register.', 'F'),
     ('Families sometimes write back years later.', 'T'),
     ('The letter is now drafted and edited.', 'F'),
     ('The surrounding work is now prepared in minutes.', 'T')],
c_c=[('Between thirty minutes and two ____________ each.', 'hours'),
     ('It would avoid the formulas that families find ____________.', 'intolerable'),
     ('In a blind comparison it would be ____________.', 'indistinguishable'),
     ('The act consists of a person having spent an hour on one ____________.', 'family'),
     ('That somebody had evidently ____________ the file.', 'read'),
     ('Four sentences written by a person who has read the ____________.', 'file')],
c_d=[('The objection was about ( what the letter is / quality ).', ['what the letter is', 'quality'], 0),
     ('How many officers does the section have?', ['four', 'eleven', 'ninety', 'eight'], 1),
     ('How long would ninety letters take a year?', ['one day', 'about eleven working days', 'three months', 'an hour'], 1),
     ('What do families mention?', ['the register', 'a detail', 'the length', 'the signature'], 1),
     ('What did assistance give the officer?', ['the letter', 'forty minutes instead of two hours', 'a template', 'a signature'], 1)],
c_e=('Agentless or with an agent? Put each in the right column.',
     [('Mistakes were made.', 'agentless'),
      ('The Ministry misfiled the document.', 'with an agent'),
      ('It is deeply regretted.', 'agentless'),
      ('I am sorry.', 'with an agent'),
      ('Steps are being taken.', 'agentless'),
      ('I have changed the procedure.', 'with an agent')],
     ['agentless', 'with an agent']),

v_fig_title='A LETTER THAT IS KEPT',
v_fig=[('doc', 'a letter of condolence'), ('people', 'a bereaved family'), ('key', 'a signature by hand'),
       ('shield', 'a mark of respect'), ('clock', 'a minute of silence'), ('book', 'a book of condolence')],
v_fig_cap='Six words from the part of the work that is measured in what people keep.',
vocab=[
 ('a condolence', 'an expression of sympathy to somebody bereaved'),
 ('a letter of condolence', 'a written expression of sympathy sent to a family'),
 ('a bereavement', 'the loss of somebody by death'),
 ('a bereaved family', 'the family of somebody who has died'),
 ('a sympathy', 'the feeling of sharing another’s distress'),
 ('a formal mourning', 'a period of public observance after a death'),
 ('a book of condolence', 'a book opened for people to write messages in'),
 ('a flag at half mast', 'a flag lowered as a public mark of mourning'),
 ('a minute of silence', 'a silence observed as a mark of respect'),
 ('a memorial', 'something established to keep a memory'),
 ('a funeral arrangement', 'the practical organisation of a burial or cremation'),
 ('a personal message', 'a message written for one recipient and no other'),
 ('a signature by hand', 'a signature written rather than printed'),
 ('a form letter', 'a letter in which only the name changes'),
 ('a template reply', 'a reply produced from a fixed shape'),
 ('a human voice', 'the quality of a text that one person wrote for another'),
 ('a named sender', 'the person who signs and may be written back to'),
 ('an institutional voice', 'the manner of expression of a body rather than a person'),
 ('a mark of respect', 'an act whose purpose is to show respect'),
 ('a public tribute', 'a statement honouring somebody, made publicly')],
v_a=[('A letter in which only the name changes is a ____________.', 'form letter'),
     ('The person who signs and may be written back to is a ____________.', 'named sender'),
     ('The quality of a text that one person wrote for another is a ____________.', 'human voice'),
     ('An act whose purpose is to show respect is a ____________.', 'mark of respect'),
     ('A book opened for people to write messages in is a ____________.', 'book of condolence'),
     ('A message written for one recipient and no other is a ____________.', 'personal message'),
     ('The manner of expression of a body rather than a person is an ____________.', 'institutional voice'),
     ('A statement honouring somebody, made publicly, is a ____________.', 'public tribute')],
v_b=[('A condolence is an expression of sympathy', 'to somebody bereaved.'),
     ('A bereavement is the loss', 'of somebody by death.'),
     ('A flag at half mast is a flag lowered', 'as a public mark of mourning.'),
     ('A signature by hand is a signature', 'written rather than printed.'),
     ('A funeral arrangement is the practical organisation', 'of a burial or cremation.')],

g_title='Grammar: agentless structures in public statements',
g_rule=['An agentless passive removes the actor: steps are being taken.',
        'Impersonal it is regretted removes the person who regrets.',
        'In a public statement an agentless form is sometimes proper, where no individual is '
        'the actor.',
        'In a letter to one family it is always wrong, because the actor is the point.'],
g_fig=('LOOSE',
       ['It is deeply regretted that your son has died.',
        'Condolences are extended to the family.',
        'Assistance will be provided as appropriate.',
        'Mistakes were made in the handling of the case.'],
       'PRECISE',
       ['I was very sorry to learn of your son’s death.',
        'The Minister has asked me to send you her condolences, and I add my own.',
        'I will telephone you on Thursday morning and will deal with the documents myself.',
        'The Ministry attached your document to the wrong file, and I am sorry.'],
       'four agentless forms in a letter to one family',
       'four sentences in which a person is the subject'),
g_fig_cap='In a condolence, every agentless construction tells the family that nobody wrote it.',
g_a=[('I was very sorry to ____________ of your son’s death.', 'learn'),
     ('The Minister has asked me to send you her condolences, and I ____________ my own.', 'add'),
     ('I will telephone you on Thursday and will ____________ with the documents myself.', 'deal'),
     ('The Ministry ____________ your document to the wrong file.', 'attached'),
     ('It is deeply ____________ that the delay occurred.', 'regretted'),
     ('Condolences ____________ extended to the family.', 'are'),
     ('Steps ____________ being taken to prevent a recurrence.', 'are'),
     ('I have ____________ the procedure.', 'changed'),
     ('Mistakes ____________ made in the handling of the case.', 'were')],
g_b=[('In a letter to one family, an agentless form is ( sometimes proper / always wrong ).', ['sometimes proper', 'always wrong'], 1),
     ('Which removes the person who regrets?', ['I was sorry', 'it is regretted', 'I regret', 'the Minister regrets'], 1),
     ('When is an agentless form proper?', ['always', 'where no individual is the actor', 'in letters', 'never'], 1),
     ('Mistakes were made removes', ['the mistake', 'the actor', 'the date', 'the case'], 1),
     ('Which belongs in a condolence?', ['Condolences are extended.', 'I was very sorry to learn …', 'Assistance will be provided.', 'It is regretted.'], 1),
     ('In a condolence the actor is', ['irrelevant', 'the point', 'implied', 'the Ministry'], 1)],

d1=dict(title='It would be indistinguishable',
        fig=(['A drafted letter would be good.', 'That is not the objection.'],
             ['Then what is?', 'What the letter is.']),
        cap='Rana Deeb and Dr Hana Mourad, in March.',
        lines=[('Hana', 'Ninety letters a year at an hour each is eleven working days from a '
                        'section that is eleven people against eight thousand enquiries a '
                        'month.'),
               ('Rana', 'The arithmetic is correct and I am refusing anyway.'),
               ('Hana', 'On quality?'),
               ('Rana', 'Not on quality. A drafted condolence would be good. It would have the '
                        'register right, it would avoid the formulas families cannot bear, and '
                        'in a blind comparison nobody would pick my officers’ letters out.'),
               ('Hana', 'Then your objection is harder to state and I would like you to state '
                        'it.'),
               ('Rana', 'The letter is not a communication. Nothing in it is information. It is '
                        'an act, and the act is that a person read the file about one dead man '
                        'and spent an hour on his mother.'),
               ('Hana', 'The family cannot see the hour.'),
               ('Rana', 'They can see its traces, which is why they write back about the detail. '
                        'They write back about the first name, or the town, or the fact that '
                        'somebody evidently knew he had been working. Those are the marks of '
                        'somebody having read, and they are what is kept.'),
               ('Hana', 'A drafting step could use the first name and the town.'),
               ('Rana', 'It could, and the letter would contain the same words, and it would not '
                        'be the same act. I accept that this is a position about what the '
                        'Ministry is rather than about what the letter says, and I would rather '
                        'defend it on that ground than pretend it is a quality argument I would '
                        'lose.'),
               ('Hana', 'Then the eleven days have to come from somewhere else.'),
               ('Rana', 'They come from everything around the letter, and that is where I want '
                        'the help.')],
        a=[('What is the arithmetic?', 'ninety letters at an hour each is about eleven working days a year'),
           ('Is the objection about quality?', 'no; a drafted letter would be indistinguishable'),
           ('What does Rana say the letter is?', 'an act: a person having read the file and spent an hour on one family'),
           ('What do families write back about?', 'the first name, the town, evidence that somebody had read'),
           ('Where do the eleven days come from?', 'from everything around the letter')],
        b=[('The formulas families cannot ____________.', 'bear'),
           ('Nothing in it is ____________.', 'information'),
           ('They can see its ____________.', 'traces'),
           ('A position about what the Ministry ____________.', 'is')]),
d2=dict(title='The statement and the letter',
        fig=(['Condolences are extended.', 'In a public statement?'],
             ['Yes.', 'Then it is proper. In a letter it is not.']),
        cap='Rana and Yara Ibrahim, on two documents about the same death.',
        lines=[('Yara', 'My public statement says that the Ministry extends its condolences to '
                        'the families. Your letter says I was very sorry to learn of your son’s '
                        'death. One of us is wrong about the register.'),
               ('Rana', 'Neither of us. They are different documents and the agentless form is '
                        'right in exactly one of them.'),
               ('Yara', 'Explain the distinction, because I have been told for years that '
                        'passive constructions are evasion.'),
               ('Rana', 'They are evasion when there is an actor and you are hiding him. In your '
                        'statement there is no individual who extends condolences; the state '
                        'does, and the state is not a person. Writing I am sorry in a public '
                        'statement would be a claim about your feelings that nobody asked for.'),
               ('Yara', 'And in your letter?'),
               ('Rana', 'In my letter there is exactly one actor and she is the point. If the '
                        'letter says condolences are extended, the family learns that a '
                        'procedure has operated.'),
               ('Yara', 'So the test is whether there is an individual actor.'),
               ('Rana', 'The test is whether the identity of the actor is part of what is being '
                        'communicated. In a statement of mourning it is not. In a letter to one '
                        'mother it is nearly the whole of it.'),
               ('Yara', 'There is a case I cannot place. A statement about an error, where the '
                        'Ministry is the actor. Mistakes were made is plainly evasion.'),
               ('Rana', 'Plainly. And the Ministry made mistakes is not quite available either, '
                        'because a statement that names the Ministry as a wrongdoer in those '
                        'terms has consequences your section will manage for a month.'),
               ('Yara', 'So we write the Ministry attached the document to the wrong file, which '
                        'is specific and has an actor and is not a confession in general terms.'),
               ('Rana', 'That is where I would come out and I am not confident it is right. The '
                        'line between a specific admission and a general one is doing a great '
                        'deal of work and I cannot define it.')],
        a=[('What does Yara’s statement say?', 'that the Ministry extends its condolences to the families'),
           ('When is an agentless form evasion?', 'when there is an actor and it is being hidden'),
           ('Why is "I am sorry" wrong in a public statement?', 'because it claims a feeling nobody asked for and the state is not a person'),
           ('What is the test Rana gives?', 'whether the identity of the actor is part of what is communicated'),
           ('What can she not define?', 'the line between a specific admission and a general one')],
        b=[('They are evasion when there is an actor and you are ____________ him.', 'hiding'),
           ('The family learns that a ____________ has operated.', 'procedure'),
           ('In a letter to one mother it is nearly the ____________ of it.', 'whole'),
           ('The line is doing a great deal of ____________.', 'work')],
        unresolved=True),

speak=[('Actor or no actor',
        ['Student A: read out six official sentences, three agentless.',
         'Student B: say for each whether the actor is being hidden or genuinely absent.',
         'Rewrite the hidden ones.']),
       ('What must be written',
        ['Name the documents in your work that must be written by a person.',
         'Say why for each, without using the word quality.',
         'Your partner tests whether a drafted version would be distinguishable.']),
       ('Around the letter',
        ['Take a task that includes one irreducible human part.',
         'List everything around it that could be prepared.',
         'Say how much time that would give the person.'])],

ext_title='A condolence is an act rather than a communication, and what is assisted is everything around it',
ext_fig=figs.datatable('ONE DEATH, SIX DOCUMENTS',
                       ['Document', 'Written by', 'Assisted?'],
                       [['the case summary', 'the system', 'yes'],
                        ['the translation of the death certificate', 'the system', 'yes'],
                        ['the list of documents the family needs', 'the system', 'yes'],
                        ['the repatriation arrangements', 'the system, checked', 'yes'],
                        ['the public statement', 'Press, agentless', 'drafted'],
                        ['the letter to the mother', 'a named officer', 'no']]),
ext_fig_cap='Five of six documents are prepared in minutes, which is how the sixth gets its hour.',
ext=[
 'There is a small class of documents that a ministry should not have drafted for it, and the '
 'argument for the class is usually made badly. It is made as a quality argument — a machine '
 'cannot write a condolence — and that argument is not true and is getting less true, which '
 'means a practice defended on that ground will be abandoned when somebody runs a blind '
 'comparison.',
 'The sound argument is about what the document is. A letter of condolence to the family of a '
 'citizen who has died abroad contains no information. Everything informative in the case '
 'goes in other documents: the arrangements, the certificate, the list of what the family must '
 'do. What the letter does is constitute an act, and the act is that a named person read the '
 'file about one death and spent an hour on one family.',
 'The evidence that this is what families value is in what they write back about, and they do '
 'write back, sometimes years later. They write about a detail: a first name used, a town '
 'mentioned, a sentence showing that somebody had understood what the dead man had been doing '
 'there. These are traces of reading, and a drafted letter can reproduce the traces without '
 'the reading, which is exactly the difficulty: the words would be the same and the act would '
 'not have occurred.',
 'So the rule is not that such letters must be good but that they must be written, by a named '
 'person who may be written back to, and the practical question becomes where the hours come '
 'from. They come from everything around the letter. A case summary, a translated certificate, '
 'a list of documents and a draft of the repatriation arrangements took an officer two hours '
 'and now take minutes, which is how a section of eleven people continues to write ninety '
 'letters a year by hand.',
 'The grammar carries the distinction and is worth stating, because agentless constructions '
 'are not simply evasion. A public statement of mourning properly says that the Ministry '
 'extends its condolences: no individual is the actor, the state is not a person, and a claim '
 'about an officer’s feelings would be out of place. The same construction in a letter to one '
 'mother tells her that a procedure has operated. The test is not whether a passive has been '
 'used but whether the identity of the actor is part of what is being communicated, and in a '
 'letter to one family it is nearly the whole of it.'],
dp1=('Condolence correspondence',
     'Consular services in several foreign ministries excluded condolence and bereavement '
     'correspondence from assisted drafting in 2025 while automating the surrounding case '
     'documents, on the ground that the letter is an act rather than a communication.',
     'Source: reported practice in consular services, 2025–2026.'),
e_a=[('Why is the quality argument unsound?', 'because it is not true and is getting less true, so the practice would be abandoned'),
     ('What does a condolence letter contain?', 'no information; everything informative is in other documents'),
     ('What does the letter constitute?', 'an act: a named person reading one file and spending an hour on one family'),
     ('What do families write back about?', 'a detail that shows somebody had read and understood'),
     ('What is the test for an agentless form?', 'whether the identity of the actor is part of what is communicated')],
e_b=[('A drafted condolence would be distinguishable in a blind comparison.', 'F'),
     ('A condolence letter carries the practical information.', 'F'),
     ('Families write back about the register.', 'F'),
     ('Agentless constructions are always evasion.', 'F'),
     ('A public statement of mourning properly uses an agentless form.', 'T'),
     ('The surrounding documents are assisted.', 'T')],

w_model=(
 'Purpose: prepare everything in a death-abroad case except the letter to the family, so that '
 'the officer has an hour to write 4 sentences. Scope: the case summary, the translation of the '
 'local certificate, the list of documents the family will need and a draft of the repatriation '
 'arrangements; the letter of condolence is out of scope and is not to be drafted, outlined or '
 'suggested. Inputs: the post’s report, the local certificate, and the Ministry’s published '
 'guidance for bereaved families. Criteria: give the facts of the case with their sources; '
 'translate the certificate and mark any term that has no equivalent; list the documents the '
 'family will need with where each is obtained; propose no wording for the letter and no form '
 'of words of sympathy anywhere in the pack. Done: 1 case pack of 4 documents, within 2 hours '
 'of the post’s report, with the letter left to the officer. Fallback: where the certificate '
 'cannot be translated with confidence, say so and attach the original rather than '
 'approximating it.'),
w_fig=figs.spec_card('THE TASKING FOR A DEATH-ABROAD PACK',
                     [('Purpose', 'the officer has an hour to write 4 sentences'),
                      ('Scope', 'summary, translation, document list, arrangements; letter excluded'),
                      ('Inputs', 'the post’s report, the certificate, the published guidance'),
                      ('Criteria', 'sourced facts; marked untranslatables; no words of sympathy'),
                      ('Done', '1 pack of 4 documents within 2 hours'),
                      ('Fallback', 'certificate untranslatable: say so and attach the original')]),
w_fig_cap='No form of words of sympathy anywhere in the pack: otherwise the phrase migrates into the letter.',
w_task='Write a tasking that prepares everything around an irreducibly human document in your '
       'own work.',
w_steps=['Say what the person is to be left free to do.',
         'Name the documents covered and exclude the human one.',
         'Forbid the suggesting of wording for it.',
         'Require sources and marked uncertainties.',
         'Say what happens where something cannot be rendered.'],
w_bank=['Prepare … except … , so that the officer has …',
        'Cover … ; … is out of scope and is not to be drafted, outlined or …',
        'Work from … , … and …',
        'Give … with … ; translate … and mark … ; list … ; propose no … and no …',
        'Where … cannot be … with confidence, say so and … rather than …'],
w_check=['Is the human document excluded by name?',
         'Is suggesting wording for it forbidden?',
         'Are words of sympathy excluded from the whole pack?',
         'Is approximation forbidden where confidence is lacking?'],

t_title='The register of a condolence',
t_fig=figs.split('TWO DOCUMENTS, ONE DEATH',
                 'The public statement',
                 ['the Ministry extends its condolences',
                  'no individual is the actor',
                  'agentless, and properly so',
                  'drafted, and edited'],
                 'The letter to the mother',
                 ['I was very sorry to learn …',
                  'one actor, who is the point',
                  'agentless forms always wrong',
                  'written by a named person']),
t_fig_cap='The same event, two registers, and the grammar is the difference.',
t_body=[
 'Do not defend the handwritten condolence on quality. A drafted one would have the register '
 'right, would avoid the formulas families cannot bear, and would be indistinguishable in a '
 'blind comparison; a practice defended on quality will be abandoned by whoever runs that '
 'comparison.',
 'Defend it on what the document is. A condolence letter carries no information — the '
 'arrangements, the certificate and the list of what the family must do are all elsewhere — '
 'and what it does is constitute an act: a named person read one file and spent an hour on one '
 'family. Families write back about a first name, a town, a sentence showing somebody had '
 'understood. A drafted letter can reproduce those traces without the reading, and the words '
 'would be identical while the act would not have taken place.',
 'Then find the hours around the letter rather than in it. A case summary, a translated '
 'certificate, a document list and draft arrangements used to take two hours and now take '
 'minutes, which is how eleven officers keep writing ninety letters by hand. And keep the '
 'grammar straight: an agentless form is proper in a public statement of mourning, where no '
 'individual is the actor and a claim about an officer’s feelings would be out of place, and '
 'always wrong in a letter to one mother, where the actor is nearly the whole of what is being '
 'communicated.'],
t_say=[('Exclude it by name: ', 'The letter of condolence is not to be drafted or outlined.'),
       ('Keep the actor: ', 'I was very sorry to learn of your son’s death.'),
       ('Allow the agentless: ', 'The Ministry extends its condolences to the families.')],
t_bound=('A drafting step can produce a condolence that reads correctly and can reproduce the '
         'details that show somebody has read a file. What it cannot do is be the act, and the '
         'act is the whole content of the document. This is the one place in the field where '
         'the right answer does not follow from the quality of the output, and a section that '
         'argues it on quality will lose the argument and the practice.'),
t_a=[('The letter of condolence is not to be drafted or ____________.', 'outlined'),
     ('The Minister has asked me to send you her ____________.', 'condolences'),
     ('The Ministry ____________ its condolences to the families.', 'extends'),
     ('A condolence letter carries no ____________.', 'information'),
     ('The words would be identical while the ____________ would not have taken place.', 'act'),
     ('A claim about an officer’s ____________ would be out of place.', 'feelings')],
t_b_rubric='Rewrite each for a letter to one family, with a person as the subject.',
t_b=[('It is deeply regretted that your son has died.', 'I was very sorry to learn of your son’s death'),
     ('Condolences are extended to the family.', 'the Minister has asked me to send you her condolences, and I add my own'),
     ('Assistance will be provided as appropriate.', 'I will telephone you on Thursday morning and will deal with the documents myself'),
     ('Mistakes were made in the handling of the case.', 'the Ministry attached your document to the wrong file, and I am sorry')],

case=dict(
 title='The Decision Room · Which documents are on the list',
 brief=[
  'The condolence letter is excluded from assisted drafting. Karim has asked for the complete '
  'list of documents the Ministry will not have drafted, so that it can be written into the '
  'standing instruction.',
  'Four candidates are proposed: condolence letters, letters acknowledging a Ministry error, '
  'letters to a detained citizen’s family, and the Minister’s own correspondence with '
  'bereaved families.',
  'Rana wants all four. Hana Mourad says a list of four will become a list of forty, and that '
  'the exclusions have to rest on a stated test rather than on a feeling about dignity. Maya '
  'Sarkis asks what new officers will learn from writing them.'],
 exhibit=figs.datatable('CANDIDATES FOR EXCLUSION',
                        ['Document', 'Volume a year', 'Is the actor the point?'],
                        [['letter of condolence', '~90', 'yes'],
                         ['acknowledgement of a Ministry error', '~40', 'yes'],
                         ['letter to a detained citizen’s family', '~260', 'partly'],
                         ['the Minister’s bereavement correspondence', '~12', 'yes'],
                         ['routine consular reply', '~95,000', 'no'],
                         ['public statement of mourning', '~6', 'no']]),
 exhibit_cap='The test in the third column, rather than the subject matter, decides the list.',
 exhibit_note='Letters to a detained citizen’s family are mostly informative, and a minority '
              'are not.',
 voices=[('Rana Deeb', 'Consular Affairs',
          'Exclude all four. In each of them a family keeps the letter and the person who wrote '
          'it is part of what they keep.'),
         ('Dr Hana Mourad', 'Policy Planning',
          'State the test instead of the list: a document is excluded where the identity of the '
          'writer is part of what is communicated. That excludes three of your four and '
          'includes a minority of the detention letters, which is the honest answer.'),
         ('Maya Sarkis', 'the Diplomatic Institute',
          'And keep them on the list for a second reason. An officer who has written forty '
          'condolence letters writes everything else differently, and there is nowhere else '
          'left in this Ministry to learn that.')],
 steps=[('Find it', 'Which documents have the actor as the point?'),
        ('Compare it', 'What are the three positions?'),
        ('Infer it', 'Why does Hana prefer a test to a list?'),
        ('Weigh it', 'A clear list against an honest one.'),
        ('Decide', 'What goes in the standing instruction?')],
 analysis=[('Find it. How many detention letters are written a year?', 'about 260, mostly informative'),
           ('Compare it. What test does Hana propose?', 'that the identity of the writer is part of what is communicated'),
           ('Infer it. What does Maya add?', 'that writing such letters changes how an officer writes everything else'),
           ('Weigh it. How many condolence letters a year?', 'about ninety'),
           ('Decide. What would you do?', 'answers vary; the test plus a named minimum for training covers both arguments')],
 decision='Write the exclusion rule.',
 decision_steps=['State the test for exclusion.',
                 'Name the documents it covers today.',
                 'Say what happens to a document that is partly informative.',
                 'Say what new officers are required to write by hand.'],
 bank=['A document is not to be drafted where …',
       'Today that covers …',
       'Where a document is partly informative, …',
       'Every officer in their first 2 years writes …',
       'This is reviewed …'],
 outcome='The instruction states the test and then names the documents it currently covers: '
         'condolence letters, acknowledgements of a Ministry error, and the Minister’s '
         'bereavement correspondence. Letters to a detained citizen’s family are split: the '
         'informative part is prepared and the covering paragraph is written by the officer. '
         'Every officer in their first two years writes at least ten condolence letters, which '
         'Maya proposed and which turned out to be the clause most often quoted back to the '
         'Institute, usually by officers in their fourth or fifth year saying it was the part '
         'of the training they had not expected to remember.',
 outcome_q=[('What test does the instruction state?', 'that a document is not drafted where the identity of the writer is part of what is communicated'),
            ('What is required of officers in their first two years?', 'writing at least ten condolence letters by hand')],
 tags=[]),

lab=dict(
 title='Brief Lab · Prepare the case and the letter',
 task=['This is the tasking proposed in March, which would have included the condolence letter '
       'with the rest of the pack.',
       'It was withdrawn before it ran, and it is kept as the clearest example of a tasking '
       'that is sound in every respect except its scope.'],
 draft=['Prepare the case documents for a death abroad.',
        'Include a draft letter to the family.',
        'Use a sympathetic tone.',
        'Draw on the post’s report and the certificate.',
        'Have an officer review and sign.',
        'Within two hours.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, four of which are right, and the second changes what the letter is.',
 asked=['The letter excluded by name',
        'No words of sympathy anywhere in the pack',
        'Untranslatable terms marked rather than approximated'],
 back=['A complete pack in minutes',
       'A letter that would read correctly',
       'An officer reviewing and signing something written by nobody'],
 gap='"Include a draft letter" makes the act into a text, "a sympathetic tone" treats the '
     'letter as a register problem, "review and sign" describes editing rather than writing, '
     'and nothing says what to do with a term that cannot be translated.',
 back_cap='A pack that would have saved eleven working days a year and ended ninety acts.',
 back_note='Line two is the failure. Everything else in the tasking is correct, which is why '
           'it would have been approved.',
 diagnosis=[('[1] "the case documents" — which documents, and is the letter one of them?', 'unstated exception'),
            ('[2] "include a draft letter to the family" — assumes the letter is a text to be produced', 'hidden assumption'),
            ('[3] "a sympathetic tone" — assumes the problem is register', 'hidden assumption'),
            ('[4] "draw on the post’s report and the certificate" — and a term with no equivalent?', 'unstated exception'),
            ('[5] "have an officer review and sign" — reviewed against what standard?', 'unstated criterion'),
            ('[6] "within two hours" — two hours of what, measured from when?', 'unstated criterion')],
 rewrite='Rewrite the tasking so that the letter is excluded and the hours are found around it.',
 scaffold=['What the officer is to be left free to do',
           'The documents covered and the letter excluded',
           'The report, the certificate and the published guidance',
           'Sourced facts, marked untranslatables, a document list, no wording of sympathy',
           'The pack and the time, with the letter left to the officer',
           'What to do where the certificate cannot be translated'],
 bank=['Prepare … except … , so that …',
       'Cover … ; … is out of scope and is not to be …',
       'Work from … , … and …',
       'Give … ; translate … and mark … ; list … ; propose no …',
       'Return 1 pack of … , within … , with … left to …',
       'Where … cannot be translated … , … rather than …'],
 check=['Is the letter excluded by name?',
        'Is proposing wording for it forbidden?',
        'Are sympathy formulas excluded from the pack?',
        'Is the officer writing rather than reviewing?'],
 model=['Prepare everything in a death-abroad case except the letter to the family, so that the officer has an hour to write 4 sentences',
        'The case summary, the translation of the local certificate, the list of documents the family will need and a draft of the repatriation arrangements; the letter of condolence is out of scope and is not to be drafted, outlined or suggested',
        'The post’s report, the local certificate, and the Ministry’s published guidance for bereaved families',
        'Give the facts of the case with their sources; translate the certificate and mark any term that has no equivalent; list the documents the family will need with where each is obtained; propose no wording for the letter and no form of words of sympathy anywhere in the pack',
        '1 case pack of 4 documents, within 2 hours of the post’s report, with the letter left to the officer',
        'Where the certificate cannot be translated with confidence, say so and attach the original rather than approximating it'],
 cost='11 working days a year, which is what the Ministry decided to keep spending, and 90 '
      'letters a year that remain acts rather than texts.'),

rev_fig=figs.split('AGENTLESS',
                   'Proper in a statement',
                   ['The Ministry extends its condolences.',
                    'A minute of silence was observed.',
                    'The flag was lowered.',
                    'A book of condolence has been opened.'],
                   'Wrong in a letter',
                   ['Condolences are extended.',
                    'It is deeply regretted.',
                    'Assistance will be provided.',
                    'Mistakes were made.']),
rev_fig_cap='The test is whether the identity of the actor is part of what is communicated.',
rev=dict(
 read=[('The handwritten condolence should be defended on', ['quality', 'what the document is', 'cost', 'tradition'], 1),
       ('A condolence letter contains', ['the arrangements', 'no information', 'the certificate', 'the document list'], 1),
       ('Families write back about', ['the register', 'a detail showing somebody had read', 'the length', 'the signature block'], 1),
       ('In the Decision Room, what are first-year officers required to write?', ['nothing', 'ten condolence letters', 'public statements', 'case packs'], 1)],
 listen_text='A drafted letter can reproduce the traces without the reading, which is exactly '
             'the difficulty: the words would be the same and the act would not have '
             'occurred.',
 listen=[('Reproduce the ____________ without the reading.', 'traces'),
         ('Which is exactly the ____________.', 'difficulty'),
         ('The words would be the ____________.', 'same'),
         ('The act would not have ____________.', 'occurred')],
 speak=['Name one document in your work that must be written by a person, and say why.',
        'Say one agentless sentence that is proper and one that is evasion.'],
 write='Write one line excluding a document from assisted drafting.',
 vocab=[('A letter in which only the name changes is a ____________.', 'form letter'),
        ('The person who signs and may be written back to is a ____________.', 'named sender'),
        ('The quality of a text that one person wrote for another is a ____________.', 'human voice'),
        ('An act whose purpose is to show respect is a ____________.', 'mark of respect'),
        ('The manner of expression of a body rather than a person is an ____________.', 'institutional voice')],
 gram=[('I was very sorry to ____________ of your son’s death.', 'learn'),
       ('The Minister has asked me to send you her condolences, and I ____________ my own.', 'add'),
       ('The Ministry ____________ your document to the wrong file.', 'attached'),
       ('Condolences ____________ extended to the family.', 'are'),
       ('Steps ____________ being taken to prevent a recurrence.', 'are')]),

found=['Name the documents in your work that must be written by a person.',
       'List what could be prepared around one of them.',
       'Find one agentless sentence in your own writing and decide whether it hides an actor.',
       'Ask who signs the most difficult letter your office sends.'],
end_line='The words would be the same, and the act would not have occurred.',
end_next='Next: Four Officers, Forty Officers’ Reach',
)
