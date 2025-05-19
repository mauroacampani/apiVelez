import NavBar from "./components/NavBar";
import Layaut from "./components/layaut";
import Tabla from "./pages/Tabla";

import { Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/index";
import Resultados from "./pages/resultados";
// import Estadisticas from "./pages/Estadisticas";

function App() {
  return (
    <>
      <div className="h-screen flex flex-col ">
        {/* <h1 class="text-3xl font-bold underline">Hello world!</h1> */}
        <NavBar></NavBar>
        <Layaut>
          <Routes>
            <Route path="/" element={<Tabla></Tabla>}></Route>
            <Route
              path="/resultados"
              element={<Resultados></Resultados>}
            ></Route>

            {/* <Route path="/tablas" element={<Tabla></Tabla>}></Route> */}
            <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
          </Routes>
        </Layaut>
      </div>
    </>
  );
}

export default App;
