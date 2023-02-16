import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function TheBox() {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 5, 2]} intensity={1} />
      <mesh rotation={[90, 0, 15]}>
        <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
        <meshLambertMaterial attach="material" color="red" />
      </mesh>
    </Canvas>
  );
}

export default TheBox;
