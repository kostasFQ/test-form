import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "assets/colors";
import bp from "assets/breakpoints";

const { mobile } = bp;
const StyledInput = styled.div`
  & > input {
    height: 2.5em;
    border: solid 1px ${colors.secondaryText};
    border-radius: 0;
    width: ${(props) => (props.hasSuffix ? "30%" : "100%")};
    padding-left: 1em;

    @media (max-width: ${mobile}) {
      width: 100%;
    }

    &::placeholder {
      color: lightgrey;
    }
  }

  & > span {
    padding-left: 0.5em;
    flex: 1;
    white-space: nowrap;
  }
`;

const StyledTextArea = styled.textarea`
  border: solid 1px ${colors.secondaryText};
  border-radius: 0;
  width: 100%;
  padding: 1em 0 0 1em;
  resize: none;

  &::placeholder {
    color: lightgrey;
  }
`;

const Input = ({ placeholder, onChange, value, type, suffix, ...rest }) => {
  if (type === "multiple") {
    return (
      <StyledTextArea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows="7"
        {...rest}
      />
    );
  }

  if (type === "number") {
    return (
      <StyledInput hasSuffix={!!suffix}>
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          type={type}
          min={0}
          {...rest}
        />
        <span>{suffix}</span>
      </StyledInput>
    );
  }

  return (
    <StyledInput>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        type={type}
        {...rest}
      />
      <span>{suffix}</span>
    </StyledInput>
  );
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  type: PropTypes.string,
  suffix: PropTypes.string,
};

Input.defaultProps = {
  placeholder: "Enter a value",
  value: "",
  type: "",
  suffix: "",
};

export default Input;
