import { Container } from './styles';

export default function SearchNotFound({ searchTerm }) {
  return (
    <Container>
      <span>
        Nenhum resultado foi encontrado para <strong>{searchTerm}</strong>
      </span>
    </Container>
  );
}
