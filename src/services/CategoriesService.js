import HttpClient from './utils/HttpClient';

class CategoriesService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  loadCategories() {
    return this.httpClient.get('/categories');
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new CategoriesService();
