import React, { Suspense } from 'react';

import { Canvas } from '@react-three/fiber';
import { ScrollControls, Stars, Stats } from '@react-three/drei';

import DatGui, { DatColor, DatFolder, DatNumber } from 'react-dat-gui';

import './App.css';
import { MathUtils } from 'three';
import Opening from './Components/Opening';
import Shop from './Components/Shop';
import Camera from './Components/Camera';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        cameraX: -2.5,
        cameraY: 7,
        cameraZ: 30,
        targetX: -2.5,
        targetY: 15,
        targetZ: 0,
        step: 0,
      },
      step: 0,
      states: [
        {
          camera: 
          {
            position: [-2.5, 7, 30],
            target: [-2.5, 15, 0]
          }
        },
        {
          camera: 
          {
            position: [0, 115, 30],
            target: [0, 100, 0]
          }
        },
      ]
    };
  }

  handleUpdate = (newData) => {
    this.setState(prevState => ({
      data: { ...prevState.data, ...newData }
    }));
  }

  render() {
    const { data, states, step } = this.state;
    
    return (
      <div id="canvas-main">
        <Stats />
        <DatGui data={data} onUpdate={this.handleUpdate}>
          <DatFolder title="Position">
            <DatNumber path="cameraX" label='Camera X' min={-1000} max={1000} step={0.5} />
            <DatNumber path="cameraY" label='Camera Y' min={-1000} max={1000} step={0.5} />
            <DatNumber path="cameraZ" label='Camera Z' min={-1000} max={1000} step={0.5} />
          </DatFolder>
          <DatFolder title="Target">
            <DatNumber path="targetX" label='Target X' min={-1000} max={1000} step={0.5} />
            <DatNumber path="targetY" label='Target Y' min={-1000} max={1000} step={0.5} />
            <DatNumber path="targetZ" label='Target Z' min={-1000} max={1000} step={0.5} />
          </DatFolder>
          <DatNumber path="step" label='Step' min={0} max={1} step={1} />
        </DatGui>
        <Canvas 
          shadows={true}
        >
          <Camera states={states} data={data} />

          <color attach={"background"} args={["black"]} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

          <ambientLight intensity={0.3} />

          <pointLight color={"cyan"} intensity={1} distance={30} decay={2} position={[5, 5, -5]} castShadow />
          <pointLight color={"magenta"} intensity={1} distance={30} decay={2} position={[-5, 5, -5]} castShadow />
          <pointLight color={"yellow"} intensity={1} distance={30} decay={2} position={[-5, 5, 5]} castShadow />
          
          {/* <ScrollControls pages={10}> */}
          <Suspense fallback={null}>
            <Opening />
            <Shop />
          </Suspense>
          {/* </ScrollControls> */}
        </Canvas>
      </div>
    );
  }
}

export default App;
