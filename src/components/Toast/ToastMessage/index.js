import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

import { useAnimatedUnmount } from '../../../hooks/useAnimatedUnmount';
export default function ToastMessage({ message, onRemoveMessage, isLeaving }) {
  const { id, text, type = 'default', duration } = message;
  const { shouldRender, animatedElementRef} = useAnimatedUnmount(!isLeaving);

  function handleRemoveToast() {
    onRemoveMessage(id);
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onRemoveMessage(id);
    }, duration || 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [onRemoveMessage, id, duration]);

  if (!shouldRender) {
    return null;
  }

  return (
    <Container
      type={type}
      onClick={handleRemoveToast}
      tabIndex={0}
      role="button"
      isLeaving={isLeaving}
      ref={animatedElementRef}
    >
      <strong>{text}</strong>
    </Container>
  );
}

ToastMessage.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['default', 'danger', 'success']),
    duration: PropTypes.number,
  }).isRequired,
  onRemoveMessage: PropTypes.func.isRequired,
  isLeaving: PropTypes.bool.isRequired,
};
