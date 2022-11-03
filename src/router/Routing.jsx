import { Routes, Route } from "react-router-dom";
import EditProduct from "../components/EditProduct";
import NewProduct from "../components/NewProduct";
import Products from "../components/Products";

const Routing = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Products />} />
      <Route exact path="/products/new" element={<NewProduct />} />
      <Route exact path="/products/edit/:id" element={<EditProduct />} />
    </Routes>
  );
};

export default Routing;
