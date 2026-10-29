# -*- coding: utf-8 -*-
"""Static page generation.

One HTML file per exercise, each with its own data inlined. No router, no
fetch, no build step at the far end: the pages work opened straight off a
disk, which is the whole point of the package.
"""
import json
import richhtml as R

SHELL = '''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>{title}</title>
<meta name="description" content="{desc}">
<link rel="stylesheet" href="{root}assets/app.css">
</head>
<body>
<header class="topbar">
<a href="{root}index.html">Contents</a>
<span class="grow"></span>
{nav}
<button class="iconbtn" id="theme" type="button" title="Light, dark, or follow the system">&#9680;</button>
</header>
<main id="page"></main>
<noscript><p style="max-width:40em;margin:2em auto;padding:0 1em">
This page is an interactive exercise and needs JavaScript. Nothing is sent
anywhere &mdash; the script runs entirely in this browser, offline.
</p></noscript>
<script>window.{var}={data};</script>
<script src="{root}assets/app.js"></script>
</body>
</html>
'''


def nav(prev, nxt, where):
    bits = []
    if prev:
        bits.append('<a href="%s.html" rel="prev">&lsaquo; %s</a>'
                    % (prev[0], R.esc(prev[1])))
    bits.append('<span class="where">%s</span>' % R.esc(where))
    if nxt:
        bits.append('<a href="%s.html" rel="next">%s &rsaquo;</a>'
                    % (nxt[0], R.esc(nxt[1])))
    return '\n'.join(bits)


def jsdata(obj):
    """JSON safe to inline in a <script> element.

    A literal "</script>" anywhere in the data would end the element and
    break the page, so "<" is escaped. This costs nothing and removes a
    whole class of silent failure.
    """
    return json.dumps(obj, ensure_ascii=False, separators=(',', ':')) \
        .replace('<', '\\u003c').replace('\u2028', '\\u2028') \
        .replace('\u2029', '\\u2029')


def page(item, prev, nxt, where):
    return SHELL.format(
        title='%s · %s · TOEFL Writing Practice'
              % (item['id'], item['task_label']),
        desc=R.esc('%s — %s. Interactive practice with a full answer key.'
                   % (item['id'], item['function']))[:200],
        root='../', nav=nav(prev, nxt, where), var='ITEM',
        data=jsdata(item))


def index(catalogue_counts):
    return SHELL.format(
        title='TOEFL Writing — 300 exercises',
        desc='An offline practice site for the updated TOEFL iBT Writing '
             'section: 300 exercises, one page each, with a key for every '
             'question.',
        root='', nav='<span class="where">300 exercises</span>',
        var='CATALOGUE_READY', data='true').replace(
        '<script src="assets/app.js"></script>',
        '<script src="assets/catalogue.js"></script>\n'
        '<script src="assets/app.js"></script>')


def catalogue_js(rows):
    return 'window.CATALOGUE=%s;\n' % jsdata(rows)
