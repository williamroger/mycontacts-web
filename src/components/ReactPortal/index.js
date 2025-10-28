import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

export default function ReactPortal({ containerId, children }) {
  let container = document.getElementById(containerId);

  if (!container) {
    container = document.createElement('div');
    container.setAttribute('id', containerId);
    document.body.appendChild(container);
  }

  return createPortal(children, container);
}

ReactPortal.protoTypes = {
  containerId: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
