import Section1 from '../components/2d/Section1'
import Section2 from '../components/2d/Section2'
import Section3 from '../components/2d/Section3'
import Section4 from '../components/2d/Section4'

const Landing = () => {
  return (
    <>
      <div className='h-screen w-screen snap-y snap-mandatory overflow-scroll scroll-smooth select-none'>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
    </>
  )
}

export default Landing