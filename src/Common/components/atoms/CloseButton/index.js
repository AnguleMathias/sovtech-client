import styled from "styled-components";

const CloseButton = styled.span`
  cursor: pointer;
  display: block;
  background: transparent url(/images/icon_close_medium.svg) 50% no-repeat;
  width: 30px;
  min-width: 30px;
  max-width: 30px;
  height: 30px;
  border-radius: 15px;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export default CloseButton;
