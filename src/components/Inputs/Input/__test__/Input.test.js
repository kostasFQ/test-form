import { render, fireEvent } from "@testing-library/react";
import Input from "../Input";

test("Input with 'email' type ", () => {
  const value = 1;
  const onChange = jest.fn();
  const placeholder = "placeholder";
  const type = "email";

  render(
    <Input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
    />
  );

  const input = document.getElementsByTagName("input")[0];
  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute('type', 'email')

  fireEvent.change(input, { target: { value: 'value' } });
  expect(onChange).toBeCalledTimes(1);
});

test("Input with 'number' type and suffix ", () => {
  const value = 1;
  const onChange = jest.fn();
  const placeholder = "placeholder";
  const type = "number";
  const suffix = 'suffix';

  render(
    <Input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      suffix={suffix}
    />
  );

  const input = document.getElementsByTagName("input")[0];
  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute('type', 'number')

  fireEvent.change(input, { target: { value: 5 } });
  expect(onChange).toBeCalledTimes(1);
});

test("Input with 'multiple' type. Render as textArea witn 7 rows ", () => {
  const value = 1;
  const onChange = jest.fn();
  const placeholder = "placeholder";
  const type = "multiple";

  render(
    <Input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
    />
  );

  const input = document.getElementsByTagName("textarea")[0];
  expect(input).toBeInTheDocument();

  expect(input).toHaveAttribute('rows', '7')

  fireEvent.change(input, { target: { value: 'value' } });
  expect(onChange).toBeCalledTimes(1);
});
