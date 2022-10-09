import React from 'react';

import { Canvas } from '@react-three/fiber';
import { Scroll, ScrollControls, Stars, Stats } from '@react-three/drei';

import DatGui, { DatColor, DatFolder, DatNumber } from 'react-dat-gui';

import './App.css';
import Camera from './Components/Camera';
import SceneManager from './Components/SceneManager';

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
          
          <ScrollControls pages={3.5}>
            <Scroll>
              <SceneManager />
            </Scroll>
            <Scroll html>
              <div className="content">
                <div id="opening" className="background">
                  <h1>Steven Gibbons</h1>
                  <h3>Web Applications Developer</h3>
                </div>
              </div>
              <div className="divider" />
              <div className="content">
                <div style={{width: "65%"}}>

                </div>
                <div id="about" className="background" style={{width: "35%"}}>
                  <h1>About</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed pulvinar proin gravida hendrerit lectus a. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Malesuada fames ac turpis egestas maecenas. Commodo viverra maecenas accumsan lacus vel facilisis. Interdum velit euismod in pellentesque massa. Purus sit amet volutpat consequat mauris nunc congue. Et malesuada fames ac turpis egestas integer eget aliquet. Orci eu lobortis elementum nibh tellus molestie. Dolor sit amet consectetur adipiscing elit. Aliquet risus feugiat in ante metus. Ornare aenean euismod elementum nisi quis. Facilisis leo vel fringilla est ullamcorper eget nulla. Ornare lectus sit amet est placerat in. Aliquet risus feugiat in ante metus dictum at tempor commodo. Laoreet sit amet cursus sit amet dictum sit. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Suscipit adipiscing bibendum est ultricies. Sed pulvinar proin gravida hendrerit lectus a. Commodo viverra maecenas accumsan lacus.</p>
                  <p>Enim neque volutpat ac tincidunt. Nulla pellentesque dignissim enim sit amet venenatis. Suscipit adipiscing bibendum est ultricies integer. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Nibh tortor id aliquet lectus. Facilisi nullam vehicula ipsum a arcu cursus. Tellus cras adipiscing enim eu turpis. Non sodales neque sodales ut. Quis vel eros donec ac odio. Ut pharetra sit amet aliquam id diam maecenas. Ut consequat semper viverra nam libero justo. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Feugiat pretium nibh ipsum consequat nisl vel pretium. Pharetra convallis posuere morbi leo urna molestie at. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Arcu dui vivamus arcu felis. Urna et pharetra pharetra massa massa ultricies mi quis hendrerit. Adipiscing commodo elit at imperdiet dui accumsan sit amet.</p>
                  <p>Leo vel orci porta non pulvinar neque. Morbi non arcu risus quis varius. Purus ut faucibus pulvinar elementum integer enim neque volutpat. Arcu dictum varius duis at consectetur. Non tellus orci ac auctor. At imperdiet dui accumsan sit. Ultricies integer quis auctor elit sed vulputate mi. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Nibh tellus molestie nunc non blandit massa. Consectetur a erat nam at lectus urna duis convallis convallis. Scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant. Sagittis purus sit amet volutpat consequat. Varius morbi enim nunc faucibus a pellentesque sit amet porttitor. Etiam tempor orci eu lobortis elementum nibh tellus molestie.</p>
                </div>
              </div>
              <div className="divider" />
              <div className="content">
                <div id="blurb" className="background" style={{width: "20%"}}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed pulvinar proin gravida hendrerit lectus a. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Malesuada fames ac turpis egestas maecenas. Commodo viverra maecenas accumsan lacus vel facilisis. Interdum velit euismod in pellentesque massa. Purus sit amet volutpat consequat mauris nunc congue. Et malesuada fames ac turpis egestas integer eget aliquet. Orci eu lobortis elementum nibh tellus molestie. Dolor sit amet consectetur adipiscing elit. Aliquet risus feugiat in ante metus. Ornare aenean euismod elementum nisi quis. Facilisis leo vel fringilla est ullamcorper eget nulla. Ornare lectus sit amet est placerat in. Aliquet risus feugiat in ante metus dictum at tempor commodo. Laoreet sit amet cursus sit amet dictum sit. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Suscipit adipiscing bibendum est ultricies. Sed pulvinar proin gravida hendrerit lectus a. Commodo viverra maecenas accumsan lacus.</p>
                </div>
                <div style={{width: "45%"}}>
                  
                </div>
                <div id="contact" className="background" style={{width: "35%"}}>
                  <h1>Contact</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed pulvinar proin gravida hendrerit lectus a. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Malesuada fames ac turpis egestas maecenas. Commodo viverra maecenas accumsan lacus vel facilisis. Interdum velit euismod in pellentesque massa. Purus sit amet volutpat consequat mauris nunc congue. Et malesuada fames ac turpis egestas integer eget aliquet. Orci eu lobortis elementum nibh tellus molestie. Dolor sit amet consectetur adipiscing elit. Aliquet risus feugiat in ante metus. Ornare aenean euismod elementum nisi quis. Facilisis leo vel fringilla est ullamcorper eget nulla. Ornare lectus sit amet est placerat in. Aliquet risus feugiat in ante metus dictum at tempor commodo. Laoreet sit amet cursus sit amet dictum sit. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Suscipit adipiscing bibendum est ultricies. Sed pulvinar proin gravida hendrerit lectus a. Commodo viverra maecenas accumsan lacus.</p>
                </div>
              </div>
            </Scroll>
          </ScrollControls>
        </Canvas>
      </div>
    );
  }
}

export default App;
