import React, { Suspense } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router";
import routes from "./components/routes";
import Footer from "./components/Footer"

const App = () => {
  return (
    <main>
      <Navbar />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-black text-white">Loading...</div>}>
        <Routes>
          {routes.map((route) => {
            const Page = route.element;

            return (
              <Route key={route.path} path={route.path} element={<Page />} />
            );
          })}
        </Routes>
      </Suspense>
      <Footer/>
    </main>
  );
};

export default App;
