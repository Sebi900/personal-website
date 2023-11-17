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
       <div id="canvas" style={{ height: "50vw", width: "100vw"}}>
         <Canvas orthographic camera={{ zoom: 100, position: [0, 0, 5]}}
          >
   
          <OrbitControls makeDefault />

          <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
          <ambientLight intensity={ 0.5 } />

          <mesh scale={ 5 } position={ [ 0, 0, 1 ] }>
            <planeBufferGeometry />
            <meshStandardMaterial color="blue" wireframe />
          </mesh>  
          <mesh scale={ 5 } position={ [ 0, 0, 2 ] }>
            <planeBufferGeometry />
            <meshStandardMaterial color="green" wireframe />
          </mesh> 
          <mesh scale={ 5 } position={ [ 0, 0, 3 ] }>
            <planeBufferGeometry />
            <meshStandardMaterial color="red" wireframe />
          </mesh> 

        </Canvas>
        </div> 
    </div>
  );
}


