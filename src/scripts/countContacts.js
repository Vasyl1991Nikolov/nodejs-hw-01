import { readContacts } from '../utils/readContacts.js';

/**
 * Функція для підрахунку кількості контактів у файлі
 */
export const countContacts = async () => {
  try {

    const contacts = await readContacts();
    console.log(`Total number of contacts: ${contacts.length}`);
  } catch (error) {
    console.error('Error counting contacts:', error.message);
  }
};


countContacts();
