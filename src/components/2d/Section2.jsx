import { Html } from '@react-three/drei'
import { IoArrowDownCircleSharp, IoArrowUpCircleSharp } from 'react-icons/io5'

import PresentationControlsSceneWithoutSnap from '../3d/scenes/PresentationControlsSceneWithoutSnap'

const Section2 = () => {
  return (
    <section id='section2' className='snap-start h-screen w-screen'>
      <PresentationControlsSceneWithoutSnap>
        <Html
          fullscreen
          className='flex flex-col items-center justify-center space-y-8'
        >
          <a href='#section1' className='absolute top-8'>
            <IoArrowUpCircleSharp className='text-4xl animate-pulse' />
          </a>
          <h2 className='text-6xl font-black'>Section 2</h2>
          <h3 className='text-4xl font-bold'>Presentation Controls Scene Without Snap</h3>
          <p>This is a 3D scene that you can drag around the 3D pink box.</p>
          <a href='#section3' className='absolute bottom-8'>
            <IoArrowDownCircleSharp className='text-4xl animate-pulse' />
          </a>
        </Html>
      </PresentationControlsSceneWithoutSnap>
    </section>
  )
}

export default Section2