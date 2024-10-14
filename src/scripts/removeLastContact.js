import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  let contacts = JSON.parse(await readContacts());
  contacts.pop();
  await writeContacts(contacts);
};

removeLastContact();
