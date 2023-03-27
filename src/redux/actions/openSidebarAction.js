import { CLOSE, OPEN, TOGGLE } from "./types";

export const openSidebar = () => {
  return {
    type: OPEN
  };
};

export const closeSidebar = () => {
  return {
    type: CLOSE
  };
};

export const toggleSidebar = () => {
  return {
    type: TOGGLE
  };
};
