const React = require('react');
const data = require('../public/data')

const Featured = React.createClass({
  render() {
    return (
      <div>
        <h3>Some featured items go here</h3>
        <div>
          {data.featured.map(function(item) {
            return (
              <p>{item.productName}</p>
            )
          })}
        </div>
      </div>
    )
  }
});

module.exports = Featured;