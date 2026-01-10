// src/services/api.ts

const API_URL = import.meta.env.VITE_API_URL;
// fallback for dev

export const api = {
  /* ================= PROFILE ================= */

  getProfile: () =>
    fetch(`${API_URL}/api/profile`).then((r) => r.json()),

  updateProfile: (data: any) =>
    fetch(`${API_URL}/api/profile`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...api.authHeaders(),
      },
      body: JSON.stringify(data),
    }).then(async (r) => {
      if (!r.ok) {
        // Extract backend error message if present
        const err = await r.json().catch(() => ({}));
        if (r.status === 401) {
          localStorage.removeItem("token");
          window.location.href = "/login";
        }
        throw new Error(err.message || `HTTP Error ${r.status}`);
      }

      return r.json();
    }),


  /* ================= PROJECTS ================= */

  getProjects: () =>
    fetch(`${API_URL}/api/projects`).then((r) => r.json()),

  createProject: (data: any) =>
    fetch(`${API_URL}/api/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...api.authHeaders(),
      },
      body: JSON.stringify(data),
    }).then((r) => r.json()),

  updateProject: (id: string, data: any) =>
    fetch(`${API_URL}/api/projects/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...api.authHeaders(),
      },
      body: JSON.stringify(data),
    }).then((r) => r.json()),

  deleteProject: (id: string) =>
    fetch(`${API_URL}/api/projects/${id}`, {
      method: "DELETE",
      headers: api.authHeaders(),
    }).then((r) => r.json()),

  /* ================= AUTH ================= */

  login: async (password: string) => {
    const res = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (!res.ok) {
      throw new Error("Login failed");
    }

    return res.json();
  },

  logout: () =>
    fetch(`${API_URL}/api/auth/logout`, {
      method: "POST",
    }).then(res => res.json()),

  /* ================= HEADERS ================= */

  authHeaders: (): HeadersInit => {
    const token = localStorage.getItem("token");
    if (!token) return {};
    return {
      Authorization: `Bearer ${token}`,
    };
  },
};
