import React from "react";
import styled from "styled-components";

import StarWarsTeam from "../../../pages/StarWarsTeam";

const Wrapper = styled.div`
  background-color: #1b2c3f;
  background-position: 50%;
  background-size: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 80px 1fr 80px;
  gap: 0px 0px;
  justify-items: center;
  align-items: center;
  grid-template-areas:
    "Header"
    "Content"
    "Footer";
`;

const Header = styled.section`
  grid-area: Header;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.section`
  align-items: center;
  justify-content: center;
`;

const Footer = styled.section`
  grid-area: Footer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageTemplate = () => (
  <Wrapper>
    <Header>Star Wars Characters Logo here</Header>
    <Content>
      <StarWarsTeam />
    </Content>
    <Footer />
  </Wrapper>
);

export default PageTemplate;
