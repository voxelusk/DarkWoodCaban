import { useGLTF } from "@react-three/drei";
import { Lights } from "./Lights";

const DarkWoodCaban = () => {

  const DarkWoodCaban = useGLTF(
    "./models/DarkWoodCaban/DarkWoodCaban.glb",
    true
  );

  DarkWoodCaban.scene.traverse((mesh) => {
    mesh.castShadow = true;
    mesh.receiveShadow = true;
  });


  return (
    <>
      <mesh position-y={-1} scale={0.5} receiveShadow>
        <primitive object={DarkWoodCaban.scene} />
      </mesh>
      <fog attach="fog" args={['#020302', 5, 24]} />

      <Lights />
    </>
  );
};

export default DarkWoodCaban;
