import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  const contacts = JSON.parse(await readContacts());
  if (contacts.length === 0) {
    console.error('No contacts found.');
    return;
  }
  await writeContacts([]);
  return console.log('Data removed');
};

removeAllContacts();
