import { Container } from './styles';
import Button from '../../../../components/Button';

export default function ErrorStatus({ onTryAgain }) {
  return (
    <Container>
      <strong>Ocorreu um erro ao obter os seus contatos!</strong>
      <Button type="button" onClick={onTryAgain}>
        Tentar novamente
      </Button>
    </Container>
  );
}
