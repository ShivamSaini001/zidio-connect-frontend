import { Container } from '@mui/material'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from "@/components/ui/button"
import { UsersTable } from '../customComponents/UsersTable'
import AddNewUserForm from '../customComponents/AddNewUserForm'
import SearchUserInterface from '../customComponents/SearchUserInterface'

const UserManagement = () => {
  return (
    <Container>
      <Card>
        {/* Card Header (Title) */}
        <CardHeader>
          <CardTitle>
            <div className='space-y-4'>
              <div className='flex items-center justify-between'>
                <h2 className="text-3xl font-bold tracking-tight">User Management</h2>
                <Button variant="outline">Export</Button>
              </div>

              <div className='flex items-center justify-between gap-5'>
                {/* Search User */}
                <SearchUserInterface />
                {/* Add new User Form */}
                <AddNewUserForm />
              </div>
            </div>
          </CardTitle>
        </CardHeader>

        {/* Card Body (Users) */}
        <CardContent>
          {/* User Data into table */}
          <UsersTable />
        </CardContent>
      </Card>
    </Container>
  )
}

export default UserManagement
