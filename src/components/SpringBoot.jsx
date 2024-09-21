import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber';
import { useGSAP } from '@gsap/react';
import {gsap} from 'gsap';

export function SpringBoot(props) {
  const { nodes } = useGLTF('/models/SpringBoot_Logo.glb')
  const springbooot = useRef();
  const yPos=props.position[1];

  useGSAP(()=>{

    gsap.to(springbooot.current.position,{
      y:yPos+1,
      duration:1,
      repeat:-1,
      yoyo:true
    })

  })

  useFrame(() => {
    springbooot.current.rotation.y += 0.01;
    
 });
  return (
    <group {...props} dispose={null} rotation={[0,Math.PI/5,0]} ref={springbooot}>
      <mesh
        geometry={nodes.node.geometry}
      >
      <meshStandardMaterial color={"#63B540"}/>
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/SpringBoot_Logo.glb')