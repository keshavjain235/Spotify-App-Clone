export const initialState = {
    user: null,
    playlists: [],
    spotify: null,
    india_top_50: null,
    top_artists: null,
    playing: false,
    item: null,
    device_id: null
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };

        case 'SET_PLAYING':
            return {
                ...state,
                playing: action.playing,
            };

        case 'SET_ITEM':
            return {
                ...state,
                item: action.item,
            };

        case 'SET_INDIA_TOP_50':
            return {
                ...state,
                india_top_50: action.india_top_50,
            };

        case 'SET_TOP_ARTISTS':
            return {
                ...state,
                top_artists: action.top_artists,
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };

        case 'SET_SPOTIFY':
            return {
                ...state,
                spotify: action.spotify,
            };

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
    
        case 'SET_DEVICE':
            return {
                ...state,
                device_id: action.device_id,
            };
    
        default:
            return state;
    }
};

export default reducer;