
import React from "react"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hotels from "./Pages/Hotels";
import Template from '../src/layout/Template'
import Sidebar from "./navSide/Sidebar";
import Navbar from "../src/navSide/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import CardDashboard from "./Pages/CardDashboard";
function App() {
    const user = localStorage.getItem("token");

  return (
    <div>
      <Template sidebar={<Sidebar />} navbar={<Navbar />}>
        <Routes>
          {user &&<Route path="/admin/Dashboard" element={<CardDashboard />} />}
          <Route path="/admin/hotels" element={<Hotels />} />
          <Route path="/" exact element={<Navigate replace to="/connexion"/>}/>
        </Routes>
      </Template>
    </div>
  );
}

export default App