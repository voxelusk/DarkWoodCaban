import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import DarkWoodCaban from "./components/DarkWoodCaban";

import { Perf } from "r3f-perf";

function Experience() {
  return (
    <Canvas shadows>
      <Perf position="top-left" />
      <OrbitControls
        makeDefault
        // maxDistance={12}
        // minDistance={10}
        // minAzimuthAngle={-Math.PI / 2.5}
        // maxAzimuthAngle={-Math.PI / 10}
        // minPolarAngle={Math.PI / 2.5}
        // maxPolarAngle={Math.PI - Math.PI / 1.8}
      />

      <ambientLight intensity={0.1} />

      <DarkWoodCaban />
    </Canvas>
  );
}

export default Experience;
