import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Edit } from 'lucide-react'
import React from 'react'

const AddressCard = () => {
  return (
    <Card className={'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 overflow-hidden'}>
      <CardHeader>
        <div className='flex justify-between'>
          <p className='scroll-m-20 text-3xl font-semibold tracking-tight'>My Address</p>
          <Button variant="outline">
            <Edit />
            edit
          </Button>
        </div>
      </CardHeader>

      <CardContent className={'grid md:grid-cols-2 grid-cols-1 gap-5'}>

        {/* State */}
        <div className='flex flex-col gap-3'>
          <Label htmlFor="state" className={'scroll-m-20 font-semibold tracking-tight'}>Current State <span className='text-red-500'>*</span></Label>
          <Input type='text'
            id='state'
            name='state'
            placeholder='Enter State'
            className='w-full'
          />
        </div>

        {/* City  */}
        <div className='flex flex-col gap-3'>
          <Label htmlFor="city" className={'scroll-m-20 font-semibold tracking-tight'}>Current City <span className='text-red-500'>*</span></Label>
          <Input type='text'
            id='city'
            name='city'
            placeholder='Enter City'
            className='w-full'
          />
        </div>

        {/* Country */}
        <div className='flex flex-col gap-3'>
          <Label htmlFor="country" className={'scroll-m-20 font-semibold tracking-tight'}>Country <span className='text-red-500'>*</span></Label>
          <Input type='text'
            id='country'
            name='country'
            placeholder='Enter country'
            className='w-full'
          />
        </div>

        {/* Zip code */}
        <div className='flex flex-col gap-3'>
          <Label htmlFor="zipCode" className={'scroll-m-20 font-semibold tracking-tight'}>Zip code <span className='text-red-500'>*</span></Label>
          <Input type='number'
            id='zipCode'
            name='zipCode'
            placeholder='Enter country'
            className='w-full'
          />
        </div>
      </CardContent>

    </Card>
  )
}

export default AddressCard
