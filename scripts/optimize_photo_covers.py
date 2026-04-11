#!/usr/bin/env python3
"""
Build web-sized JPEG copies of album cover images for the wedding site.

Reads only from ~/website-thumbnails (or --source). Writes to assets/images/photo-covers/.
Never modifies files under the source directory.

Usage (from repo root, with a local venv — no system-wide install):
  python3 -m venv .venv
  .venv/bin/pip install --index-url https://pypi-proxy.dev.databricks.com/simple -r scripts/requirements-photo-covers.txt
  .venv/bin/python scripts/optimize_photo_covers.py
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print(
        "Pillow is required. From the wedding repo root:\n"
        "  python3 -m venv .venv\n"
        "  .venv/bin/pip install --index-url https://pypi-proxy.dev.databricks.com/simple -r scripts/requirements-photo-covers.txt\n"
        "  .venv/bin/python scripts/optimize_photo_covers.py",
        file=sys.stderr,
    )
    sys.exit(1)

# source name in ~/website-thumbnails -> output filename in assets
MAPPING = [
    ("mehendi.jpg", "mehendi.jpg"),
    ("haldi.jpg", "haldi.jpg"),
    ("sangeet.jpg", "sangeet.jpg"),
    ("baraat.jpg", "baraat.jpg"),
    ("wedding1.jpg", "wedding-part-1.jpg"),
    ("wedding2.jpg", "wedding-part-2.jpg"),
    ("hyd-reception.jpg", "hyd-reception.jpg"),
]

DEFAULT_MAX_SIDE = 1200
DEFAULT_QUALITY = 82


def _resample():
    try:
        return Image.Resampling.LANCZOS
    except AttributeError:
        return Image.LANCZOS


def optimize_one(src: Path, dest: Path, max_side: int, quality: int) -> None:
    img = Image.open(src)
    if img.mode != "RGB":
        img = img.convert("RGB")
    w, h = img.size
    if max(w, h) > max_side:
        if w >= h:
            new_w, new_h = max_side, max(1, int(round(h * max_side / w)))
        else:
            new_h, new_w = max_side, max(1, int(round(w * max_side / h)))
        img = img.resize((new_w, new_h), _resample())
    dest.parent.mkdir(parents=True, exist_ok=True)
    img.save(dest, "JPEG", quality=quality, optimize=True, progressive=True)


def main() -> None:
    parser = argparse.ArgumentParser(description="Resize album cover JPEGs for the wedding site.")
    parser.add_argument(
        "--source",
        type=Path,
        default=Path.home() / "website-thumbnails",
        help="Folder containing original JPEGs (read-only)",
    )
    parser.add_argument(
        "--dest",
        type=Path,
        default=Path(__file__).resolve().parent.parent / "assets" / "images" / "photo-covers",
        help="Output directory for optimized JPEGs",
    )
    parser.add_argument("--max-side", type=int, default=DEFAULT_MAX_SIDE, help="Longest edge in pixels")
    parser.add_argument("--quality", type=int, default=DEFAULT_QUALITY, help="JPEG quality 1-95")
    args = parser.parse_args()

    if not args.source.is_dir():
        print(f"Source directory not found: {args.source}", file=sys.stderr)
        sys.exit(1)

    for src_name, out_name in MAPPING:
        src = args.source / src_name
        if not src.is_file():
            print(f"Missing (skipped): {src}", file=sys.stderr)
            continue
        dest = args.dest / out_name
        optimize_one(src, dest, args.max_side, args.quality)
        kb = dest.stat().st_size // 1024
        print(f"OK {out_name}  ({kb} KB)")


if __name__ == "__main__":
    main()
