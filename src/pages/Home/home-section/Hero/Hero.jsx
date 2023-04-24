import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import astronaut from "../../../../assets/whitebur.png";
import "./hero.scss";

const Hero = () => {
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="hero hero-banner" id="main">
      <div className="hero-content">
        <span className="hero-content__tagline">Welcome to my Portfolio</span>
        <h1 className="hero-content__title">
          {`Hi I'm M1LKY`} | <span>{text}</span>
        </h1>
        <p className="hero-content__desc">
          Hi everyone👋 I'm Hai aka M1LKY. I'm from Vietnam. I study at Vietnam
          - Korea University of Information and Communication Technology, Danang
          City. Now, i'm living in Danang City and work as Front-End Developer
          software engineer.
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
    </section>
  );
};

export default Hero;
