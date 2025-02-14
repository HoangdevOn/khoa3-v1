import React from "react";
import "./register.css";

const InputField = ({ label, type, name, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        className="form-control"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

const Checkbox = ({ label, name, checked, onChange }) => {
  return (
    <div className="form-check">
      <input
        type="checkbox"
        className="form-check-input"
        id={name}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <label className="form-check-label" htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

const SubmitButton = ({ onClick }) => {
  return (
    <button type="submit" className="btn btn-primary" onClick={onClick}>
      Đăng ký
    </button>
  );
};

function Register() {
  const [formState, setFormState] = React.useState({
    username: "",
    email: "",
    password: "",
    agreeToTerms: false,
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormState((prevState) => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="register">
      <h2>Tạo tài khoản mới</h2>
      <p>
        Hãy đăng ký để trải nghiệm những tính năng tuyệt vời nhất của chúng tôi.
      </p>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Tên đăng nhập"
          type="text"
          name="username"
          value={formState.username}
          onChange={handleInputChange}
        />
        <InputField
          label="Email"
          type="email"
          name="email"
          value={formState.email}
          onChange={handleInputChange}
        />
        <InputField
          label="Mật khẩu"
          type="password"
          name="password"
          value={formState.password}
          onChange={handleInputChange}
        />
        <Checkbox
          label="Tôi đồng ý với các điều khoản và điều kiện"
          name="agreeToTerms"
          checked={formState.agreeToTerms}
          onChange={handleInputChange}
        />
        <SubmitButton onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default Register;
