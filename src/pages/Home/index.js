import { Link } from 'react-router-dom';
import {
  Container,
  InputSearchContainer,
  Header,
  ListContainer,
  Card,
} from './styles';

import Arrow from '../../assets/images/icons/arrow.svg';
import Edit from '../../assets/images/icons/edit.svg';
import Trash from '../../assets/images/icons/trash.svg';

function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>
        <Link to="/new">Novo Contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button" className="sort-button">
            <span>Nome</span>
            <img src={Arrow} alt="Arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>William Roger</strong>
              <small>instagram</small>
            </div>
            <span>william@email.com</span>
            <span>(81) 99999-9999</span>
          </div>
          <div className="actions">
            <Link to="/edit/123">
              <img src={Edit} alt="Edit" />
            </Link>
            <button type="button">
              <img src={Trash} alt="Delete" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}

export default Home;
