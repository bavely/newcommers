// Here we will utilize the axios library to perform GET/POST requests
var axios = require("axios");

// Exporting an object with methods for retrieving and posting data to our API
const helpers = {

   bbcCall(){
    return axios.get(' https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&country=us&apiKey=e0b6714f4b2b4828b6385912567f2801')
  .then((response)=> {
    console.log(response.data);
    return response = response.data;
  })
  .catch( (error)=> {
    console.log(error);
    return error;
  });
  },

  nytCall(){

    return axios.get('  https://newsapi.org/v1/articles?source=the-new-york-times&sortBy=top&apiKey=e0b6714f4b2b4828b6385912567f2801')
    .then((response)=> {
      console.log(response.data);
      return response = response.data;
    })
    .catch( (error)=> {
      console.log(error);
      return error;
    });

  },
  alAhram(){

    return axios.get("/api/ahram").then((response)=> {
      console.log(response);
      return response;
    })
    .catch( (error)=> {
      console.log(error);
      return error;
    });

  },

  alMasry(){

    return axios.get("/api/masry").then((response)=> {
      console.log(response);
      return response;
    })
    .catch( (error)=> {
      console.log(error);
      return error;
    });

  }
}
export default helpers;