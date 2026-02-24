export enum Theme {
  light,
  dark,
}

export const toggleTheme = () => {
  if (document.documentElement.getAttribute("data-theme") === "gruvbox-dark") {
    document.documentElement.setAttribute(
      "data-theme",
      switchTheme(Theme.light),
    );
  } else {
    document.documentElement.setAttribute(
      "data-theme",
      switchTheme(Theme.dark),
    );
  }
};

export const switchTheme = (theme: Theme) => {
  switch (theme) {
    case Theme.light:
      return "";
      break;
    case Theme.dark:
      return "gruvbox-dark";
      break;
    default:
      return "gruvbox-dark";
      break;
  }
};
