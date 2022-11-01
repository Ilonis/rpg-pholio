import { useSpring, animated } from '@react-spring/three';
import { Html, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useState } from 'react';
import Menu from './Menu';



const AnimatedDiv = animated(({ opacity, children }) => {
  return (
    <div id="menu" style={{opacity: opacity}}>
      {children}
    </div>
  );
});

const MenuManager = () => {
  const [shown, setShown] = useState(false);

  const data = useScroll();
  const spring = useSpring({
    opacity: shown ? 1 : 0
  })

  useFrame(() => {
    setShown(data.visible(1 / 10, 1));
  });

  return (
    <Html
      as="div"
      wrapperClass="navWrap"
    >
      <AnimatedDiv { ...spring }>
        <Menu />
      </AnimatedDiv>
    </Html>
  )
}

export default MenuManager;