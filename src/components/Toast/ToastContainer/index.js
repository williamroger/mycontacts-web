import { useEffect } from 'react';
import ToastMessage from '../ToastMessage';
import { eventManager } from '../../../utils/toast';
import useAnimatedList from '../../../hooks/useAnimatedList';

import { Container } from './styles';

export default function ToastContainer() {
  const {
    items: messages,
    setItems: setMessages,
    pendingRemovalItemsIds,
    handleRemoveItem,
    handleAnimationEnd,
  } = useAnimatedList();

  useEffect(() => {
    function handleAddToast({ type, text, duration }) {
      setMessages((prevState) => [
        ...prevState,
        { id: Math.random(), type, text, duration },
      ]);
    }

    eventManager.on('addtoast', handleAddToast);

    return () => {
      eventManager.removeListener('addtoast', handleAddToast);
    };
  }, [setMessages]);

  console.log({ messages, pendingRemovalItemsIds });

  return (
    <Container>
      {messages.map((message) => (
        <ToastMessage
          key={message.id}
          message={message}
          onRemoveMessage={handleRemoveItem}
          isLeaving={pendingRemovalItemsIds.includes(message.id)}
          onAnimationEnd={handleAnimationEnd}
        />
      ))}
    </Container>
  );
}
