import axios from "axios";
import React from "react";
import { AuthContextProvider } from "./context/AuthContext";
import Router from "./Router";
import "./App.css"

axios.defaults.withCredentials = true;

function App() {
  return (
    <AuthContextProvider>
    <Router/>
    </AuthContextProvider>
  )
};


export default App;
