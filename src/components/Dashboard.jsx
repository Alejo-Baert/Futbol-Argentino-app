import { useTogglesAndToken } from "@/context/TogglesAndTokenContext"
import { ThreePointsIcon, DarkModeIcons } from "@/assets"

import PieChartStats from "./PieChartStats"
import Tabla from "./Tabla"

import styles from "@/styles"

const Dashboard = () => {

    const { selectedTeam, handleSidebarButton, toggleSidebar, handleDarkModeButton, toggleDarkMode } = useTogglesAndToken()

    return (
        <section className="w-full">
            <div className={`min-h-screen ${toggleDarkMode ? 'bg-gray-50 text-[--black]' : 'bg-gray-900 text-[--white]'} transition-colors p-4`}>

                <nav className={`${styles.containerStyles} ${toggleDarkMode ? styles.containerLight : styles.containerDark}`}>
                    <div className="flex items-center justify-between p-2">
                        <div className="flex items-center gap-2">
                            <button
                                className='w-8'
                                onClick={handleSidebarButton}
                            >
                                <ThreePointsIcon toggleSidebar={toggleSidebar} />
                            </button>
                            <p className='font-bold uppercase'>{selectedTeam.name}</p>
                        </div>

                        {/* <ul className="lg:flex hidden justify-around w-full font-semibold">
                        <li>Estadisticas</li>
                        <li>Fixture</li>
                        <li>Tabla de posiciones</li>
                    </ul> */}

                        <button
                            className="w-8"
                            onClick={handleDarkModeButton}
                        >
                            <DarkModeIcons toggleDarkMode={toggleDarkMode} />
                        </button>
                    </div>
                </nav>

                <div className="flex lg:flex-row flex-col-reverse gap-4 w-full h-full mt-4 lg:p-0">

                    {/* LADO IZQUIERDO - DATOS */}
                    <div className="flex flex-col gap-4 lg:w-1/3 w-full">
                        <span className={`${styles.containerStyles} ${styles.containerStyles} ${toggleDarkMode ? styles.containerLight : styles.containerDark}`}>
                            <PieChartStats />
                        </span>

                        {/* <span className={`${styles.containerStyles} ${toggleDarkMode ? styles.containerLight : styles.containerDark}`}>

                            <h1 className={`${styles.headText} ${toggleDarkMode ? styles.headTextLight : styles.headTextDark}`}>PRÓXIMO PARTIDO EN LIGA</h1>

                            <div className="flex md:flex-row flex-col py-8">

                                <div className="md:w-1/4">
                                    <div className="flex flex-col gap-4 justify-center items-center h-full md:border-r">
                                        <img src={competiciones[0].img} className="w-16" alt="" />
                                        <p className="font-light">16/9/2023</p>
                                    </div>
                                </div>

                                <hr className="md:hidden block mx-16 my-4" />

                                <div className="md:w-3/4 flex items-center md:justify-between justify-center">
                                    <div className="ml-4 flex gap-2 flex-col justify-center h-full">
                                        <p className="font-semibold md:text-xl">Local</p>
                                        <p className="font-bold md:text-2xl text-xl uppercase">{nextMatch ? (nextMatch?.teams.home.name === selectedTeam.name ? nextMatch?.teams.away.name : nextMatch?.teams.home.name) : ''}</p>
                                        <p className="font-light">{nextMatch?.fixture.date}</p>
                                    </div>

                                    <img src={nextMatch ?
                                        (nextMatch?.teams.home.logo === selectedTeam.img
                                            ? nextMatch?.teams.away.logo
                                            : nextMatch?.teams.home.logo) : ''} className="md:w-32 w-24" alt="" />
                                </div>
                            </div>
                        </span> */}

                        {/*  <div className="flex flex-col gap-4">
                            <span className={`${styles.containerStyles} ${toggleDarkMode ? styles.containerLight : styles.containerDark}`}>
                                <h1 className={`${styles.headText} ${toggleDarkMode ? styles.headTextLight : styles.headTextDark}`}>Máximo goleador</h1>
                                <div>algo</div>
                            </span>

                            <span className={`${styles.containerStyles} ${toggleDarkMode ? styles.containerLight : styles.containerDark}`}>
                                <h1 className={`${styles.headText} ${toggleDarkMode ? styles.headTextLight : styles.headTextDark}`}>Máximo asistidor</h1>
                                <div>algo</div>
                            </span>
                        </div> */}
                    </div>

                    {/* LADO DERECHO - TABLA */}
                    {selectedTeam && <Tabla />}

                </div>
            </div>
        </section>
    )
}

export default Dashboard