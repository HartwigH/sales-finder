import React from 'react';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';


/**stateful component */
export default class ContentBaltman extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
      return (
        <div className="col-lg-9">

          <div className="mh-100" style={{'paddingTop': "250px", 'paddingBottom': "250px", color: "#adb5bd"}}>  
          <h1 className="text-center align-middle">Coming soon <i className="fas fa-tools"></i></h1>
          </div>
          
        </div>
    
      ); 
    }
}