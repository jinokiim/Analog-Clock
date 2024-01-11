import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import tooltipReducer from './slices/tooltipSlice';

// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: []
};

const rootReducer = combineReducers({
  tooltip: tooltipReducer
});

export type RootReducerType = ReturnType<typeof rootReducer>;

export { rootPersistConfig, rootReducer };
