import React from 'react';
import styles from './ItemMovie.module.css'
import Proptypes from 'prop-types';
import {Link} from "react-router-dom";

const ItemMovie = ({id, title, rating, runtime, medium_cover_image}) => {
    return (
        <div className={styles['item-box']}>
            <Link to={`/movie/${id}`}><h2 className={styles.title}>{title}</h2></Link>
            <img className={styles['poster-image']} src={medium_cover_image} alt={title}/>
            <ul className={styles['info-list']}>
                <li>
                    <span>상영시간</span>
                    <span>{runtime}</span>
                </li>
                <li>
                    <span>평점</span>
                    <span>{rating}</span>
                </li>
            </ul>
        </div>
    )
}

ItemMovie.propTypes = {
    id:Proptypes.number.isRequired,
    medium_cover_image: Proptypes.string.isRequired,
    title: Proptypes.string.isRequired,
    rating: Proptypes.number.isRequired,
    runtime: Proptypes.number.isRequired
}

export default ItemMovie;