import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router";
import routes from "./components/routes";
import Footer from "./components/Footer"

const App = () => {
  return (
    <main>
      <Navbar />
      <Routes>
        {routes.map((route) => {
          const Page = route.element;

          return (
            <Route key={route.path} path={route.path} element={<Page />} />
          );
        })}
      </Routes>
      <Footer/>
    </main>
  );
};

export default App;
