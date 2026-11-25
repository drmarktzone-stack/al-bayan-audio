# Al-Bayan wal-Burhan — story narration audio

Pre-recorded Arabic and English narration for the cinematic Quran stories in [موسوعة البيان والبرهان](https://al-bayan-wal-burhan.lovable.app).

These files cover **narration only**. They do **not** recite Quran verses. Verses stay on screen in the app and can be heard with the existing Islam Sobhi reciter button.

## Voices

- Arabic: Microsoft Edge neural voice `ar-SA-HamedNeural` (MSA, slightly slower, storyteller pace)
- English: `en-US-AndrewNeural` at the same rate
- Format: MP3, 48 kbps, mono, 24 kHz
- Generated with the free [edge-tts](https://github.com/rany2/edge-tts) tool (no paid TTS API)

## URL pattern

```
https://cdn.jsdelivr.net/gh/drmarktzone-stack/al-bayan-audio@v1/stories/{slug}/{sceneId}.{lang}.mp3
```

Example: https://cdn.jsdelivr.net/gh/drmarktzone-stack/al-bayan-audio@v1/stories/yusuf/dream.ar.mp3

See `manifest.json` for the full mapping.

## Counts

41 stories, 242 scenes, 484 audio files.
