"use client";

import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Gltf,
  OrbitControls,
  PerspectiveCamera,
  Stars,
} from "@react-three/drei";
import Navbar from "../component/navigate";
// 3D場景背景組件
const Web3Scene = () => {
  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <Canvas>
        <PerspectiveCamera makeDefault position={[15, 15, 15]} fov={75} />
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
        <Gltf
          src="./3ds/furry.glb"
          position={[0, -5, 0]}
          rotation={[0, 0, 0]}
        />

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

// 英雄區塊
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      <Web3Scene />

      <div className="container mx-auto px-4 pt-20 z-10 relative">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="inline-block text-white animate-pulse">
              Get ON
            </span>
            <br />
            <span className="inline-block text-white"> the Chain with </span>
            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-400 font-extrabold tracking-wide">
              Cent
            </span>
          </h1>
        </div>
      </div>
      <div className="container mx-auto px-4 pt-20 z-10 relative">
        <div className="flex-1 text-center md:text-right">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            While Grabbing
          </h1>
          <h3 className="text-2xl md:text-2xl lg:text-2xl font-bold mb-4">
            MEMORIBLE <p className="text-cyan-500">NFTs</p> and <p className="text-green-400">Merch Tokens!</p> 
          </h3>
          
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f3f4f6"
            fillOpacity="1"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

// 特色部分
const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            遊戲化學習的獨特優勢
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            我們將複雜的 Web3 概念轉化為有趣的互動遊戲，讓學習變得輕鬆且記憶深刻
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "🎮",
              title: "沉浸式體驗",
              description:
                "通過互動遊戲和實際操作，以第一視角體驗區塊鏈運作原理",
            },
            {
              icon: "🧠",
              title: "視覺化學習",
              description: "複雜的概念被轉化為直觀的視覺元素，更容易理解和記憶",
            },
            {
              icon: "🚀",
              title: "個性化進度",
              description: "根據你的學習速度和興趣定制專屬學習路徑",
            },
            {
              icon: "🏆",
              title: "成就系統",
              description: "完成任務獲得獎勵，追蹤進度並激勵持續學習",
            },
            {
              icon: "👥",
              title: "社群學習",
              description: "與全球志同道合的學習者交流，分享心得和經驗",
            },
            {
              icon: "🛡️",
              title: "安全實踐",
              description: "在零風險環境中練習和實驗，不用擔心真實資產損失",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 主頁面組件
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />

      {/* 這裡可以添加更多的部分，如學習路徑、社群展示、常見問題等 */}
    </main>
  );
}
