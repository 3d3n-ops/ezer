"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { useMemo, useRef } from "react"
import { Matrix4 } from "three"

function Particles({ count = 5000 }) {
  const mesh = useRef()
  const light = useRef()

  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const time = Math.random() * 100
      const factor = 20 + Math.random() * 100
      const speed = 0.01 + Math.random() / 200
      const x = Math.random() * 2000 - 1000
      const y = Math.random() * 2000 - 1000
      const z = Math.random() * 2000 - 1000

      temp.push({ time, factor, speed, x, y, z })
    }
    return temp
  }, [count])

  const dummy = useMemo(() => new Matrix4(), [])

  useFrame(() => {
    particles.forEach((particle, i) => {
      const { factor, speed, x, y, z } = particle

      // Update the particle time
      const t = (particle.time += speed)

      // Update the particle position based on the time
      dummy.setPosition(
        x + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        y + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        z + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10,
      )

      mesh.current.setMatrixAt(i, dummy)
    })
    mesh.current.instanceMatrix.needsUpdate = true
  })

  return (
    <>
      <pointLight ref={light} distance={40} intensity={8} color="white" />
      <instancedMesh ref={mesh} args={[null, null, count]}>
        <dodecahedronGeometry args={[0.2, 0]} />
        <meshPhongMaterial color="#ffffff" />
      </instancedMesh>
    </>
  )
}

export default function Background() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900 to-black">
      <Canvas camera={{ position: [0, 0, 50], fov: 75 }}>
        <Particles />
      </Canvas>
    </div>
  )
}

