import { Html } from '@react-three/drei'
import PerspectiveCameraScene from '../components/3d/scenes/PerspectiveCameraScene'

const NotFound = () => {
  return (
    <section id='section1' className='snap-start h-screen w-screen'>
      <PerspectiveCameraScene>
        <Html
          fullscreen
          className='flex flex-col items-center justify-center space-y-8'
        >
          <h1 className='text-6xl font-black'>Not Found</h1>
          <a href='/' className='bg-white/75 rounded-xl p-4 font-bold'>
            Return
          </a>
        </Html>
      </PerspectiveCameraScene>
    </section>
  )
}

export default NotFound