import { useTogglesAndToken } from "@/context/TogglesAndTokenContext"
import useTeams from "@/libs/useTeams"

export function getSelectedTeamName() {
    return localStorage.getItem("selectedTeam")
}

export function useSelectedTeam() {
    const teams = useTeams()
    const selectedTeamName = getSelectedTeamName()

    let foundTeam = null

    if (teams && teams.length > 0) {

        for (const group of teams) {
            foundTeam = group.find((teamData) => {
                return teamData.team.name === selectedTeamName
            })

            if (foundTeam) {
                break
            }
        }
    }


    return foundTeam
}

export function useSelectedTeamGroup(teams) {
    const selectedTeamName = getSelectedTeamName();

    if (teams && teams.length > 0) {

        const selectedGroup = teams.find((group) => {
            const foundTeam = group.find((teamData) => {
                return teamData.team.name === selectedTeamName;
            });

            return foundTeam;
        });

        return selectedGroup || [];
    }
    return []
}

/* export function useGroupA(selectedTeamGroup, selectedTeam) {
    const { toggleDarkMode } = useTogglesAndToken()

    const groupA = selectedTeamGroup

    return groupA.map((team, index) => {
        const isSameTeam = team.team.name === selectedTeam.nameForAPI

        let backgroundColor = toggleDarkMode && toggleDarkMode ? 'border-gray-200' : 'border-gray-700'

        let bgSelectedTeam = toggleDarkMode && toggleDarkMode ? 'bg-gray-200' : 'bg-gray-700'

        return (
            <tr className={`${isSameTeam && `${bgSelectedTeam} uppercase`} ${backgroundColor} border-b `} key={index}>
                <td className="font-semibold">{team.rank}</td>
                <td className={`flex items-center lg:gap-4 gap-2 ${isSameTeam ? 'font-bold' : 'font-medium'} lg:text-base text-sm`}>
                    <img src={team.team.logo} className="w-12 p-2" alt={`logo - ${team.team.name}`} />
                    {team.team.name}
                </td>
                <td className="font-bold">{team.points}</td>
                <td>{team.all.played}</td>
            </tr>
        )
    })
}

export function useGroupB(selectedTeamGroup, selectedTeam) {
    const { toggleDarkMode } = useTogglesAndToken()

    const groupB = selectedTeamGroup

    return groupB.map((team, index) => {

        const isSameTeam = team.team.name === selectedTeam.nameForAPI

        let backgroundColor = toggleDarkMode ? 'border-gray-200' : 'border-gray-700'

        let bgSelectedTeam = toggleDarkMode ? 'bg-gray-200' : 'bg-gray-700'

        return (
            <tr className={`${isSameTeam && `${bgSelectedTeam} uppercase`} ${backgroundColor} border-b`} key={index}>
                <td className="font-semibold">{team.rank}</td>
                <td className={`flex items-center lg:gap-4 gap-2 ${isSameTeam ? 'font-bold' : 'font-medium'} lg:text-base text-sm`}>
                    <img src={team.team.logo} className="w-12 p-2" alt={`logo - ${team.team.name}`} />
                    {team.team.name}
                </td>
                <td className="font-bold">{team.points}</td>
                <td>{team.all.played}</td>
            </tr>
        )
    })
} */

export function useGroup(selectedTeamGroup, selectedTeam, toggleDarkMode) {

    /* const group = selectedTeamGroup

    return group.map((team, index) => {

        const isSameTeam = team.team.name === selectedTeam.nameForAPI

        let backgroundColor = toggleDarkMode ? 'border-gray-200' : 'border-gray-700'

        let bgSelectedTeam = toggleDarkMode ? 'bg-gray-200' : 'bg-gray-700'

        return (
            <tr className={`${isSameTeam && `${bgSelectedTeam} uppercase`} ${backgroundColor} border-b`} key={index}>
                <td className="font-semibold">{team.rank}</td>
                <td className={`flex items-center lg:gap-4 gap-2 ${isSameTeam ? 'font-bold' : 'font-medium'} lg:text-base text-sm`}>
                    <img src={team.team.logo} className="w-12 p-2" alt={`logo - ${team.team.name}`} />
                    {team.team.name}
                </td>
                <td className="font-bold">{team.points}</td>
                <td>{team.all.played}</td>
            </tr>
        )
    }) */
}

export function useGroupAorB() {

    /* const { selectedTeam, toggleDarkMode } = useTogglesAndToken()

    const teams = useTeams()
    const selectedTeamGroup = useSelectedTeamGroup(teams)

    if (!selectedTeamGroup || selectedTeamGroup.length === 0) {
        return { groupContent: null, formattedGroupName: null };
    }

    const groupName = selectedTeamGroup[0].group;
    const formattedGroupName = groupName.replace('Group ', '');

    let groupContent = null;

    if (groupName === 'Group A' || groupName === 'Group B') {
        groupContent = useGroup(selectedTeamGroup, selectedTeam, toggleDarkMode)
    }
    return { groupContent, formattedGroupName } */
}

export function useTeamAll() {
    const selectedTeam = useSelectedTeam()
    return selectedTeam && selectedTeam.all
}

export function useTeamRank() {
    const selectedTeam = useSelectedTeam()
    return selectedTeam && selectedTeam.rank
}

/* 
export function useTeamPoints() {
    const selectedTeam = useSelectedTeam()
    return selectedTeam && selectedTeam.points
}
export function useTeamGroup() {
    const selectedTeam = useSelectedTeam()
    return selectedTeam && selectedTeam.group
}  */