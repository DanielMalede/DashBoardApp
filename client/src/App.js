import { Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import Home from "./components/pages/Home/Home";
import { DataContextProvider } from "./context/dataContext";
// import "mdb-react-ui-kit/css/free/mdb.min.css";
function App() {
  return (
    <div className="App">
      <DataContextProvider>
        <Home />
      </DataContextProvider>
    </div>
  );
}

export default App;
