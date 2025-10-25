import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

import { Overlay, Container, Footer } from './styles';
import Button from '../Button';

function Modal({
  danger,
  title,
  children,
  cancelLabel,
  confirmLabel,
  onCancel,
  onConfirm,
}) {
  return createPortal(
    <Overlay>
      <Container danger={danger}>
        <h1>{title}</h1>

        <div className="modal-body">{children}</div>

        <Footer>
          <button onClick={onCancel} type="button" className="cancel-button">
            {cancelLabel || 'Cancelar'}
          </button>
          <Button onClick={onConfirm} type="button" danger={danger}>
            {confirmLabel || 'Confirmar'}
          </Button>
        </Footer>
      </Container>
    </Overlay>,
    document.getElementById('modal-root')
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  cancelLabel: PropTypes.string,
  confirmLabel: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  danger: false,
};

export default Modal;
