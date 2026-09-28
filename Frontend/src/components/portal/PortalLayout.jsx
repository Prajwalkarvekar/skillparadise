import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/logos/SP LOGO.svg";

const links = [
  ["/dashboard", "Overview", "⌂"],
  ["/dashboard/students", "Student Registry", "♙"],
  ["/dashboard/inquiries", "Inquiry Manager", "✉"],
];

export default function PortalLayout({ children, title, subtitle }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const leave = () => { logout(); navigate("/login", { replace: true }); };
  return <div className="min-h-screen bg-[#f7f8fc] text-slate-800">
    <aside className="fixed inset-y-0 left-0 z-20 hidden w-64 flex-col border-r border-slate-200 bg-white md:flex">
      <NavLink to="/" aria-label="Skill Paradise home" className="flex h-20 shrink-0 items-center border-b border-slate-100 px-7"><img src={logo} alt="Skill Paradise — Learn Without Limits" className="h-auto w-full max-w-48" /></NavLink>
      <p className="px-7 pt-7 text-[10px] font-black uppercase tracking-[.2em] text-slate-400">Admin portal</p>
      <nav className="mt-3 space-y-1 px-3">{links.map(([to, label, icon]) => <NavLink end={to === "/dashboard"} key={to} to={to} className={({ isActive }) => `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold transition ${isActive ? "bg-[#eaf1ff] text-[#173873]" : "text-slate-500 hover:bg-slate-50"}`}><span className="w-5 text-center text-base">{icon}</span>{label}</NavLink>)}</nav>
      <div className="mt-auto border-t border-slate-100 p-5"><p className="truncate text-sm font-bold">{user?.name || "Skill Paradise Admin"}</p><p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-[#f88118]">{user?.roleName || "Superadmin"}</p><button onClick={leave} className="mt-4 w-full rounded-xl border border-slate-200 px-3 py-2 text-xs font-bold text-slate-600 hover:bg-slate-50">Logout</button></div>
    </aside>
    <main className="min-h-screen md:ml-64"><header className="flex min-h-20 items-center justify-between border-b border-slate-200 bg-white px-5 md:px-10"><NavLink to="/dashboard" aria-label="Skill Paradise dashboard" className="md:hidden"><img src={logo} alt="Skill Paradise — Learn Without Limits" className="h-auto w-40" /></NavLink><div className="hidden md:block"><h1 className="text-xl font-black text-slate-800">{title}</h1><p className="mt-1 text-xs text-slate-500">{subtitle}</p></div><button onClick={leave} className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-bold md:hidden">Logout</button></header><div className="mx-auto max-w-7xl p-5 md:p-10">{children}</div></main>
  </div>;
}
