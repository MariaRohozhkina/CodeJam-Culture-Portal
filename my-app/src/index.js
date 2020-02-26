import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

/*import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GroupPage from './components/GroupPage/TeamPage';
import StyleGuide from './components/GuideStyle/';
import Worklog from './components/Worklog/';
import Photographers from './components/PhotographersList/PhotographersList';
import MainPage from './components/mainPage/main';


ReactDOM.render(
    <BrowserRouter>
        <App>
            <Switch>
                <Route exact path='/' render={()=><MainPage />} />
                <Route path='/photographers' render={()=><Photographers />} />
                <Route path='/team' render={()=><GroupPage />} />
                <Route path='/worklog' render={()=><Worklog />} />
                <Route path='/styleguide' render={()=><StyleGuide />} />
            </Switch>
        </App>
    </BrowserRouter>, document.getElementById('root'));*/
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
