import React from 'react';
import { Link } from 'react-router-dom';

/**stateful component */
export default class Home extends React.Component {

  constructor(props) {
    super(props);

  }


  render() {
    return (

      <div id="hero-area" className="hero-area-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12 hero-area-text">
              <div className="contents">
                <h2 className="head-title thin-font">Sales finder, find better deals <br /> & consume smart</h2>
                <p>Get the best deals directly for to your phone. Longed for that lovable outfit? add it to your wishlist and wait till the price is hot, voila! </p>
                <div className="header-button">
                <Link className="btn btn-outline-info" to="/deals/all">Start browsing deals!</Link>
                
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12">
              <div className="intro-img">
                <img className="img-fluid" src="media/intro-mobile.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}