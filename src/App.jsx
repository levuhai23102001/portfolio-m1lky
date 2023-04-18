import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { myRoutes } from "./routes/routes";
import MainLayout from "./layouts/MainLayout";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {myRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = MainLayout;
            if (route.layout) {
              layout = route.layout;
            } else if (route.layout === null) {
              layout = Fragment;
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
