import React, { useState, useContext, useEffect } from "react";

const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(false);
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
