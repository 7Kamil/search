import React, { Component } from 'react';
import FilmItem from '../FilmItem/FilmItem';
import './Films.css';

class Films extends Component {
    state = { 
        films: [
            {
                imdbID: 'tt3896198',
                title: "Guardians of the Galaxy Vol. 2",
                year: 2017,
                poster: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"

            },
            {
                imdbID: 'tt0068646',
                title: "The Godfather",
                year: 1972,
                poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"

            }
        ]
    }
    render() { 
        return ( 
            <ul className="films">
                {this.state.films.map((film) => (
                    <li className="films__item" key={film.imdbID}>
                        <FilmItem {...film} />
                    </li>
                ))}
            </ul>
        );
    }
}
 
export default Films;
