import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

/**
 * Функція для запису контактів у файл
 * @param {Array} updatedContacts - Масив контактів для запису
 */
export const writeContacts = async (updatedContacts) => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2), 'utf8');
    console.log('Contacts have been successfully written to file.');
  } catch (error) {
    console.error('Error writing contacts:', error.message);
    throw error;
  }
};
