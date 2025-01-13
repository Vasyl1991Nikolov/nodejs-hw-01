
import { readContacts } from '../utils/readContacts.js';

/**
 * Функція для отримання всіх контактів з файлу
 */
export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();

    if (contacts.length === 0) {
      console.log('No contacts found.');
    } else {
      console.log('Contacts:', contacts);
    }
  } catch (error) {
    console.error('Error getting all contacts:', error.message);
  }
};


getAllContacts();

