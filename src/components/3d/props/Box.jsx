import { useRef } from 'react'

const Box = ({ position, size, color}) => {
  const ref = useRef()

  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow
      position={position}
      frustumCulled={false}
    >
      <boxGeometry
        args={size}
      />
      <meshStandardMaterial color={color} />
    </mesh>

  )
}

export default Box