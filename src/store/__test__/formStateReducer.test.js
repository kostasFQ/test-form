import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import formStateReducer, {
  initialValues,
  loading as loading_action,
  submitData,
  updateSubmittingStatus,
} from "store/formStateReducer";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const data = {
  name: "Joe",
  lastName: "Doe",
};

describe("form state reducer", () => {
  test("should return the initial state", () => {
    const reducer = formStateReducer(undefined, {});
    expect(reducer).toEqual(initialValues);
  });

  test("submit is fired", async () => {
    const store = mockStore(initialValues);
    await store.dispatch(submitData(data));
    const actions = store.getActions();

    expect(actions[0]).toEqual(
      updateSubmittingStatus({ submitting: true, submitted: false })
    );
    expect(actions[1]).toEqual(
      updateSubmittingStatus({ submitting: false, submitted: true })
    );
  });

  test('update loading state to "true"', () => {
    const reducer = formStateReducer(initialValues, loading_action.start());
    expect(reducer).toEqual({ ...initialValues, loading: true });
  });

  test('update loading state to "false"', () => {
    const reducer = formStateReducer(initialValues, loading_action.end());
    expect(reducer).toEqual({ ...initialValues, loading: false });
  });

  test("set loading error", () => {
    const errorData = {
      status: 111,
      message: "some error",
      url: "http://api.com",
    };
    const reducer = formStateReducer(
      initialValues,
      loading_action.error(errorData)
    );
    expect(reducer).toEqual({
      ...initialValues,
      loading: false,
      loadingError: errorData,
    });
  });
});
