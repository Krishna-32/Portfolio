// App.js
import React from "react";
import { ScrollProvider } from './components/ScrollContext'; // Import the context
import Planet from "./modules/Planet";
import Navbar from "./components/Navbar";
import Home from "./modules/Home";

function App() {
  return (
    <ScrollProvider>
      <div className="overflow-hidden">
        <Navbar />
        <div>
          <Home />
        </div>
        <div>
          <Planet />
        </div>
      </div>
    </ScrollProvider>
  );
}

export default App;
