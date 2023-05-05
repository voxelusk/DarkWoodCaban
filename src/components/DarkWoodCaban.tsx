import { useGLTF } from "@react-three/drei";
import { Lights } from "./Lights";

const DarkWoodCaban = () => {
  // const { lightPosition, intensity } = useControls({
  //   lightPosition: { x: 0.25, y: 4.18, z: -5.25 },
  //   intensity: { value: 0.45 },
  // });

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

      <Lights />
    </>
  );
};

export default DarkWoodCaban;
