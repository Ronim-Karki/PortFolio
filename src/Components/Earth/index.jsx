import React from 'react';
import { useLoader } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import ColorMap from '../../img/color-map.jpg';
import displacementMap from '../../img/displacement-map.jpg';
import { TextureLoader } from 'three';
export default function Earth(props) {
  const [color_Map, dis_Map] = useLoader(TextureLoader, [
    ColorMap,
    displacementMap,
  ]);
  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight intensity={4} />
      <pointLight color={'white'} position={[2, 0, 2]} intensity={4} />
      <Stars
        radius={250}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        fade={true}
      />

      <mesh>
        <sphereGeometry args={[2, 32, 32]} />
        <meshPhongMaterial displacementMap={dis_Map} />
        {/* <meshStandardMaterial moon={moon} /> */}
        <meshStandardMaterial map={color_Map} />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
          autoRotate={true}
          autoRotateSpeed={0.4}
        />
      </mesh>
    </>
  );
}
