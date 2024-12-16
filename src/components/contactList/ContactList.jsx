import { PropTypes } from 'prop-types';
import ContactItem from '../contactItem';
import { ContactListEl, ContactListItem } from './ContactList.styled';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ContactListEl>
      {contacts.map(({ name, number, id }) => (
        <ContactListItem key={id}>
          <ContactItem
            name={name}
            number={number}
            onClick={() => deleteContact(id)}
          />
        </ContactListItem>
      ))}
    </ContactListEl>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
