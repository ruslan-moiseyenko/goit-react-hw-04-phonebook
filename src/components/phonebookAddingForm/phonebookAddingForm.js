import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { FormPhoneBook, FormInput } from './FormPhoneBook.styled';

export default function PhonebookAddingForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const id = nanoid();
    onSubmit({ id, name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormPhoneBook onSubmit={handleSubmit}>
      <label>
        Name
        <FormInput
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
        <br />
        <label>
          Phone
          <FormInput
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit" name="button Add">
          Add contact
        </button>
      </label>
    </FormPhoneBook>
  );
}

PhonebookAddingForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
