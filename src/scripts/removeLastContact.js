import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

/**
 * Функція для видалення останнього контакту з файлу
 */
export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();

    if (contacts.length === 0) {
      console.log('No contacts to remove.');
      return;
    }

    contacts.pop();

    await writeContacts(contacts);

    console.log('The last contact has been removed.');
  } catch (error) {
    console.error('Error removing the last contact:', error.message);
  }
};


removeLastContact();
