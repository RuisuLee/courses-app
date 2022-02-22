import { combineReducers, createStore, compose } from 'redux';
import { coursesReducer } from './courses/coursesReducer';
import { userReducer } from './user/userReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  courses: coursesReducer,
});

export function configureStore() {
  const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(rootReducer, composeEnhancers());
}

export type StoreType = ReturnType<typeof rootReducer>;
