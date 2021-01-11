import axios from "axios";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { loading } from "store/formStateReducer";
import { saveToStore } from "store/dataReducer";

export const useApiCall = (props) => {
  const dispatch = useDispatch();

  const fetch = async (queries) => {
    try {
      const { data } = await axios({
        method: queries.method,
        url: queries.url,
        data: queries.data,
      });

      return { [queries.storageKey]: data };
    } catch (err) {
      dispatch(
        loading.error({
          status: err.response.status,
          message: err.message,
          url: queries.url,
        })
      );
    }
  };

  const makeCall = useCallback(async () => {
    dispatch(loading.start());

    Array.isArray(props)
      ? await (
          await Promise.all(
            props.map(async (i) => {
              const responseObjest = await fetch(i);

              dispatch(saveToStore(responseObjest));
              return true;
            })
          )
        ).reduce((obj, curr) => {
          return { ...obj, ...curr };
        }, {})
      : await fetch(props);

      dispatch(loading.end());
  }, [props, dispatch]);

  return makeCall;
};
