import Back, { BackAbout } from "@/components/backbutton";
import { send } from "process";

export default function Mediaeducation() {
  return (
    <div>
      <div className="flex text-black bg-white p-6 justify-between w-screen dark:text-white dark:bg-black">
        <BackAbout></BackAbout>
        <p>mediaeducation</p>
      </div>
      <p className="text-black bg-white p-6 dark:text-white dark:bg-black">
        In today's society, media education is increasingly important. The constant influx of information due to the proliferation of media and technology necessitates that we possess the necessary skills to navigate this intricate landscape.
      </p>
      <p className="pt-2 text-black bg-white p-6 dark:text-white dark:bg-black">
       By teaching us how to analyze, evaluate, and interpret media messages, media education enables us to become critical consumers of media. Understanding the construction and impact of media allows us to become discerning viewers and listeners.
      </p>
      <p className="pt-2 text-black bg-white p-6 dark:text-white dark:bg-black">
        Furthermore, media education empowers us to create our own media, providing us with the means to express ourselves and share our unique stories. Through learning how to produce and disseminate media, we can actively contribute to shaping our culture and influencing the world.
      </p>
      <p className="pt-2 text-black bg-white p-6 dark:text-white dark:bg-black">
        Overall, media education is crucial for navigating our media-saturated
        world. It helps us become informed and active citizens, capable of
        engaging with and shaping the media landscape around us.
      </p>
    </div>
  );
}
