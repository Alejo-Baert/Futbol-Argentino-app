import useSWR from 'swr'
// import useSWRImmutable from 'swr/immutable'

const useTeams = () => {

    const fetcher = async (url) => {
        const response = await fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": process.env.API_KEY_FUTBOL
            }
        })
        const data = await response.json();

        return data?.response[0].league.standings

    }

    const { data: teams } = useSWR('https://v3.football.api-sports.io/standings?league=1032&season=2023', fetcher)

    return teams || []
}

export default useTeams

const useFixtures = () => {
    const fetcher = async (url) => {
        const response = await fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": process.env.API_KEY_FUTBOL
            }
        })
        const fixturesData = await response.json()

        return fixturesData?.response

    }

    const { data: fixtures } = useSWR('https://v3.football.api-sports.io/fixtures?league=1032&season=2023', fetcher)

    return fixtures || []
}

export { useFixtures }

/* const fixtureDate = fixturesData?.response.fixture.date
const fixtureTeamHome = fixturesData?.teams.home.name
const fixtureTeamAway = fixturesData?.teams.home.away */


// https://v3.football.api-sports.io/fixtures?league=1032&season=2023
// data?.response.fixture.date = "2023-08-20T19:15:00+00:00"
// data?.response.teams.home.name = "Equipo local"
// data?.response.teams.home.away = "Equipo visitante"

/* COPA SUDAMERICANA: League: 11 | Season: 2023 */
/* COPA LIBERTADORES: League: 13 | Season: 2023 */
/* COPA ARGENTINA: League: 130 | Season: 2023 */

// const [teams, setTeams] = useState([])

/*  function getTeams() {
     fetch("https://v3.football.api-sports.io/standings?league=1032&season=2023", {
         "method": "GET",
         "headers": {
             "x-rapidapi-host": "v3.football.api-sports.io",
             "x-rapidapi-key": "e9cba3e0983b97eea5cb86697ab6e70c"
         }
     })
         .then(response => response.json())
         .then(data => {
             setTeams(data.response[0].league.standings)
         })
 }

 useEffect(() => {
     getTeams()
 }, []) */


// return teams