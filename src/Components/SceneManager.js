import { useThree } from '@react-three/fiber';
import React, { Suspense } from 'react';
import Opening from './Opening';
import Shop from './Shop';
import Tower from './Tower';

const SceneManager = () => {
  const { width: w, height: h } = useThree((state) => state.viewport)
  return (
    <Suspense fallback={null}>
      <Opening />
      <Shop position={[0, -h * 1.3, 10]}/>
      <Tower position={[0, -h * 2.5, -10]} />
    </Suspense>
  )
}

export default SceneManager;