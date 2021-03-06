import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Card from "../../molecules/Card";

const CardItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 0 1024px;
  box-sizing: border-box;
  margin: 1.2rem 1.2rem 3.4rem;
  position: relative;
  top: 0;
  align-items: center;
  justify-content: center;
`;

const UserCards = ({ data }) => {
  console.log("data", data);
  return (
    <CardItems>
      {data.map((person, index) => (
        <Card person={person} key={index} />
      ))}
    </CardItems>
  );
};

UserCards.propTypes = {
  data: PropTypes.array,
};

export default UserCards;
