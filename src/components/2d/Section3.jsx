import { Html } from '@react-three/drei'
import { IoArrowDownCircleSharp, IoArrowUpCircleSharp } from 'react-icons/io5'

import PresentationControlsSceneWithSnap from '../3d/scenes/PresentationControlsSceneWithSnap'

const Section3 = () => {
  return (
    <section id='section3' className='snap-start h-screen w-screen'>
      <PresentationControlsSceneWithSnap>
        <Html
          fullscreen
          className='flex flex-col items-center justify-center space-y-8'
        >
          <a href='#section2' className='absolute top-8'>
            <IoArrowUpCircleSharp className='text-4xl animate-pulse' />
          </a>
          <h2 className='text-6xl font-black'>Section 3</h2>
          <h3 className='text-4xl font-bold'>Presentation Controls Scene With Snap</h3>
          <p>This is a 3D scene that you can drag around the 3D pink box that automatically re-focus the box if you stop dragging the screen.</p>
          <a href='#section4' className='absolute bottom-8'>
            <IoArrowDownCircleSharp className='text-4xl animate-pulse' />
          </a>
        </Html>
      </PresentationControlsSceneWithSnap>
    </section>
  )
}

export default Section3