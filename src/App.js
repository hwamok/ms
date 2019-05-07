import React, { Component } from 'react';
import './App.css';

import Header from './containers/header';
import SearchBar from './containers/search_bar';
import AirDetail from './containers/air_detail';
import AirList from './containers/air_list';



class App extends Component {
  render() {
    return (
      <div className="App container mt-3">
        <Header />        
        <SearchBar />
        <AirDetail />
        <AirList />
      </div>
    );
  }
}

export default App;
