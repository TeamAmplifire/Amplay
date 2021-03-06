import { SELECT_ARTIST } from '../Values/Types';

export default (state = null, action) => {
    switch (action.type) {
        case SELECT_ARTIST: 
            return action.payload;
        default: 
            return state;
    }
};
