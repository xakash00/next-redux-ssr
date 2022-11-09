import { THEME_CHANGE } from "./types";

export const switchMode = (mode) => {
    return {
        type: THEME_CHANGE,
        payload: mode,
    };
};