import React from 'react';

import { Canvas } from '@react-three/fiber';
import { Scroll, ScrollControls, Stars, Stats } from '@react-three/drei';

// import DatGui, { DatColor, DatFolder, DatNumber } from 'react-dat-gui';

import './App.css';
import Camera from './Components/Camera';
import SceneManager from './Components/SceneManager';
import MenuManager from './Components/MenuManager';
import ContentManager from './Components/ContentManager';

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
    const { data, states } = this.state;
    
    return (
      <div id="canvas-main">
        <Stats />
        {/* <DatGui data={data} onUpdate={this.handleUpdate}>
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
        </DatGui> */}
        <Canvas 
          shadows={true}
        >
          <Camera states={states} data={data} />

          <color attach={"background"} args={["black"]} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

          <ambientLight intensity={0.3} />
          
          <ScrollControls 
            pages={3.5}
            distance={0.65}
            damping={3}
            horizontal
          >
            {/* <MenuManager /> */}
            <Scroll>
              <SceneManager />
            </Scroll>
            <Scroll html>
              {/* <ContentManager /> */}
              <svg>
                <filter id="wavy2">
                  <feTurbulence x="0" y="0" baseFrequency="0.02" numOctaves="5" seed="1" />
                  <feDisplacementMap in="SourceGraphic" scale="20" />
                </filter>
              </svg>
            </Scroll>
          </ScrollControls>
        </Canvas>
      </div>
    );
  }
}

export default App;
