import React from 'react';
import Navbar from '../containers/Navbar.jsx';
import InnerMenu from '../containers/InnerMenu.jsx';
import Content from '../containers/Content.jsx';
import Footer from '../containers/Footer.jsx';
import SignUp from '../containers/SignUp.jsx';
import Login from '../containers/Login.jsx';
import NavbarDefault from '../containers/NavbarDefault.jsx';
import ContentMonton from '../containers/ContentMonton.jsx';
import ContentMosaic from '../containers/ContentMosaic.jsx';
import Home from '../containers/Home.jsx';

import { Link, Route, Switch } from 'react-router-dom';

function ShowNavbar(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <Navbar />;
    }
    return <NavbarDefault />;
}

/**stateful component */
export default class MasterLayout extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false };
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        return <div className="container" id="mainContainer">

            <ShowNavbar isLoggedIn={isLoggedIn} />
            <div className="row">
                {/*
                <InnerMenu/>
                <Content/>
                 
                <Login />
                <SignUp />
                */}
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/deals/all">
                        <InnerMenu/>
                        <Content/>
                    </Route>
                    <Route exact path="/deals/monton">
                        <InnerMenu/>
                        <ContentMonton/>
                    </Route>
                    <Route exact path="/deals/mosaic">
                        <InnerMenu/>
                        <ContentMosaic/>
                    </Route>
                    <Route path="/sign-in" component={Login} />
                    <Route path="/register" component={SignUp} />
                </Switch>
            </div>
            <Footer />
        </div>;



    }
}