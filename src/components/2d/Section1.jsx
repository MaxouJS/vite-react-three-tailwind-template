import { Html } from '@react-three/drei'
import { IoArrowDownCircleSharp } from 'react-icons/io5'

import PerspectiveCameraScene from '../3d/scenes/PerspectiveCameraScene'

const Section1 = () => {
  return (
    <section id='section1' className='snap-start h-screen w-screen'>
      <PerspectiveCameraScene>
        <Html
          fullscreen
          className='flex flex-col items-center justify-center space-y-8'
        >
          <h1 className='text-6xl font-black'>Section 1</h1>
          <h2 className='text-4xl font-bold'>Perspective Camera Scene</h2>
          <p>This is a sample 3D scene with a fixed perspective camera.</p>
          <a href='#section2' className='absolute bottom-8'>
            <IoArrowDownCircleSharp className='text-4xl animate-pulse' />
          </a>
        </Html>
      </PerspectiveCameraScene>
    </section>
  )
}

export default Section1