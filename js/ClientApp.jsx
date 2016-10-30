const React = require('react');
const ReactDOM = require('react-dom');
const Landing = require('./Landing');
const Browse = require('./Browseall');
const Featured = require('./Featured');
const LandingComponents = require('./LandingComponents');
const { Router, Route, hashHistory } = require('react-router');
const { store } = require('./Store');
const { Provider } = require('react-redux');
const Details = require('./Details');

const App = React.createClass({
  render() {
    return(
      <Provider store={store}>
        <Router history = {hashHistory}>
          <Route component={Landing}>
            <Route path='/' component={LandingComponents} />
            <Route path='browseall' component={Browse} />
            <Route path='details' component={Details} />
          </Route>
        </Router>
      </Provider>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))