import { ElevenLabsClient } from 'elevenlabs';

const elevenlabs = new ElevenLabsClient({
  apiKey: process.env.XI_API_KEY,
});

export const getVoices = async () => {
  const voices = await elevenlabs.voices.getAll();
  return voices;
};
