import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ContactsService from '../../services/ContactsService';
import Loader from '../../components/Loader';
import toast from '../../utils/toast';

function EditContact() {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    async function loadContact() {
      try {
        const contactData = await ContactsService.getContactById(id);
        console.log(contactData);
        setIsLoading(false);
      } catch (error) {
        history.push('/');
        toast({
          type: 'danger',
          text: 'Contato não encontrado!',
        });
      }
    }

    loadContact();
  }, [id, history]);

  function handleSubmit() {}

  return (
    <>
      <Loader isLoading={isLoading} />
      <PageHeader title="Editar William Roger" />
      <ContactForm onSubmit={handleSubmit} buttonLabel="Salvar alterações" />
    </>
  );
}

export default EditContact;
