import delay from '../../utils/delay';

class HttpClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async get(path) {
    const response = await fetch(`${this.baseUrl}${path}`);

    await delay(500); // simula tempo de resposta da api em 500 milissegundos.

    return response.json();
  }
}

export default HttpClient;
