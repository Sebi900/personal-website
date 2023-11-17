import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";


export default function App() {
  
  const gltf = useLoader(GLTFLoader, "./andreafont.glb");
  console.log(gltf)

  return (
    <div className="App">
      {/* <Canvas>
        <Suspense fallback={null}>
          <OrbitControls />
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas> */}
    </div>
  );
}