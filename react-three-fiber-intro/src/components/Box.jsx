import { useFrame, useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

const handlePointerDown = (e) => {
  e.object.active = true;
  if (window.activeMesh) {
    scaleDown(window.activeMesh);
    window.activeMesh.active = false;
  }
  window.activeMesh = e.object;
};

const handlePointerEnter = (e) => {
  e.object.scale.x = 1.5;
  e.object.scale.y = 1.5;
  e.object.scale.z = 1.5;
};
const handlePointerLeave = (e) => {
  if (!e.object.active) {
    scaleDown(e.object);
  }
};
const scaleDown = (object) => {
  object.scale.x = 1;
  object.scale.y = 1;
  object.scale.z = 1;
};

const Box = (props) => {
  const ref = useRef();
  const texture = useLoader(THREE.TextureLoader, '/wood.jpg');
  useFrame((state) => {
    ref.current.rotation.y += 0.01;
  });
  return (
    <mesh
      ref={ref}
      {...props}
      castShadow
      onPointerEnter={handlePointerEnter}
      onPointerDown={handlePointerDown}
      onPointerLeave={handlePointerLeave}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshPhysicalMaterial map={texture} />
    </mesh>
  );
};

export default Box;
