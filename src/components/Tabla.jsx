import { useTogglesAndToken } from "@/context/TogglesAndTokenContext"
import { useGroupAorB } from "@/utils/teamUtils"

import styles from "@/styles"

const Tabla = () => {

    const { toggleDarkMode } = useTogglesAndToken()

    const { groupContent, formattedGroupName } = useGroupAorB()

    return (
        <div className={`${styles.containerStyles} ${toggleDarkMode ? styles.containerLight : styles.containerDark} lg:w-2/3 w-full h-full`}>
            <h1 className={`${styles.headText} ${toggleDarkMode ? styles.headTextLight : styles.headTextDark}`}>
                GRUPO {formattedGroupName && formattedGroupName}
            </h1>

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
                    {groupContent && groupContent}
                </tbody>
            </table>
        </div>
    )
}

export default Tabla