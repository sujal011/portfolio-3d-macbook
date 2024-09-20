import { useGSAP } from '@gsap/react'
import { OrbitControls, useGLTF, useScroll, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import {gsap} from 'gsap'
import React, { useRef } from 'react'

import * as THREE from "three"

const Macbook = ({position,scale}) => {
  
   let model = useGLTF("./models/mac.glb")
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

    // useGSAP(()=>{
    //   gsap.to(meshes.screen.rotation,{
    //     x:THREE.MathUtils.degToRad(90),
    //     duration:'3'
    //   })
    //   gsap.to(meshes.Scene.rotation,{
    //     y:-0.34906585,
    //     duration:'5'
    //   })
    // })

    let data = useScroll();

    useFrame((state,delta)=>{
      meshes.screen.rotation.x = THREE.MathUtils.degToRad(180- (data.offset*90))
      meshes.Scene.rotation.y = THREE.MathUtils.degToRad(360 -(data.offset*20))
    })

    useGSAP(()=>{

    },[])

    // let rotate = THREE.MathUtils.degToRad(-20);
   
  return (
    <group position={position} scale={scale}>

   <primitive object={model.scene} ref={macbookRef}/>
    </group>
  )
}

export default Macbook