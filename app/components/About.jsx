var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a weather application build on React.</p>
      <p>Here some of the tools used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react" target="_blank">React</a> - This is the JavaScript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org" target="_blank">Open Weather Map</a> - The app uses Open Weather Map to search for weather data by city name.
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
