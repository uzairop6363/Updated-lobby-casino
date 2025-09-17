import React, { useState } from "react";
import "./App.css";
import animeGirl from "./assets/anime-girl.png"; // replace with your own anime girl

function LoginCreateForm({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users") || "{}");

    if (isLogin) {
      if (users[email] && users[email] === password) {
        localStorage.setItem("loggedInUser", JSON.stringify({ email }));
        setUser({ email });
      } else {
        setMessage("❌ Invalid credentials!");
      }
    } else {
      if (users[email]) {
        setMessage("⚠️ Account already exists!");
      } else {
        users[email] = password;
        localStorage.setItem("users", JSON.stringify(users));
        setMessage("✅ Created successfully!");
        setTimeout(() => {
          localStorage.setItem("loggedInUser", JSON.stringify({ email }));
          setUser({ email });
        }, 1000);
      }
    }
  };

  return (
    <div className="login-container">
      <div
        className="anime-girl"
        style={{ backgroundImage: `url(${animeGirl})` }}
      ></div>

      <form className="login-form" onSubmit={handleSubmit}>
        <h2>{isLogin ? "Login" : "Create Account"}</h2>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isLogin ? "Login" : "Create Account"}</button>
        {message && <p className="message">{message}</p>}
        <p className="toggle" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Don’t have an account? Create Account" : "Already have an account? Login"}
        </p>
      </form>
    </div>
  );
}

export default LoginCreateForm;
