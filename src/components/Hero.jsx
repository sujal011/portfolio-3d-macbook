import { CameraControls, Environment, ScrollControls } from '@react-three/drei'
import React, { Suspense } from 'react'
import Macbook from './Macbook'
import { Canvas } from '@react-three/fiber'
import Loader from './Loader'
import { useMediaQuery } from 'react-responsive'

const Hero = () => {

  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  let camera={fov:"30",position:[0,10,130]};

  if(isMobile){
    camera={fov:"32",position:[0,10,180]}
  }

  return (

    
      <Suspense fallback={<Loader />}>
    <Canvas camera={camera}>
        <ScrollControls pages={1.1}>
          <Macbook />
        </ScrollControls>
          <Environment preset="sunset" />
    </Canvas>
    </Suspense>
  )
}

export default Hero