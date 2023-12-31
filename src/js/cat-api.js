import axios from 'axios';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1/';
axios.defaults.headers.common['x-api-key'] =
  'live_Nn1VsEsOxvKXUEDZgJ1Ozas6fp5FWjakqenWEpD7mkWJC14l0f27DWhxmAMxBpJz';

function fetchBreeds() {
  return axios.get('breeds').then(response => {
    return response.data;
  });
}

function fetchCatByBreed(breedId) {
  return axios.get(`images/search?breed_ids=${breedId}`).then(response => {
    return response.data;
  });
}

export { fetchBreeds };
export { fetchCatByBreed };
