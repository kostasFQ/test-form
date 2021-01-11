import { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Input from "components/Inputs/Input";

const StyledTimePicker = styled.div`
  border-radius: 0;
  height: 36px;
  min-width: 70px;
  display: flex;
`;

const TimePicker = ({ value, onChange }) => {
  const [_h, _m] = value.split(":");
  const [hours, updateHours] = useState(_h);
  const [minutes, updateMinutes] = useState(_m);

  const updateHoursAction = (h) => {
    updateHours(updateValue(h, 12));

    if (!minutes) {
      updateMinutesAction('0');
    }
  };

  const updateMinutesAction = (m) => {
    updateMinutes(updateValue(m, 60));
  };

  const updateValue = (value, limit) => {
    const parsedValue = Number(value.slice(-2));

    switch (true) {
      case parsedValue > limit:
        return `${limit}`;
      case parsedValue < 10:
        return `0${parsedValue}`;
      default:
        return `${parsedValue}`;
    }
  };

  useEffect(() => {
    hours && minutes && onChange(`${hours}:${minutes}`);
  }, [hours, minutes]);

  return (
    <StyledTimePicker>
      <Input
        type="number"
        value={hours}
        onChange={updateHoursAction}
        placeholder="--"
        max="12"
      />
      <Input
        type="number"
        value={minutes}
        onChange={updateMinutesAction}
        placeholder="--"
        max="60"
      />
    </StyledTimePicker>
  );
};

TimePicker.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

TimePicker.defaultProps = {
  value: "",
  onChange: () => ({}),
};

export default TimePicker;
