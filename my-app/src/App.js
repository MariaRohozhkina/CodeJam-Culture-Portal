import React, { Component} from 'react';
import './App.css';
import MainPage from './components/mainPage/main';
// import PhotographersList from './components/PhotographersList/PhotographersList';
import LanguageSwitch from './components/LanguageSwitch/LanguageSwitch';

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
      <div className="App">
        <LanguageSwitch 
          lang = {this.state.lang}
          handlerChangeLanguage = {this.handlerChangeLanguage}
        />
        <MainPage />        
      </div>
    );
  }
}

export default App;
