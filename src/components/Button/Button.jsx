import styled from "styled-components";
import PropTypes from "prop-types";
import colors from 'assets/colors';

const StyledButton = styled.button`
  background-color: #f79e2c;
  color: #fff;
  padding: 1em 3em;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    background-color: ${colors.secondaryText};
    border: 1px solid grey;
  }
`;

const Button = (props) => {
  return <StyledButton {...props} />;
};

Button.propTypes = {
  children: PropTypes.any.isRequired,
  htmlType: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  htmlType: "",
  onClick: () => ({}),
};

export default Button;
