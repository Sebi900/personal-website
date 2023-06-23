import Link from "next/link";
import "animate.css";
import anime from "animejs";

// var elements = document.querySelectorAll("div");

// anime({
//   targets: elements,
//   translateX: 270,
// });

export default function NavBar() {
  return (
    <div>
      <div className="flex flex-col text-right lg:flex-row lg:justify-between">
        <Link
          href="/about"
          className="border border-b-black p-6 bg-white lg:w-full lg:text-center dark:bg-black dark:text-white dark:border-b-white"
        >
          about
        </Link>
        <Link
          href="/contact"
          className="border border-b-black p-6 bg-white lg:w-full lg:text-center dark:bg-black dark:text-white dark:border-b-white"
        >
          contact
        </Link>
        <Link
          href="/experiments"
          className="border border-b-black p-6 bg-white lg:w-full lg:text-center dark:bg-black dark:text-white dark:border-b-white"
        >
          experiments
        </Link>
      </div>
    </div>
  );
}
