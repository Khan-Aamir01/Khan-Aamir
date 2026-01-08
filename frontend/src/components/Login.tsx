import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submit = async () => {
    try {
      const res = await api.login(password);
      localStorage.setItem("token", res.token);
      navigate("/admin");
    } catch {
      setError("Invalid password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950 text-neutral-100">
      <div className="card w-full max-w-sm space-y-6">
        <h1 className="text-2xl font-semibold text-center">Admin Login</h1>

        <input
          type="password"
          className="input"
          placeholder="Admin Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button onClick={submit} className="btn-primary w-full">
          Login
        </button>
      </div>
    </div>
  );
}
