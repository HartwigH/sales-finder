import React from 'react';

import ProductTable from '../Tables/ProductTable.jsx';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

const axios = require("axios"); //external library  https://github.com/axios/axios
let httpsProxyAgent = require('https-proxy-agent');



const dataUrl = "http://localhost:8080/rest/product/all/visible/monton";

//import {data} from '../data/Data.js';

const agent = new httpsProxyAgent('http://kn.proxy.int.kn:80');

const config = {
  httpsAgent: agent
}

/**stateful component */
export default class ContentMonton extends React.Component {

    constructor(props) {
        super(props);
        this.state = { allData:[] };
    }

    componentDidMount() {
      this.getData();
    }
  
    getData() {
      axios.get(dataUrl, config)
        .then((response) => {
          const allData = response.data;
          this.setState({ allData });
        }).catch((exception) => {
          console.log(exception);
        });
    }

    render() {
      if (this.state.allData.length == 0) {
        return (
          <div className="col-lg-9">
            <div className="mh-100" style={{'padding-top': "250px", 'padding-bottom': "250px", color: "#adb5bd"}}>  
              <div class="d-flex justify-content-center">
                <div className="spinner-grow text-info " role="status">
                  <span className="sr-only ">Loading...</span>
                </div>
              </div>
            </div>
          </div>
    
        );
      } else {
        return (
          <div className="col-lg-9">
            
            <ProductTable data={this.state.allData}/>
          </div>
    
        );
      }
    }
}