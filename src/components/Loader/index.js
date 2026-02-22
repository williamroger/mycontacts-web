import PropTypes from 'prop-types';

import { OverLay } from './styles';
import Spinner from '../Spinner';
import ReactPortal from '../ReactPortal';
import { useAnimatedUnmount } from '../../hooks/useAnimatedUnmount';
export default function Loader({ isLoading }) {
  const { shouldRender, animatedElementRef } = useAnimatedUnmount(isLoading);

  if (!shouldRender) return null;

  return (
    <ReactPortal containerId="loader-root">
      <OverLay ref={animatedElementRef} isLiving={!isLoading}>
        <Spinner size={90} />
      </OverLay>
    </ReactPortal>
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
