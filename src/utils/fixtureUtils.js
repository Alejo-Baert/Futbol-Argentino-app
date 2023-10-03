import { useFixtures } from "@/libs/useTeams"

export function useFixtureDate() {
    const fixtures = useFixtures()
    const selectedTeam = localStorage.getItem("selectedTeam")

    const currentDate = new Date()

    let nextMatch = null

    fixtures.forEach((fixture) => {
        const matchDate = new Date(fixture.fixture.date)

        const isLocalMatch = fixture.teams.home.name === selectedTeam
        const isAwayMatch = fixture.teams.away.name === selectedTeam

        if (matchDate > currentDate && (isLocalMatch || isAwayMatch)) {
            if (!nextMatch || matchDate < new Date(nextMatch.fixture.date)) {
                nextMatch = fixture
            }
        }
    })


    if (nextMatch) {
        const dateObj = new Date(nextMatch.fixture.date);
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        const formattedDate = dateObj.toLocaleDateString('es-ES', options);

        nextMatch.formattedDate = formattedDate;
    }

    return nextMatch
}