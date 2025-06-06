import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

const AddressCard = () => {
  return (
    <Card>
      <CardHeader>
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          My Address
        </h2>
      </CardHeader>

      <CardContent className={'grid grid-cols-2 gap-5'}>

        {/* State */}
        <div className='flex flex-col gap-3'>
          <Label htmlFor="state" className={'scroll-m-20 font-semibold tracking-tight'}>Current State</Label>
          <Input type='text'
            id='state'
            name='state'
            placeholder='Enter State'
            className='w-full'
          />
        </div>

        {/* City  */}
        <div className='flex flex-col gap-3'>
          <Label htmlFor="city" className={'scroll-m-20 font-semibold tracking-tight'}>Current City</Label>
          <Input type='text'
            id='city'
            name='city'
            placeholder='Enter City'
            className='w-full'
          />
        </div>

        {/* Country */}
        <div className='flex flex-col gap-3'>
          <Label htmlFor="country" className={'scroll-m-20 font-semibold tracking-tight'}>Country</Label>
          <Input type='text'
            id='country'
            name='country'
            placeholder='Enter country'
            className='w-full'
          />
        </div>

        {/* Zip code */}
        <div className='flex flex-col gap-3'>
          <Label htmlFor="zipCode" className={'scroll-m-20 font-semibold tracking-tight'}>Zip code</Label>
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
