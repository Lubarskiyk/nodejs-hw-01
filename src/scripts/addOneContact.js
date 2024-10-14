import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  let contacts = JSON.parse(await readContacts());
  contacts.push(createFakeContact());
  await writeContacts(contacts);
};

addOneContact();
