var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=verdun'>Verdun, FR</Link>
        </li>
        <li>
          <Link to='/?location=petting'>Petting, DE</Link>
        </li>
        <li>
          <Link to='/?location=fukking'>Tittmoning, DE</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
