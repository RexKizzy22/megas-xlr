import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { searchMegas, requestMegas } from "./reducer";

import App from "./components/App/App";
import "./index.css";

const logger = createLogger();
const rootReducer = combineReducers({searchMegas, requestMegas})
const store = createStore(
  rootReducer, 
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
