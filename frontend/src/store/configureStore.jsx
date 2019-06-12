import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducersApp from '../reducers/index.jsx';

export default function configureStore(initialState) {
    return createStore(
        reducersApp,
        initialState,
        composeWithDevTools(applyMiddleware(thunk))
    );
}