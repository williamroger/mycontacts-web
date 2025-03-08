import Input from '../../components/Input';
import Select from '../../components/Select';
import PageHeader from '../../components/PageHeader';

function NewContact() {
  return (
    <>
      <PageHeader title="Novo contato" />

      <Input placeholder="Nome" />
      <Select>
        <option value="123">Instagram</option>
        <option value="124">Twitter</option>
      </Select>
    </>
  );
}

export default NewContact;
