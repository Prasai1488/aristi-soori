import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/homePage/HomePage";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <HomePage />
      </main>
      <Footer />
    </div>
  );
};

export default App;