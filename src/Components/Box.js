import React, { useState } from 'react';

import { Vector3 } from 'three';

import { useFrame } from '@react-three/fiber';
import { useSpring, animated, config } from '@react-spring/three'

const MyRotatingBox = ({ data: { size, color, phi, theta }, radius }) => {
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState(false);

  const myMesh = React.useRef();
  const spring = useSpring({ 
    scale: active ? 1.5 : 1,
    color: hover ? "red" : color,
    config: config.slow,
  });

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.y = a / 2;
  });

  const pos = new Vector3();
  pos.setFromSphericalCoords(radius + size/2, phi, theta)

  return (
    <animated.mesh 
      ref={myMesh} 
      scale={spring.scale} 
      position={pos} 
      onClick={() => {setActive(!active); console.log(myMesh)}} 
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
      castShadow
    >
      <boxGeometry args={[size, size, size]} />
      <animated.meshStandardMaterial color={spring.color} />
    </animated.mesh>
  );
}

export default MyRotatingBox;