import React, { Component } from 'react';
import './FilmItem.css';

class FilmItem extends Component {
    render() {
        const { title, year, poster } = this.props;
        return (
            <article className="film-item">
                <img className="film-item__poster" src={poster} alt={title} />
                <div className="film-item__info">
                    <h3 className="film-item__title">{title}&nbsp;({year})</h3>
                    <button type="button" className="film-item__add-button">Добавить в список</button>
                </div>
            </article>
        );
    }
}
 
export default FilmItem;
