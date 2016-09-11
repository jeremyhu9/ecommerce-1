const React = require('react');
const ReactDOM = require('react-dom');
const Landing = require('./Landing');
const Browse = require('./Browseall');
const { Router, Route, hashHistory } = require('react-router');

const App = React.createClass({
  render() {
    return(
      <Router history = {hashHistory}>
        <Route path='/' component={Landing} />
        <Route path='browseall' component={Browse} />
      </Router>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))