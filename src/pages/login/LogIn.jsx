import "./login-styles/login.css"
export default function LogIn() {
  return (
    <div className="login-body">
      <div id="login-con">
        <div id="login">
          <div id="login-title-con">
            <h1 id="login-title">login</h1>
          </div>
          <div id="inputs-con">
            <div id="username-con">
              <label for="email">
                <b>Email</b>
              </label>
              <input type="text" id="username" />
            </div>
            <div id="password-con">
              <label for="password"><b>Password</b></label>
              <input type="password" id="password" />
            </div>
            <div id="forgot-password">
              <h5>Forgot Password?</h5>
            </div>
          </div>
          <div id="submit-con">
            <div id="login-btn-con">
              <button id="login-btn">login</button>
            </div>
            <div id="sign-up-con">
              <div id="sign-up">
                Don't have an account?
                <a href="">Sign Up</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
