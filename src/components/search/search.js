//React Redux import
import React, { Component } from "react";
import { connect } from "react-redux";

//lib import
import  debounce  from 'lodash/debounce'


//internal import
import { setUserInputToState } from './search-actions';
import Movie from '../Movies/movie'


class Search extends Component {
  constructor(props) {
    super(props);
    this.onUserSearch = this.onUserSearch.bind(this);
  }

  onUserSearch = event => {
    //debouncing after 500 milliseconds 
    debouncedSearch(event.target.value,this.props.setUserInputToState);
  };
  render() {
    return (
      <section >
        <div style={searchStyle.searchContainer}>
          <input autoFocus style={searchStyle.searchInput} onChange={this.onUserSearch} ></input>
        </div>
        <Movie movieTitle={this.state ? this.state.search : null} />
      </section>
    );
  }
}

//component style
const searchStyle = {
  searchContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: '40px'
  },
  searchInput: {
    height: '44px',
    width: '560px',
    borderRadius: '50px',
    border: '2px solid black',
    outline: "none",
    fontSize: '24px',
    paddingLeft: '20px '
  }
}
const debouncedSearch = debounce(function(userInput,func){
    func(userInput);
    //the 500 milliseconds should be in conf file 
}, 500)
const mapStateToProps = state => ({
  userInput: state.userInput,
});
const mapDispatchToProps = dispatch => {
  return {
    setUserInputToState: (userInput) => dispatch(setUserInputToState(userInput)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
