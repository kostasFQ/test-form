import { render } from "@testing-library/react";
import FormField from "../FormField";

test("FormField", () => {
  render(
    <FormField label="title" error={"error"} required>
      <input />
    </FormField>
  );

  const fromBlock = document.getElementsByTagName("div")[0];
  expect(fromBlock).toBeInTheDocument();
});
