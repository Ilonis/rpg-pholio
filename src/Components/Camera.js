import { animated, useSpring } from '@react-spring/three';
import { PerspectiveCamera } from '@react-three/drei';
import React from 'react';

const Camera = ({ states, data }) => {
  const { position } = useSpring({
    position: states[data.step].camera.position,
    target: states[data.step].camera.target,
    config: { mass: 1, tension: 250, friction: 25 },
  })

  const AnimatedPerspective = animated(PerspectiveCamera);

  return(
    <>
      <AnimatedPerspective fov={75} near={0.1} far={10000} position={position} makeDefault />
    </>
  )

}

export default Camera;