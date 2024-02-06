import axios from 'axios'; // Import Axios


// Axios configuration

axios.get('http://localhost:1337/graphql')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
