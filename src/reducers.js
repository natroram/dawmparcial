import { USER_HAS_LOGGED_IN } from "./actions";
import { CATEGORY_FILTER_SELECTED } from "./actions";
import { SORTER_FILTER_SELECTED } from "./actions";
import { CATEGORY_FILTER_UNSELECTED } from "./actions";
import { SORTER_FILTER_UNSELECTED } from "./actions";

const initialState = {
  userIsLogin: false,
  categoryFilters: ["Todo"],
  sorterFilters: ["Categoria"],
};

export const appReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_HAS_LOGGED_IN: {
      return {
        ...state,
        userIsLogin: payload,
      };
    }
    case CATEGORY_FILTER_SELECTED: {
      console.log(payload);
      return {
        ...state,
        categoryFilters: [...state.categoryFilters, payload],
      };
    }
    case SORTER_FILTER_SELECTED: {
      return {
        ...state,
        sorterFilters: [...state.sorterFilters, payload],
      };
    }
    case CATEGORY_FILTER_UNSELECTED: {
      return {
        ...state,
        categoryFilters: state.categoryFilters.filter(
          (filter) => filter !== payload
        ),
      };
    }
    case SORTER_FILTER_UNSELECTED: {
      return {
        ...state,
        sorterFilters: state.sorterFilters.filter(
          (filter) => filter !== payload
        ),
      };
    }
    default: {
      return state;
    }
  }
};
