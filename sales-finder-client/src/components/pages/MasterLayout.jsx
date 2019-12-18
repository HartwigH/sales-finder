import React from 'react';
import Navbar from '../containers/Navbar.jsx';
import InnerMenu from '../containers/InnerMenu.jsx';
import Content from '../containers/Content.jsx';
import Footer from '../containers/Footer.jsx';

/**stateful component */
export default class MasterLayout extends React.Component{
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <Navbar/>
                <div className="row">
                    <InnerMenu/>
                    <Content/>
                </div>
                <Footer/>
            </div>
            
        );
    }
}