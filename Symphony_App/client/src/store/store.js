import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import albumsReducer from '../reducers/albums';
import artistsReducer from '../reducers/artists';
import playlistReducer from '../reducers/playlist';
import musicsReducer from "../reducers/musics";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    albums: albumsReducer,
    artists: artistsReducer,
    playlist: playlistReducer,
      musics: musicsReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
