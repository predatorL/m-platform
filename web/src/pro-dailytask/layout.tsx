import React from 'react';
import Routes from './route';

export default class View extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div id="root">
                <header id="header"></header>
                <Routes />
            </div>
        );
    }
}
