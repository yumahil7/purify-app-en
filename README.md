# Purify — The Path of Cleansing (English edition)

**Not a diet. A path to healing.** A Christian fasting & health PWA: meal plans, fasting programs (16:8, Daniel Fast, Lent, one-day, water fast with safety checks and refeeding), daily KJV Scripture, autophagy timer and evidence-tagged health info.

Live: https://yumahil7.github.io/purify-app-en/ · Korean edition: https://yumahil7.github.io/purify-app/

- Built from the same source as the Korean app: `v3src/build.py --lang en` applies the English string table (`v3src/en/*.txt`) and fails the build if any Korean line is left untranslated.
- Scripture: King James Version (public domain), every verse cross-checked against two KJV datasets — see `tools/verses-source.md`.
- Data stays on the device (`localStorage`, namespaced `purifyEn:` so it never mixes with the Korean app).
- Purify is a journaling app, not medical advice.
