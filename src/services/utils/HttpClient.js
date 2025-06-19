import delay from '../../utils/delay';

class HttpClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async get(path) {
    await delay(500); // simula tempo de resposta da api em 500 milissegundos.

    let body = null;
    const response = await fetch(`${this.baseUrl}${path}`);
    const contentType = response.headers.get('Content-Type');

    if (contentType && contentType.includes('application/json')) {
      body = await response.json();
    }

    if (response.ok) {
      return body;
    }

    throw new Error(
      body?.error || `${response.status} - ${response.statusText}`
    );
  }
}

export default HttpClient;
