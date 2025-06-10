import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.weatherstack.com/current?access_key=e84b3bc59f40505b7b1b3a2e8c76a675',
  params: {
    query: '40.7831,-73.9712',
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}
