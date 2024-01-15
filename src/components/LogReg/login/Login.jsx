import React from "react";
import "./login.css";

const login = () => {
  <div className="login-container">
    <div className="loginform">
      <h2>Đăng nhập tài khoản</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Tên tài khoản hoặc Email</label>
          <input type="text" id="username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mật khẩu</label>
          <input type="password" id="password" />
        </div>
        <button type="submit" className="login-button">
          Đăng nhập
        </button>
      </form>
      <div className="or-separator">Hoặc</div>
      <div className="social-login">
        <button className="google-button">Đăng nhập bằng Google</button>
        <button className="facebook-button">Đăng nhập bằng Facebook</button>
        <button className="apple-button">Log in with Apple</button>
      </div>
    </div>
  </div>;
};

export default login;
