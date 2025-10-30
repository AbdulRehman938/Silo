import React, { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import { shaderMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { extend } from '@react-three/fiber'
import { useSpring, a } from '@react-spring/three'
import liquidShader from '../../shaders/liquidShader.js'

const LiquidMaterial = shaderMaterial(
  { uTime: 0, uTexture: null, uMouse: new THREE.Vector2(0, 0), uHover: 0.0 },
  liquidShader.vertex,
  liquidShader.fragment
)

extend({ LiquidMaterial })

function LiquidPlane({ imageUrl, mouse, isHovered }) {
  const ref = useRef()
  const texture = useTexture(imageUrl)
  const { viewport } = useThree()

  useFrame((state) => {
    if (ref.current) {
      ref.current.uTime = state.clock.elapsedTime
      ref.current.uMouse = mouse
      ref.current.uHover = isHovered ? 0.5 : 0.0
    }
  })

  return (
    <mesh>
      <planeGeometry args={[viewport.width, viewport.height, 64, 64]} />
      <liquidMaterial ref={ref} uTexture={texture} />
    </mesh>
  )
}

export default function LiquidImage({ imageUrl }) {
  const [mouse, setMouse] = useState(new THREE.Vector2(0, 0))
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width * 2 - 1
    const y = -(event.clientY - rect.top) / rect.height * 2 + 1
    setMouse(new THREE.Vector2(x, y))
  }

  return (
    <div 
      className="w-full h-96 md:h-[500px] lg:h-[600px] overflow-hidden" 
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transform: 'none' }}
    >
      <Canvas camera={{ position: [0, 0, 3.5] }} style={{ width: '100%', height: '100%', transform: 'none' }}>
        <ambientLight intensity={1.2} />
        <LiquidPlane imageUrl={imageUrl} mouse={mouse} isHovered={isHovered} />
      </Canvas>
    </div>
  )
}
