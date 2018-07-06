import { 
    fetchAllSongs,
    fetchRecentlyAddedSongs
} from '../../react_native_fetch_music_filesNativeModule';

export const selectSong = (songID) => {
    return (
        {
            type: 'select-song',
            payload: songID
        }
    );
};

export const fetchSongs = () => {
    return (dispatch) => {
        fetchAllSongs((errorCallBack) => {
            console.log(errorCallBack);
        },
        (successCallback) => {
            let JsonArray = [];
            JsonArray = JSON.parse(successCallback);
            dispatch({ type: 'data-fetch-all-songs', payload: JsonArray });
        });
    };
};

export const fetchRecentlyAdded = () => {
    return (dispatch) => {
        fetchRecentlyAddedSongs((errorCallBack) => {
            console.log(errorCallBack);
        },
        (successCallback) => {
            let JsonArray = [];
            JsonArray = JSON.parse(successCallback);
            dispatch({ type: 'data-fetch-recently-added', payload: JsonArray });
        });
    };
};
