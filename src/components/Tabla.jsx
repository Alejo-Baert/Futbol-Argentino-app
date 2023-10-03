import { useTogglesAndToken } from "@/context/TogglesAndTokenContext"
import useTeams from "@/libs/useTeams"
import styles from "@/styles"
import { useGroupAorB, useSelectedTeamGroup } from "@/utils/teamUtils"
import Loading from "./Loading"

const Tabla = () => {

    const { selectedTeam, toggleDarkMode } = useTogglesAndToken()

    const teams = useTeams()
    const selectedTeamGroup = useSelectedTeamGroup(teams)
    const { groupContent, formattedGroupName } = useGroupAorB(selectedTeamGroup, selectedTeam)

    return (
        <div className={`${styles.containerStyles} ${toggleDarkMode ? styles.containerLight : styles.containerDark} lg:w-2/3 w-full h-full`}>
            {selectedTeamGroup.length > 0 ? (
                <>
                    <h1 className={`${styles.headText} ${toggleDarkMode ? styles.headTextLight : styles.headTextDark}`}>GRUPO {formattedGroupName}</h1>

                    <table className="w-full h-fit text-center mt-4">
                        <thead>
                            <tr className="font-semibold">
                                <td></td>
                                <td></td>
                                <td>PTS</td>
                                <td>PJ</td>
                            </tr>
                        </thead>
                        <tbody>
                            {groupContent}
                        </tbody>
                    </table>
                </>
            ) : <Loading />}
        </div>
    )
}

export default Tabla