import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from '../reducers/rootReducer.reducer';
import * as sagas from '../sagas/rootSaga.saga';

const sagaMiddleware = createSagaMiddleware();

const sagaConnect = () => Object.values(sagas).map(saga => sagaMiddleware.run(saga));

const composeEnhancers = (typeof window === 'object')
&& window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const middleware = composeEnhancers(
  applyMiddleware(
    sagaMiddleware
  )
);

const createStoreWithMiddleware = middleware(createStore);

const store = createStoreWithMiddleware(reducers);

sagaConnect();

export default store;
