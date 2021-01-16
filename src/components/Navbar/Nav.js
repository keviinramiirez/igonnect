
import React from 'react'
import Button from '../Button/Button'
import Navlink from './Navlink'
import './Navbar.css'
import './Nav.scss'
import { MenuItems } from './MenuItems'
import { isPathJoin, isPathBillGenius } from '../Util'


function Nav({ click, showRegularNavbar, handleClick, showButton, closeMobileMenu }) {

  return (
    <div className="navbar" style={(click) ? { height: (window.outerHeight + 'px'), overflow: 'hidden' } : {}}>
      <div className="navbar-container">
        {click ?
          <div className='menu-icon menu-icon-times' onClick={() => handleClick()}>
            <i className={'fas fa-times'} style={{ color: 'white' }} />
          </div>
          :
          <div className='menu-icon menu-icon-bars' onClick={() => handleClick()} style={{ color: ((isPathBillGenius() || isPathJoin()) && !click) ? 'black' : 'white' }}>
            <i className={'fas fa-bars'} />
          </div>
        }
        {(click || showRegularNavbar) ?
          <ul className={click ? 'nav-menu' : 'nav-menu'}>
            {MenuItems.map(({ title, path }) => {
              return (
                (title.includes('Join') && showButton) ? null :
                  <li key={title} className='nav-item' style={{ marginLeft: (!click ? '2.5em' : 0) }}>
                    <div className='nav-content'>
                      <div className='nav-link-component'
                        onClick={() => closeMobileMenu()}>
                        <Navlink
                          path={path}
                          click={click}
                        >
                          {title}
                        </Navlink>
                      </div>
                    </div>
                  </li>
              )
            })}
            <li
              key={'join'}
              className='nav-item'
              onClick={() => closeMobileMenu()}
              style={{ marginLeft: '2.5em' }}
            >
              {showButton &&
                <Navlink
                  path={'/join'}
                  click={click}>
                  <Button
                    buttonSize='size__navbar'
                    buttonStyle='style__transparent'
                    buttonBorder='border__secondary'
                    buttonColor='color__white'
                    buttonHover='hover__secondary'
                    buttonEffect='effect__move_y'
                  >
                    Join Me
                  </Button>
                </Navlink>
              }
            </li>
          </ul>
          : null
        }
      </div>
    </div>
  )
}

export default Nav

















































// import React from 'react'
// import Button from '../Button/Button'
// import Navlink from './Navlink'
// import './Navbar.css'
// import './Nav.scss'
// import { MenuItems } from './MenuItems'
// import { isPathBillGenius } from '../Util'
// import DrawerToggle from '../Drawer/DrawerToggle'


// class Nav extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log('Navbar constructor')

//     this.closeMobileMenu = this.closeMobileMenu.bind(this)
//     this.showButton = this.showButton.bind(this)
//     this.drawerToggleHandler = this.drawerToggleHandler.bind(this)
//     // this.handleScroll = this.handleScroll.bind(this)

//     this.state = {
//       click: false,
//       button: true,
//       navOpacity: 1
//     }
//   }

//   handleClick() {
//     this.setState({
//       click: !this.state.click,
//     })
//   };
//   closeMobileMenu() {
//     this.setState({ click: false })
//   }

//   showButton() {
//     // this.setState({ button: window.innerWidth > 425 })
//     this.setState({ button: window.innerWidth > 1050 })
//   }

//   // handleScroll() {
//   // console.log('handleScroll', window.scrollY > 400)
//   // const lowerBound = (window.scrollY > 400) ? 0 : 1;
//   // this.setState({ navOpacity: (window.scrollY > 400) ? 0 : 1 });
//   // this.setState((state, props) => ({
//   //   navOpacity: (window.scrollY > 400) ? 0 : 1
//   // }))
//   // console.log(this.navOpacity)
//   // }

//   render() {
//     window.addEventListener('resize', this.showButton);
//     // window.addEventListener('scroll', this.handleScroll);



