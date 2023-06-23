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
        Media education is becoming increasingly important in today´s society.
        With the proliferation of media and technology, we are constantly
        bombarded with information, and it´s essential that we are equipped with
        the skills to navigate this complex landscape.
      </p>
      <p className="pt-2 text-black bg-white p-6 dark:text-white dark:bg-black">
        Media education can help us become critical consumers of media by
        teaching us how to analyze, evaluate, and interpret media messages. By
        understanding how media is constructed and how it influences our
        perceptions, we can become more discerning viewers and listeners.
      </p>
      <p className="pt-2 text-black bg-white p-6 dark:text-white dark:bg-black">
        Media education also empowers us to create our own media, giving us the
        tools to express ourselves and tell our own stories. By learning how to
        produce and distribute media, we can participate in the creation of our
        own culture and shape the world around us.
      </p>
      <p className="pt-2 text-black bg-white p-6 dark:text-white dark:bg-black">
        Overall, media education is crucial for navigating our media-saturated
        world. It helps us become informed and active citizens, capable of
        engaging with and shaping the media landscape around us.
      </p>
    </div>
  );
}
