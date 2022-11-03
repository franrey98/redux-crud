import Header from "./components/Header";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import { Container } from "./styles/Container";
import Products from "./components/Products";
import Layout from "./Layout/Layout";
import Routing from "./router/Routing";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routing />
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
