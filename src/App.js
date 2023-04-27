import React from "react";
import "./App.css";

// REACT - ROUTER - DOM
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// COMPONENTS
import ResponsiveNavigation from "./components/ResponsiveNavigation/ResponsiveNavigation";

// CONTEXT
import {ItemsProvider} from "./Context/ItemsContext"; 

// VIEWS
import Home from "./Views/Home/Home";

import Contact from "./Views/Contact/Contact";
import Shop from "./Views/Shop/Shop";
import AlbumDetail from "./Views/AlbumDetail/AlbumDetail";
import MusicGenre from "./Views/MusicGenre/MusicGenre";

const App = () => {
  return (
    <Router>
      <ItemsProvider>
        <div className="App">
        <ResponsiveNavigation />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/details/:id" element={<AlbumDetail />} />
            <Route path="/music-genre/:Genero" element={<MusicGenre />} />
            <Route path="/details:id" element={<MusicGenre />} />
          </Routes>
        </div>
      </ItemsProvider>
    </Router>
  );
};

export default App;
