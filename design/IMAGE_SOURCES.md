# Image sources · tiers, licences, and what this container can actually reach

## Reachability, tested

The session's network policy initially denied every image host (HTTP 403 from
the egress proxy). Seven hosts were added to the environment allow-list and
re-tested:

| Host | Status | Notes |
|---|---|---|
| smart.servier.com | **200** | search and direct PNG download both work |
| commons.wikimedia.org | **200** | pages load; the **API is rate-limited** from this shared egress IP, returning "too many requests" even with a descriptive user agent |
| upload.wikimedia.org | **200 / 429** | direct file URLs work; some requests are rate-limited. Fetch slowly, cache locally, never in bulk |
| www.ncbi.nlm.nih.gov | **200** | Bookshelf reachable — the main Tier A source |
| www.who.int | **200** | |
| www.fdiworlddental.org | **200** | |
| www.ada.org | **200** | |

**Verified end to end:** a 1189×2048 CC BY 4.0 dental cross-section was located
and downloaded from Servier Medical Art, and a public-domain anatomical plate
was downloaded from Wikimedia by direct file URL.

Practical consequence: Wikimedia sourcing must resolve filenames without
hammering the API, and downloads must be batched slowly and cached under the
build tree so a figure is fetched once per series, not once per build.

---

## Three tiers

### Tier 1 — generated parametric line art · the backbone

Drawn by the figure engine, owned outright, regenerable at any size, and exactly
on-level. This is the bulk of 250–300 figures a book; at roughly 15,000 figures
across the programme, no other tier could carry it.

### Tier 2 — public-domain plates

Out-of-copyright anatomical illustration from Wikimedia Commons. Usable with
attribution; often better redrawn in the house style, in which case the credit
reads "redrawn from".

### Tier 3 — open-licence medical illustration

**Servier Medical Art**, CC BY 4.0. Confirmed from the publisher's own terms:
free for commercial use with attribution; no written permission needed because
the licence is the legal basis; usable in print, e-learning and apps, provided
the images are not marketed as a standalone image library; not to be used for
logos; PNG and PPTX only, no SVG. Suggested credit "Image provided by Servier
Medical Art", or "Image adapted from Servier Medical Art" where modified, with a
link to the licence. The site's own non-image content is **not** covered.

Most Servier art is unlabelled, which suits us exactly: we add labels, leader
lines and callouts in the house style and credit it as adapted.

---

## Licence rules, non-negotiable

1. **Public domain and CC BY only.** No non-commercial licences — they block
   sale. No share-alike licences — they can propagate their terms into the book.
2. **Per-image, not per-site.** A licence is recorded for each individual file,
   because a site can host files under several licences.
3. **Every figure has a register line**: figure id, tier, source URL, licence,
   year, attribution text, and whether it was adapted. **Gate: a figure with no
   register line fails the build.**
4. **Attribution printed**, in the image credits section of the back matter, in
   the exact wording the licence requires.
5. **No photographs of real patients, real clinics or identifiable people**, at
   any tier, under any licence.
