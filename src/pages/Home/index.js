import { Container } from './styles';

import Loader from '../../components/Loader';
import Modal from '../../components/Modal';
import InputSearch from './components/InputSearch';
import ErrorStatus from './components/ErrorStatus';
import Header from './components/Header';
import EmptyList from './components/EmptyList';
import SearchNotFound from './components/SearchNotFound';
import ContactsList from './components/ContactsList';

import useHome from './useHome';

export default function Home() {
  const {
    isLoading,
    isDeleteModalVisible,
    contactBeingDeleted,
    isLoadingDelete,
    contacts,
    searchTerm,
    orderBy,
    hasError,
    filteredContacts,
    handleTryAgain,
    handleChangeSearchTerm,
    handleToggleOrderBy,
    handleDeleteContact,
    handleCloseDeleteModal,
    handleConfirmDeleteContact,
  } = useHome();

  const hasContacts = !hasError && contacts.length > 0;
  const isListEmpty = !hasError && !isLoading && !hasContacts;
  const isSearchEmpty =
    !hasError && hasContacts && filteredContacts?.length < 1;

  return (
    <Container>
      <Loader isLoading={isLoading} />

      {hasContacts && (
        <InputSearch value={searchTerm} onChange={handleChangeSearchTerm} />
      )}

      <Header
        hasError={hasError}
        quantityOfContacts={contacts.length}
        quantityOfFilteredContacts={filteredContacts.length}
      />

      {hasError && <ErrorStatus onTryAgain={handleTryAgain} />}

      {isListEmpty && <EmptyList />}

      {isSearchEmpty && <SearchNotFound searchTerm={searchTerm} />}

      {hasContacts && (
        <>
          <ContactsList
            filteredContacts={filteredContacts}
            orderBy={orderBy}
            onToggleOrderBy={handleToggleOrderBy}
            onDeleteContact={handleDeleteContact}
          />

          <Modal
            danger
            visible={isDeleteModalVisible}
            title={`Tem certeza que deseja remover o contato ${contactBeingDeleted?.name}?`}
            confirmLabel="Deletar"
            isLoading={isLoadingDelete}
            onCancel={handleCloseDeleteModal}
            onConfirm={handleConfirmDeleteContact}
          >
            <p>Esta ação não poderá ser desfeita.</p>
          </Modal>
        </>
      )}
    </Container>
  );
}
