//React Redux import
import React, { Component } from "react";
import { connect } from "react-redux";

//lib import 

//internal import
import { fetchMoviesApi } from "./movie-actions";


class Movie extends Component {
  //this function will be called search component state changed 
  componentDidUpdate(prevProps) {
    if (this.props.movieTitle !== prevProps.movieTitle) {
      this.props.fetchMovieApi(this.props.movieTitle)
    }
  }

  render() {
    // if props is empty do not show component
    if (!this.props.movieTitle || Object.entries(this.props.movie).length === 0) {
      return null;
    }
    //when movie not found show this section 
    else if(this.props.movie.payload.Error){
    return (
      <div style = { movieStyle.movieContainer }>
        <h2>OOPS Movie Not Found :(</h2>
        <p>Please try new search</p>
      </div>
    )
  }
  return(
      <section style = { movieStyle.movieContainer } >
      <div style={movieStyle.movieContainer.movieTitelContainer}>
        <h3 style={movieStyle.movieContainer.movieTitelContainer.movieTitle}>
          Movie Title: {this.props.movie.payload.Title}
        </h3>

      </div>
      <div style={movieStyle.movieContainer.movieDetailsContainer}>
        <div>
          <img src={this.props.movie.payload.Poster} alt='poster' />
        </div>
        <div style={movieStyle.movieContainer.movieDetailsContainer.text}>
          <p style={movieStyle.movieContainer.movieDetailsContainer.text.p}>Release Year: {this.props.movie.payload.Released}</p>
          <p>Length: {this.props.movie.payload.Runtime}</p>
          <p>Rated: {this.props.movie.payload.Rated}</p>
          <p>Rated: {this.props.movie.payload.Rated}</p>
          <p>Genre: {this.props.movie.payload.Genre}</p>
          <p>Plot: {this.props.movie.payload.Plot}</p>
          <p>Director: {this.props.movie.payload.Director}</p>
          <p>Writers: {this.props.movie.payload.Writer}</p>
          <p>Actors: {this.props.movie.payload.Actors}</p>
          <p>Language: {this.props.movie.payload.Language}</p>
          <p >Ratings: {this.props.movie.payload.imdbRating}</p>
        </div>
      </div>
      <div>
      </div>
      </section>
    );
  }
}

const movieStyle = {

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
  movie: state.movie,
  movieTitle: state.search.payload
});
const mapDispatchToProps = dispatch => {
  return {
    fetchMovieApi: (userInput) => dispatch(fetchMoviesApi(userInput))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movie);
