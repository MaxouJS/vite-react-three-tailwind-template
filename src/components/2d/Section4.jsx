import { Html } from '@react-three/drei'
import { IoArrowUpCircleSharp } from 'react-icons/io5'

import CameraShakeScene from '../3d/scenes/CameraShakeScene'

const Section4 = () => {
  return (
    <section id='section4' className='snap-start h-screen w-screen'>
      <CameraShakeScene>
        <Html
          fullscreen
        >
        <div className='absolute left-8 top-8'>
          <div className='flex flex-col space-y-4'>
            <a href='#section3'>
              <IoArrowUpCircleSharp className='text-4xl animate-pulse' />
            </a>
            <h2 className='text-4xl font-black'>Section 4</h2>
            <h3 className='text-2xl font-bold'>Camera Shake Scene With Mouse Follow</h3>
          </div>
        </div>
        </Html>
      </CameraShakeScene>
    </section>
  )
}

export default Section4