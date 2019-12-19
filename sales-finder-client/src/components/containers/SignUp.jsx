import React from 'react';

const axios = require("axios"); //external library  https://github.com/axios/axios
let httpsProxyAgent = require('https-proxy-agent');

const agent = new httpsProxyAgent('http://kn.proxy.int.kn:80');

const mockDataUrl = "https://api.mockaroo.com/api/cc68f950?count=3&key=b716fe20";
const echoPostUrl="https://postman-echo.com/post";

const config = {
  httpsAgent: agent
}

const configSend = {
  headers: {"Content-Type": "application/json","Accept": "application/json", 'Access-Control-Allow-Origin': '*' },
  httpsAgent: agent
};

/**stateful component */
export default class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: ''
    };
    this.sendData = this.sendData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get(mockDataUrl, config)
      .then((response) => {
        //this.setState({ value: response[1]});
        this.setState({ username: response.data[0].username });
        this.setState({ email: response.data[0].email });
        //console.log(response.data[0].username);
      }).catch((exception) => {
        console.log(exception);
      });
  }



  sendData(event) {
    let data = {
      username: this.state.username,
      email: this.state.email
    }
    //JSON.stringify(data);

    //console.log(configSend);

      axios.post(echoPostUrl, data, configSend)
      .then((response) => {
          console.log("response from echo server");
          console.log(response.data);
      }).catch((exception)=>{
          console.log(exception);
      });

    event.preventDefault();
  }


  render() {
    return (

          <div className="col-lg-10 col-xl-9 mx-auto">
            <div className="card card-signin flex-row my-5">
              <div className="card-img-left d-none d-md-flex">

              </div>
              <div className="card-body">
                <h5 className="card-title text-center">Register</h5>
                <form className="form-signin" >
                  <div className="form-label-group">
                    <input type="text" id="inputUserame" value={this.state.username} onChange={(e) => this.setState({username: e.target.value})} className="form-control" placeholder="Username" required autoFocus />
                    <label htmlFor="inputUserame">Username</label>
                  </div>

                  <div className="form-label-group">
                    <input type="email" id="inputEmail" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}className="form-control" placeholder="Email address" required />
                    <label htmlFor="inputEmail">Email address</label>
                  </div>

                  <hr />

                  <div className="form-label-group">
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                    <label htmlFor="inputPassword">Password</label>
                  </div>

                  <div className="form-label-group">
                    <input type="password" id="inputConfirmPassword" className="form-control" placeholder="Password" required />
                    <label htmlFor="inputConfirmPassword">Confirm password</label>
                  </div>

                  <button className="btn btn-lg btn-outline-primary btn-block text-uppercase" onClick={this.sendData}>Register</button>
                  <a className="d-block text-center mt-2 small" href="#">Sign In</a>
                  <hr className="my-4" />
                  <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"> Sign up with Google</button>
                  <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"> Sign up with Facebook</button>
                </form>
              </div>
            </div>
          </div>

    );
  }
}