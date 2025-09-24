import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function ToastMessage({ message, onRemoveMessage }) {
  const { id, text, type = 'default', duration } = message;

  function handleRemoveToast() {
    onRemoveMessage(id);
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onRemoveMessage(id);
    }, duration || 7000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [onRemoveMessage, id, duration]);

  return (
    <Container
      type={type}
      onClick={handleRemoveToast}
      tabIndex={0}
      role="button"
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
};
