import Back from "@/components/backbutton";
import { useState } from "react";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import Checkbox from "@/components/checkbox";
import Link from "next/link";

export default function Contact() {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [suffix, setSuffix] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [eMail, setEMail] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [female, setFemale] = useState(false);
  const [nonBinary, setNonBinary] = useState(false);
  const [checked, setChecked] = useState(false);
  function withdraw() {
    console.log("withdraw");
  }
  return (
    <div>
      <div className="flex text-black bg-white p-6 justify-between dark:text-white dark:bg-black">
        <Back label="Contact"></Back>
        <p>contact</p>
      </div>
      <p className="text-black bg-white p-6 dark:text-white dark:bg-black">
        Mobile +49 152 22641538 <br />
        Email lange.sebastian95@gmx.de
      </p>
      <div>
        <div className="grid lg:grid-cols-2 lg:gap-4">
          <TextInput
            name="lastName"
            required={true}
            label="Last Name"
            value={lastName}
            onChange={(e: any) => setLastName(e.target.value)}
          ></TextInput>
          <TextInput
            name="firstName"
            label="First Name*"
            value={firstName}
            onChange={(e: any) => setFirstName(e.target.value)}
          ></TextInput>
        </div>
        <div className="grid lg:grid-cols-2 lg:gap-4">
          <TextInput
            name="phoneNumber"
            label="Phone Number"
            value={phoneNumber}
            onChange={(e: any) => setPhoneNumber(e.target.value)}
          ></TextInput>
          <TextInput
            name="eMail"
            label="E-mail*"
            value={eMail}
            onChange={(e: any) => setEMail(e.target.value)}
          ></TextInput>
        </div>
        {/* <Checkbox
          name="TestBox"
          label="I verify that the provided information above is truthful"
          checked={checked}
          onChange={() => setChecked(!checked)}
        ></Checkbox> */}
        <div className="flex justify-center gap-8 mt-8 lg:gap-4">
          <Link href="/apply">
            {/* <a>
              <Button>back</Button>
            </a> */}
          </Link>
          <Link href="/terms">
            {/* <a>
              <Button>next</Button>
            </a> */}
          </Link>
        </div>
      </div>
    </div>
  );
}
