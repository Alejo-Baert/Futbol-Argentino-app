"use client"

import Link from "next/link"
import Image from "next/image"
import { useTogglesAndToken } from "@/context/TogglesAndTokenContext"
import { equipos } from "@/constants/Equipos"

import Loading from "./Loading"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SliderTeams = () => {

    const { selectedTeam, handleTeamSelection } = useTogglesAndToken()

    const settings = {
        infinite: true,
        speed: 150,
        slidesToShow: 1,
    }

    return (
        <section className="max-w-[450px] mx-auto font-mulish text-[--white] relative ">
            {selectedTeam
                ? <Loading />
                : (
                    <div className="mt-8">
                        <div className="font-bold lg:text-[18px] flex justify-center ">
                            <p className="border rounded-full px-4 py-2">
                                ELEGÍ TU EQUIPO FAVORITO
                            </p>
                        </div>
                        <Slider {...settings} className="m-12">
                            {equipos.map((equipo) => (
                                <Link
                                    href='/inicio'
                                    key={equipo.id}
                                    onClick={() => handleTeamSelection(equipo.nameForAPI)}
                                >
                                    <div>
                                        <Image
                                            src={equipo.img}
                                            className="w-full object-cover cursor-pointer"
                                            alt={`club-${equipo.name}`}
                                            width="350"
                                            height="350"
                                        />
                                        <p className="font-bold text-[18px] uppercase text-center">{equipo.name}</p>
                                    </div>
                                </Link>
                            ))}
                        </Slider>
                    </div>
                )}
        </section>

    )
}

export default SliderTeams