import { render, screen } from "@testing-library/react";
import RadioBlock from "../RadioBlock";

test("RadioBlock", () => {
  const value = 1;
  const onChange = jest.fn();
  const options = [
    { label: "one", value: 1 },
    { label: "two", value: 2 },
    { label: "tree", value: 3 },
  ];
  const blockName = "someBlock";

  render(
    <RadioBlock
      value={value}
      onChange={onChange}
      options={options}
      blockName={blockName}
    />
  );

  const radioBlock = document.getElementsByTagName("fieldset")[0];
  expect(radioBlock).toBeInTheDocument();
  const radio = screen.getByText('two');
  radio.click();
  
  expect(onChange).toBeCalledTimes(1);
});
