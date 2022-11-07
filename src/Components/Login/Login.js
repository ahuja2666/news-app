import "./Login.css"
import { useEffect } from "react";
const Login = () => {

  const handelCallBack = (response) => {
    localStorage.setItem("token", response.credential);
    localStorage.setItem("loggedin", "true");
    window.location = "/";
  }

  useEffect(() => {

    window.google.accounts.id.initialize({
      client_id: "635170867350-uapf9469ik9mr2l537ekesok7so2oba4.apps.googleusercontent.com",
      callback: handelCallBack
    });

    window.google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large" }
    );

    window.google.accounts.id.prompt();
  }, []);

  return (
    <div className="login-conatiner">
      <div className="sb-container">
        <div className="login-ctn">
          <img src="./logo.png" alt="logo" height="150" width="250" />
          <h2 className="heading-main">Welcome to News App </h2>
          <p className="para">Let's log in to read news</p>
          <div id="signInDiv"></div>
        </div>
      </div>
    </div>
  )
}

export default Login;