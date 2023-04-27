import { STATUS } from "../../constants/status.constants";

export const authInitState = {
    status: STATUS.idle,
    // data: null,
    values: null,
    token: null,
    isLoggedIn: false,
    // isRefreshing: false,
};