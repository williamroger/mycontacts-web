import delay from '../utils/delay';

class ContactsService {
  async loadContacts(orderBy = 'asc') {
    const response = await fetch(
      `http://localhost:3001/contacts?orderBy=${orderBy}`,
    );

    await delay(500); // simula tempo de resposta da api em 500 milissegundos.

    return response.json();
  }
}

export default new ContactsService();
