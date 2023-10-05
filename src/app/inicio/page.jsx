"use client"

import Sidebar from "@/components/Sidebar"
import Dashboard from "@/components/Dashboard"
import Loading from "@/components/Loading"

import { useTogglesAndToken } from "@/context/TogglesAndTokenContext"

const page = () => {

  const { tokenTeam } = useTogglesAndToken()

  return (
    <section className="bg-gray-900">
      {tokenTeam ? (
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