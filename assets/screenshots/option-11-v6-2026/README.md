# Saymo Option 11 v6 screenshot library

This folder contains 29 curated 1080 × 2400 Android screenshots captured from the current Saymo app on 30–31 July 2026. It is the primary visual source for the five new website alternatives.

The set covers Learn, Video Dialogues and its microphone / multiple-choice / word-order tasks, Listen, Words, Sentences, Articles, Endings, Cases, Revision, and Progress. Active, completion, scrolled-detail, difficulty-progression, and analytics states are included so future layouts can choose a truthful app image for each section.

The 31 July current-source refresh replaced the most important utility screens:

- Progress shows 217 learned words and an irregular 2–15 Uses spread. German noun casing is surface-aware: `Angst` and `Ärztin` are uppercase while the adjective `arm` remains lowercase.
- Revision keeps the English prompt permanently visible directly above the German task card with a narrow consistent gap. The English card has a complete unclipped border, while reveal controls and redundant instruction cues are intentionally absent.
- Sentences progresses from one A2 blank through three B2 blanks to a C2 all-blank task. Every frame uses the real neutral grayscale German Gboard with QWERTZ / YXC rows and a `DE • EN` spacebar.
- Listen removes the old `LIBRARY` eyebrow, shows settled numeric `Train N new words` counts, and includes a benign Cinderella reading state at 9:42 of 13:57. The visible passage is the end of the ball sequence, before the later violent shoe-fitting passage.

`contact-sheet.png` is the fastest overview. `manifest.json` contains the exact grouping and capture metadata. [`alternatives/README.md`](alternatives/README.md) indexes the refresh candidates and links the larger sibling screenshot archives.

## Visual QA

- Every selected app screenshot is a valid 1080 × 2400 PNG.
- Screens were manually checked at full resolution for blank/loading pages, permission prompts, tutorials, warning/DEV overlays, player errors, clipped controls, overlaps, and transient UI.
- Learn shows every current mode, including Exam Prep.
- Speak uses three different production scenes: Bakery microphone, Ordering Food multiple choice, and Post Office word order.
- Every fully visible Listen chooser pill contains a numeric `Train N new words` label.
- The near-three-quarter Listen frame is deliberately paused at 9:42 so the benign mid-sentence German and English text remains stable. The separate halfway player frame shows active playback.
- Revision active frames visibly preserve a compact English-card → German-task-card hierarchy with a complete English-card outline and no reveal control, duplicated instruction layer, overlap, or clipping.
- Progress uses deterministic task history rendered through the production UI; the visible rows have production-like Uses totals and corrected noun/adjective casing.
- No Android regression baseline files were written or replaced.

The emulator's physical viewport was 1080 × 2400 at 420 dpi. Reset commands were run after capture; the final device state is documented in the capture report.
