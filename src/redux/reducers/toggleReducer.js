import { OPEN, CLOSE, TOGGLE } from "../actions/types";

const initialState = {
  isOpen: false
};

const toggleReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE:
      return {
        ...state,
        isOpen: !state.isOpen
      };
    case CLOSE:
      return {
        ...state,
        isOpen: false
      };
    case OPEN:
      return {
        ...state,
        isOpen: true
      };

    default:
      return state;
  }
};

export default toggleReducer;
