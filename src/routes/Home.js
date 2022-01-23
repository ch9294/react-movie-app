import React, {useEffect,useState} from 'react';
import ListMovies from "../components/ListMovies";

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const response =  fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year");
        const json = (await response).json();
        json.then(result => {
            setMovies(result.data.movies);
            setLoading(false);
        })

    }
    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div>
            {loading && <h1>Loading...</h1>}
            {!loading && <ListMovies list={movies}/>}
        </div>
    );
};

export default Home;