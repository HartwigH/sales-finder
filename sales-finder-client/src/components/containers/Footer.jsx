import React from 'react';


/**stateful component */
export default class Footer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className="py-5 bg-light">
                <div className="container" >
                    <p className="m-0 text-center"> <img src="/media/logo.png" width="30" height="30" className="d-inline-block align-middle" alt="" />
                        Sales Finder - Powered by coffee | find the project on <a href="https://github.com/HartwigH/sales-finder">Github</a> <i className="fab fa-github mr-2"></i></p>
                </div>
            </footer>
        );
    }
}