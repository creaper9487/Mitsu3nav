"use client";
// pages/ClickableSpherePage.jsx (or components/ClickableSpherePage.jsx)

import React, { useRef } from 'react';
import { Canvas, useFrame, } from '@react-three/fiber';
import { Sphere, MeshStandardMaterial, Gltf, OrbitControls, PerspectiveCamera } from '@react-three/drei';


function SomeFurry(){
  const handleClick = () => {
    alert('UwU');
  };
  return(
    <Gltf src="./3ds/furry.glb" position={[0, -5, 0]} rotation={[0, 0, 0]} onClick={handleClick} />
  )
}

export default function ClickableSpherePage() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 20, 20]} fov={75} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <SomeFurry />
        <Gltf src="./3ds/scene0.glb" />
        <OrbitControls />
      </Canvas>
    </div>
  );
}