import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';

function NewContact() {
  return (
    <>
      <PageHeader title="Novo contato" />
      <ContactForm buttonLabel="Cadastrar" />
    </>
  );
}

export default NewContact;
