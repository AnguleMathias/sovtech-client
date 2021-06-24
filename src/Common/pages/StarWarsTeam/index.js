import React from "react";
import styled from "styled-components";

import UserCards from "../../components/organisms/UserCards";

const CardsWrapper = styled.section`
  margin: 0 auto;
  max-width: 100rem;
`;

const StarWarsTeam = () => (
  <CardsWrapper>
    <UserCards />
  </CardsWrapper>
);

export default StarWarsTeam;
