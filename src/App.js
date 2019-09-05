import React from 'react';
import SearchBar from './SearchBar/SearchBar'
import FilterableList from './FilterableList/FilterableList.js'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <FilterableList files={this.props.files} x={this.props.x}/>
        <h1>{this.props.x + 10}</h1>
      </div>
    );
  }
}

export default App;
