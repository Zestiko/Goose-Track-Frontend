import { STATUS } from "constants/status.constants";

export const userInitialState = {

    status: STATUS.idle,
    user: {userName: "", email:""},
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};