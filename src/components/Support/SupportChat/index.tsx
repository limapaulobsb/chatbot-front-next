'use client';

import { type FormEvent, useEffect, useRef } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

import { Container, Conversation, LoadingContainer } from './SupportChat.styled';
import ChatMessage from '@/components/ChatMessage';
import { ChatForm } from '@/components/Forms';
import { useMessages } from '@/hooks';
import type { Support } from '@/utils/definitions';

function SupportChat({ data }: { data: Support }) {
  const conversationRef = useRef<HTMLDivElement | null>(null);
  const { isLoading, messages, addNewMessage } = useMessages(data);

  const isAccepted = data.status === 'accepted';

  // Keeps the chat always scrolled down
  useEffect(() => {
    const conversationElement = conversationRef.current as HTMLDivElement;

    const ro = new ResizeObserver(() => {
      conversationElement.scrollTop = conversationElement.scrollHeight;
    });

    ro.observe(conversationElement);
  });

  return (
    <Container>
      <Conversation ref={conversationRef}>
        {messages.map(({ content, role, owner_profile }, index) => {
          return (
            <ChatMessage key={index} role={role} ownerProfile={owner_profile}>
              {content}
            </ChatMessage>
          );
        })}
        <LoadingContainer>
          {isLoading && <BeatLoader color="gray" size={8} />}
        </LoadingContainer>
      </Conversation>
      {isAccepted && (
        <ChatForm
          background={true}
          action={(content) => addNewMessage(content)}
          maxHeight={200}
        />
      )}
    </Container>
  );
}

export default SupportChat;
