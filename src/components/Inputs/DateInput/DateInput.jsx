import { useEffect, useState } from "react";
import styled from "styled-components";
import m from "moment";
import TimePicker from "./TimePicker";
import RadioBlock from "components/Inputs/RadioBlock";
import colors from "assets/colors";

const StyledDateInput = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 820px) {
    display: block;
  }

  & > div {
    display: flex;
    align-items: center;

    &:first-child {
      min-width: 30%;

      & > input {
        border: solid ${colors.secondaryText} 1px;
        height: 2.5em;
        min-width: 140px;
      }

      & > div {
        margin: 0 0.5em;
      }
    }

    &:last-child {
      margin: 0.3em 0;
      flex: 1;
    }
  }
`;

const timeShift = 12;

const DateInput = ({ value, onChange }) => {
  
  const [_date, _time] = value
    ? m(value).format("YYYY-MM-DD hh:mm").split(" ")
    : [];
  const [afterNoon, updateDayPart] = useState(false);
  const [date, updateDate] = useState(_date);
  const [time, updateTime] = useState(_time);

  useEffect(() => {
    if (value && m(value).hour() > timeShift) {
      updateDayPart(true);
    }
  }, [value]);

  useEffect(() => {
    let newTime = time;

    if (afterNoon && time) {
      const [hours, minutes] = time.split(":");
      newTime = [
        hours === "12" ? "00" : Number(hours) + timeShift,
        minutes,
      ].join(":");
    }

    if (date && newTime) {
      onChange(`${date}T${newTime}`);
    }
  }, [afterNoon, time, date, value]);

  return (
    <StyledDateInput>
      <div>
        <input
          value={date || ""}
          type="date"
          onChange={(e) => updateDate(e.target.value)}
        />
        <div>at</div>
      </div>
      <div>
        <TimePicker value={time} onChange={updateTime} />
        <RadioBlock
          blockName="time"
          value={afterNoon}
          options={[
            { value: false, label: "AM" },
            { value: true, label: "PM" },
          ]}
          onChange={(v) => updateDayPart(v === "true")}
        />
      </div>
    </StyledDateInput>
  );
};

export default DateInput;
