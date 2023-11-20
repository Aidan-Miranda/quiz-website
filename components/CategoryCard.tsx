import React from "react";
import Image from "next/image";
import { useSpring, animated } from "react-spring";

interface categoryPrompts {
  category: string;
  alt: string;
  src: string;
  gradientColor: any;
}

const calc = (x: number, y: number) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1,
];
const trans = (x: number, y: number, s: number) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function CategoryCard(prompt: categoryPrompts) {
  const { category, alt, src, gradientColor } = prompt;
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 10, tension: 300, friction: 80 },
  }));

  return (
    <animated.a
      href={`/category/${category}`}
      onMouseMove={(e) => {
        const { clientX: x, clientY: y } = e;

        return set({ xys: calc(x, y) });
      }}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
      className={`flex flex-col w-64 h-80 items-center align-middle py-6 bg-gradient-to-tr ${gradientColor} border-2 border-slate-100 rounded-lg shadow-md shadow-slate-100/20`}
    >
      <Image src={src} alt={`Category ${alt}`} className="w-32 mt-auto" />
      <h1
        className="relative mt-auto text-2xl w-10/12 font-semibold text-stone-200 bg-black/20 rounded-md px-6 py-1 text-center backdrop-blur-sm"
      >
        {category}
      </h1>
    </animated.a>
  );
}
