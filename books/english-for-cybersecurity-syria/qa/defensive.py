#!/usr/bin/env python3
"""qa/defensive.py — fidelity criterion 16, swept over the built document.

This is a book about defending an office.  Nothing in it may teach an attack,
so the built text is swept for the vocabulary of offence: the verbs of breaking
in, the names of attack tools, and the how-to framing that turns a warning into
an instruction.  The sweep runs on the rendered text, not on the content files,
because that is what a learner actually reads.
"""
import re, sys, zipfile

DOC = sys.argv[1] if len(sys.argv) > 1 else \
    "dist/EnglishForCybersecurity_Syria_StudentBook_A2.docx"

# Words that have no defensive use in an A2 course for office staff.
BANNED = [
    "hack", "hacking", "hacker", "exploit", "exploits", "crack the", "cracking",
    "brute force", "brute-force", "backdoor", "back door", "keylogger",
    "key logger", "payload", "sniffer", "sniffing", "spoof", "spoofing",
    "penetration test", "pen test", "privilege escalation", "escalate privileges",
    "sql injection", "cross-site", "shellcode", "rootkit", "botnet",
    "denial of service", "ddos", "jailbreak", "bypass the", "disable the antivirus",
    "turn off the antivirus", "break into", "steal a password", "steal the password",
    "guess the password", "intercept the", "eavesdrop",
]
# How-to framing: an instruction to do any of these would be an attack lesson.
FRAMES = [
    r"how to (?:get|obtain|read|open|enter|access)\s+(?:somebody|someone|another)",
    r"(?:in order )?to (?:gain|get) access to (?:somebody|someone|another)",
    r"without (?:the owner's|their) (?:knowledge|permission)",
]


def text(p):
    x = zipfile.ZipFile(p).read("word/document.xml").decode()
    x = re.sub(r"</w:p>", "\n", x)
    return "\n".join(re.findall(r"<w:t(?: [^>]*)?>(.*?)</w:t>", x, re.S))


t = text(DOC)
low = t.lower()
hits = []
for w in BANNED:
    for m in re.finditer(r"(?<![a-z])" + re.escape(w) + r"(?![a-z])", low):
        hits.append((w, t[max(0, m.start() - 60):m.end() + 60].replace("\n", " ")))
for f in FRAMES:
    for m in re.finditer(f, low):
        hits.append((f, t[max(0, m.start() - 60):m.end() + 60].replace("\n", " ")))

print(f"{len(BANNED)} banned term(s) and {len(FRAMES)} framing pattern(s) swept over "
      f"{len(t.split())} words")
for w, ctx in hits[:20]:
    print(f"  !! {w}: …{ctx}…")
print(f"{len(hits)} hit(s)")
sys.exit(1 if hits else 0)
