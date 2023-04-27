import { ToggleDarkmode } from "@/components/DarkModeButton";
import Back from "@/components/backbutton";

export default function Settings() {
  return (
    <div>
      <div className="flex text-black bg-white p-6 justify-between dark:text-white dark:bg-black">
        <Back label="Settings"></Back>
        <p>settings</p>
      </div>
      <ToggleDarkmode />
    </div>
  );
}
