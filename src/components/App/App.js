import React, { Component } from 'react';
import local from '../../data/local';
import NewsContainer from "../NewsContainer/NewsContainer.js";
import Menu from "../Menu/Menu.js";
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
        <header>
          <h1>What's <span>New?</span></h1>
          <form>
            <label>Search</label>
          </form>
          <button>Search</button>
        </header>
        <aside>
          <Menu />
        </aside>
        <section>
          <NewsContainer articles={this.state.local} />
        </section>
      </main>
    );
  }

}

export default App;
