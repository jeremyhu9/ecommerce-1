const React = require('react');
const ReactRedux = require('react-redux');
const Thumb = require('./Thumb')

const Featured = React.createClass({
  componentDidMount: function(){
    // this.props.setFeatured();
  },
  render() {
    return (
      <div>
        <h3>Some featured items go here</h3>
        <div>
          {this.props.featured.map(function(item) {
            return (<Thumb {...item} key={item.id}/>)
          })}
        </div>
      </div>
    )
  }
});

const mapStateToProps = (state) => {
  return {
    featured: state.featured
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Featured);
