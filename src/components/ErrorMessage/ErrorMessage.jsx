import styled from "styled-components";
import bp from "assets/breakpoints";
import PropTypes from "prop-types";

const { mobile } = bp;
const StyledMessage = styled.div`
  position: absolute;
  left: 75%;
  top: 50%;
  transform: translateY(-50%);
  background-color: #e57373;
  color: white;
  padding: 3px 5px;

  &:before {
    position: absolute;
    content: "";
    height: 10px;
    width: 10px;
    left: -5px;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
    background-color: #e57373;
    z-index: -1;
  }

  @media (max-width: ${mobile}) {
    margin-top: 0.5em;
    position: static;
    &:before {
      display: none;
    }
  }
`;

const ErrorMessage = ({ text }) => {
  return <StyledMessage>{text}</StyledMessage>;
};

ErrorMessage.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ErrorMessage;
