#!/bin/bash
# Writes the HTML shell for one chapter page. The shell is identical on every
# page: all content lives in data/<id>.js. Scripts are classic (no modules) and
# all paths relative, so every page opens straight from file://.
id="$1"; title="$2"
cat > "${id}.html" <<HTML
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title} · Chapter 1 · CMA Part 1 Book 1</title>
<meta name="description" content="${title} — CMA Part 1 Book 1, External Financial Reporting Decisions, Chapter 1. Interactive, offline.">
<link rel="stylesheet" href="../assets/site.css">
</head>
<body>
<a class="skip" href="#content">Skip to the content</a>
<main id="main">
<div class="wrap"><div id="content"></div></div>
</main>
<script src="../assets/ledger.js"></script>
<script src="../assets/terms-ch01.js"></script>
<script src="../assets/speech.js"></script>
<script src="../assets/progress.js"></script>
<script src="../assets/figures.js"></script>
<script src="../assets/engine.js"></script>
<script src="data/${id}.js"></script>
<script src="../assets/chrome.js"></script>
</body>
</html>
HTML
