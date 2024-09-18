export interface Metadata {
  type: string;
  text: string;
  createdAt: string;
}

interface Conversation {
  type: 'prospect' | 'agent';
  text: string;
}

const LABEL_TYPE_AGENT = 'TTS -> TWILIO';
const LABEL_TYPE_PROSPECT = 'STT -> GPT';

export const getFirstSentence = (metadata: Metadata[]) =>
  metadata.find((m) => m.type === `Interaction 0 – ${LABEL_TYPE_PROSPECT}`);

export const getMetadataAsConversation = (metadata: Metadata[]) => {
  const conversation = [] as Conversation[];

  metadata.forEach((m) => {
    if (m.type.includes(LABEL_TYPE_AGENT)) {
      conversation.push({
        type: 'agent',
        text: m.text,
      });
    }

    if (m.type.includes(LABEL_TYPE_PROSPECT)) {
      conversation.push({
        type: 'prospect',
        text: m.text,
      });
    }
  });

  return conversation;
};
