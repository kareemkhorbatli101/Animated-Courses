# -*- coding: utf-8 -*-
import figs

U = dict(
num=3, title='Answering in Their Language',
gram='politeness, distance and the impersonal',
ai='multilingual response, and the dialect problem',
strap='CEFR C1 · Grammar: politeness and distance · AI: answering in their language',
cando=['use impersonal and distancing structures to control politeness',
       'choose a form of address that neither patronises nor excludes',
       'say what multilingual response gains and where it fails',
       'identify where a standard variety is the wrong variety',
       'write a tasking that records the language a reply was written in'],
hero=('CORRECT, FLUENT, AND FROM NOWHERE',
      ['Eleven languages, answered in minutes, grammatically faultless.',
       'A man in a border village was addressed as a government addresses a lawyer.'],
      [(730, 'purple', 'long'), (1390, 'teal', 'short'),
       (2050, 'orange', 'long'), (2690, 'blue', 'short')]),
hero_cap='Consular Affairs, reading replies that nobody in the section can read.',

warm=['How many languages does your office receive enquiries in?',
      'What is lost when a reply is in the right language and the wrong variety?',
      'Who in your organisation can check a reply nobody there can read?'],
read=[
 'Before this year the section answered in two languages, which is to say that its response to '
 'every enquiry in a dialect or a third language was to ask the writer to try again. The effect was not that enquiries stopped arriving in other languages; it was '
 'that they arrived and waited, and a proportion of them were answered by whichever officer '
 'happened to have a relative who spoke the language.',
 'The section now replies in the language of the enquiry, in eleven languages this year, '
 'usually within the quarter hour. The grammar is faultless, the register is formal and even, '
 'and no officer in the section can read seven of the eleven.',
 'In June a complaint arrived, in the section’s own second language, from a man who had '
 'written from a border village in Tarnia. His enquiry had been in a regional variety. The '
 'reply had come back in the standard variety of the capital, with the formal address form '
 'used by courts, and he wrote that he had been answered as though he had done something '
 'wrong.',
 'Nothing in the reply was incorrect. Rana Deeb could not read either version and relied on a '
 'local lawyer in Tarnia to explain, which took three days and produced a sentence she has '
 'quoted since: the words were right and the distance was wrong.',
 'The section now holds two things it did not hold before. A record, on every case, of the '
 'language and variety the enquiry arrived in and the reply went out in. And a list of four '
 'languages in which a named person outside the section will read a sample of twenty replies a '
 'month. Rana says the second is expensive and incomplete, because there are eleven languages '
 'and four readers, and that she has no proposal for the other seven.'],
c_a=[('What happened before this year?', 'enquiries in other languages arrived and waited, or were answered by chance'),
     ('How many languages are answered now, and how fast?', 'eleven, usually within the quarter hour'),
     ('What could no officer do?', 'read seven of the eleven languages'),
     ('What was wrong with the June reply?', 'it used the standard variety and the formal address form of courts'),
     ('What did the local lawyer say?', 'that the words were right and the distance was wrong'),
     ('What two things does the section now hold?', 'a record of language and variety, and sampled reading in four languages')],
c_b=[('The old policy stopped enquiries in other languages.', 'F'),
     ('The grammar of the replies is faultless.', 'T'),
     ('The June reply contained an error.', 'F'),
     ('Rana could read both versions.', 'F'),
     ('There are readers for all eleven languages.', 'F'),
     ('The explanation took three days.', 'T')],
c_c=[('Answered by whichever officer happened to have a ____________.', 'relative'),
     ('The register is formal and ____________.', 'even'),
     ('His enquiry had been in a ____________ variety.', 'regional'),
     ('With the formal address form used by ____________.', 'courts'),
     ('The words were right and the ____________ was wrong.', 'distance'),
     ('Eleven languages and four ____________.', 'readers')],
c_d=[('The failure was one of ( accuracy / distance ).', ['accuracy', 'distance'], 1),
     ('How many languages are answered?', ['two', 'eleven', 'four', 'seven'], 1),
     ('How many can officers read?', ['all', 'four', 'seven', 'none'], 1),
     ('How many replies a month are sampled?', ['none', 'twenty', 'two hundred', 'eleven'], 1),
     ('What does Rana say about the remaining seven languages?', ['they are covered', 'she has no proposal', 'they are dropped', 'they are read monthly'], 1)],
c_e=('Match each structure to the distance it creates.',
     [('You must send us two documents.', 'close, and commanding'),
      ('Two documents will be needed.', 'neutral'),
      ('It will be necessary for two documents to be sent.', 'distant'),
      ('Could you send us two documents?', 'close, and asking'),
      ('The Ministry requires two documents.', 'institutional'),
      ('If you are able to send two documents, that would help.', 'close, and tentative')],
     ['close, and commanding', 'neutral', 'distant', 'close, and asking',
      'institutional', 'close, and tentative']),

v_fig_title='LANGUAGE AND VARIETY',
v_fig=[('book', 'a standard variety'), ('pin', 'a regional variety'), ('people', 'a courtesy title'),
       ('key', 'a functional equivalent'), ('doc', 'a back translation'), ('bulb', 'a register of politeness')],
v_fig_cap='Six words for the difference between the right language and the right reply.',
vocab=[
 ('a standard variety', 'the form of a language used in official writing'),
 ('a regional variety', 'the form of a language used in one area'),
 ('a dialect', 'a variety differing in grammar and vocabulary, not only in accent'),
 ('a vernacular', 'the everyday speech of a community'),
 ('a colloquialism', 'an expression belonging to informal speech'),
 ('a formal address form', 'the pronoun or title used to address somebody at a distance'),
 ('an informal address form', 'the pronoun or title used to address somebody closely'),
 ('a rendering into another script', 'the writing of a name or word in a different alphabet'),
 ('a script', 'the set of characters in which a language is written'),
 ('a diacritic', 'a mark added to a letter to change its value'),
 ('a name order', 'the order in which given and family names are written'),
 ('a courtesy title', 'the word of respect used before a name'),
 ('a register of politeness', 'the level of deference a form of words carries'),
 ('a literal translation', 'a translation following the words of the original'),
 ('a functional equivalent', 'a rendering that does the same job in the other language'),
 ('an untranslatable term', 'a word with no equivalent in the other language'),
 ('a back translation', 'a translation of a translation, used to check it'),
 ('a bilingual reply', 'a reply sent in two languages together'),
 ('a language preference', 'the language a person has asked to be written to in'),
 ('a plain-language version', 'a version written to be understood without training')],
v_a=[('The form of a language used in official writing is a ____________.', 'standard variety'),
     ('A rendering that does the same job in the other language is a ____________.', 'functional equivalent'),
     ('A translation of a translation, used to check it, is a ____________.', 'back translation'),
     ('The level of deference a form of words carries is a ____________.', 'register of politeness'),
     ('The order in which given and family names are written is a ____________.', 'name order'),
     ('A version written to be understood without training is a ____________.', 'plain-language version'),
     ('A word with no equivalent in the other language is an ____________.', 'untranslatable term'),
     ('The pronoun or title used to address somebody at a distance is a ____________.', 'formal address form')],
v_b=[('A dialect is a variety differing in grammar and vocabulary,', 'not only in accent.'),
     ('A vernacular is the everyday speech', 'of a community.'),
     ('A diacritic is a mark added to a letter', 'to change its value.'),
     ('A bilingual reply is a reply sent', 'in two languages together.'),
     ('A language preference is the language a person', 'has asked to be written to in.')],

g_title='Grammar: politeness, distance and the impersonal',
g_rule=['The impersonal increases distance: it will be necessary for documents to be sent.',
        'The passive without an agent removes the Ministry from the sentence.',
        'A question lowers distance: could you send us two documents?',
        'In consular correspondence, choose the least distance the content allows, and no '
        'less.'],
g_fig=('LOOSE',
       ['It is incumbent upon the applicant to furnish the requisite documentation.',
        'You must send us the papers at once.',
        'The matter will be attended to in due course.',
        'Kindly note the requirement hereinbefore stated.'],
       'PRECISE',
       ['You will need to send us two documents.',
        'Could you send us the two documents when you are able to?',
        'I will write to you again by 24 March.',
        'The two documents are listed below, with where to get each.'],
       'four replies at maximum distance, two of them discourteous',
       'four replies at the least distance the content allows'),
g_fig_cap='Maximum distance reads as institutional self-protection, which is often what it is.',
g_a=[('____________ will need to send us two documents.', 'You'),
     ('Could you send us the documents when you are ____________ to?', 'able'),
     ('I will write to you ____________ by 24 March.', 'again'),
     ('The two documents are ____________ below.', 'listed'),
     ('It will be ____________ for a medical report to be provided.', 'necessary'),
     ('The matter will be ____________ to in due course.', 'attended'),
     ('No undertaking can be ____________ as to the outcome.', 'given'),
     ('Two documents ____________ be needed.', 'will'),
     ('The Ministry ____________ two documents.', 'requires')],
g_b=[('The impersonal ( increases / reduces ) distance.', ['increases', 'reduces'], 0),
     ('Which is least distant?', ['It is incumbent upon the applicant …', 'Could you send us …', 'The matter will be attended to …', 'Kindly note …'], 1),
     ('An agentless passive removes', ['the applicant', 'the Ministry', 'the date', 'the document'], 1),
     ('In consular correspondence, choose', ['maximum distance', 'the least distance the content allows', 'the formal address always', 'no address form'], 1),
     ('Which is discourteous despite being formal?', ['You will need two documents.', 'You must send us the papers at once.', 'Could you send us …', 'I will write by 24 March.'], 1),
     ('Which is institutional?', ['You will need …', 'The Ministry requires two documents.', 'Could you …', 'I am sorry …'], 1)],

d1=dict(title='The words were right',
        fig=(['Nothing in it was wrong.', 'And he felt accused.'],
             ['Which part?', 'The address form.']),
        cap='Rana Deeb and the lawyer in Tarnia who read both versions, by telephone.',
        lines=[('Rana', 'He says he was answered as though he had done something wrong. I '
                        'cannot read either version.'),
               ('Lawyer', 'Nothing in the reply is incorrect. The information is right and the '
                           'grammar is better than mine.'),
               ('Rana', 'Then what did he read?'),
               ('Lawyer', 'He wrote in the variety spoken in his village. The reply came back in '
                           'the standard variety of our capital, with the address form that '
                           'courts use when they write to a party.'),
               ('Rana', 'Is that form impolite?'),
               ('Lawyer', 'It is extremely polite. It is the politeness of an institution '
                           'addressing somebody it is processing. In his village a letter in '
                           'that form means a summons, a tax demand or a prosecution.'),
               ('Rana', 'So the reply told him he was in trouble.'),
               ('Lawyer', 'The reply told him that the matter had become official. He has '
                           'written to a consulate about a lost document and received a letter '
                           'that looks like the beginning of something.'),
               ('Rana', 'The words were right and the distance was wrong.'),
               ('Lawyer', 'That is it exactly, and I would add that nobody in your building '
                           'could have seen it, because the error is invisible to anybody who '
                           'reads the language as a second language.'),
               ('Rana', 'Which is everybody who could have checked it.'),
               ('Lawyer', 'Which is everybody who could have checked it. You need a reader who '
                           'speaks it as a first language, and you need them before the reply '
                           'goes, not three days after a complaint.')],
        a=[('What was wrong with the reply?', 'the variety and the address form, not the information'),
           ('What does that address form mean in his village?', 'a summons, a tax demand or a prosecution'),
           ('What did the reply tell him?', 'that the matter had become official'),
           ('Why could nobody in the Ministry see it?', 'because the error is invisible to a second-language reader'),
           ('What does the lawyer say is needed?', 'a first-language reader, before the reply goes')],
        b=[('The politeness of an institution addressing somebody it is ____________.', 'processing'),
           ('A letter that looks like the ____________ of something.', 'beginning'),
           ('Invisible to anybody who reads the language as a ____________ language.', 'second'),
           ('Before the reply ____________, not three days after a complaint.', 'goes')]),
d2=dict(title='Four readers, eleven languages',
        fig=(['Four named readers.', 'And eleven languages.'],
             ['Then seven are unchecked.', 'Seven are unchecked.']),
        cap='Rana and Dr Hana Mourad.',
        lines=[('Hana', 'You have arranged first-language readers for four of the eleven '
                        'languages, sampling twenty replies a month.'),
               ('Rana', 'Four, chosen by volume. The other seven are unchecked and I want that '
                        'written down rather than implied.'),
               ('Hana', 'What would it cost to cover all eleven?'),
               ('Rana', 'For three of the seven I cannot find a reader at all who is not also a '
                        'party to the kind of case we handle, which is a conflict I will not '
                        'accept. For the other four it is a question of money and I have asked.'),
               ('Hana', 'And in the meantime?'),
               ('Rana', 'In the meantime seven languages receive replies that are fluent, '
                        'correct, and unreviewed by anybody who would notice what happened in '
                        'June. I know that is the position and I have no way to improve it this '
                        'year.'),
               ('Hana', 'Could you reduce the distance generally? If the fault was excessive '
                        'formality, write everything less formally.'),
               ('Rana', 'That is the obvious move and I am not sure it is safe. In some of the '
                        'eleven, reducing formality to a stranger is itself an offence, and I '
                        'would be substituting one error I cannot see for another.'),
               ('Hana', 'So you do not know which way to err.'),
               ('Rana', 'In seven languages I do not know which way to err, and anybody who '
                        'tells you they do without a first-language reader is guessing. I would '
                        'rather record that in the annual report than discover in four years '
                        'that we have been writing to people in a tone we would not use to each '
                        'other.')],
        a=[('How many languages have readers?', 'four, chosen by volume'),
           ('Why can three of the seven not be covered?', 'because no reader is available who is not also a party to such cases'),
           ('What is the position in seven languages?', 'replies are fluent, correct and unreviewed by anybody who would notice'),
           ('Why not simply reduce formality everywhere?', 'because in some languages reducing formality to a stranger is itself an offence'),
           ('Is the problem resolved?', 'no; Rana records that she does not know which way to err')],
        b=[('Four, chosen by ____________.', 'volume'),
           ('A ____________ I will not accept.', 'conflict'),
           ('Substituting one error I cannot see for ____________.', 'another'),
           ('I do not know which way to ____________.', 'err')],
        unresolved=True),

speak=[('Choose the distance',
        ['Student A: ask for something in the most formal words you can.',
         'Student B: reduce the distance twice, keeping the content.',
         'Say which version you would send to a stranger in difficulty.']),
       ('The wrong variety',
        ['Describe a form of words that would be correct and badly received in your own context.',
         'Say who would notice and who would not.',
         'Say what would have prevented it.']),
       ('Who can read it',
        ['List the languages your office writes in.',
         'Say who could check a reply in each.',
         'Name the ones nobody could check.'])],

ext_title='Multilingual reply is accurate in the language and blind to the variety and the distance',
ext_fig=figs.datatable('ELEVEN LANGUAGES',
                       ['', 'Figure', 'Note'],
                       [['languages replied in this year', '11', 'was 2'],
                        ['median reply time', '14 minutes', 'was 4 days or never'],
                        ['languages any officer can read', '4', '—'],
                        ['languages with a first-language reader', '4', 'sampling 20 a month'],
                        ['languages unchecked', '7', '—'],
                        ['complaints about tone, this year', '6', '5 in unchecked languages']]),
ext_fig_cap='The first two rows are a transformation. The last three are the price, and it is '
            'not paid in accuracy.',
ext=[
 'Multilingual reply, and with it the dialect problem, begins with an older arrangement. A consular section that replies in two languages and asks everybody else to write in one of '
 'them has not reduced the number of enquiries in other languages. It has created a queue of '
 'them, and that queue is answered unevenly, late, and sometimes by an officer who has asked a '
 'relative for help.',
 'Replying in the language of the enquiry changes that completely, and the scale of the change '
 'is not in dispute: a section of eleven officers answering in eleven languages within the '
 'quarter hour is doing something no consular service of its size has ever done. The grammar '
 'is faultless and the information is right.',
 'The failure is not in the language. It is in the variety and in the distance. A reply in the '
 'standard variety of a capital city, using the address form that institutions use when they '
 'write to a party, is correct and may read, to somebody in a border village, as the beginning '
 'of a prosecution. The content was a list of two documents; what arrived was a letter of the '
 'kind that precedes trouble.',
 'What makes this hard to govern is that the error is invisible from inside the ministry. '
 'Anybody who reads the language as a second language sees correct grammar and appropriate '
 'formality, because formality is what a second-language reader has been taught. The judgement '
 'required is one that only a first-language reader makes reliably, and a section replying in '
 'eleven languages does not have first-language readers in eleven languages.',
 'Two practices are available and neither is sufficient. Record, on every case, the language '
 'and variety of the enquiry and of the reply, so that a pattern of complaints can later be '
 'traced to a language rather than to a mood. And arrange first-language readers to sample '
 'replies in as many languages as can be covered, naming the languages that are not covered '
 'rather than implying coverage. The temptation, where coverage is impossible, is to reduce '
 'formality everywhere on the theory that the fault was excessive distance; in some languages '
 'that substitutes a worse offence, and a section that cannot read its own replies does not '
 'know which way to err.'],
dp1=('Multilingual consular response',
     'Consular services in several foreign ministries extended automated reply to many more '
     'languages in 2025, adding first-language sampling of outgoing replies and recording the '
     'language and variety of each case.',
     'Source: reported practice in consular services, 2025–2026.'),
e_a=[('What does a two-language policy actually produce?', 'a queue of enquiries in other languages, answered unevenly and late'),
     ('What is not in dispute?', 'the scale of the change: eleven languages within the quarter hour'),
     ('Where is the failure?', 'in the variety and the distance, not the language'),
     ('Why is it invisible inside the ministry?', 'because a second-language reader sees correct grammar and expected formality'),
     ('What are the two insufficient practices?', 'recording language and variety, and first-language sampling with uncovered languages named')],
e_b=[('A two-language policy reduces enquiries in other languages.', 'F'),
     ('The grammar of the replies is poor.', 'F'),
     ('A second-language reader reliably detects wrong distance.', 'F'),
     ('Reducing formality everywhere is safe.', 'F'),
     ('Uncovered languages should be named.', 'T'),
     ('Recording the variety allows complaints to be traced.', 'T')],

w_model=(
 'Purpose: reply to each enquiry in the language and variety it was written in, so that a '
 'citizen is addressed as a member of the public rather than as a party to proceedings. Scope: '
 'the 11 languages in which enquiries have been received this year; replies concerning '
 'detention, death or a missing person are out of scope and are drafted by the duty officer. '
 'Inputs: the enquiry, the published standard answers, and the section’s note on address '
 'forms. Criteria: reply in the language of the enquiry and, where the enquiry is in a '
 'regional variety, in that variety; use the address form for a member of the public and not '
 'the form used in official or judicial correspondence; record on the case the language and '
 'variety of the enquiry and of the reply; where the variety cannot be identified, use the '
 'standard variety and record that it was not identified. Done: 1 reply per enquiry within 15 '
 'minutes, with the language and variety recorded, and 20 replies a month in each covered '
 'language placed before a first-language reader. Fallback: where the language is 1 of the 7 '
 'without a reader, mark the case as unreviewed in the monthly record.'),
w_fig=figs.spec_card('THE TASKING FOR MULTILINGUAL REPLY',
                     [('Purpose', 'addressed as a member of the public, not a party'),
                      ('Scope', 'the 11 languages; welfare cases excluded'),
                      ('Inputs', 'the enquiry, the standard answers, the note on address forms'),
                      ('Criteria', 'language and variety matched; public address form; both recorded'),
                      ('Done', '1 reply in 15 minutes; 20 a month to a first-language reader'),
                      ('Fallback', 'no reader: marked unreviewed in the monthly record')]),
w_fig_cap='Marked unreviewed is the clause that stops seven languages looking covered.',
w_task='Write a reply tasking for the languages your own office receives.',
w_steps=['Say how the reader is to be addressed.',
         'Name the languages covered and the cases excluded.',
         'Require the variety to be matched and recorded.',
         'Name the address form to be used and the one to be avoided.',
         'Say what happens where no first-language reader exists.'],
w_bank=['Reply … so that a citizen is addressed as … rather than as …',
        'Cover … ; … are out of scope and are drafted by …',
        'Work from … , … and …',
        'Reply in … and, where … , in that variety; use … and not … ; record … ; where … cannot be identified, …',
        'Where the language is 1 of the … , mark …'],
w_check=['Is the address form specified by name?',
         'Is the variety recorded as well as the language?',
         'Is sampling by a first-language reader required?',
         'Are uncovered languages marked rather than implied?'],

t_title='Multilingual response and the dialect problem',
t_fig=figs.split('A REPLY IN ELEVEN LANGUAGES',
                 'Reliably right',
                 ['the information',
                  'the grammar',
                  'the published requirement cited',
                  'the time: 14 minutes'],
                 'Unreliable',
                 ['the variety',
                  'the address form',
                  'the distance the reader feels',
                  'anything a second-language reader cannot see']),
t_fig_cap='The left column is a transformation of service. The right column is why six people complained.',
t_body=[
 'Multilingual reply changes a service, and the dialect problem is the price. Replying only in your own two languages does not stop enquiries arriving in others; it '
 'creates a queue that is answered late, unevenly, and sometimes by an officer who asked a '
 'relative. Replying in the language of the enquiry ends that, and a section of eleven '
 'officers answering in eleven languages inside the quarter hour is doing something new in '
 'consular work. Take it.',
 'The failure is not in the language but in the variety and the distance. The standard variety '
 'of a capital, with the address form institutions use when writing to a party, is impeccable '
 'and may read in a border village as the opening of a prosecution. The content was two '
 'documents; what arrived was a letter of the kind that precedes trouble.',
 'And the error cannot be seen from inside the Ministry, because a second-language reader sees '
 'correct grammar and the formality they were taught to expect. So record the language and '
 'variety of every enquiry and every reply, sample replies with first-language readers in as '
 'many languages as can be covered, and name the languages that are not covered rather than '
 'letting silence imply they are. Resist the obvious correction of reducing formality '
 'everywhere: in some languages that is a worse offence, and a section that cannot read its '
 'own replies does not know which way to err.'],
t_say=[('Match the variety: ', 'Where the enquiry is in a regional variety, reply in that variety.'),
       ('Name the form: ', 'The address form for a member of the public, not for a party.'),
       ('Mark the gap: ', '7 languages: unreviewed, named in the monthly record.')],
t_bound=('Multilingual reply is reliable about information and grammar and unreliable about '
         'variety, address form and distance, which are the parts a recipient actually feels. '
         'Nobody who reads a language as a second language can audit them, so a section '
         'replying in eleven languages is unable to check seven of its own outputs, and no '
         'adjustment of formality made from inside the building is better than a guess.'),
t_a=[('Where the enquiry is in a regional ____________, reply in that variety.', 'variety'),
     ('The address form for a member of the ____________, not for a party.', 'public'),
     ('7 languages: ____________, named in the monthly record.', 'unreviewed'),
     ('May read in a border village as the opening of a ____________.', 'prosecution'),
     ('A second-language reader sees the formality they were taught to ____________.', 'expect'),
     ('Does not know which way to ____________.', 'err')],
t_b_rubric='Rewrite each at the least distance the content allows.',
t_b=[('It is incumbent upon the applicant to furnish the requisite documentation.', 'you will need to send us two documents'),
     ('You must send us the papers at once.', 'could you send us the two documents when you are able to'),
     ('The matter will be attended to in due course.', 'I will write to you again by 24 March'),
     ('Kindly note the requirement hereinbefore stated.', 'the two documents are listed below, with where to get each')],

case=dict(
 title='The Decision Room · Seven languages nobody reads',
 brief=[
  'Four of eleven languages have first-language readers. Seven do not, and three of those seven '
  'cannot be covered because no available reader is independent of the cases.',
  'Six complaints about tone arrived this year, five of them in the unchecked seven.',
  'Rana proposes publishing the list of unchecked languages in the section’s annual report. '
  'Yara Ibrahim says publishing it invites the question why the Ministry replies at all in '
  'those languages. Karim Dalati says not publishing it is worse.'],
 exhibit=figs.datatable('COVERAGE AND COMPLAINTS',
                        ['', 'Covered 4', 'Unchecked 7'],
                        [['replies sent this year', '~41,000', '~9,400'],
                         ['sampled monthly', '80', '0'],
                         ['tone complaints', '1', '5'],
                         ['complaint rate per 10,000', '0.2', '5.3'],
                         ['readers available but conflicted', '—', '3 languages'],
                         ['readers available for money', '—', '4 languages']]),
 exhibit_cap='The unchecked languages generate twenty-six times the complaint rate.',
 exhibit_note='Covering the 4 purchasable languages would cost about the price of 1 officer for '
              '3 months a year.',
 voices=[('Rana Deeb', 'Consular Affairs',
          'Publish the seven. A section that does not say what it cannot check will be assumed '
          'to check everything, and the assumption will be quoted at us when the seventh '
          'complaint arrives.'),
         ('Yara Ibrahim', 'Press and Public Diplomacy',
          'Publish it and somebody will ask why we answer in languages we cannot review. The '
          'honest answer is that the alternative is not answering, and that answer does not '
          'survive a headline.'),
         ('Karim Dalati', 'Information Security and Records',
          'The complaint rate is twenty-six times higher in the unchecked languages. That '
          'figure exists. If it is not published by us it will be calculated by somebody else, '
          'and later.')],
 steps=[('Find it', 'What is the complaint rate in each group?'),
        ('Compare it', 'What are the three positions?'),
        ('Infer it', 'Why does Yara expect the honest answer to fail publicly?'),
        ('Weigh it', 'An uncomfortable disclosure against an assumption of coverage.'),
        ('Decide', 'What is published, and what is purchased?')],
 analysis=[('Find it. How many complaints came from the unchecked seven?', 'five of six'),
           ('Compare it. What does Karim point out?', 'that the figure exists and will otherwise be calculated by somebody else'),
           ('Infer it. What is Yara’s concern?', 'that the honest answer, that the alternative is not answering, will not survive a headline'),
           ('Weigh it. What would covering four more cost?', 'about one officer for three months a year'),
           ('Decide. What would you do?', 'answers vary; publishing with the alternative stated is the position Karim’s figure forces')],
 decision='Write what the section publishes and what it asks for.',
 decision_steps=['Say what is published about coverage.',
                 'Say what is said about the alternative to replying.',
                 'Say what resource is requested, and for which languages.',
                 'Say what is done about the three conflicted languages.'],
 bank=['The section publishes …',
       'It states that the alternative to replying is …',
       'It requests … for … languages.',
       'For the 3 conflicted languages, …',
       'This is reviewed …'],
 outcome='The section published the list of unchecked languages with one sentence saying that '
         'the alternative to replying in them is not replying at all, and requested funding for '
         'four readers. The funding was granted in the following year, which reduced the '
         'unchecked languages from seven to three. For the three conflicted languages the '
         'section adopted a different device: replies are sent with a line inviting the '
         'recipient to say if the wording was not appropriate, and eleven such replies came '
         'back in the first year, four of them identifying the same address form. Yara, who had '
         'feared the headline, says the sentence about the alternative did the work and that the '
         'invitation line produced better information than a reader would have.',
 outcome_q=[('What was published, and with what sentence?', 'the unchecked languages, with the alternative being no reply at all'),
            ('What device covered the three conflicted languages?', 'a line inviting recipients to say if the wording was not appropriate')],
 tags=[]),

lab=dict(
 title='Brief Lab · Reply in their language',
 task=['This is the instruction under which the section began replying in eleven languages.',
       'It produced grammatically faultless replies and six complaints about tone.'],
 draft=['Reply to each enquiry in the language it was written in.',
        'Use correct and polite language.',
        'Keep to the standard answers.',
        'Be respectful of local usage.',
        'Record the language used.',
        'Reply as quickly as for our own languages.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and "polite" is the word that produced the complaints.',
 asked=['The variety matched and recorded',
        'A named address form for the public',
        'Unreviewed languages marked as such'],
 back=['11 languages answered in 14 minutes',
       'Standard varieties and judicial address forms',
       'No record of variety and no sampling'],
 gap='"Correct and polite" leaves politeness to be maximised, "the standard answers" is a '
     'standard variety as well as a standard content, "respectful of local usage" names no '
     'usage, and "record the language" omits the variety, which is the thing that failed.',
 back_cap='Replies that were right in every respect anybody in the building could assess.',
 back_note='Line two is the failure. Politeness maximised becomes institutional distance, and '
           'nobody in the section could see it happening.',
 diagnosis=[('[1] "each enquiry" — including detention and death cases?', 'unstated exception'),
            ('[2] "correct and polite" — polite to what degree, judged by whom?', 'unstated criterion'),
            ('[3] "the standard answers" — in which variety?', 'unstated criterion'),
            ('[4] "respectful of local usage" — which usage, recorded where?', 'unscoped set'),
            ('[5] "record the language used" — and the variety?', 'unscoped set'),
            ('[6] nothing on languages nobody can read — reviewed or not?', 'unstated exception')],
 rewrite='Rewrite the instruction so that variety and address form are specified and gaps are '
         'marked.',
 scaffold=['How the reader is to be addressed',
           'The languages covered and the cases excluded',
           'The enquiry, the standard answers and the note on address forms',
           'Language and variety matched, the public address form named, both recorded',
           'The reply time and the sampling',
           'What happens where no first-language reader exists'],
 bank=['Reply … so that a citizen is addressed as …',
       'Cover … ; … are out of scope …',
       'Work from … , … and …',
       'Reply in … ; use … and not … ; record … ; where … cannot be identified, …',
       'Return 1 reply within … , and … a month to …',
       'Where … , mark …'],
 check=['Is the variety specified and recorded?',
        'Is the address form named rather than left to politeness?',
        'Is sampling required where readers exist?',
        'Are unreviewed languages marked?'],
 model=['Reply to each enquiry in the language and variety it was written in, so that a citizen is addressed as a member of the public rather than as a party to proceedings',
        'The 11 languages in which enquiries have been received this year; replies concerning detention, death or a missing person are out of scope and are drafted by the duty officer',
        'The enquiry, the published standard answers, and the section’s note on address forms',
        'Reply in the language of the enquiry and, where the enquiry is in a regional variety, in that variety; use the address form for a member of the public and not the form used in official or judicial correspondence; record on the case the language and variety of the enquiry and of the reply; where the variety cannot be identified, use the standard variety and record that it was not identified',
        '1 reply per enquiry within 15 minutes, with the language and variety recorded, and 20 replies a month in each covered language placed before a first-language reader',
        'Where the language is 1 of the 7 without a reader, mark the case as unreviewed in the monthly record'],
 cost='6 citizens addressed in the form their own institutions use to begin proceedings, and '
      '9,400 replies a year that nobody in the Ministry could read.'),

rev_fig=figs.split('DISTANCE',
                   'Maximum',
                   ['It is incumbent upon the applicant …',
                    'The matter will be attended to …',
                    'Kindly note the requirement …',
                    'No undertaking can be given …'],
                   'Least the content allows',
                   ['You will need to send us two documents.',
                    'I will write to you again by 24 March.',
                    'The two documents are listed below.',
                    'I cannot tell you the outcome yet.']),
rev_fig_cap='The impersonal increases distance; a question lowers it; choose the least the content allows.',
rev=dict(
 read=[('A two-language policy produces', ['fewer other languages', 'a queue answered late', 'better replies', 'no change'], 1),
       ('The failure was in', ['the information', 'the variety and the distance', 'the grammar', 'the speed'], 1),
       ('A second-language reader sees', ['the wrong distance', 'correct grammar and expected formality', 'the variety', 'the dialect'], 1),
       ('In the Decision Room, what covered the conflicted languages?', ['a reader', 'an invitation line in the reply', 'nothing', 'a translation'], 1)],
 listen_text='A reply in the standard variety of a capital city, using the address form that '
             'institutions use when they write to a party, is correct and may read, to '
             'somebody in a border village, as the beginning of a prosecution.',
 listen=[('The standard variety of a ____________ city.', 'capital'),
         ('The address form institutions use when they write to a ____________.', 'party'),
         ('To somebody in a border ____________.', 'village'),
         ('As the beginning of a ____________.', 'prosecution')],
 speak=['Say one request at three levels of distance.',
        'Name a language your office writes in that nobody there can check.'],
 write='Write one line marking a language as unreviewed.',
 vocab=[('The form of a language used in official writing is a ____________.', 'standard variety'),
        ('A rendering that does the same job in the other language is a ____________.', 'functional equivalent'),
        ('A translation of a translation, used to check it, is a ____________.', 'back translation'),
        ('The level of deference a form of words carries is a ____________.', 'register of politeness'),
        ('A version written to be understood without training is a ____________.', 'plain-language version')],
 gram=[('____________ will need to send us two documents.', 'You'),
       ('Could you send us the documents when you are ____________ to?', 'able'),
       ('It will be ____________ for a medical report to be provided.', 'necessary'),
       ('The matter will be ____________ to in due course.', 'attended'),
       ('The Ministry ____________ two documents.', 'requires')]),

found=['Find out which languages your office replies in and who can read each.',
       'Rewrite one formal sentence at the least distance the content allows.',
       'Record the variety as well as the language on one case.',
       'Ask one recipient whether the wording was appropriate.'],
end_line='The words were right and the distance was wrong.',
end_next='Next: A Time Zone That Is Asleep',
)
