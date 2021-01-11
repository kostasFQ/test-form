import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import dataReducer, {
  saveToStore,
  saveDataToStore,
  initialValues,
} from "store/dataReducer";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore(initialValues);
const obj = {
  test: "value",
};

describe("data reducer", () => {
  test("should return the initial state", () => {
    const reducer = dataReducer(undefined, {});
    expect(reducer).toEqual(initialValues);
  });

  test("update values", () => {
    const reducer = dataReducer({}, saveDataToStore(obj));

    expect(reducer).toEqual({
      ...obj,
    });
  });

  test("action is fired", () => {
    store.dispatch(saveToStore(obj));
    const actions = store.getActions();

    expect(actions[0]).toEqual(saveDataToStore(obj));
  });
});
