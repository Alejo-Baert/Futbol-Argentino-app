import { useTogglesAndToken } from "@/context/TogglesAndTokenContext"
import useTeams from "@/libs/useTeams"

export function getSelectedTeamName() {
    return localStorage.getItem("selectedTeam")
}

export function useSelectedTeam() {
    const teams = useTeams()
    const selectedTeamName = getSelectedTeamName()

    let foundTeam = null

    for (const group of teams) {
        foundTeam = group.find((teamData) => {
            return teamData.team.name === selectedTeamName
        })

        if (foundTeam) {
            break
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

export function useGroupA(selectedTeamGroup, selectedTeam) {
    const groupA = selectedTeamGroup
    const { toggleDarkMode } = useTogglesAndToken()

    return groupA.map((team, index) => {
        const isSameTeam = team.team.name === selectedTeam.nameForAPI

        let backgroundColor = toggleDarkMode ? 'border-gray-200' : 'border-gray-700'

        let bgSelectedTeam = toggleDarkMode ? 'bg-gray-200' : 'bg-gray-700'

        return (
            <tr className={`${isSameTeam && `${bgSelectedTeam} uppercase`} ${backgroundColor} border-b `} key={index}>
                <td className="font-semibold">{team.rank}</td>
                <td className={`flex items-center lg:gap-4 gap-2 ${isSameTeam ? 'font-bold' : 'font-medium'} lg:text-base text-sm`}>
                    <img src={team.team.logo} className="w-12 p-2" alt={`logo - ${team.team.name}`} />
                    {team.team.name}
                </td>
                {/* <td>{team.all.goals.for}</td> */}
                <td className="font-bold">{team.points}</td>
                <td>{team.all.played}</td>
            </tr>
        )
    })
}

export function useGroupB(selectedTeamGroup, selectedTeam) {

    const groupB = selectedTeamGroup
    const { toggleDarkMode } = useTogglesAndToken()

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
                {/* <td>{team.all.goals.for}</td> */}
                <td className="font-bold">{team.points}</td>
                <td>{team.all.played}</td>
            </tr>
        )
    })
}

export function useGroupAorB(selectedTeamGroup, selectedTeam) {
    if (!selectedTeamGroup || selectedTeamGroup.length === 0) {
        return { groupContent: null, formattedGroupName: null };
    }

    const groupName = selectedTeamGroup[0].group;
    const formattedGroupName = groupName.replace('Group ', '');

    let groupContent = null;

    if (groupName === 'Group A') {
        groupContent = useGroupA(selectedTeamGroup, selectedTeam);
    } else if (groupName === 'Group B') {
        groupContent = useGroupB(selectedTeamGroup, selectedTeam);
    }

    return { groupContent, formattedGroupName }
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
export function useTeamLogo() {
    const selectedTeam = useSelectedTeam()
    return selectedTeam && selectedTeam.team.logo
}
export function useTeamGroup() {

    const selectedTeam = useSelectedTeam()
    return selectedTeam && selectedTeam.group
}  */