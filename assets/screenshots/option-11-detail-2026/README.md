# Saymo Option 11 detail screenshot library

This folder contains 36 selected screenshots of the current Saymo Android app. Every selected app screenshot is an exact 1080 × 2400 PNG. The set is organized around the current Learn modes and three source-backed Video Dialogue stories so website concepts can use real app UI instead of illustrative placeholders.

## Speak / Video Dialogues

| Sequence | Story | Screens |
| --- | --- | --- |
| A | Car rental | `speak-seq-a-1.png` chapter selector → `speak-seq-a-2.png` automatic-transmission MCQ → `speak-seq-a-3.png` completed answer |
| B | The bakery | `speak-seq-b-1.png` chapter selector → `speak-seq-b-2.png` “Guten Morgen” spelling → `speak-seq-b-3.png` later bread word-order task |
| C | The post office | `speak-seq-c-1.png` chapter selector → `speak-seq-c-2.png` tracking-number article prompt → `speak-seq-c-3.png` answer feedback |

These are representative production task fixtures anchored to the named public stories. Car rental and Post office use active/feedback pairs for the same prompt. The Bakery task screens are representative task states from that lesson, not a claim that all three screenshots came from one uninterrupted emulator run.

## Mode mapping

| Mode | Screens |
| --- | --- |
| Learn | `learn-overview.png` |
| Listen | `listen-library-counts.png`, `listen-example-a.png`, `listen-example-b.png`, `listen-train.png` |
| Words | `words-primary.png`, `words-reveal.png`, `words-known.png` |
| Sentences | `sentences-primary.png`, `sentences-active.png`, `sentences-feedback.png` |
| Articles | `articles-detail-primary.png`, `articles-detail-feedback.png`, `articles-detail-summary.png` |
| Endings | `endings-detail-primary.png`, `endings-detail-feedback.png`, `endings-detail-summary.png` |
| Cases | `cases-detail-primary.png`, `cases-detail-feedback.png`, `cases-detail-summary.png` |
| Revision | `revision-detail-primary.png`, `revision-detail-feedback.png`, `revision-detail-complete.png`, `revision-detail-queue.png` |
| Progress | `progress-detail-words.png`, `progress-detail-vocabulary.png`, `progress-detail-profile.png` |

`endings-detail-summary.png` and `cases-detail-summary.png` are newly played nonzero summaries: each shows a score of 3 and populated performance/mistake data.

## Listen count behavior

The current top-level audiobook library uses the generic action “Train new words.” Numeric personalized counts appear after opening an audiobook:

- Wurzelkinder: 102 new words
- Aschenputtel: 465 new words
- The post-tap training state shows 465 words left

This is current UI behavior, so the library does not imply that numeric counts appear on top-level story cards.

## Capture and QA notes

- App package/version: `com.saymo.app`, 0.76 (76)
- Device: `emulator-5554`
- Capture viewport: explicit 1080 × 2400 at density 420; the override was reset after capture
- Selected screens contain no blank/loading/player-error/permission/system/tutorial/debugger-warning states
- Live dialogue video and audiobook playback were not selected because those network-backed states did not settle reliably
- `contact-sheet.png` is for browsing only; it is not an app screenshot
