
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="flex justify-between items-center p-4 bg-cyan-900 text-white dark:bg-gray-700">
      <h1 className="font-bold text-xl">task manager</h1>
      <div className="flex gap-4">
      </div>
    </nav>
  );
}
