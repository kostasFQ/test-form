import { createReducer, createAction } from "@reduxjs/toolkit";

export const initialValues = {
  me: {
    email: "ashley.hernandez@hussa.rs",
    id: 4,
    lastname: "Hernandez",
    name: "Ashley",
  },
  items: [],
  persons: [],
};

export const saveDataToStore = createAction("save_data_to_store");

export const saveToStore = (data) => (dispatch) => {
  dispatch(saveDataToStore(data));
};

const dataReducer = createReducer(initialValues, {
  [saveDataToStore]: (state, action) => ({
      ...state,
      ...action.payload,
  }),
});

export default dataReducer;
