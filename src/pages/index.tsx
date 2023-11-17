import NavBar from "@/components/Navbar";
import Image from "next/image";
import Cursor from '@/components/Cursor';
import ThreeScene from "@/components/ThreeScene";
import { ToggleDarkmode } from "@/components/DarkModeButton";
import { ToggleView } from "@/components/SizeButton";

export default function Home() {
  return (
    <main>
      <NavBar></NavBar>
      <div className="flex">
        <div className="container">
        {/* <Image
                className='sebi'
                src='/profilpic.jpg'
                width={2800}
                height={2000}
                alt='foto'
                priority>
             </Image> */}
        {/* <div className="overlay"> */}
          {/* <div className="text">d</div> */}
        {/* </div> */}
        </div>
        {/* <p className="mainpagetypo">evelopment</p> */}
        <div className="threejs">
          <ThreeScene />
        </div>
        <div className="button">
          <ToggleDarkmode/>
                <ToggleView />
        </div>
      </div>
      {/* <Cursor/> */}
    </main>
  );
}
