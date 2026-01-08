// src/services/api.ts
const API = "http://localhost:3000/api";

export const api = {
  /* ================= PROFILE ================= */

  getProfile: () =>
    fetch(`${API}/profile`).then((r) => r.json()),

  updateProfile: (data: any) =>
    fetch(`${API}/profile`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...api.authHeaders(),
      },
      body: JSON.stringify(data),
    }).then((r) => r.json()),

  /* ================= PROJECTS ================= */

  getProjects: () =>
    fetch(`${API}/projects`).then((r) => r.json()),

  createProject: (data: any) =>
    fetch(`${API}/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...api.authHeaders(),
      },
      body: JSON.stringify(data),
    }).then((r) => r.json()),

  updateProject: (id: string, data: any) =>
    fetch(`${API}/projects/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...api.authHeaders(),
      },
      body: JSON.stringify(data),
    }).then((r) => r.json()),

  deleteProject: (id: string) =>
    fetch(`${API}/projects/${id}`, {
      method: "DELETE",
      headers: api.authHeaders(),
    }).then((r) => r.json()),

  /* ================= AUTH ================= */

  login: async (password: string) => {
    const res = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (!res.ok) {
      throw new Error("Login failed");
    }

    return res.json();
  },

  /* ================= HEADERS ================= */

  authHeaders: (): HeadersInit => {
    const token = localStorage.getItem("token");

    if (!token) return {};

    return {
      Authorization: `Bearer ${token}`,
    };
  },
};
