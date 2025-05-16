import NavBar from "./components/NavBar";
import Layaut from "./components/layaut";
import { Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/index";
// import Estadisticas from "./pages/Estadisticas";

function App() {
  return (
    <>
      <div className="h-screen flex flex-col ">
        {/* <h1 class="text-3xl font-bold underline">Hello world!</h1> */}
        <NavBar></NavBar>
        <Layaut>
          <Routes>
            <Route path="/" element={<Index></Index>}></Route>

            {/* <Route
              path="/estadisticas"
              element={<Estadisticas></Estadisticas>}
            ></Route> */}
            <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
          </Routes>
          <Index></Index>
        </Layaut>
      </div>
    </>
  );
}

export default App;
