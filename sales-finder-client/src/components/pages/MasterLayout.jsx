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
import ContentBaltman from '../containers/ContentBaltman.jsx';
import ContentHM from '../containers/ContentHM.jsx';
import InnerMenuWishlist from '../containers/InnerMenuWishlist.jsx';
import ContentWishlist from '../containers/ContentWishlist.jsx';
import Home from '../containers/Home.jsx';
import InnerMenuSettings from '../containers/InnerMenuSettings.jsx';

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
        this.state = { isLoggedIn: true };
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        return <div className="container" id="mainContainer">

            <ShowNavbar isLoggedIn={isLoggedIn} />

            <div className="row" style={{'minHeight':"556px"}}>

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
                    <Route exact path="/deals/baltman">
                        <InnerMenu/>
                        <ContentBaltman/>
                    </Route>
                    <Route exact path="/deals/hm">
                        <InnerMenu/>
                        <ContentHM/>
                    </Route>
                    
                    <Route exact path="/wishlist/all">
                        <InnerMenuWishlist/>
                        <ContentWishlist/>
                    </Route>
                    <Route exact path="/wishlist/monton">
                        <InnerMenuWishlist/>
                        <ContentMonton/>
                    </Route>
                    <Route exact path="/wishlist/mosaic">
                        <InnerMenuWishlist/>
                        <ContentMosaic/>
                    </Route>
                    <Route exact path="/wishlist/baltman">
                        <InnerMenuWishlist/>
                        <ContentBaltman/>
                    </Route>
                    <Route exact path="/wishlist/hm">
                        <InnerMenuWishlist/>
                        <ContentHM/>
                    </Route>

                    <Route exact path="/notifications">
                        <InnerMenuSettings/>
                        <ContentHM/>
                    </Route>
                    <Route exact path="/account">
                        <InnerMenuSettings/>
                        <ContentHM/>
                    </Route>

                    <Route path="/sign-in" component={Login} />
                    <Route path="/register" component={SignUp} />
                </Switch>
            </div>
            <Footer />
        </div>;

    }
}