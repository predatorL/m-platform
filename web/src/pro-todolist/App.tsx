import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import history from '@/util/history';
import store from '@/store/todolist';
import {Provider} from 'mobx-react';
import Layout from './layout';
// css
import "antd/dist/antd.css";

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
