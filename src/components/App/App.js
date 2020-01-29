import React, { Component } from 'react';
import local from '../../data/local';
import NewsContainer from "../NewsContainer/NewsContainer.js";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local
    }
  }

  render () {
    return (
      <main className="app">
        <h1>What's New?</h1>
        <section>
          <NewsContainer articles={this.state.local} />
        </section>
      </main>
    );
  }

}

export default App;
