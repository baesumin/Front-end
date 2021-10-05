import { useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';

const Bulb = (props) => {
  const ref = useRef();
  const { scene } = useThree();
  useEffect(() => {
    if (scene.lights) {
      scene.light.push(ref);
    } else {
      scene.light = [ref];
    }
  }, []);
  return (
    <mesh {...props} ref={ref}>
      <pointLight
        castShadow
        shadowMapHeight={2 ** 10}
        shadowMapWidth={2 ** 10}
        shadow-radius={10}
      />
      <sphereBufferGeometry args={[0.2, 20, 20]} />
      <meshPhongMaterial emissive="white" />
    </mesh>
  );
};

export default Bulb;
