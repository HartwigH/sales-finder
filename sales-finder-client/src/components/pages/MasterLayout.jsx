import React from 'react';
import Navbar from '../containers/Navbar.jsx';
import InnerMenu from '../containers/InnerMenu.jsx';
import Content from '../containers/Content.jsx';
import Footer from '../containers/Footer.jsx';
import SignUp from '../containers/SignUp.jsx';
import Login from '../containers/Login.jsx';
import NavbarDefault from '../containers/NavbarDefault.jsx';


function ShowNavbar(props) {
    const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <Navbar />;
  }
  return <NavbarDefault />;
}

function ShowLogin(props) {

}

function ShowSignUp(props) {
    
}

/**stateful component */
export default class MasterLayout extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false};
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        if (this.state.token){
            return <div className="container">
            <ShowNavbar isLoggedIn={isLoggedIn} />
            <div className="row">
                <InnerMenu/>
                <Content/>
            </div>
            <Footer/>
            </div>;
          }else{
            return <div className="container">
            <ShowNavbar isLoggedIn={isLoggedIn} />
            <div className="row">
                <SignUp/>
            </div>
            <Footer/>
            </div>;
          }
            

    }
}