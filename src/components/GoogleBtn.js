import React, { Component } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
const CLIENT_ID = `${process.env.REACT_APP_CLIENT_ID}`;

class GoogleBtn extends Component {
   constructor(props) {
    super(props);

    this.state = {
      isLogined: false,
      accessToken: '',
      styleLogin: "googleBtn displayInline",
      styleLogout: "googleBtn displayNone",
      styleAlert: "alert alert-success loginAlert alert-dismissible displayInline",
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
        styleAlert: "alert alert-success loginAlert alert-dismissible displayNone",
      }));
      this.props.setUserId(response.getId()); //gets unique Google userId
      
    }
  }

  logout (response) {
    this.setState(state => ({
      isLogined: false,
      accessToken: '',
      styleLogin: "googleBtn displayInline",
      styleLogout: "googleBtn displayNone",
    }));
    this.props.setUserId(null);
  }

  handleLoginFailure (response) {
    alert('Failed to log in')
  }

  handleLogoutFailure (response) {
    alert('Failed to log out')
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
      <div className={this.state.styleAlert} ref={this.alert}>
        <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
        <span className="loginAlertText">
          <img src="/img/cat.png" alt="" className="catImg"/>
          <br />
          Please <strong>Login</strong> with your Google account in order to see your stats.
        </span>
      </div>
      <div className={this.props.loadingStyle}>
        <div className="spinner-border text-light" role="status">
        </div>
      </div>
    </div>
    )
  }
}

export default GoogleBtn;