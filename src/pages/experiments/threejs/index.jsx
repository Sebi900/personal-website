import Back from "@/components/backbutton";
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from '@react-three/drei'

export default function Threejs() {
  return (
    <div>
      <div className="flex text-black bg-white p-6 justify-between dark:text-white dark:bg-black">
        <Back label="threejs"></Back>
        <p>Three.js</p>
      </div >
       <div id="canvas" style={{ height: "90vw", width: "90vw"}}>
         <Canvas 
              camera={ {
                  fov: 45,
                  near: 0.1,
                  far: 200,
                  position: [ - 4, 3, 6 ]
              } }
          >
   
          <OrbitControls makeDefault />

          <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
          <ambientLight intensity={ 0.5 } />

          <mesh scale={ 2 }>
            <sphereGeometry />
            <meshStandardMaterial color="blue" wireframe />
          </mesh>  
          <mesh scale={ 1 }>
            <sphereGeometry />
            <meshStandardMaterial color="red" />
          </mesh>  
  
        </Canvas>
        </div> 
    </div>
  );
}


