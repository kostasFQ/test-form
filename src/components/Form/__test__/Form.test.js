import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "store";
 
import Form from "../Form";

test("Form", () => {
  render(
    <Provider store={store}>
      <Form />
    </Provider>
  );

  const form = document.getElementsByTagName("form")[0];
  expect(form).toBeInTheDocument();

  const inputs = document.getElementsByTagName("input");
  const dropdowns = document.getElementsByTagName("select");

  const titleInput = inputs[0];
  fireEvent.change(titleInput, { target: { value: "title" } });
  expect(titleInput).toHaveValue("title");
  
  const revardInput = inputs[3];
  fireEvent.change(revardInput, { target: { value: 5 } });
  expect(revardInput).toHaveValue(5);
  
  const [descriptionInput] = document.getElementsByTagName("textarea");
  fireEvent.change(descriptionInput, { target: { value: "description" } });
  expect(descriptionInput).toHaveValue("description");
  
  const category = dropdowns[0];
  fireEvent.change(category, { target: { value: 2 } });
  
  const option = inputs[2];
  fireEvent.click(option);

});
