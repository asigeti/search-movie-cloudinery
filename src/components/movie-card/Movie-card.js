import React from 'react'

const MovieCard = (props) => {
    return <button onClick={()=>{
        props.onMovieClicked(props.movie.imdbID)
        }} style={cardStyle.cardConainer}>
        <img style={cardStyle.cardConainer.img} src={props.movie.Poster} alt='Poster' />
        <div style={cardStyle.cardConainer.textContainer}>
            <p>{`Title: ${props.movie.Title}`}</p>
            <p>{`Year: ${props.movie.Year}`}</p>
        </div>
    </button>
}


const cardStyle = {
    cardConainer: {
        display: 'flex',
        maxHeight: '100px',
        borderBottom: '2px solid #0171ce',
        width: '730px',
        margin: '10px 0',
        padding: '5px',
        img: {
            display: 'block',
            maxWidth: '80px',
            maxHeight: '80px',
            width: 'auto',
            height: 'auto'
        },
        textContainer: {
            marginLeft: '10px'
        }
    }
}
export default MovieCard;