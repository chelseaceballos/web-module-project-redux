import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import favoriteReducer from './favoritesReducers';

export const rootReducer = combineReducers({
    movie: movieReducer,
    favorite: favoriteReducer
});