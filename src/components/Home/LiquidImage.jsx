import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import { shaderMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { extend } from '@react-three/fiber'
import { useSpring, a } from '@react-spring/three'
import liquidShader from '../../shaders/liquidShader.js'
import "../../styles/scaling-overrides.css"

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
    <mesh position={[0, 0, 0]}>
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

  const getCanvasHeight = () => {
    const w = window.innerWidth
    if (w >= 1024) return 600
    if (w >= 768) return 500
    return 384
  }
  const [canvasHeight, setCanvasHeight] = useState(getCanvasHeight())

  useEffect(() => {
    function handleResize() {
      setCanvasHeight(getCanvasHeight())
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div
      className="w-full"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        height: `${canvasHeight}px`,
      }}
    >
      <Canvas
      className="canvas-style"
        camera={{ position: [0, 0, 3.5] }}
        dpr={1}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      >
        <ambientLight intensity={1.2} />
        <LiquidPlane imageUrl={imageUrl} mouse={mouse} isHovered={isHovered} />
      </Canvas>
    </div>
  )
}
