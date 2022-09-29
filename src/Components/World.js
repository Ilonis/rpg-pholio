import { Sphere, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React from 'react';
import MyRotatingBox from './Box';

const World = ({ data }) => {
  const groupRef = React.useRef();
  const radius = 500;
  const scroll = useScroll();

  useFrame(() => {
    //groupRef.current.rotation.z = -scroll.offset
  })

  return (
    <group ref={groupRef} position={[0, -radius, 0]}>
      <Sphere args={[radius, 50, 50]}>
        <meshStandardMaterial color={"green"}/>
      </Sphere>
      <MyRotatingBox radius={radius} data={data} />
    </group>
  )

}

export default World;