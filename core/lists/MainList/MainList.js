import React, { Component } from 'react';
import './MainList.css';
import Header from '../../parts/Title/Title';
import SearchBox from '../../parts/FindBox/FindBox';
import Movies from '../../parts/Films/Films';
import Favourites from '../../parts/Likes/Likes';

class MainPage extends Component {
    render() { 
        return (
            <div className="main-list">
                <Header />
                <main className="main-list__content">
                    <section className="main-list__main-section">
                        <div className="main-list__find-box">
                            <SearchBox />
                        </div>
                        <div className="main-page__films">
                            <Movies />
                        </div>
                    </section>
                    <aside className="main-page__likes">
                        <Favorites />
                    </aside>
                </main>
            </div>
        );
    }
}
 
export default MainList;
