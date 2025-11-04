import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true
});

// Simple health check
export async function ping() {
  const res = await api.get("/healthz");
  return res.data;
}
