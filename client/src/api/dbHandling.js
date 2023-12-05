import axiosClient from './axiosClient';

const dbApi = {
  getDB: () => {
    console.log('OLLLL');
    return axiosClient.get('data');
  },
  postDB: (username, params) => axiosClient.post(`/data/${username}`, params),
};

export default dbApi;
