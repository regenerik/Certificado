import { Route, Routes } from "react-router-dom"
import Principal from "./paginas/Principal.js"
import Padre from "./paginas/Padre.js"
import Tutorial from "./paginas/Tutorial.js"
import Donar from "./paginas/Donar.js"
import Noexiste from "./paginas/Noexiste.js"
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Principal />}/>
        <Route path={"/creando"} element={<Padre />}/>
        <Route path={"/tutorial"} element={<Tutorial />}/>
        <Route path={"/donar"} element={<Donar />}/>
        <Route path={"*"} element={<Noexiste />}/>
      </Routes>
    </>
  );
}

export default App;
