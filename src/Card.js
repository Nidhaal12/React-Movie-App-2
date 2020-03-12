
import React from 'react'
import StarRatingComponent from 'react-star-rating-component'

const Card = (props) => {

    return (
        
        <div className="movie-card">

            <h3>{props.movie.title}</h3>
            <img src={props.movie.image} height="300px" />
            <h3>{props.movie.year}</h3>
            
            <StarRatingComponent 
                name="rate1" 
                starCount={5}
                value={props.movie.rating}
            />

         </div>
    )
}

export default Card