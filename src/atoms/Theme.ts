import { atom, selector, useRecoilState } from "recoil";
import { ThemeOptions } from "@material-ui/core/styles";

const Theme = atom<boolean>({
  key: "DarkTheme",
  default: ((window.localStorage.getItem("theme") ?? 'light') === 'dark') ? true : false,
});

const IsDarkTheme = selector<ThemeOptions>({
  key: "isDarkTheme",
  get: ({ get }) => {
    const isDarkTheme = get(Theme);
    if (isDarkTheme) {
      return {
        palette: {
          type: "dark",
        },
      };
    } else {
      return {
        palette: {
          type: "light",
        },
      };
    }
  },
});

const IsLightTheme = selector<ThemeOptions>({
  key: "IsLightTheme",
  get: ({ get }) => {
    const isDarkTheme = get(Theme);
    if (isDarkTheme) {
      return {
        palette: {
          type: "light",
        },
      };
    } else {
      return {
        palette: {
          type: "dark",
        },
      };
    }
  },
});

export function useStorageTheme() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setTheme] = useTheme()
  window.onstorage = function () {
    setTheme(((window.localStorage.getItem("theme") ?? 'light') === 'dark') ? true : false)
  }
}

export function useTheme() {
  return useRecoilState(Theme);
}

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  Theme,
  IsDarkTheme,
  IsLightTheme,
  useStorageTheme,
};
