import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

/**
 * Функція для видалення всіх контактів з файлу
 */
export const removeAllContacts = async () => {
  try {
    const contacts = await readContacts();

    if (contacts.length === 0) {
      console.log('No contacts to remove.');
      return;
    }

    await writeContacts([]);

    console.log('All contacts have been removed.');
  } catch (error) {
    console.error('Error removing all contacts:', error.message);
  }
};

removeAllContacts();
