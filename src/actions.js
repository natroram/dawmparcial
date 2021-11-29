export const USER_HAS_LOGGED_IN = "USER_HAS_LOGGED_IN";
export const userHasLoggedIn = (islogin) => ({
  type: USER_HAS_LOGGED_IN,
  payload: islogin,
});
