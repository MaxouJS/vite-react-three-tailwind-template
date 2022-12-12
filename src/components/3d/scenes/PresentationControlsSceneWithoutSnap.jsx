import { Canvas } from '@react-three/fiber'
import { PresentationControls, Sky } from '@react-three/drei'

import Box from '../props/Box'
import Plane from '../props/Plane'
import Blob from '../props/Blob'

const PresentationControlsSceneWithoutSnap = ({ children }) => {
  return (
    <Canvas
      shadows
      className='bg-gradient-to-br from-cyan-100 to-cyan-200'
    >
      {children}
      <PresentationControls>
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
          color={'red'}
        />
        <Blob
          position={[0, 50, -50]}
          scale={[20, 10, 10]}
          color={'deepskyblue'}
        />
        <Plane
          position={[0, -0.5, 0]}
          scale={[1000, 1000, 1000]}
          color={'deepskyblue'}
        />
      </PresentationControls>
    </Canvas>
  )
}

export default PresentationControlsSceneWithoutSnap