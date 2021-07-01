import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import ReactModal from "react-modal";

import CloseButton from "../../atoms/CloseButton";

const overlayStyles = css`
  position: fixed;
  top: 0;
  background-color: rgba(20, 21, 23, 0.8);
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 99;
  transition: opacity 250ms ease-in-out;
  opacity: 0;
  &[class*="after-open"] {
    opacity: 1;
  }
  &[class*="before-close"] {
    opacity: 0;
  }
`;

const ModalBox = styled(ReactModal)`
  position: absolute;
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
  background-color: #303e48;
  border-radius: 0.8rem;
  color: #ffffff;
  top: calc(50% - 1.6rem);
  left: calc(50% - 1.6rem);
  right: auto;
  bottom: auto;
  box-shadow: 0 9px 100px 50px rgba(0, 0, 0, 0.86);
  margin: 1.6rem calc(-50% + 1.6rem) 1.6rem 1.6rem;
  transform: translate(-50%, -36%);
  transition: transform 0.36s ease-out;
  outline: none;

  &[class*="after-open"] {
    transform: translate(-50%, -50%);
  }
  &[class*="before-close"] {
    transform: translate(-50%, -36%);
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2.4rem;
  padding-bottom: 1.2rem;
  > *:first-child {
    flex: 1;
  }
`;
const StyledHeading = styled.section`
  font-size: 3rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: #e9eaea;
  text-align: center;
`;

const Content = styled.div`
  overflow: auto;
  scrollbar-color: #232f37 #303e48;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    background-color: #303e48;
  }

  &::-webkit-scrollbar-corner {
    background-color: #303e48;
  }
`;
const PositionedCloseButton = styled(CloseButton)`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
`;

const StyledReactModal = styled(({ className, ...props }) => (
  <ModalBox overlayClassName={className} closeTimeoutMS={250} {...props} />
))`
  ${overlayStyles};
`;

// SEE http://reactcommunity.org/react-modal/accessibility/
if (document.getElementById("app")) {
  // Wrapper for testing
  ReactModal.setAppElement("#app");
}

const Modal = ({
  children,
  closeable,
  onClose,
  onCloseRequest,
  title,
  width,
  name,
  ...props
}) => {
  const onCloseHandler = () => {
    onCloseRequest();
    onClose();
  };
  return (
    <StyledReactModal
      {...props}
      ariaHideApp={false}
      name={name}
      contentLabel={name || "Modal"}
      hasHeader={title || closeable}
      onRequestClose={onCloseHandler}
      shouldCloseOnOverlayClick
      width={width}
    >
      <>
        {title && closeable && (
          <Header>
            <StyledHeading>{title}</StyledHeading>
            {closeable && (
              <PositionedCloseButton
                id="modal-header-icon-close"
                onClick={onCloseHandler}
              />
            )}
          </Header>
        )}
        <Content>{children}</Content>
      </>
    </StyledReactModal>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  closeable: PropTypes.bool,
  name: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  onCloseRequest: PropTypes.func,
  title: PropTypes.any,
  width: PropTypes.number,
};

Modal.defaultProps = {
  onClose: () => {},
  onCloseRequest: () => {},
};

export default Modal;
