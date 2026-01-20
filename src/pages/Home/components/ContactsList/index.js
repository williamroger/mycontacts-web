import { Link } from 'react-router-dom';

import Arrow from '../../../../assets/images/icons/arrow.svg';
import Edit from '../../../../assets/images/icons/edit.svg';
import Trash from '../../../../assets/images/icons/trash.svg';

import { ListHeader, Card } from './styles';

export default function ContactsList({
  filteredContacts,
  orderBy,
  onToggleOrderBy,
  onDeleteContact,
}) {
  return (
    <>
      {filteredContacts?.length > 0 && (
        <ListHeader orderby={orderBy}>
          <button
            type="button"
            className="sort-button"
            onClick={onToggleOrderBy}
          >
            <span>Nome</span>
            <img src={Arrow} alt="Arrow" />
          </button>
        </ListHeader>
      )}

      {filteredContacts?.map((contact) => (
        <Card key={contact.id}>
          <div className="info">
            <div className="contact-name">
              <strong>{contact.name}</strong>
              {contact.category && (
                <small>{contact.category.name}</small>
              )}
            </div>
            <span>{contact.email}</span>
            <span>{contact.phone}</span>
          </div>
          <div className="actions">
            <Link to={`/edit/${contact.id}`}>
              <img src={Edit} alt="Edit" />
            </Link>
            <button
              type="button"
              onClick={() => onDeleteContact(contact)}
            >
              <img src={Trash} alt="Delete" />
            </button>
          </div>
        </Card>
      ))}
    </>
  )
}
