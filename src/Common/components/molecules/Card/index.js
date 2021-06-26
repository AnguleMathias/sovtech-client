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

const Section = styled.section``;
const Label = styled.span`
  color: #62686d;
`;
const LabelValue = styled.span`
  color: #e9eaea;
`;

const Card = ({ person }) => {
  const { name, height, mass, gender, homeworld } = person;

  return (
    <>
      <Wrapper>
        <Section>
          <div>
            <Label>Name: </Label>
            <LabelValue>{name || "-"}</LabelValue>
          </div>
          <div>
            <Label>Height: </Label>
            <LabelValue>{height || "-"}</LabelValue>
          </div>
          <div>
            <Label>Mass: </Label>
            <LabelValue>{mass || "-"}</LabelValue>
          </div>
          <div>
            <Label>Gender: </Label>
            <LabelValue>{gender === "n/a" ? "-" : gender}</LabelValue>
          </div>
          <div>
            <Label>Homeworld: </Label>
            <LabelValue>{homeworld || "-"}</LabelValue>
          </div>
        </Section>
      </Wrapper>
    </>
  );
};

export default Card;
