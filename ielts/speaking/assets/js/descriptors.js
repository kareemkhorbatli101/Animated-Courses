/* THE BAND DESCRIPTORS, AS DATA THE COURSE OWNS.
 *
 * WHY THIS FILE EXISTS. The first version of the tutor told the model to "judge against the IELTS
 * public band descriptors for Speaking" and then did not supply them. A language model asked to
 * apply a document it has not been given applies its impression of that document, which is why the
 * owner read a marking that was fluent, confident and not what an examiner would have said.
 *
 * WHAT THIS IS, EXACTLY. A feature-by-feature statement of what separates bands 5, 6, 7 and 8 on
 * each of the four criteria, written here in this course's own words. It is NOT a reproduction of
 * the official document: that text belongs to the test owners, and a course that pretends to BE
 * the rubric is lying to its learners about what it is. It is a faithful working summary, and the
 * page says so where a learner can read it.
 *
 * THE FOUR BANDS AND NOT NINE. The course runs from 6.5 to 8.0 and its learners are aiming at 7.
 * Giving the model the three bands either side of the target is what makes it discriminate; giving
 * it all nine makes it hedge. 4 and below, and 9, are named in one line each so the model knows
 * which direction it is looking.
 *
 * HOW IT IS USED. The tutor sends the descriptors for the criterion it is judging, not all four,
 * so the model reads about forty lines rather than four hundred and does not start quoting the
 * rubric back instead of the candidate.
 */
(function (w) {
  'use strict';
  var IELTS = w.IELTS = w.IELTS || {};

  IELTS.descriptors = {

    /* Each criterion: an ordered list from 8 down to 5, each a list of the features that DECIDE
       that band. Written as things an examiner can hear, not as adjectives. */

    fc: {
      label: 'Fluency and coherence',
      what: 'Can they keep going, and can a listener follow the shape of what they are saying?',
      bands: {
        8: ['speaks fluently with only very occasional repetition or self-correction',
            'any hesitation is to find CONTENT, not to find language',
            'develops topics coherently and appropriately',
            'a wide range of connectives, used flexibly and not repeated'],
        7: ['speaks at length without noticeable effort or loss of coherence',
            'some hesitation, some repetition, some self-correction — usually language-related',
            'uses a range of connectives and discourse markers with SOME flexibility',
            'HOLDS AT 7 RATHER THAN 8 WHEN: one marker or one opening is reused across answers '
            + 'until the pattern is audible'],
        6: ['willing to speak at length, but coherence is sometimes lost',
            'repetition, self-correction and hesitation are noticeable',
            'uses a range of connectives but not always appropriately',
            'DROPS TO 6 WHEN: answers end where they began, or a reason restates the question'],
        5: ['keeps going but with noticeable effort, and often repeats to do it',
            'may over-use simple connectives, and some breakdown in coherence',
            'DROPS TO 5 WHEN: a complex answer is abandoned and restarted more simply']
      }
    },

    lr: {
      label: 'Lexical resource',
      what: 'Have they got the words, and can they get round the ones they have not got?',
      bands: {
        8: ['a wide resource, used readily and flexibly to say precise meanings',
            'skilful use of less common and idiomatic vocabulary, with occasional inaccuracy',
            'paraphrases effectively, and the listener does not notice the gap'],
        7: ['enough flexibility to discuss a variety of topics',
            'some less common and idiomatic vocabulary, with some awareness of style',
            'some inaccurate word choices; paraphrases effectively',
            'HOLDS AT 7 RATHER THAN 8 WHEN: the resource is deep on one topic and visibly thinner '
            + 'a step away from it'],
        6: ['a wide enough resource to discuss topics at length, and to make meaning clear '
            + 'in spite of inappropriate word choices',
            'generally paraphrases successfully',
            'DROPS TO 6 WHEN: everything is evaluated with the same three or four adjectives'],
        5: ['manages to talk about familiar and unfamiliar topics with limited flexibility',
            'attempts to paraphrase, but not always successfully']
      }
    },

    gra: {
      label: 'Grammatical range and accuracy',
      what: 'What structures do they reach for, and do the structures hold when they do?',
      bands: {
        8: ['a wide range of structures, used flexibly',
            'the majority of sentences are error-free',
            'only occasional, non-systematic errors or inappropriacies'],
        7: ['a range of complex structures with SOME flexibility',
            'frequent error-free sentences, though not a majority of them',
            'some errors persist',
            'HOLDS AT 7 RATHER THAN 8 WHEN: the complex sentences are all built the same way — a '
            + 'main clause and then the same subordinator, again and again'],
        6: ['a mix of simple and complex structures, with limited flexibility',
            'errors in the complex structures, though they rarely stop the listener understanding',
            'DROPS TO 6 WHEN: complex sentences are started and abandoned, or an error makes the '
            + 'listener re-run the clause'],
        5: ['basic sentence forms are reasonably accurate',
            'limited range of more complex structures, which usually contain errors']
      }
    },

    pr: {
      label: 'Pronunciation',
      what: 'Can a listener follow it without working, and is the stress doing any work?',
      bands: {
        8: ['a wide range of pronunciation features, sustained',
            'occasional lapses, and accent has almost no effect on understanding'],
        7: ['shows all the positive features of band 6 and some of band 8',
            'can generally be understood throughout; L1 accent has minimal effect'],
        6: ['uses a range of pronunciation features with mixed control',
            'shows some effective use of features, but not sustained',
            'can generally be understood, though mispronunciation reduces clarity at times'],
        5: ['a limited range of pronunciation features',
            'attempts to control them but lapses are frequent',
            'mispronunciations are frequent and cause some difficulty for the listener']
      }
    }
  };

  /* NAMED SO THE PAGE CAN SAY WHAT THIS IS. A learner is entitled to know that the thing marking
     them is working from a summary written by this course, not from the official document. */
  IELTS.descriptors._provenance =
    'A working summary of what separates bands 5 to 8 on each criterion, written for this course. '
    + 'It is not the official IELTS band descriptors and does not reproduce them. The official '
    + 'public descriptors are published by the test owners and should be read alongside this.';

  /* Only the criterion being judged is sent to the model. Forty lines, not four hundred: a model
     given the whole rubric starts quoting the rubric instead of the candidate. */
  IELTS.descriptors.forPrompt = function (key, target) {
    var c = IELTS.descriptors[key];
    if (!c) return '';
    var out = ['CRITERION: ' + c.label, '(' + c.what + ')', ''];
    var want = [8, 7, 6, 5];
    if (target && target >= 8) want = [9, 8, 7, 6];
    want.forEach(function (b) {
      var fs = c.bands[b];
      if (!fs) return;
      out.push('BAND ' + b + ':');
      fs.forEach(function (f) { out.push('  - ' + f); });
    });
    out.push('');
    out.push('Band 9 is the same as 8 with no lapses at all. Band 4 and below is not in range for '
             + 'this candidate and should not be considered unless the answer collapses.');
    return out.join('\n');
  };
}(window));
