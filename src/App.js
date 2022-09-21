import React from 'react';
import { MathUtils } from 'three';

import { Canvas } from '@react-three/fiber';
import { OrbitControls} from '@react-three/drei';

import DatGui, { DatColor, DatNumber } from 'react-dat-gui';

import './App.css';
import MyRotatingBox from './Components/Box.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        size: 2,
        color: "#FFFFFF",
        intensity: 1,
      }
    };
  }

  handleUpdate = newData =>
  this.setState(prevState => ({
    data: { ...prevState.data, ...newData }
  }));

  render() {
    const { data } = this.state;
    
    return (
      <div id="canvas-main">
        <DatGui data={data} onUpdate={this.handleUpdate}>
          <DatNumber path='size' label='Cube Size' min={1} max={10} step={1} />
          <DatColor path='color' label='Cube Color' />
          <DatNumber path='intensity' label='Brightness' min={1} max={10} step={1} />
        </DatGui>
        <Canvas 
          camera={{ fov: 75, near: 0.1, far: 1000, position: [15, 10, 15] }}
          shadows={true}
        >
          <OrbitControls minPolarAngle={MathUtils.degToRad(0)} maxPolarAngle={MathUtils.degToRad(85)} />

          <ambientLight intensity={0.1} />
          <pointLight color={"cyan"} intensity={data.intensity} distance={30} decay={2} position={[5, data.size * 2, -5]} castShadow />
          <pointLight color={"magenta"} intensity={data.intensity} distance={30} decay={2} position={[-5, data.size * 2, -5]} castShadow />
          <pointLight color={"yellow"} intensity={data.intensity} distance={30} decay={2} position={[-5, data.size * 2, 5]} castShadow />
          
          <MyRotatingBox data={data} />
          <mesh rotation={[MathUtils.degToRad(-90), 0, 0]} receiveShadow>
            <planeGeometry args={[150, 150]} />
            <meshStandardMaterial color={"white"} />
          </mesh>
        </Canvas>
      </div>
    );
  }
}

export default App;
