import React, { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import Login from './components/Login';
import Player from './components/Player';
import { useDataLayerValue } from './config/DataLayer';
import { getTokenFromUrl } from './config/spotify';

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  // Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash ="";
    const _token = hash.access_token;

    if (_token) {
      spotify.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token
      });

      spotify.getPlaylist("37i9dQZEVXbLZ52XmnySJg").then((response) =>
        dispatch({
          type: "SET_INDIA_TOP_50",
          india_top_50: response
        })
      );

      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response
        })
      );

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify
      });

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists
        });
      });

      spotify.getMyDevices().then(({devices}) => {
        dispatch({
          type:"SET_DEVICE",
          device_id:devices[0]?.id
        });
      });
    }
  }, [token, dispatch]);
  
  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify} />
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
