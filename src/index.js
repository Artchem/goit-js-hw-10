// import axios from 'axios';

// axios.defaults.headers.common['x-api-key'] =
//   'live_Nn1VsEsOxvKXUEDZgJ1Ozas6fp5FWjakqenWEpD7mkWJC14l0f27DWhxmAMxBpJz';

const API_KEY =
  'live_Nn1VsEsOxvKXUEDZgJ1Ozas6fp5FWjakqenWEpD7mkWJC14l0f27DWhxmAMxBpJz';

fetch('https://api.thecatapi.com/v1/breeds?api_key=API_KEY')
  .then(response => {
    console.log(response.json());

    return response;
  })
  .then(cat => {
    console.log(cat);
  })
  .catch(error => {
    console.log(error);
  });

// console.log(r);
