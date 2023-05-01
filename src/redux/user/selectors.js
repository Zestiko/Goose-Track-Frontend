export const selectorAuthStatus = state => state.user.status;
export const selectorIsLoggedIn = state => state.user.isLoggedIn;
export const selectorIsRefreshing = state => state.user.isRefreshing;
export const selectorGetUser = state => state.user.user;
export const selectorGetUserAvatar = state => state.user.user.avatar;
export const selectorGetUserName = state => state.user.user.userName;
