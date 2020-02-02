//React Redux import
import React, { Component } from "react";
import { connect } from "react-redux";

//lib import 

//internal import
import { fetchMoviesListApi } from "./movies-list-actions";
import MovieCard from '../movie-card/Movie-card';
import Movie from '../movie/Movie'

const initialState = {
  selectedMovieId: null,
  moviesList: {}
}
class MoviesList extends Component {

  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleMovieClicked = this.handleMovieClicked.bind(this);
  }
  //this function will be called search component state changed 
  componentDidUpdate(prevProps) {
    if (this.props.search.userInput !== prevProps.search.userInput || this.props.search.year !== prevProps.search.year) {
      this.props.fetchMoviesListApi({ userInput: this.props.search.userInput, year: this.props.search.year })
    }
  }
  handleMovieClicked = (imdbID) => {
    this.setState({
      selectedMovieId: imdbID,
    })
  }

  render() {

    // if props is empty do not show component
    if (this.props.moviesList && this.props.moviesList.Response === "False") {
      return this.errorHandler();
    }
    //if no search results
    if (!this.props.moviesList.Search) {
      return null
    }
    return (
      <section style={movieListStyle.movieContainer} >
        {
          this.props.moviesList.Search.map((movie, index) => {
            return <MovieCard onMovieClicked={this.handleMovieClicked} key={index} movie={movie} />
          })
        }
        {
          <Movie id={this.state.selectedMovieId} />
        }
      </section>
    );
  }

  errorHandler() {
    switch (this.props.moviesList.Error) {
      case 'Movie not found!':
        return (<div style={movieListStyle.movieContainer}>
          <h2>OOPS Movie Not Found :(</h2>
          <p>Please try new search</p>
        </div>);
      case 'Too many results.':
        return (<div style={movieListStyle.movieContainer}>
          <h2>OOPS Too many results:(</h2>
          <p>Please refine your search</p>
        </div>);
      default:
        return (
          <div style={movieListStyle.movieContainer}>
            <h2>OOPS Somthing Went Wrong:(</h2>
            <p>Please try new search</p>
          </div>);
    }
  }
}

const movieListStyle = {

  movieContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 15%',

    movieTitelContainer: {
      display: 'flex',
      justifyContent: 'center',
      margin: '0 10%',
      width: '80%',
      backgroundColor: '#0171ce',
      height: '60px',
      movieTitle: {
        color: '#ffffff'

      }
    },
    movieDetailsContainer: {
      display: 'flex',
      width: '80%',
      marginTop: '20px',

      text: {
        marginLeft: '20px',
        fontSize: '18px',
        p: {
          marginTop: '0px'
        }
      }
    }
  }
}


const mapStateToProps = state => ({
  search: state.search,
  moviesList: state.moviesList
});
const mapDispatchToProps = dispatch => {
  return {
    fetchMoviesListApi: (search) => dispatch(fetchMoviesListApi(search)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesList);
