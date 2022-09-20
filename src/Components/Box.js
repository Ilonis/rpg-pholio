import React from 'react';

import { useFrame } from '@react-three/fiber'

const MyRotatingBox = ({ data: { size, color } }) => {
  const myMesh = React.useRef();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.y = a / 2;
  });


  return (
    <mesh ref={myMesh} position={[0, size, 0]} castShadow>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default MyRotatingBox;