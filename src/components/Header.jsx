import { Container } from "../styles/Container";
import { Nav } from "../styles/Nav";
import { LinkHeader, StyledLink } from "../styles/StyledLink";

const Header = () => {
  return (
    <Nav>
      <Container>
        <LinkHeader to={"/"}>
          Crud Redux Project with Styled Components
        </LinkHeader>
      </Container>
      <StyledLink to="/products/new">Agregar Productos</StyledLink>
    </Nav>
  );
};

export default Header;
