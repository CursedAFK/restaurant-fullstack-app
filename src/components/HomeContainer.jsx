import Delivery from '../img/delivery.png'
import HeroBg from '../img/heroBg.png'
import { heroData } from '../utils/data'

const HomeContainer = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full' id='home'>
      <div className='py-2 flex flex-col items-start justify-center gap-6'>
        <div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full'>
          <p className='text-base text-orange-500 font-semibold'>
            Bike Delivery
          </p>

          <div className='w-8 h-8 rounded-full bg-white overflow-hidden drop-shadow-xl'>
            <img
              src={Delivery}
              alt='delivery'
              className='w-full h-full object-contain'
            />
          </div>
        </div>

        <p className='text-[2.5rem] font-bold tracking-wide text-headingColor lg:text-[4.5rem]'>
          The Fastest Delivery in{' '}
          <span className='text-orange-600 text-[3rem] lg:text-[5rem]'>
            Your City
          </span>
        </p>

        <p className='text-base text-textColor text-center md:text-left md:w-[80%]'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae sit
          tenetur accusantium aliquid illo natus incidunt ea! Amet
          exercitationem odio sed porro nisi ipsa, saepe libero sint cum impedit
          adipisci?
        </p>

        <button className='bg-gradient-to-br from-orange-400 to-orange-500 w-full py-2 rounded-lg active:shadow-lg hover:shadow-lg transition-all ease-in-out duration-100 md:w-auto md:px-4'>
          Order Now
        </button>
      </div>

      <div className='py-2 flex items-center relative'>
        <img
          src={HeroBg}
          alt='hero-bg'
          className=' ml-auto lg:h-650 h-400 w-full lg:w-auto'
        />

        <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center py-4 gap-4 flex-wrap lg:px-32'>
          {heroData &&
            heroData.map(data => (
              <div
                key={data.id}
                className=' lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex items-center justify-center flex-col drop-shadow-lg'
              >
                <img
                  src={data.imgSrc}
                  alt={data.name}
                  className='w-20 lg:w-40 -mt-10 lg:-mt-20'
                />

                <p className='text-base lg:text-xl mt-2 lg:mt-4 font-semibold text-textColor'>
                  {data.name}
                </p>

                <p className='text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3'>
                  {data.desc}
                </p>

                <p className='text-sm font-semibold text-headingColor'>
                  <span className='text-xs text-red-600'>$</span> {data.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default HomeContainer
