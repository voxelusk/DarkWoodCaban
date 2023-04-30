import { useGLTF } from "@react-three/drei";

const DarkWoodCaban = () => {
  const DarkWoodCaban = useGLTF(
    "./models/DarkWoodCaban/DarkWoodCaban.glb",
    true
  );

  console.log(DarkWoodCaban);

  return (
    <>
      <mesh position-y={-1} scale={0.5}>
        <primitive object={DarkWoodCaban.scene} />
      </mesh>
    </>
  );
};

export default DarkWoodCaban;
