import React from 'react';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, ScrollControls, Stars, Stats } from '@react-three/drei';

import DatGui, { DatColor, DatFolder, DatNumber } from 'react-dat-gui';

import './App.css';
import World from './Components/World';
import { MathUtils } from 'three';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        size: 2,
        color: "#FFFFFF",
        // Position
        phi: 0,
        theta: 0,
      }
    };
  }

  handleUpdate = (newData) => {
    this.setState(prevState => ({
      data: { ...prevState.data, ...newData }
    }));
  }

  render() {
    const { data } = this.state;
    
    return (
      <div id="canvas-main">
        <Stats />
        <DatGui data={data} onUpdate={this.handleUpdate}>
          <DatNumber path='size' label='Cube Size' min={1} max={10} step={1} />
          <DatColor path='color' label='Cube Color' />
          <DatFolder label='Position'>
            <DatNumber path='phi' label='Phi' min={MathUtils.degToRad(-45)} max={MathUtils.degToRad(45)} step={MathUtils.degToRad(1)} />
            <DatNumber path='theta' label='Theta' min={MathUtils.degToRad(0)} max={MathUtils.degToRad(360)} step={MathUtils.degToRad(10)} />
          </DatFolder>
        </DatGui>
        <Canvas 
          onCreated={
            ({ camera }, state) => {
              camera.lookAt(0, 10, 0); 
              camera.updateProjectionMatrix();
              console.log(state)
            }
          }
          camera={{ fov: 75, near: 0.1, far: 10000, position: [20, 5, 0] }}
          shadows={true}
        >
          <OrbitControls minPolarAngle={MathUtils.degToRad(0)} maxPolarAngle={MathUtils.degToRad(85)} />

          <color attach={"background"} args={["black"]} />
          <Stars />

          <ambientLight intensity={0.1} />

          <pointLight color={"cyan"} intensity={data.intensity} distance={30} decay={2} position={[5, data.size * 2, -5]} castShadow />
          <pointLight color={"magenta"} intensity={data.intensity} distance={30} decay={2} position={[-5, data.size * 2, -5]} castShadow />
          <pointLight color={"yellow"} intensity={data.intensity} distance={30} decay={2} position={[-5, data.size * 2, 5]} castShadow />
          
          {/* <ScrollControls pages={10}> */}
            <World data={data}/>
          {/* </ScrollControls> */}
        </Canvas>
      </div>
    );
  }
}

export default App;
