var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=b62eed080e4e79259eebdf7274a2c8ad&units=metric';
//b62eed080e4e79259eebdf7274a2c8ad
module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    return axios.get(requestUrl).then(
      function(result){
        if(result.data.cod && result.data.message){
          throw new Error(result.data.message)
        } else {
          return result.data;
        }
      },
      function(res){
        throw new Error(res.response.data.message)
      }
    );
  }
}
