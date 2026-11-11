#!/usr/bin/env python3
"""Regenerate index.html so that it loads every data file in assets/data."""
import io, os, re, sys
HERE = os.path.dirname(os.path.abspath(__file__))
D = os.path.join(HERE, 'assets', 'data')

def key(f):
    m = re.match(r'^u(\d+)([rc])(\d+)\.js$', f)
    return (int(m.group(1)), 0 if m.group(2) == 'r' else 1, int(m.group(3))) if m else (99, 9, 9)

files = sorted([f for f in os.listdir(D) if f.endswith('.js')], key=key)
tags = '\n'.join('<script src="assets/data/%s"></script>' % f for f in files)

HEAD = '''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Al-Hasan International · Extra Material for Student Book 1</title>
<meta name="description" content="Ten units, twelve lessons each: six readings and six listenings with audio read by your own computer's voices.">
<link rel="stylesheet" href="assets/site.css">
</head>
<body>

<header class="top">
  <a class="brand" href="#/" aria-label="Home">
    <span class="mark" aria-hidden="true">AH</span>
    <span class="bname">Al-Hasan International</span>
  </a>
  <span class="course">Extra Material &middot; Student Book 1</span>
  <button id="btn-reset-all" class="ghost" type="button">Reset all</button>
</header>

<main id="view" class="wrap" tabindex="-1"></main>

<div id="player" class="player" hidden>
  <div class="pl-inner">
    <button id="pl-play" class="pl-btn primary" type="button" aria-label="Play">&#9654;</button>
    <button id="pl-stop" class="pl-btn" type="button" aria-label="Stop">&#9632;</button>
    <div class="pl-meta">
      <strong id="pl-title">Audio</strong>
      <span id="pl-pos" class="muted"></span>
    </div>
    <label class="pl-field">Speed
      <select id="pl-rate">
        <option value="0.7">0.7&times;</option>
        <option value="0.8">0.8&times;</option>
        <option value="0.9" selected>0.9&times;</option>
        <option value="1">1.0&times;</option>
        <option value="1.15">1.15&times;</option>
      </select>
    </label>
    <label class="pl-field">Voice A <select id="pl-voice-a"></select></label>
    <label class="pl-field" id="pl-field-b">Voice B <select id="pl-voice-b"></select></label>
  </div>
  <div id="pl-warn" class="pl-warn" hidden></div>
</div>

<footer class="foot">
  <p>Al-Hasan International &mdash; English for Trade, Industry &amp; Global Partnerships &middot;
     extra material for Student Book 1 &middot; runs offline, in this browser.
     Audio uses the voices installed on this computer.</p>
</footer>

<script src="assets/app.js"></script>
'''
TAIL = '\n<script>AHL.start();</script>\n</body>\n</html>\n'
io.open(os.path.join(HERE, 'index.html'), 'w', encoding='utf-8').write(HEAD + tags + TAIL)
print('index.html: %d data files' % len(files))
