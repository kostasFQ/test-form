import styled from "styled-components";
import PropTypes from "prop-types";
import colors from "assets/colors";

const { mainText, secondaryText } = colors;
const StyledDropdown = styled.select`
  height: 2.5em;
  border: solid 1px ${secondaryText};
  border-radius: 0;
  width: 100%;
  padding-left: 1em;
  color: ${(props) => (props.active ? mainText : secondaryText)};
`;

const Dropdown = ({ value, options, onChange, placeholder, groups }) => {
  if (groups) {
    const {
      main: { label: mainLabel, value: mainValue },
      rest: { label: restLabel },
    } = groups;

    return (
      <StyledDropdown
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        active
      >
        <optgroup label={mainLabel}>
          <option value={mainValue.value}>{mainValue.label}</option>
        </optgroup>
        <optgroup label={restLabel}>
          {options
            .filter(({ value }) => value !== mainValue.value)
            .map(({ value, label }) => (
              <option value={value} key={value}>
                {label}
              </option>
            ))}
        </optgroup>
      </StyledDropdown>
    );
  }

  return (
    <StyledDropdown
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      active={!!value}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map(({ value, label }) => (
        <option value={value} key={value}>
          {label}
        </option>
      ))}
    </StyledDropdown>
  );
};

Dropdown.propTypes = {
  value: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  groups: PropTypes.shape({
    main: PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.shape({
        id: PropTypes.number,
        label: PropTypes.string,
      }),
    }),
    rest: PropTypes.shape({
      label: PropTypes.string.isRequired,
    }),
  }),
};

Dropdown.defaultProps = {
  value: '',
  options: [],
  onChange: () => ({}),
  placeholder: "Enter a value",
  groups: undefined,
};

export default Dropdown;
