const React = require('react');
const data = require('../public/data');
const ReactRedux = require('react-redux');

const Featured = React.createClass({
  componentDidMount: function(){
    this.props.setFeatured();
  },
  render() {
    return (
      <div>
        <h3>Some featured items go here</h3>
        <div>
          {this.props.featured.map(function(item) {
            return (
              <div className="items" key={item.id}>
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
    featured: state.featured
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Featured);
