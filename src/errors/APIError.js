export default class APIError extends Error {
  constructor(response, body) {
    // construtor de Error
    super();
    // define o nome do erro como 'APIError'
    this.name = 'APIError';
    // armazena a resposta da API, se disponível
    this.response = response;
    // armazena o corpo da resposta, se disponível
    this.body = body;
    // define a mensagem de erro, utilizando o corpo da resposta ou o status e statusText da resposta
    this.message = body?.error || `${response.status} - ${response.statusText}`;
  }
}
