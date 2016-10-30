const React = require('react');

const Thumb = function(props) {
  console.log(props);
  return (
    <div className="items">
      <p>{props.productName}</p>
      <img src="http://placehold.it/140x100" />
    </div>
  )
}

module.exports = Thumb;