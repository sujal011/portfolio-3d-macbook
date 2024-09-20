import { OrbitControls, useGLTF, useScroll, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'

import * as THREE from "three"

const Macbook = () => {
   let model = useGLTF("./mac.glb")
   let texture = useTexture("./MacBook-SS.png")
   let meshes ={};

   const macbookRef = useRef();
   console.log('macbookRef: ',macbookRef );
   

   model.scene.traverse((e)=>{
      meshes[e.name]=e;
    })
    console.log(meshes);
    
    meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);
    meshes.matte.material.map = texture;
    meshes.matte.material.emissiveIntensity = 0;
    meshes.matte.material.metalness = 0;
    meshes.matte.material.roughness = 1;


    let data = useScroll();

    useFrame((state,delta)=>{
      meshes.screen.rotation.x = THREE.MathUtils.degToRad(180- (data.offset*90))
      meshes.Scene.rotation.y = THREE.MathUtils.degToRad(360 -(data.offset*20))
    })

    // let rotate = THREE.MathUtils.degToRad(-20);
   
  return (
    <group position={[0,-10,20]} ref={macbookRef}>

   <primitive object={model.scene}/>
    </group>
  )
}

export default Macbook