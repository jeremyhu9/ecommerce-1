const React = require('react');
const ReactDOM = require('react-dom');
const Landing = require('./Landing');
const Browse = require('./Browseall');
const Featured = require('./Featured');
const { Router, Route, hashHistory } = require('react-router');

const App = React.createClass({
  render() {
    return(
      <Router history = {hashHistory}>
        <Route component={Landing}>
          <Route path='/' component={Featured} />
          <Route path='browseall' component={Browse} />
        </Route>
      </Router>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))