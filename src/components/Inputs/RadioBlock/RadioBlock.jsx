import styled from "styled-components";
import PropTypes from "prop-types";

const StyledRadioBlock = styled.fieldset`
  padding: 0;
  border: none;
  display: flex;
  align-items: center;
  
  & > label {
    display: flex;
    padding: 0.5em;
    flex: 1;
    cursor: pointer;
    white-space: nowrap;

    & > input {
      margin-right: 0.5em;
    }
  }
`;

const RadioBlock = ({ value, options, onChange, blockName }) => {
  return (
    <StyledRadioBlock>
      {options.map(({ value: v, label }) => (
        <label key={label}>
          <input
            type="radio"
            value={v}
            name={blockName}
            onChange={(e) => onChange(e.target.value)}
            checked={v === value}
          />
          <span>{label}</span>
        </label>
      ))}
    </StyledRadioBlock>
  );
};

RadioBlock.propTypes = {
  value: PropTypes.any,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any,
      label: PropTypes.string,
    })
  ),
  onChange: PropTypes.func.isRequired,
};

RadioBlock.defaultProps = {
  value: "",
  options: [],
};

export default RadioBlock;
