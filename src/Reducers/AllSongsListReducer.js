import { DATA_FETCH_ALL_SONGS } from '../Values/Types';

const InitialState = [{ 
    songName: null,
    songID: null,
    albumArt: null,
    albumName: null,
    fullpath: null,
    songLength: null,
    artistName: null,
 }];

export default (state = InitialState, action) => {
    switch (action.type) {
        case DATA_FETCH_ALL_SONGS: 
            return action.payload;
        default: 
            return state;
    }
};
