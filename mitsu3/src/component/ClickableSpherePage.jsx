"use client";
// components/ClickableSpherePage.jsx

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Gltf, OrbitControls, PerspectiveCamera } from '@react-three/drei';

function SomeFurry() {
  const handleClick = () => {
    alert('UwU');
  };
  return (
    <Gltf src="./3ds/furry.glb" position={[0, -5, 0]} rotation={[0, 0, 0]} onClick={handleClick} />
  );
}

export default function ClickableSpherePage({ style = {} }) {
  return (
    <div style={{ 
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%', 
      height: '100%',
      zIndex: 0,
      ...style 
    }}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 20, 20]} fov={75} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <SomeFurry />
        <Gltf src="./3ds/scene0.glb" />
        <OrbitControls enablePan={false} enableZoom={false} />
      </Canvas>
    </div>
  );
}