//React Redux import
import React, { Component } from "react";

import logo from '../../assets/logo.png'


//This component is a presentation only no BL (dummy component)

class Header extends Component {
  render() {
    return (
      <section style={headerStyle.headerContainer}>
        <div>
          <img style={headerStyle.headerImg} src={logo} alt='logo' />
        </div>
      </section>
    );
  }
}

//Component Style
const headerStyle = {
  headerContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: '40px'
  },
  headerImg: {
    maxHeight: '120px'
  }
}
export default Header;
