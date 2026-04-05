from __future__ import annotations

import tempfile
import unittest
from pathlib import Path

from hashline_helper import main, short_hash


class HashlineHelperTests(unittest.TestCase):
    def test_show_and_verify(self) -> None:
        with tempfile.TemporaryDirectory() as tmp:
            path = Path(tmp) / "sample.txt"
            path.write_text("alpha\nbeta\n", encoding="utf-8")
            self.assertEqual(main(["hashline_helper.py", "show", str(path), "1", "2"]), 0)
            self.assertEqual(
                main(["hashline_helper.py", "verify", str(path), "2", short_hash("beta")]),
                0,
            )

    def test_verify_reports_mismatch(self) -> None:
        with tempfile.TemporaryDirectory() as tmp:
            path = Path(tmp) / "sample.txt"
            path.write_text("alpha\n", encoding="utf-8")
            self.assertEqual(main(["hashline_helper.py", "verify", str(path), "1", "dead"]), 2)


if __name__ == "__main__":
    unittest.main()
