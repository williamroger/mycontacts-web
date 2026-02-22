import { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { Overlay, Container, Footer } from './styles';
import Button from '../Button';
import ReactPortal from '../ReactPortal';

function Modal({
  danger = false,
  visible,
  isLoading = false,
  title,
  children,
  cancelLabel,
  confirmLabel,
  onCancel,
  onConfirm,
}) {
  const overlayRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(visible);

  useEffect(() => {
    if (visible) {
      setShouldRender(true);
    }

    function handleAnimationEnd() {
      setShouldRender(false);
    }

    const overlayRefElement = overlayRef.current;
    if (!visible && overlayRefElement) {
      overlayRefElement.addEventListener('animationend', handleAnimationEnd)
    }

    return () => {
      if (overlayRefElement) {
        overlayRefElement.removeEventListener('animationend', handleAnimationEnd);
      }
    }
  }, [visible]);

  if (!shouldRender) {
    return null;
  }

  return (
    <ReactPortal containerId="modal-root">
      <Overlay isLiving={!visible} ref={overlayRef}>
        <Container danger={danger} isLiving={!visible}>
          <h1>{title}</h1>

          <div className="modal-body">{children}</div>

          <Footer>
            <button
              onClick={onCancel}
              type="button"
              className="cancel-button"
              disabled={isLoading}
            >
              {cancelLabel || 'Cancelar'}
            </button>
            <Button
              onClick={onConfirm}
              type="button"
              danger={danger}
              isLoading={isLoading}
            >
              {confirmLabel || 'Confirmar'}
            </Button>
          </Footer>
        </Container>
      </Overlay>
      ,
    </ReactPortal>
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
  visible: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  cancelLabel: PropTypes.string,
  confirmLabel: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default Modal;
