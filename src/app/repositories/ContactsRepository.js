const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Charles',
    email: 'charles@email.com',
    phone: '1212121212',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }
}

module.exports = new ContactsRepository();
