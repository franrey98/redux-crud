import React from "react";
import { Button } from "../styles/Button";
import {
  Label,
  Input,
  FormContainer,
  TitleProduct,
  Form,
  StyleDiv,
} from "../styles/Form";

const NewProduct = () => {
  return (
    <StyleDiv>
      <TitleProduct>Agregar Nuevo Producto</TitleProduct>
      <Form>
        <FormContainer>
          <Input
            placeholder="Nombre Producto"
            type="text"
            name="name"
            id="name"
          />
        </FormContainer>
        <FormContainer>
          <Input
            placeholder="Precio Producto"
            type="number"
            name="price"
            id="price"
          />
        </FormContainer>
        <Button type="submit">Agregar Producto</Button>
      </Form>
    </StyleDiv>
  );
};

export default NewProduct;
