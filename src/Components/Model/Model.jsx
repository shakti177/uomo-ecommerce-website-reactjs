import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Model({ color, ...props }) {
  const { nodes, materials } = useGLTF("/shirt_baked_2.glb");
  const modelRef = useRef();

  const [scale, setScale] = useState([1, 1, 1]);
  const [position, setPosition] = useState([1, 1, 1]);

  useEffect(() => {
    function updateScale() {
      const width = window.innerWidth;
      if (width < 600) {
        setScale([13, 13, 13]);
        setPosition([0, -1, 0]);
      } else if (width >= 600 && width < 1200) {
        setPosition([0, 0, 0]);
      } else {
        setScale([12, 12, 12]);
        setPosition([0, 0, 0]);
      }
    }

    updateScale();

    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;
    }
  });

  useEffect(() => {
    Object.values(materials).forEach((material) => {
      material.color.set(color);
    });
  }, [color, materials]);

  return (
    <group
      ref={modelRef}
      {...props}
      dispose={null}
      position={position}
      scale={scale}
    >
      <mesh
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        position={[0.419, -0.2, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/shirt_baked_2.glb");
