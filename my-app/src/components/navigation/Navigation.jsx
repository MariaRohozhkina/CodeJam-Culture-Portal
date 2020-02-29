import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { TRANSLATE } from '../../constants/translate';

import './Navigation.css';

export default class Navigation extends Component {
    render() {
        const { lang } = this.props;

        return (
            <nav className="navbar navbar-dark bg-primary">
                <Link className="nav-link btn btn-primary" to='/'>{TRANSLATE[lang].mainPage}</Link>
                <Link className="nav-link btn btn-primary" to='/photographers'>{TRANSLATE[lang].photographersList}</Link>
                <Link className="nav-link btn btn-primary" to='/team'>{TRANSLATE[lang].ourTeam}</Link>
                <Link className="nav-link btn btn-primary" to='/worklog'>{TRANSLATE[lang].worklog}</Link>
                <Link className="nav-link btn btn-primary" to='/styleguide'>{TRANSLATE[lang].styleGuide}</Link>
            </nav>
        );
    }
}