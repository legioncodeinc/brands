from pathlib import Path
from build_concepts import build_all, concepts as first_round

ROOT = Path(__file__).resolve().parent / 'hummingbird'
concepts = [
    ('a-swift', 'A / Swift', 'Compact silhouette. Closest to the first direction.', first_round[3][3]),
    ('b-hover', 'B / Hover', 'A raised wing and a precise, needle-like bill.',
     '<path d="M52 64C56 54 63 41 72 37C81 33 88 37 89 44L119 40L91 48C89 62 76 75 59 79L33 106L42 80L19 89L42 66L14 35C30 35 43 45 52 64Z" fill="INK"/><path d="M52 58C33 43 26 17 31 3C52 8 69 32 60 54L56 65Z" fill="GREEN"/>'),
    ('c-vector', 'C / Vector', 'Faceted wings. The sharpest geometric treatment.',
     '<path d="M53 64L69 39L82 33L91 42L119 38L94 48L85 65L63 80L31 105L43 76L7 88L35 63L8 28L37 41Z" fill="INK"/><path d="M52 57L30 4L56 16L68 39L59 59L56 64Z" fill="GREEN"/>'),
    ('d-flow', 'D / Flow', 'Swept wings and an elongated flight silhouette.',
     '<path d="M49 65C64 59 69 40 83 37C91 35 95 41 94 46L121 42L94 51C91 65 77 74 60 77C44 86 29 93 6 98L35 76L11 79L37 62C27 53 19 39 13 23C32 29 45 43 49 65Z" fill="INK"/><path d="M52 59C49 35 59 11 80 2C81 26 69 47 58 61L54 66Z" fill="GREEN"/>'),
]

if __name__ == '__main__':
    build_all(concepts, ROOT)
