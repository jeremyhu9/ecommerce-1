const redux = require('redux');
const {all, featured} = require('../public/data');

const initialState = {
  all,
  featured
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
    return state
  }
}

const store = redux.createStore(
  rootReducer, 
  initialState
)

module.exports = { store, rootReducer }