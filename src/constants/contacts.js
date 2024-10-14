import { fileURLToPath } from 'node:url';
export const PATH_DB =
  fileURLToPath(new URL('../db', import.meta.url)) + '/db.json';
