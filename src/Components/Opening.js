import { useGLTF } from '@react-three/drei';
import React from 'react';

const Opening = () => {

  const castle = useGLTF("/Models/Castle/castle.gltf")

  return(
    <primitive 
      object={castle.scene} 
      scale={[5, 5, 5]}
    />
  )
}

export default Opening;