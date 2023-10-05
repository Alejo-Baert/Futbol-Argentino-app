"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { equipos } from "@/constants/Equipos"
import { useRouter } from "next/navigation"
import { usePathname } from 'next/navigation'

const TogglesAndTokenContext = createContext()

export function useTogglesAndToken() {
    return useContext(TogglesAndTokenContext)
}

export function TogglesAndTokenProvider({ children }) {

    const router = useRouter()
    const pathname = usePathname()

    const [toggleSidebar, setToggleSidebar] = useState(false)
    const [toggleDarkMode, setToggleDarkMode] = useState(false)

    const [tokenTeam, setTokenTeam] = useState(null)
    const [screenSize, setScreenSize] = useState(undefined)

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth)
        window.addEventListener('resize', handleResize)

        handleResize()

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [screenSize, setScreenSize])

    /* useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            let getTeam = localStorage.getItem("selectedTeam")

            setTokenTeam(getTeam)
        }
    }, [tokenTeam]) */

    /*  useEffect(() => {
         if (tokenTeam && pathname === '/') {
             router.push('/inicio')
             return
         }
     }, [pathname, tokenTeam])
 
     useEffect(() => {
         if (!selectedTeam && pathname === '/inicio') {
             router.push('/')
             return
         }
     }, [pathname, selectedTeam]) */

    const selectedTeam = equipos.find((equipo) => {
        return equipo.nameForAPI === tokenTeam
    })

    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            let getTeam = localStorage.getItem("selectedTeam")

            if (getTeam) {
                setTokenTeam(getTeam)
            }
        }

        if (tokenTeam && pathname === '/') {
            router.push('/inicio')
            return
        }

        if (!selectedTeam && pathname === '/inicio') {
            router.push('/')
            return
        }
    }, [pathname, selectedTeam, tokenTeam, setTokenTeam])

    const handleTeamSelection = (teamName) => {
        if (typeof window !== "undefined" && window.localStorage) {
            localStorage.setItem("selectedTeam", teamName)

            let getTeam = localStorage.getItem("selectedTeam")

            setTokenTeam(getTeam)
        }
    }

    const deleteTeam = () => {
        if (typeof window !== 'undefined' && window.localStorage) {
            localStorage.removeItem("selectedTeam")
            setTokenTeam(null)
        }
    }

    const handleSidebarButton = () => {
        setToggleSidebar(!toggleSidebar)
    }

    const handleDarkModeButton = () => {
        setToggleDarkMode(!toggleDarkMode)
    }

    const contextValue = {
        toggleSidebar,
        setToggleSidebar,
        handleSidebarButton,
        toggleDarkMode,
        setToggleDarkMode,
        handleDarkModeButton,
        screenSize,

        tokenTeam,
        selectedTeam,
        deleteTeam,
        handleTeamSelection,
    }

    return (
        <TogglesAndTokenContext.Provider value={contextValue}>
            {children}
        </TogglesAndTokenContext.Provider>
    )
}
