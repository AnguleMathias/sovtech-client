import React, { useState } from "react";
import styled from "styled-components";

import Modal from "../../molecules/Modal";

const CardLayout = styled.div``;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.6rem 1.6rem 2.4rem 1.6rem;
  border-radius: 5px;
  cursor: pointer;
  margin: 1rem;
  background-color: #303e48;
  box-shadow: 1px 8px 24px rgba(0, 0, 0, 0.5);

  &:hover {
    background-color: #303e48;
  }
`;
const Section = styled.section``;
const UserImage = styled.div`
  height: 10rem;
  width: 10rem;
`;
const GroupedLabel = styled.div``;
const Label = styled.span`
  color: #62686d;
`;
const LabelValue = styled.span`
  color: #e9eaea;
`;
const CardLabelValue = styled(LabelValue)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;

const Card = ({ person, close }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { name, height, mass, gender, homeworld } = person;

  const toggleModalState = () => {
    setIsOpen(!isOpen);
  };

  return (
    <CardLayout onClick={toggleModalState}>
      <Wrapper>
        <Section>
          <UserImage />
          <GroupedLabel>
            <CardLabelValue>{name || "-"}</CardLabelValue>
          </GroupedLabel>
        </Section>
      </Wrapper>
      {isOpen && (
        <Modal
          closeable
          isOpen={isOpen}
          name="Person"
          onClose={close}
          paddingTop={10}
          title={name || "-"}
          width={700}
        >
          <Wrapper>
            <Section>
              <GroupedLabel>
                <Label>Height: </Label>
                <LabelValue>{height || "-"}</LabelValue>
              </GroupedLabel>
              <GroupedLabel>
                <Label>Mass: </Label>
                <LabelValue>{mass || "-"}</LabelValue>
              </GroupedLabel>
              <GroupedLabel>
                <Label>Gender: </Label>
                <LabelValue>{gender === "n/a" ? "-" : gender}</LabelValue>
              </GroupedLabel>
              <GroupedLabel>
                <Label>Homeworld: </Label>
                <LabelValue>{homeworld || "-"}</LabelValue>
              </GroupedLabel>
            </Section>
          </Wrapper>
        </Modal>
      )}
    </CardLayout>
  );
};

export default Card;
