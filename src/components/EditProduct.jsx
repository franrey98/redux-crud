import React from "react";
import { Button } from "../styles/Button";
import {
  Input,
  FormContainer,
  TitleProduct,
  Form,
  StyleDiv,
} from "../styles/Form";

const EditProduct = () => {
  return (
    <StyleDiv>
      <TitleProduct>Editar Producto</TitleProduct>
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
        <Button type="submit">Guardar Cambios</Button>
      </Form>
    </StyleDiv>
  );
};

export default EditProduct;
