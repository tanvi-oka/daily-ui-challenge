import { useState } from "react";
import "./App.css";

export default function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "password") {
      if (value.length < 12) {
        setError("Password must have min 12 characters");
        return;
      }
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;
      if (!passwordRegex.test(value)) {
        setError("Mix it up! Use caps, smalls, numbers & symbols 🎉");
        return;
      }
      setError("");
    } else if (name === "confirmPassword") {
      if (value !== formData.password) {
        setError("Passwords do not match!");
        return;
      }
      setError("");
    } else {
      setError("");
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    
  
    alert(`Welcome to Nova, ${formData.fullName}!`);
    // Reset form
    setFormData({ fullName: "", email: "", password: "", confirmPassword: "" });
  };

  return (
    <div className="container">
      <header className="header">
        <h1 className="logo">Nova</h1>
        <p className="tagline">Brighten your day, one habit at a time.</p>
      </header>

      <form className="form" onSubmit={handleSubmit}>
        <input
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          type="text"
          placeholder="Full Name"
          required
          className="input"
          autoComplete="name"
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          placeholder="Email Address"
          required
          className="input"
          autoComplete="email"
        />
        <input
          name="password"
          value={formData.password}
          onChange={handleChange}
          type="password"
          placeholder="Password"
          required
          className="input"
          autoComplete="new-password"
        />
        <input
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          type="password"
          placeholder="Confirm Password"
          required
          className="input"
          autoComplete="new-password"
        />

        {error && <p className="error-text">{error}</p>}

        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>

      <p className="alternative">
        Or sign up with:{" "}
        <button
          className="google-button"
          onClick={() => alert("Google sign-in coming soon!")}
          type="button"
        >
          Google
        </button>
      </p>

      <p className="login-text">
        Already have an account?{" "}
        <a href="#" className="login-link">
          Log In
        </a>
      </p>
    </div>
  );
}
