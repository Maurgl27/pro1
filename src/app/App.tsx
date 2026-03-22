import React from "react";
import Layout from "../components/layout/Layout";
import AppRouter from "./AppRouter";
const App = () => {
  return (
    <>
      <Layout>
        <AppRouter />
      </Layout>
    </>
  );
};
export default App;
