import { USER_HAS_LOGGED_IN } from "./actions";

const initialState = {
  userIsLogin: false,
};

export const appReducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(`Payload: ${payload}`);
  switch (type) {
    case USER_HAS_LOGGED_IN: {
      return {
        ...state,
        userIsLogin: payload,
      };
    }
    default: {
      return state;
    }
  }
};
