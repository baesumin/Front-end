import { useThree } from '@react-three/fiber';
import React, { useEffect, useLayoutEffect, useRef } from 'react';

export const Camera = (props) => {
  const ref = useRef();
  const { set, size } = useThree();

  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.aspect = size.width / size.height;
      ref.current.updateProjectionMatrix();
    }
  }, [size, props]);

  useEffect(() => {
    set({ camera: ref.current });
  }, []);

  return <perspectiveCamera ref={ref} {...props} />;
};
