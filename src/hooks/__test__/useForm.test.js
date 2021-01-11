import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../useForm";
import validationSchema from "helpers/validationSchema";

test("hook useForm", () => {
  const { result } = renderHook(() => useForm({ validationSchema }));
  const callback = jest.fn();

  act(() => {
    result.current.updateField("title", "some value");
  });
  expect(result.current.values.title).toBe("some value");

  act(() => {
    result.current.handleSubmit(callback);
  });
  expect(Object.keys(result.current.errors).length).toEqual(3);

  act(() => {
    result.current.updateField("description", "some description");
  });
  act(() => {
    result.current.updateField("coordinator", { id: 1 });
  });
  act(() => {
    result.current.updateField("date", "2020-12-12T20:20");
  });

  act(() => {
    result.current.handleSubmit(callback);
  });

  expect(Object.keys(result.current.errors).length).toEqual(0);
});

test("hook without validation", () => {
  const { result } = renderHook(() => useForm({}));
  expect(result.current.validate).toBeTruthy();
});
