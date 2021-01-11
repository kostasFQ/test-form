import { render } from "@testing-library/react";
import FormBlock from "../FormBlock";

test("FormBlock", () => {
  render(
    <FormBlock title='title'>
      <div>some div</div>
    </FormBlock>
  );

  const fromBlock = document.getElementsByTagName("section")[0];
  expect(fromBlock).toBeInTheDocument();
});
