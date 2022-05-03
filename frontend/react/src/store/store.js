import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistReducer, persistStore} from 'redux-persist';
import storage from "redux-persist/lib/storage";

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

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
  blacklist: ['user.loading', 'user.error'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
  persistedReducer,
  middleware
);

const persistor = persistStore(store)

sagaConnect();

export { store, persistor };
