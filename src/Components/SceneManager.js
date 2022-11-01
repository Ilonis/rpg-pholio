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
      <Shop position={[w * 1.25, -h * 0.1, 10]}/>
      <Tower position={[w * 2.5, 0, -10]} />
    </Suspense>
  )
}

export default SceneManager;