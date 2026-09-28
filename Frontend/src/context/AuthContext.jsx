import { createContext, useCallback, useContext, useMemo, useState } from "react";

const AuthContext = createContext(null);
const storageKey = "skillparadise_user";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem(storageKey) || "null"); } catch { return null; }
  });
  const login = useCallback((data) => { setUser(data); localStorage.setItem(storageKey, JSON.stringify(data)); }, []);
  const logout = useCallback(() => { setUser(null); localStorage.removeItem(storageKey); }, []);
  // A token is required.  Older versions of the portal stored a partial user
  // object; treating that as a login caused the inquiry page to open with an
  // invalid session message.
  const value = useMemo(() => ({ user, login, logout, isAuthenticated: Boolean(user?.token) }), [user, login, logout]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components -- Shared context hook accompanies its provider.
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider.");
  return context;
}
