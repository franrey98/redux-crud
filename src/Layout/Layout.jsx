import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";

const StyleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
`;
const StyleMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
`;

const Layout = ({ children }) => {
  return (
    <StyleDiv>
      <Header />
      <StyleMain>
        {children}
        <Footer />
      </StyleMain>
    </StyleDiv>
  );
};

export default Layout;
