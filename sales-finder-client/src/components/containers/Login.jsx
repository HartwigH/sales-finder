import React from 'react';
import { Link } from 'react-router-dom';

/**stateful component */
export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.sendData = this.sendData.bind(this);
  }

  sendData(event) {
    let data = {
      username: this.state.username,
      password: this.state.password
    }

    console.log(data);
    event.preventDefault();
  }

 
  render() {
    return (

          <div className="col-lg-10 col-xl-9 mx-auto">
            <div className="card card-signin flex-row my-5">
              <div className="card-img-left d-none d-md-flex">

              </div>
              <div className="card-body">
                <h5 className="card-title text-center">Sign in</h5>
                <form className="form-signin" >
                  <div className="form-label-group">
                    <input type="text" id="inputUserame" value={this.state.username} onChange={(e) => this.setState({username: e.target.value})}  className="form-control" placeholder="Username" required autoFocus />
                    <label htmlFor="inputUserame">Username</label>
                  </div>
                  
                  <div className="form-label-group">
                    <input type="password" id="inputPassword" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} className="form-control" placeholder="Password" required />
                    <label htmlFor="inputPassword">Password</label>
                  </div>

                  <hr />

                  <button className="btn btn-lg btn-outline-primary btn-block text-uppercase" onClick={this.sendData}>Sign in</button>
                  <Link className="d-block text-center mt-2 small" to="/register">Register</Link>
                  <hr className="my-4" />
                  <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i class="fab fa-google mr-2"/> Sign in with Google</button>
                  <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i class="fab fa-facebook-f mr-2"/> Sign in with Facebook</button>
                </form>
              </div>
            </div>
          </div>

    );
  }
}