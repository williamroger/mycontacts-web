import { Container } from './styles';

export default function EmptyList() {
  return (
    <Container>
      <p>
        Você ainda não tem nenhum contato cadastrado! Clique no botão
        <strong>"Novo Contato"</strong> acima para cadastrar o seu
        primeiro contato!
      </p>
    </Container>
  );
}
