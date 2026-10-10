"""Runs an authoring module: python3 tools/wrun.py w_HIS_L1"""
import importlib
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import qemit                                                            # noqa: E402

m = importlib.import_module(sys.argv[1])
qemit.emit(m.FIELD, m.LEVEL, m.SETS)
