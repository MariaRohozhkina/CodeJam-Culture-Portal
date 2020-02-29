import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TeamPage from './components/TeamPage';
import StyleGuide from './components/GuideStyle/';
import Worklog from './components/Worklog/';
import Photographers from './components/PhotographersList';
import MainPage from './components/mainPage';
import Photographer from './components/Photographer';
import LanguageSwitch from './components/LanguageSwitch';
import Navigation from './components/navigation/';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';

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
          <header className="header">
            <div className = "wrapper-header">
		<div className="logo">
			<FontAwesomeIcon icon={faCameraRetro} className='awesomeM'/>
		</div>
              <Navigation lang = {lang}/>   
              <LanguageSwitch 
                lang = {lang}
                handlerChangeLanguage = {this.handlerChangeLanguage}
              />
            </div>                     
          </header>
          <div className="section">
            <Switch>
              <Route exact path='/' render={()=><MainPage lang={lang}/>} />
              <Route path='/photographers' render={()=><Photographers lang={lang}/>} />
              <Route path='/team' render={()=><TeamPage lang={lang}/>} />
              <Route path='/worklog' render={()=><Worklog lang={lang}/>} />
              <Route path='/styleguide' render={()=><StyleGuide lang={lang}/>} />
              <Route path="/photographer/:id" render={()=><Photographer lang={lang}/>} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
