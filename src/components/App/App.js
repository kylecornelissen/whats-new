import React, { Component } from 'react';
import local from '../../data/local';
import health from '../../data/health';
import entertainment from '../../data/entertainment';
import science from '../../data/science';
import technology from '../../data/technology';
import NewsContainer from "../NewsContainer/NewsContainer.js";
import Menu from "../Menu/Menu.js";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      categories: {local: local, health: health, entertainment: entertainment, science: science, technology: technology},
      currentCategory: health
    }
  }

  changeCategory = category => {
    const newCategory = this.state.categories[category]
    this.setState({currentCategory: newCategory});
  }

  render () {
    return (
      <main className="app">
        <header>
          <h1>What's <span>New?</span></h1>
        </header>
        <Menu changeCategory={this.changeCategory}/>
        <NewsContainer articles={this.state.currentCategory}/>
      </main>
    );
  }

}

export default App;
