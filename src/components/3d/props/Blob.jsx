import { useRef } from 'react'
import { MeshDistortMaterial } from '@react-three/drei'

const Blob = ({ position, scale, color }) => {
  const ref = useRef()

  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow
      position={position}
      scale={scale}
      frustumCulled={false}
    >
      <sphereBufferGeometry args={[2.5, 100, 100]} />
      <MeshDistortMaterial
        speed={1}
        distort={0.5}
        radius={1}
        color={color}
      />
    </mesh>
  )
}

export default Blob