import { Environment, Float, OrbitControls, ScrollControls } from '@react-three/drei'
import React, { Suspense } from 'react'
import Macbook from './Macbook'
import { Canvas } from '@react-three/fiber'
import Loader from './Loader'
import { useMediaQuery } from 'react-responsive'
import { ReactLogo } from './ReactLogo'
import { SpringBoot } from './SpringBoot'

const Hero = () => {

  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  let camera={fov:"30",position:[0,10,130]};
  let reactScale=2.1;
  let macBookScale=1;
  let springbootScale=2.1;
  
  //positions
  let macbookPosition=[0,-10,20];
  let reactPosition=[22,22,15];
  let springbootPosition=[-20,18,15];
  
  if(isMobile){
    camera={fov:"32",position:[0,10,180]};
    springbootScale=1.7
    reactScale=1.7
    reactPosition=[20,30,15];
    macbookPosition=[0,5,20];
    springbootPosition=[-18,25,15];
  }
  

  return (

    
      <Suspense fallback={<Loader />}>
    <Canvas camera={camera} >
     
    <pointLight position={[0, 4, 9]} intensity={10} />
        <ScrollControls pages={1.1}>
        {/* <Float speed={1.5}> */}
          <Macbook position={macbookPosition} scale={macBookScale}/>
        {/* </Float> */}
        </ScrollControls>

          <Float speed={1.5}>
        <ReactLogo position={reactPosition} scale={reactScale} />
          </Float>
        <SpringBoot position={springbootPosition} scale={springbootScale} />
          <Environment preset="sunset" />
          {/* <ContactShadows position={[0, -5, 0]} scale={50} blur={2} far={0} /> */}
          
    </Canvas>
    </Suspense>
  )
}

export default Hero