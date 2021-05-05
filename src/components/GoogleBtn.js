import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
const CLIENT_ID = `${process.env.REACT_APP_CLIENT_ID}`;

class GoogleBtn extends Component {
   constructor(props) {
    super(props);

    this.state = {
      isLogined: false,
      accessToken: '',
      styleLogin: "googleBtn displayInline",
      styleLogout: "googleBtn displayNone"
    };

    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);

    this.alert = React.createRef();
  }

  login (response) {
    if(response.accessToken){
      this.setState(state => ({
        isLogined: true,
        accessToken: response.accessToken,
        styleLogin: "googleBtn displayNone",
        styleLogout: "googleBtn displayInline",
      }));
      console.log(response.getId()); //gets unique Google userId
      // this.alert.current.style.display = "none";
    }
  }

  logout (response) {
    this.setState(state => ({
      isLogined: false,
      accessToken: '',
      styleLogin: "googleBtn displayInline",
      styleLogout: "googleBtn displayNone",
    }));
  }

  handleLoginFailure (response) {
    alert('Failed to log in')
  }

  handleLogoutFailure (response) {
    alert('Failed to log out')
  }

  popOverStatus() {
    if(this.state.accessToken) {
      console.log("user is logged in");
    } else {
      console.log("user is NOT logged in");
    }
  }

  render() {
    return (
    <div>
      <GoogleLogout
          clientId={ CLIENT_ID }
          onLogoutSuccess={ this.logout }
          onFailure={ this.handleLogoutFailure }
          className={this.state.styleLogout}
          isSignedIn={true}
          icon={false}
      >
        <span className="googleText">Logout</span>
      </GoogleLogout>
      <GoogleLogin
          clientId={ CLIENT_ID }
          onSuccess={ this.login }
          onFailure={ this.handleLoginFailure }
          cookiePolicy={ 'single_host_origin' }
          responseType='code,token'
          isSignedIn={true}
          className={this.state.styleLogin}
          icon={false}
      >
        <span className="googleText">Login</span>
      </GoogleLogin>
      {this.popOverStatus()}
      <div className="alert alert-success loginAlert alert-dismissible">
        <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
        <span className="loginAlertText">
          <img src="/img/cat.png" alt="" className="catImg"/>
          <br />
          Please <strong>Login</strong> with your Google account in order to see your stats.
        </span>
      </div>
    </div>
    )
  }
}

export default GoogleBtn;