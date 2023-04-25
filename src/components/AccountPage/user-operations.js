import axios from 'axios';
import {
  fetchInProgress,
  fetchSuccess,
  fetchError,
} from "./userSlice";

axios.defaults.baseURL = 'https://goose-track-backend.herokuapp.com';

export const fetchUser = () => async dispatch => {
    try {
        dispatch(fetchInProgress());
        const response = await axios.get("/user/current")
        dispatch(fetchSuccess(response.data))
    } catch (e) {
        dispatch(fetchError(e.message))
 }
};

export const updateUserProfile = (formData) => async (dispatch) => {
  try {
    dispatch(fetchInProgress());

    const response = await axios.patch("/user/info", formData);

    dispatch(fetchSuccess(response.data));
  } catch (error) {
    dispatch(fetchError(error.message));
  }
};
