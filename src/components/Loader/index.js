import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { OverLay } from './styles';

export default function Loader({ isLoading }) {
  if (!isLoading) return null;

  return createPortal(
    <OverLay>
      <div className="loader" />
    </OverLay>,
    document.getElementById('loader-root'),
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
