# -*- coding: utf-8 -*-
"""Constructors for practice items. Leading underscore keeps the build's
item discovery from treating this as a content module."""

INSTR = ['Express and support your opinion.',
         'Make a contribution to the discussion in your own words.',
         'An effective response will contain at least 100 words.']


def em(id, fn, pay, scenario, bullets, to, subj,
       preview, model, followup, degraded, keys):
    s, g, v, c = pay
    return {
      'id': id, 'task': 'WRITE AN EMAIL', 'time': '7 minutes', 'function': fn,
      'payload': {'Strategy': s, 'Grammar': g, 'Vocabulary': v,
                  'Convention': c},
      'scenario': [scenario] if isinstance(scenario, str) else scenario,
      'bullets': bullets, 'header': [('To:', to), ('Subject:', subj)],
      'preview': preview, 'model_band': 5, 'model': model,
      'followup': followup, 'degraded_band': 3, 'degraded': degraded,
      'degraded_after': 'F3', 'keys': keys}


def ad(id, fn, pay, prof, professor, students,
       preview, model, followup, degraded, keys):
    s, g, v, c = pay
    return {
      'id': id, 'task': 'WRITE FOR AN ACADEMIC DISCUSSION', 'time': '10 minutes',
      'function': fn,
      'payload': {'Strategy': s, 'Grammar': g, 'Vocabulary': v,
                  'Convention': c},
      'prof_name': prof,
      'professor': [professor] if isinstance(professor, str) else professor,
      'students': students, 'instructions': INSTR,
      'preview': preview, 'model_band': 5, 'model': model,
      'followup': followup, 'degraded_band': 3, 'degraded': degraded,
      'degraded_after': 'F3', 'keys': keys}
