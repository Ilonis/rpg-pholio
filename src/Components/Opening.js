import { useGLTF } from '@react-three/drei';
import React, { useRef } from 'react';

// const fragmentShader = `...`;
// const vertexShader = `...`;

// const Cube = () => {
//   const mesh = useRef();

//   return (
//     <mesh ref={mesh} scale={[5, 5, 5]}>
//       <boxGeometry args={[1, 1, 1]} />
//       <shaderMaterial
//         fragmentShader={fragmentShader}
//         vertexShader={vertexShader}
//       />
//     </mesh>
//   );
// };

const Opening = () => {

  const castle = useGLTF("/Models/Castle/castle.gltf")

  return(
    <>
      <pointLight color={"cyan"} intensity={1} distance={30} decay={2} position={[5, 5, -5]} castShadow />
      <pointLight color={"magenta"} intensity={1} distance={30} decay={2} position={[-5, 5, -5]} castShadow />
      <pointLight color={"yellow"} intensity={1} distance={30} decay={2} position={[-5, 5, 5]} castShadow />

      {/* <Cube /> */}

      {/* <primitive 
        object={castle.scene} 
        scale={[5, 5, 5]}
      /> */}
    </>
  )
}

export default Opening;