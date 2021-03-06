import { 
    fetchAllSongs,
    fetchRecentlyAddedSongs,
    editSongInfo,
    deleteSong,
    getArtworkForSong,
    getSong
} from '../../react_native_fetch_music_filesNativeModule';
import {
    SELECT_SONG,
    DATA_FETCH_ALL_SONGS,
    DATA_FETCH_RECENTLY_ADDED,
    GET_SONG_ARTWORK
} from '../Values/Types';

export const selectSong = (songID) => {
    return (dispatch) => {
        getSong(songID, (errorCallBack) => {
            //console.log(errorCallBack);
        },
        (successCallback) => {
            let JsonArray = [];
            JsonArray = JSON.parse(successCallback);
            dispatch({ type: SELECT_SONG, payload: JsonArray });
        });
    };
};

export const fetchSongs = () => {
    return (dispatch) => {
        fetchAllSongs((errorCallBack) => {
            //console.log(errorCallBack);
        },
        (successCallback) => {
            let JsonArray = [];
            JsonArray = JSON.parse(successCallback);
            dispatch({ type: DATA_FETCH_ALL_SONGS, payload: JsonArray });
        });
    };
};

export const fetchRecentlyAdded = () => {
    return (dispatch) => {
        fetchRecentlyAddedSongs((errorCallBack) => {
            //console.log(errorCallBack);
        },
        (successCallback) => {
            let JsonArray = [];
            JsonArray = JSON.parse(successCallback);
            dispatch({ type: DATA_FETCH_RECENTLY_ADDED, payload: JsonArray });
        });
    };
};

export const editSongInfoWithID = (newTitle, newAlbum, newArtist, songId, fullPath) => {
    return () => {
        editSongInfo(newTitle, newAlbum, newArtist, songId, fullPath, (successCallback) => {
            //console.log(successCallback);
        });
    };
};

export const deleteSongWithID = (songId, fullPath) => {
    return () => {
        deleteSong(songId, fullPath, 
        (successCallback) => {
            //console.log(successCallback);
        });
    };
};

export const getArtworkForSongWithID = (songID) => {
    return (dispatch) => {
        getArtworkForSong(songID, (errorCallBack) => {
            //console.log(errorCallBack);
        },
        (successCallback) => {
            // //console.log(successCallback);
            dispatch({ type: GET_SONG_ARTWORK, payload: successCallback });
        });
    };
};
