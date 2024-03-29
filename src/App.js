import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Zence from './pages/Zence'
import SkinTech from './pages/SkinTech'
import IGo from './pages/IGo'
import BillGenius from './pages/BillGenius'
import Join from './pages/Join'
import IDecide from './pages/IDecide'
import Ellev8 from './pages/Ellev8'
import { lgphone } from './breakpoints/MediaBreakpoint'


class App extends Component {
  constructor(props) {
    super(props);

    this.closeMobileMenu = this.closeMobileMenu.bind(this)

    this.state = {
      click: false,
      isMobile: window.innerWidth <= lgphone + 1,
    }
  }


  handleClick = () => this.setState(prev => ({ click: !prev.click }));

  closeMobileMenu = () => {
    console.log('closeMobileMenu')
    this.setState({ click: false })
  };

  handleResponsiveness = () => {
    this.setState({ isMobile: window.innerWidth <= lgphone });
  }

  render() {
    window.addEventListener('resize', this.handleResponsiveness);
    return (
      <>
        <Router>
          <Navbar
            handleClick={this.handleClick}
            click={this.state.click}
            showButton={!this.state.isMobile}
            showRegularNavbar={!this.state.isMobile}
            closeMobileMenu={this.closeMobileMenu}
          />
          <Switch>
            <Route path='/' exact>
              <Home isMobile={this.state.isMobile} click={this.state.click} closeMobileMenu={this.closeMobileMenu} />
            </Route>
            <Route path='/igo' exact>
              <IGo isMobile={this.state.isMobile} click={this.state.click} />
            </Route>
            <Route path='/zence' exact>
              <Zence isMobile={this.state.isMobile} click={this.state.click} />
            </Route>
            <Route path='/skintech' exact>
              <SkinTech isMobile={this.state.isMobile} click={this.state.click} />
            </Route>
            <Route path='/billgenius' exact>
              <BillGenius isMobile={this.state.isMobile} click={this.state.click} />
            </Route>
            <Route path='/ellev8' exact>
              <Ellev8 isMobile={this.state.isMobile} click={this.state.click} />
            </Route>
            <Route path='/join' exact>
              <Join isMobile={this.state.isMobile} click={this.state.click} />
            </Route>
            <Route path='/idecide' exact>
              <IDecide isMobile={this.state.isMobile} click={this.state.click} />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;

