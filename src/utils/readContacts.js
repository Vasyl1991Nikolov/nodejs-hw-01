import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

/**
 * Функція для зчитування контактів із файлу
 * @returns {Promise<Array>} - Масив контактів
 */
export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading contacts:', error.message);
    return [];
  }
};
