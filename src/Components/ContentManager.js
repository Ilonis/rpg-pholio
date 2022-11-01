import { animated, useSpring } from '@react-spring/three';
import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useState } from 'react';

const AnimatedDiv = animated(({ style, opacity, children }) => {
  return (
    <div className="content" style={{...style, opacity: opacity}}>
      {children}
    </div>
  );
});

const ContentManager = () => {
  const [shownOpening, setShownOpening] = useState(false);
  const [shownAbout, setShownAbout] = useState(false);
  const [shownContact, setShownContact] = useState(false);

  const data = useScroll();
  const { opOpening, opAbout, opContact } = useSpring({
    opOpening: shownOpening ? 1 : 0,
    opAbout: shownAbout ? 1 : 0,
    opContact: shownContact ? 1 : 0,
  })

  useFrame(() => {
    setShownOpening(data.visible(0, 1 / 200));
    setShownAbout(data.visible(1 / 2, 1 / 4));
    setShownContact(data.visible(7 / 8, 1 / 8));
  });

  return (
    <>
      <AnimatedDiv opacity={opOpening}>
        <div id="opening">
          <div className="parchment" />
          <div className="contain">
            <h1>Steven Gibbons</h1>
            <h3>Web Applications Developer</h3>
          </div>
        </div>
      </AnimatedDiv>
      <AnimatedDiv opacity={opAbout} style={{justifyContent: "flex-end"}}>
        <div id="about">
          <div className="parchment" />
          <div className="contain">
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed pulvinar proin gravida hendrerit lectus a. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Malesuada fames ac turpis egestas maecenas. Commodo viverra maecenas accumsan lacus vel facilisis. Interdum velit euismod in pellentesque massa. Purus sit amet volutpat consequat mauris nunc congue. Et malesuada fames ac turpis egestas integer eget aliquet. Orci eu lobortis elementum nibh tellus molestie. Dolor sit amet consectetur adipiscing elit. Aliquet risus feugiat in ante metus. Ornare aenean euismod elementum nisi quis. Facilisis leo vel fringilla est ullamcorper eget nulla. Ornare lectus sit amet est placerat in. Aliquet risus feugiat in ante metus dictum at tempor commodo. Laoreet sit amet cursus sit amet dictum sit. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Suscipit adipiscing bibendum est ultricies. Sed pulvinar proin gravida hendrerit lectus a. Commodo viverra maecenas accumsan lacus.</p>
            <p>Enim neque volutpat ac tincidunt. Nulla pellentesque dignissim enim sit amet venenatis. Suscipit adipiscing bibendum est ultricies integer. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Nibh tortor id aliquet lectus. Facilisi nullam vehicula ipsum a arcu cursus. Tellus cras adipiscing enim eu turpis. Non sodales neque sodales ut. Quis vel eros donec ac odio. Ut pharetra sit amet aliquam id diam maecenas. Ut consequat semper viverra nam libero justo. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Feugiat pretium nibh ipsum consequat nisl vel pretium. Pharetra convallis posuere morbi leo urna molestie at. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Arcu dui vivamus arcu felis. Urna et pharetra pharetra massa massa ultricies mi quis hendrerit. Adipiscing commodo elit at imperdiet dui accumsan sit amet.</p>
            <p>Leo vel orci porta non pulvinar neque. Morbi non arcu risus quis varius. Purus ut faucibus pulvinar elementum integer enim neque volutpat. Arcu dictum varius duis at consectetur. Non tellus orci ac auctor. At imperdiet dui accumsan sit. Ultricies integer quis auctor elit sed vulputate mi. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Nibh tellus molestie nunc non blandit massa. Consectetur a erat nam at lectus urna duis convallis convallis. Scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant. Sagittis purus sit amet volutpat consequat. Varius morbi enim nunc faucibus a pellentesque sit amet porttitor. Etiam tempor orci eu lobortis elementum nibh tellus molestie.</p>
          </div>
        </div>
      </AnimatedDiv>
      <AnimatedDiv opacity={opContact} style={{justifyContent: "space-between"}}>
        <div id="blurb">
          <div className="parchment" />
          <div className="contain">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed pulvinar proin gravida hendrerit lectus a. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Malesuada fames ac turpis egestas maecenas. Commodo viverra maecenas accumsan lacus vel facilisis. Interdum velit euismod in pellentesque massa. Purus sit amet volutpat consequat mauris nunc congue. Et malesuada fames ac turpis egestas integer eget aliquet. Orci eu lobortis elementum nibh tellus molestie. Dolor sit amet consectetur adipiscing elit. Aliquet risus feugiat in ante metus. Ornare aenean euismod elementum nisi quis. Facilisis leo vel fringilla est ullamcorper eget nulla. Ornare lectus sit amet est placerat in. Aliquet risus feugiat in ante metus dictum at tempor commodo. Laoreet sit amet cursus sit amet dictum sit. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Suscipit adipiscing bibendum est ultricies. Sed pulvinar proin gravida hendrerit lectus a. Commodo viverra maecenas accumsan lacus.</p>
          </div>
        </div>
        <div id="contact">
          <div className="parchment" />
          <div className="contain">
            <h1>Contact</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed pulvinar proin gravida hendrerit lectus a. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Malesuada fames ac turpis egestas maecenas. Commodo viverra maecenas accumsan lacus vel facilisis. Interdum velit euismod in pellentesque massa. Purus sit amet volutpat consequat mauris nunc congue. Et malesuada fames ac turpis egestas integer eget aliquet. Orci eu lobortis elementum nibh tellus molestie. Dolor sit amet consectetur adipiscing elit. Aliquet risus feugiat in ante metus. Ornare aenean euismod elementum nisi quis. Facilisis leo vel fringilla est ullamcorper eget nulla. Ornare lectus sit amet est placerat in. Aliquet risus feugiat in ante metus dictum at tempor commodo. Laoreet sit amet cursus sit amet dictum sit. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Suscipit adipiscing bibendum est ultricies. Sed pulvinar proin gravida hendrerit lectus a. Commodo viverra maecenas accumsan lacus.</p>
          </div>
        </div>
      </AnimatedDiv>
    </>
  )
}

export default ContentManager;