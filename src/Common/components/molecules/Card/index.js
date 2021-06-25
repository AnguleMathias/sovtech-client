import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.6rem 1.6rem 2.4rem 1.6rem;
  border-radius: 5px;
  cursor: pointer;
  margin: 1rem;
  background: #232f37;
  box-shadow: 1px 8px 24px rgba(0, 0, 0, 0.5);

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

const Card = ({ person }) => {
  const { name, height, mass, gender, homeworld } = person;

  return (
    <Wrapper>
      <Header>Card header</Header>
      <Section>
        <div>name: {name}</div>
        <div>height: {height}</div>
        <div>mass: {mass}</div>
        <div>gender: {gender}</div>
        <div>homeworld: {homeworld}</div>
      </Section>
    </Wrapper>
  );
};

export default Card;
