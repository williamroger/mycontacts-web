import PropTypes from 'prop-types';

import { OverLay } from './styles';
import Spinner from '../Spinner';
import ReactPortal from '../ReactPortal';
export default function Loader({ isLoading }) {
  if (!isLoading) return null;

  return (
    <ReactPortal containerId="loader-root">
      <OverLay>
        <Spinner size={90} />
      </OverLay>
    </ReactPortal>
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
