"""Which level and volume a book code names.

One copy of `tools/` serves both levels: `B1/tools` is a symlink to this
directory, and every module here resolves its own root as

    HERE = os.path.dirname(os.path.abspath(__file__))
    ROOT = os.path.dirname(HERE)

`abspath` does not resolve symlinks and `__file__` keeps the path the import
actually used, so the same code reads `A2/` when run from `A2/` and `B1/` when
run from `B1/`, with no path argument anywhere. What it cannot work out from
`__file__` is which LEVEL a book code belongs to, what the volume is called,
and what goes in a built file's name. That is this table, and it is the only
place a level or a volume title is written down.
"""

BOOKS = {
    'a21': ('A2', '1', 'Everyday Life'),
    'a22': ('A2', '2', 'Out in the World'),
    'b11': ('B1', '1', 'Looking Back'),
    'b12': ('B1', '2', 'Making Yourself Clear'),
}


def level(book: str) -> str:
    return BOOKS[book][0]


def vol(book: str) -> str:
    return BOOKS[book][1]


def title(book: str) -> str:
    return BOOKS[book][2]


def label(book: str) -> str:
    """'A2.1', 'B1.2' — the human name of a volume."""
    return f'{BOOKS[book][0]}.{BOOKS[book][1]}'


def prefix(book: str) -> str:
    """The leading part of every built file's name for this volume."""
    return f'EFDL-{label(book)}-'


def books_of(lv: str) -> list[str]:
    return [b for b, (l, _, _) in BOOKS.items() if l == lv]


def sibling(book: str) -> str:
    """The other volume at the same level."""
    others = [b for b in books_of(level(book)) if b != book]
    if len(others) != 1:
        raise KeyError(f'{book}: {len(others)} sibling volumes, want 1')
    return others[0]


def books_here(root: str) -> list[str]:
    """The book codes whose level matches the root this toolchain was run from.

    `renumber_figures` and `make_release` used to iterate a hardcoded
    ('a21', 'a22'); run from `B1/` that would have walked A2's unit numbers
    over B1's files.
    """
    import os
    lv = os.path.basename(os.path.abspath(root))
    if lv not in {l for l, _, _ in BOOKS.values()}:
        raise KeyError(f'{root}: not a level directory')
    return sorted(books_of(lv))


def level_root(root: str, lv: str) -> str:
    """The sibling level's directory, given this level's root.

    `root` is `.../general-english/B1`; `level_root(root, 'A2')` is
    `.../general-english/A2`. One function because two checks need it (E27's
    strict tier reading and L01's calibration) and both got the dirname count
    wrong the first time, by one.
    """
    import os
    return os.path.join(os.path.dirname(os.path.abspath(root)), lv)
