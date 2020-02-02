import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from 'react-modal';


import { fetchMovieApi } from './movie-actions'
import MovieDetails from '../movie-details/movie-details';
const initialState = {
  modalIsOpen: false,
  id: null,
  movie: {}
}

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = initialState
    Modal.setAppElement('body');
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.props.fetchMovieApi(this.props.id)
      this.openModal();
    }
  }
  componentDidMount() {
    this.openModal();
  }
  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState(initialState);
  }

  render() {
    if (!this.props.id) {
      return null;
    }
    const MovieDetailsList = Object.keys(this.props.movie).map((key, i) => {
      switch (key) {
        case 'Rated':
        case 'Year':
        case 'Genre':
        case 'Runtime':
        case 'Director':
        case 'Writer':
        case 'Actors':
        case 'Plot':
        case 'imdbRating':
        case 'Language':
          return <MovieDetails key={i.toString()} title={key} value={this.props.movie[key]} />
        default: return null
      }
    })
    return <section>
      <Modal
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}
        style={movieStyle.modalCustomeStyle}
      >
        <div style={movieStyle.movieContainer.movieTitelContainer}>
          <h3 style={movieStyle.movieContainer.movieTitelContainer.movieTitle}>
            Movie Title: {this.props.movie.Title}
          </h3>
        </div>
        <div style={movieStyle.movieContainer.movieDetailsContainer}>
          <div>
            <img src={this.props.movie.Poster} alt='poster' />
          </div>
          <div style={movieStyle.movieContainer.movieDetailsContainer.text}>
            <ul>
              {MovieDetailsList}
            </ul>
          </div>
        </div>
        <div style={movieStyle.buttonContainer}>
          <input type='button' onClick={this.closeModal} style={movieStyle.buttonContainer.blueButon} value='Close'></input>
        </div>
      </Modal>
    </section>
  }
}

const movieStyle = {
  movieContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '30px 15%',

    movieTitelContainer: {
      display: 'flex',
      justifyContent: 'center',
      margin: '20px 10%',
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
      margin: '20px 10%',

      text: {
        marginLeft: '20px',
        fontSize: '18px',
        p: {
          marginTop: '0px'
        }
      }
    }
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    blueButon: {
      width: '80px',
      height: '30px',
      borderRadius: '50px',
      background: '#0171ce',
      color: '#ffff',
      fontSize: '20px',
      marginTop: '20px'
    }
  },
  modalCustomeStyle:{
    content: {
      top: '60%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  }
}
const mapStateToProps = state => ({
  movie: state.movie
});
const mapDispatchToProps = dispatch => {
  return {
    fetchMovieApi: (id) => dispatch(fetchMovieApi(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movie);