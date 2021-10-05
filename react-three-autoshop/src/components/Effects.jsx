import { useThree } from '@react-three/fiber';
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  GodRays
} from '@react-three/postprocessing';
import { useEffect, useState } from 'react';

const Effects = ({}) => {
  const [lights, setLights] = useState([]);
  const { scene } = useThree();
  useEffect(() => {
    if (scene.lights && scene.lights.length === 3) {
      setLights(scene.lights);
    }
  }, [scene.lights]);
  return lights ? (
    <EffectComposer>
      <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} />
      <Bloom />
      {lights.map((light) => (
        <GodRays key={light.current.uuid} sun={light.current} />
      ))}
    </EffectComposer>
  ) : null;
};

export default Effects;
