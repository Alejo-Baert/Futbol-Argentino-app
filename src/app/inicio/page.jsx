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
        </div>
      )
        : <Loading />
      }
    </section>
  )
}

export default page