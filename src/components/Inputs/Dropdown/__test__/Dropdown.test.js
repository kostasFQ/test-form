import { render, screen, fireEvent } from "@testing-library/react";
import Dropdown from "../Dropdown";

test("Dropdown with groups", () => {
  const value = 1;
  const options = [
    { label: "one", value: 1 },
    { label: "two", value: 2 },
    { label: "tree", value: 3 },
  ];
  const onChange = jest.fn();
  const placeholder = "placeholder";
  const groups = {
    main: {
      value: {
        value: 2,
        label: "two",
      },
      label: "mail",
    },
    rest: { label: 'rest' },
  };

  render(
    <Dropdown
      value={value}
      options={options}
      onChange={onChange}
      placeholder={placeholder}
      groups={groups}
    />
  );

  const dropdown = document.getElementsByTagName("select")[0];
  expect(dropdown).toBeInTheDocument();

  fireEvent.change(dropdown, { target: { value: 2 } });
  expect(onChange).toBeCalledTimes(1);
});

test("Dropdown without groups", () => {
  const value = 1;
  const options = [
    { label: "one", value: 1 },
    { label: "two", value: 2 },
    { label: "tree", value: 3 },
  ];
  const onChange = jest.fn();
  const placeholder = "placeholder";

  render(
    <Dropdown
      value={value}
      options={options}
      onChange={onChange}
      placeholder={placeholder}
    />
  );

  const dropdown = document.getElementsByTagName("select")[0];
  expect(dropdown).toBeInTheDocument();

  fireEvent.change(dropdown, { target: { value: 2 } });
  expect(onChange).toBeCalledTimes(1);
});
