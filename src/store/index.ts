import { combineReducers, createStore, compose } from 'redux';
import { coursesReducer } from './courses/coursesReducer';
import { userReducer } from './user/userReducer';

export function createActionFactory<T extends string>(actionType: T) {
  return function <PayloadType>() {
    const createAction = function (payload: PayloadType) {
      return {
        type: actionType,
        payload,
      };
    };
    createAction.type = actionType;
    return createAction;
  };
}

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
