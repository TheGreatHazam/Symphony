import {ADD_MUSICS, SET_MUSICS} from "../utils/constants";

const musicsReducer = (state = {}, action) => {
    const { musics } = action;
    switch (action.type) {
        case SET_MUSICS:
            return musics;
        case ADD_MUSICS:
            return {
                ...state,
                next: musics.next,
                items: [...state.items, ...musics.items]
            };
        default:
            return state;
    }
};

export default musicsReducer;
