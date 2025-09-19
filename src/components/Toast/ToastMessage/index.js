import PropTypes from 'prop-types';
import { Container } from './styles';

export default function ToastMessage({ message, onRemoveMessage }) {
  const { id, text, type = 'default' } = message;

  function handleRemoveToast() {
    onRemoveMessage(id);
  }

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
  }).isRequired,
  onRemoveMessage: PropTypes.func.isRequired,
};
