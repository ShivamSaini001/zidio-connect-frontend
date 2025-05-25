import React from 'react'
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import Layout from './layout/Layout'

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AdminApp() {
  return (
    <>
      {/* sidebar */}
      <Layout/>
    </>
  )
}

export default AdminApp
