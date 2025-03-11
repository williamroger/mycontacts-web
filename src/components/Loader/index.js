import { createPortal } from 'react-dom';

import { OverLay } from './styles';

function Loader() {
  return createPortal(
    <OverLay>
      <div className="loader" />
    </OverLay>,
    document.getElementById('loader-root'),
  );
}

export default Loader;
