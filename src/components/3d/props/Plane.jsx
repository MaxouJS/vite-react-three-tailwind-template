import { useRef } from 'react'

const Plane = ({ position, scale, color }) => {
  const ref = useRef()

  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow
      position={position}
      rotation={[-Math.PI / 2, 0, 0]}
      scale={scale}
      frustumCulled={false}
    >
      <planeBufferGeometry />
      <meshPhongMaterial color={color} receiveShadow />
    </mesh>
  )
}

export default Plane