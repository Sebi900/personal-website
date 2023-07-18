import { OrbitControls } from '@react-three/drei'

export default function Experience()
{

    return <>

        <OrbitControls makeDefault />

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />
        
        <mesh>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>         

    </>
}