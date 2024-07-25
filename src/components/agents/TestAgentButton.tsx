import React from 'react';

import { createCall } from '@/features/calls/controllers/get-calls';

import { Button } from '../ui/button';

const TestAgentButton = ({ agentId }: { agentId: string }) => {
  async function triggerAgent() {
    'use server';
    const call = await createCall({ agentId });

    fetch(`https://call-gpt-thrumming-shadow-9480.fly.dev/outcoming?conversationId=${call.id}&agentId=${agentId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: 'Test message',
      }),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <form action={triggerAgent}>
      <Button type='submit'>Test Appel</Button>
    </form>
  );
};

export default TestAgentButton;
