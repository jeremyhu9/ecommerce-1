const React = require('react');
const { Link } = require('react-router');
const Featured = require('./Featured');

const Landing = React.createClass({
  render() {
    return (
      <div>
        <div className='page-header'>
          <h1>Computers Emporium <small>Get Yo Gear Here!</small></h1>
        </div>

        <div className="navigation">
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <Link to="/" className="navbar-brand">Home</Link>
                <Link to="browseall" className="navbar-brand">Browse All</Link>
              </div>

              <form className="navbar-form navbar-left" role="search">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Search" />
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button">Go</button>
                  </span>
                </div>
              </form>
            </div>

          </nav>
        </div>

        <section>
          {this.props.children}
        </section>

      </div>
    )
  }
});



module.exports = Landing;