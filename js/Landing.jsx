const React = require('react');
const { Link } = require('react-router');
const Featured = require('./Featured');
const { Nav, NavItem } = require('react-bootstrap');

const Landing = React.createClass({
  render() {
    return (
      <div>
        <div className='page-header'>
          <h1>Computers Emporium <small>Get Your Gear Here!</small></h1>
        </div>
        <Nav bsStyle="pills" activeKey={1}>
            <NavItem eventKey={1} href="/landing">Home Page</NavItem>
            <NavItem eventKey={2} title="/browseall">Browse All</NavItem>
            <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
        </Nav>
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search" />
              <span className="input-group-btn">
                <button className="btn btn-default" type="button">Go</button>
              </span>
            </div>
          </div>
        </div>
        <Link to='browseall' >Browse All </Link>
        <Featured/>
      </div>
    )
  }
});



module.exports = Landing;