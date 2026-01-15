import HttpClient from './utils/HttpClient';
import CategoryMapper from './mappers/CategoryMapper';

class CategoriesService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  async loadCategories() {
    const categories = await this.httpClient.get('/categories');

    return categories.map(category => CategoryMapper.toDomain(category));
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new CategoriesService();
