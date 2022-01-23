import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

const Detail = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);
    const getMovie = async () => {
        const response = fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
        const json = (await response).json();
        json.then(result => {
            setMovie(result.data.movie);
            setLoading(false);
        });
    }

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div>
            {
                !loading &&
            <>
                <h1>Detail</h1>
                <h2>{movie.title_long}</h2>
                <img src={movie.medium_cover_image} alt={movie.title}/>
                <p>
                    {movie.description_intro}
                </p>
            </>
            }

        </div>
    );
};

export default Detail;