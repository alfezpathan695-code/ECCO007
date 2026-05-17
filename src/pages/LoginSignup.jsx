import React, { useState } from 'react'
import "./loginsignup.css";

const LoginSignup = () => {

  const [isLogin, setIsLogin] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    agree: false
  });

  const [errors, setErrors] = useState({});

  // handle input
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  // validation
  const validate = () => {
    let newErrors = {};

    if (!isLogin && !formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Minimum 6 characters required";
    }

    if (!isLogin && !formData.agree) {
      newErrors.agree = "Please accept terms";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // submit
  const handleSubmit = () => {
    if (validate()) {
      alert(isLogin ? "Login Successful ✅" : "Signup Successful ✅");
    }
  };

  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>

        <h1>{isLogin ? "Login" : "Sign Up"}</h1>

        <div className='loginsignup-fields'>

          {/* Name only for signup */}
          {!isLogin && (
            <>
              <input
                type='text'
                name='name'
                placeholder='Your Name'
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </>
          )}

          <input
            type='email'
            name='email'
            placeholder='Email Address'
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <input
            type='password'
            name='password'
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}

        </div>

        <button onClick={handleSubmit}>
          {isLogin ? "Login" : "Continue"}
        </button>

        {/* toggle */}
        <p className='loginsignup-login'>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? " Sign up here" : " Login here"}
          </span>
        </p>

        {/* checkbox only signup */}
        {!isLogin && (
          <>
            <div className='loginsignup-agree'>
              <input
                type='checkbox'
                name='agree'
                checked={formData.agree}
                onChange={handleChange}
              />
              <p>By continuing, I agree to the terms of use & privacy policy.</p>
            </div>
            {errors.agree && <p className="error">{errors.agree}</p>}
          </>
        )}

      </div>
    </div>
  )
}

export default LoginSignup;