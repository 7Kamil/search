import React, { Component } from 'react';
import './Likes.css';


class Likes extends Component {
    state = {
        title: 'Новый список',
        films: [
            { imdbID: 'tt0068646', title: 'The Godfather', year: 1972 }
        ]
    }
    render() { 
        return (
            <div className="likes">
                <input value="Новый список" className="likes__name" />
                <ul className="likes__list">
                    {this.state.likes.map((item) => {
                        return <li key={item.id}>{item.title} ({item.year})</li>;
                    })}
                </ul>
                <button type="button" className="likes__save">Сохранить список</button>
            </div>
        );
    }
}
 
export default Favorites;
