import React from "react";
import { Container } from "../styles/Container";
import { Table } from "../styles/HomePage";

const Products = () => {
  return (
    <Container>
      <h2>Listado de productos</h2>
      <Table>
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody></tbody>
      </Table>
    </Container>
  );
};

export default Products;
