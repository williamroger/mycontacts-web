import Input from '../../components/Input';
import Select from '../../components/Select';
import PageHeader from '../../components/PageHeader';
import Button from '../../components/Button';

function NewContact() {
  return (
    <>
      <PageHeader title="Novo contato" />

      <Input placeholder="Nome" />
      <Select>
        <option value="123">Instagram</option>
        <option value="124">Twitter</option>
      </Select>

      <Button type="button">
        Salvar alterações
      </Button>

      <Button type="button" disabled>
        Salvar alterações
      </Button>
    </>
  );
}

export default NewContact;
