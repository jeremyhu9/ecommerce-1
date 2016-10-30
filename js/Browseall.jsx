const React = require('react');
const ReactRedux = require('react-redux');
const Thumb = require('./Thumb');
const { Link } = require('react-router');

const Browse = React.createClass({
  render () {
    return (
       <div>
        <h3>All Items Here</h3>
        <div>
          {this.props.all.map(function(item) {
            return (<Thumb {...item} key={item.id}/>)
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