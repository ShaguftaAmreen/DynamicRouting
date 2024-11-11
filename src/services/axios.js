import axios from 'axios';


const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', 
});


instance.interceptors.request.use(
  (config) => {
    
    // console.log('Request Sent:', config);
    config.headers.channelName="WEBDEV"
    config.headers.Authorization = 'Bearer your_token2';
    
    return config;
  },
  (error) => {
    console.error('Request Error:', error);
    return Promise.reject(error); 
             }
             );


// instance.interceptors.response.use(
//   (response) => {
  
//     // console.log('Response Received:', response);
//     return response; 
//   },
//   (error) => {
//     if (error.response) {
      
//       // console.error('Response Error:', error.response);
//     } else if (error.request) {

//       console.error('Request Error:', error.request);
//     } else {
      
//       console.error('Axios Error:', error.message);
//     }
//     return Promise.reject(error); 
//   }
// );

export default instance;
