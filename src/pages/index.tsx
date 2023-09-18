import NavBar from "@/components/Navbar";
import Image from "next/image";
import foto from '@/public/profilpic.jpg'
import Cursor from '@/components/Cursor';

export default function Home() {
  return (
    <main>
      <NavBar></NavBar>
      <div className="flex">
        <div className="container">
        <Image
                className='sebi'
                src={foto}
                alt='foto'
                priority>
             </Image>
        <div className="overlay">
          {/* <div className="text">d</div> */}
        </div>
        </div>
        <p className="mainpagetypo">evelopment</p>
      </div>
      <Cursor/>
    </main>
  );
}
