import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Model(props) {
  const { nodes, materials } = useGLTF("/puffer_jacket.glb");
  const modelRef = useRef();

  const [scale, setScale] = useState([1, 1, 1]);
  const [position, setPosition] = useState([1, 1, 1]);

  useEffect(() => {
    function updateScale() {
      const width = window.innerWidth;
      if (width < 600) {
        setScale([8, 8, 8]);
        setPosition([0, -8, 0]);
      } else if (width >= 600 && width < 1200) {
        setScale([10, 10, 10]);
        setPosition([0, -13, 0]);
      } else {
        setScale([12, 12, 12]);
        setPosition([0, -16, 0]);
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

  Object.values(materials).forEach((material) => {
    material.color.set("red");
  });

  return (
    <group
      ref={modelRef}
      {...props}
      dispose={null}
      position={position}
      scale={scale}
    >
      <mesh
        geometry={nodes.Object_31.geometry}
        material={materials.Material1550621}
        position={[0, 1.654, 0.019]}
        rotation={[0.415, 0.006, -0.025]}
      />
      <mesh
        geometry={nodes.Object_34.geometry}
        material={materials.Material1550621}
        position={[0, 1.654, 0.019]}
        rotation={[0.415, 0.015, -0.011]}
      />
      <mesh
        geometry={nodes.Object_37.geometry}
        material={materials.Material1550623}
        position={[-0.001, 0.961, 0.093]}
        rotation={[0.061, -0.032, 0.009]}
      />
      <mesh
        geometry={nodes.Object_40.geometry}
        material={materials.Material1550623}
        position={[-0.001, 0.961, 0.093]}
        rotation={[0.061, -0.004, -0.27]}
      />
      <group position={[0, 1.645, 0.016]} rotation={[0.415, 0.006, -0.025]}>
        <mesh
          geometry={nodes.Object_65.geometry}
          material={materials.Material1550619}
          position={[0, 0.001, 0.004]}
        />
        <mesh
          geometry={nodes.Object_67.geometry}
          material={materials.Material1550617}
        />
      </group>
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials.Nylon_Matte_FRONT_1644527}
      />
      <mesh
        geometry={nodes.Object_8.geometry}
        material={materials.Nylon_Matte_FRONT_1644527}
      />
      <mesh
        geometry={nodes.Object_10.geometry}
        material={materials.Rib_2X2_468gsm_FRONT_1644516}
      />
      <mesh
        geometry={nodes.Object_12.geometry}
        material={materials.Nylon_Matte_FRONT_1644527}
      />
      <mesh
        geometry={nodes.Object_14.geometry}
        material={materials.Rib_2X2_468gsm_FRONT_1644516}
      />
      <mesh
        geometry={nodes.Object_16.geometry}
        material={materials.Rib_2X2_468gsm_FRONT_1644516}
      />
      <mesh
        geometry={nodes.Object_18.geometry}
        material={materials.Nylon_Matte_FRONT_1644527}
      />
      <mesh
        geometry={nodes.Object_20.geometry}
        material={materials.Rib_2X2_468gsm_FRONT_1644516}
      />
      <mesh
        geometry={nodes.Object_22.geometry}
        material={materials.Nylon_Matte_FRONT_1644527}
      />
      <mesh
        geometry={nodes.Object_24.geometry}
        material={materials.Rib_2X2_468gsm_FRONT_1644516}
      />
      <mesh
        geometry={nodes.Object_26.geometry}
        material={materials.Nylon_Matte_FRONT_1644527}
      />
      <mesh
        geometry={nodes.Object_28.geometry}
        material={materials.Rib_2X2_468gsm_FRONT_1644516}
      />
      <mesh
        geometry={nodes.Object_42.geometry}
        material={materials.Nylon_Matte_FRONT_1644527}
      />
      <mesh
        geometry={nodes.Object_44.geometry}
        material={materials.Nylon_Matte_FRONT_1644527}
      />
      <mesh
        geometry={nodes.Object_46.geometry}
        material={materials.Nylon_Matte_FRONT_1644527}
      />
      <mesh
        geometry={nodes.Object_48.geometry}
        material={materials.Rib_2X2_468gsm_FRONT_1644516}
      />
      <mesh
        geometry={nodes.Object_50.geometry}
        material={materials.Nylon_Matte_FRONT_1644527}
      />
      <mesh
        geometry={nodes.Object_52.geometry}
        material={materials.Rib_2X2_468gsm_FRONT_1644516}
      />
      <mesh
        geometry={nodes.Object_54.geometry}
        material={materials.Nylon_Matte_FRONT_1644527}
      />
      <mesh
        geometry={nodes.Object_56.geometry}
        material={materials.Rib_2X2_468gsm_FRONT_1644516}
      />
      <mesh
        geometry={nodes.Object_58.geometry}
        material={materials.Rib_2X2_468gsm_FRONT_1644516}
      />
      <mesh
        geometry={nodes.Object_60.geometry}
        material={materials.Nylon_Matte_FRONT_1644527}
      />
      <mesh
        geometry={nodes.Object_69.geometry}
        material={materials.Fabric324196_FRONT_1668138}
      />
      <mesh
        geometry={nodes.Object_71.geometry}
        material={materials.Fabric324196_FRONT_1668138}
      />
    </group>
  );
}

useGLTF.preload("/puffer_jacket.glb");
