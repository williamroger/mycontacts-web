import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { OverLay } from './styles';
import Spinner from '../Spinner';

export default function Loader({ isLoading }) {
  if (!isLoading) return null;

  return createPortal(
    <OverLay>
      <Spinner size={90} />
    </OverLay>,
    document.getElementById('loader-root')
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
