import { toggleTheme } from "./themeSwitcher";
export default function ThemeButton() {
  return (
    <button
      className="p-5 w-24 bg-blue-background rounded-md m-5"
      onClick={toggleTheme}
    >
      Theme
    </button>
  );
}
