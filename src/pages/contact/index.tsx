import { ContactForm } from "@/components/From";
import Back from "@/components/backbutton";


export default function Contact() {
  return ( 
    <div>
      <div>
        <div className="flex text-black bg-white p-6 justify-between dark:text-white dark:bg-black">
          <Back label="Contact"></Back>
          <p>contact</p>
        </div>
        <p className="text-black bg-white p-6 dark:text-white dark:bg-black">
          Mobile +49 152 22641538 <br />
          Email lange.sebastian95@gmx.de
        </p>
      </div>
      <div className="flex"
      ><ContactForm/></div>
    </div>
)}
