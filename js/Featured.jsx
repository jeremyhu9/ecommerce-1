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
              <div key={item.id}>
                <p>{item.productName}</p>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
});

module.exports = Featured;