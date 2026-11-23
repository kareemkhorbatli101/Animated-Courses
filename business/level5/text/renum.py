import re, sys
for p in sys.argv[1:]:
    u = re.search(r"u(\d\d)", p).group(1)
    s = open(p, encoding="utf-8").read()
    n = [0]
    def ren(m):
        n[0] += 1
        return "%sAUD CL5-%s-%02d%s" % ("%%", u, n[0], "%%")
    s = re.sub(r"%%AUD [^%]+%%", ren, s)
    open(p, "w", encoding="utf-8").write(s)
    print("%s  cues=%d  figs=%d  words=%d" % (p, n[0], s.count("%%FIG"), len(s.split())))
