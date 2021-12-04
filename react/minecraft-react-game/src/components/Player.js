import { useSphere } from '@react-three/cannon';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react';
import { Vector3 } from 'three';
import { PointerLockControls } from './PointerLockControls';
import { usePlayerControls } from './usePlayerControls';

const SPEED = 5;

export const Player = (props) => {
  const { camera } = useThree();
  const { moveForward, moveBackward, moveLeft, moveRight, jump } = usePlayerControls();
  const [ref, api] = useSphere(() => ({
    mass: 1,
    type: 'Dynamic',
    position: [0, 10, 0],
    ...props
  }));

  const velocity = useRef([0, 0, 0]);
  const curPosition = useRef([0, 0, 0]);

  useEffect(() => {
    api.velocity.subscribe((v) => (velocity.current = v));
    api.position.subscribe((p) => (curPosition.current = p));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [api.velocity]);

  useFrame(() => {
    camera.position.copy(
      new Vector3(curPosition.current[0], curPosition.current[1], curPosition.current[2])
    );
    const direction = new Vector3();

    const frontVector = new Vector3(0, 0, (moveBackward ? 1 : 0) - (moveForward ? 1 : 0));
    const sideVector = new Vector3((moveLeft ? 1 : 0) - (moveRight ? 1 : 0), 0, 0);

    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)
      .applyEuler(camera.rotation);

    api.velocity.set(direction.x, velocity.current[1], direction.z);

    if (jump && Math.abs(velocity.current[1].toFixed(2)) < 0.05) {
      api.velocity.set(velocity.current[0], 10, velocity.current[2]);
    }
  });

  return (
    <>
      <PointerLockControls />
      <mesh ref={ref}>
        <boxBufferGeometry />
      </mesh>
    </>
  );
};
