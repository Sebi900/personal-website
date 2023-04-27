import { Switch } from "@headlessui/react";
import { useTheme } from "next-themes";

type ToggleView = {};

export function ToggleDarkmode(props: ToggleView) {
  const { theme, setTheme } = useTheme();

  return (
    <div className="m-8">
      <Switch
        checked={theme === "light"}
        onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="w-full relative inline-flex h-full content-center rounded-lg text-red-400 border-white border-2 border-spacing-2"
      >
        <span className="sr-only ">Toggle Lightmode/Darkmode</span>
        <div className="flex justify-around w-full relative text-white z-10 px-4">
          <span
            data-headlessui-state="on"
            className={`${theme === "dark" ? " dark:text-white" : ""}`}
          >
            Lightmode
          </span>

          <span
            className={`${
              theme === "light" ? " text-red-400" : "text-green-400"
            }`}
          >
            Darkmode
          </span>
        </div>
        <span
          aria-hidden="true"
          className={`absolute ${
            theme === "dark" ? "translate-x-full" : "-translate-x-0"
          }
            pointer-events-none text-white inline-block h-full w-[50%] py-2 transform rounded-md bg-gray-600 transition duration-300 ease-in-out `}
        ></span>
      </Switch>
    </div>
  );
}
