import Back from "@/components/backbutton";

export default function Particle() {
  return (
    <div>
      <div className="flex text-black bg-white p-6 justify-between dark:text-white dark:bg-black">
        <Back label="Particle"></Back>
        <p>Particle</p>
      </div>
      <p>Hello</p>
    </div>
  );
}