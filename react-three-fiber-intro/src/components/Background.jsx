import { useLoader, useThree } from '@react-three/fiber';
import { useMemo } from 'react';
import * as THREE from 'three';

const Background = (props) => {
  const texture = useLoader(THREE.TextureLoader, '/autoshop.jpg');

  const { gl } = useThree();

  const formatted = useMemo(
    () =>
      new THREE.WebGLCubeRenderTarget(texture.image.height).fromEquirectangularTexture(
        gl,
        texture
      ),
    []
  );

  return <primitive attach="background" object={formatted.texture} />;
};

export default Background;
