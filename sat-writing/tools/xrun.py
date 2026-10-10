#!/usr/bin/env python3
"""Run one authoring module. Usage: python3 tools/xrun.py w_C01 [path]"""
import importlib
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import xemit                                                            # noqa: E402

m = importlib.import_module(sys.argv[1])
xemit.emit(m.CHAPTER, m.AR, m.PARTS, path=sys.argv[2] if len(sys.argv) > 2 else None)
