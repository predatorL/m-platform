import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import history from '@/util/history';
import store from '@/store/dailytask';
import {Provider} from 'mobx-react';
import Layout from './layout';
// css
import "antd-mobile/dist/antd-mobile.min.css";

class App extends Component {
  render() {
    return (
        <Provider {...store}>
            <Router history={history}>
               <Layout ></Layout>
            </Router>
        </Provider>
    );
  }
}

export default App;
