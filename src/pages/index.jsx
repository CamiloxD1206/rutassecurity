import { Navigate } from "react-router-dom";
export const Camilo = () => <h2 className="contenedoruno">Camilo Estevan Tacue Salazar(Private)</h2>;

export const Landing = () => <h2 className="contenedoruno">Landing Page (Public)</h2>;

export const Home = () => <h2 className="contenedoruno">Home Page (Private)</h2>;

export const Dashboard = () => <h2 className="contenedoruno">Dashboard (Private)</h2>;

export const Analytics = () => (
  <h2 className="contenedoruno">Profile (Private & permission 'analize')</h2>
);

export const Admin = () => <h2 className="contenedoruno">Admin (Private & permission 'admin')</h2>;
