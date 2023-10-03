import { useTeamAll } from '@/utils/teamUtils'
import { PieChart } from 'react-minimal-pie-chart'

import styles from '@/styles'
import { useTogglesAndToken } from '@/context/TogglesAndTokenContext'
import Loading from './Loading'

const PieChartStats = () => {

    const { toggleDarkMode } = useTogglesAndToken()

    const selectedTeamAll = useTeamAll()

    let victorias = selectedTeamAll?.win
    let empates = selectedTeamAll?.draw
    let derrotas = selectedTeamAll?.lose

    /* let victorias = 10
    let empates = 4
    let derrotas = 2 */

    const totalPartidos = victorias + empates + derrotas

    const statsData = [
        { title: 'Victorias', value: victorias, color: styles.colores.green, TextColor: 'text-[#22c55e]' },
        { title: 'Empates', value: empates, color: styles.colores.yellow, TextColor: 'text-yellow-300' },
        { title: 'Derrotas', value: derrotas, color: styles.colores.red, TextColor: 'text-[#ef4444]' },
    ].filter((item) => item.value > 0)

    let labelStyle = {
        fontWeight: 'bold',
        fontSize: '6px'
    }

    const calcularEfectividad = (victorias, empates, derrotas) => {
        const totalPartidos = victorias + empates + derrotas;
        const efectividad = (victorias / totalPartidos) * 100;
        return efectividad.toFixed(2);
    }

    const efectividad = calcularEfectividad(victorias, empates, derrotas)

    return (
        <section>
            <h1 className={`${styles.headText} ${toggleDarkMode ? styles.headTextLight : styles.headTextDark}`}>ESTADÍSTICAS EN LIGA</h1>

            {selectedTeamAll ? (
                <div className="flex items-center justify-center py-8">
                    <div className='w-full'>
                        <div className='w-[250px] mx-auto'>
                            <PieChart
                                data={statsData}
                                label={({ dataEntry }) => `${Math.round((dataEntry.value / totalPartidos) * 100)}%`}
                                labelStyle={labelStyle}
                                animate
                                animationDuration={1000}
                            />
                        </div>

                        <div className={`border-y ${toggleDarkMode ? 'border-gray-200' : 'border-gray-700'} flex justify-around mt-8 py-4 `}>
                            {statsData.map((data, index) => (
                                <div className="text-center" key={index}>
                                    <div className={`${data.TextColor} flex flex-col items-center gap-2`}>
                                        <span className='font-bold text-xl'>{data.value}</span>
                                        <p className='font-bold'>{data.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>


                        <div className='flex items-center mt-8 justify-center gap-2'>
                            <p className='font-bold text-xl border px-4 py-1 rounded-full'>{efectividad}%</p>
                            <p>de efectividad</p>
                        </div>

                    </div>
                </div>
            ) : <Loading />}
        </section>
    )
}

export default PieChartStats

