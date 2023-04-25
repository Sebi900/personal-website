import Link from "next/link";
import anime from "animejs/lib/anime.es.js";
import Script from "next/script";

export default function NavBar() {
  return (
    <div>
      <div className="flex flex-col text-right">
        <Link
          href="/webdevelopment"
          className="border border-b-black p-6 bg-white"
        >
          webdevelopment
        </Link>
        <Link
          href="/mediaeducation"
          className="border border-b-black p-6 bg-white"
        >
          media education
        </Link>
        <Link href="/about" className="border border-b-black p-6 bg-white">
          about
        </Link>
        <Link href="/contact" className="border border-b-black p-6 bg-white">
          contact
        </Link>
        <Link
          href="/experiments"
          className="border border-b-black p-6 bg-white"
        >
          experiments
        </Link>
        <Script src="anime.min.js"></Script>
      </div>
    </div>
  );
}
