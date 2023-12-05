import axiosClient from './axiosClient';

const dbApi = {
  getDB: () => axiosClient.get('data'),
  postDB: (username, params) => axiosClient.post(`/data/${username}`, params),
  createCard: (username, params) =>
    axiosClient.post(`/data/${username}`, params),
  deletCard: (id) => axiosClient.delete(`/data/${id}`),
  updateCard: (id, params) => axiosClient.post(`/data/memo/${id}`, params),
};

export default dbApi;
