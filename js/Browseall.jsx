const React = require('react');
const ReactRedux = require('react-redux');
const { Link } = require('react-router');

const Browse = React.createClass({
  render () {
    return (
       <div>
        <h3>All Items Here</h3>
        <div>
          {this.props.all.map(function(item) {
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

const mapStateToProps = (state) => {
  return {
    all: state.all
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Browse);