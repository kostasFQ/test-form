import { createAction, createReducer } from "@reduxjs/toolkit";

export const loading = {
  start: createAction("loading_start"),
  end: createAction("loading_end"),
  error: createAction("loading_error"),
};

export const updateSubmittingStatus = createAction("update_submitting_status");

export const initialValues = {
  loading: false,
  submitted: false,
  submitting: false,
};

const submitting = (data) =>
  new Promise((res) =>
    setTimeout(() => {
      res(data);
    }, 1000)
  );

export const submitData = (data) => async (dispatch) => {
  dispatch(updateSubmittingStatus({ submitting: true, submitted: false }));

  const response = await submitting(data);
  //eslint-disable-next-line
  console.log("SUBMITTED", response);

  dispatch(updateSubmittingStatus({ submitting: false, submitted: true }));
};

const formStateReducer = createReducer(initialValues, {
  [loading.start]: (state) => ({ ...state, loading: true }),
  [loading.end]: (state) => ({ ...state, loading: false }),
  [loading.error]: (state, { payload }) => ({
    ...state,
    loading: false,
    loadingError: { ...state.loadingError, ...payload },
  }),

  [updateSubmittingStatus]: (state, action) => ({
    ...state,
    ...action.payload,
  }),
});

export default formStateReducer;
