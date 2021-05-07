import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reportWebVitals from './reportWebVitals';
import builder from './store/reducers/builder';
import orders from './store/reducers/orders';



const rootReducer = combineReducers({ builder, orders });
const store = createStore(rootReducer, applyMiddleware(thunk));


ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




