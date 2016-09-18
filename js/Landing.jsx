const React = require('react');
const { Link } = require('react-router');
const Featured = require('./Featured');
import { Nav, NavItem } from 'react-bootstrap';

const Landing = React.createClass({
  render() {
    return (
      <div>
        <h1 className='title'>Computers Emporium</h1>
        <Nav bsStyle="pills" activeKey={1}>
            <NavItem eventKey={1} href="/landing">Home Page</NavItem>
            <NavItem eventKey={2} title="/browseall">Browse All</NavItem>
            <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
        </Nav>
        <form >
          <input type='text' placeholder='Search' />
        </form>
        // <Link to='browseall' >Browse All </Link>
        <Featured/>
      </div>
    )
  }
});



module.exports = Landing;