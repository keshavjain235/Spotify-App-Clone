import React from 'react';
import { useDataLayerValue } from '../config/DataLayer';
import '../styles/Body.css';
import Header from './Header';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';

function Body({ spotify }) {
    const [{ playlists, india_top_50, device_id }, dispatch] = useDataLayerValue();

    const playPlaylist = (id) => {
        spotify.play({
            device_id: device_id,
            context_uri: `spotify:playlist:37i9dQZEVXcG9JbUhJUxcn`
        })
        .then((res) => {
            spotify.getMyCurrentPlayingTrack().then(response => {
                dispatch({
                    type: "SET_ITEM",
                    item: response.item
                });
                dispatch({
                    type: "SET_PLAYING",
                    playing: true
                });
            });
        });
    };
    
    const playSong = (id) => {
        spotify.play({
            device_id: device_id,
            uris: [`spotify:track:${id}`]
        })
        .then((res) => {
            spotify.getMyCurrentPlayingTrack().then(response => {
                dispatch({
                    type: "SET_ITEM",
                    item: response.item
                });
                dispatch({
                    type: "SET_PLAYING",
                    playing: true
                });
            });
        });
    };

    return (
        <div className="body">
            <Header spotify={spotify} />

            <div className="body__info">
                <img src={india_top_50?.images[0].url}
                    alt="" />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>India Top 50</h2>
                    <p>{india_top_50?.description}</p>
                </div>
            </div>

            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon
                        className="body__shuffle"
                        onClick={playPlaylist}
                    />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>

                {india_top_50?.tracks?.items?.map((item) => (
                    <SongRow key={item.track.id} playSong={playSong} track={item.track} />
                ))}
            </div>
        </div>
    );
}

export default Body;