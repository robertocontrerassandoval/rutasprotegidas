import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { UserContext } from "./context/userContext";

import Home from "./views/Home";
import Pokemones from "./views/Pokemones";
import Personajes from "./views/Personajes";

const App = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemones" element={<Pokemones />} />
        <Route path="/personajes/:name/:url" element={<Personajes />}
         />
      </Routes>
    </div>
  );
};
export default App;
