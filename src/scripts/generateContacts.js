import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

/**
 * Функція для генерації контактів і додавання їх до масиву
 * @param {number} count - Кількість контактів для генерації
 */
export const generateContacts = async (count) => {
  try {

    const contacts = await readContacts();


    for (let i = 0; i < count; i++) {
      contacts.push(createFakeContact());
    }

    await writeContacts(contacts);
    console.log(`${count} contacts have been successfully generated and saved.`);
  } catch (error) {
    console.error('Error generating contacts:', error.message);
  }
};


generateContacts(5);
