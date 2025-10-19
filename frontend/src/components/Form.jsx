import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "../styles/Form.css";
import LoadingIndicator from "./LoadingIndicator";

function Form({ route, method }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const name = method === "login" ? "Login" : "Register";

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Trim inputs
    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    if (!trimmedUsername || !trimmedPassword) {
      alert("Username and password cannot be empty");
      return;
    }

    setLoading(true);

    try {
      const res = await api.post(route, {
        username: trimmedUsername,
        password: trimmedPassword,
      });

      if (method === "login") {
        // Save JWT tokens
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);

        // Redirect to home
        navigate("/");
      } else {
        alert("Registration successful! Please login.");
        navigate("/login");
      }
    } catch (error) {
      if (error.response) {
        // Backend returned an error
        alert(error.response.data.detail || "Something went wrong");
      } else {
        // Network or other error
        alert("Network error. Please check your connection.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h1>{name}</h1>
      <input
        className="form-input"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        disabled={loading}
      />
      <input
        className="form-input"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        disabled={loading}
      />
      {loading && <LoadingIndicator />}
      <button
        className="form-button"
        type="submit"
        disabled={loading}
      >
        {loading ? "Processing..." : name}
      </button>
    </form>
  );
}

export default Form;
