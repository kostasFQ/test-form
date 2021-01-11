import styled from "styled-components";
import PropTypes from "prop-types";
import colors from "assets/colors";
import bp from "assets/breakpoints";
import ErrorMessage from "components/ErrorMessage/ErrorMessage";

const { mobile } = bp;
const StyledField = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 1vh;
  
  @media (max-width: ${mobile}) {
    min-height: 5em;
  }
  
  & > label {
    width: 73%;
    display: flex;

    @media (max-width: ${mobile}) {
      display: block;
      width: 100%;
    }

    & span {
      &:first-child {
        flex: 1;
        padding-top: 0.5em;
        text-transform: uppercase;
        color: ${colors.titleColors};
        font-weight: bold;
        min-width: 135px;
      }

      &:last-child {
        width: 75%;
      }
    }
  }
`;

const FormField = ({ children, label, error, required }) => {
  return (
    <StyledField>
      <label>
        <span>
          {label}
          {required && " *"}
        </span>
        <span>{children}</span>
      </label>
      {error && <ErrorMessage text={error} />}
    </StyledField>
  );
};

FormField.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  required: PropTypes.bool,
};

FormField.defaultProps = {
  error: undefined,
  required: false,
};

export default FormField;
