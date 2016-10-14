const React = require('react');
const data = require('../public/data')
const Featured = require('./Featured')
const OnSale = require('./OnSale')

const LandingComponents = React.createClass({
  render() {
    return (
      <div>
        <Featured />
        <OnSale />
      </div>
    )
  }
});

module.exports = LandingComponents;