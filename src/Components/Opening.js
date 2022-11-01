import { useGLTF } from '@react-three/drei';
import React from 'react';

const Opening = () => {

  const castle = useGLTF("/Models/Castle/castle.gltf")

  return(
    <>
      <pointLight color={"cyan"} intensity={1} distance={30} decay={2} position={[5, 5, -5]} castShadow />
      <pointLight color={"magenta"} intensity={1} distance={30} decay={2} position={[-5, 5, -5]} castShadow />
      <pointLight color={"yellow"} intensity={1} distance={30} decay={2} position={[-5, 5, 5]} castShadow />
      
      <primitive 
        object={castle.scene} 
        scale={[5, 5, 5]}
      />
    </>
  )
}

export default Opening;