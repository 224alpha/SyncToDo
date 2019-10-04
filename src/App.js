import React from 'react';
import {BrowserRouter,Route} from "react-router-dom";
import { Provider } from 'react-redux';
import './App.css';
import Home from './home';
import Privacy from "./components/privacy";
import store from './store/store';
import Loader from "./components/loader";


export default function App() {
  return (
    <Provider store={store}>
      <Loader />
      <BrowserRouter>
        <React.Fragment>
          <Route exact path="/" component={Home} />
          <Route exact path="/privacypolicy" component={Privacy} />
        </React.Fragment>
      </BrowserRouter>
    </Provider>
  );
}

