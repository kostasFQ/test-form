import { render, screen, fireEvent } from "@testing-library/react";
import DateInput from "../DateInput";

test("date input", () => {
  const value = undefined;
  const onChange = jest.fn();

  render(<DateInput value={value} onChange={onChange} />);
  const input = document.getElementsByTagName("input")[0];

  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute("type", "date");

  const date = "2020-05-24";
  fireEvent.change(input, { target: { value: date } });
  
  expect(input).toHaveValue(date);
});
