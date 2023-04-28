import { STATUS } from "../../constants/status.constants";

export const authInitState = {
    status: STATUS.idle,
    user: null,
    values: null,
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};