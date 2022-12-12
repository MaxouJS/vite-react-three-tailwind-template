import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Sky } from '@react-three/drei'

import Box from '../props/Box'
import Plane from '../props/Plane'
import Blob from '../props/Blob'

const PerspectiveCameraScene = ({ children }) => {
  return (
    <Canvas
      shadows
      className='bg-gradient-to-br from-pink-200 to-pink-300'
    >
      {children}
      <PerspectiveCamera>
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
          position={[0, 0.5, 0]}
          size={[1, 1, 1]}
          color={'lime'}
        />
        <Blob
          position={[0, 50, -50]}
          scale={[20, 10, 10]}
          color={'hotpink'}
        />
        <Plane
          position={[0, -0.5, 0]}
          scale={[1000, 1000, 1000]}
          color={'hotpink'}
        />
      </PerspectiveCamera>
    </Canvas>
  )
}

export default PerspectiveCameraScene