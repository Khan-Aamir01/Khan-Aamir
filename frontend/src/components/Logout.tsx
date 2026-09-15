import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/", { replace: true });
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
