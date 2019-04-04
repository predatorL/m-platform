import React from 'react';
import Routes from './route';
import { Link } from 'react-router-dom';

export default class View extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div id="root">
                <header id="header">
                    <Link to="/">home</Link>
                    <Link to="/dailytask">task</Link>
                    <Link to="/record">record</Link>
                </header>
                <Routes />
            </div>
        );
    }
}
