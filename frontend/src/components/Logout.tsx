// components/LogoutButton.tsx
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export default function Logout() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await api.logout(); // optional, your backend just returns success
    } catch {}

    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  return (
    <button
      onClick={handleLogout}
      className="px-3 py-1 rounded bg-red-500 text-white text-sm hover:bg-red-600"
    >
      Logout
    </button>
  );
}
