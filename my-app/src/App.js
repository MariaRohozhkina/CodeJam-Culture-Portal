import React, { Component, Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GroupPage from './components/GroupPage/TeamPage';
import StyleGuide from './components/GuideStyle/';
import Worklog from './components/Worklog/';
import Photographers from './components/PhotographersList/PhotographersList';
import MainPage from './components/mainPage/main';
import Photographer from './components/Photographer/Photographer';
import LanguageSwitch from './components/LanguageSwitch/LanguageSwitch';

class App extends Component {
    state = {
        lang: 'EN',
    }

    handlerChangeLanguage = (e) => {
        this.setState({lang: e.target.value});
    }

    render() {
        const { lang } = this.state;

        return (
            <Router>
                <div className="App">
                    <LanguageSwitch 
                        lang = {lang}
                        handlerChangeLanguage = {this.handlerChangeLanguage}
                    />
                    <Switch>
                        <Route exact path='/' render={()=><MainPage lang={lang}/>} />
                        <Route path='/photographers' render={()=><Photographers lang={lang}/>} />
                        <Route path='/team' render={()=><GroupPage lang={lang}/>} />
                        <Route path='/worklog' render={()=><Worklog lang={lang}/>} />
                        <Route path='/styleguide' render={()=><StyleGuide lang={lang}/>} />
                        <Route path="/photographer/:id" render={()=><Photographer lang={lang}/>} />
                    </Switch>
                </div>
            </Router>
    );
  }
}

export default App;
