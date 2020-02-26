import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-primary">
                <Link className="nav-link btn btn-primary" to='/'>Main Page</Link>
                <Link className="nav-link btn btn-primary" to='/photographers'>Photographers List</Link>
                <Link className="nav-link btn btn-primary" to='/team'>Our Team</Link>
                <Link className="nav-link btn btn-primary" to='/worklog'>Worklog</Link>
                <Link className="nav-link btn btn-primary" to='/styleguide'>Style Guide</Link>
            </nav>
        );
    }
}