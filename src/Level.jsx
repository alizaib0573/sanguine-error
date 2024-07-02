import { useFrame } from '@react-three/fiber';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import useGame from './useGame'; // Adjust path as per your file structure
import { CuboidCollider, RigidBody } from '@react-three/rapier';
import { Text3D } from '@react-three/drei';

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const floorMaterial = new THREE.MeshBasicMaterial({ color: '#FF0000' });
const obstacleMaterial = new THREE.MeshStandardMaterial({
  color: '#ee6055',
  metalness: 0.25,
  roughness: 0.12,
});
const boxMaterial = new THREE.MeshStandardMaterial({
  color: '#2291fc',
  metalness: 0.5,
  roughness: 0.5,
});

export function BlockStart({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      <mesh geometry={boxGeometry} position={[0, -0.1, 0]} scale={[4, 0.2, 4]} material={floorMaterial} />
      <CuboidCollider restitution={0.5} args={[6, 0.1, 0.06]} position={[-2.5, 2.2, -5]} />
      <CuboidCollider restitution={0.5} args={[6, 0.1, 0.06]} position={[2.5, 2.2, -5]} />
    </group>
  );
}

export function BlockSpinner({ position = [0, 0, 0] }) {
  const obstacle = useRef();
  const speed = useRef((Math.random() + 0.3) * (Math.random() < 0.5 ? -1 : 1));

  useFrame(() => {
    if (obstacle.current) {
      const time = Date.now() / 1000;
      const rotation = new THREE.Quaternion();
      rotation.setFromEuler(new THREE.Euler(0, time * speed.current, 0));
      obstacle.current.setNextKinematicRotation(rotation);
    }
  });

  return (
    <group position={position}>
      <mesh geometry={boxGeometry} material={floorMaterial} position={[0, -0.1, 0]} scale={[4, 0.2, 4]} />
      <RigidBody ref={obstacle} type="kinematicPosition" position={[0, 0.3, 0]} restitution={0.2} friction={0}>
        <mesh geometry={boxGeometry} material={obstacleMaterial} scale={[3.5, 0.3, 0.3]} />
      </RigidBody>
    </group>
  );
}

export function BlockAxe({ position = [0, 0, 0] }) {
  const obstacle = useRef();
  const timeOffset = useRef(Math.random() * Math.PI * 2);

  useFrame(() => {
    if (obstacle.current) {
      const time = Date.now() / 1000;
      const x = Math.sin(time + timeOffset.current) * 1.25;
      obstacle.current.setNextKinematicTranslation({ x: position[0] + x, y: position[1] + 0.75, z: position[2] });
    }
  });

  return (
    <group position={position}>
      <mesh geometry={boxGeometry} material={floorMaterial} position={[0, -0.1, 0]} scale={[4, 0.2, 4]} />
      <RigidBody ref={obstacle} type="kinematicPosition" position={[0, 0.3, 0]} restitution={0.2} friction={0}>
        <mesh geometry={boxGeometry} material={obstacleMaterial} scale={[1.5, 1.5, 0.3]} />
      </RigidBody>
      <Text3D
        font="/font.json"
        size={1}
        height={0.5}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.1}
        bevelSize={0.05}
        bevelOffset={0}
        bevelSegments={5}
        // position={[1,0.5,1]}
      >
        Ali Zaib
        <meshStandardMaterial attach="material" color="#ffffff" />
      </Text3D>
    </group>
  );
}

function Bounds({ length = 1 }) {
  return (
    <RigidBody type="fixed" restitution={0.2} friction={0}>
      <CuboidCollider args={[1000, 0.1, 2 * length]} position={[0, -0.1, -(length * 2) + 2]} />
    </RigidBody>
  );
}

export function Level({ count = 5, types = [BlockSpinner, BlockAxe], seed = 0 }) {
  const blocks = Array.from({ length: count }, () => types[Math.floor(Math.random() * types.length)]);

  return (
    <>
      <BlockStart position={[0, 0, 0]} />
      {blocks.map((Block, i) => (
        <Block key={i} position={[0, 0, -(i + 1) * 4]} />
      ))}
      <Bounds length={count + 2} />
    </>
  );
}
