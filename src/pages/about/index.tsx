import Back from "@/components/backbutton";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <div className="flex text-black bg-white p-6 justify-between dark:text-white dark:bg-black">
        <Back label="About"></Back>
        <p>about</p>
      </div>
      <p className="text-black bg-white border border-b-black p-6 dark:text-white dark:bg-black">
        I am a mediaeducator and web developer with a diploma in cultrual- and
        media education from HS Merseburg. I offer designing and coding of
        microsites, portfolio sites, complex websites and webshops. My
        specialities are CMS driven websites using state of the art technologies
        with userbility, expandability, performance and SEO in mind. I am
        committed to providing easy-to-handle websites for my clients and their
        users. My work is based on web standards and semantically built code and
        I put great emphasize on well structured content. I develop all projects
        in close cooperation with my clients and I have recourse to an extensive
        network of designers, programmers, writers and photographers, if
        required.
      </p>
      <div className="flex flex-col mt-0 text-right lg:flex-row lg:justify-between">
        <Link
          href="/webdevelopment"
          className="border border-b-black p-6 bg-white lg:w-full lg:text-center dark:bg-black dark:text-white dark:border-b-white"
        >
          webdevelopment
        </Link>
        <Link
          href="/mediaeducation"
          className="border border-b-black p-6 bg-white lg:w-full lg:text-center dark:bg-black dark:text-white dark:border-b-white"
        >
          media education
        </Link>
      </div>
    </div>
  );
}
