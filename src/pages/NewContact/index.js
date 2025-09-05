import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import ContactsService from '../../services/ContactsService';

function NewContact() {
  async function handleSubmit(formData) {
    try {
      const contact = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.categoryId || null,
      };

      const response = await ContactsService.createContact(contact);
      console.log(response);
    } catch (error) {
      alert('Ocorreu um erro ao tentar cadastrar contato');
    }
  }

  return (
    <>
      <PageHeader title="Novo contato" />
      <ContactForm buttonLabel="Cadastrar" onSubmit={handleSubmit} />
    </>
  );
}

export default NewContact;
