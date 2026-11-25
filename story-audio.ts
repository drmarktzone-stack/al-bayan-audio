/** Story narration audio (pre-recorded, free hosting). Verses are not in these files. */
export const STORY_AUDIO_BASE = "https://cdn.jsdelivr.net/gh/drmarktzone-stack/al-bayan-audio@v1";
export const STORY_AUDIO_VOICE_AR = "ar-SA-HamedNeural";
export const STORY_AUDIO_VOICE_EN = "en-US-AndrewNeural";

export function storyNarrationUrl(slug: string, sceneId: string, lang: "ar" | "en"): string {
  return `${STORY_AUDIO_BASE}/stories/${slug}/${sceneId}.${lang}.mp3`;
}
