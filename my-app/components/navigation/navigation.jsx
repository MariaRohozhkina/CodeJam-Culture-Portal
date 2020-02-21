import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class extends Component {
    render() {
        return (
            <nav>
                <Link to='/'>Main Page</Link>
                <Link to='/authors'>Photographers List</Link>
                <Link to='/team'>Our Team</Link>
                <Link to='/worklog'>Worklog</Link>
                <Link to='/styleguide'>Style Guide</Link>
            </nav>
        );
    }
}