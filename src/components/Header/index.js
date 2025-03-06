import { Container } from './styles';

import logo from '../../assets/images/logo.svg';

function Header() {
  return (
    <Container>
      <img src={logo} alt="MyContacts" width="209" />
    </Container>
  );
}

export default Header;
