import { usePlane } from '@react-three/cannon';
import React from 'react';
import { RepeatWrapping, TextureLoader } from 'three';

export const Ground = (props) => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    ...props
  }));

  const texture = new TextureLoader().load(process.env.PUBLIC_URL + '/grass.jpg');
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.set(240, 240);

  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
      <meshStandardMaterial map={texture} attach="material" />
    </mesh>
  );
};
