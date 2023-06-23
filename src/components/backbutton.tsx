import { FiChevronLeft } from "react-icons/fi";
import Link from "next/link";

type Props = {
  label?: string;
  sendTo?: string;
  classNames?: string;
  children?: string;
  href?: string;
};

export default function Back(props: Props) {
  return (
    <Link href={props.sendTo ?? "/"}>
      <FiChevronLeft className="w-6 h-6" />
    </Link>
  );
}

export function BackAbout(props: Props) {
  return (
    <Link href={props.sendTo ?? "/about"}>
      <FiChevronLeft className="w-6 h-6" />
    </Link>
  );
}
