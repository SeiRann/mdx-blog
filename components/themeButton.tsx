import { toggleTheme } from "./themeSwitcher";
export const themeButton = () => {
  return (
    <button
      className="p-5 bg-blue-background rounded-md m-5"
      onClick={toggleTheme}
    >
      Theme
    </button>
  );
};
