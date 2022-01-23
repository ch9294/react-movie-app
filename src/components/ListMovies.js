import React from 'react';
import ItemMovie from "./ItemMovie";
import styles from './ListMovies.module.css'

const ListMovies = ({list}) => {
    return <ul>
        {list.map((item) => {
            return (
                <li key={item.id}>
                    <ItemMovie id={item.id} title={item.title_long} rating={item.rating} runtime={item.runtime}
                               medium_cover_image={item.medium_cover_image}/>
                </li>
            )
        })}
    </ul>
};

export default ListMovies;