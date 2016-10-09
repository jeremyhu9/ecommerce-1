const React = require('react');
const { Link } = require('react-router');
const data = require('../public/data');

const Browse = React.createClass({
  render () {
    return (
       <div>
        <h3>All Items Here</h3>
        <div>
          {data.all.map(function(item) {
            return (
              <div className='items' key={item.id}>
                <p>{item.productName}</p>
                <img src="http://placehold.it/140x100" />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
});

module.exports = Browse;