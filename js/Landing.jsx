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

        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link to="/" className="navbar-brand">Home</Link>
              <Link to="browseall" className="navbar-brand">Browse All</Link>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 col-md-offset-4">
              <form className="navbar-form navbar-left" role="search">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Search" />
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button">Go</button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </nav>

        <section>
          {this.props.children}
        </section>

      </div>
    )
  }
});



module.exports = Landing;