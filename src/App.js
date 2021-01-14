import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './components/Navbar/Nav'
import Home from './pages/Home'
import Zence from './pages/Zence'
import IGo from './pages/IGo'
import BillGenius from './pages/BillGenius'
import JoinMe from './pages/JoinMe'
import { lgphone } from './breakpoints/MediaBreakpoint'


class App extends Component {
  constructor(props) {
    super(props);

    this.closeMobileMenu = this.closeMobileMenu.bind(this)

    this.state = {
      click: false,
      isMobile: window.innerWidth <= lgphone,
    }
  }


  handleClick = () => this.setState(prev => ({ click: !prev.click }));

  closeMobileMenu = () => this.setState({ click: false });

  handleResponsiveness = () => {
    this.setState({ isMobile: window.innerWidth <= lgphone });
  }



  render() {
    window.addEventListener('resize', this.handleResponsiveness);
    return (
      <div className="App">
        <Router>
          <Nav
            handleClick={this.handleClick}
            click={this.state.click}
            showButton={!this.state.isMobile}
            showRegularNavbar={!this.state.isMobile}
            closeMobileMenu={this.closeMobileMenu}
          />
          <Switch>
            <Route path='/' exact>
              <Home isMobile={this.state.isMobile} click={this.state.click} />
            </Route>
            <Route path='/igo' exact>
              <IGo isMobile={this.state.isMobile} click={this.state.click} />
            </Route>
            <Route path='/zence' exact>
              <Zence isMobile={this.state.isMobile} click={this.state.click} />
            </Route>
            <Route path='/billgenius' exact>
              <BillGenius isMobile={this.state.isMobile} click={this.state.click} />
            </Route>
            <Route path='/joinme' exact>
              <JoinMe isMobile={this.state.isMobile} click={this.state.click} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

