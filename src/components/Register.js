import { useState, useEffect } from "react";
import "./Register.css";

function Register(props) {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate(formValues).isEmpty)
    {
        props.setIsRegister(true);
    }
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    errors.isEmpty = false;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
        errors.isEmpty = true;
        errors.username = "Username is required!";
    }
    if (!values.email) {
        errors.isEmpty = true;
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
        errors.isEmpty = true;
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
        errors.isEmpty = true;
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
        errors.isEmpty = true;
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 15) {
        errors.isEmpty = true;
      errors.password = "Password cannot exceed more than 15 characters";
    }
    return errors;
  };

  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}

      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Register;