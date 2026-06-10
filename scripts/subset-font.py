#!/usr/bin/env python3
"""Subset jf-openhuninn to glyphs actually used in src/, then emit woff2.

新增中文內容後需重跑：pnpm subset-font
（缺字會 fallback 到 Comic Relief，視覺上會明顯不同，記得重跑）

Pipeline: fontTools subset → TTF → woff2_compress（系統 fontTools 無 brotli，
故用 homebrew woff2_compress 做最後一步）
"""
import glob
import pathlib
import subprocess
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC_FONT = ROOT / "src/assets/fonts/jf-openhuninn-2.1.ttf"
OUT_TTF = ROOT / "src/assets/fonts/jf-openhuninn-2.1.subset.ttf"
OUT_WOFF2 = ROOT / "src/assets/fonts/jf-openhuninn-2.1.subset.woff2"

# 不掃 node_modules/.next，只掃站內會渲染的原始碼與資料
SCAN_PATTERNS = ["src/**/*.tsx", "src/**/*.ts", "src/**/*.css", "src/**/*.json", "src/**/*.md"]

# 固定保留範圍：拉丁、標點、注音、CJK 標點、全形符號（未來內容常用，成本極小）
UNICODE_RANGES = "U+0020-00FF,U+2000-206F,U+3000-303F,U+3100-312F,U+FF00-FFEF"


def collect_chars() -> str:
    chars: set[str] = set()
    for pattern in SCAN_PATTERNS:
        for file in glob.glob(str(ROOT / pattern), recursive=True):
            chars |= set(pathlib.Path(file).read_text(encoding="utf-8", errors="ignore"))
    return "".join(c for c in sorted(chars) if ord(c) >= 0x20)


def main() -> None:
    text = collect_chars()
    subprocess.run(
        [
            sys.executable, "-m", "fontTools.subset", str(SRC_FONT),
            f"--text={text}",
            f"--unicodes={UNICODE_RANGES}",
            f"--output-file={OUT_TTF}",
            "--layout-features=*",
            "--name-IDs=*",
        ],
        check=True,
    )
    subprocess.run(["woff2_compress", str(OUT_TTF)], check=True)
    OUT_TTF.unlink()
    size_kb = OUT_WOFF2.stat().st_size / 1024
    print(f"done: {OUT_WOFF2.name} ({size_kb:.0f} KB)")


if __name__ == "__main__":
    main()
