import React from "react";
import styled from "styled-components";

import Card from "../../molecules/Card";

const CardItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 0 1024px;
  box-sizing: border-box;
  margin: 0 1.2rem 3.4rem;
  position: relative;
  top: 0;
  background-color: #232f37;
`;

const UserCards = () => {
  return (
    <CardItems>
      <Card />
      <Card />
      <Card />
      <Card />
    </CardItems>
  );
};

export default UserCards;
