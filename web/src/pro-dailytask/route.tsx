import React from 'react';
import { Route } from 'react-router-dom';
import home from './page/home';
import dailytask from './page/dailytask';
import record from './page/record';

export default class View extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main id="main">
                <Route path="/" exact component={home} />
                <Route path="/dailytask" component={dailytask} />
                <Route path="/record" component={record} />
            </main>
        );
    }
}
