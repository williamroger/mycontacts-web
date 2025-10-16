import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import ContactsService from '../../services/ContactsService';
import Loader from '../../components/Loader';
import toast from '../../utils/toast';

function EditContact() {
  const [isLoading, setIsLoading] = useState(true);
  const contactFormRef = useRef(null);

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function loadContact() {
      try {
        const contact = await ContactsService.getContactById(id);
        contactFormRef.current.setFieldsValues(contact);
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
      <ContactForm
        ref={contactFormRef}
        onSubmit={handleSubmit}
        buttonLabel="Salvar alterações"
      />
    </>
  );
}

export default EditContact;
