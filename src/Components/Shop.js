import { useGLTF, useHelper } from '@react-three/drei';
import React, { useRef } from 'react';
import { MathUtils, PointLightHelper } from 'three';

const Shop = ({ position }) => {

  const shop = useGLTF("/Models/Shop/scene.gltf");

  const potion = useRef();
  useHelper(potion, PointLightHelper, 1, "cyan");

  return(
    <group position={position}>
      <primitive 
        object={shop.scene} 
        scale={[5, 5, 5]}
        rotation-y={MathUtils.degToRad(-45)}
      />
      <pointLight color={"red"} intensity={1} distance={20} decay={2} position={[-25, 10, 0]}/>
      <pointLight color={"red"} intensity={1} distance={20} decay={2} position={[1, 10, -4]}/>
      <pointLight color={"red"} intensity={1} distance={20} decay={2} position={[-14, 10, -11]}/>
      <pointLight color={"blue"} intensity={1} distance={20} decay={2} position={[1, 10, -1.5]}/>
      <pointLight ref={potion} color={"#FFC039"} intensity={1} distance={50} decay={2} position={[0, 30, 0]}/>
    </group>
  )
}

export default Shop;