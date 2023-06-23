import React from "react";
import { Switch } from "@headlessui/react";
import { useSizeStore } from "@/pages/stores/styleStore";

type ToggleView = {};

export function ToggleView(props: ToggleView) {
  const { isFontSizeBig, setSize } = useSizeStore();
  return (
    <div className="m-8">
      <Switch.Group>
        <Switch
          checked={!isFontSizeBig}
          onChange={setSize}
          className="w-full relative inline-flex h-full content-center rounded-lg text-red-400 border-white border-2 border-spacing-2"
        >
          <span className="sr-only ">Toggle size of components</span>
          <div className="flex justify-around w-full relative text-white z-10 px-4">
            <span className={`${isFontSizeBig ? " dark:text-white" : ""}`}>
              Normal
            </span>

            <span
              className={`${
                !isFontSizeBig ? " text-red-400" : "text-green-400"
              }`}
            >
              Big
            </span>
          </div>
          <span
            aria-hidden="true"
            className={`absolute ${
              isFontSizeBig ? "translate-x-full" : "-translate-x-0"
            }
            pointer-events-none text-white inline-block h-full w-[50%] py-2 transform rounded-md bg-gray-600 transition duration-300 ease-in-out `}
          ></span>
        </Switch>
      </Switch.Group>
    </div>
  );
}
