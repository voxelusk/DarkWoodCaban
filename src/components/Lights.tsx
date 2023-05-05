export const Lights = () => {
  const LIGHTS_INTENSITY = 0.2;

  return (
    <group>
      <pointLight
        color="white"
        intensity={LIGHTS_INTENSITY}
        position={[0.25, 4.18, -5.25]}
        scale={0.2}
        castShadow
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
        shadow-normalBias={0.02}
      />

      <pointLight
        color="white"
        intensity={LIGHTS_INTENSITY}
        position={[-2.76, 4.18, -5.25]}
        scale={0.2}
        castShadow
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
        shadow-normalBias={0.02}
      />

      <pointLight
        color="white"
        intensity={LIGHTS_INTENSITY}
        position={[0.25, 4.18, 0.25]}
        scale={0.2}
        castShadow
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
        shadow-normalBias={0.02}
      />

      <pointLight
        color="white"
        intensity={LIGHTS_INTENSITY}
        position={[-5.76, 4.18, 0.25]}
        scale={0.2}
        castShadow
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
        shadow-normalBias={0.02}
        shadow-cameraFar={2}
      />

      <pointLight
        color="white"
        intensity={LIGHTS_INTENSITY}
        position={[-5.76, 4.18, -2.75]}
        scale={0.2}
        castShadow
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
        shadow-normalBias={0.02}
      />
    </group>
  );
};
