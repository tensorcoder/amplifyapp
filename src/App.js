import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="nav-wrap">
        <div className="nav">
          <ul className="wsite-menu-default">
            <li id="active" class="wsite-menu-item-wrap">
              <a href="#" className="wsite-menu-item-wrap wsite-nav-1" style="position:relative;">
                Menu Item 1
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <p>
            <a className="App-link" href="https://beta.companieshouse.gov.uk/company/SC669138">Serpentibus Technologies Limited
            </a>
          </p>

        </header>
      </div>
    );
  }
}

export default App;
