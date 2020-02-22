import React, { Component} from 'react';
import './App.css';
import PhotographersList from './components/PhotographersList/PhotographersList';
import LanguageSwitch from './components/LanguageSwitch/LanguageSwitch';


class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      lang: 'EN',
    }
  }

  render() {
    return (
      <div className="App">
        <LanguageSwitch />
        <PhotographersList 
          // lang = {this.state.lang}
        />   
      </div>
    );
  }
}

export default App;
