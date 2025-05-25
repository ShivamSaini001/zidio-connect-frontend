import { Container } from '@mui/material'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from "@/components/ui/button"
import { UsersTable } from '../customComponents/UsersTable'
import AddNewUserForm from '../customComponents/AddNewUserForm'
import SearchInternshipInterface from '../customComponents/SearchInternshipInterface'
import { InternshipTable } from '../customComponents/InternshipTable'

const InternshipManagement = () => {
  return (
    <Container>
      <Card>
        {/* Card Header (Title) */}
        <CardHeader>
          <CardTitle>
            <div className='space-y-4'>
              <div className='flex items-center justify-between'>
                <h2 className="text-3xl font-bold tracking-tight">Internship Management</h2>
                <Button variant="outline">Export</Button>
              </div>

              <div className='flex items-center justify-between gap-5'>
                {/* Search User */}
                <SearchInternshipInterface />
                {/* Add new User Form */}
                <AddNewUserForm />
              </div>
            </div>
          </CardTitle>
        </CardHeader>

        {/* Card Body (Users) */}
        <CardContent>
          {/* User Data into table */}
          <InternshipTable />
        </CardContent>
      </Card>
    </Container>
  )
}

export default InternshipManagement
