# Saymo value screenshot library

This folder contains 28 selected screenshots of the current Saymo Android app for website concepts 11–15. Every selected PNG is an unmodified 1080 × 2400 capture. Use `contact-sheet.png` for visual browsing and `manifest.json` for representability notes.

## Semantic website mapping

| Semantic key | Screenshot evidence |
| --- | --- |
| `speak-primary` | Public Learn screen with the Speak entry |
| `speak-secondary` | Active player-response task in the video-dialogue flow |
| `context-primary` | Contextual multiple-choice dialogue question |
| `context-secondary` | Contextual preposition dialogue question |
| `context-library` | Current Video Dialogues library |
| `cards-primary` | Word Sweep initial deck |
| `cards-reveal` | Revealed translation with known/unknown actions |
| `cards-known` | Known counter advanced with the next card |
| `cards-queued` | Unknown answer queued for later review |
| `articles-primary` | Initial DER/DIE/DAS noun task |
| `articles-feedback` | Updated lives and previous-answer feedback |
| `articles-summary` | Performance and review-mistakes summary |
| `endings-primary` | Initial adjective-ending task |
| `endings-feedback` | Finished-task correction alongside the next prompt |
| `endings-summary` | Ending-pattern performance summary |
| `cases-primary` | Contextual case-choice task |
| `cases-feedback` | Correction with grammatical explanation |
| `cases-summary` | Round-mistakes summary with contextual explanations |
| `listen-library-primary` | Audiobook selection library |
| `listen-chapter-primary` | Aschenputtel chapter selection |
| `listen-train` | Chapter card offering Train 102 new words |
| `progress-primary` | Vocabulary chart and performance overview |
| `progress-secondary` | Skill radar and 10-day activity metrics |
| `knowledge-primary` | Central word accuracy and usage table |
| `knowledge-secondary` | Word Sweep known counter and continuing deck |
| `revision-primary` | Active revision spelling task |
| `revision-feedback` | Correct revision-answer feedback |
| `revision-complete` | Revision Complete summary |

All keys map directly to same-named `.png` files.

## Honest limitations

- Speaking: the public Speak entry and active player response are represented. The public live microphone state was not stable enough to select, so this library must not imply that `speak-secondary.png` is a live listening screen.
- Audiobooks: library, chapters, and vocabulary training are represented. Active audio playback was unavailable because chapter downloads failed in the capture environment.
- Adaptive learning: visible known/unknown/queue behavior is represented, but the screen does not explicitly call the algorithm adaptive.
- Central knowledge: the Word Stats and Word Sweep sequence is strong nearby evidence; no single screen explicitly says knowledge is shared across every mode.
- Spaced repetition: revision and queued-review behavior are represented; the UI does not use the phrase “spaced repetition.”
- Free / no signup / no card / start immediately: no selected current screen explicitly proves these claims. “No card required” was not found and should not be claimed as screenshot-backed.
