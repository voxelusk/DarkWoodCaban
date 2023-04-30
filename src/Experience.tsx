import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function Experience() {
  return (
    <Canvas>
      <OrbitControls
        makeDefault
        maxDistance={12}
        minDistance={10}
        // minAzimuthAngle={-Math.PI / 2.5}
        // maxAzimuthAngle={-Math.PI / 10}
        // minPolarAngle={Math.PI / 2.5}
        // maxPolarAngle={Math.PI - Math.PI / 1.8}
      />

      <directionalLight position={[-4.3, 8.3, 3.0]} intensity={0.2} />

      <ambientLight intensity={0.05} />

      <mesh>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </Canvas>
  );
}

export default Experience;
