import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.6rem 1.6rem 2.4rem 1.6rem;
  border: 1px solid #62686d;
  border-radius: 5px;
  cursor: pointer;
  

  &:hover {
    background-color: #303e48;
  }
`;

const Header = styled.header`
  padding-top: 0.75em;
  padding-bottom: 0.75em;
  padding-left: 1em;
  padding-right: 1em;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
`;
const Section = styled.section``;

const Card = () => {
  return (
    <Wrapper>
      <Header>Card header</Header>
      <Section>
        <div>name:</div>
        <div>height:</div>
        <div>mass:</div>
        <div>gender:</div>
      </Section>
    </Wrapper>
  );
};

export default Card;
