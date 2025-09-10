import PropTypes from 'prop-types';
import { Container } from './styles';

export default function ToastMessage({ text, type = 'default' }) {
  return (
    <Container type={type}>
      <strong>{text}</strong>
    </Container>
  );
}

ToastMessage.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default', 'danger', 'success']),
};
