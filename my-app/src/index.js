import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <App>
            <Switch>
                <Route exact path='/' render={()=><MainPage />} />
                <Route path='/authors' render={()=><AuthorsList />} />
                <Route path='/team' render={()=><TeamPage />} />
                <Route path='/worklog' render={()=><Worklog />} />
                <Route path='/styleguide' render={()=><StyleGuide />} />
            </Switch>
        </App>
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
