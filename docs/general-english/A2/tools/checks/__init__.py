"""Check registry. Every check: an id, the spec clause it enforces, a verdict."""
from __future__ import annotations
from dataclasses import dataclass
from typing import Callable

@dataclass
class Result:
    ok: bool
    detail: str = ''

@dataclass
class Check:
    id: str
    clause: str
    desc: str
    fn: Callable
    scope: str = 'unit'      # unit | book | gate
    gate: bool = False       # needs adjudication, not a regex

REGISTRY: dict[str, Check] = {}

def check(cid: str, clause: str, desc: str, scope: str = 'unit', gate: bool = False):
    def deco(fn):
        if cid in REGISTRY:
            raise KeyError(f'duplicate check id {cid}')
        REGISTRY[cid] = Check(cid, clause, desc, fn, scope, gate)
        return fn
    return deco

def ok(detail: str = '') -> Result:   return Result(True, detail)
def fail(detail: str) -> Result:      return Result(False, detail)
def expect(cond, detail: str) -> Result:
    return Result(bool(cond), '' if cond else detail)

def load_all():
    from . import family_a, family_b, family_c, family_d, family_e
    from . import family_f, family_g, family_h, family_i, family_j, family_k
    return REGISTRY
