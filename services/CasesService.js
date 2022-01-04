import clientAPI from './AxiosConfig';

const baseURL = 'http://localhost:3100/api/cases/';
export default {
  async getCase(id) {
    return await clientAPI(baseURL).get(`${id}`);
  },
  async getCases(data){
    return await clientAPI(baseURL).get('',{ params: data });
  },
  async getCasesHero(data) {
    const resp = await clientAPI('http://localhost:3100/api/cases-hero/').get('',{ params: data });
    return resp.data
  }
};
