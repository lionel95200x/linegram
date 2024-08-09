'use server';

import { createCall } from '@/features/calls/controllers/get-calls';

export async function testCallAction(agentId: string, prospectId: string) {
  const call = await createCall({ agentId, prospectId });

  try {
    if (call && 'id' in call) {
      console.log({ agentId, prospectId, call: call.id });

      const response = await fetch(
        `https://call-gpt-thrumming-shadow-9480.fly.dev/outcoming?callId=${call.id}&agentId=${agentId}&prospectId=${prospectId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: 'Test message',
          }),
        }
      );
      const data = await response.text();
      console.log({ data });
      return { data };
    }
  } catch (error) {
    console.log({ error });
    return { error: 'Error happen' };
  }
}
