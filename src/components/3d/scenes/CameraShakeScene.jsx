import { useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { CameraShake, Sky } from '@react-three/drei'
import * as THREE from 'three'

import Box from '../props/Box'
import Plane from '../props/Plane'
import Blob from '../props/Blob'

const Camera = () => {
  const [vector3] = useState(() => new THREE.Vector3())
  const { camera, mouse } = useThree()
  useFrame(() => camera.position.lerp(vector3.set(mouse.x * 1, mouse.y * 1, 5), 0.05))

  return (
    <CameraShake
      maxYaw={0.01}
      maxPitch={0.01}
      maxRoll={0.01}
      yawFrequency={0.5}
      pitchFrequency={0.5}
      rollFrequency={0.5}
    />
  )
}

const CameraShakeScene = ({ children }) => {
  return (
    <Canvas
      shadows
      className='bg-gradient-to-br from-lime-200 to-lime-300'
    >
      {children}
      <Camera />
      <Sky />
      <ambientLight
        castShadow
      />
      <directionalLight
        castShadow
        position={[5, 20, 10]}
        shadow-mapSize-height={1024}
        shadow-mapSize-width={1024}
      />
      <Box
        position={[0, 0, 0]}
        size={[1, 1, 1]}
        color={'hotpink'}
      />
      <Blob
        position={[0, 50, -50]}
        scale={[20, 10, 10]}
        color={'lime'}
      />
      <Plane
        position={[0, -0.5, 0]}
        scale={[1000, 1000, 1000]}
        color={'lime'}
      />
    </Canvas>
  )
}

export default CameraShakeScene