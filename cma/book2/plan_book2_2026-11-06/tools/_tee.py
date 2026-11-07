"""Print to the console AND into the package's own evidence file.

THE LAST PACKAGE GOT THIS WRONG. `figures_asked.py` printed its table to the session
scratchpad and wrote six lines into `evidence/`, so the package shipped claiming a number
whose working was not in it. Evidence that lives outside the package is not evidence.
"""
import io
import os
import sys

PKG = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EVIDENCE = os.path.join(PKG, "evidence")


class Tee(object):
    def __init__(self, name):
        if not os.path.isdir(EVIDENCE):
            os.makedirs(EVIDENCE)
        self.path = os.path.join(EVIDENCE, name)
        self.buf = io.StringIO()

    def __enter__(self):
        return self

    def w(self, line=""):
        s = str(line)
        self.buf.write(s + "\n")
        try:
            sys.stdout.write(s + "\n")
        except UnicodeEncodeError:
            # the console codepage is not the evidence file's problem - see the gate that
            # died in cp1256 on one emoji. The FILE still gets the real characters.
            sys.stdout.write(s.encode("ascii", "replace").decode("ascii") + "\n")

    def __exit__(self, *exc):
        with open(self.path, "w", encoding="utf-8") as f:
            f.write(self.buf.getvalue())
        self.w("")
        sys.stdout.write("wrote %s\n" % self.path)
        return False


def book_paths():
    d = r"D:\____All_Books\CMA\____Final_Book_and_Summaries"
    return {1: os.path.join(d, "CMA_P1_Book1_volume_v1.3.docx"),
            2: os.path.join(d, "CMA_P1_Book2_volume_v1.0.docx")}


def pipeline_root():
    return r"D:\MyWork\AnimatedMatrix\Apps\SVG_To_Video_Using_Python"
