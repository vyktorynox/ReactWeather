var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function(location){
    var self=this;
    this.setState({
      isLoading: true
    });
    openWeatherMap.getTemp(location).then(
      function(data){
        var matchedLocation = data.name + ', ' + data.sys.country;
        self.setState({
          location: matchedLocation,
          temp: data.main.temp,
          isLoading: false
        });
      },
      function(errorMessage){
        self.setState({isLoading: false});
        alert(errorMessage);
      }
    );
  },
  render: function(){
    var {isLoading, temp, location} = this.state;
    function renderMessage() {
      if(isLoading){
        return <h3 className="text-center">Fetching weather...</h3>;
      }else if(temp && location){
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }
    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    )
  }
});

module.exports = Weather;
