"""Safe text edits: a missing anchor reports itself and never discards the rest.

An assert inside an edit script throws away every change made before it, which
has cost several rounds. This applies what it can, writes, and names what it
could not find so it can be fixed in the next pass rather than lost.
"""
from __future__ import annotations
import io, sys


class Editor:
    def __init__(self, path: str):
        self.path = path
        self.text = open(path, encoding='utf-8').read()
        self.missed: list[str] = []
        self.applied = 0

    def sub(self, old: str, new: str, count: int = 1):
        if old not in self.text:
            self.missed.append(old[:70])
            return self
        self.text = self.text.replace(old, new, count)
        self.applied += 1
        return self

    def save(self) -> int:
        open(self.path, 'w', encoding='utf-8').write(self.text)
        name = self.path.split('/')[-1]
        print(f'{name}: {self.applied} applied, {len(self.missed)} not found')
        for m in self.missed:
            print(f'   MISS {m!r}')
        return len(self.missed)
