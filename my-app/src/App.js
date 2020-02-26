import React, { Component} from 'react';
import './App.css';
import PhotographersList from './components/PhotographersList/PhotographersList';
import Photographer from './components/Photographer/Photographer';
import LanguageSwitch from './components/LanguageSwitch/LanguageSwitch';
import { BrowserRouter as Router,
  Route,
} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.handlerChangeLanguage = this.handlerChangeLanguage.bind(this);
    this.state = {
      lang: 'EN',
    }
  }

  handlerChangeLanguage(e) {
    this.setState({lang: e.target.value});
  }

  render() {
    return (
      <Router>
        <div className="App">
          <LanguageSwitch 
            lang = {this.state.lang}
            handlerChangeLanguage = {this.handlerChangeLanguage}
          />
          <Route exact path="/">
            <PhotographersList
              lang={this.state.lang}
            />
          </Route>
          <Route path="/photographer/:id">
            <Photographer 
              lang={this.state.lang}
            />
          </Route>
        </div>
      </Router>      
    );
  }
}

export default App;
