import Back from "@/components/backbutton";
import Link from "next/link";

export default function Experiments() {
  return (
    <>
      <div className="flex text-black bg-white p-6 justify-between dark:text-white dark:bg-black">
        <Back label="Experiments"></Back>
        <p>experiments</p>
      </div>
      <div className="flex text-black bg-white p-6 dark:text-white dark:bg-black">
        <Link href="/experiments/settings">Settings</Link>
      </div>
      {/* <div className="flex text-black bg-white p-6 dark:text-white dark:bg-black">
        <Link href="/experiments/scrollpage">Scrollbar</Link>
      </div> */}
      <div className="flex text-black bg-white p-6 dark:text-white dark:bg-black">
        <Link href="/experiments/particle">Particle</Link>
      </div>
      <div className="flex text-black bg-white p-6 dark:text-white dark:bg-black">
        <Link href="/experiments/threejs">three.js</Link>
      </div>
    </>
  );
}
