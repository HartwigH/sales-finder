import React from 'react';

/**stateful component */
export default class Login extends React.Component {

  constructor(props) {
    super(props);

  }

 
  render() {
    return (

          <div className="col-lg-10 col-xl-9 mx-auto">
            <div className="card card-signin flex-row my-5">
              <div className="card-img-left d-none d-md-flex">

              </div>
              <div className="card-body">
                <h5 className="card-title text-center">Login</h5>
                <form className="form-signin" >
                  <div className="form-label-group">
                    <input type="text" id="inputUserame"  className="form-control" placeholder="Username" required autoFocus />
                    <label htmlFor="inputUserame">Username</label>
                  </div>
                  
                  <div className="form-label-group">
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                    <label htmlFor="inputPassword">Password</label>
                  </div>

                  <hr />

                  <button className="btn btn-lg btn-outline-primary btn-block text-uppercase">Login</button>
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