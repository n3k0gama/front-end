import React from "react";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App(){
  return (
    <div className="font-poppins bg-bgLight min-h-screen text-textDark">
      <Navbar />
      <main className="pt-20">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
