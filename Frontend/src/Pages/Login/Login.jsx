import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const { isAuthenticated, login } = useAuth();
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  if (isAuthenticated) return <Navigate to="/dashboard/inquiries" replace />;

  const submit = async (event) => {
    event.preventDefault(); setError(""); setLoading(true);
    try {
      const base = import.meta.env.VITE_API_BASE_URL || "";
      const response = await fetch(`${base}/api/Auth/login`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(credentials) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Login failed.");
      login(result.data);
      navigate(location.state?.from || "/dashboard/inquiries", { replace: true });
    } catch (err) { setError(err.message); } finally { setLoading(false); }
  };

  return <main className="min-h-screen bg-[#EAF1FF] flex items-center justify-center p-6 text-[#173873]">
    <section className="w-full max-w-md overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_70px_rgba(23,56,115,0.16)]">
      <div className="h-2 bg-[#F88118]" />
      <form onSubmit={submit} className="p-8 sm:p-10 space-y-6">
        <div><p className="text-xs font-bold tracking-[0.24em] text-[#F88118] uppercase">SkillParadise</p><h1 className="mt-3 font-serif text-4xl">Portal Login</h1><p className="mt-3 text-sm text-[#173873]/60">Sign in to manage website inquiries.</p></div>
        <label className="block text-sm font-semibold">Username<input required name="username" value={credentials.username} onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} className="mt-2 w-full h-12 rounded-xl border border-[#173873]/20 px-4 outline-none focus:ring-4 focus:ring-[#173873]/10" placeholder="Username" /></label>
        <label className="block text-sm font-semibold">Password<input required type="password" name="password" value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} className="mt-2 w-full h-12 rounded-xl border border-[#173873]/20 px-4 outline-none focus:ring-4 focus:ring-[#173873]/10" placeholder="Password" /></label>
        {error && <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>}
        <button disabled={loading} className="h-12 w-full rounded-xl bg-[#173873] font-semibold text-white hover:bg-[#102d5c] disabled:opacity-60">{loading ? "Signing in..." : "Login"}</button>
      </form>
    </section>
  </main>;
}
