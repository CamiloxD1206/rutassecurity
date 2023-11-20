import { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Admin, Analytics, Dashboard, Home, Landing,Camilo } from "./pages";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  const [user, setUser] = useState(null);

  const login = () =>
    setUser({
      id: 1,
      name: "Camilo",
      permissions: ["analize"],
      roles: ["admin"],
    });
  const logout = () => setUser(null);

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/camilo" element={<Camilo />}/>
        <Route path="/landing" element={<Landing />} />
        <Route element={<ProtectedRoute isAllowed={!!user} />}>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route
          path="/analytics"
          element={
            <ProtectedRoute
              redirectTo="/home"
              isAllowed={!!user && user.permissions.includes("analize")}
            >
              <Analytics />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute
              redirectTo="/home"
              isAllowed={!!user && user.roles.includes("admin")}
            >
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>

      {user ? (
        <button onClick={logout} className="btn btn-secondary">
          Logout
        </button>
      ) : (
        <button onClick={login} className="btn btn-warning">
          Login
        </button>
      )}
    </BrowserRouter>
  );
}

function Navigation() {
  return (
    <nav>
      <ul className="listado">
        <li>
          <Link to="/landing">Landing</Link>
        </li>
        <li>
          <Link to="/camilo">Camilo</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/analytics">Analytics</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </nav>
  );
}

export default App;
