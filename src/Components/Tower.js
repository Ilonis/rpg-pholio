import { useGLTF } from '@react-three/drei';
import React from 'react';

const Tower = ({ position }) => {

  const tower = useGLTF("/Models/Tower/scene.gltf")

  return(
    <primitive 
      object={tower.scene} 
      position={position}
      scale={[5, 5, 5]}
    />
  )
}

export default Tower;