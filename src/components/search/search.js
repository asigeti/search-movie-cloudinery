//React Redux import
import React, { Component } from "react";
import { connect } from "react-redux";

//internal import
import { setUserInputToState } from './search-actions';
import MoviesList from '../movies-list/Movies-list'


class Search extends Component {
  constructor(props) {
    super(props);
    this.onUserSearch = this.onUserSearch.bind(this);
    this.onSearchClicked = this.onSearchClicked.bind(this);
    this.state = {
      search:''
    }

  }

  onSearchClicked = event => {
    event.preventDefault();
    event.stopPropagation();
      this.props.setUserInputToState({ userInput: this.state.search, year: this.state.year });
  }
  onUserSearch = event => {
    this.setState({ search: event.target.value })
  };
  onUserYearSearch = event => {
    this.setState({ year: event.target.value });
  }
  render() {
    return (
      <section >
        <form onSubmit={this.onSearchClicked}>
          <div style={searchStyle}>
            <div style={searchStyle.searchContainer}>
              <p>Search By Movie Title</p>
              <input type="text" autoFocus style={searchStyle.searchTitleInput} onChange={this.onUserSearch}  ></input>
            </div>
            <div style={searchStyle.searchContainer}>
              <p>Release Year (*this is optional)</p>
              <input type="text" style={searchStyle.searchYearInput} onChange={this.onUserYearSearch}></input>
            </div>
            <input type='submit' style={searchStyle.blueButon} value='Search'></input>
          </div>
        </form>
        <MoviesList />
      </section >
    );
  }
}

//component style
const searchStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  searchContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  searchTitleInput: {
    height: '44px',
    width: '560px',
    borderRadius: '50px',
    border: '2px solid black',
    outline: "none",
    fontSize: '24px',
    paddingLeft: '20px'
  },
  blueButon: {
    width: '150px',
    height: '40px',
    borderRadius: '50px',
    background: '#0171ce',
    color: '#ffff',
    fontSize: '20px',
    marginTop: '20px'
  },
  searchYearInput: {
    height: '25px',
    width: '160px',
    borderRadius: '50px',
    border: '2px solid black',
    outline: "none",
    fontSize: '14px',
    paddingLeft: '20px'
  },
}

const mapStateToProps = state => ({
  userInput: state.search,
});
const mapDispatchToProps = dispatch => {
  return {
    setUserInputToState: (search) => dispatch(setUserInputToState(search)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
