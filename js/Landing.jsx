const React = require('react');
const { Link } = require('react-router');
const Featured = require('./Featured')

const Landing = React.createClass({
  render() {
    return (
      <div>
        <h1 className='title'>Computers Emporium</h1>
        <form>
          <input type='text' placeholder='Search' />
        </form>
        <Link to='browseall' >Browse All </Link>
        <Featured/>
      </div>
    )
  }
})

module.exports = Landing;