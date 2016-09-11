const React = require('react');
const { Link } = require('react-router');

const Landing = React.createClass({
  render() {
    return (
      <div>
        <h1 className='title'>Computers Emporium</h1>
        <Link to='browseall' >Browse All </Link>
      </div>
    )
  }
})

module.exports = Landing;