import React, { useState } from 'react';

import { useFrame } from '@react-three/fiber';
import { useSpring, animated, config } from '@react-spring/three'

const MyRotatingBox = ({ data: { size, color } }) => {
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


  return (
    <animated.mesh 
      ref={myMesh} 
      scale={spring.scale} 
      position={[0, size, 0]} 
      onClick={() => {setActive(!active)}} 
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