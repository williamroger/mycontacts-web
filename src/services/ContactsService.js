import HttpClient from './utils/HttpClient';

class ContactsService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  async loadContacts(orderBy = 'asc') {
    return this.httpClient.get(
      `/contacts/3678817d-b038-423d-9a8b-6b957959b05a?orderBy=${orderBy}`
    );
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ContactsService();
