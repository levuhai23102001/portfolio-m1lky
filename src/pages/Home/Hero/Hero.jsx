import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import astronaut from "../../../assets/whitebur.png";
import "./hero.scss";

const Hero = () => {
  return (
    <section className="hero hero-banner">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-content__tagline">Welcome to my Portfolio</span>
          <h1 className="hero-content__title">
            {`Hi I'm M1LKY`} | <span>Web Developer</span>
          </h1>
          <p className="hero-content__desc">
            Hi everyone👋 I'm Hai aka M1LKY. I'm from Vietnam. I study at
            Vietnam - Korea University of Information and Communication
            Technology, Danang City. Now, i'm living in Danang City and work as
            Front-End Developer software engineer.
          </p>
        </div>
        <div className="hero-image">
          <Canvas className="blob">
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#ff3377"
                  attach="material"
                  distort={0.3}
                  speed={1.5}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <img src={astronaut} alt="astronaut" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
