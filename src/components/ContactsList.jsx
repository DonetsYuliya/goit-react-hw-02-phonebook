import css from './style.module.css';
import PropTypes from 'prop-types';

const ContactItem = ({ contacts, removeContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li className={css.item} key={id}>
            {name}: {number}{' '}
            <button type="button" onClick={() => removeContact(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactItem;

ContactItem.defaultProps = {
  contacts: [],
};

ContactItem.propTypes = {
  removeContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
