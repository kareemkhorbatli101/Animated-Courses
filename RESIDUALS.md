
## J. Track A residue (v27.38, 2026-09-14)

### J.1 Bundles accumulate stale cache-keyed asset copies
`engine/bundle.py::_copy_asset` renames on a basename clash (`<sha>_<name>.glb`) rather than
overwriting, and nothing ever sweeps the old one. `eam_unit01_v7` now carries FOUR `maher_*.glb` files
for TWO distinct shas, and rebuilding added a second copy of the set before the stale ones were cleared
by hand. The publisher drops unreachable files, so nothing wrong reaches the site — this is repository
and disk clutter, and a trap for anyone reading a bundle and finding two versions of its own room.
Fix: sweep a bundle's `assets/` of files the manifest no longer references, at the end of `build_bundle`.

### J.2 `furniture_office` has no builder and therefore cannot be named
The published library uses two sets: `workshop` (4 of 5 bundles, now named) and `furniture_office` (1).
`furniture_office` is **not** in `@register` and has no `_furniture_office(p)` function — only a
pre-made `furniture_office_set_merged.glb`. So the naming route used for the workshop does not exist for
it. Either author a builder, or author an object manifest beside the asset and have the index reader
prefer it. Until then, object questions must degrade honestly for `efd/unit01`.

### J.3 The four unused sets are still anonymous
`classroom`, `horseshoe`, `oilfield` and `restaurant` are registered and built but used by no published
lesson. Naming them is the same eight-edit pattern as the workshop and should happen when a lesson needs
one, not before.

### J.4 The stored colour convention is one gamma step from the authored value
Every shipped set asset holds `linear_to_srgb(authored)` where glTF defines `baseColorFactor` as linear
(`engine/prime.py::_l2s` reproduces it deliberately so pixels do not move). The index therefore has to
invert it to name a colour correctly — the tool cabinets read "orange" until it did. Correcting the
convention itself would restyle the entire published library and needs its own re-render; it is not a
bug to be fixed in passing.
