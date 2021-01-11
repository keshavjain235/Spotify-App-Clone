import React from 'react';
import '../styles/Player.css';
import Body from './Body';
import Footer from './Footer';
import Sidebar from './Sidebar';

function Player({ spotify }) {
    return (
        <div className="player">
            <div className="player__body">
                <Sidebar />
                <Body spotify={spotify} />
            </div>
            <Footer spotify={spotify} />
        </div>
    );
}

export default Player;