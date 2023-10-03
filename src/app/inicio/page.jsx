"use client"

import Sidebar from "@/components/Sidebar"
import Dashboard from "@/components/Dashboard"
import Loading from "@/components/Loading"

import { useTogglesAndToken } from "@/context/TogglesAndTokenContext"

const page = () => {

  const { selectedTeam } = useTogglesAndToken()

  return (
    <section className="bg-gray-900">
      {selectedTeam ? (
        <div className="font-barlow lg:flex">
          <Sidebar />
          <Dashboard />

          {/* {toggleSidebar ? (
            <div>
              <div className={`fixed md:w-80 w-72 transition-all duration-150 ${toggleSidebar ? 'ml-0' : 'md:-ml-80 -ml-72'} `}>
                <Sidebar
                  selectedTeam={selectedTeam}
                  deleteTeam={deleteTeam}
                />
              </div>
            </div>
          ) : (
            <div className={`fixed h-full shadow-lg lg:block hidden flex-shrink-0 bg-[--white]`}>
              <img
                src={selectedTeam.img}
                className="w-24 h-24"
                alt={`club ${selectedTeam.name}`}
              />
            </div>
          )} */}
        </div>

      )
        : <Loading />
      }
    </section>
  )
}

export default page