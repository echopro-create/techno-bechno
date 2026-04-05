#!/usr/bin/env python3
from __future__ import annotations

import hashlib
import sys
from pathlib import Path


def short_hash(text: str) -> str:
    return hashlib.sha1(text.encode("utf-8")).hexdigest()[:4]


def read_lines(path: Path) -> list[str]:
    return path.read_text(encoding="utf-8").splitlines()


def main(argv: list[str]) -> int:
    if len(argv) < 3:
        print("Usage: hashline_helper.py show <file> [start] [end] | verify <file> <line> <hash>")
        return 1
    command, path = argv[1], Path(argv[2])
    lines = read_lines(path)
    if command == "show":
        start = int(argv[3]) if len(argv) > 3 else 1
        end = int(argv[4]) if len(argv) > 4 else len(lines)
        for line_no in range(start, min(end, len(lines)) + 1):
            text = lines[line_no - 1]
            print(f"{line_no}:{short_hash(text)}|{text}")
        return 0
    if command == "verify" and len(argv) == 5:
        line_no = int(argv[3])
        actual = short_hash(lines[line_no - 1])
        print("OK" if actual == argv[4] else f"MISMATCH expected={argv[4]} actual={actual}")
        return 0 if actual == argv[4] else 2
    print("Usage: hashline_helper.py show <file> [start] [end] | verify <file> <line> <hash>")
    return 1


if __name__ == "__main__":
    raise SystemExit(main(sys.argv))
