import { Canvas } from '@react-three/fiber'
import { PresentationControls, Sky } from '@react-three/drei'

import Box from '../props/Box'
import Plane from '../props/Plane'
import Blob from '../props/Blob'

const PresentationControlsSceneWithSnap = ({ children }) => {
  return (
    <Canvas
      shadows
      className='bg-gradient-to-br from-pink-200 to-pink-300'
    >
      {children}
      <PresentationControls
        snap={<Box />}
      >
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
          color={'royalblue'}
        />
        <Blob
          position={[0, 50, -50]}
          scale={[20, 10, 10]}
          color={'orange'}
        />
        <Plane
          position={[0, -0.5, 0]}
          scale={[1000, 1000, 1000]}
          color={'orange'}
        />
      </PresentationControls>
    </Canvas>
  )
}

export default PresentationControlsSceneWithSnap