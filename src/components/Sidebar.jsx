import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

import Loading from "./Loading"
import { useTogglesAndToken } from "@/context/TogglesAndTokenContext"
import { CloseIcon } from "@/assets"
import { useTeamRank } from "@/utils/teamUtils"
import { useFixtureDate } from "@/utils/fixtureUtils"

import styles from "@/styles"

const Sidebar = () => {

    const {
        toggleSidebar,
        setToggleSidebar,
        screenSize,
        selectedTeam,
        deleteTeam,
        handleSidebarButton,
        toggleDarkMode,
    } = useTogglesAndToken()

    useEffect(() => {
        if (screenSize < 1024) setToggleSidebar(false)
        else setToggleSidebar(true)
    }, [screenSize])

    const teamRank = useTeamRank()
    const nextMatch = useFixtureDate()

    const selectedTeamIsHome = nextMatch?.teams.home.name === selectedTeam.nameForAPI;

    const condition = selectedTeamIsHome ? "Local" : "Visitante"

    const opponentTeamName = selectedTeamIsHome ? nextMatch?.teams.away.name : nextMatch?.teams.home.name;
    const opponentTeamLogo = selectedTeamIsHome ? nextMatch?.teams.away.logo : nextMatch?.teams.home.logo;

    // via-neutral-50 via-gray-700 bg-gradient-to-t from-transparent to-transparent 

    return (
        <section>
            <nav className={`lg:static fixed transition-all ${toggleSidebar ? "lg:w-64 w-full" : "-ml-64 w-0 overflow-hidden"}`}>
                <div className={`${toggleDarkMode ? "bg-[--white] border-gray-200" : "bg-gray-800 text-[--white] border-gray-700"} lg:border-r h-screen lg:fixed lg:w-64 lg:shadow-xl lg:overflow-auto overflow-scroll transition-colors`}>
                    <button
                        className="lg:hidden absolute top-0 right-0 w-8 m-6"
                        onClick={handleSidebarButton}
                    >
                        <CloseIcon />
                    </button>
                    <div className="flex flex-col text-center">
                        {/* <h1 className="">Tu club es: {" "}</h1> */}
                        <div className="flex flex-col items-center">
                            <Image
                                src={selectedTeam.img}
                                className="w-32"
                                width={500}
                                height={500}
                                priority
                                alt={`club ${selectedTeam.name}`}
                            />
                            <span className="uppercase font-bold text-lg">
                                {selectedTeam.name}
                                <Link
                                    href={"/"}
                                    onClick={deleteTeam}
                                    className="normal-case font-light text-sm cursor-pointer hover:underline"
                                >
                                    <p>Cambiar equipo</p>
                                </Link>
                            </span>
                        </div>
                    </div>

                    <div>
                        <div className="text-center py-4">
                            {teamRank ? (
                                <span className={`flex justify-center items-center gap-2 py-2`}>
                                    <p className="font-bold text-2xl">{teamRank}°</p>
                                    <p>Posición en Liga</p>
                                </span>
                            ) : <p>Cargando...</p>
                            }
                        </div>

                        <div className={`${styles.containerStyles} ${styles.containerStyles} ${toggleDarkMode ? styles.containerLightSidebar : styles.containerDarkSidebar} mx-4`}>
                            <h1 className={`${styles.headText} ${toggleDarkMode ? styles.headTextLight : styles.headTextDark}`}>Próximo partido</h1>
                            {nextMatch ? (
                                <div className="flex flex-col py-4 items-center gap-4">
                                    <span className={` flex flex-col gap-2 items-center`}>
                                        <p className="text-lg font-semibold uppercase">{condition}</p>
                                        <p className="">{nextMatch?.formattedDate}</p>
                                    </span>

                                    <div className={`w-full justify-center flex items-center`}>
                                        <span className="flex lg:flex-col flex-row items-center gap-4">
                                            <span className="text-xl font-light">VS.</span> {" "}
                                            <Image
                                                src={opponentTeamLogo}
                                                className="w-20"
                                                width={200}
                                                height={200}
                                                alt={`logo - ${opponentTeamLogo}`}
                                            />
                                            <span className="uppercase text-lg font-bold text-center">

                                                {/* <br className="lg:block hidden" /> */}
                                                {opponentTeamName}
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            ) : (
                                <p>Cargando...</p>
                                /* <Loading
                                height="h-auto"
                                size="lg:w-18 lg:h-18"
                                textClassname='hidden'
                            /> */
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    )
}

export default Sidebar
