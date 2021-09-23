import i18n from "i18next";
import {
  CHANGE_LANGUAGE,
  ADD_LANGUAGE,
  LanguageActionTypes,
} from "./languageActions";

export interface LanguageState {
  language: "en" | "zh";
  langaugeList: { name: string; code: string }[];
}

const defaultState: LanguageState = {
  language: "zh",
  langaugeList: [
    {
      name: "中文",
      code: "zh",
    },
    {
      name: "English",
      code: "en",
    },
  ],
};

 //eslint-disable-next-line
export default (state = defaultState, action: LanguageActionTypes) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      i18n.changeLanguage(action.payload);
      return { ...state, language: action.payload };
    case ADD_LANGUAGE:
      return {
        ...state,
        langaugeList: [...state.langaugeList, action.payload],
      };
    default:
      return state;
  }
};