//     return (
//       <div className="navbar">
//         <DrawerToggle clicked={drawerToggleClicked} />
//         <div className="navbar-container">
//           <div className='menu-icon' onClick={() => this.handleClick()}>
//             <i className={this.state.click ? 'fas fa-times' : 'fas fa-bars'} />
//           </div>
//           <ul className={this.state.click ? 'nav-menu active' : 'nav-menu'}>
//             {/* <ul className='nav-menu'> */}
//             {/* <ul className={`
//               nav-menu-${isPathBillGenius() ? 'black' : 'white'} 
//               ${this.state.click ? 'active' : ''}
//             `}> */}
//             {/* <ul className={this.state.click ? 'nav-menu active' : 'nav-menu'}> */}
//             {/* {MenuItems.map((title, path) => { */}
//             {MenuItems.map(({ title, path }) => {
//               return (
//                 <li className="nav-item">
//                   <Navlink
//                     title={title}
//                     path={path}
//                     closeMobileMenu={this.closeMobileMenu}
//                   />
//                 </li>
//               )
//             })}
//             {/* <li className='nav-item navbar__contactMe'>
//               {
//                 this.state.button &&
//                 <Button
//                   // className='btns btn_nav'
//                   buttonSize='size__medium'
//                   buttonStyle='style__transparent'
//                   buttonBorder='border__secondary'
//                   buttonColor='color__white'
//                   buttonHover='hover__secondary'
//                   buttonEffect='effect__move_y'
//                 >
//                   Contact Me
//                   </Button>
//               }
//             </li> */}
//           </ul>
//         </div>
//       </div>
//     )
//   }
// }

// export default Nav


















































// import React from 'react'
// import Button from '../Button/Button'
// import Navlink from './Navlink'
// import './Navbar.css'
// import './Nav.scss'
// import { MenuItems } from './MenuItems'
// import { isPathBillGenius } from '../Util'



// class Nav extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log('Navbar constructor')

//     this.closeMobileMenu = this.closeMobileMenu.bind(this)
//     this.showButton = this.showButton.bind(this)
//     // this.handleScroll = this.handleScroll.bind(this)

//     this.state = {
//       click: false,
//       button: true,
//       navOpacity: 1
//     }
//   }

//   handleClick() {
//     this.setState({
//       click: !this.state.click,
//     })
//   };
//   closeMobileMenu() {
//     this.setState({ click: false })
//   }

//   showButton() {
//     // this.setState({ button: window.innerWidth > 425 })
//     this.setState({ button: window.innerWidth > 1050 })
//   }

//   // handleScroll() {
//   // console.log('handleScroll', window.scrollY > 400)
//   // const lowerBound = (window.scrollY > 400) ? 0 : 1;
//   // this.setState({ navOpacity: (window.scrollY > 400) ? 0 : 1 });
//   // this.setState((state, props) => ({
//   //   navOpacity: (window.scrollY > 400) ? 0 : 1
//   // }))
//   // console.log(this.navOpacity)
//   // }

//   render() {
//     window.addEventListener('resize', this.showButton);
//     // window.addEventListener('scroll', this.handleScroll);



//     return (
//       <div className="navbar">
//         <div className="navbar-container">
//           <div className='menu-icon' onClick={() => this.handleClick()}>
//             <i className={this.state.click ? 'fas fa-times' : 'fas fa-bars'} />
//           </div>
//           <ul className={this.state.click ? 'nav-menu active' : 'nav-menu'}>
//             {/* <ul className='nav-menu'> */}
//             {/* <ul className={`
//               nav-menu-${isPathBillGenius() ? 'black' : 'white'} 
//               ${this.state.click ? 'active' : ''}
//             `}> */}
//             {/* <ul className={this.state.click ? 'nav-menu active' : 'nav-menu'}> */}
//             {/* {MenuItems.map((title, path) => { */}
//             {MenuItems.map(({ title, path }) => {
//               return (
//                 <li className="nav-item">
//                   <Navlink
//                     title={title}
//                     path={path}
//                     closeMobileMenu={this.closeMobileMenu}
//                   />
//                 </li>
//               )
//             })}
//             {/* <li className='nav-item navbar__contactMe'>
//               {
//                 this.state.button &&
//                 <Button
//                   // className='btns btn_nav'
//                   buttonSize='size__medium'
//                   buttonStyle='style__transparent'
//                   buttonBorder='border__secondary'
//                   buttonColor='color__white'
//                   buttonHover='hover__secondary'
//                   buttonEffect='effect__move_y'
//                 >
//                   Contact Me
//                   </Button>
//               }
//             </li> */}
//           </ul>
//           {/* <div className='navbar__contactMe'>
//               {
//                 this.state.button &&
//                 <Button
//                   className='btns'
//                   buttonStyle='btn__secondary'
//                   buttonSize='btn__large'
//                 >
//                   Contact Me
//                 </Button>
//               }
//             </div> */}
//         </div>
//       </div>
//     )
//   }
// }

// export default Nav
