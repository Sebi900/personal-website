import Back from "@/components/backbutton";
import Link from "next/link";

export default function Experiments() {
  return (
    <>
      <div className="flex text-black bg-white p-6 justify-between">
        <Back label="Experiments"></Back>
        <p>experiments</p>
      </div>
      <div className="flex text-black bg-white p-6">
        <Link href="/experiments/settings">Settings</Link>
      </div>
    </>
  );
}
