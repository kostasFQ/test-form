import { render, screen } from "@testing-library/react";
import Button from "../Button";

test("onClick button", () => {
  const onClick = jest.fn();
  render(<Button onClick={onClick}>button</Button>);
  const button = screen.getByText('button');
  
  expect(button).toBeInTheDocument();

  button.click();
  expect(onClick).toBeCalledTimes(1)
});

test("default onClick button", () => {
  render(<Button>button</Button>);
  const button = screen.getByText('button');

  button.click();
  expect(button).toBeInTheDocument();
});
