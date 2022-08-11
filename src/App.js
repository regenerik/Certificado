import { Route, Routes } from "react-router-dom"
import Principal from "./paginas/Principal.js"
import Padre from "./paginas/Padre.js"
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Principal />}/>
        <Route path={"/creando"} element={<Padre />}/>
      </Routes>
    </>
  );
}

export default App;
