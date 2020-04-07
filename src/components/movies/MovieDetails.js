import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function MovieDetails() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    async function getMovieById(id) {
        const res = await axios('https://ancient-caverns-16784.herokuapp.com/movies/' + id);
        setMovie(res.data);

        console.log(movie);
    }

    useEffect(() => {
        getMovieById(movieId);
    }, [movieId]);

    if (movie) {
        console.log(movie);
        return (
            <>
                <h1 className="text-white bg-dark">
                    <span> {movie.Title} ({movie.Year}) </span>
                    <span style={{ float: "right" }}> <span style={{ color: "yellow" }}>&#9733;</span> {movie.imdbRating} </span>
                </h1>
                <p className="text-white bg-dark">
                    {movie.Runtime} | {movie.Genre} | {movie.Released}

                </p>
                <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                    <img src={movie.Poster}></img>
                </p>
                <p>
                    {movie.Plot}
                </p>
                <p>
                    <span style={{ fontWeight: 'bold' }}>Director:</span> {movie.Director} <br />
                    <span style={{ fontWeight: 'bold' }}>Writers:</span> {movie.Writer} <br />
                    <span style={{ fontWeight: 'bold' }}>Actors:</span> {movie.Actors}
                </p>

            </>
        );
    } else {
        return <h1>Loading ...</h1>;
    }
}

export default MovieDetails;


