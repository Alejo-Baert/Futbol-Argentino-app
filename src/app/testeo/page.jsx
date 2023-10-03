"use client"

import { equipos } from '@/constants/Equipos'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { EffectCoverflow, Navigation } from 'swiper/modules'
import Link from 'next/link'
import { useTogglesAndToken } from '@/context/TogglesAndTokenContext'

const page = () => {

  const { handleTeamSelection } = useTogglesAndToken()


  return (
    <section className='flex justify-center items-center h-[100dvh] '>

      <Swiper
        effect={'slide'}
        speed={150}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        spaceBetween={0}
        breakpoints={{
          480: {
            slidesPerView: 1,
            spaceBetween: -300
          },
          400: {
            slidesPerView: 1,
            spaceBetween: -300
          },
          340: {
            slidesPerView: 1,
            spaceBetween: -235
          },
          320: {
            slidesPerView: 1,
            spaceBetween: -200
          }
        }}
        navigation={true}
        modules={[EffectCoverflow, Navigation]}
        className="w-[500px] h-[500px]"
      >

        <span className="loader" />

        {equipos.map((equipo) => (
          <SwiperSlide key={equipo.id} className='transition-all duration-150'>
            <div className='flex justify-center items-center h-full'>
              <Link
                href='/inicio'
                key={equipo.id}
                className='bg-black'
              >
                <Image
                  src={equipo.img}
                  className={`md:w-48 w-36 cursor-pointer z-10 bg-gray-300`}
                  alt={`club-${equipo.name}`}
                  width="200"
                  height="200"
                  onClick={() => handleTeamSelection(equipo.nameForAPI)}
                  priority
                />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default page